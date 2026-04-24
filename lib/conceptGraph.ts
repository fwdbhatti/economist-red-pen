import OpenAI from "openai";
import type {
  ConceptEdge,
  ConceptGraph,
  ConceptNode,
  EdgeKind,
  EdgePolarity,
  InfoBlock,
  Mistake,
} from "./types";

const MODEL = process.env.OPENAI_MODEL ?? "gpt-5.4";
const MIN_EDGE_CONFIDENCE = 0.4;

const CONCEPTS_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["concepts"],
  properties: {
    concepts: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["label", "summary", "block_ids", "salience", "kind"],
        properties: {
          label: { type: "string" },
          summary: { type: "string" },
          block_ids: { type: "array", items: { type: "string" } },
          salience: { type: "number" },
          kind: { type: "string", enum: ["claim", "topic"] },
        },
      },
    },
  },
} as const;

const RELATIONS_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["edges"],
  properties: {
    edges: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["from", "to", "kind", "polarity", "confidence", "rationale"],
        properties: {
          from: { type: "string" },
          to: { type: "string" },
          kind: {
            type: "string",
            enum: ["supports", "contradicts", "elaborates", "cites"],
          },
          polarity: { type: "string", enum: ["positive", "negative"] },
          confidence: { type: "number" },
          rationale: { type: "string" },
        },
      },
    },
  },
} as const;

interface DocInput {
  docId: string;
  name: string;
  text: string;
  blocks?: InfoBlock[];
}

interface RawConcept {
  label: string;
  summary: string;
  block_ids: string[];
  salience: number;
  kind: "claim" | "topic";
}

interface RawEdge {
  from: string;
  to: string;
  kind: EdgeKind;
  polarity: EdgePolarity;
  confidence: number;
  rationale: string;
}

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0.5;
  return Math.max(0, Math.min(1, n));
}

function conceptExtractionPrompt(doc: DocInput, isDraft: boolean): string {
  const blocksHint = doc.blocks?.length
    ? `Block IDs available for grounding (use exact IDs):\n${doc.blocks
        .map((b) => `${b.id}: ${b.text.slice(0, 140).replace(/\s+/g, " ")}`)
        .join("\n")}\n\n`
    : "";

  const kindGuide = isDraft
    ? `Each concept must be classified as either:
- "claim" — a verifiable assertion the article makes (a number, a causal statement, a prediction, an attribution to a source). These are the things a fact-checker would underline.
- "topic" — a background subject the article discusses but does not assert as fact (an idea, a framework, a question, a definition). Topics give the article shape; they are not the things that need backing up.
Aim for a roughly 70/30 split favouring claims.`
    : `Every concept here is from a SOURCE document. Mark its "kind" as "claim" if the source asserts it as a fact or finding, "topic" if it is background framing.`;

  return `Extract the load-bearing concepts in the document below.
Output 6–14 concepts. Skip mere colour and hedges. Each concept must be discrete and load-bearing.

For each concept:
- "label": ≤8 words, neutral framing (no quotes from the text)
- "summary": 1–2 sentences in your own words
- "block_ids": IDs of the source passages where this concept appears (must come from the list provided; can be empty if nothing matches)
- "salience": 0..1 — how central to the document's overall argument
- "kind": see below

${kindGuide}

${blocksHint}DOCUMENT (${doc.name}):
${doc.text.slice(0, 80_000)}`;
}

function relationMappingPrompt(args: {
  conceptsByDoc: Array<{ docId: string; name: string; concepts: ConceptNode[] }>;
  seedContradictions: Array<{
    fromConceptId: string;
    toConceptId: string;
    flaw: string;
  }>;
}): string {
  const flat = args.conceptsByDoc.flatMap((d) =>
    d.concepts.map(
      (c) =>
        `${c.id}  [${d.name}]  ${c.label} — ${c.summary.replace(/\s+/g, " ")}`,
    ),
  );

  const seeds = args.seedContradictions.length
    ? `Pre-flagged contradictions from the editor (include these as 'contradicts' edges if the concepts plausibly correspond):\n${args.seedContradictions
        .map(
          (s) =>
            `- ${s.fromConceptId} ⟷ ${s.toConceptId}: ${s.flaw.slice(0, 240)}`,
        )
        .join("\n")}\n\n`
    : "";

  return `You are mapping the relationships between concepts extracted from an article and its source documents.

Concepts (id  [doc]  label — summary):
${flat.join("\n")}

${seeds}For every meaningful relationship between two concepts, emit one edge.
Rules:
- "from" and "to" must be exact concept IDs from the list above.
- "kind": one of "supports" (one concept reinforces the other), "contradicts" (mutually exclusive or undermines), "elaborates" (one is a sub-claim or expansion of the other), "cites" (one points to the other as evidence).
- "polarity": "positive" for supports/elaborates/cites, "negative" for contradicts.
- "confidence": 0..1. Be honest. Edges below 0.4 will be dropped.
- "rationale": one sentence, plain English, no hedging.
- Do NOT emit self-edges. Do NOT duplicate edges.
- Aim for 8–24 edges total. Prefer cross-document edges (article ↔ source) and edges that change how the article should read.`;
}

async function callJson<T>(
  client: OpenAI,
  prompt: string,
  schemaName: string,
  schema: Record<string, unknown>,
): Promise<T | null> {
  const res = await client.responses.create({
    model: MODEL,
    input: prompt,
    text: {
      format: {
        type: "json_schema",
        name: schemaName,
        schema,
        strict: true,
      },
    },
  });
  const raw = res.output_text;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function makeNodeId(docId: string, idx: number): string {
  return `${docId}::c${idx}`;
}

function findConceptIdForBlock(
  byDoc: Map<string, ConceptNode[]>,
  docId: string,
  blockId: string,
): string | null {
  const list = byDoc.get(docId);
  if (!list) return null;
  for (const c of list) {
    if (c.origin.blockIds.includes(blockId)) return c.id;
  }
  return list[0]?.id ?? null;
}

export async function buildConceptGraph(params: {
  apiKey: string;
  draft: { name: string; text: string; blocks: InfoBlock[] };
  sources: Array<{ name: string; text: string }>;
  mistakes: Mistake[];
}): Promise<ConceptGraph> {
  const client = new OpenAI({ apiKey: params.apiKey });

  const docs: DocInput[] = [
    {
      docId: "draft",
      name: params.draft.name,
      text: params.draft.text,
      blocks: params.draft.blocks,
    },
    ...params.sources.map((s, i) => ({
      docId: `source-${i + 1}`,
      name: s.name,
      text: s.text,
    })),
  ];

  const extractions = await Promise.all(
    docs.map((doc) =>
      callJson<{ concepts: RawConcept[] }>(
        client,
        conceptExtractionPrompt(doc, doc.docId === "draft"),
        "concepts",
        CONCEPTS_SCHEMA as unknown as Record<string, unknown>,
      ).then((r) => ({ doc, concepts: r?.concepts ?? [] })),
    ),
  );

  const draftBlockIds = new Set(params.draft.blocks.map((b) => b.id));

  const nodesByDoc = new Map<string, ConceptNode[]>();
  const allNodes: ConceptNode[] = [];

  for (const { doc, concepts } of extractions) {
    const role = doc.docId === "draft" ? "article" : "source";
    const list: ConceptNode[] = concepts.map((c, idx) => {
      const safeBlocks =
        doc.docId === "draft"
          ? c.block_ids.filter((id) => draftBlockIds.has(id))
          : [];
      const node: ConceptNode = {
        id: makeNodeId(doc.docId, idx),
        label: c.label.trim().slice(0, 80),
        role,
        summary: c.summary.trim(),
        origin: { docId: doc.docId, blockIds: safeBlocks },
        salience: clamp01(c.salience),
        kind: c.kind === "topic" ? "topic" : "claim",
      };
      return node;
    });
    nodesByDoc.set(doc.docId, list);
    allNodes.push(...list);
  }

  const seedContradictions = params.mistakes
    .filter((m) => m.category === "grounding" || m.category === "argumentation")
    .slice(0, 12)
    .map((m) => {
      const draftConceptId = findConceptIdForBlock(
        nodesByDoc,
        "draft",
        m.info_block_id,
      );
      const sourceDocs = [...nodesByDoc.keys()].filter((k) => k !== "draft");
      const sourceConceptId = sourceDocs.length
        ? (nodesByDoc.get(sourceDocs[0])?.[0]?.id ?? null)
        : null;
      if (!draftConceptId || !sourceConceptId) return null;
      return {
        fromConceptId: draftConceptId,
        toConceptId: sourceConceptId,
        flaw: m.flaw,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const conceptsByDoc = [...nodesByDoc.entries()].map(([docId, concepts]) => {
    const doc = docs.find((d) => d.docId === docId)!;
    return { docId, name: doc.name, concepts };
  });

  const nodeIds = new Set(allNodes.map((n) => n.id));

  let edges: ConceptEdge[] = [];
  if (allNodes.length >= 2) {
    const rel = await callJson<{ edges: RawEdge[] }>(
      client,
      relationMappingPrompt({ conceptsByDoc, seedContradictions }),
      "relations",
      RELATIONS_SCHEMA as unknown as Record<string, unknown>,
    );
    const seen = new Set<string>();
    edges = (rel?.edges ?? [])
      .filter(
        (e) =>
          nodeIds.has(e.from) &&
          nodeIds.has(e.to) &&
          e.from !== e.to &&
          clamp01(e.confidence) >= MIN_EDGE_CONFIDENCE,
      )
      .filter((e) => {
        const key = e.from < e.to ? `${e.from}|${e.to}` : `${e.to}|${e.from}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map((e, i) => ({
        id: `e${i}`,
        from: e.from,
        to: e.to,
        kind: e.kind,
        polarity: e.polarity,
        confidence: clamp01(e.confidence),
        rationale: e.rationale.trim(),
        evidence: [],
      }));
  }

  const nodeById = new Map(allNodes.map((n) => [n.id, n]));

  const positiveSourceEdgesByArticleId = new Map<string, number>();
  const anyEdgeBySourceId = new Map<string, number>();

  for (const e of edges) {
    const a = nodeById.get(e.from);
    const b = nodeById.get(e.to);
    if (!a || !b) continue;
    const articleNode =
      a.role === "article" ? a : b.role === "article" ? b : null;
    const sourceNode =
      a.role === "source" ? a : b.role === "source" ? b : null;
    if (articleNode && sourceNode && e.polarity === "positive") {
      positiveSourceEdgesByArticleId.set(
        articleNode.id,
        (positiveSourceEdgesByArticleId.get(articleNode.id) ?? 0) + 1,
      );
    }
    if (sourceNode) {
      anyEdgeBySourceId.set(
        sourceNode.id,
        (anyEdgeBySourceId.get(sourceNode.id) ?? 0) + 1,
      );
    }
  }

  for (const node of allNodes) {
    if (node.role !== "article") continue;
    if (node.kind === "topic") {
      node.support = "topic";
      continue;
    }
    node.support =
      (positiveSourceEdgesByArticleId.get(node.id) ?? 0) > 0
        ? "supported"
        : "unsupported";
  }

  const keptNodes = allNodes.filter((n) => {
    if (n.role !== "source") return true;
    return (anyEdgeBySourceId.get(n.id) ?? 0) > 0;
  });

  const keptIds = new Set(keptNodes.map((n) => n.id));
  const keptEdges = edges.filter(
    (e) => keptIds.has(e.from) && keptIds.has(e.to),
  );

  return {
    model: MODEL,
    generatedAt: new Date().toISOString(),
    nodes: keptNodes,
    edges: keptEdges,
  };
}

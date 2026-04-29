import fs from "node:fs/promises";
import path from "node:path";
import OpenAI from "openai";
import type {
  InfoBlock,
  Mistake,
  MistakeCategory,
  MistakeSeverity,
  ParagraphRef,
  VoiceRule,
} from "./types";
import { tokenizeDraft } from "./tokenize";

const MODEL = process.env.OPENAI_MODEL ?? "gpt-5.4";
const PROMPTS_DIR = path.join(process.cwd(), "prompts");

const MISTAKE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["mistakes"],
  properties: {
    mistakes: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["info_block_id", "severity", "flaw"],
        properties: {
          info_block_id: { type: "string" },
          severity: { type: "string", enum: ["error", "nuance", "opinion"] },
          flaw: { type: "string" },
        },
      },
    },
  },
} as const;

function rulesToPrompt(rules: VoiceRule[]): string {
  const active = rules.filter((r) => r.enabled !== false);
  if (!active.length) {
    return "No explicit voice rules were supplied. Apply The Economist's standard style guide.";
  }
  return active
    .map((r, i) => {
      const items = (r.items ?? []).length
        ? `\n   Items: ${(r.items ?? []).map((x) => `"${x}"`).join(", ")}`
        : "";
      return `${i + 1}. ${r.label}${r.description ? ` — ${r.description}` : ""}${items}`;
    })
    .join("\n");
}

function sourcesToPrompt(
  sources: Array<{ name: string; text: string }>,
): string {
  if (!sources.length) return "(no source documents supplied)";
  return sources
    .map(
      (s, i) =>
        `--- SOURCE ${i + 1} · ${s.name} ---\n${s.text.slice(0, 60_000)}`,
    )
    .join("\n\n");
}

function blocksToPrompt(blocks: InfoBlock[]): string {
  return JSON.stringify(blocks, null, 2);
}

async function loadPrompt(filename: string): Promise<string> {
  const p = path.join(PROMPTS_DIR, filename);
  return fs.readFile(p, "utf8");
}

function renderPrompt(
  template: string,
  subs: Record<string, string>,
): string {
  return template.replace(
    /\{\{\s*([A-Z_]+)\s*\}\}/g,
    (_match, key: string) => subs[key] ?? "",
  );
}

async function runCall(
  client: OpenAI,
  category: MistakeCategory,
  prompt: string,
  blockIds: Set<string>,
): Promise<Mistake[]> {
  const res = await client.responses.create({
    model: MODEL,
    input: prompt,
    text: {
      format: {
        type: "json_schema",
        name: `${category}_mistakes`,
        schema: MISTAKE_SCHEMA,
        strict: true,
      },
    },
  });

  const raw = res.output_text;
  if (!raw) return [];
  let parsed: {
    mistakes: Array<{
      info_block_id: string;
      severity?: string;
      flaw: string;
    }>;
  };
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }

  const ALLOWED: ReadonlySet<MistakeSeverity> = new Set([
    "error",
    "nuance",
    "opinion",
  ]);

  return (parsed.mistakes ?? [])
    .filter((m) => blockIds.has(m.info_block_id) && m.flaw?.trim())
    .map((m) => ({
      id: `${category}-${crypto.randomUUID()}`,
      category,
      severity: (ALLOWED.has(m.severity as MistakeSeverity)
        ? (m.severity as MistakeSeverity)
        : "error") as MistakeSeverity,
      info_block_id: m.info_block_id,
      flaw: m.flaw.trim(),
    }));
}

export async function evaluateDraft(params: {
  draft: string;
  sources: Array<{ name: string; text: string }>;
  rules: VoiceRule[];
  apiKey: string;
}): Promise<{
  model: string;
  blocks: InfoBlock[];
  paragraphs: ParagraphRef[];
  mistakes: Mistake[];
}> {
  const client = new OpenAI({ apiKey: params.apiKey });

  const { blocks, paragraphs } = tokenizeDraft(params.draft);
  const blockIds = new Set(blocks.map((b) => b.id));

  const commonSubs = {
    SOURCES: sourcesToPrompt(params.sources),
    RULES: rulesToPrompt(params.rules),
    ARTICLE_BLOCKS: blocksToPrompt(blocks),
  };

  const hasSources = params.sources.length > 0;

  const [groundingTpl, voiceTpl, argTpl] = await Promise.all([
    hasSources ? loadPrompt("grounding.md") : Promise.resolve(""),
    loadPrompt("voice.md"),
    loadPrompt("argumentation.md"),
  ]);

  const [grounding, voice, argumentation] = await Promise.all([
    hasSources
      ? runCall(
          client,
          "grounding",
          renderPrompt(groundingTpl, commonSubs),
          blockIds,
        )
      : Promise.resolve<Mistake[]>([]),
    runCall(client, "voice", renderPrompt(voiceTpl, commonSubs), blockIds),
    runCall(
      client,
      "argumentation",
      renderPrompt(argTpl, commonSubs),
      blockIds,
    ),
  ]);

  return {
    model: MODEL,
    blocks,
    paragraphs,
    mistakes: [...grounding, ...voice, ...argumentation],
  };
}

"use client";

import dynamic from "next/dynamic";
import { ArrowLeft, HelpCircle, Loader2, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type {
  ConceptEdge,
  ConceptGraph,
  ConceptNode,
  EvaluateResponse,
  InfoBlock,
  SupportStatus,
} from "@/lib/types";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center font-ui text-xs small-caps text-ink-3">
      Loading canvas…
    </div>
  ),
});

interface GraphViewProps {
  result: EvaluateResponse;
  onBack: () => void;
}

interface FGNode {
  id: string;
  label: string;
  role: ConceptNode["role"];
  summary: string;
  salience: number;
  blockIds: string[];
  docId: string;
  support?: SupportStatus;
  kind?: ConceptNode["kind"];
}

interface FGLink {
  id: string;
  source: string;
  target: string;
  kind: ConceptEdge["kind"];
  polarity: ConceptEdge["polarity"];
  confidence: number;
  rationale: string;
}

const SUPPORTED_GREEN = "#1a7a3f";
const UNSUPPORTED_RED = "#b80c09";
const TOPIC_BLACK = "#1a1a1a";
const SOURCE_GREY = "#9a9a9a";

function nodeFill(n: FGNode): string {
  if (n.role === "source") return SOURCE_GREY;
  if (n.support === "supported") return SUPPORTED_GREEN;
  if (n.support === "unsupported") return UNSUPPORTED_RED;
  return TOPIC_BLACK;
}

function nodeStrokeStyle(n: FGNode): { color: string; dashed: boolean } {
  if (n.role === "source") return { color: SOURCE_GREY, dashed: true };
  return { color: nodeFill(n), dashed: false };
}

const POLARITY_COLOR: Record<ConceptEdge["polarity"], string> = {
  positive: SUPPORTED_GREEN,
  negative: UNSUPPORTED_RED,
};

type FilterMode = "all" | "contradictions";

export function GraphView({ result, onBack }: GraphViewProps) {
  const [graph, setGraph] = useState<ConceptGraph | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<FGNode | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<FGLink | null>(null);
  const [filterMode, setFilterMode] = useState<FilterMode>("all");
  const [helpOpen, setHelpOpen] = useState(false);
  const [size, setSize] = useState({ w: 800, h: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  const fetchedRef = useRef(false);

  const blockIndex = useMemo<Map<string, InfoBlock>>(
    () => new Map(result.blocks.map((b) => [b.id, b])),
    [result.blocks],
  );

  const docNameById = useMemo(() => {
    const m = new Map<string, string>();
    const draftRec = result.ingestion.find((i) => i.role === "draft");
    m.set("draft", draftRec?.name ?? "Draft");
    result.ingestion
      .filter((i) => i.role === "source")
      .forEach((s, i) => m.set(`source-${i + 1}`, s.name));
    return m;
  }, [result.ingestion]);

  const fetchGraph = useCallback(async () => {
    if (!result.draftText) {
      setError(
        "Draft text was not preserved on this evaluation. Re-run the audit to enable the graph view.",
      );
      return;
    }
    setLoading(true);
    setError(null);
    setSelectedNode(null);
    setSelectedEdge(null);
    try {
      const draftRec = result.ingestion.find((i) => i.role === "draft");
      const res = await fetch("/api/graph", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          draft: {
            name: draftRec?.name ?? "Draft",
            text: result.draftText,
            blocks: result.blocks,
          },
          sources: result.sources ?? [],
          mistakes: result.mistakes,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Graph build failed.");
      setGraph(data as ConceptGraph);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error.");
    } finally {
      setLoading(false);
    }
  }, [result]);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    fetchGraph();
  }, [fetchGraph]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () =>
      setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const obs = new ResizeObserver(measure);
    obs.observe(el);
    return () => obs.disconnect();
  }, [graph]);

  const data = useMemo<{ nodes: FGNode[]; links: FGLink[] }>(() => {
    if (!graph) return { nodes: [], links: [] };

    const nodes: FGNode[] = graph.nodes.map((n) => ({
      id: n.id,
      label: n.label,
      role: n.role,
      summary: n.summary,
      salience: n.salience,
      blockIds: n.origin.blockIds,
      docId: n.origin.docId,
      support: n.support,
      kind: n.kind,
    }));

    let links: FGLink[] = graph.edges.map((e) => ({
      id: e.id,
      source: e.from,
      target: e.to,
      kind: e.kind,
      polarity: e.polarity,
      confidence: e.confidence,
      rationale: e.rationale,
    }));

    if (filterMode === "contradictions") {
      links = links.filter((l) => l.polarity === "negative");
      const keep = new Set<string>();
      for (const l of links) {
        keep.add(typeof l.source === "string" ? l.source : (l.source as FGNode).id);
        keep.add(typeof l.target === "string" ? l.target : (l.target as FGNode).id);
      }
      return { nodes: nodes.filter((n) => keep.has(n.id)), links };
    }

    return { nodes, links };
  }, [graph, filterMode]);

  const onNodeClick = useCallback((node: FGNode) => {
    setSelectedNode((prev) => (prev?.id === node.id ? null : node));
    setSelectedEdge(null);
  }, []);

  const onLinkClick = useCallback((link: FGLink) => {
    setSelectedEdge((prev) => (prev?.id === link.id ? null : link));
    setSelectedNode(null);
  }, []);

  const onBackgroundClick = useCallback(() => {
    setSelectedNode(null);
    setSelectedEdge(null);
  }, []);

  const totals = useMemo(() => {
    if (!graph)
      return {
        nodes: 0,
        edges: 0,
        contradictions: 0,
        supported: 0,
        unsupported: 0,
        topics: 0,
        sources: 0,
      };
    let supported = 0;
    let unsupported = 0;
    let topics = 0;
    let sources = 0;
    for (const n of graph.nodes) {
      if (n.role === "source") sources++;
      else if (n.support === "supported") supported++;
      else if (n.support === "unsupported") unsupported++;
      else topics++;
    }
    return {
      nodes: graph.nodes.length,
      edges: graph.edges.length,
      contradictions: graph.edges.filter((e) => e.polarity === "negative")
        .length,
      supported,
      unsupported,
      topics,
      sources,
    };
  }, [graph]);

  return (
    <div className="grid h-screen grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section className="relative flex flex-col bg-paper-deep">
        <header className="flex items-center justify-between border-b border-rule bg-paper px-5 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex cursor-pointer items-center gap-1.5 font-ui text-xs small-caps text-ink-2 hover:text-econ-red"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
              Back to results
            </button>
            <span className="font-ui text-xs small-caps text-ink-3">·</span>
            <h2 className="font-display text-sm font-semibold small-caps text-ink">
              Concept graph
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setHelpOpen(true)}
              className="flex cursor-pointer items-center gap-1.5 border border-rule bg-paper px-3 py-1.5 font-ui text-xs small-caps text-ink-2 transition-colors hover:border-ink hover:text-ink"
              aria-label="How to read this graph"
            >
              <HelpCircle className="h-3.5 w-3.5" strokeWidth={1.75} />
              How to read this
            </button>
            <FilterToggle mode={filterMode} onChange={setFilterMode} />
            <button
              onClick={fetchGraph}
              disabled={loading}
              className={cn(
                "flex cursor-pointer items-center gap-1.5 border border-ink bg-paper px-3 py-1.5 font-ui text-xs font-semibold small-caps text-ink transition-colors",
                "hover:border-econ-red hover:text-econ-red",
                "disabled:cursor-not-allowed disabled:border-rule disabled:text-ink-3",
              )}
            >
              {loading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={1.75} />
              ) : (
                <RefreshCw className="h-3.5 w-3.5" strokeWidth={1.75} />
              )}
              {loading ? "Building" : "Rebuild"}
            </button>
          </div>
        </header>

        <div ref={containerRef} className="relative flex-1 overflow-hidden">
          {loading && !graph && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 font-editorial italic text-ink-2">
              <Loader2 className="h-6 w-6 animate-spin text-econ-red" strokeWidth={1.5} />
              <p>Extracting concepts and mapping relations…</p>
              <p className="font-ui text-[11px] small-caps text-ink-3">
                Two LLM calls · ~30–60 seconds
              </p>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
              <div className="border-l-[3px] border-econ-red bg-paper px-5 py-4 font-editorial text-base italic text-ink">
                {error}
              </div>
            </div>
          )}
          {graph && (
            <ForceGraph2D
              graphData={data as unknown as { nodes: object[]; links: object[] }}
              width={size.w}
              height={size.h}
              backgroundColor="#f5f1e8"
              nodeRelSize={6}
              nodeVal={((n: FGNode) => 2 + n.salience * 12) as never}
              nodeLabel={((n: FGNode) => `${n.label} — ${n.summary}`) as never}
              linkColor={((l: FGLink) => POLARITY_COLOR[l.polarity]) as never}
              linkWidth={((l: FGLink) => 0.5 + l.confidence * 2.5) as never}
              linkDirectionalParticles={
                ((l: FGLink) => (l.polarity === "negative" ? 2 : 0)) as never
              }
              linkDirectionalParticleWidth={2}
              linkDirectionalParticleColor={(() => "#b80c09") as never}
              onNodeClick={((n: FGNode) => onNodeClick(n)) as never}
              onLinkClick={((l: FGLink) => onLinkClick(l)) as never}
              onBackgroundClick={onBackgroundClick as never}
              cooldownTicks={120}
              nodeCanvasObject={((n: FGNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const isSource = n.role === "source";
                const baseRadius = isSource ? 2 : 3;
                const radius = baseRadius + n.salience * (isSource ? 5 : 8);
                const x = (n as unknown as { x: number }).x;
                const y = (n as unknown as { y: number }).y;

                ctx.beginPath();
                ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = nodeFill(n);
                ctx.fill();

                const stroke = nodeStrokeStyle(n);
                ctx.strokeStyle = isSource ? stroke.color : "#f5f1e8";
                ctx.lineWidth = (isSource ? 1 : 1.5) / globalScale;
                if (isSource) {
                  ctx.setLineDash([2 / globalScale, 2 / globalScale]);
                } else {
                  ctx.setLineDash([]);
                }
                ctx.stroke();
                ctx.setLineDash([]);

                if (globalScale > 1.0 || n.salience > 0.6) {
                  const fontSize = Math.max(10, 12 / globalScale);
                  ctx.font = `${isSource ? "italic " : ""}${fontSize}px "Source Sans 3", system-ui, sans-serif`;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "top";
                  ctx.fillStyle = isSource ? "#5a5a5a" : "#1a1a1a";
                  ctx.fillText(n.label, x, y + radius + 2);
                }
              }) as never}
            />
          )}
        </div>

        <footer className="flex items-center justify-between gap-4 border-t border-rule bg-paper px-5 py-2 font-mono text-[11px] tabular-nums text-ink-3">
          {graph ? (
            <>
              <span>
                <span className="text-[#1a7a3f]">{totals.supported} supported</span>
                {" · "}
                <span className="text-econ-red">{totals.unsupported} unsupported</span>
                {" · "}
                <span>{totals.topics} topics</span>
                {" · "}
                <span>{totals.sources} source concepts</span>
              </span>
              <span>
                {totals.edges} edges · {totals.contradictions} contradictions · model {graph.model}
              </span>
            </>
          ) : (
            <span>—</span>
          )}
        </footer>
      </section>

      <aside className="flex h-screen flex-col border-l border-rule bg-paper">
        <div className="border-b border-rule px-5 py-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xs font-semibold small-caps text-econ-red">
              Inspector
            </h3>
            {graph && (
              <SupportSummary
                supported={totals.supported}
                unsupported={totals.unsupported}
                topics={totals.topics}
              />
            )}
          </div>
          <p className="mt-1 font-editorial text-sm italic text-ink-2">
            {selectedNode || selectedEdge ? (
              <>
                Showing details for the selected item.{" "}
                <button
                  onClick={onBackgroundClick}
                  className="cursor-pointer not-italic font-ui text-[11px] small-caps text-ink underline underline-offset-2 hover:text-econ-red"
                >
                  Clear
                </button>
              </>
            ) : (
              "Click a node or edge to inspect. The colour key is below."
            )}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {selectedNode && (
            <NodeInspector
              node={selectedNode}
              docName={docNameById.get(selectedNode.docId) ?? selectedNode.docId}
              blocks={selectedNode.blockIds
                .map((id) => blockIndex.get(id))
                .filter((b): b is InfoBlock => !!b)}
            />
          )}
          {selectedEdge && graph && (
            <EdgeInspector
              edge={selectedEdge}
              fromNode={graph.nodes.find((n) => n.id === selectedEdge.source)}
              toNode={graph.nodes.find((n) => n.id === selectedEdge.target)}
            />
          )}
          {!selectedNode && !selectedEdge && graph && <Legend />}
        </div>
      </aside>
      {helpOpen && <HelpOverlay onClose={() => setHelpOpen(false)} />}
    </div>
  );
}

function FilterToggle({
  mode,
  onChange,
}: {
  mode: FilterMode;
  onChange: (m: FilterMode) => void;
}) {
  return (
    <div className="flex border border-rule">
      {(["all", "contradictions"] as FilterMode[]).map((m) => (
        <button
          key={m}
          onClick={() => onChange(m)}
          className={cn(
            "cursor-pointer px-3 py-1.5 font-ui text-[11px] small-caps transition-colors",
            mode === m
              ? "bg-ink text-paper"
              : "bg-paper text-ink-2 hover:text-ink",
          )}
        >
          {m === "all" ? "All edges" : "Contradictions"}
        </button>
      ))}
    </div>
  );
}

function NodeInspector({
  node,
  docName,
  blocks,
}: {
  node: FGNode;
  docName: string;
  blocks: InfoBlock[];
}) {
  const statusBadge = nodeStatusBadge(node);
  return (
    <div className="space-y-4">
      <div>
        <p className="font-ui text-[11px] small-caps text-ink-3">
          {node.role === "source" ? "Source concept" : node.kind === "topic" ? "Article topic" : "Article claim"} · {docName}
        </p>
        <h4 className="mt-1 font-editorial text-lg font-semibold text-ink">
          {node.label}
        </h4>
        {statusBadge && (
          <span
            className="mt-2 inline-block px-2 py-0.5 font-ui text-[10px] font-semibold small-caps"
            style={{
              background: statusBadge.bg,
              color: statusBadge.fg,
            }}
          >
            {statusBadge.label}
          </span>
        )}
        <p className="mt-2 font-editorial text-sm text-ink-2">{node.summary}</p>
        <p className="mt-2 font-mono text-[11px] tabular-nums text-ink-3">
          salience {node.salience.toFixed(2)}
        </p>
      </div>
      {blocks.length > 0 && (
        <div>
          <p className="font-ui text-[11px] small-caps text-ink-3">
            Source passages
          </p>
          <div className="mt-2 space-y-2">
            {blocks.map((b) => (
              <blockquote
                key={b.id}
                className="border-l-2 border-rule pl-3 font-editorial text-sm italic text-ink-2"
              >
                {b.text}
              </blockquote>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function EdgeInspector({
  edge,
  fromNode,
  toNode,
}: {
  edge: FGLink;
  fromNode?: ConceptNode;
  toNode?: ConceptNode;
}) {
  return (
    <div className="space-y-4">
      <div>
        <p className="font-ui text-[11px] small-caps text-ink-3">
          {edge.kind} · {edge.polarity}
        </p>
        <p className="mt-1 font-editorial text-sm text-ink">
          <span
            className={cn(
              "font-semibold",
              edge.polarity === "negative" && "text-econ-red",
            )}
          >
            {fromNode?.label ?? "?"}
          </span>
          <span className="px-2 text-ink-3">
            {edge.polarity === "negative" ? "⟷" : "→"}
          </span>
          <span
            className={cn(
              "font-semibold",
              edge.polarity === "negative" && "text-econ-red",
            )}
          >
            {toNode?.label ?? "?"}
          </span>
        </p>
        <p className="mt-2 font-mono text-[11px] tabular-nums text-ink-3">
          confidence {edge.confidence.toFixed(2)}
        </p>
      </div>
      <div>
        <p className="font-ui text-[11px] small-caps text-ink-3">Rationale</p>
        <p className="mt-1 font-editorial text-sm italic text-ink-2">
          {edge.rationale}
        </p>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="space-y-4 font-ui text-xs text-ink-2">
      <section>
        <p className="font-display small-caps text-ink-3">Article nodes</p>
        <ul className="mt-2 space-y-2">
          <LegendDot
            color={SUPPORTED_GREEN}
            title="Supported claim"
            note="An article claim that at least one source corroborates."
          />
          <LegendDot
            color={UNSUPPORTED_RED}
            title="Unsupported claim"
            note="An article claim with no positive source backing — either contradicted by a source or hanging in air."
          />
          <LegendDot
            color={TOPIC_BLACK}
            title="Topic"
            note="A subject the article discusses but does not assert as a verifiable fact. Topics don't need source backing."
          />
        </ul>
      </section>
      <section>
        <p className="font-display small-caps text-ink-3">Source nodes</p>
        <ul className="mt-2 space-y-2">
          <LegendDot
            color={SOURCE_GREY}
            title="Source concept"
            dashed
            note="A claim or finding pulled from one of your source documents. Only sources that connect to the article are shown."
          />
        </ul>
      </section>
      <section>
        <p className="font-display small-caps text-ink-3">Edges</p>
        <ul className="mt-2 space-y-2">
          <LegendLine
            color={SUPPORTED_GREEN}
            title="Supports / elaborates / cites"
            note="One concept reinforces or expands the other."
          />
          <LegendLine
            color={UNSUPPORTED_RED}
            title="Contradicts"
            note="The two concepts conflict. Animated particles flow along these edges."
          />
        </ul>
      </section>
      <p className="border-t border-rule pt-3 font-editorial text-xs italic text-ink-3">
        Node size reflects salience. Edge width reflects confidence. Drag to
        rearrange, scroll to zoom. Use <span className="not-italic font-ui small-caps">How to read this</span> in the top bar for the full guide.
      </p>
    </div>
  );
}

function LegendDot({
  color,
  title,
  note,
  dashed = false,
}: {
  color: string;
  title: string;
  note: string;
  dashed?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full"
        style={{
          background: color,
          outline: dashed ? `1px dashed ${color}` : undefined,
          outlineOffset: dashed ? "2px" : undefined,
        }}
      />
      <span>
        <span className="font-display text-[12px] font-semibold text-ink">
          {title}
        </span>
        <span className="block font-editorial text-[12px] italic text-ink-2">
          {note}
        </span>
      </span>
    </li>
  );
}

function LegendLine({
  color,
  title,
  note,
}: {
  color: string;
  title: string;
  note: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-2 inline-block h-[3px] w-7 flex-shrink-0"
        style={{ background: color }}
      />
      <span>
        <span className="font-display text-[12px] font-semibold text-ink">
          {title}
        </span>
        <span className="block font-editorial text-[12px] italic text-ink-2">
          {note}
        </span>
      </span>
    </li>
  );
}

function nodeStatusBadge(
  node: FGNode,
): { label: string; bg: string; fg: string } | null {
  if (node.role === "source") return { label: "Source", bg: SOURCE_GREY, fg: "#fff" };
  if (node.support === "supported")
    return { label: "Supported", bg: SUPPORTED_GREEN, fg: "#fff" };
  if (node.support === "unsupported")
    return { label: "Unsupported", bg: UNSUPPORTED_RED, fg: "#fff" };
  if (node.kind === "topic") return { label: "Topic", bg: TOPIC_BLACK, fg: "#fff" };
  return null;
}

function SupportSummary({
  supported,
  unsupported,
  topics,
}: {
  supported: number;
  unsupported: number;
  topics: number;
}) {
  return (
    <div className="flex items-center gap-1 font-mono text-[10px] tabular-nums">
      <span
        className="px-1.5 py-0.5 text-paper"
        style={{ background: SUPPORTED_GREEN }}
        title="Supported article claims"
      >
        {supported}
      </span>
      <span
        className="px-1.5 py-0.5 text-paper"
        style={{ background: UNSUPPORTED_RED }}
        title="Unsupported article claims"
      >
        {unsupported}
      </span>
      <span
        className="px-1.5 py-0.5 text-paper"
        style={{ background: TOPIC_BLACK }}
        title="Article topics (not claims)"
      >
        {topics}
      </span>
    </div>
  );
}

function HelpOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="How to read the concept graph"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-hidden border-2 border-ink bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between border-b border-rule bg-paper-deep px-5 py-4">
          <div>
            <h2 className="font-display text-base font-semibold text-ink">
              How to read this graph
            </h2>
            <p className="mt-1 font-editorial text-sm italic text-ink-2">
              The graph shows whether your article's claims are backed by your source documents.
            </p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer font-ui text-xs small-caps text-ink-2 underline underline-offset-4 hover:text-econ-red"
          >
            Close
          </button>
        </header>
        <div className="max-h-[70vh] space-y-5 overflow-y-auto px-6 py-5 font-editorial text-sm text-ink leading-relaxed">
          <section>
            <h3 className="font-display text-xs font-semibold small-caps text-econ-red">
              The dots
            </h3>
            <p className="mt-1">
              Every dot is a concept the article or one of your sources puts forward. The article's concepts come in three flavours:
            </p>
            <ul className="mt-2 space-y-2 pl-2">
              <HelpItem color={SUPPORTED_GREEN} title="Green — supported claim">
                A factual claim in the article that at least one of your source documents corroborates. Safe to keep.
              </HelpItem>
              <HelpItem color={UNSUPPORTED_RED} title="Red — unsupported claim">
                A factual claim in the article with <em>no</em> positive support from any source. Either no source addresses it, or a source actively contradicts it. Investigate before publishing.
              </HelpItem>
              <HelpItem color={TOPIC_BLACK} title="Black — topic">
                A subject the article talks about but doesn't assert as fact (a framework, a definition, a question). Topics don't need source backing — they're scaffolding, not claims.
              </HelpItem>
              <HelpItem color={SOURCE_GREY} title="Grey, dashed — source concept" dashed>
                A claim or finding pulled from one of your sources. Only sources that link to the article are shown — orphan source concepts are hidden to keep the canvas honest.
              </HelpItem>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-xs font-semibold small-caps text-econ-red">
              The lines
            </h3>
            <p className="mt-1">
              Lines show relationships between two concepts. The colour matches the colour logic above.
            </p>
            <ul className="mt-2 space-y-2 pl-2">
              <HelpItem color={SUPPORTED_GREEN} title="Green line — supports / elaborates / cites" line>
                One concept reinforces or expands the other. A green line from a source to an article claim is what turns the claim's dot green.
              </HelpItem>
              <HelpItem color={UNSUPPORTED_RED} title="Red line — contradicts" line>
                The two concepts conflict. Watch for these — they're the cases where your article says one thing and your source says another. Animated particles flow along these edges.
              </HelpItem>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-xs font-semibold small-caps text-econ-red">
              How to use it
            </h3>
            <ol className="mt-1 list-decimal space-y-2 pl-5">
              <li>
                <strong>Count the red dots first.</strong> Each one is an unsupported claim. The footer at the bottom of the canvas shows the running totals.
              </li>
              <li>
                <strong>Click a red dot.</strong> The Inspector on the right shows the claim, its source passages from the draft, and the rationale for why nothing supports it.
              </li>
              <li>
                <strong>Click a red line.</strong> You'll see the article concept and the source concept that conflict, plus a one-sentence rationale.
              </li>
              <li>
                <strong>Use the "Contradictions" filter.</strong> It dims everything except contradicting edges and their endpoints — the fastest way to triage.
              </li>
              <li>
                <strong>Re-run "Rebuild"</strong> if extraction looks off. The model is non-deterministic; a second pass often surfaces concepts the first missed.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="font-display text-xs font-semibold small-caps text-econ-red">
              Visual encoding
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <strong>Node size</strong> reflects how central the concept is to the document (its salience).
              </li>
              <li>
                <strong>Edge width</strong> reflects the model's confidence in the relationship. Edges below 0.4 confidence are dropped.
              </li>
              <li>
                <strong>Source nodes</strong> are smaller, grey, and dashed — they're evidence, not the subject of the audit.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-display text-xs font-semibold small-caps text-econ-red">
              What the graph is not
            </h3>
            <p className="mt-1">
              This is an <em>extraction</em>, not the article itself. A concept's wording is the model's paraphrase, not your text. Always click through to the source passage in the Inspector before changing the draft.
            </p>
          </section>
        </div>
        <footer className="flex justify-end border-t border-rule bg-paper-deep px-5 py-3">
          <button
            onClick={onClose}
            className="cursor-pointer border border-ink bg-ink px-4 py-1.5 font-ui text-xs font-semibold small-caps text-paper transition-colors hover:bg-econ-red hover:border-econ-red"
          >
            Got it
          </button>
        </footer>
      </div>
    </div>
  );
}

function HelpItem({
  color,
  title,
  children,
  line = false,
  dashed = false,
}: {
  color: string;
  title: string;
  children: React.ReactNode;
  line?: boolean;
  dashed?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      {line ? (
        <span
          className="mt-2 inline-block h-[3px] w-7 flex-shrink-0"
          style={{ background: color }}
        />
      ) : (
        <span
          className="mt-1 inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full"
          style={{
            background: color,
            outline: dashed ? `1px dashed ${color}` : undefined,
            outlineOffset: dashed ? "2px" : undefined,
          }}
        />
      )}
      <span>
        <span className="font-display text-[13px] font-semibold text-ink">
          {title}
        </span>
        <span className="block font-editorial text-[13px] italic text-ink-2">
          {children}
        </span>
      </span>
    </li>
  );
}

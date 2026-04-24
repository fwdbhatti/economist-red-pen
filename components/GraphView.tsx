"use client";

import dynamic from "next/dynamic";
import { ArrowLeft, Loader2, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type {
  ConceptEdge,
  ConceptGraph,
  ConceptNode,
  EvaluateResponse,
  InfoBlock,
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

const ROLE_COLOR: Record<ConceptNode["role"], string> = {
  article: "#b80c09",
  source: "#1a1a1a",
  concept: "#7a7a7a",
};

const POLARITY_COLOR: Record<ConceptEdge["polarity"], string> = {
  positive: "rgba(80, 80, 80, 0.55)",
  negative: "#b80c09",
};

type FilterMode = "all" | "contradictions";

export function GraphView({ result, onBack }: GraphViewProps) {
  const [graph, setGraph] = useState<ConceptGraph | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<FGNode | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<FGLink | null>(null);
  const [filterMode, setFilterMode] = useState<FilterMode>("all");
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
    setSelectedNode(node);
    setSelectedEdge(null);
  }, []);

  const onLinkClick = useCallback((link: FGLink) => {
    setSelectedEdge(link);
    setSelectedNode(null);
  }, []);

  const totals = useMemo(() => {
    if (!graph) return { nodes: 0, edges: 0, contradictions: 0 };
    return {
      nodes: graph.nodes.length,
      edges: graph.edges.length,
      contradictions: graph.edges.filter((e) => e.polarity === "negative")
        .length,
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
              cooldownTicks={120}
              nodeCanvasObject={((n: FGNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
                const radius = 3 + n.salience * 8;
                ctx.beginPath();
                ctx.arc(
                  (n as unknown as { x: number }).x,
                  (n as unknown as { y: number }).y,
                  radius,
                  0,
                  2 * Math.PI,
                  false,
                );
                ctx.fillStyle = ROLE_COLOR[n.role];
                ctx.fill();
                ctx.strokeStyle = "#f5f1e8";
                ctx.lineWidth = 1.5 / globalScale;
                ctx.stroke();

                if (globalScale > 1.2) {
                  const fontSize = Math.max(10, 12 / globalScale);
                  ctx.font = `${fontSize}px "Source Sans 3", system-ui, sans-serif`;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "top";
                  ctx.fillStyle = "#1a1a1a";
                  ctx.fillText(
                    n.label,
                    (n as unknown as { x: number }).x,
                    (n as unknown as { y: number }).y + radius + 2,
                  );
                }
              }) as never}
            />
          )}
        </div>

        <footer className="border-t border-rule bg-paper px-5 py-2 font-mono text-[11px] tabular-nums text-ink-3">
          {graph ? (
            <span>
              {totals.nodes} concepts · {totals.edges} edges · {totals.contradictions} contradictions · model {graph.model}
            </span>
          ) : (
            <span>—</span>
          )}
        </footer>
      </section>

      <aside className="flex h-screen flex-col border-l border-rule bg-paper">
        <div className="border-b border-rule px-5 py-4">
          <h3 className="font-display text-xs font-semibold small-caps text-econ-red">
            Inspector
          </h3>
          <p className="mt-1 font-editorial text-sm italic text-ink-2">
            {selectedNode || selectedEdge
              ? "Hold a node or edge to inspect."
              : "Click a node or edge to inspect."}
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
  return (
    <div className="space-y-4">
      <div>
        <p className="font-ui text-[11px] small-caps text-ink-3">
          {node.role} · {docName}
        </p>
        <h4 className="mt-1 font-editorial text-lg font-semibold text-ink">
          {node.label}
        </h4>
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
    <div className="space-y-3 font-ui text-xs text-ink-2">
      <p className="font-display small-caps text-ink-3">Legend</p>
      <ul className="space-y-1.5">
        <li className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: ROLE_COLOR.article }}
          />
          Article concept
        </li>
        <li className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: ROLE_COLOR.source }}
          />
          Source concept
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-[2px] w-6 bg-econ-red" />
          Contradicts
        </li>
        <li className="flex items-center gap-2">
          <span
            className="inline-block h-[2px] w-6"
            style={{ background: POLARITY_COLOR.positive }}
          />
          Supports / elaborates
        </li>
      </ul>
      <p className="pt-2 font-editorial text-xs italic text-ink-3">
        Node size reflects salience. Edge width reflects confidence. Drag to
        rearrange, scroll to zoom.
      </p>
    </div>
  );
}

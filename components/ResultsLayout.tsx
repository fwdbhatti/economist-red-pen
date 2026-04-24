"use client";

import { Download, Network } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { downloadReport } from "@/lib/downloadReport";
import type { EvaluateResponse, InfoBlock, MistakeCategory } from "@/lib/types";
import { renderDraftHTML } from "./Mark";
import { MistakeCard } from "./MistakeCard";
import { Tally } from "./Tally";

interface ResultsLayoutProps {
  result: EvaluateResponse;
  onReset: () => void;
  onOpenGraph?: () => void;
}

type Tab = "all" | MistakeCategory;

const TABS: Array<{ id: Tab; label: string }> = [
  { id: "all", label: "All" },
  { id: "grounding", label: "Grounding" },
  { id: "voice", label: "Voice" },
  { id: "argumentation", label: "Argument" },
];

export function ResultsLayout({ result, onReset, onOpenGraph }: ResultsLayoutProps) {
  const [activeMistakeId, setActiveMistakeId] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("all");

  const blockIndex = useMemo<Map<string, InfoBlock>>(
    () => new Map(result.blocks.map((b) => [b.id, b])),
    [result.blocks],
  );

  const html = useMemo(
    () => renderDraftHTML(result, activeMistakeId),
    [result, activeMistakeId],
  );

  const filtered = useMemo(() => {
    if (tab === "all") return result.mistakes;
    return result.mistakes.filter((m) => m.category === tab);
  }, [result.mistakes, tab]);

  const tabCounts = useMemo(
    () => ({
      all: result.mistakes.length,
      grounding: result.totals.grounding,
      voice: result.totals.voice,
      argumentation: result.totals.argumentation,
    }),
    [result.mistakes.length, result.totals],
  );

  const scrollToMark = useCallback(() => {
    requestAnimationFrame(() => {
      const el = document.querySelector(
        `mark.redpen[data-active="true"]`,
      ) as HTMLElement | null;
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  const selectFromCard = useCallback(
    (mistakeId: string) => {
      const prev = activeMistakeId;
      setActiveMistakeId(prev === mistakeId ? null : mistakeId);
      if (prev !== mistakeId) scrollToMark();
    },
    [activeMistakeId, scrollToMark],
  );

  const onPaneClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest(
      "mark.redpen",
    ) as HTMLElement | null;
    if (!target) return;
    const mistakeId = target.getAttribute("data-mistake-id");
    if (!mistakeId) return;
    setActiveMistakeId((prev) => (prev === mistakeId ? null : mistakeId));
    const card = document.getElementById(`card-${mistakeId}`);
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const draftRec = result.ingestion.find((i) => i.role === "draft");
  const sourceRecs = result.ingestion.filter((i) => i.role === "source");

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px]">
      <section className="border-r border-rule bg-paper px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-[44rem]">
          <div className="mb-4 space-y-1.5 font-ui text-xs">
            <div>
              <span className="mr-2 font-semibold small-caps text-econ-red">
                Draft ·
              </span>
              <span className="font-mono text-ink-2">
                {draftRec
                  ? `${draftRec.name} (${draftRec.method})`
                  : "—"}
              </span>
            </div>
            <div>
              <span className="mr-2 font-semibold small-caps text-ink-2">
                Sources ·
              </span>
              <span className="font-mono text-ink-2">
                {sourceRecs.length === 0
                  ? "none · grounding desk dark"
                  : sourceRecs
                      .map((s) => `${s.name} (${s.method})`)
                      .join(", ")}
              </span>
            </div>
            <div>
              <span className="mr-2 font-semibold small-caps text-ink-2">
                Model ·
              </span>
              <span className="font-mono text-ink-2">
                {result.model} · {result.blocks.length} info-blocks
              </span>
            </div>
          </div>
          {onOpenGraph && (
            <div className="mb-3 flex justify-end">
              <button
                onClick={onOpenGraph}
                className="flex cursor-pointer items-center gap-1.5 border border-ink bg-paper px-3 py-1.5 font-ui text-xs font-semibold small-caps text-ink transition-colors hover:border-econ-red hover:text-econ-red"
                aria-label="Open concept graph view"
              >
                <Network className="h-3.5 w-3.5" strokeWidth={1.75} />
                Graph view
              </button>
            </div>
          )}
          <div className="rule-strong mb-6" />
          <article className="article-pane mt-4">
            <div
              className="prose-editorial mx-auto"
              dangerouslySetInnerHTML={{ __html: html }}
              onClick={onPaneClick}
            />
            <div className="mx-auto mt-10 max-w-prose">
              <div className="my-6 text-center font-editorial text-ink-3 tracking-[0.5em]">
                *   *   *
              </div>
            </div>
          </article>
          <div className="mt-6">
            <button
              onClick={onReset}
              className="cursor-pointer font-ui text-sm small-caps text-ink-2 underline underline-offset-4 hover:text-econ-red"
            >
              ← Submit new manuscript
            </button>
          </div>
        </div>
      </section>

      <aside className="sticky top-0 flex h-screen flex-col bg-paper">
        <Tally totals={result.totals} />

        <div className="flex items-center justify-between border-b border-rule px-5 py-3">
          <button
            onClick={() => downloadReport(result)}
            disabled={result.mistakes.length === 0}
            className={cn(
              "flex cursor-pointer items-center gap-1.5 border border-ink bg-paper px-3 py-1.5 font-ui text-xs font-semibold small-caps text-ink transition-colors",
              "hover:border-econ-red hover:text-econ-red",
              "disabled:cursor-not-allowed disabled:border-rule disabled:text-ink-3",
            )}
            aria-label="Download audit report as HTML"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
            Download report
          </button>
          <span className="font-ui text-xs small-caps text-ink-3">
            .html
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Filter mistakes by category"
          className="flex border-b border-rule"
        >
          {TABS.map((t) => {
            const isActive = tab === t.id;
            const count = tabCounts[t.id];
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setTab(t.id);
                  setActiveMistakeId(null);
                }}
                className={cn(
                  "flex flex-1 cursor-pointer flex-col items-center gap-0.5 border-b-2 px-2 py-2.5 font-display text-xs font-semibold small-caps transition-colors",
                  isActive
                    ? "border-econ-red text-ink"
                    : "border-transparent text-ink-3 hover:text-ink",
                )}
              >
                <span>{t.label}</span>
                <span className="font-mono text-[11px] font-medium tabular-nums">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="px-5 py-8 font-editorial italic text-ink-2">
              {result.mistakes.length === 0
                ? "No red-lines returned. The manuscript is either clean — or the audit found nothing it was equipped to flag."
                : "No red-lines in this category."}
            </div>
          ) : (
            filtered.map((m) => (
              <MistakeCard
                key={m.id}
                mistake={m}
                block={blockIndex.get(m.info_block_id)}
                active={activeMistakeId === m.id}
                onSelect={() => selectFromCard(m.id)}
              />
            ))
          )}
        </div>
      </aside>
    </div>
  );
}

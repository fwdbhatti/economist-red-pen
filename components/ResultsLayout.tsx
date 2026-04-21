"use client";

import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { EvaluateResponse, InfoBlock } from "@/lib/types";
import { renderDraftHTML } from "./Mark";
import { MistakeCard } from "./MistakeCard";
import { Tally } from "./Tally";

interface ResultsLayoutProps {
  result: EvaluateResponse;
  onReset: () => void;
}

export function ResultsLayout({ result, onReset }: ResultsLayoutProps) {
  const [activeMistakeId, setActiveMistakeId] = useState<string | null>(null);

  const blockIndex = useMemo<Map<string, InfoBlock>>(
    () => new Map(result.blocks.map((b) => [b.id, b])),
    [result.blocks],
  );

  const html = useMemo(
    () => renderDraftHTML(result, activeMistakeId),
    [result, activeMistakeId],
  );

  const scrollToMark = useCallback((blockId: string) => {
    requestAnimationFrame(() => {
      const el = document.querySelector(
        `mark.redpen[data-block-id="${blockId}"]`,
      ) as HTMLElement | null;
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  const handleCardNavigate = useCallback(
    (mistakeId: string, blockId: string) => {
      setActiveMistakeId(mistakeId);
      scrollToMark(blockId);
    },
    [scrollToMark],
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

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section
        className={cn(
          "border-r border-rule bg-paper px-6 py-10 lg:px-10",
          activeMistakeId && "results-focused",
        )}
      >
        <div className="mx-auto max-w-[44rem]">
          <div className="mb-2 font-ui text-xs font-semibold small-caps text-ink-2">
            Manuscript · model {result.model} · {result.blocks.length} info-blocks
            {result.ingestion.length > 0 && (
              <>
                {" · "}
                {result.ingestion
                  .map((i) =>
                    i.method === "ocr"
                      ? `${i.name} (OCR, ${i.pagesOCRed ?? 0}pp)`
                      : `${i.name} (${i.method})`,
                  )
                  .join(", ")}
              </>
            )}
          </div>
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
        <div className="flex-1 overflow-y-auto">
          {result.mistakes.length === 0 ? (
            <div className="px-5 py-8 font-editorial italic text-ink-2">
              No red-lines returned. The manuscript is either clean — or the
              audit found nothing it was equipped to flag.
            </div>
          ) : (
            result.mistakes.map((m) => (
              <MistakeCard
                key={m.id}
                mistake={m}
                block={blockIndex.get(m.info_block_id)}
                active={activeMistakeId === m.id}
                onNavigate={() =>
                  handleCardNavigate(m.id, m.info_block_id)
                }
              />
            ))
          )}
        </div>
      </aside>
    </div>
  );
}

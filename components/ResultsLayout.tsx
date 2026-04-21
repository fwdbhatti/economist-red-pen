"use client";

import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import type { EvaluateResponse } from "@/lib/types";
import { draftToParagraphs, renderDraftWithMarks } from "./Mark";
import { MistakeCard } from "./MistakeCard";
import { Tally } from "./Tally";

interface ResultsLayoutProps {
  result: EvaluateResponse;
  onReset: () => void;
}

export function ResultsLayout({ result, onReset }: ResultsLayoutProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const html = useMemo(() => {
    return draftToParagraphs(
      renderDraftWithMarks(result.draft, result.mistakes, activeId),
    );
  }, [result.draft, result.mistakes, activeId]);

  const handleCardClick = useCallback(
    (id: string) => {
      setActiveId((prev) => (prev === id ? null : id));
      requestAnimationFrame(() => {
        const el = document.querySelector(
          `mark.redpen[data-id="${id}"]`,
        ) as HTMLElement | null;
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    },
    [],
  );

  const onPaneClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "MARK") {
      const id = target.getAttribute("data-id");
      if (id) {
        setActiveId((prev) => (prev === id ? null : id));
        const card = document.getElementById(`card-${id}`);
        card?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section
        className={cn(
          "border-r border-rule px-8 py-10 lg:px-14",
          activeId && "results-focused",
        )}
      >
        <div className="mb-2 font-ui text-xs small-caps text-ink-3">
          Manuscript · model {result.model}
        </div>
        <div className="rule-strong mb-6" />
        <div
          className="prose-editorial mx-auto"
          dangerouslySetInnerHTML={{ __html: html }}
          onClick={onPaneClick}
        />
        <div className="mx-auto mt-12 max-w-prose">
          <div className="my-8 text-center font-editorial text-ink-3 tracking-[0.5em]">
            *   *   *
          </div>
          <button
            onClick={onReset}
            className="cursor-pointer font-ui text-sm small-caps text-ink-2 underline underline-offset-4 hover:text-econ-red"
          >
            ← Submit new manuscript
          </button>
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
                active={activeId === m.id}
                onClick={() => handleCardClick(m.id)}
              />
            ))
          )}
        </div>
      </aside>
    </div>
  );
}

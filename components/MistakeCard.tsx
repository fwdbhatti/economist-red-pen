"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { InfoBlock, Mistake } from "@/lib/types";

interface MistakeCardProps {
  mistake: Mistake;
  block: InfoBlock | undefined;
  active: boolean;
  onSelect: () => void;
}

const CATEGORY_LABEL: Record<Mistake["category"], string> = {
  grounding: "Grounding",
  voice: "Voice",
  argumentation: "Argument",
};

const FLAG_CLASS: Record<Mistake["category"], string> = {
  grounding: "before:bg-econ-red",
  voice: "before:bg-navy",
  argumentation: "before:bg-amber",
};

export function MistakeCard({
  mistake,
  block,
  active,
  onSelect,
}: MistakeCardProps) {
  const previewText = block?.text
    ? block.text.length > 80
      ? block.text.slice(0, 80) + "…"
      : block.text
    : "";

  return (
    <article
      id={`card-${mistake.id}`}
      tabIndex={0}
      role="button"
      aria-expanded={active}
      aria-label={`${CATEGORY_LABEL[mistake.category]} mistake. Click to ${active ? "deselect" : "select and highlight in draft"}.`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "group relative cursor-pointer border-t border-rule px-5 py-4 transition-colors",
        "last:border-b hover:bg-paper-deep focus:bg-paper-deep focus:outline-none",
        active && "bg-paper-deep shadow-[inset_3px_0_0_var(--economist-red)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex flex-1 items-baseline gap-2 font-display text-sm font-bold small-caps text-ink",
            "before:mr-1 before:inline-block before:h-[1.1em] before:w-[3px] before:translate-y-[2px]",
            FLAG_CLASS[mistake.category],
          )}
        >
          <span>{CATEGORY_LABEL[mistake.category]}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 flex-shrink-0 text-ink-2 transition-transform",
            active && "rotate-180",
          )}
          strokeWidth={1.75}
          aria-hidden
        />
      </div>

      {!active && previewText && (
        <p className="mt-2 line-clamp-1 font-editorial text-sm italic text-ink-2">
          {previewText}
        </p>
      )}

      {active && (
        <div className="mt-3 space-y-3">
          {block && (
            <blockquote className="border-l-2 border-rule pl-3 font-editorial text-md italic leading-snug text-ink">
              &ldquo;{block.text}&rdquo;
            </blockquote>
          )}
          <p className="font-editorial text-base text-ink">{mistake.flaw}</p>
          <p className="font-mono text-xs small-caps text-ink-3">
            {mistake.info_block_id}
          </p>
        </div>
      )}
    </article>
  );
}

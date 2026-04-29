"use client";

import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { InfoBlock, Mistake, MistakeSeverity } from "@/lib/types";

interface MistakeCardProps {
  mistake: Mistake;
  block: InfoBlock | undefined;
  active: boolean;
  onSelect: () => void;
  onDismiss: () => void;
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

const SEVERITY_LABEL: Record<MistakeSeverity, string> = {
  error: "Error",
  nuance: "Nuance",
  opinion: "Opinion",
};

const SEVERITY_BADGE: Record<MistakeSeverity, string> = {
  error: "border-econ-red text-econ-red bg-econ-red/5",
  nuance: "border-amber text-amber bg-amber/5",
  opinion: "border-ink-3 text-ink-2 bg-paper-deep border-dashed",
};

const SEVERITY_CARD: Record<MistakeSeverity, string> = {
  error: "",
  nuance: "",
  opinion: "opacity-80",
};

export function MistakeCard({
  mistake,
  block,
  active,
  onSelect,
  onDismiss,
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
      aria-label={`${SEVERITY_LABEL[mistake.severity]} · ${CATEGORY_LABEL[mistake.category]} mistake. Click to ${active ? "deselect" : "select and highlight in draft"}.`}
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
        SEVERITY_CARD[mistake.severity],
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
          <span
            className={cn(
              "ml-1 border px-1.5 py-px font-mono text-[10px] font-semibold uppercase tracking-wider",
              SEVERITY_BADGE[mistake.severity],
            )}
          >
            {SEVERITY_LABEL[mistake.severity]}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDismiss();
            }}
            aria-label="Dismiss this mistake"
            title="Dismiss"
            className="cursor-pointer rounded p-1 text-ink-3 opacity-0 transition-opacity hover:text-econ-red focus:opacity-100 group-hover:opacity-100"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
          <ChevronDown
            className={cn(
              "h-4 w-4 flex-shrink-0 text-ink-2 transition-transform",
              active && "rotate-180",
            )}
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
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

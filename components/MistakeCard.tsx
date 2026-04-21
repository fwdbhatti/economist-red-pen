"use client";

import { ChevronDown, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { InfoBlock, Mistake } from "@/lib/types";

interface MistakeCardProps {
  mistake: Mistake;
  block: InfoBlock | undefined;
  active: boolean;
  onNavigate: () => void;
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

const CLICK_DELAY_MS = 220;

export function MistakeCard({
  mistake,
  block,
  active,
  onNavigate,
}: MistakeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    if (clickTimer.current) return;
    clickTimer.current = setTimeout(() => {
      setExpanded((v) => !v);
      clickTimer.current = null;
    }, CLICK_DELAY_MS);
  };

  const handleDoubleClick = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    setExpanded(true);
    onNavigate();
  };

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
      aria-expanded={expanded}
      aria-label={`${CATEGORY_LABEL[mistake.category]} mistake. Click to ${expanded ? "collapse" : "expand"}. Double-click to jump to the draft.`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
        if (e.key === " ") {
          e.preventDefault();
          handleDoubleClick();
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
        <div className="flex items-center gap-2 text-ink-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleDoubleClick();
            }}
            aria-label="Jump to this mistake in the draft"
            className="cursor-pointer rounded-full p-1 opacity-0 transition-opacity hover:bg-paper-edge hover:text-econ-red group-hover:opacity-100 focus:opacity-100"
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              expanded && "rotate-180",
            )}
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
      </div>

      {!expanded && previewText && (
        <p className="mt-2 line-clamp-1 font-editorial text-sm italic text-ink-2">
          {previewText}
        </p>
      )}

      {expanded && (
        <div className="mt-3 space-y-3">
          {block && (
            <blockquote className="border-l-2 border-rule pl-3 font-editorial text-md italic leading-snug text-ink">
              &ldquo;{block.text}&rdquo;
            </blockquote>
          )}
          <p className="font-editorial text-base text-ink">{mistake.flaw}</p>
          <div className="flex items-center justify-between pt-1">
            <span className="font-mono text-xs small-caps text-ink-3">
              {mistake.info_block_id}
            </span>
            <span className="font-ui text-xs small-caps text-ink-2">
              Double-click card to jump →
            </span>
          </div>
        </div>
      )}
    </article>
  );
}

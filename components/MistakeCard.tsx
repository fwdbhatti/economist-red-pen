import { cn } from "@/lib/cn";
import type { InfoBlock, Mistake } from "@/lib/types";

interface MistakeCardProps {
  mistake: Mistake;
  block: InfoBlock | undefined;
  active: boolean;
  onClick: () => void;
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
  onClick,
}: MistakeCardProps) {
  return (
    <article
      id={`card-${mistake.id}`}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer border-t border-rule px-5 py-5 transition-colors",
        "last:border-b hover:bg-paper-deep",
        active && "bg-paper-deep shadow-[inset_3px_0_0_var(--economist-red)]",
      )}
    >
      <div
        className={cn(
          "flex items-baseline gap-2 font-display text-sm font-semibold small-caps text-ink",
          "before:mr-1 before:inline-block before:h-[1.1em] before:w-[3px] before:translate-y-[2px]",
          FLAG_CLASS[mistake.category],
        )}
      >
        <span>{CATEGORY_LABEL[mistake.category]}</span>
      </div>

      {block && (
        <blockquote className="mt-3 font-editorial text-md italic text-ink">
          &ldquo;{block.text}&rdquo;
        </blockquote>
      )}

      <p className="mt-3 font-editorial text-base text-ink-2">
        {mistake.flaw}
      </p>

      <p className="mt-4 font-mono text-xs small-caps text-ink-3">
        {mistake.info_block_id}
      </p>
    </article>
  );
}

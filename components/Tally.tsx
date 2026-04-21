import type { EvaluateResponse } from "@/lib/types";

export function Tally({ totals }: { totals: EvaluateResponse["totals"] }) {
  const total = totals.grounding + totals.voice + totals.argumentation;
  return (
    <div className="border-b border-rule px-5 pb-4 pt-5">
      <div className="flex items-baseline gap-3">
        <span className="font-editorial text-3xl font-bold text-econ-red tabular-nums">
          {total}
        </span>
        <span className="font-display text-xs font-semibold small-caps text-ink">
          Red-lines
        </span>
      </div>
      <dl className="mt-3 flex gap-5 font-display text-xs small-caps text-ink-2 tabular-nums">
        <div>
          <dt className="inline">Grounding</dt>{" "}
          <dd className="inline font-semibold text-ink">{totals.grounding}</dd>
        </div>
        <div>
          <dt className="inline">Voice</dt>{" "}
          <dd className="inline font-semibold text-ink">{totals.voice}</dd>
        </div>
        <div>
          <dt className="inline">Argument</dt>{" "}
          <dd className="inline font-semibold text-ink">
            {totals.argumentation}
          </dd>
        </div>
      </dl>
    </div>
  );
}

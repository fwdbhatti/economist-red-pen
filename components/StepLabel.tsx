import { cn } from "@/lib/cn";

interface StepLabelProps {
  num: number;
  title: string;
  complete?: boolean;
  children?: React.ReactNode;
}

export function StepLabel({ num, title, complete, children }: StepLabelProps) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span
        className={cn(
          "flex h-7 w-7 flex-shrink-0 items-center justify-center font-display text-sm font-bold tabular-nums transition-colors",
          complete
            ? "bg-econ-red text-white"
            : "border-2 border-ink bg-paper text-ink",
        )}
      >
        {num}
      </span>
      <h2 className="font-editorial text-xl font-bold text-ink">{title}</h2>
      {children && (
        <span className="ml-2 font-ui text-xs small-caps text-ink-2">
          {children}
        </span>
      )}
    </div>
  );
}

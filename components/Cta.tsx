import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CtaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "md" | "lg";
}

export function Cta({
  className,
  children,
  size = "md",
  disabled,
  ...rest
}: CtaProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        "group relative cursor-pointer rounded-cta font-display font-semibold tracking-[0.02em] transition-all duration-200",
        size === "md" ? "px-7 py-[14px] text-md" : "px-9 py-4 text-lg",
        disabled
          ? "cursor-not-allowed border-2 border-rule bg-transparent text-ink-3"
          : "border-2 border-econ-red bg-econ-red text-white shadow-[4px_4px_0_0_var(--ink)] hover:bg-econ-red-ink hover:shadow-[2px_2px_0_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink",
        className,
      )}
    >
      {children}
    </button>
  );
}

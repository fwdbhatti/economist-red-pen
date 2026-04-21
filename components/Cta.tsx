import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Cta({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={cn(
        "cursor-pointer rounded-cta bg-econ-red px-7 py-[14px] font-display text-md font-semibold tracking-[0.02em] text-white transition-colors duration-150",
        "hover:bg-econ-red-ink active:bg-[#8E0804]",
        "disabled:cursor-not-allowed disabled:bg-paper-edge disabled:text-ink-3",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink",
        className,
      )}
    >
      {children}
    </button>
  );
}

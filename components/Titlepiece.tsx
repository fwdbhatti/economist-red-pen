interface TitlepieceProps {
  desk?: string;
}

export function Titlepiece({ desk = "Sub-editing desk" }: TitlepieceProps) {
  const dateline = new Date()
    .toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <header className="flex flex-col items-start">
      <span className="inline-block bg-econ-red px-4 py-[5px] font-display text-lg font-bold italic tracking-[0.01em] text-white">
        The Editorial Red Pen
      </span>
      <div className="mt-3 w-full border-t border-rule pt-2 font-ui text-xs small-caps text-ink-3">
        <time>LONDON · {dateline}</time>
        <span className="mx-2">·</span>
        <span>{desk}</span>
      </div>
    </header>
  );
}

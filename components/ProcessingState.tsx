"use client";

import { useEffect, useState } from "react";

const STATUS_LINES = [
  "Ingesting source documents",
  "Auditing voice parameters",
  "Cross-referencing factual claims",
  "Finalizing red-lines",
];

export function ProcessingState() {
  const [idx, setIdx] = useState(0);
  const [width, setWidth] = useState(8);

  useEffect(() => {
    const i = setInterval(() => {
      setIdx((n) => (n + 1) % STATUS_LINES.length);
    }, 3500);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setWidth((w) => Math.min(95, w + Math.random() * 6));
    }, 900);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-prose flex-col justify-center px-6 py-24">
      <div className="border-l-[3px] border-econ-red pl-5">
        <h2 className="font-display text-sm font-semibold small-caps text-ink">
          Audit in progress
        </h2>
      </div>

      <p className="mt-8 font-editorial text-lg italic text-ink-2">
        <span className="caret-blink">{STATUS_LINES[idx]}</span>
      </p>

      <div className="mt-10 h-[1px] w-full bg-rule">
        <div
          className="h-[1px] bg-econ-red transition-[width] duration-700 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>

      <p className="mt-4 font-ui text-xs small-caps text-ink-3">
        Est. 20–45 seconds
      </p>
    </main>
  );
}

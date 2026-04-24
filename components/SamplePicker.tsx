"use client";

import { FileText, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { SAMPLES, type SamplePack } from "@/lib/sampleArticles";

interface SamplePickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (pack: SamplePack) => void;
}

export function SamplePicker({ open, onClose, onSelect }: SamplePickerProps) {
  const [selectedId, setSelectedId] = useState<string>(SAMPLES[0]?.id ?? "");

  if (!open) return null;

  const selected = SAMPLES.find((s) => s.id === selectedId) ?? SAMPLES[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Choose a sample manuscript"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative grid h-[85vh] w-full max-w-6xl grid-cols-[240px_minmax(0,1fr)_320px] overflow-hidden border-2 border-ink bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-7 w-7 cursor-pointer items-center justify-center text-ink-2 hover:text-econ-red"
          aria-label="Close sample picker"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <aside className="flex flex-col border-r border-rule bg-paper-deep">
          <div className="border-b border-rule px-4 py-3">
            <h2 className="font-display text-xs font-semibold small-caps text-econ-red">
              Sample manuscripts
            </h2>
            <p className="mt-1 font-editorial text-xs italic text-ink-2">
              Pick one to load.
            </p>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {SAMPLES.map((s) => {
              const isActive = s.id === selectedId;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setSelectedId(s.id)}
                    className={cn(
                      "block w-full cursor-pointer border-b border-rule px-4 py-3 text-left transition-colors",
                      isActive
                        ? "bg-paper border-l-[3px] border-l-econ-red"
                        : "hover:bg-paper",
                    )}
                  >
                    <div className="font-display text-sm font-semibold text-ink">
                      {s.label}
                    </div>
                    <div className="mt-1 font-mono text-[10px] tabular-nums text-ink-3 small-caps">
                      {s.sources.length} source{s.sources.length === 1 ? "" : "s"}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="flex flex-col overflow-hidden">
          <header className="border-b border-rule bg-paper px-6 py-3">
            <p className="font-ui text-[11px] small-caps text-ink-3">
              Article preview · {selected.draft.name}
            </p>
            <h3 className="mt-1 font-editorial text-lg font-semibold text-ink">
              {selected.label}
            </h3>
            <p className="mt-1 font-editorial text-sm italic text-ink-2">
              {selected.blurb}
            </p>
          </header>
          <div className="flex-1 overflow-y-auto bg-paper px-6 py-5">
            <pre className="whitespace-pre-wrap font-editorial text-sm leading-relaxed text-ink">
              {selected.draft.text}
            </pre>
          </div>
          <footer className="flex items-center justify-end gap-3 border-t border-rule bg-paper-deep px-6 py-3">
            <button
              onClick={onClose}
              className="cursor-pointer font-ui text-xs small-caps text-ink-2 underline underline-offset-4 hover:text-ink"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSelect(selected);
                onClose();
              }}
              className="cursor-pointer border border-ink bg-ink px-4 py-2 font-ui text-xs font-semibold small-caps text-paper transition-colors hover:bg-econ-red hover:border-econ-red"
            >
              Load this sample →
            </button>
          </footer>
        </section>

        <aside className="flex flex-col overflow-hidden border-l border-rule bg-paper-deep">
          <div className="border-b border-rule px-4 py-3">
            <h2 className="font-display text-xs font-semibold small-caps text-econ-red">
              Source documents
            </h2>
            <p className="mt-1 font-editorial text-xs italic text-ink-2">
              Hover or expand to inspect.
            </p>
          </div>
          <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {selected.sources.map((src) => (
              <SourcePreview key={src.name} name={src.name} text={src.text} />
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

function SourcePreview({ name, text }: { name: string; text: string }) {
  const [expanded, setExpanded] = useState(false);
  const preview = text.split("\n").slice(0, 6).join("\n");
  return (
    <li className="border border-rule bg-paper">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full cursor-pointer items-center gap-2 border-b border-rule bg-paper-deep px-3 py-2 text-left"
      >
        <FileText className="h-3.5 w-3.5 text-ink-2" strokeWidth={1.5} />
        <span className="flex-1 font-mono text-[11px] tabular-nums text-ink">
          {name}
        </span>
        <span className="font-ui text-[10px] small-caps text-ink-3">
          {expanded ? "Hide" : "Expand"}
        </span>
      </button>
      <pre
        className={cn(
          "whitespace-pre-wrap px-3 py-2 font-editorial text-[12px] leading-relaxed text-ink-2",
          !expanded && "max-h-32 overflow-hidden",
        )}
      >
        {expanded ? text : preview}
      </pre>
    </li>
  );
}

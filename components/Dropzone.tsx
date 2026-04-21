"use client";

import { FileText, Upload, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface DropzoneProps {
  label: string;
  helper: string;
  accept: string;
  multiple?: boolean;
  files: File[];
  onFilesChange: (files: File[]) => void;
  /** If provided, enables "paste text" mode via a link on the dropzone */
  pastedText?: string;
  onPastedTextChange?: (text: string) => void;
}

export function Dropzone({
  label,
  helper,
  accept,
  multiple = false,
  files,
  onFilesChange,
  pastedText,
  onPastedTextChange,
}: DropzoneProps) {
  const [dragging, setDragging] = useState(false);
  const [mode, setMode] = useState<"drop" | "paste">(
    pastedText && pastedText.length > 0 ? "paste" : "drop",
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (incoming: FileList | null) => {
      if (!incoming || incoming.length === 0) return;
      const arr = Array.from(incoming);
      onFilesChange(multiple ? [...files, ...arr] : [arr[0]]);
    },
    [files, multiple, onFilesChange],
  );

  const removeFile = (idx: number) => {
    onFilesChange(files.filter((_, i) => i !== idx));
  };

  const hasFiles = files.length > 0;
  const canTogglePaste = !!onPastedTextChange;

  return (
    <section className="flex h-full flex-col">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="section-label">{label}</h3>
        {canTogglePaste && (
          <button
            type="button"
            onClick={() => {
              const next = mode === "drop" ? "paste" : "drop";
              setMode(next);
              if (next === "drop") onPastedTextChange?.("");
              else onFilesChange([]);
            }}
            className="cursor-pointer font-ui text-xs small-caps text-ink-2 underline underline-offset-4 hover:text-econ-red"
          >
            {mode === "drop" ? "Or paste text →" : "← Drop a file"}
          </button>
        )}
      </div>
      <div className="mb-3 border-t border-rule" />

      {mode === "paste" && canTogglePaste ? (
        <textarea
          value={pastedText ?? ""}
          onChange={(e) => onPastedTextChange?.(e.target.value)}
          placeholder="Paste your draft here…"
          className="h-full min-h-[160px] w-full resize-y border border-rule bg-white p-4 font-editorial text-base leading-relaxed text-ink outline-none placeholder:font-editorial placeholder:italic placeholder:text-ink-3 focus:border-ink dark:bg-paper-deep"
        />
      ) : (
        <div
          role="button"
          tabIndex={0}
          aria-label={`${label} upload zone`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            addFiles(e.dataTransfer.files);
          }}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "flex min-h-[120px] cursor-pointer flex-col border-2 border-dashed px-4 py-4 transition-colors",
            "border-rule hover:border-ink focus-visible:border-econ-red",
            dragging && "border-econ-red bg-[color:var(--red-wash)]",
            hasFiles && "items-stretch justify-start",
            !hasFiles && "items-center justify-center text-center",
          )}
        >
          {!hasFiles ? (
            <>
              <Upload
                className="mb-2 h-5 w-5 text-ink-2"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="font-editorial text-base italic text-ink-2">
                Drop {helper} here
              </p>
              <p className="mt-1 font-ui text-xs small-caps text-ink-3">
                or click to select
              </p>
            </>
          ) : (
            <ul className="flex flex-col divide-y divide-rule">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center gap-3 py-2 font-mono text-sm text-ink"
                >
                  <FileText
                    className="h-4 w-4 flex-shrink-0 text-econ-red"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="flex-1 truncate">{f.name}</span>
                  <span className="text-ink-3 tabular-nums">
                    {formatBytes(f.size)}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(i);
                    }}
                    aria-label={`Remove ${f.name}`}
                    className="cursor-pointer rounded-full p-1 text-ink-3 transition-colors hover:bg-paper-deep hover:text-econ-red"
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </li>
              ))}
              {multiple && (
                <li className="py-2 font-ui text-xs small-caps text-ink-2">
                  + Click to add more
                </li>
              )}
            </ul>
          )}
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            className="hidden"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </div>
      )}
    </section>
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

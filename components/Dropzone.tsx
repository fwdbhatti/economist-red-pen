"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface DropzoneProps {
  label: string;
  helper: string;
  accept: string;
  multiple?: boolean;
  files: File[];
  onFilesChange: (files: File[]) => void;
  minHeight?: string;
}

export function Dropzone({
  label,
  helper,
  accept,
  multiple = false,
  files,
  onFilesChange,
  minHeight = "180px",
}: DropzoneProps) {
  const [dragging, setDragging] = useState(false);
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
    const next = files.filter((_, i) => i !== idx);
    onFilesChange(next);
  };

  return (
    <section className="flex flex-col">
      <h3 className="font-display text-xs font-semibold small-caps text-ink">
        {label}
      </h3>
      <div className="mt-2 border-t border-rule" />
      <div
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
        style={{ minHeight: files.length ? undefined : minHeight }}
        className={cn(
          "mt-4 flex cursor-pointer flex-col items-center justify-center border-2 border-dashed px-6 py-6 text-center transition-colors",
          "border-rule hover:border-ink",
          dragging && "border-econ-red bg-[color:var(--red-wash)]",
          files.length > 0 && "block text-left",
        )}
      >
        {files.length === 0 ? (
          <div className="font-editorial italic text-ink-2">
            <p className="text-md">Drop {helper} here</p>
            <p className="mt-1 font-ui text-xs not-italic small-caps text-ink-3">
              or click to select
            </p>
          </div>
        ) : (
          <ul className="w-full divide-y divide-rule">
            {files.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="flex items-center justify-between gap-4 py-2 font-mono text-sm text-ink"
              >
                <span className="flex-1 truncate">
                  <span className="mr-2 text-econ-red">✓</span>
                  {f.name}
                </span>
                <span className="text-ink-3">
                  {formatBytes(f.size)}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(i);
                  }}
                  className="cursor-pointer font-mono text-ink-3 hover:text-econ-red"
                  aria-label={`Remove ${f.name}`}
                >
                  ×
                </button>
              </li>
            ))}
            {multiple && (
              <li className="py-2 font-ui text-xs small-caps text-ink-3">
                + click to add more
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
    </section>
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

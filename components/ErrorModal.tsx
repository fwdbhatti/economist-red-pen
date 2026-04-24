"use client";

import { AlertTriangle, Copy, RefreshCw, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ApiErrorDetail } from "@/lib/types";

interface ErrorModalProps {
  open: boolean;
  message: string;
  detail?: ApiErrorDetail;
  onClose: () => void;
  onRetry?: () => void;
}

export function ErrorModal({
  open,
  message,
  detail,
  onClose,
  onRetry,
}: ErrorModalProps) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;

  const fullText = formatLog(message, detail);

  async function copy() {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="error-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-2xl flex-col overflow-hidden border-2 border-econ-red bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-3 border-b border-rule bg-paper-deep px-5 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-econ-red"
              strokeWidth={1.75}
            />
            <div>
              <h2
                id="error-modal-title"
                className="font-display text-base font-semibold text-ink"
              >
                Evaluation failed
              </h2>
              <p className="mt-1 font-editorial text-sm italic text-ink-2">
                The audit could not be completed. Full log below.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-7 w-7 cursor-pointer items-center justify-center text-ink-2 hover:text-econ-red"
            aria-label="Close error dialog"
          >
            <X className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </header>

        <div className="max-h-[60vh] overflow-y-auto px-5 py-4">
          <section>
            <p className="font-ui text-[11px] small-caps text-ink-3">Message</p>
            <p className="mt-1 break-words font-mono text-sm text-ink">
              {message}
            </p>
          </section>

          {detail?.hint && (
            <section className="mt-4 border-l-[3px] border-econ-red bg-paper-deep px-4 py-3">
              <p className="font-ui text-[11px] small-caps text-econ-red">
                What to try
              </p>
              <p className="mt-1 font-editorial text-sm text-ink">
                {detail.hint}
              </p>
            </section>
          )}

          {(detail?.status || detail?.code || detail?.type || detail?.requestId) && (
            <section className="mt-4 grid grid-cols-2 gap-3">
              {detail.status !== undefined && (
                <Field label="Status" value={String(detail.status)} />
              )}
              {detail.code && <Field label="Code" value={detail.code} />}
              {detail.type && <Field label="Type" value={detail.type} />}
              {detail.requestId && (
                <Field label="Request ID" value={detail.requestId} />
              )}
              {detail.name && <Field label="Error name" value={detail.name} />}
            </section>
          )}

          {detail?.stack && (
            <section className="mt-4">
              <p className="font-ui text-[11px] small-caps text-ink-3">
                Stack (top frames)
              </p>
              <pre className="mt-1 max-h-40 overflow-auto whitespace-pre-wrap border border-rule bg-paper-deep p-3 font-mono text-[11px] leading-relaxed text-ink-2">
                {detail.stack}
              </pre>
            </section>
          )}

          {detail?.raw && (
            <section className="mt-4">
              <p className="font-ui text-[11px] small-caps text-ink-3">
                Raw payload
              </p>
              <pre className="mt-1 max-h-40 overflow-auto whitespace-pre-wrap border border-rule bg-paper-deep p-3 font-mono text-[11px] leading-relaxed text-ink-2">
                {detail.raw}
              </pre>
            </section>
          )}
        </div>

        <footer className="flex items-center justify-end gap-3 border-t border-rule bg-paper-deep px-5 py-3">
          <button
            onClick={copy}
            className={cn(
              "flex cursor-pointer items-center gap-1.5 border border-rule bg-paper px-3 py-1.5 font-ui text-xs small-caps transition-colors",
              copied ? "border-ink text-ink" : "text-ink-2 hover:border-ink hover:text-ink",
            )}
          >
            <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
            {copied ? "Copied" : "Copy log"}
          </button>
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex cursor-pointer items-center gap-1.5 border border-ink bg-ink px-4 py-1.5 font-ui text-xs font-semibold small-caps text-paper transition-colors hover:bg-econ-red hover:border-econ-red"
            >
              <RefreshCw className="h-3.5 w-3.5" strokeWidth={1.75} />
              Retry
            </button>
          )}
          <button
            onClick={onClose}
            className="cursor-pointer font-ui text-xs small-caps text-ink-2 underline underline-offset-4 hover:text-ink"
          >
            Dismiss
          </button>
        </footer>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-rule bg-paper-deep px-3 py-2">
      <p className="font-ui text-[10px] small-caps text-ink-3">{label}</p>
      <p className="mt-0.5 break-all font-mono text-xs text-ink">{value}</p>
    </div>
  );
}

function formatLog(message: string, detail?: ApiErrorDetail): string {
  const lines: string[] = [`Message: ${message}`];
  if (detail) {
    if (detail.status !== undefined) lines.push(`Status: ${detail.status}`);
    if (detail.code) lines.push(`Code: ${detail.code}`);
    if (detail.type) lines.push(`Type: ${detail.type}`);
    if (detail.requestId) lines.push(`Request ID: ${detail.requestId}`);
    if (detail.name) lines.push(`Error name: ${detail.name}`);
    if (detail.hint) lines.push(`Hint: ${detail.hint}`);
    if (detail.stack) lines.push("\nStack:\n" + detail.stack);
    if (detail.raw) lines.push("\nRaw:\n" + detail.raw);
  }
  return lines.join("\n");
}

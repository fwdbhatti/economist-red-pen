"use client";

import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { Cta } from "@/components/Cta";
import { Dropzone } from "@/components/Dropzone";
import { ErrorModal } from "@/components/ErrorModal";
import { GraphView } from "@/components/GraphView";
import { IntroScreen } from "@/components/IntroScreen";
import { ProcessingState } from "@/components/ProcessingState";
import { ResultsLayout } from "@/components/ResultsLayout";
import { RulesEditor } from "@/components/RulesEditor";
import { SamplePicker } from "@/components/SamplePicker";
import { StepLabel } from "@/components/StepLabel";
import { Titlepiece } from "@/components/Titlepiece";
import { packToFiles, type SamplePack } from "@/lib/sampleArticles";
import type { ApiErrorDetail, EvaluateResponse, VoiceRule } from "@/lib/types";
import { ECONOMIST_DEFAULTS } from "@/lib/voicePresets";

type Phase = "intro" | "ingest" | "processing" | "results" | "graph" | "error";

const DEFAULT_RULES: VoiceRule[] = ECONOMIST_DEFAULTS;

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [draft, setDraft] = useState<File[]>([]);
  const [sources, setSources] = useState<File[]>([]);
  const [rules, setRules] = useState<VoiceRule[]>(DEFAULT_RULES);
  const [result, setResult] = useState<EvaluateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorDetail, setErrorDetail] = useState<ApiErrorDetail | undefined>(undefined);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const [skipSources, setSkipSources] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const hasDraft = draft.length === 1;
  const hasSources = sources.length > 0;
  const sourcesResolved = hasSources || skipSources;
  const canSubmit = hasDraft && sourcesResolved;

  async function submit() {
    if (!canSubmit) return;
    setPhase("processing");
    setError(null);
    setErrorDetail(undefined);

    const form = new FormData();
    form.append("draft", draft[0]);
    for (const s of sources) form.append("sources", s);
    form.append("rules", JSON.stringify(rules));

    try {
      const res = await fetch("/api/evaluate", { method: "POST", body: form });
      let data: unknown;
      try {
        data = await res.json();
      } catch {
        throw new Error(
          `Server returned ${res.status} ${res.statusText} (no JSON body).`,
        );
      }
      if (!res.ok) {
        const payload = data as { error?: string; detail?: ApiErrorDetail };
        const message = payload?.error ?? `Evaluation failed (HTTP ${res.status}).`;
        setError(message);
        setErrorDetail(payload?.detail);
        setErrorModalOpen(true);
        setPhase("ingest");
        return;
      }
      setResult(data as EvaluateResponse);
      setPhase("results");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error.";
      setError(message);
      setErrorDetail({
        hint: "The browser could not reach /api/evaluate. Check the dev server is running and there are no CORS / network blockers.",
        raw: err instanceof Error ? `${err.name}: ${err.message}\n${err.stack ?? ""}` : String(err),
      });
      setErrorModalOpen(true);
      setPhase("ingest");
    }
  }

  function reset() {
    setPhase("ingest");
    setResult(null);
    setError(null);
  }

  function loadSample(pack: SamplePack) {
    const { draft: d, sources: s } = packToFiles(pack);
    setDraft([d]);
    setSources(s);
    setSkipSources(false);
  }

  if (phase === "intro") {
    return <IntroScreen onEnter={() => setPhase("ingest")} />;
  }

  if (phase === "processing") return <ProcessingState />;

  if (phase === "results" && result) {
    return (
      <ResultsLayout
        result={result}
        onReset={reset}
        onOpenGraph={() => setPhase("graph")}
      />
    );
  }

  if (phase === "graph" && result) {
    return <GraphView result={result} onBack={() => setPhase("results")} />;
  }

  return (
    <>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 pb-32 pt-10 lg:px-12 lg:pt-16">
        <div className="flex items-start justify-between gap-6">
          <Titlepiece />
          <button
            onClick={() => setPickerOpen(true)}
            className="flex cursor-pointer items-center gap-2 border border-rule bg-paper px-3 py-2 font-ui text-xs small-caps text-ink-2 transition-colors hover:border-ink hover:text-ink"
          >
            <BookOpen className="h-3.5 w-3.5" strokeWidth={1.5} />
            Try a sample
          </button>
          <SamplePicker
            open={pickerOpen}
            onClose={() => setPickerOpen(false)}
            onSelect={loadSample}
          />
        </div>

        <section>
          <p className="font-display text-xs small-caps text-econ-red">
            Now, to work —
          </p>
          <h1 className="mt-2 font-editorial text-2xl font-bold tracking-tight text-ink lg:text-3xl">
            Submit a manuscript for audit
          </h1>
          <p className="mt-3 max-w-prose font-editorial text-md text-ink-2">
            Three desks will read your draft in parallel: fact-checker, style
            editor, red-team critic. Their verdicts are returned in one
            marked-up column.
          </p>
        </section>

        {error && !errorModalOpen && (
          <div
            role="alert"
            className="flex items-center justify-between gap-4 border-l-[3px] border-econ-red bg-paper-deep px-5 py-4 font-editorial text-base italic text-ink"
          >
            <span className="line-clamp-2">{error}</span>
            <button
              onClick={() => setErrorModalOpen(true)}
              className="flex-shrink-0 cursor-pointer font-ui text-xs not-italic small-caps text-ink underline underline-offset-4 hover:text-econ-red"
            >
              View log
            </button>
          </div>
        )}

        <section>
          <StepLabel
            num={1}
            title="Provide the sources to audit against"
            complete={sourcesResolved}
          >
            {skipSources
              ? "Skipped · grounding desk disabled"
              : "Optional · enables grounding desk"}
          </StepLabel>

          {!skipSources ? (
            <>
              <Dropzone
                label="Source documents"
                helper=".pdf, .docx, .md, .txt"
                accept=".pdf,.docx,.md,.txt"
                multiple
                files={sources}
                onFilesChange={setSources}
              />
              <div className="mt-3 flex items-start justify-between gap-4">
                <p className="max-w-prose font-editorial text-sm italic text-ink-2">
                  The grounds of truth. Every factual claim in the draft will
                  be checked against these documents only. Without sources,
                  the grounding desk is dark and only voice and argument are
                  audited.
                </p>
                {!hasSources && (
                  <button
                    type="button"
                    onClick={() => setSkipSources(true)}
                    className="flex-shrink-0 cursor-pointer border border-rule bg-paper px-3 py-2 font-ui text-xs small-caps text-ink-2 transition-colors hover:border-ink hover:text-ink"
                  >
                    Skip sources →
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between gap-4 border border-dashed border-rule bg-paper-deep/50 px-5 py-4">
              <p className="font-editorial text-sm italic text-ink-2">
                Running without sources. The grounding desk will be bypassed
                — only voice and argument audits will run.
              </p>
              <button
                type="button"
                onClick={() => setSkipSources(false)}
                className="flex-shrink-0 cursor-pointer font-ui text-xs small-caps text-ink underline underline-offset-4 hover:text-econ-red"
              >
                Add sources
              </button>
            </div>
          )}
        </section>

        <section>
          <StepLabel
            num={2}
            title="Upload the draft manuscript"
            complete={hasDraft}
          />
          <Dropzone
            label="Draft manuscript"
            helper=".md or .txt"
            accept=".md,.txt,text/markdown,text/plain"
            files={draft}
            onFilesChange={setDraft}
          />
        </section>

        <section>
          <StepLabel
            num={3}
            title="Codify the voice"
            complete={rules.some((r) => r.enabled)}
          >
            Five pillars · Economist preset applied
          </StepLabel>
          <RulesEditor rules={rules} onChange={setRules} />
        </section>
      </main>

      <div className="sticky bottom-0 z-20 border-t-2 border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 lg:px-12">
          <div className="flex items-center gap-3">
            <StatusDot
              complete={sourcesResolved}
              label={skipSources ? "Skipped" : "Sources"}
              optional={skipSources}
            />
            <StatusDot complete={hasDraft} label="Draft" />
            <StatusDot
              complete={rules.some((r) => r.enabled)}
              label="Voice"
              optional
            />
          </div>
          <div className="flex items-center gap-4">
            {!canSubmit && (
              <span className="font-ui text-xs small-caps text-ink-2">
                {!sourcesResolved
                  ? "Add sources or skip"
                  : !hasDraft
                    ? "Add or paste a draft"
                    : ""}
              </span>
            )}
            <ReadyCta canSubmit={canSubmit} onClick={submit} />
          </div>
        </div>
      </div>

      <ErrorModal
        open={errorModalOpen}
        message={error ?? ""}
        detail={errorDetail}
        onClose={() => setErrorModalOpen(false)}
        onRetry={() => {
          setErrorModalOpen(false);
          submit();
        }}
      />
    </>
  );
}

function StatusDot({
  complete,
  label,
  optional = false,
}: {
  complete: boolean;
  label: string;
  optional?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        aria-hidden
        className={
          "inline-block h-2 w-2 rounded-full transition-colors " +
          (complete
            ? "bg-econ-red"
            : optional
              ? "bg-ink-3"
              : "border border-ink bg-transparent")
        }
      />
      <span className="font-ui text-xs small-caps text-ink-2">
        {label}
        {optional && " ·"}
      </span>
    </div>
  );
}

function ReadyCta({
  canSubmit,
  onClick,
}: {
  canSubmit: boolean;
  onClick: () => void;
}) {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    if (canSubmit) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 650);
      return () => clearTimeout(t);
    }
  }, [canSubmit]);
  return (
    <Cta
      onClick={onClick}
      disabled={!canSubmit}
      size="md"
      className={pulse ? "cta-ready" : undefined}
    >
      Evaluate Draft →
    </Cta>
  );
}

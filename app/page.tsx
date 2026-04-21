"use client";

import { useState } from "react";
import { Cta } from "@/components/Cta";
import { Dropzone } from "@/components/Dropzone";
import { IntroScreen } from "@/components/IntroScreen";
import { ProcessingState } from "@/components/ProcessingState";
import { ResultsLayout } from "@/components/ResultsLayout";
import { RulesEditor } from "@/components/RulesEditor";
import { Titlepiece } from "@/components/Titlepiece";
import type { EvaluateResponse, VoiceRule } from "@/lib/types";

type Phase = "intro" | "ingest" | "processing" | "results" | "error";

const DEFAULT_RULES: VoiceRule[] = [
  {
    id: "r1",
    kind: "banned_terms",
    label: "Lexicon — Banned terms",
    description: "Reject corporate jargon outright.",
    items: ["synergy", "leverage", "ecosystem", "disrupt", "innovate"],
  },
  {
    id: "r2",
    kind: "passive_voice",
    label: "Voice — Passive constructions",
    description:
      "Active verbs only; flag be-verb passives unless a direct quote.",
    items: ["direct quotations"],
  },
];

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [draft, setDraft] = useState<File[]>([]);
  const [sources, setSources] = useState<File[]>([]);
  const [rules, setRules] = useState<VoiceRule[]>(DEFAULT_RULES);
  const [result, setResult] = useState<EvaluateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = draft.length === 1 && sources.length > 0;

  async function submit() {
    if (!canSubmit) return;
    setPhase("processing");
    setError(null);

    const form = new FormData();
    form.append("draft", draft[0]);
    for (const s of sources) form.append("sources", s);
    form.append("rules", JSON.stringify(rules));

    try {
      const res = await fetch("/api/evaluate", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Evaluation failed.");
      setResult(data as EvaluateResponse);
      setPhase("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error.");
      setPhase("error");
    }
  }

  function reset() {
    setPhase("ingest");
    setResult(null);
    setError(null);
  }

  if (phase === "intro") {
    return <IntroScreen onEnter={() => setPhase("ingest")} />;
  }

  if (phase === "processing") return <ProcessingState />;

  if (phase === "results" && result) {
    return <ResultsLayout result={result} onReset={reset} />;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-10 lg:px-12 lg:py-16">
      <Titlepiece />

      <section>
        <h1 className="font-editorial text-3xl font-bold tracking-tight text-ink">
          Submit a manuscript for audit
        </h1>
        <p className="mt-3 max-w-prose font-editorial text-md text-ink-2">
          The Red Pen compares your draft against the sources you provide and
          the editorial voice you define. It does not write. It audits. It flags
          the sentences that would not survive a sub-editor.
        </p>
      </section>

      {phase === "error" && error && (
        <div className="border-l-[3px] border-econ-red bg-paper-deep px-5 py-4 font-editorial text-base italic text-ink">
          {error}
          <button
            onClick={reset}
            className="ml-4 cursor-pointer font-ui text-xs not-italic small-caps text-ink-2 underline underline-offset-4"
          >
            Try again
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Dropzone
          label="I · Draft manuscript"
          helper=".md or .txt"
          accept=".md,.txt,text/markdown,text/plain"
          files={draft}
          onFilesChange={setDraft}
        />
        <Dropzone
          label="II · Source documents"
          helper=".pdf, .docx, .md, .txt"
          accept=".pdf,.docx,.md,.txt"
          multiple
          files={sources}
          onFilesChange={setSources}
          minHeight="180px"
        />
      </div>

      <RulesEditor rules={rules} onChange={setRules} />

      <div className="mt-8 flex flex-col items-start gap-3 border-t border-rule pt-6">
        <Cta disabled={!canSubmit} onClick={submit}>
          Evaluate Draft
        </Cta>
        <p className="font-ui text-xs small-caps text-ink-3">
          Requires a draft and at least one source
        </p>
      </div>
    </main>
  );
}

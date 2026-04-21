"use client";

import { Cta } from "./Cta";
import { Titlepiece } from "./Titlepiece";

interface IntroScreenProps {
  onEnter: () => void;
}

export function IntroScreen({ onEnter }: IntroScreenProps) {
  return (
    <>
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 pb-32 pt-10 lg:px-12 lg:pt-16">
      <Titlepiece desk="Leader · the case for the red pen" />

      <section className="mt-4">
        <p className="font-display text-xs small-caps text-econ-red">
          A one-pager
        </p>
        <h1 className="mt-3 max-w-[30ch] font-editorial text-3xl font-bold leading-[1.05] text-ink lg:text-[56px] lg:leading-[1.02]">
          An editorial immune system for AI-assisted journalism.
        </h1>
        <p className="mt-6 max-w-prose font-editorial text-md italic font-medium text-ink">
          The Red Pen does not write. It audits. It sets a draft against its
          source documents and a codified house style, then returns the
          sentences a sub-editor would strike through.
        </p>
      </section>

      <div className="rule-double" />

      <div className="article-pane grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
        <Section
          label="I · The problem"
          className="lg:col-span-12"
        >
          <p>
            Content teams and newsrooms are racing to adopt AI to scale output,
            and in the rush they are dismantling their editorial integrity.
            Human editors are becoming bottlenecks: forced to manually police
            AI-assisted drafts for subtle hallucinations, wishy-washy arguments
            and bloated corporate jargon. Generic grammar checkers and standard
            RAG pipelines are blind to editorial failures. They can catch a
            misspelled word. They cannot catch a weak argument or a misaligned
            tone.
          </p>
        </Section>

        <Section
          label="II · Why it happens"
          className="lg:col-span-12"
        >
          <p>
            Large language models are sycophantic by default, and verbose by
            habit. They reach for both-sides neutrality, pad sentences with
            passive voice to sound authoritative, and confidently hallucinate
            figures when asked to summarise complex material. Evaluating these
            flaws, meanwhile, is irreducibly subjective. Without a system that
            forces editors to codify voice in writing, AI evaluations collapse
            into vibe-based scores. The market is saturated with tools that
            help AI <em>write</em>. There is a void where the tools that
            rigorously evaluate what has been written ought to sit.
          </p>
        </Section>

        <Section
          label="III · The solution"
          className="lg:col-span-12"
        >
          <p>
            An evaluation-only QA platform that acts as a hostile red-team
            against AI-assisted drafts. It does not generate content. It audits
            it — strictly, and across three separate pillars:
          </p>

          <ol className="mt-6 flex flex-col gap-4">
            <Pillar
              num="i"
              name="Absolute grounding"
              body="Every claim in the draft is verified against the source documents you supply. Extrapolations, rounded figures and unwarranted attributions are flagged."
            />
            <Pillar
              num="ii"
              name="Editorial voice"
              body="Banned terms, passive constructions, hedging and house-style breaches are struck through against the rules you define, not an opaque default."
            />
            <Pillar
              num="iii"
              name="Argumentative rigour"
              body="Missing premises, non-sequiturs, question-begging, and conclusions that outrun their evidence are flagged as logical defects — not style issues."
            />
          </ol>

          <p className="mt-6">
            By feeding an entire source document into a large-context-window
            model — rather than the chunked fragments that power conventional
            RAG — the Red Pen avoids the false positives that have made
            retrieval-based checkers unusable for real editorial work. The
            result is an auditable, quote-for-quote copy-edit.
          </p>
        </Section>
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 border-t border-rule pt-8">
        <Cta onClick={onEnter} autoFocus size="lg">
          OK — to the desk
        </Cta>
        <p className="font-ui text-xs small-caps text-ink-2">
          Proceed to the sub-editing desk · submit a manuscript
        </p>
      </div>

      <footer className="mt-16 border-t border-rule pt-4 text-center font-display text-xs small-caps text-ink-2">
        The Editorial Red Pen · v0.1 · Evaluation only. No content is generated.
      </footer>
    </main>

    <div className="sticky bottom-0 z-20 border-t-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3 lg:px-12">
        <span className="font-ui text-xs small-caps text-ink-2">
          Ready to audit a manuscript?
        </span>
        <Cta onClick={onEnter}>OK — to the desk</Cta>
      </div>
    </div>
    </>
  );
}

function Section({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="section-label flex items-center gap-2">
        <span
          aria-hidden
          className="inline-block h-[1em] w-[3px] translate-y-[1px] bg-econ-red"
        />
        {label}
      </h2>
      <div className="mt-2 border-t border-rule" />
      <div className="prose-editorial mt-5 max-w-[38rem]">{children}</div>
    </section>
  );
}

function Pillar({
  num,
  name,
  body,
}: {
  num: string;
  name: string;
  body: string;
}) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-4 border-l-[3px] border-econ-red pl-4">
      <span className="font-display text-sm font-bold small-caps text-econ-red">
        {num}
      </span>
      <div>
        <div className="font-editorial text-md font-bold text-ink">{name}</div>
        <p className="mt-1 font-editorial text-base font-medium text-ink">
          {body}
        </p>
      </div>
    </li>
  );
}

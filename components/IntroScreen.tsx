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
          The Red Pen does not write. It marks. Give it a draft, the sources
          it draws from and the house style it should obey, and it returns
          the sentences a sub-editor would strike out.
        </p>
      </section>

      <div className="rule-double" />

      <div className="article-pane grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
        <Section label="I · The problem" className="lg:col-span-12">
          <p>
            Newsrooms have rushed to adopt AI. The cost has been editorial. A
            generated article can pass a grammar checker and still invent a
            statistic, shrug an argument into neutrality and smuggle in the
            language of a press release. A human editor asked to catch all of
            this at speed cannot. The tools that might help her do not exist.
          </p>
        </Section>

        <Section label="II · Why it happens" className="lg:col-span-12">
          <p>
            Large language models flatter. They prefer neutrality to
            judgement, pad with passive verbs to sound authoritative, and
            invent figures when they cannot find them. The flaws resist
            measurement: without rules written down, any assessment of an AI
            draft becomes a matter of taste. Most tools on the market help AI
            produce more. Almost none examine what it has produced.
          </p>
        </Section>

        <Section label="III · The solution" className="lg:col-span-12">
          <p>
            An audit, not an author. The Red Pen reads a draft against its
            sources and against the house style the editor has defined. Three
            readers go to work at once:
          </p>

          <ol className="mt-6 flex flex-col gap-4">
            <Pillar
              num="i"
              name="Absolute grounding"
              body="The draft is checked against the sources, claim by claim. Rounded figures, unsupported attributions and inferences that exceed the evidence are marked."
            />
            <Pillar
              num="ii"
              name="Editorial voice"
              body="Banned terms, passive constructions and unapproved hedges are struck out. The rules are the editor's, not ours."
            />
            <Pillar
              num="iii"
              name="Argumentative rigour"
              body="Logical holes are flagged where a conclusion outruns its evidence or a premise has gone missing. Style is left alone."
            />
          </ol>

          <p className="mt-6">
            Retrieval tools read sources in fragments and miss half the
            context. The Red Pen reads each source whole. False positives fall
            away, and what remains is a quote-by-quote copy-edit an editor
            can defend.
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

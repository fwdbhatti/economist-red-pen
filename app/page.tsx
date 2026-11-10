import Link from "next/link";
import { Titlepiece } from "@/components/Titlepiece";

const GITHUB = "https://github.com/fwdbhatti/economist-red-pen";

const STEPS = [
  {
    num: "1",
    title: "The case",
    body: "Why AI drafts pass a grammar check and still fail an editor, and how the Red Pen audits them.",
    href: "/slides",
    cta: "Open the slides",
  },
  {
    num: "2",
    title: "The demo",
    body: "Load a sample manuscript, run the three desks and read the marked-up column.",
    href: "/desk",
    cta: "Try the app",
  },
  {
    num: "3",
    title: "The workings",
    body: "The prompts behind the fact-checker, style editor and red-team critic, in full.",
    href: "/prompts",
    cta: "Read the prompts",
  },
] as const;

export default function Cover() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 pb-24 pt-10 lg:px-12 lg:pt-16">
      <Titlepiece desk="Portfolio · AI product case study" />

      <section>
        <p className="font-display text-xs small-caps text-econ-red">
          Auditing, not writing
        </p>
        <h1 className="mt-3 max-w-[22ch] font-editorial text-3xl font-bold leading-[1.05] text-ink lg:text-[56px] lg:leading-[1.02]">
          An editorial immune system for AI-assisted journalism.
        </h1>
        <p className="mt-6 max-w-prose font-editorial text-md text-ink-2">
          Newsrooms adopted AI faster than they built checks for it. The Red
          Pen reads a draft against its sources and house style, using three
          desks in parallel: fact-checker, style editor and red-team critic.
          It returns the sentences a sub-editor would strike out.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href="/desk"
            className="bg-econ-red px-6 py-3 font-ui text-xs font-semibold small-caps text-white transition-colors hover:bg-econ-red-ink"
          >
            Try it on a sample draft →
          </Link>
          <Link
            href="/slides"
            className="font-ui text-xs font-semibold small-caps text-ink underline underline-offset-4 hover:text-econ-red"
          >
            Start with the slides
          </Link>
        </div>
      </section>

      <div className="rule-double" />

      <section aria-labelledby="walkthrough">
        <h2
          id="walkthrough"
          className="section-label"
        >
          A five-minute walkthrough
        </h2>
        <ol className="mt-5 grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.num} className="flex flex-col gap-3 bg-paper p-6">
              <span className="font-display text-xl font-bold text-econ-red">
                {s.num}
              </span>
              <h3 className="font-editorial text-lg font-bold text-ink">
                {s.title}
              </h3>
              <p className="flex-1 font-editorial text-base text-ink-2">
                {s.body}
              </p>
              <Link
                href={s.href}
                className="font-ui text-xs font-semibold small-caps text-ink underline underline-offset-4 hover:text-econ-red"
              >
                {s.cta} →
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-4 font-ui text-xs text-ink-3">
        <span>
          Independent portfolio project by Fawad Bhatti. Not affiliated with
          The Economist.
        </span>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hover:text-econ-red"
        >
          Source on GitHub
        </a>
      </footer>
    </main>
  );
}

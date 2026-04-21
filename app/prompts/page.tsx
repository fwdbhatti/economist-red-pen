import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Editorial Red Pen — Prompts",
  description:
    "The three live system prompts the Red Pen uses: grounding, voice, and argumentation.",
};

export const dynamic = "force-static";

interface PromptEntry {
  slug: string;
  title: string;
  subtitle: string;
  body: string;
}

async function loadPrompts(): Promise<PromptEntry[]> {
  const dir = path.join(process.cwd(), "prompts");
  const entries: Array<Omit<PromptEntry, "body">> = [
    {
      slug: "grounding",
      title: "I · Grounding",
      subtitle: "A rigorous factual auditor. Claim against source, one for one.",
    },
    {
      slug: "voice",
      title: "II · Voice",
      subtitle:
        "A strict copy-editor enforcing the publication's editorial voice.",
    },
    {
      slug: "argumentation",
      title: "III · Argumentation",
      subtitle:
        "A hostile senior editor red-teaming the argument for logic gaps and ignored counter-evidence.",
    },
  ];
  const loaded = await Promise.all(
    entries.map(async (e) => ({
      ...e,
      body: await fs.readFile(path.join(dir, `${e.slug}.md`), "utf8"),
    })),
  );
  return loaded;
}

export default async function PromptsPage() {
  const prompts = await loadPrompts();
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-10 lg:px-12 lg:py-16">
      <header className="flex flex-col items-start">
        <span className="inline-block bg-econ-red px-4 py-[5px] font-display text-lg font-bold italic text-white">
          The Editorial Red Pen
        </span>
        <div className="mt-3 w-full border-t border-rule pt-2 font-ui text-xs small-caps text-ink-3">
          <time>The prompts · the house instructions given to the three desks</time>
        </div>
      </header>

      <section>
        <p className="font-display text-xs small-caps text-econ-red">
          Three prompts · read at request time · editable
        </p>
        <h1 className="mt-2 font-editorial text-3xl font-bold tracking-tight text-ink lg:text-[44px] lg:leading-[1.05]">
          The Red Pen runs on three prompts.
        </h1>
        <p className="mt-4 max-w-prose font-editorial text-md text-ink-2">
          Below are the verbatim system instructions sent to three parallel
          LLM calls when an editor clicks <em>Evaluate Draft</em>. They live
          as Markdown files in the repository and are re-read on every
          request, so a working editor can change a rule without a
          redeploy. The <code className="font-mono text-sm text-ink">{`{{placeholders}}`}</code>{" "}
          are substituted server-side with the manuscript blocks, the
          parsed source text, and the voice rules.
        </p>
      </section>

      <div className="rule-double" />

      <div className="flex flex-col gap-12">
        {prompts.map((p) => (
          <PromptBlock key={p.slug} prompt={p} />
        ))}
      </div>

      <section className="mt-6 border-t border-rule pt-6">
        <p className="font-display text-xs small-caps text-econ-red">
          Strict JSON · info-block IDs · never quoted text
        </p>
        <h2 className="mt-2 font-editorial text-xl font-bold text-ink">
          Why these prompts work
        </h2>
        <div className="prose-editorial mt-3 max-w-prose">
          <p>
            Each call returns strict JSON of the form{" "}
            <code className="font-mono text-sm">
              {`{ mistakes: [ { info_block_id, flaw } ] }`}
            </code>
            . The model never quotes the manuscript back at us; it returns
            the ID of the sentence it is flagging. The UI then renders the
            matching block as a highlighter-marked <em>mark</em> element.
            This removes every class of bug that fuzzy-string-matching used
            to cause, and makes the relationship between an LLM output and
            a DOM node formal.
          </p>
        </div>
      </section>

      <nav className="mt-6 flex items-center gap-6 border-t border-rule pt-6 font-ui text-xs small-caps text-ink-2">
        <a
          href="/"
          className="underline underline-offset-4 hover:text-econ-red"
        >
          ← Back to the desk
        </a>
        <a
          href="/slides"
          className="underline underline-offset-4 hover:text-econ-red"
        >
          Presentation deck →
        </a>
        <a
          href="https://github.com/fwdbhatti/economist-red-pen/tree/main/prompts"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto underline underline-offset-4 hover:text-econ-red"
        >
          Edit on GitHub →
        </a>
      </nav>
    </main>
  );
}

function PromptBlock({ prompt }: { prompt: PromptEntry }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="font-display text-xs font-semibold small-caps text-ink">
          <span className="mr-2 inline-block h-[1em] w-[3px] translate-y-[1px] bg-econ-red" />
          {prompt.title}
        </h2>
        <div className="mt-2 border-t border-rule" />
        <p className="mt-4 font-editorial text-md italic text-ink-2">
          {prompt.subtitle}
        </p>
      </div>
      <pre className="article-pane overflow-x-auto whitespace-pre-wrap break-words font-mono text-[13px] leading-relaxed text-ink">
        {prompt.body}
      </pre>
    </section>
  );
}

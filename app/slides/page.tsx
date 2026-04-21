import type { Metadata } from "next";
import "./slides.css";

export const metadata: Metadata = {
  title: "The Editorial Red Pen — Slides",
  description:
    "Presentation deck for The Editorial Red Pen, an evaluation-only editorial immune system for AI-assisted journalism.",
};

export default function SlidesPage() {
  return (
    <div className="deck">
      <div className="deck-header">
        <span className="deck-flag">The Editorial Red Pen</span>
        <span className="deck-meta">
          Principal PM, AI Platform · round 3 take-home · 30 April 2026
        </span>
        <nav className="deck-nav">
          {Array.from({ length: 10 }).map((_, i) => (
            <a key={i} href={`#s${i + 1}`}>
              {String(i + 1).padStart(2, "0")}
            </a>
          ))}
        </nav>
      </div>

      {/* 1 — TITLE */}
      <section id="s1" className="slide slide-title">
        <span className="deck-flag">The Editorial Red Pen</span>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="kicker">Principal PM · AI Platform</div>
          <h1>The Editorial Red Pen</h1>
          <p className="sub">
            An automated, evaluation-only editorial immune system for
            AI-assisted drafts. It never writes. It only audits.
          </p>
          <div className="meta">
            <strong>Fawad Bhatti</strong> · 30 April 2026 · prepared for
            The Economist in-person interview
          </div>
        </div>
        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>01 / 10</span>
        </div>
      </section>

      {/* 2 — WHY THIS MATTERS */}
      <section id="s2" className="slide">
        <div className="slide-head">
          <span className="brand">01 · Why this matters</span>
          <span className="ctx">
            Editorial integrity in the age of AI-assisted journalism
          </span>
        </div>
        <h2 style={{ whiteSpace: "nowrap" as const }}>
          Editorial integrity is{" "}
          <span style={{ color: "var(--econ-red)" }}>the</span> differentiator
          for The Economist.
        </h2>
        <p className="serif-lead">
          An editorial immune system for AI-assisted journalism.
        </p>

        <div className="why-grid">
          <div className="why-stack">
            <div className="persona">
              <span className="tag">Persona</span>
              <span className="name">Editors & writers</span>
              <span className="note">
                holding the line on house style, rigour, and truth
              </span>
            </div>

            <div className="why-card">
              <h3>Why · start here</h3>
              <p>
                AI-assisted writing isn't going away, and it shouldn't. But
                it has to be guardrailed. For The Economist, trust is the
                product. A single hallucinated claim or jargon-bloated
                sentence erodes a hundred years of credibility.
              </p>
            </div>

            <div className="why-card">
              <h3>The problem</h3>
              <p>
                Editing is already hard. Now editors also police AI drafts
                for hallucinations, weak arguments, and bloated corporate
                jargon — and generic grammar or RAG tools are blind to any
                of it.
              </p>
            </div>

            <div className="why-card dark">
              <h3>The solution · one line</h3>
              <p>
                An evaluation-only auditor that reads every AI-assisted
                draft against its source material and the house style, then
                hands the editor a pre-flighted red-line.
              </p>
            </div>
          </div>

          <div className="pen-illustration">
            <PenSVG />
            <div className="caption">The red pen · never writes</div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>02 / 10</span>
        </div>
      </section>

      {/* 3 — THE PRODUCT / FLOW */}
      <section id="s3" className="slide">
        <div className="slide-head">
          <span className="brand">02 · The product</span>
          <span className="ctx">
            What the editor does, and what the Red Pen returns
          </span>
        </div>
        <h2>Three inputs. One click. A pre-flighted red-line.</h2>
        <p className="serif-lead">
          The editor never prompts the AI. They hand it a draft, sources,
          and rules — then review the findings.
        </p>

        <div className="flow">
          <div className="flow-col">
            <span className="step-label">Step 1 · editor uploads</span>
            <div className="flow-item">
              <div className="t">Draft</div>
              <div className="h">AI-assisted article · .md</div>
            </div>
            <div className="flow-item">
              <div className="t">Source documents</div>
              <div className="h">research · .pdf .docx .txt</div>
            </div>
            <div className="flow-item">
              <div className="t">Voice rules</div>
              <div className="h">house style · ban lists · testable</div>
            </div>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-col">
            <span className="step-label">
              Step 2 · three specialists audit in parallel
            </span>
            <div className="flow-pillar grounding">
              <span className="chip" aria-hidden />
              <div>
                <div className="t">
                  Grounding <span>· grounding colour</span>
                </div>
                <div className="d">
                  Claims not supported by the sources. No invention.
                </div>
              </div>
            </div>
            <div className="flow-pillar voice">
              <span className="chip" aria-hidden />
              <div>
                <div className="t">
                  Editorial voice <span>· voice colour</span>
                </div>
                <div className="d">
                  Violations of the codified house-style rules.
                </div>
              </div>
            </div>
            <div className="flow-pillar argument">
              <span className="chip" aria-hidden />
              <div>
                <div className="t">
                  Argumentative rigour <span>· argument colour</span>
                </div>
                <div className="d">
                  Logic gaps and unchallenged conclusions.
                </div>
              </div>
            </div>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-col">
            <span className="step-label">Step 3 · editor reviews</span>
            <div className="flow-output">
              <div className="t">Red-line review</div>
              <div className="d">
                The draft is rendered with the one active flaw highlighted,
                paired with a stack of mistake cards. Click a card and the
                draft scrolls to the sentence. Every flag carries a
                one-sentence explanation.
              </div>
            </div>
          </div>
        </div>

        <div className="duo">
          <div className="duo-card">
            <div className="lbl">What it is</div>
            <div className="body">
              A QA backstop the editor runs <em>before</em> the real edit —
              turning subjective judgement into an auditable checklist.
            </div>
          </div>
          <div className="duo-card mute">
            <div className="lbl">What it is not</div>
            <div className="body">
              Not a writer. Not a grammar checker. Not a replacement for an
              editor — it sharpens the edit; it never performs it.
            </div>
          </div>
        </div>

        <div className="live-cta">
          <div className="left">
            <span className="kick">Live prototype</span>
            Try the Red Pen yourself.
          </div>
          <a
            href="https://economist-red-pen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            economist-red-pen.vercel.app →
          </a>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>03 / 10</span>
        </div>
      </section>

      {/* 4 — ENGINEERING DECISIONS */}
      <section id="s4" className="slide">
        <div className="slide-head">
          <span className="brand">03 · Engineering decisions</span>
          <span className="ctx">
            What prompting or engineering decisions did you make, and why?
          </span>
        </div>
        <div className="question">Engineering & prompting decisions</div>
        <h2>Three decisions define the architecture.</h2>

        <div className="bullet-block">
          <div className="bullet">
            <div className="label">Decision 01</div>
            <div className="body">
              Info-Block tokenisation with UUIDs.
              <em>
                The LLM returns IDs, not quoted text — so UI highlights never
                drift.
              </em>
            </div>
          </div>
          <div className="bullet">
            <div className="label">Decision 02</div>
            <div className="body">
              Native text extraction first; OCR fallback, never an LLM as a
              PDF reader.
              <em>
                unpdf for digital PDFs; a tesseract sidecar is lined up for
                scans.
              </em>
            </div>
          </div>
          <div className="bullet">
            <div className="label">Decision 03</div>
            <div className="body">
              Three parallel LLM calls with strict JSON-schema output.
              <em>
                Latency capped by the slowest call, not the sum. No regex
                scraping.
              </em>
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>04 / 10</span>
        </div>
      </section>

      {/* 5 — INFRASTRUCTURE */}
      <section id="s5" className="slide">
        <div className="slide-head">
          <span className="brand">04 · Infrastructure</span>
          <span className="ctx">Request lifecycle, stack, chunking</span>
        </div>
        <div className="question">Infrastructure solution design</div>
        <h2>Stateless. Serverless. No database. No vector store.</h2>

        <pre className="infra">{`                  Browser (Next.js client, 4-phase state machine)
                                │  multipart form (draft + sources + rules)
                                ▼
                         Vercel Edge Network
                                │
                                ▼
                  ┌───────────────────────────────────┐
                  │  Next.js Route Handler            │
                  │  /api/evaluate · Node · 300s      │
                  └──────────┬────────────────────────┘
                             │
       ┌─────────────────────┼─────────────────────────┐
       ▼                     ▼                         ▼
  ┌──────────┐         ┌──────────────┐        ┌──────────────────┐
  │  Parser  │         │  Tokeniser   │        │  Evaluator       │
  │ file→txt │────────▶│  text→blocks │───────▶│  3 LLM calls     │
  │ mammoth  │         │ Intl.        │        │  in parallel     │
  │ unpdf    │         │ Segmenter    │        │ (strict JSON)    │
  │          │         │ +UUID per s. │        └─────────┬────────┘
  └──────────┘         └──────────────┘                  │
                                                         ▼
                                                 `}
          <span className="red">OpenAI gpt-5.4</span>
          {`
                                                 `}
          <span className="dim">(~400k ctx, one-shot)</span>
          {`

       `}
          <span className="dim">
            No database · no session store · no persistence · request →
            response → done.
          </span>
        </pre>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>05 / 10</span>
        </div>
      </section>

      {/* 6 — STACK & CHUNKING */}
      <section id="s6" className="slide">
        <div className="slide-head">
          <span className="brand">05 · Stack & chunking</span>
          <span className="ctx">
            What we chose, and what we deliberately rejected
          </span>
        </div>
        <div className="question">The stack & the chunking decision</div>
        <h2>Sources go in whole. Drafts are sentence-ID'd.</h2>

        <div className="stack-table">
          <div className="row">
            <div className="cell hdr">Layer</div>
            <div className="cell hdr">Choice</div>
            <div className="cell hdr">Why this, not that</div>
          </div>
          <Row
            layer="Host · runtime"
            choice="Vercel · Next.js 15 · TS"
            why="Git-linked deploy, serverless 300s limit, type-safe LLM contract from schema to UI."
          />
          <Row
            layer="PDF native extraction"
            choice="unpdf (pdfjs-dist, serverless-safe)"
            why="Digital PDFs carry embedded text. Instant, free, deterministic. Serverless-compatible where pdf-parse is not."
          />
          <Row
            layer="PDF OCR fallback"
            choice="Tesseract sidecar (planned)"
            why="Only when native extraction returns < 100 chars. Lined up as a separate service; the current build flags scans for manual conversion."
          />
          <Row
            layer="DOCX parsing"
            choice="mammoth"
            why="Pure JS, Node-friendly, extracts clean text without style drift."
          />
          <Row
            layer="Sentence tokeniser"
            choice="Intl.Segmenter (Node 20+)"
            why="Built-in, zero-dependency, locale-aware sentence boundaries."
          />
          <Row
            layer="LLM"
            choice="OpenAI gpt-5.4 · strict JSON"
            why="~400k context so whole sources fit in one call. Schema enforcement eliminates parse failures."
          />
          <Row
            layer="Rejected · vector DB + RAG"
            choice="—"
            why="Chunked retrieval causes the false positives we are trying to catch. Claims fail because the supporting sentence sat in an unseen chunk."
            rejected
          />
          <Row
            layer="Rejected · LangChain"
            choice="—"
            why="Three LLM calls with a clear schema do not need a framework. Pure SDK calls are easier to debug and audit."
            rejected
          />
          <Row
            layer="Rejected · Python sidecar"
            choice="—"
            why="Second deploy pipeline, second hosting target, cross-service latency. Node equivalents are 90 per cent as good for 10 per cent of the operational cost."
            rejected
          />
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>06 / 10</span>
        </div>
      </section>

      {/* 7 — WALKTHROUGH */}
      <section id="s7" className="slide">
        <div className="slide-head">
          <span className="brand">06 · Walkthrough</span>
          <span className="ctx">The red-line review UI</span>
        </div>
        <div className="question">What the editor sees</div>
        <h2>Two panes. Click a flaw — the draft scrolls to the sentence.</h2>

        <div className="ui-mockup">
          <div className="ui-pane">
            <h5>Draft · rendered with the active flaw highlighted</h5>
            <p>
              Inflation{" "}
              <span className="mark-grounding">
                plummeted to 4.2% last quarter
              </span>
              , marking a turning point for the central bank's strategy.
            </p>
            <p>
              The finance minister said it was{" "}
              <span className="mark-voice">
                absolutely critical to leverage
              </span>{" "}
              fiscal tools <span className="mark-voice">going forward</span>.
            </p>
            <p>
              <span className="mark-argument">Most economists now agree</span>{" "}
              that the tightening cycle is effectively over.
            </p>
            <p>
              The chancellor hailed the result as{" "}
              <span className="mark-grounding">
                the lowest figure in a decade
              </span>
              .
            </p>
          </div>
          <div className="ui-pane">
            <h5>Stack of mistake cards</h5>
            <div className="audit-item">
              <div className="tag">Grounding · fail</div>
              <div className="msg">
                Source states inflation is 3.2%, not 4.2%. The adjective
                "plummeted" also misrepresents a mild fluctuation.
              </div>
            </div>
            <div className="audit-item navy">
              <div className="tag">Voice · warn</div>
              <div className="msg">
                Banned terms: "leverage", "going forward". Replace with
                specific verbs.
              </div>
            </div>
            <div className="audit-item amber">
              <div className="tag">Argument · fail</div>
              <div className="msg">
                "Most economists now agree" — unsupported. Source contains
                dissenting views from the ECB and two cited academics.
              </div>
            </div>
            <div className="audit-item">
              <div className="tag">Grounding · fail</div>
              <div className="msg">
                "Lowest in a decade" — the sources only cover the last five
                years.
              </div>
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>07 / 10</span>
        </div>
      </section>

      {/* 8 — FAILURES & PIVOTS */}
      <section id="s8" className="slide">
        <div className="slide-head">
          <span className="brand">07 · Failures & pivots</span>
          <span className="ctx">
            What did not work, and what did you do about it?
          </span>
        </div>
        <div className="question">Failures & pivots</div>
        <h2>Three dead ends. Three hard pivots.</h2>

        <div className="fail-block">
          <div className="fail-row">
            <div className="flaw">
              Flaw 01 · Building a generic hallucination checker.
            </div>
            <div className="pivot">
              <strong>Pivot</strong>Narrowed scope to an "Editorial Voice"
              enforcer that matches the publication's specific DNA —
              otherwise it is not novel.
            </div>
          </div>
          <div className="fail-row">
            <div className="flaw">
              Flaw 02 · Subjective AI "vibes" grading.
            </div>
            <div className="pivot">
              <strong>Pivot</strong>Forced editors to codify strict, testable
              rules: banned terms, active voice, no hedging. Testable beats
              subjective.
            </div>
          </div>
          <div className="fail-row">
            <div className="flaw">
              Flaw 03 · PDF-to-HTML highlighting broke constantly.
            </div>
            <div className="pivot">
              <strong>Pivot</strong>Split drafts from sources. Drafts are
              Markdown only so the DOM is predictable. Sources can be
              anything; the LLM sees only their extracted text.
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>08 / 10</span>
        </div>
      </section>

      {/* 9 — MARKET REALITY */}
      <section id="s9" className="slide">
        <div className="slide-head">
          <span className="brand">08 · Market reality</span>
          <span className="ctx">
            What this reveals about current AI tooling for elite media
          </span>
        </div>
        <div className="question">
          Four limitations exposed by this build
        </div>
        <h2>
          Standard LLMs are trained to please everyone. Elite publications are
          defined by exclusion.
        </h2>

        <div className="limits-grid">
          <div className="limit-card">
            <div className="num">01</div>
            <div>
              <h4>Regression to the mean vs prescriptive authority</h4>
              <p>
                AI defaults to agreeable neutrality. The Economist is
                prescriptive — a classical-liberal worldview that tells
                policymakers what to do. Generic AI cannot hold a confident
                stance without collapsing into hyperbole.
              </p>
            </div>
          </div>
          <div className="limit-card">
            <div className="num">02</div>
            <div>
              <h4>Lexical bloat vs Orwellian clarity</h4>
              <p>
                AI equates intelligence with complexity: passive voice,
                jargon, "leverage", "delve", "multifaceted". The Economist
                equates intelligence with brevity. The Red Pen fights the
                model's base instinct to bloat.
              </p>
            </div>
          </div>
          <div className="limit-card">
            <div className="num">03</div>
            <div>
              <h4>Fact-checking vs truth-checking</h4>
              <p>
                AI verifies the number and ignores the adjective beside it.
                "GDP fell 2%" passes. "The economy plummeted by 2%" passes
                too. One is true; the other is dishonest. Stock RAG sees no
                difference.
              </p>
            </div>
          </div>
          <div className="limit-card">
            <div className="num">04</div>
            <div>
              <h4>Synthetic coherence vs argumentative rigour</h4>
              <p>
                LLMs are completion engines. Fed contradictory sources, they
                smooth the potholes. Good journalism lives in those
                potholes. AI is bad at devil's-advocate against its own
                output, unless forced to red-team — which is exactly what
                pillar three does.
              </p>
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>09 / 10</span>
        </div>
      </section>

      {/* 10 — ROADMAP */}
      <section id="s10" className="slide">
        <div className="slide-head">
          <span className="brand">09 · Roadmap</span>
          <span className="ctx">What next, with an engineering team</span>
        </div>
        <div className="question">The roadmap</div>
        <h2>From prompt engineering to a tuned, multi-modal, in-situ platform.</h2>

        <div className="phase-block">
          <div className="phase">
            <div className="tag">Phase 01</div>
            <div className="name">Fine-tuned "judge" model</div>
            <p>
              Replace prompt engineering for voice. Fine-tune a smaller,
              faster model on roughly 10,000 human-edited Economist articles
              so the judge instinctively knows house style.
            </p>
          </div>
          <div className="phase">
            <div className="tag">Phase 02</div>
            <div className="name">Multi-modal evidence checking</div>
            <p>
              Audit charts and tables alongside text. Does the prose align
              with the data inside the uploaded figures? The adjective gap,
              extended to visuals.
            </p>
          </div>
          <div className="phase">
            <div className="tag">Phase 03</div>
            <div className="name">IDE integration</div>
            <p>
              Kill the standalone web app. Embed inside Google Docs or the
              internal CMS — where journalists actually write. The tool lives
              at the point of friction.
            </p>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>10 / 10</span>
        </div>
      </section>

      {/* CLOSING */}
      <section id="s11" className="slide slide-closing">
        <div className="slide-head">
          <span className="brand">Thank you</span>
          <span className="ctx">Questions & discussion</span>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="kicker">Closing</div>
          <h1>
            You cannot buy a generic AI tool
            <br />
            to scale an elite newsroom.
          </h1>
          <p>
            The AI does not understand the publication's brand. It only
            understands probability. The Economist's edge in AI will come
            from the most defensible trust layer between model output and
            subscriber — not from the best model. That is the platform I
            want to build.
          </p>
          <div className="sig">
            Fawad Bhatti · f.e.bhatti@gmail.com · +44 (london) ·
            economist-red-pen.vercel.app
          </div>
        </div>
        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>— end —</span>
        </div>
      </section>
    </div>
  );
}

function Row({
  layer,
  choice,
  why,
  rejected,
}: {
  layer: string;
  choice: string;
  why: string;
  rejected?: boolean;
}) {
  return (
    <div className="row">
      <div className={`cell tool ${rejected ? "rejected" : ""}`}>{layer}</div>
      <div className="cell" style={{ fontStyle: rejected ? "italic" : "normal" }}>
        {choice}
      </div>
      <div className="cell why">{why}</div>
    </div>
  );
}

function PenSVG() {
  return (
    <svg viewBox="0 0 220 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b00d07" />
          <stop offset="50%" stopColor="#e3120b" />
          <stop offset="100%" stopColor="#8a0906" />
        </linearGradient>
        <linearGradient id="penCap" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      <g stroke="#e8ddc5" strokeWidth="1" opacity="0.8">
        <line x1="0" y1="60" x2="220" y2="60" />
        <line x1="0" y1="120" x2="220" y2="120" />
        <line x1="0" y1="180" x2="220" y2="180" />
        <line x1="0" y1="240" x2="220" y2="240" />
        <line x1="0" y1="300" x2="220" y2="300" />
        <line x1="0" y1="360" x2="220" y2="360" />
        <line x1="0" y1="420" x2="220" y2="420" />
      </g>
      <g stroke="#e3120b" strokeWidth="3" strokeLinecap="round" opacity="0.35">
        <path d="M 20 85 Q 70 78 130 90" fill="none" />
        <path d="M 30 145 L 115 142" fill="none" />
        <path d="M 18 205 Q 80 210 150 200" fill="none" strokeWidth="2" />
      </g>
      <g stroke="#e3120b" strokeWidth="2.5" fill="none" opacity="0.5">
        <path d="M 40 260 L 52 250 L 64 260" />
      </g>
      <g transform="translate(110 260) rotate(18) translate(-110 -260)">
        <polygon points="108,440 112,440 115,462 105,462" fill="#1a1a1a" />
        <polygon points="108,440 112,440 113,452 107,452" fill="#e3120b" />
        <line x1="110" y1="440" x2="110" y2="462" stroke="#0a0a0a" strokeWidth="0.5" />
        <rect x="96" y="150" width="28" height="290" fill="url(#penBody)" />
        <rect x="100" y="152" width="4" height="286" fill="#ffffff" opacity="0.25" />
        <rect x="118" y="152" width="4" height="286" fill="#000000" opacity="0.2" />
        <rect x="94" y="432" width="32" height="8" fill="#bfbfbf" />
        <rect x="94" y="432" width="32" height="2" fill="#eeeeee" />
        <rect x="94" y="438" width="32" height="2" fill="#7a7a7a" />
        <rect x="94" y="70" width="32" height="82" fill="url(#penCap)" />
        <rect x="98" y="72" width="3" height="78" fill="#ffffff" opacity="0.2" />
        <path d="M 94 70 Q 110 62 126 70 L 126 78 L 94 78 Z" fill="#1a1a1a" />
        <rect x="103" y="78" width="5" height="56" rx="1" fill="#d4d4d4" />
        <rect x="103" y="78" width="5" height="4" rx="1" fill="#f0f0f0" />
        <circle cx="105.5" cy="128" r="2.5" fill="#9a9a9a" />
        <rect x="94" y="148" width="32" height="6" fill="#bfbfbf" />
        <rect x="94" y="260" width="32" height="20" fill="#121212" />
        <text
          x="110"
          y="274"
          textAnchor="middle"
          fill="#e3120b"
          fontFamily="IBM Plex Sans Condensed, sans-serif"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1"
        >
          RED
        </text>
      </g>
      <circle cx="175" cy="460" r="5" fill="#e3120b" opacity="0.6" />
      <circle cx="172" cy="470" r="2" fill="#e3120b" opacity="0.4" />
      <path
        d="M 30 450 L 40 460 L 58 440"
        stroke="#e3120b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

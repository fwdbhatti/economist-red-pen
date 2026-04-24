import type { Metadata } from "next";
import "./slides.css";

export const metadata: Metadata = {
  title: "The Editorial Red Pen — Slides",
  description:
    "Presentation deck for The Editorial Red Pen, an evaluation-only editorial immune system for AI-assisted journalism.",
};

const TOTAL_MAIN = 12;

export default function SlidesPage() {
  return (
    <div className="deck">
      <div className="deck-header">
        <span className="deck-flag">The Editorial Red Pen</span>
        <span className="deck-meta">
          Principal PM, AI Platform · round 3 take-home · 30 April 2026
        </span>
        <nav className="deck-nav">
          {[
            "s1",
            "s2",
            "s3",
            "s4",
            "s5",
            "s6",
            "s7",
            "s8",
            "s9",
            "s10",
            "s11",
            "closing",
            "appendix",
            "a1",
            "a2",
          ].map((id, i) => (
            <a key={id} href={`#${id}`}>
              {i === 11
                ? "END"
                : i === 12
                  ? "APX"
                  : i > 12
                    ? `A${i - 12}`
                    : String(i + 1).padStart(2, "0")}
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
          <span>01 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 2 — THE EXAMPLE */}
      <section id="s2" className="slide">
        <div className="slide-head">
          <span className="brand">01 · The example</span>
          <span className="ctx">
            What a grammar checker misses. What a fact-checker misses. What the
            Red Pen catches.
          </span>
        </div>
        <h2
          style={{ fontSize: 28, marginBottom: 14, lineHeight: 1.15 }}
        >
          What AI gets wrong isn't facts — it's nuance.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateRows: "46% 28% 18%",
            gap: 10,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Draft as published */}
          <div
            style={{
              background: "#fffdf8",
              border: "1px solid #e8e2d2",
              padding: "22px 34px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 18,
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#e3120b",
                fontWeight: 700,
              }}
            >
              Draft · as published
            </div>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#999",
                marginBottom: 6,
              }}
            >
              Britain · Economics
            </div>
            <div
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#121212",
                marginBottom: 10,
                borderBottom: "1px solid #e8e2d2",
                paddingBottom: 8,
              }}
            >
              Inflation's long retreat
            </div>
            <div
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 19,
                lineHeight: 1.55,
                color: "#121212",
              }}
            >
              A cooler-than-expected set of figures landed this week, and the
              mood in Westminster shifted with them.{" "}
              <span
                style={{
                  borderBottom: "3px solid #e3120b",
                  paddingBottom: 1,
                }}
              >
                Most economists now agree that inflation will fall in the next
                quarters, with good news for the UK public ahead.
              </span>{" "}
              The chancellor seized the moment, telling reporters the country
              had turned a corner; the Bank of England, predictably, was more
              circumspect.
            </div>
          </div>

          {/* Source */}
          <div
            style={{
              background: "#f4f5fb",
              borderLeft: "5px solid #1b3a8a",
              padding: "14px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 9,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#1b3a8a",
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              Source — what the research said
            </div>
            <div
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: 17,
                lineHeight: 1.4,
                color: "#121212",
                marginBottom: 6,
              }}
            >
              &ldquo;
              <span
                style={{ background: "#d6dfff", padding: "1px 3px" }}
              >
                7 out of 10 economists <strong>we interviewed</strong>
              </span>{" "}
              believe inflation may fall,{" "}
              <span
                style={{ background: "#d6dfff", padding: "1px 3px" }}
              >
                though others disagree
              </span>
              .&rdquo;
            </div>
            <div
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 11,
                color: "#666",
                lineHeight: 1.45,
                fontStyle: "italic",
              }}
            >
              A small, attributed sample. Dissent acknowledged. The
              Economist&apos;s own reporting.
            </div>
          </div>

          {/* Two distortions */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div
              style={{
                padding: "10px 14px",
                background: "#faf5f5",
                borderLeft: "4px solid #e3120b",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#e3120b",
                  fontWeight: 700,
                  marginBottom: 3,
                }}
              >
                Distortion 01 — scale
              </div>
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 13.5,
                  lineHeight: 1.4,
                  color: "#222",
                }}
              >
                A sample of seven interviews became{" "}
                <strong>&ldquo;most economists&rdquo;</strong> — universal
                consensus.
              </div>
            </div>
            <div
              style={{
                padding: "10px 14px",
                background: "#faf5f5",
                borderLeft: "4px solid #e3120b",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#e3120b",
                  fontWeight: 700,
                  marginBottom: 3,
                }}
              >
                Distortion 02 — attribution
              </div>
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 13.5,
                  lineHeight: 1.4,
                  color: "#222",
                }}
              >
                <strong>&ldquo;We interviewed&rdquo;</strong> disappeared. The
                Economist&apos;s own research became an unattributed claim.
              </div>
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>02 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 3 — WHY THIS MATTERS */}
      <section id="s3" className="slide">
        <div className="slide-head">
          <span className="brand">02 · Why this matters</span>
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
                product — a single hallucinated claim or jargon-bloated
                sentence erodes a hundred years of credibility.
              </p>
            </div>
            <div className="why-card">
              <h3>The problem</h3>
              <p>
                Editing is already hard. Now editors are also policing AI
                drafts for hallucinations, weak arguments, and bloated
                corporate jargon — and generic grammar or RAG tools are
                blind to any of it.
              </p>
            </div>
            <div className="why-card dark">
              <h3>The solution · one line</h3>
              <p>
                An evaluation-only auditor that reads every AI-assisted
                draft against the source material and the house style — and
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
          <span>03 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 4 — PRODUCT / FLOW */}
      <section id="s4" className="slide">
        <div className="slide-head">
          <span className="brand">03 · The product</span>
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
                The draft is rendered with the active flaw highlighted,
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
          <span>04 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 5 — PRODUCT DECISIONS */}
      <section id="s5" className="slide">
        <div className="slide-head">
          <span className="brand">04 · Product decisions</span>
          <span className="ctx">Three high-priority + two lower-priority</span>
        </div>
        <h2>
          Five product decisions. Three that shape the product. Two that
          sharpen the experience.
        </h2>
        <p className="serif-lead">
          Each row: the choice made versus the obvious alternative — and why.
        </p>

        <div className="decisions">
          <div className="head">
            <div className="cell num">#</div>
            <div className="cell">Decision (chosen vs rejected)</div>
            <div className="cell">Why</div>
          </div>
          <div className="group-label high">
            High priority · product-defining
          </div>
          <DRow
            num="01"
            chosen="Evaluation, not generation"
            rejected="vs. another AI writer"
          >
            The market is saturated with generators; generic LLMs degrade
            elite editorial standards with sycophancy, neutrality, and
            bloat. The real product gap for a publisher like The Economist
            is a QA backstop that audits AI-assisted drafts to preserve
            institutional trust and authority.
          </DRow>
          <DRow
            num="02"
            chosen="Centralised guardrails in the prompt"
            rejected="vs. open, user-controlled prompts"
          >
            The guardrails are encoded directly into the prompts feeding
            the tool, rather than left to the end user. Centralisation
            lets us bake in institutional best practice, keep evaluations
            consistent across editors, and prevent a well-meaning user
            from silently weakening the audit.
          </DRow>
          <DRow
            num="03"
            chosen={
              <>
                Structured nested{" "}
                <code
                  style={{
                    background: "var(--paper-deep)",
                    padding: "0 5px",
                    border: "1px solid var(--rule)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                  }}
                >
                  +
                </code>{" "}
                UI for voice
              </>
            }
            rejected="vs. free-text prompt for configuration"
          >
            A nested rule builder forces editors to codify specific,
            testable constraints — ban lists, no passive, first-person
            plural. A free-text prompt reduces voice to vibes; grading
            becomes subjective and indefensible. Structure makes the
            evaluation deterministic, repeatable, and auditable.
          </DRow>
          <div className="group-label low">
            Lower priority · experience sharpening
          </div>
          <DRow
            num="04"
            chosen="Semantic colour-coded highlights"
            rejected="vs. generic yellow highlights"
            low
          >
            <span className="mark-grounding">Grounding</span>,{" "}
            <span className="mark-voice">voice</span> and{" "}
            <span className="mark-argument">argument</span> each get their
            own colour. An editor can scan a draft and see the failure
            profile before reading a single card — high-signal visual cues
            over uniform yellow noise.
          </DRow>
          <DRow
            num="05"
            chosen="Ship as a tool, not a platform feature"
            rejected="vs. embedding inside an existing CMS flow"
            low
          >
            A standalone tool keeps the end-user focus tight: a single job
            (audit this draft), a single surface, no existing workflow to
            fight. A platform feature would have dragged in CMS
            constraints, auth models, and a broader stakeholder list —
            none of which sharpen the audit itself. Platform integration
            is a later phase.
          </DRow>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>05 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 6 — ENGINEERING DECISIONS */}
      <section id="s6" className="slide">
        <div className="slide-head">
          <span className="brand">05 · Engineering decisions</span>
          <span className="ctx">
            Three architecture choices — chosen vs rejected
          </span>
        </div>
        <h2>Three engineering decisions keep the auditor strict and fast.</h2>
        <p className="serif-lead">
          Each row: the choice made versus the default path — and why.
        </p>

        <div className="decisions navy">
          <div className="head">
            <div className="cell num">#</div>
            <div className="cell">Decision (chosen vs rejected)</div>
            <div className="cell">Why</div>
          </div>
          <div className="group-label navy">
            Architecture · correctness &amp; latency defining
          </div>
          <DRow
            num="01"
            chosen="Info-Block tokenisation + UUIDs"
            rejected="vs. fuzzy string matching on LLM-quoted text"
          >
            Tokenise the draft into sentence blocks with UUIDs{" "}
            <em>before</em> the LLM sees it. The LLM returns IDs, not
            text. Fuzzy matching on quoted text breaks on curly quotes,
            em-dashes, and paraphrases — the exact failures we are trying
            to catch. IDs make highlight mapping deterministic.
          </DRow>
          <DRow
            num="02"
            chosen="Native extraction + OCR fallback"
            rejected="vs. sending raw PDFs to the LLM as reader"
          >
            <code>unpdf</code> first; a tesseract sidecar for scans. The
            LLM is reserved for reasoning, not transcription. Using it as
            a PDF reader is slow, expensive, and silently drops claims —
            the same claims we are auditing.
          </DRow>
          <DRow
            num="03"
            chosen="Three parallel calls, strict JSON"
            rejected="vs. sequential prompt chain across pillars"
          >
            Grounding, voice, and rigour fire at the same time. Latency is
            capped by the slowest call, not the sum — roughly{" "}
            <strong style={{ color: "var(--navy)" }}>~66% faster</strong>.
            Strict JSON schema on every call eliminates parse retries.
            Independent judges also stop one pillar's reasoning leaking
            into another.
          </DRow>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>06 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 7 — WALKTHROUGH */}
      <section id="s7" className="slide">
        <div className="slide-head">
          <span className="brand">06 · Walkthrough</span>
          <span className="ctx">The red-line review UI</span>
        </div>
        <div className="question">What the editor sees</div>
        <h2>Two panes. Click a card — the draft scrolls to the sentence.</h2>

        <div className="ui-mockup">
          <div className="ui-pane">
            <h5>Draft · rendered with highlighter marks</h5>
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
                &ldquo;plummeted&rdquo; also misrepresents a mild fluctuation.
              </div>
            </div>
            <div className="audit-item navy">
              <div className="tag">Voice · warn</div>
              <div className="msg">
                Banned terms: &ldquo;leverage&rdquo;, &ldquo;going
                forward&rdquo;. Replace with specific verbs.
              </div>
            </div>
            <div className="audit-item amber">
              <div className="tag">Argument · fail</div>
              <div className="msg">
                &ldquo;Most economists now agree&rdquo; — unsupported. Source
                contains dissenting views from the ECB and two cited academics.
              </div>
            </div>
            <div className="audit-item">
              <div className="tag">Grounding · fail</div>
              <div className="msg">
                &ldquo;Lowest in a decade&rdquo; — the sources only cover the
                last five years.
              </div>
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>07 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 8 — TRADE-OFFS & UNFINISHED */}
      <section id="s8" className="slide">
        <div className="slide-head">
          <span className="brand">07 · Trade-offs & unfinished work</span>
          <span className="ctx">
            What I cut, what I'd revisit with more time
          </span>
        </div>
        <h2>
          Three honest trade-offs. Each one a revisit point, not a
          finished answer.
        </h2>
        <p className="serif-lead">
          Where I took the shortcut, why I took it, and what I would do
          given the time.
        </p>

        <div className="fail-block">
          <div className="fail-row">
            <div className="flaw">
              01 · No formal evaluation framework for the tool itself.
            </div>
            <div className="pivot">
              <strong>What I did</strong>Uploaded a small set of articles
              and blog posts and ran the tool over them for a high-level
              sanity check.
            </div>
            <div className="pivot">
              <strong>Why the shortcut</strong>I did not have the time, or
              the labelled Economist-grade test data, to build a proper
              evaluation harness — precision / recall per pillar,
              inter-rater agreement with human editors, regression set.
            </div>
            <div className="pivot">
              <strong>Revisit</strong>Build a held-out set of
              editor-annotated drafts with known hallucinations, voice
              violations, and logic gaps, and grade the three judges
              against it as a CI gate before any prompt change ships.
            </div>
          </div>
          <div className="fail-row">
            <div className="flaw">
              02 · Skipped LangChain. Dumped everything into a
              large-context model.
            </div>
            <div className="pivot">
              <strong>What I did</strong>Pushed the full draft, sources,
              and rules into one large-context call, with a strict JSON
              schema on the way back out.
            </div>
            <div className="pivot">
              <strong>Why the shortcut</strong>My original LangChain setup
              was not working, and the interview timebox did not allow me
              to debug a framework. A single large-context call gave me
              determinism and speed today.
            </div>
            <div className="pivot">
              <strong>Revisit</strong>At scale the large-context approach
              is expensive and re-sends identical source material every
              run. A proper orchestration layer lets me cache sources,
              route by pillar, and control cost per audit.
            </div>
          </div>
          <div className="fail-row">
            <div className="flaw">
              03 · Tesseract OCR instead of PaddleOCR.
            </div>
            <div className="pivot">
              <strong>What I did</strong>Planned a tesseract.js (WASM)
              sidecar inside the serverless function as the OCR fallback
              for scanned PDFs; the current build surfaces a clear error
              for scans pending that service.
            </div>
            <div className="pivot">
              <strong>Why the shortcut</strong>PaddleOCR is stronger, but
              it would have forced a Python sidecar. Rewriting the stack
              mid-build was not a trade I was willing to make in an
              interview timebox.
            </div>
            <div className="pivot">
              <strong>Revisit</strong>With an engineering team, move OCR
              to a PaddleOCR microservice behind a queue. Better accuracy
              on scanned annual reports and filings, and it frees the main
              function to stay pure Node.
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>08 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 9 — MARKET REALITY */}
      <section id="s9" className="slide">
        <div className="slide-head">
          <span className="brand">08 · Market reality</span>
          <span className="ctx">
            Why generic AI fails elite newsrooms
          </span>
        </div>
        <h2 style={{ fontSize: 28 }}>
          Generic LLMs are tuned to please everyone. Economist-grade
          writing is defined by what it refuses to say.
        </h2>
        <p className="serif-lead">
          Four places the default AI output lands in the wrong spot — and
          where the Red Pen pulls it back.
        </p>

        <div className="market-grid">
          <div className="market-cards">
            <MarketCard
              n="01"
              title="Safe neutrality vs. a stated position"
            >
              AI hedges. The Economist tells policymakers what to do — from
              a classical-liberal stance. A generic model cannot hold a
              confident view without tipping into hyperbole.
            </MarketCard>
            <MarketCard n="02" title="Bloat vs. brevity">
              Models equate intelligence with complexity: passive voice,
              &ldquo;leverage&rdquo;, &ldquo;delve&rdquo;,
              &ldquo;multifaceted&rdquo;. The Economist treats brevity as
              the mark of a clear thinker. The Red Pen pushes back on that
              instinct.
            </MarketCard>
            <MarketCard n="03" title="The adjective gap">
              AI checks the number. It does not check the word sitting
              next to it. &ldquo;GDP fell 2%&rdquo; passes. &ldquo;The
              economy <em>plummeted</em> by 2%&rdquo; also passes. One is
              true. The other is dishonest. Off-the-shelf RAG sees no
              difference.
            </MarketCard>
            <MarketCard n="04" title="Smoothing over the potholes">
              Given contradictory sources, a completion engine smooths
              them into a tidy paragraph. Good journalism lives in the
              contradictions. Unless the model is forced to argue against
              itself — which is what pillar 3 does — it will not.
            </MarketCard>
          </div>

          <div className="axes">
            <div className="eyebrow">Where the defaults land</div>
            <div className="head">
              Generic LLM output vs. Economist house standard, on four
              axes.
            </div>
            <div className="legend">
              <span>
                <span
                  className="dot"
                  style={{ background: "var(--ink-3)" }}
                />
                Generic LLM
              </span>
              <span>
                <span
                  className="dot"
                  style={{ background: "var(--econ-red)" }}
                />
                Economist standard
              </span>
            </div>

            <Axis
              left="Hedged"
              mid="Stance"
              right="Opinionated"
              lhs={22}
              rhs={82}
            />
            <Axis
              left="Bloat"
              mid="Prose density"
              right="Brevity"
              lhs={18}
              rhs={85}
            />
            <Axis
              left="Number only"
              mid="Fact-check depth"
              right="Number + adjective"
              lhs={20}
              rhs={78}
            />
            <Axis
              left="Smoothed"
              mid="Handling of conflict"
              right="Surfaced"
              lhs={15}
              rhs={80}
            />

            <div className="caption">
              The gap on every axis is the space the Red Pen covers.
              Closing it is editorial work, not model work.
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>09 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 10 — ROADMAP */}
      <section id="s10" className="slide">
        <div className="slide-head">
          <span className="brand">09 · Roadmap</span>
          <span className="ctx">Validate first, then build</span>
        </div>
        <h2 style={{ fontSize: 28 }}>
          Before I ship another feature, I'd prove this tool belongs in
          the editor's day.
        </h2>
        <p className="serif-lead">
          Three validation phases come first. The product bets come after.
        </p>

        <div className="roadmap">
          <Phase
            num="Phase 01"
            time="Now → 4 weeks"
            name="Understand the workflow"
            sub="Customer discovery"
            proof="a ranked list of friction points the tool can and cannot solve."
          >
            Shadow editors and writers through a real edit. I want to know
            whether the Red Pen slots into their flow — or gets in the way
            of it. A tool no editor opens is a tool that does not exist.
          </Phase>
          <Phase
            num="Phase 02"
            time="Weeks 4 → 10"
            name="Co-create the playbook"
            sub="With editors, not for them"
            proof="a human-signed-off v1 house-style ruleset."
          >
            Build the voice ruleset <em>with</em> writers and editors. Use
            existing edited articles as a baseline to extract candidate
            rules, then put them in front of humans for review. House
            style is the product — it cannot be guessed, it has to be
            bargained for.
          </Phase>
          <Phase
            num="Phase 03"
            time="Weeks 8 → 14"
            name="Build the test bench"
            sub="A labelled dataset, editor-graded"
            proof="precision / recall per pillar, tracked per release."
          >
            A held-out set of drafts with known hallucinations, voice
            violations, and logic gaps — labelled by real editors. Every
            prompt change, every model swap, every rule tweak runs through
            it. No CI green, no ship.
          </Phase>
        </div>

        <div className="then-strip">
          <div className="grid">
            <div className="eyebrow">Then, and only then —</div>
            <div className="bets">
              <div className="bet">
                <div className="t">Fine-tuned judge</div>
                <div className="d">
                  Trained on the edited archive. Replaces prompt
                  engineering.
                </div>
              </div>
              <div className="bet">
                <div className="t">Multi-modal evidence</div>
                <div className="d">
                  Audits charts and figures alongside the prose.
                </div>
              </div>
              <div className="bet">
                <div className="t">In-situ integration</div>
                <div className="d">
                  Lives inside the CMS or Google Docs. No more app
                  switching.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>10 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* 11 — I'VE BUILT THIS BEFORE */}
      <section id="s11" className="slide">
        <div className="slide-head">
          <span className="brand">10 · I've built this before</span>
          <span className="ctx">Why this is not theory for me</span>
        </div>
        <h2 style={{ fontSize: 30, marginBottom: 4, lineHeight: 1.15 }}>
          I've shipped evaluation layers, AI-assisted tools, and
          editorial-grade workflows before.
        </h2>
        <p className="serif-lead">
          Three patterns that repeat in my work — the same patterns that
          built the Red Pen.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 14,
            flex: 1,
          }}
        >
          <ProofCard
            pattern="Pattern 01 — Eval layers"
            color="var(--econ-red)"
            title="Shipping eval loops before shipping the model"
            outcome="<2% error rate, >96% coverage. Scaled 0–70+ boards. Acquired by BoardPro."
          >
            <strong>PageBreak (2025)</strong> — built RAG, evaluation and
            guardrails for AI-generated board packs. Directors in regulated
            industries won't trust AI without audit-grade reliability, so the
            scorecard was the product.
          </ProofCard>
          <ProofCard
            pattern="Pattern 02 — Workflow tools"
            color="var(--navy)"
            title="AI that slots into an expert's day, not around it"
            outcome="+20% daily customer visits, +30% pipeline growth, 30% prep-time reduction."
          >
            <strong>Hilti (2023–2026)</strong> — shipped AI-driven Meeting
            Prep for 9,000 sales managers across 68 countries. Pulled from 13
            LLM-ready data stores I architected across 7+ global platforms.
          </ProofCard>
          <ProofCard
            pattern="Pattern 03 — Trust & QA"
            color="var(--amber)"
            title="Turning intuition into an auditable checklist"
            outcome="+35% SEO experiment throughput, 18% faster product decisioning."
          >
            <strong>Yelp (2022–2023)</strong> — ran the Bunsen
            experimentation platform. Coached PMs on hypothesis framing and
            metric selection so the platform measured decision{" "}
            <em>quality</em>, not just velocity.
          </ProofCard>
        </div>

        <div
          style={{
            marginTop: 14,
            background: "#3a3a3a",
            color: "#fff",
            padding: "12px 18px",
            borderLeft: "4px solid var(--econ-red)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#ff7a73",
              fontWeight: 700,
            }}
          >
            The through-line
          </div>
          <div
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: 15,
              color: "#fff",
            }}
          >
            AI wins in elite domains only when the evaluation layer is
            built by someone who's lived in the workflow.
          </div>
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>11 / {TOTAL_MAIN}</span>
        </div>
      </section>

      {/* CLOSING */}
      <section id="closing" className="slide slide-closing">
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
            Fawad Bhatti · f.e.bhatti@gmail.com · economist-red-pen.vercel.app
          </div>
        </div>
        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>12 / {TOTAL_MAIN} · END</span>
        </div>
      </section>

      {/* APPENDIX DIVIDER */}
      <section id="appendix" className="slide slide-appendix">
        <div className="slide-head">
          <span className="brand">Appendix</span>
          <span className="ctx">Deeper technical detail on request</span>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="kicker">Appendix</div>
          <h1>Appendix</h1>
          <p className="sub">
            Infrastructure request lifecycle and the stack &amp; chunking
            rationale. Here for reference — not part of the main narrative.
          </p>
          <div className="list">
            A1 · Infrastructure &nbsp;·&nbsp; A2 · Stack &amp; chunking
          </div>
        </div>
        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>Appendix</span>
        </div>
      </section>

      {/* A1 — INFRASTRUCTURE */}
      <section id="a1" className="slide">
        <div className="slide-head">
          <span className="brand">A1 · Infrastructure</span>
          <span className="ctx">
            Request lifecycle · stateless · serverless
          </span>
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
          <span>A1 · Appendix</span>
        </div>
      </section>

      {/* A2 — STACK & CHUNKING */}
      <section id="a2" className="slide">
        <div className="slide-head">
          <span className="brand">A2 · Stack & chunking</span>
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
          <StackRow
            layer="Host · runtime"
            choice="Vercel · Next.js 15 · TS"
            why="Git-linked deploy, serverless 300s limit, type-safe LLM contract from schema to UI."
          />
          <StackRow
            layer="PDF native extraction"
            choice="unpdf (serverless-safe pdfjs-dist wrapper)"
            why="Digital PDFs carry embedded text. Instant, free, deterministic. Works on Vercel where pdf-parse does not."
          />
          <StackRow
            layer="PDF OCR fallback"
            choice="Tesseract sidecar (planned)"
            why="Triggers when native extraction returns < 100 chars. Lined up as a separate service; scans currently surface an explicit conversion prompt."
          />
          <StackRow
            layer="DOCX parsing"
            choice="mammoth"
            why="Pure JS, Node-friendly, extracts clean text without style drift."
          />
          <StackRow
            layer="Sentence tokeniser"
            choice="Intl.Segmenter (Node 20+)"
            why="Built-in, zero-dependency, locale-aware sentence boundaries."
          />
          <StackRow
            layer="LLM"
            choice="OpenAI gpt-5.4 · strict JSON"
            why="~400k context so whole sources fit in one call. Schema enforcement eliminates parse failures."
          />
          <StackRow
            layer="Rejected · vector DB + RAG"
            choice="—"
            why="Chunked retrieval causes the false positives we are trying to catch. Claims fail because the supporting sentence sat in an unseen chunk."
            rejected
          />
          <StackRow
            layer="Rejected · LangChain"
            choice="—"
            why="Three LLM calls with a clear schema do not need a framework. Pure SDK calls are easier to debug and audit."
            rejected
          />
          <StackRow
            layer="Rejected · Python sidecar"
            choice="—"
            why="Second deploy pipeline, second hosting target, cross-service latency. Node equivalents are 90 per cent as good for 10 per cent of the operational cost."
            rejected
          />
        </div>

        <div className="slide-foot">
          <span>The Editorial Red Pen</span>
          <span>A2 · Appendix</span>
        </div>
      </section>
    </div>
  );
}

function DRow({
  num,
  chosen,
  rejected,
  children,
  low,
}: {
  num: string;
  chosen: React.ReactNode;
  rejected: string;
  children: React.ReactNode;
  low?: boolean;
}) {
  return (
    <div className={`row${low ? " low" : ""}`}>
      <div className="num-cell">{num}</div>
      <div className="pick-cell">
        <div className="chosen">{chosen}</div>
        <div className="rejected">{rejected}</div>
      </div>
      <div className="why-cell">{children}</div>
    </div>
  );
}

function MarketCard({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="market-card">
      <div className="num">{n}</div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

function ProofCard({
  pattern,
  color,
  title,
  outcome,
  children,
}: {
  pattern: string;
  color: string;
  title: string;
  outcome: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#f9f6f0",
        borderTop: `4px solid ${color}`,
        padding: "16px 18px",
      }}
    >
      <div
        style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {pattern}
      </div>
      <div
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: 19,
          fontWeight: 700,
          color: "#121212",
          lineHeight: 1.2,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 12.5,
          lineHeight: 1.5,
          color: "#333",
          margin: "0 0 10px 0",
        }}
      >
        {children}
      </p>
      <div
        style={{
          marginTop: "auto",
          paddingTop: 10,
          borderTop: "1px dashed #cfc9bc",
          fontFamily: "'Georgia', serif",
          fontSize: 11.5,
          fontStyle: "italic",
          color: "#6b6b6b",
        }}
      >
        Outcome: {outcome}
      </div>
    </div>
  );
}

function Axis({
  left,
  mid,
  right,
  lhs,
  rhs,
}: {
  left: string;
  mid: string;
  right: string;
  lhs: number;
  rhs: number;
}) {
  return (
    <div className="axis">
      <div className="axis-label">
        <span>{left}</span>
        <span className="mid">{mid}</span>
        <span>{right}</span>
      </div>
      <div className="track">
        <span
          className="mark"
          style={{ left: `${lhs}%`, background: "var(--ink-3)" }}
        />
        <span
          className="mark"
          style={{ left: `${rhs}%`, background: "var(--econ-red)" }}
        />
      </div>
    </div>
  );
}

function Phase({
  num,
  time,
  name,
  sub,
  proof,
  children,
}: {
  num: string;
  time: string;
  name: string;
  sub: string;
  proof: string;
  children: React.ReactNode;
}) {
  return (
    <div className="phase">
      <div className="top">
        <div className="tag-row">
          <span className="time">{time}</span>
          <span className="phase-num">· {num}</span>
        </div>
        <div className="name">{name}</div>
        <div className="sub">{sub}</div>
        <p>{children}</p>
      </div>
      <div className="proof">
        <strong>Proof point:</strong>
        {proof}
      </div>
    </div>
  );
}

function StackRow({
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
      <div
        className="cell"
        style={{ fontStyle: rejected ? "italic" : "normal" }}
      >
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
        <line
          x1="110"
          y1="440"
          x2="110"
          y2="462"
          stroke="#0a0a0a"
          strokeWidth="0.5"
        />
        <rect x="96" y="150" width="28" height="290" fill="url(#penBody)" />
        <rect
          x="100"
          y="152"
          width="4"
          height="286"
          fill="#ffffff"
          opacity="0.25"
        />
        <rect
          x="118"
          y="152"
          width="4"
          height="286"
          fill="#000000"
          opacity="0.2"
        />
        <rect x="94" y="432" width="32" height="8" fill="#bfbfbf" />
        <rect x="94" y="432" width="32" height="2" fill="#eeeeee" />
        <rect x="94" y="438" width="32" height="2" fill="#7a7a7a" />
        <rect x="94" y="70" width="32" height="82" fill="url(#penCap)" />
        <rect
          x="98"
          y="72"
          width="3"
          height="78"
          fill="#ffffff"
          opacity="0.2"
        />
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

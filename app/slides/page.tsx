import type { Metadata } from "next";
import "./slides.css";

export const metadata: Metadata = {
  title: "The Editorial Red Pen — Slides",
  description:
    "Presentation deck for The Editorial Red Pen, an evaluation-only editorial immune system for AI-assisted journalism.",
};

const DECK_HTML = `
<!-- 1. TITLE -->
<section class="slide title-slide">
  <div class="header-bar">
    <span class="brand">The Economist Group</span>
    <span>Round 3 — Take-home Presentation</span>
  </div>
  <div style="margin-top:auto; margin-bottom:auto;">
    <div class="kicker">Principal PM, AI Platform</div>
    <h1>The Editorial<br>Red Pen.</h1>
    <p class="sub">A feature, and the expectations it sets for the AI platform underneath.</p>
    <div class="meta">
      <strong>Fawad Bhatti</strong> &nbsp;·&nbsp; 30 April 2026
    </div>
  </div>
  <div class="footer"><span>The Editorial Red Pen</span><span>1 / 13</span></div>
</section>

<!-- 2. THE EXAMPLE -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">02 — The example</span>
    <span>One claim. Two distortions a fact-checker won't catch.</span>
  </div>
  <h2 style="font-size: 32px; margin-bottom: 14px;">AI doesn't fail on facts. It fails on nuance.</h2>

  <div style="display: grid; grid-template-rows: 50% 26% 18%; gap: 10px; flex: 1; min-height: 0;">

    <div style="background: #fffdf8; border: 1px solid #e8e2d2; padding: 22px 34px; display: flex; flex-direction: column; justify-content: center; position: relative;">
      <div style="position: absolute; top: 12px; right: 18px;"><span class="pill">Draft · as published</span></div>
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: #999; margin-bottom: 6px;">Britain · Economics</div>
      <div style="font-family: 'Georgia', serif; font-size: 24px; font-weight: 700; line-height: 1.2; color: #121212; margin-bottom: 12px; border-bottom: 1px solid #e8e2d2; padding-bottom: 8px;">Inflation's long retreat</div>
      <div style="font-family: 'Georgia', serif; font-size: 19px; line-height: 1.55; color: #121212;">
        A cooler-than-expected set of figures landed this week. <span style="border-bottom: 3px solid #e3120b; padding-bottom: 1px;">Most economists now agree that inflation will fall in the next quarters.</span>
      </div>
    </div>

    <div style="background: #f4f5fb; border-left: 5px solid #1b3a8a; padding: 14px 20px; display: flex; flex-direction: column; justify-content: center;">
      <div style="margin-bottom: 6px;"><span class="pill navy">Source · Economist research</span></div>
      <div style="font-family: 'Georgia', serif; font-size: 18px; line-height: 1.4; color: #121212;">
        "<span style="background:#d6dfff; padding:1px 3px;">7 out of 10 economists <strong>we interviewed</strong></span> believe inflation may fall, <span style="background:#d6dfff; padding:1px 3px;">though others disagree</span>."
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div style="padding: 10px 14px; background: #faf5f5; border-left: 4px solid #e3120b; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 3px;">Distortion 01 · Scale</div>
        <div style="font-family: 'Georgia', serif; font-size: 14px; line-height: 1.4; color: #222;">A sample of seven became <strong>"most economists"</strong>.</div>
      </div>
      <div style="padding: 10px 14px; background: #faf5f5; border-left: 4px solid #e3120b; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 3px;">Distortion 02 · Attribution</div>
        <div style="font-family: 'Georgia', serif; font-size: 14px; line-height: 1.4; color: #222;"><strong>"We interviewed"</strong> disappeared.</div>
      </div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>2 / 13</span></div>
</section>

<!-- 3. WHY -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">03 — Why this matters</span>
    <span>What The Economist actually sells</span>
  </div>
  <h2 style="font-size: 36px; margin-bottom: 6px; line-height: 1.1;">What you sell is <span style="color:#e3120b;">trust</span>.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 20px; color: #555; font-style: italic; margin-bottom: 16px;">Anything that erodes it costs more than it earns.</p>

  <div style="display: grid; grid-template-columns: 70% 30%; gap: 24px; flex: 1;">

    <div style="display: flex; flex-direction: column; gap: 14px; justify-content: space-between;">

      <div style="display: flex; align-items: center; gap: 12px; padding: 10px 16px; background: #3a3a3a; color: #fff;">
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700;">Persona</span>
        <span style="font-family: 'Georgia', serif; font-size: 18px; font-weight: 700;">Editors &amp; writers</span>
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; color: #cfcfcf; margin-left: auto;">the people holding the line on house style, rigour, and truth</span>
      </div>

      <div style="padding: 20px 24px; background: #f9f6f0; border-left: 6px solid #e3120b;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">Why — start here</div>
        <div style="font-family: 'Georgia', serif; font-size: 21px; line-height: 1.4; color: #121212;">AI-assisted writing isn't going away — and it shouldn't. But it has to be guardrailed. For The Economist, the product is trust; one hallucinated claim or jargon-bloated sentence undoes what it took decades to earn.</div>
      </div>

      <div style="padding: 20px 24px; background: #f9f6f0; border-left: 6px solid #e3120b;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">The Problem</div>
        <div style="font-family: 'Georgia', serif; font-size: 19px; line-height: 1.4; color: #121212;">Editing is already hard. Now editors are also manually policing AI drafts for hallucinations, weak arguments, and bloated corporate jargon — and generic grammar or RAG tools are blind to any of it.</div>
      </div>

      <div style="padding: 20px 24px; background: #3a3a3a; color: #fff; border-left: 6px solid #e3120b;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700; margin-bottom: 8px;">The Solution — one line</div>
        <div style="font-family: 'Georgia', serif; font-size: 22px; line-height: 1.35; color: #fff; font-weight: 700;">An evaluation-only auditor that reads every AI-assisted draft against the source material and the house style — and hands the editor a pre-flighted red-line.</div>
      </div>

    </div>

    <div style="display: flex; align-items: center; justify-content: center; background: #faf7f1; border: 1px solid #eee4d1; padding: 20px; position: relative;">
      <svg viewBox="0 0 220 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: 460px;">
        <defs>
          <linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#b00d07"/>
            <stop offset="50%" stop-color="#e3120b"/>
            <stop offset="100%" stop-color="#8a0906"/>
          </linearGradient>
          <linearGradient id="penCap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0a0a0a"/>
            <stop offset="50%" stop-color="#2a2a2a"/>
            <stop offset="100%" stop-color="#0a0a0a"/>
          </linearGradient>
        </defs>
        <g stroke="#e8ddc5" stroke-width="1" opacity="0.8">
          <line x1="0" y1="60" x2="220" y2="60"/>
          <line x1="0" y1="120" x2="220" y2="120"/>
          <line x1="0" y1="180" x2="220" y2="180"/>
          <line x1="0" y1="240" x2="220" y2="240"/>
          <line x1="0" y1="300" x2="220" y2="300"/>
          <line x1="0" y1="360" x2="220" y2="360"/>
          <line x1="0" y1="420" x2="220" y2="420"/>
        </g>
        <g stroke="#e3120b" stroke-width="3" stroke-linecap="round" opacity="0.35">
          <path d="M 20 85 Q 70 78 130 90" fill="none"/>
          <path d="M 30 145 L 115 142" fill="none"/>
          <path d="M 18 205 Q 80 210 150 200" fill="none" stroke-width="2"/>
        </g>
        <g stroke="#e3120b" stroke-width="2.5" fill="none" opacity="0.5">
          <path d="M 40 260 L 52 250 L 64 260"/>
        </g>
        <g transform="translate(110 260) rotate(18) translate(-110 -260)">
          <polygon points="108,440 112,440 115,462 105,462" fill="#1a1a1a"/>
          <polygon points="108,440 112,440 113,452 107,452" fill="#e3120b"/>
          <line x1="110" y1="440" x2="110" y2="462" stroke="#0a0a0a" stroke-width="0.5"/>
          <rect x="96" y="150" width="28" height="290" fill="url(#penBody)"/>
          <rect x="100" y="152" width="4" height="286" fill="#ffffff" opacity="0.25"/>
          <rect x="118" y="152" width="4" height="286" fill="#000000" opacity="0.2"/>
          <rect x="94" y="432" width="32" height="8" fill="#bfbfbf"/>
          <rect x="94" y="432" width="32" height="2" fill="#eeeeee"/>
          <rect x="94" y="438" width="32" height="2" fill="#7a7a7a"/>
          <rect x="94" y="70" width="32" height="82" fill="url(#penCap)"/>
          <rect x="98" y="72" width="3" height="78" fill="#ffffff" opacity="0.2"/>
          <path d="M 94 70 Q 110 62 126 70 L 126 78 L 94 78 Z" fill="#1a1a1a"/>
          <rect x="103" y="78" width="5" height="56" rx="1" fill="#d4d4d4"/>
          <rect x="103" y="78" width="5" height="4" rx="1" fill="#f0f0f0"/>
          <circle cx="105.5" cy="128" r="2.5" fill="#9a9a9a"/>
          <rect x="94" y="148" width="32" height="6" fill="#bfbfbf"/>
          <rect x="94" y="260" width="32" height="20" fill="#121212"/>
          <text x="110" y="274" text-anchor="middle" fill="#e3120b" font-family="Georgia, serif" font-size="9" font-weight="700" letter-spacing="1">RED</text>
        </g>
        <circle cx="175" cy="460" r="5" fill="#e3120b" opacity="0.6"/>
        <circle cx="172" cy="470" r="2" fill="#e3120b" opacity="0.4"/>
        <path d="M 30 450 L 40 460 L 58 440" stroke="#e3120b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>
      </svg>
      <div style="position: absolute; bottom: 14px; left: 0; right: 0; text-align: center; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: #9a8f7a;">The red pen · never writes</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>3 / 13</span></div>
</section>

<!-- 4. THE SOLUTION -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">04 — What it does</span>
    <span>Editor uploads. Red Pen audits. Editor reviews.</span>
  </div>
  <h2 style="font-size: 32px; margin-bottom: 4px; line-height: 1.15;">Upload a draft. Get a red-line back.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 17px; color: #555; font-style: italic; margin-bottom: 18px;">Editors never write a prompt. They hand it three things and review what comes back.</p>

  <div style="display: grid; grid-template-columns: 1.1fr auto 1.3fr auto 1fr; align-items: stretch; gap: 12px; margin-bottom: 18px;">

    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 2px;">Step 1 · Upload</div>
      <div style="background: #f9f6f0; padding: 12px 14px; border-left: 4px solid #3a3a3a;">
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212;">Draft</div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #666; margin-top: 2px;">.md</div>
      </div>
      <div style="background: #f9f6f0; padding: 12px 14px; border-left: 4px solid #3a3a3a;">
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212;">Sources</div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #666; margin-top: 2px;">.pdf .docx .txt</div>
      </div>
      <div style="background: #f9f6f0; padding: 12px 14px; border-left: 4px solid #3a3a3a;">
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212;">Voice rules</div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #666; margin-top: 2px;">house style · ban lists</div>
      </div>
    </div>

    <div style="display: flex; align-items: center; justify-content: center; color: #e3120b; font-size: 32px; font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 300;">→</div>

    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 2px;">Step 2 · Three judges, parallel</div>
      <div style="background: #f9f6f0; padding: 12px 14px; border-left: 4px solid #e3120b; display: flex; align-items: center; gap: 10px;">
        <span style="width:14px; height:14px; background:#e3120b; flex-shrink:0;"></span>
        <div style="flex:1;">
          <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212;">Grounding</div>
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #555; line-height: 1.4;">Claims unsupported by sources.</div>
        </div>
      </div>
      <div style="background: #f9f6f0; padding: 12px 14px; border-left: 4px solid #1b3a8a; display: flex; align-items: center; gap: 10px;">
        <span style="width:14px; height:14px; background:#1b3a8a; flex-shrink:0;"></span>
        <div style="flex:1;">
          <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212;">Editorial Voice</div>
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #555; line-height: 1.4;">House-style rule violations.</div>
        </div>
      </div>
      <div style="background: #f9f6f0; padding: 12px 14px; border-left: 4px solid #c68a00; display: flex; align-items: center; gap: 10px;">
        <span style="width:14px; height:14px; background:#c68a00; flex-shrink:0;"></span>
        <div style="flex:1;">
          <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212;">Argumentative Rigor</div>
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #555; line-height: 1.4;">Logic gaps, smoothed contradictions.</div>
        </div>
      </div>
    </div>

    <div style="display: flex; align-items: center; justify-content: center; color: #e3120b; font-size: 32px; font-family: 'Helvetica Neue', Arial, sans-serif; font-weight: 300;">→</div>

    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 2px;">Step 3 · Review</div>
      <div style="background: #3a3a3a; color: #fff; padding: 16px; border-left: 4px solid #e3120b; flex: 1; display: flex; flex-direction: column; justify-content: center;">
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 6px;">Red-line review UI</div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #cfcfcf; line-height: 1.5;">Coloured underlines + mistake cards. Click a card → draft scrolls.</div>
      </div>
    </div>

  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;">
    <div style="padding: 14px 16px; background: #f9f6f0; border-left: 4px solid #e3120b;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 4px;">What it is</div>
      <div style="font-family: 'Georgia', serif; font-size: 14px; line-height: 1.45; color: #222;">A QA backstop the editor runs <em>before</em> the real edit.</div>
    </div>
    <div style="padding: 14px 16px; background: #fafafa; border-left: 4px solid #999;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #666; font-weight: 700; margin-bottom: 4px;">What it is not</div>
      <div style="font-family: 'Georgia', serif; font-size: 14px; line-height: 1.45; color: #555;">Not a writer. Not a grammar checker. Not a replacement for an editor.</div>
    </div>
  </div>

  <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 22px; background: #121212;">
    <div style="font-family: 'Georgia', serif; color: #fff; font-size: 15px;">
      <span class="pill" style="background:#e3120b; margin-right: 12px;">Live prototype</span>
      Try the Red Pen yourself
    </div>
    <a href="https://economist-red-pen.vercel.app/" target="_blank" rel="noopener noreferrer" style="background: #e3120b; color: #fff; padding: 10px 22px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-decoration: none;">
      economist-red-pen.vercel.app →
    </a>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>4 / 13</span></div>
</section>

<!-- 5. PRODUCT DECISIONS -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">05 — Product decisions</span>
    <span>What I picked, what I rejected</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 8px;">Product decisions.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 16px; color: #555; font-style: italic; margin-bottom: 4px;">What I picked. What I rejected. Why.</p>

  <div class="dec-fullpage">

    <div class="dec-card">
      <div class="num">01</div>
      <div class="title">Audit only,<br>never write.</div>
      <div class="vs">vs. another AI writer</div>
      <div class="why-label">Why</div>
      <div class="why-body">A tool that writes competes with the editor. One that audits enhances them. The market is saturated with generators — the gap is a QA backstop that audits AI-assisted drafts.</div>
      <div class="takeaway">Constraint = trust signal. The discipline is the product.</div>
    </div>

    <div class="dec-card">
      <div class="num">02</div>
      <div class="title">Three judges,<br>not one composite.</div>
      <div class="vs">vs. a single fuzzy 7/10</div>
      <div class="why-body" style="margin-top: 8px;"></div>
      <div class="why-label">Why</div>
      <div class="why-body">Editors need to know <em>which</em> dimension failed. Composite scores hide failures. Independent judges are independently false-able — and stop one pillar's reasoning leaking into another.</div>
      <div class="takeaway">Specialised judges scale. One model trying to score everything will not.</div>
    </div>

    <div class="dec-card">
      <div class="num">03</div>
      <div class="title">Centralised guardrails<br>in the prompt.</div>
      <div class="vs">vs. user-controlled prompts</div>
      <div class="why-label">Why</div>
      <div class="why-body">Guardrails encoded into the prompts feeding the tool, not redefinable by users. Centralisation bakes in institutional best practice and prevents a well-meaning user from silently weakening the audit.</div>
      <div class="takeaway">House style is institutional, not individual.</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>5 / 13</span></div>
</section>

<!-- 6. ENGINEERING DECISIONS -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">06 — Infra decisions</span>
    <span>Architecture choices that earn the speed</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 8px;">Infra decisions.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 16px; color: #555; font-style: italic; margin-bottom: 4px;">What I built. What I refused to use. Why.</p>

  <div class="dec-fullpage">

    <div class="dec-card navy">
      <div class="num">01</div>
      <div class="title">Whole sources,<br>sentence-ID'd drafts.</div>
      <div class="vs">vs. vector DB + RAG chunking</div>
      <div class="why-label">Why</div>
      <div class="why-body">Tokenise the draft into UUID'd sentences <em>before</em> the LLM sees it. The LLM returns IDs, not text. Chunked retrieval <em>causes</em> the false positives we are trying to catch — claims fail because the supporting sentence sat in an unseen chunk.</div>
      <div class="takeaway">~400k context lets sources go in whole. Determinism &gt; cleverness.</div>
    </div>

    <div class="dec-card navy">
      <div class="num">02</div>
      <div class="title">Strict JSON +<br>LLM-as-judge with rubric.</div>
      <div class="vs">vs. freeform LLM-as-judge</div>
      <div class="why-label">Why</div>
      <div class="why-body">Freeform LLM-as-judge is unreliable. Strict JSON eliminates parse retries; the rubric forces structured failure modes. Three calls fire in parallel — latency capped by the slowest, not the sum.</div>
      <div class="takeaway"><strong style="color:#1b3a8a;">~66% faster</strong> than a sequential chain. Errors become testable.</div>
    </div>

    <div class="dec-card navy">
      <div class="num">03</div>
      <div class="title">No framework,<br>no DB, no session store.</div>
      <div class="vs">vs. LangChain · Promptfoo · Braintrust</div>
      <div class="why-label">Why</div>
      <div class="why-body">~200 LOC of evaluation logic doesn't need a framework. Frameworks lock you into their abstractions — Promptfoo assumes static rubrics. Editorial standards drift. You'd be fighting the framework within six months.</div>
      <div class="takeaway">Right-sized tooling beats trendy tooling at this scope.</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>6 / 13</span></div>
</section>

<!-- 7. TRADE-OFFS -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">07 — What I cut</span>
    <span>Three shortcuts I'd come back to</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 14px;">What we skipped due to time.</h2>

  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; flex: 1;">

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 16px 18px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">Shortcut 01</div>
      <div style="font-family: 'Georgia', serif; font-size: 18px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 12px;">No formal evaluation framework for the tool itself.</div>
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.5; color: #444; margin-bottom: 8px;"><strong style="color:#e3120b; font-size:9px; letter-spacing: 1.5px; text-transform: uppercase;">What I did</strong><br>Manual sanity check on a small set of articles.</div>
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.5; color: #444; margin-bottom: 8px;"><strong style="color:#e3120b; font-size:9px; letter-spacing: 1.5px; text-transform: uppercase;">Why</strong><br>No labelled test data, no time to build a proper harness.</div>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 12px; font-style: italic; color: #6b6b6b;">Revisit — editor-annotated test bench, CI gate before any prompt change.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 16px 18px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">Shortcut 02</div>
      <div style="font-family: 'Georgia', serif; font-size: 18px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 12px;">Skipped LangChain. Dumped everything into a large-context model.</div>
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.5; color: #444; margin-bottom: 8px;"><strong style="color:#e3120b; font-size:9px; letter-spacing: 1.5px; text-transform: uppercase;">What I did</strong><br>Pushed full draft + sources + rules into one large-context call.</div>
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.5; color: #444; margin-bottom: 8px;"><strong style="color:#e3120b; font-size:9px; letter-spacing: 1.5px; text-transform: uppercase;">Why</strong><br>LangChain wouldn't cooperate, and the timebox didn't allow debugging.</div>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 12px; font-style: italic; color: #6b6b6b;">Revisit — orchestration layer to cache sources, route by pillar, control cost.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 16px 18px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">Shortcut 03</div>
      <div style="font-family: 'Georgia', serif; font-size: 18px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 12px;">Tesseract OCR instead of PaddleOCR.</div>
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.5; color: #444; margin-bottom: 8px;"><strong style="color:#e3120b; font-size:9px; letter-spacing: 1.5px; text-transform: uppercase;">What I did</strong><br>tesseract.js (WASM) inside the serverless function.</div>
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.5; color: #444; margin-bottom: 8px;"><strong style="color:#e3120b; font-size:9px; letter-spacing: 1.5px; text-transform: uppercase;">Why</strong><br>PaddleOCR would have forced a Python sidecar mid-build.</div>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 12px; font-style: italic; color: #6b6b6b;">Revisit — PaddleOCR microservice behind a queue. Better on scanned filings.</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>7 / 13</span></div>
</section>

<!-- 8. WHAT I'D MEASURE -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">08 — What I'd measure</span>
    <span>None of these instruments exist yet</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 4px; line-height: 1.15;">Three things I'd measure.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 15px; color: #555; font-style: italic; margin-bottom: 14px;">The instruments come first. The wins come after.</p>

  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; flex: 1;">

    <div style="background: #f9f6f0; border-top: 5px solid #e3120b; padding: 18px 20px; display: flex; flex-direction: column;">
      <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 10px;">
        <span style="background:#e3120b; color:#fff; padding:3px 10px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Primary</span>
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #6b6b6b; font-weight: 700;">Pillar 01</span>
      </div>
      <div style="font-family: 'Georgia', serif; font-size: 22px; font-weight: 700; color: #121212; line-height: 1.15; margin-bottom: 8px;">Editor productivity</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #444; margin: 0 0 12px 0;">The thing the tool is for. Save editor time, raise edit quality, reduce manual policing.</p>

      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 6px;">Areas to measure</div>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#e3120b; font-weight:700;">▸</span>Time-on-task per draft</li>
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#e3120b; font-weight:700;">▸</span>Issues caught before vs after editor</li>
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#e3120b; font-weight:700;">▸</span>Editor confidence in AI-assisted drafts</li>
      </ul>

      <div style="margin-top: auto; padding-top: 12px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11.5px; font-style: italic; color: #6b6b6b; line-height: 1.4;">The pillar that justifies the spend.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 5px solid #1b3a8a; padding: 18px 20px; display: flex; flex-direction: column;">
      <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 10px;">
        <span style="background:#1b3a8a; color:#fff; padding:3px 10px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Guardrail</span>
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #6b6b6b; font-weight: 700;">Pillar 02</span>
      </div>
      <div style="font-family: 'Georgia', serif; font-size: 22px; font-weight: 700; color: #121212; line-height: 1.15; margin-bottom: 8px;">Subscriber trust</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #444; margin: 0 0 12px 0;">The thing the tool must not break. If productivity goes up but trust drops, the tool failed.</p>

      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 6px;">Areas to measure</div>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#1b3a8a; font-weight:700;">▸</span>Retention on AI-assisted vs untouched articles</li>
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#1b3a8a; font-weight:700;">▸</span>Correction rate per published piece</li>
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#1b3a8a; font-weight:700;">▸</span>Time a hallucination survives in production</li>
      </ul>

      <div style="margin-top: auto; padding-top: 12px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11.5px; font-style: italic; color: #6b6b6b; line-height: 1.4;">A floor, not a target. You can't credit a tool for trust you didn't lose.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 5px solid #c68a00; padding: 18px 20px; display: flex; flex-direction: column;">
      <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 10px;">
        <span style="background:#c68a00; color:#fff; padding:3px 10px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Leading</span>
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #6b6b6b; font-weight: 700;">Pillar 03</span>
      </div>
      <div style="font-family: 'Georgia', serif; font-size: 22px; font-weight: 700; color: #121212; line-height: 1.15; margin-bottom: 8px;">Tool adoption</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #444; margin: 0 0 12px 0;">The thing that tells you anyone uses it. Without adoption, the other two pillars are noise.</p>

      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #8a6d00; font-weight: 700; margin-bottom: 6px;">Areas to measure</div>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#c68a00; font-weight:700;">▸</span>% of AI-assisted drafts run through Red Pen</li>
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#c68a00; font-weight:700;">▸</span>% of mistake cards an editor clicks</li>
        <li style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #333; padding: 3px 0 3px 14px; position: relative;"><span style="position:absolute; left:0; color:#c68a00; font-weight:700;">▸</span>% of flags accepted vs overridden</li>
      </ul>

      <div style="margin-top: auto; padding-top: 12px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11.5px; font-style: italic; color: #6b6b6b; line-height: 1.4;">Editors won't say it's useless. They'll just stop using it.</div>
    </div>

  </div>

  <div style="margin-top: 12px; background: #121212; color: #fff; padding: 12px 18px; border-left: 4px solid #e3120b; display: flex; align-items: center; gap: 18px;">
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700; min-width: 130px;">The honest part</div>
    <div style="font-family: 'Georgia', serif; font-size: 14.5px; line-height: 1.4; color: #e0e0e0;">Optimise productivity. Hold trust as the floor. Watch adoption to know the system is even live.</div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>8 / 13</span></div>
</section>

<!-- 9. SECTION DIVIDER MARKER -->
<section class="slide divider-slide">
  <div class="header-bar">
    <span class="brand">From feature to platform</span>
    <span>The build is over · the harder question begins</span>
  </div>
  <div style="margin-top: auto; margin-bottom: auto;">
    <div class="kicker" style="color:#ff7a73;">Pivot</div>
    <h1>Thinking platform<br>leverage at scale.</h1>
    <p class="sub">Every other AI feature you ship will need the same plumbing.<br>Build it once, or rebuild it ten times.</p>
    <div class="arrow">
      <span class="from">A feature</span>
      <svg width="60" height="14" viewBox="0 0 60 14" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="7" x2="48" y2="7" stroke="#e3120b" stroke-width="1.5"/>
        <polygon points="48,2 58,7 48,12" fill="#e3120b"/>
      </svg>
      <span class="to">A platform</span>
    </div>
  </div>
  <div class="footer"><span>The Editorial Red Pen</span><span>9 / 13</span></div>
</section>

<!-- 10. PLATFORM PRIMITIVES -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">10 — Platform primitives</span>
    <span>The gaps the build kept hitting</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 4px; line-height: 1.2;">The build kept hitting the same gaps.<br><span style="color:#e3120b;">They define the platform requirements.</span></h2>
  <p style="font-family: 'Georgia', serif; font-size: 14px; color: #555; font-style: italic; margin-bottom: 12px;">Every other team would hit them too.</p>

  <div class="prim-grid">

    <div class="prim-card">
      <div class="icon">
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="6" y="8" width="28" height="26" fill="none" stroke="#e3120b" stroke-width="2"/>
          <line x1="6" y1="14" x2="34" y2="14" stroke="#e3120b" stroke-width="2"/>
          <circle cx="12" cy="22" r="2" fill="#e3120b"/>
          <line x1="17" y1="22" x2="30" y2="22" stroke="#999" stroke-width="1.5"/>
          <circle cx="12" cy="28" r="2" fill="none" stroke="#999" stroke-width="1.5"/>
          <line x1="17" y1="28" x2="30" y2="28" stroke="#999" stroke-width="1.5"/>
        </svg>
      </div>
      <div class="num">Primitive 01</div>
      <div class="name">Test bench</div>
      <div class="gap">No labelled cases. Prompt changes regress silently.</div>
      <div class="fix">Reused by EIU + customer service</div>
    </div>

    <div class="prim-card">
      <div class="icon">
        <svg viewBox="0 0 40 40" width="36" height="36">
          <circle cx="12" cy="12" r="3" fill="#e3120b"/>
          <circle cx="12" cy="22" r="3" fill="#e3120b"/>
          <circle cx="12" cy="32" r="3" fill="#999"/>
          <line x1="12" y1="15" x2="12" y2="19" stroke="#e3120b" stroke-width="1.5"/>
          <line x1="12" y1="25" x2="12" y2="29" stroke="#999" stroke-width="1.5" stroke-dasharray="2 2"/>
          <text x="20" y="15" font-family="monospace" font-size="9" fill="#121212">v3</text>
          <text x="20" y="25" font-family="monospace" font-size="9" fill="#121212">v2</text>
          <text x="20" y="35" font-family="monospace" font-size="9" fill="#999">v1</text>
        </svg>
      </div>
      <div class="num">Primitive 02</div>
      <div class="name">Prompt registry</div>
      <div class="gap">Every iteration overwrote. No diff, no rollback.</div>
      <div class="fix">"Who controls the prompting?" — answered</div>
    </div>

    <div class="prim-card">
      <div class="icon">
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="6" y="14" width="10" height="10" fill="#e3120b"/>
          <rect x="18" y="14" width="10" height="10" fill="#1b3a8a"/>
          <rect x="30" y="14" width="6" height="10" fill="#c68a00" opacity="0.4"/>
          <rect x="30" y="14" width="6" height="10" fill="none" stroke="#c68a00" stroke-width="1" stroke-dasharray="2 2"/>
          <line x1="6" y1="30" x2="36" y2="30" stroke="#999" stroke-width="1"/>
          <text x="6" y="38" font-family="Helvetica" font-size="7" fill="#666">Judge interface</text>
        </svg>
      </div>
      <div class="num">Primitive 03</div>
      <div class="name">Judge-as-service</div>
      <div class="gap">Three hardcoded. Adding a fourth was a code change.</div>
      <div class="fix">Build once, reuse across teams</div>
    </div>

    <div class="prim-card">
      <div class="icon">
        <svg viewBox="0 0 40 40" width="36" height="36">
          <rect x="4" y="10" width="14" height="20" fill="none" stroke="#1b3a8a" stroke-width="2"/>
          <line x1="7" y1="15" x2="15" y2="15" stroke="#1b3a8a" stroke-width="1"/>
          <line x1="7" y1="19" x2="15" y2="19" stroke="#1b3a8a" stroke-width="1"/>
          <line x1="7" y1="23" x2="15" y2="23" stroke="#1b3a8a" stroke-width="1"/>
          <line x1="20" y1="20" x2="28" y2="20" stroke="#e3120b" stroke-width="2" stroke-dasharray="3 2"/>
          <polygon points="28,16 36,20 28,24" fill="#e3120b"/>
          <text x="6" y="38" font-family="Helvetica" font-size="7" fill="#666">claim → src</text>
        </svg>
      </div>
      <div class="num">Primitive 04</div>
      <div class="name">Citation contract</div>
      <div class="gap">Mistakes couldn't cite which source grounded a claim.</div>
      <div class="fix">EIU footnotes · CS escalation</div>
    </div>

  </div>

  <div style="margin-top: 16px; background: #121212; color: #fff; padding: 14px 20px; border-left: 4px solid #e3120b; display: flex; align-items: center; justify-content: space-between;">
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700;">The bet</div>
    <div style="font-family: 'Georgia', serif; font-size: 16px; color: #fff;">Build the four once · ship the next ten features faster · trust scales as a contract, not as a wish.</div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>10 / 13</span></div>
</section>

<!-- 11. PLATFORM STACK + TENANTS -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">11 — The layer above your infra</span>
    <span>One platform, three tenants, zero rebuilds</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 14px;">Productizing the platform — beyond component enablement.</h2>

  <svg viewBox="0 0 1140 460" style="width: 100%; flex: 1;" xmlns="http://www.w3.org/2000/svg">
    <g>
      <text x="20" y="24" font-family="Helvetica" font-size="11" font-weight="700" fill="#e3120b" letter-spacing="1.5">TENANTS — WHAT CONSUMES THE PLATFORM</text>
      <rect x="20" y="36" width="350" height="100" fill="#f9f6f0" stroke="#e3120b" stroke-width="2"/>
      <text x="36" y="60" font-family="Georgia" font-size="15" font-weight="700" fill="#121212">Newspaper</text>
      <text x="36" y="80" font-family="Helvetica" font-size="11" fill="#555">Editorial Red Pen</text>
      <text x="36" y="98" font-family="Helvetica" font-size="10" fill="#888">Voice + Grounding + Rigor judges.</text>
      <text x="36" y="114" font-family="Helvetica" font-size="10" fill="#888">Refusal flags drafts for editor review.</text>

      <rect x="395" y="36" width="350" height="100" fill="#f5f5f5" stroke="#bbb" stroke-width="1.5" stroke-dasharray="5 4"/>
      <text x="411" y="60" font-family="Georgia" font-size="15" font-weight="700" fill="#888">EIU</text>
      <text x="411" y="80" font-family="Helvetica" font-size="11" fill="#aaa">Copilot grounding checker</text>
      <text x="411" y="98" font-family="Helvetica" font-size="10" fill="#bbb">Grounding judge + proprietary research.</text>
      <text x="411" y="114" font-family="Helvetica" font-size="10" fill="#bbb">Citation contract → inline footnotes.</text>
      <text x="411" y="130" font-family="Helvetica" font-size="9" fill="#999" font-style="italic">Hypothesis · needs validation</text>

      <rect x="770" y="36" width="350" height="100" fill="#f5f5f5" stroke="#bbb" stroke-width="1.5" stroke-dasharray="5 4"/>
      <text x="786" y="60" font-family="Georgia" font-size="15" font-weight="700" fill="#888">Customer service</text>
      <text x="786" y="80" font-family="Helvetica" font-size="11" fill="#aaa">Refusal-correctness checker</text>
      <text x="786" y="98" font-family="Helvetica" font-size="10" fill="#bbb">Same harness, different rubric.</text>
      <text x="786" y="114" font-family="Helvetica" font-size="10" fill="#bbb">Refusal verdict → human escalation.</text>
      <text x="786" y="130" font-family="Helvetica" font-size="9" fill="#999" font-style="italic">Hypothesis · needs validation</text>
    </g>

    <line x1="195" y1="140" x2="195" y2="170" stroke="#e3120b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="570" y1="140" x2="570" y2="170" stroke="#bbb" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="945" y1="140" x2="945" y2="170" stroke="#bbb" stroke-width="1.5" stroke-dasharray="3 3"/>

    <g>
      <text x="20" y="186" font-family="Helvetica" font-size="11" font-weight="700" fill="#e3120b" letter-spacing="1.5">PRODUCT-PLATFORM — THE LAYER THIS ROLE WOULD SHIP</text>
      <rect x="20" y="200" width="1100" height="100" fill="#fff5f3" stroke="#e3120b" stroke-width="2.5"/>

      <rect x="40" y="220" width="200" height="64" fill="#fff" stroke="#e3120b" stroke-width="1"/>
      <text x="60" y="244" font-family="Georgia" font-size="13" font-weight="700" fill="#121212">Test bench</text>
      <text x="60" y="262" font-family="Helvetica" font-size="9.5" fill="#666">Labelled cases · CI-wired</text>

      <rect x="252" y="220" width="200" height="64" fill="#fff" stroke="#e3120b" stroke-width="1"/>
      <text x="272" y="244" font-family="Georgia" font-size="13" font-weight="700" fill="#121212">Prompt registry</text>
      <text x="272" y="262" font-family="Helvetica" font-size="9.5" fill="#666">Versioned · owned</text>

      <rect x="464" y="220" width="200" height="64" fill="#fff" stroke="#e3120b" stroke-width="1"/>
      <text x="484" y="244" font-family="Georgia" font-size="13" font-weight="700" fill="#121212">Judge-as-service</text>
      <text x="484" y="262" font-family="Helvetica" font-size="9.5" fill="#666">Standard interface</text>

      <rect x="676" y="220" width="200" height="64" fill="#fff" stroke="#e3120b" stroke-width="1"/>
      <text x="696" y="244" font-family="Georgia" font-size="13" font-weight="700" fill="#121212">Source + citation</text>
      <text x="696" y="262" font-family="Helvetica" font-size="9.5" fill="#666">Versioned · schema'd</text>

      <rect x="888" y="220" width="200" height="64" fill="#fff" stroke="#e3120b" stroke-width="1"/>
      <text x="908" y="244" font-family="Georgia" font-size="13" font-weight="700" fill="#121212">Refusal verdict</text>
      <text x="908" y="262" font-family="Helvetica" font-size="9.5" fill="#666">First-class state</text>
    </g>

    <line x1="570" y1="304" x2="570" y2="330" stroke="#999" stroke-width="1.5" stroke-dasharray="3 3"/>

    <g>
      <text x="20" y="346" font-family="Helvetica" font-size="11" font-weight="700" fill="#999" letter-spacing="1.5">INFRASTRUCTURE — WHAT ALREADY EXISTS AT TEG</text>
      <rect x="20" y="360" width="1100" height="80" fill="#1a1a1a"/>
      <rect x="20" y="360" width="6" height="80" fill="#999"/>

      <text x="60" y="384" font-family="Georgia" font-size="13" font-weight="700" fill="#fff">AWS · Bedrock</text>
      <text x="60" y="402" font-family="Helvetica" font-size="10" fill="#cfcfcf">Multi-LLM model hosting.</text>
      <text x="60" y="418" font-family="Helvetica" font-size="10" fill="#cfcfcf">Production services starting in anger.</text>

      <text x="420" y="384" font-family="Georgia" font-size="13" font-weight="700" fill="#fff">SageMaker</text>
      <text x="420" y="402" font-family="Helvetica" font-size="10" fill="#cfcfcf">Data-science model deployment.</text>
      <text x="420" y="418" font-family="Helvetica" font-size="10" fill="#cfcfcf">Quietly live · no PM coverage to date.</text>

      <text x="780" y="384" font-family="Georgia" font-size="13" font-weight="700" fill="#fff">Snowflake</text>
      <text x="780" y="402" font-family="Helvetica" font-size="10" fill="#cfcfcf">Data platform.</text>
      <text x="780" y="418" font-family="Helvetica" font-size="10" fill="#cfcfcf">Eval result warehouse + dashboards.</text>
    </g>
  </svg>

  <div class="footer"><span>The Editorial Red Pen</span><span>11 / 13</span></div>
</section>

<!-- 12. AI TOOLING LIMITS + ECONOMIST EDGE -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">12 — Competitive advantage</span>
    <span>Why this is yours to build</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 4px; line-height: 1.2;">Building competitive advantage in the era of AI.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 16px; color: #555; font-style: italic; margin-bottom: 8px;">The 183-year archive gives you a moat off-the-shelf AI writers will never have.</p>

  <div class="limits-grid">

    <div class="limit-col">
      <div class="icon">
        <svg viewBox="0 0 36 36" width="32" height="32">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#e3120b" stroke-width="2"/>
          <path d="M 11 18 Q 18 13 25 18 Q 18 23 11 18 Z" fill="#e3120b" opacity="0.3"/>
          <circle cx="18" cy="18" r="3" fill="#e3120b"/>
          <text x="18" y="21" text-anchor="middle" font-family="Helvetica" font-size="6" font-weight="700" fill="#fff">?</text>
        </svg>
      </div>
      <div class="layer">Pillar 01 · Model</div>
      <h4>Generic LLMs<br>can't refuse.</h4>
      <ul>
        <li>Trained to please. Plausible answers when sources are weak.</li>
        <li>Economist voice <em>is</em> refusal — "we don't know yet" is a feature.</li>
        <li>Fine-tune problem, not a prompt problem.</li>
      </ul>
    </div>

    <div class="limit-col navy">
      <div class="icon">
        <svg viewBox="0 0 36 36" width="32" height="32">
          <rect x="4" y="10" width="28" height="20" fill="none" stroke="#1b3a8a" stroke-width="2"/>
          <rect x="8" y="14" width="20" height="3" fill="#1b3a8a"/>
          <rect x="8" y="20" width="14" height="2" fill="#1b3a8a" opacity="0.5"/>
          <rect x="8" y="25" width="10" height="2" fill="#1b3a8a" opacity="0.3"/>
          <line x1="6" y1="33" x2="30" y2="33" stroke="#e3120b" stroke-width="2" stroke-dasharray="3 2"/>
        </svg>
      </div>
      <div class="layer">Pillar 02 · Framework</div>
      <h4>Eval frameworks assume rubrics are stable.</h4>
      <ul>
        <li>Promptfoo, Langfuse, Braintrust — static contracts.</li>
        <li>Editorial standards drift with editor, beat, era.</li>
        <li>Adopt one, fight it within six months.</li>
      </ul>
    </div>

    <div class="limit-col amber">
      <div class="icon">
        <svg viewBox="0 0 36 36" width="32" height="32">
          <rect x="4" y="6" width="28" height="6" fill="#c68a00"/>
          <rect x="4" y="14" width="28" height="6" fill="#c68a00" opacity="0.6"/>
          <rect x="4" y="22" width="28" height="6" fill="#c68a00" opacity="0.3"/>
          <line x1="34" y1="16" x2="34" y2="24" stroke="#e3120b" stroke-width="2"/>
          <text x="34" y="34" text-anchor="middle" font-family="Helvetica" font-size="6" fill="#666">no glue</text>
        </svg>
      </div>
      <div class="layer">Pillar 03 · Platform</div>
      <h4>No tool separates feature from contract.</h4>
      <ul>
        <li>Off-the-shelf tools ship features, not contracts.</li>
        <li>Every team rebuilds eval logic from scratch.</li>
        <li>This is the gap at TEG — and what I'd ship.</li>
      </ul>
    </div>

    <div class="limit-col edge">
      <div class="icon">
        <svg viewBox="0 0 36 36" width="32" height="32">
          <rect x="6" y="6" width="24" height="28" fill="none" stroke="#e3120b" stroke-width="2"/>
          <rect x="6" y="6" width="24" height="6" fill="#e3120b"/>
          <text x="18" y="11" text-anchor="middle" font-family="Georgia" font-size="6" font-weight="700" fill="#fff">183</text>
          <line x1="9" y1="18" x2="27" y2="18" stroke="#fff" stroke-width="1"/>
          <line x1="9" y1="22" x2="27" y2="22" stroke="#fff" stroke-width="1"/>
          <line x1="9" y1="26" x2="27" y2="26" stroke="#fff" stroke-width="1"/>
          <line x1="9" y1="30" x2="22" y2="30" stroke="#fff" stroke-width="1"/>
        </svg>
      </div>
      <div class="layer">The unfair advantage</div>
      <h4>Only The Economist has the data to fix this.</h4>
      <ul>
        <li><strong style="color:#fff;">183 years of edited copy</strong> — ground-truth labels at scale, no competitor can replicate.</li>
        <li><strong style="color:#fff;">Codified house style</strong> — editorial decisions reified into a rubric over generations.</li>
        <li><strong style="color:#fff;">Editor-validated archive</strong> — the test bench writes itself once you have the access.</li>
      </ul>
      <div class="punch">Buying this in is buying a generic auditor for a non-generic newsroom. That trade collapses the moat.</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>12 / 13</span></div>
</section>

<!-- 14. CLOSING -->
<section class="slide closing-slide">
  <div class="header-bar">
    <span class="brand">Thank you</span>
    <span>Questions &amp; discussion</span>
  </div>
  <div style="margin-top: auto; margin-bottom: auto;">
    <div class="kicker">Closing</div>
    <h1>Your edge in AI<br>won't come from a model.<br><span style="color:#e3120b;">It comes from what sits on top.</span></h1>
    <p style="font-size: 21px; color: #ccc; margin-top: 28px; max-width: 980px; line-height: 1.45;">
      The layer between model and subscriber is where trust is enforced. That's the platform I want to build with you.
    </p>
    <div style="margin-top: 50px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #999;">
      Fawad Bhatti &nbsp;·&nbsp; f.e.bhatti@gmail.com
    </div>
  </div>
  <div class="footer"><span>The Editorial Red Pen</span><span>13 / 13 · END</span></div>
</section>

<!-- APPENDIX DIVIDER -->
<section class="slide" style="justify-content: center; background: #f4f1ea; border-left: 12px solid #e3120b; padding: 64px 80px;">
  <div class="header-bar">
    <span class="brand">Appendix</span>
    <span>Deeper detail on request</span>
  </div>
  <div style="margin-top: auto; margin-bottom: auto;">
    <div class="kicker">Appendix</div>
    <h1 style="font-size: 72px;">Appendix</h1>
    <p style="font-family: 'Georgia', serif; font-size: 22px; color: #555; font-style: italic; margin-top: 18px; max-width: 900px; line-height: 1.4;">Red Pen feature roadmap · patterns I've shipped before · infrastructure lifecycle · stack rationale.</p>
    <div style="margin-top: 44px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #6b6b6b;">
      A1 · Red Pen roadmap &nbsp;·&nbsp; A2 · Why this isn't theory &nbsp;·&nbsp; A3 · Infrastructure &nbsp;·&nbsp; A4 · Stack &amp; Chunking
    </div>
  </div>
  <div class="footer"><span>The Editorial Red Pen</span><span>Appendix</span></div>
</section>

<!-- A1. RED PEN FEATURE ROADMAP — 50% validate, 50% build -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A1 — Red Pen feature roadmap</span>
    <span>Validate first. Then build for real.</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 4px; line-height: 1.15;">Don't ship it yet. Then ship it properly.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 14px; color: #555; font-style: italic; margin-bottom: 12px;">Half the work is proving it belongs. Half is what an engineering team can actually build.</p>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; flex: 1;">

    <div style="display: flex; flex-direction: column; gap: 8px;">

      <div style="background:#fdecec; padding:8px 14px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size:10px; text-transform: uppercase; letter-spacing:2px; color:#e3120b; font-weight:700; border-left: 4px solid #e3120b;">
        Half 01 — Validate it belongs
      </div>

      <div style="background:#f9f6f0; border-top: 3px solid #e3120b; padding: 12px 14px;">
        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700;">Now — 4 weeks</span>
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; color: #999; letter-spacing: 1px; text-transform: uppercase;">Phase 01</span>
        </div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 5px;">Shadow real edits</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Sit with editors. Find where the Red Pen slots in or gets in the way. A tool no editor opens does not exist.</p>
      </div>

      <div style="background:#f9f6f0; border-top: 3px solid #e3120b; padding: 12px 14px;">
        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700;">Weeks 4 – 10</span>
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; color: #999; letter-spacing: 1px; text-transform: uppercase;">Phase 02</span>
        </div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 5px;">Co-write the rules</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Build the voice ruleset <em>with</em> writers. Use existing edited articles as a baseline to extract candidate rules, then put them in front of editors.</p>
      </div>

      <div style="background:#f9f6f0; border-top: 3px solid #e3120b; padding: 12px 14px;">
        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700;">Weeks 8 – 14</span>
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; color: #999; letter-spacing: 1px; text-transform: uppercase;">Phase 03</span>
        </div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 5px;">Hand-build a v1 test bench</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">~30 Economist articles, hand-labelled by editors with known hallucinations, voice slips, weak arguments. Manual, painful, the only way to know it works.</p>
      </div>

      <div style="margin-top: auto; padding: 8px 14px; background: #121212; color:#fff; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10.5px; line-height: 1.4;">
        <strong style="color:#ff7a73; font-size:9px; letter-spacing:1.5px; text-transform:uppercase; display:block; margin-bottom:3px;">Proof points</strong>
        Editor friction map · signed-off house-style v1 · precision &amp; recall per pillar.
      </div>

    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">

      <div style="background:#3a3a3a; padding:8px 14px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size:10px; text-transform: uppercase; letter-spacing:2px; color:#ff7a73; font-weight:700; border-left: 4px solid #e3120b;">
        Half 02 — What I'd build with engineering
      </div>

      <div style="background:#f4f5fb; border-top: 3px solid #1b3a8a; padding: 12px 14px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 4px;">Build 01 — Eval bench at scale</div>
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 4px;">Automate the test bench off the archive.</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">183 years of edited articles is ground truth no competitor has. Mine the archive: every editor change becomes a labelled training pair. From 30 hand-labelled cases to 30,000.</p>
      </div>

      <div style="background:#f4f5fb; border-top: 3px solid #1b3a8a; padding: 12px 14px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 4px;">Build 02 — Fine-tuned house-style judge</div>
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 4px;">Train a model on the edited archive.</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Generic models hedge and please. A model fine-tuned on Economist edits learns refusal, brevity, and stance — the things off-the-shelf will not give you.</p>
      </div>

      <div style="background:#f4f5fb; border-top: 3px solid #1b3a8a; padding: 12px 14px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 4px;">Build 03 — Multi-modal evidence</div>
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 4px;">Audit charts and figures, not just prose.</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Half of Economist claims sit in charts. Today's tool is blind to them. Multi-modal grounding catches misread axes, dropped units, swapped scales.</p>
      </div>

      <div style="background:#f4f5fb; border-top: 3px solid #1b3a8a; padding: 12px 14px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 4px;">Build 04 — In-situ integration</div>
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 4px;">Lives inside the CMS or Google Docs.</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">A standalone tool teaches editors a habit. An embedded one removes the habit and makes the audit invisible. Final form, not first form.</p>
      </div>

    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A1 · Appendix</span></div>
</section>

<!-- A2. CREDENTIALS -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A2 — Why this isn't theory</span>
    <span>Evidence the bet is real</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 14px;">I've shipped each piece of this before.</h2>

  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; flex: 1;">

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 16px 18px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">Eval bench + citation contract</div>
      <div style="font-family: 'Georgia', serif; font-size: 19px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 8px;">PageBreak</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #333; margin: 0 0 10px 0;">RAG, evaluation harness and citation guardrails for AI-generated board packs. The scorecard <em>was</em> the product.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11.5px; font-style: italic; color: #6b6b6b;">&lt;2% error · &gt;96% coverage · 0→70+ boards · acquired by BoardPro.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #1b3a8a; padding: 16px 18px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 8px;">Multi-tenant data platform</div>
      <div style="font-family: 'Georgia', serif; font-size: 19px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 8px;">Hilti</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #333; margin: 0 0 10px 0;">13 LLM-ready data stores across 7+ platforms. Shipped AI Meeting Prep to 9,000 sales managers in 68 countries.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11.5px; font-style: italic; color: #6b6b6b;">+20% visits · +30% pipeline · 30% prep-time saved.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #c68a00; padding: 16px 18px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #8a6d00; font-weight: 700; margin-bottom: 8px;">Platform metric for an internal tool</div>
      <div style="font-family: 'Georgia', serif; font-size: 19px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 8px;">Yelp · Bunsen</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #333; margin: 0 0 10px 0;">Experimentation platform serving every PM. Defined experimentation velocity as the platform metric — same playbook for eval velocity at TEG.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11.5px; font-style: italic; color: #6b6b6b;">+35% throughput · 18% faster decisions.</div>
    </div>

  </div>

  <div style="margin-top: 14px; background: #3a3a3a; color: #fff; padding: 12px 18px; border-left: 4px solid #e3120b; display: flex; align-items: center; justify-content: space-between;">
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700;">The through-line</div>
    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #fff;">AI wins in elite domains only when the evaluation layer is built by someone who's lived in the workflow.</div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A2 · Appendix</span></div>
</section>

<!-- A3. INFRASTRUCTURE -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A3 — Infrastructure</span>
    <span>Request lifecycle · stateless · serverless</span>
  </div>
  <h2>Stateless. Serverless. No database. No vector store.</h2>

<div class="infra-diagram">                  Browser (Next.js client, 4-phase state machine)
                                │  multipart form (draft + sources + rules)
                                ▼
                         Vercel Edge Network
                                │
                                ▼
                  ┌─────────────────────────────────┐
                  │  Next.js Route Handler          │
                  │  /api/evaluate · Node · 300s    │
                  └──────────┬──────────────────────┘
                             │
       ┌─────────────────────┼─────────────────────────┐
       ▼                     ▼                         ▼
  ┌──────────┐       ┌──────────────┐       ┌────────────────┐
  │  Parser  │       │  Tokeniser   │       │  Evaluator     │
  │ file→txt │─────▶ │  text→blocks │─────▶ │  3× LLM calls  │
  │ mammoth  │       │ Intl.        │       │  in parallel   │
  │ pdf-parse│       │ Segmenter    │       │ (strict JSON)  │
  │ tesseract│       │ +UUID per s. │       └────────┬───────┘
  └──────────┘       └──────────────┘                │
                                                    ▼
                                            <span class="red">OpenAI gpt-5.4</span>
                                            <span class="dim">(~400k ctx, one-shot)</span>

       <span class="dim">No database · No session store · No persistence · Request → response → done.</span>
</div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A3 · Appendix</span></div>
</section>

<!-- A4. STACK & CHUNKING -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A4 — Stack &amp; Chunking</span>
    <span>What we chose, and what we deliberately rejected</span>
  </div>
  <h2>Sources go in whole. Drafts are sentence-ID'd.</h2>

  <div class="stack-table">
    <div class="row">
      <div class="cell hdr">Layer</div>
      <div class="cell hdr">Choice</div>
      <div class="cell hdr">Why this, not that</div>
    </div>
    <div class="row">
      <div class="cell tool">Host / runtime</div>
      <div class="cell tool">Vercel · Next.js 15 · TS</div>
      <div class="cell why">Git-linked deploy, serverless 300s limit, type-safe LLM contract from schema to UI.</div>
    </div>
    <div class="row">
      <div class="cell tool">PDF native extraction</div>
      <div class="cell tool">pdf-parse (pdfjs-dist)</div>
      <div class="cell why">Digital PDFs have embedded text. Instant, free, deterministic.</div>
    </div>
    <div class="row">
      <div class="cell tool">PDF OCR fallback</div>
      <div class="cell tool">tesseract.js (WASM)</div>
      <div class="cell why">Only when native extraction returns &lt;100 chars. No Python sidecar.</div>
    </div>
    <div class="row">
      <div class="cell tool">DOCX parsing</div>
      <div class="cell tool">mammoth</div>
      <div class="cell why">Pure JS, Node-friendly, extracts clean text.</div>
    </div>
    <div class="row">
      <div class="cell tool">Sentence tokeniser</div>
      <div class="cell tool">Intl.Segmenter (Node 20+)</div>
      <div class="cell why">Built-in, zero-dependency, locale-aware.</div>
    </div>
    <div class="row">
      <div class="cell tool">LLM</div>
      <div class="cell tool">OpenAI gpt-5.4 · strict JSON</div>
      <div class="cell why">~400k context — sources fit in one call. Schema enforcement eliminates parse failures.</div>
    </div>
    <div class="row">
      <div class="cell tool" style="color:#e3120b;">Rejected: vector DB + RAG</div>
      <div class="cell" style="font-style:italic;">—</div>
      <div class="cell why">Chunked retrieval causes the false positives we are trying to catch.</div>
    </div>
    <div class="row">
      <div class="cell tool" style="color:#e3120b;">Rejected: LangChain</div>
      <div class="cell" style="font-style:italic;">—</div>
      <div class="cell why">Three LLM calls with a clear schema don't need a framework.</div>
    </div>
    <div class="row">
      <div class="cell tool" style="color:#e3120b;">Rejected: Python sidecar</div>
      <div class="cell" style="font-style:italic;">—</div>
      <div class="cell why">Second pipeline, second host, cross-service latency. Not worth the gain.</div>
    </div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A4 · Appendix</span></div>
</section>
`;

export default function SlidesPage() {
  return <div className="deck-v4" dangerouslySetInnerHTML={{ __html: DECK_HTML }} />;
}

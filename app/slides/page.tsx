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
  <div style="position: absolute; top: 56px; right: 72px; display: flex; align-items: center; gap: 8px; padding: 5px 12px; background: #3a3a3a; color: #fff; z-index: 5;">
    <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.8px; color: #ff7a73; font-weight: 700;">Persona</span>
    <span style="font-family: 'Georgia', serif; font-size: 13px; font-weight: 700;">Editors &amp; writers</span>
  </div>
  <div class="header-bar">
    <span class="brand">03 — Why this matters</span>
    <span>What The Economist actually sells</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 4px; line-height: 1.15; font-style: italic;">"The Economist is produced by <span style="color:#e3120b; font-style: normal;">smart humans</span>, not clever machines."</h2>
  <p style="font-family: 'Georgia', serif; font-size: 16px; color: #444; line-height: 1.45; margin-bottom: 6px;">"AI can improve how we work, not change what we do. AI tools can help with research, for instance, or ease the editing of videos. But humans bear the responsibility for our work, from reporting to editing and fact-checking."</p>
  <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1.8px; color: #6b6b6b; margin-bottom: 14px;">— <a href="https://myaccount.economist.com/s/article/How-we-handle-AI-generated-content" target="_blank" style="color: #e3120b; text-decoration: none; font-weight: 700; border-bottom: 1px solid #e3120b;">The Economist · How we handle AI-generated content</a> · Dec 2025</p>

  <div style="display: grid; grid-template-columns: 70% 30%; gap: 24px; align-items: stretch;">

    <div style="display: flex; flex-direction: column; gap: 12px; justify-content: flex-start;">

      <div style="padding: 18px 24px; background: #f9f6f0; border-left: 6px solid #e3120b;">
        <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 14px;">
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #e3120b; font-weight: 700;">AI-assisted writing is here</div>
          <a href="#a6-sources" style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; text-decoration: none; font-weight: 700; border-bottom: 1px solid #e3120b;">Sources →</a>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="font-family: 'Georgia', serif; font-size: 17px; line-height: 1.5; color: #121212; padding: 8px 0 8px 20px; position: relative;"><span style="position:absolute; left:0; color:#e3120b; font-weight:700;">›</span><strong>22%</strong> of UK journalists use AI for research; <strong>16%</strong> for parts of articles; <strong>10%</strong> for first drafts.</li>
          <li style="font-family: 'Georgia', serif; font-size: 17px; line-height: 1.5; color: #121212; padding: 8px 0 8px 20px; position: relative;"><span style="position:absolute; left:0; color:#e3120b; font-weight:700;">›</span>AI-content fact-checks <strong>doubled YoY</strong> — 7% → 16% in 12 months.</li>
        </ul>
      </div>

      <div style="padding: 18px 24px; background: #f9f6f0; border-left: 6px solid #e3120b;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">The Problem</div>
        <div style="font-family: 'Georgia', serif; font-size: 19px; line-height: 1.45; color: #121212;">Editors now police AI drafts for hallucinations by hand. Grammar checkers and RAG tools can't see what they're looking for.</div>
      </div>

      <div style="padding: 20px 24px; background: #3a3a3a; color: #fff; border-left: 6px solid #e3120b;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700; margin-bottom: 8px;">The Solution — one line</div>
        <div style="font-family: 'Georgia', serif; font-size: 20px; line-height: 1.3; color: #fff; font-weight: 700;">An evaluation-only auditor that reads every AI-assisted draft against the source material and the house style. Hands the editor a pre-flighted red-line.</div>
      </div>

    </div>

    <div style="display: flex; align-items: stretch; justify-content: center; background: #faf7f1; border: 1px solid #eee4d1; padding: 16px 20px; position: relative; align-self: stretch;">
      <svg viewBox="0 0 220 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%;">
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
      <div style="font-family: 'Georgia', serif; font-size: 14px; line-height: 1.45; color: #555;">Not a writer. Not a grammar checker.</div>
    </div>
  </div>

  <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 22px; background: #121212;">
    <div style="font-family: 'Georgia', serif; color: #fff; font-size: 15px;">
      <span class="pill" style="background:#e3120b; margin-right: 12px;">Live prototype</span>
      Try the Red Pen yourself
    </div>
    <a href="https://economist-red-pen.vercel.app/" target="_blank" style="background: #e3120b; color: #fff; padding: 10px 22px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-decoration: none;">
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
      <div class="why-body">A tool that writes competes with the editor. One that audits enhances them. The market is saturated with generators. The gap is a QA backstop that audits AI-assisted drafts.</div>
      <div class="takeaway">Constraint = trust signal. The discipline is the product.</div>
    </div>

    <div class="dec-card">
      <div class="num">02</div>
      <div class="title">Three judges,<br>not one composite.</div>
      <div class="vs">vs. a single fuzzy 7/10</div>
      <div class="why-body" style="margin-top: 8px;"></div>
      <div class="why-label">Why</div>
      <div class="why-body">Editors need to know <em>which</em> dimension failed. Composite scores hide failures. Independent judges are independently false-able. They also stop one pillar's reasoning leaking into another.</div>
      <div class="takeaway">Specialised judges scale. One model trying to score everything will not.</div>
    </div>

    <div class="dec-card">
      <div class="num">03</div>
      <div class="title">Centralised guardrails<br>in the prompt.</div>
      <div class="vs">vs. user-controlled prompts</div>
      <div class="why-label">Why</div>
      <div class="why-body">Guardrails encoded into the prompts feeding the tool, not redefinable by users. Centralisation bakes in institutional best practice and prevents a well-meaning user from silently weakening the audit.</div>
      <div class="takeaway">House style belongs to the institution.</div>
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
      <div class="why-body">Tokenise the draft into UUID'd sentences <em>before</em> the LLM sees it. The LLM returns IDs. It never sees raw text. Chunked retrieval <em>causes</em> the false positives we are trying to catch. Claims fail because the supporting sentence sat in an unseen chunk.</div>
      <div class="takeaway">~400k context lets sources go in whole. Determinism &gt; cleverness.</div>
    </div>

    <div class="dec-card navy">
      <div class="num">02</div>
      <div class="title">Strict JSON +<br>LLM-as-judge with rubric.</div>
      <div class="vs">vs. freeform LLM-as-judge</div>
      <div class="why-label">Why</div>
      <div class="why-body">Freeform LLM-as-judge is unreliable. Strict JSON eliminates parse retries; the rubric forces structured failure modes. Three calls fire in parallel. Latency is capped by the slowest call, not the sum of all three.</div>
      <div class="takeaway"><strong style="color:#1b3a8a;">~66% faster</strong> than a sequential chain. Errors become testable.</div>
    </div>

    <div class="dec-card navy">
      <div class="num">03</div>
      <div class="title">No framework,<br>no DB, no session store.</div>
      <div class="vs">vs. LangChain · Promptfoo · Braintrust</div>
      <div class="why-label">Why</div>
      <div class="why-body">~200 LOC of evaluation logic doesn't need a framework. Frameworks lock you into their abstractions. Promptfoo assumes static rubrics. Editorial standards drift. You'd be fighting the framework within six months.</div>
      <div class="takeaway">Right-sized tooling beats trendy tooling at this scope.</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>6 / 13</span></div>
</section>

<!-- 7. CONSTRAINTS I WORKED AROUND -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">07 — Constraints I worked around</span>
    <span>Five calls I'd revisit with more time</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 6px;">Constraints I worked around.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 15px; color: #555; font-style: italic; margin-bottom: 18px;">Three-hour timebox. Five calls. Each one a known revisit.</p>

  <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; flex: 1;">

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 14px 14px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">01 · Eval bench</div>
      <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 10px;">No formal eval — manual sanity check only.</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; line-height: 1.5; color: #444; margin: 0;">No labelled data on hand. Ran the tool over a few articles and read the output.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">With time → editor-labelled test bench, CI gate.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 14px 14px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">02 · Orchestration</div>
      <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 10px;">One large-context call instead of LangChain.</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; line-height: 1.5; color: #444; margin: 0;">LangChain didn't cooperate inside the timebox. Pushed everything through one call to keep moving.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">With time → orchestration that caches sources and routes per judge.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 14px 14px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">03 · OCR</div>
      <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 10px;">Tesseract over PaddleOCR.</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; line-height: 1.5; color: #444; margin: 0;">PaddleOCR is stronger but needs a Python sidecar. Stayed in Node to avoid a second deploy pipeline.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">With time → PaddleOCR behind a queue for scanned filings.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 14px 14px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">04 · Judge set</div>
      <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 10px;">Started with three judges.</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; line-height: 1.5; color: #444; margin: 0;">Grounding, Voice, Rigor. Bias and source quality belong here too. Defer until Voice is calibrated. Numerical checks sit better in deterministic code.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">With time → expand the set, ship deterministic checks alongside.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 4px solid #e3120b; padding: 14px 14px; display: flex; flex-direction: column;">
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700; margin-bottom: 8px;">05 · Cost</div>
      <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 10px;">Didn't model cost for v1.</div>
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; line-height: 1.5; color: #444; margin: 0;">Per-draft cost is small at newspaper volume. EIU and customer service are different. That's where caching and small-model fallback earn their keep.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">With time → cost model per tenant.</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>7 / 13</span></div>
</section>

<!-- 8. WHAT I'D MEASURE -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">08 — What I'd measure</span>
    <span>Named metrics · instrumentation · baseline source</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 4px; line-height: 1.15;">Three things I'd measure.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 14px; color: #555; font-style: italic; margin-bottom: 10px;">Leading and lagging. Operational and strategic. One lead metric per pillar.</p>

  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; flex: 1;">

    <div style="background: #f9f6f0; border-top: 5px solid #e3120b; padding: 14px 16px; display: flex; flex-direction: column;">
      <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 8px;">
        <span style="background:#e3120b; color:#fff; padding:2px 8px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Primary</span>
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #6b6b6b; font-weight: 700;">Pillar 01</span>
      </div>
      <div style="font-family: 'Georgia', serif; font-size: 19px; font-weight: 700; color: #121212; line-height: 1.15; margin-bottom: 10px;">Editor productivity</div>

      <div style="background: #121212; color: #fff; padding: 12px 14px; border-left: 4px solid #e3120b; margin-bottom: 8px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.8px; color: #ff7a73; font-weight: 700; margin-bottom: 4px;">Lead metric</div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #fff; line-height: 1.25; margin-bottom: 4px;">Time-to-publish on AI-assisted drafts</div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; color: #cfcfcf; line-height: 1.4;">CMS event timestamps · 90-day baseline · target calibrated wk 1</div>
      </div>

      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; font-weight: 700; margin-bottom: 6px;">Supporting</div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <div style="border-left: 1px solid #cfc9bc; padding: 2px 0 2px 8px;">
          <div style="font-family: 'Georgia', serif; font-size: 11.5px; color: #444; line-height: 1.3;">Accept rate on Red Pen flags</div>
        </div>
        <div style="border-left: 1px solid #cfc9bc; padding: 2px 0 2px 8px;">
          <div style="font-family: 'Georgia', serif; font-size: 11.5px; color: #444; line-height: 1.3;">Issues caught pre-editor vs post-editor</div>
        </div>
      </div>

      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">The pillar that justifies the spend.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 5px solid #1b3a8a; padding: 14px 16px; display: flex; flex-direction: column;">
      <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 8px;">
        <span style="background:#1b3a8a; color:#fff; padding:2px 8px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Guardrail</span>
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #6b6b6b; font-weight: 700;">Pillar 02</span>
      </div>
      <div style="font-family: 'Georgia', serif; font-size: 19px; font-weight: 700; color: #121212; line-height: 1.15; margin-bottom: 10px;">Subscriber trust</div>

      <div style="background: #1b3a8a; color: #fff; padding: 12px 14px; border-left: 4px solid #e3120b; margin-bottom: 8px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.8px; color: #d6dfff; font-weight: 700; margin-bottom: 4px;">Lead metric</div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #fff; line-height: 1.25; margin-bottom: 4px;">Correction rate per AI-assisted piece</div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; color: #d6dfff; line-height: 1.4;">CMS corrections column · vs unassisted baseline · floor 1.0× · break 1.5×</div>
      </div>

      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; font-weight: 700; margin-bottom: 6px;">Supporting</div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <div style="border-left: 1px solid #cfc9bc; padding: 2px 0 2px 8px;">
          <div style="font-family: 'Georgia', serif; font-size: 11.5px; color: #444; line-height: 1.3;">Reader-reported errors per 1k views <span style="color:#999; font-style:italic;">(ideal but lagging)</span></div>
        </div>
        <div style="border-left: 1px solid #cfc9bc; padding: 2px 0 2px 8px;">
          <div style="font-family: 'Georgia', serif; font-size: 11.5px; color: #444; line-height: 1.3;">Time-to-correction</div>
        </div>
      </div>

      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">A floor, not a target. Reader trust should never go down.</div>
    </div>

    <div style="background: #f9f6f0; border-top: 5px solid #c68a00; padding: 14px 16px; display: flex; flex-direction: column;">
      <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 8px;">
        <span style="background:#c68a00; color:#fff; padding:2px 8px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;">Leading</span>
        <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; color: #6b6b6b; font-weight: 700;">Pillar 03</span>
      </div>
      <div style="font-family: 'Georgia', serif; font-size: 19px; font-weight: 700; color: #121212; line-height: 1.15; margin-bottom: 10px;">Tool adoption</div>

      <div style="background: #8a6d00; color: #fff; padding: 12px 14px; border-left: 4px solid #e3120b; margin-bottom: 8px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.8px; color: #fff2b3; font-weight: 700; margin-bottom: 4px;">Lead metric</div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #fff; line-height: 1.25; margin-bottom: 4px;">% AI-assisted drafts run through Red Pen</div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; color: #fff2b3; line-height: 1.4;">CMS tag + API logs · pilot beats target set wk 1</div>
      </div>

      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; font-weight: 700; margin-bottom: 6px;">Supporting</div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <div style="border-left: 1px solid #cfc9bc; padding: 2px 0 2px 8px;">
          <div style="font-family: 'Georgia', serif; font-size: 11.5px; color: #444; line-height: 1.3;">Card-engagement rate</div>
        </div>
        <div style="border-left: 1px solid #cfc9bc; padding: 2px 0 2px 8px;">
          <div style="font-family: 'Georgia', serif; font-size: 11.5px; color: #444; line-height: 1.3;">Override-to-accept ratio per judge</div>
        </div>
      </div>

      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11px; font-style: italic; color: #6b6b6b; line-height: 1.4;">The platform PM's metric. If editors don't use it, nothing else matters.</div>
    </div>

  </div>

  <div style="margin-top: 10px; background: #121212; color: #fff; padding: 10px 16px; border-left: 4px solid #e3120b; display: flex; align-items: center; gap: 16px;">
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700; min-width: 200px; line-height: 1.3;">Day-1 editor confidence</div>
    <div style="font-family: 'Georgia', serif; font-size: 13px; line-height: 1.4; color: #e0e0e0;">No survey. I read two behaviours that already exist: accept rate on flags, and tracked changes an editor adds that Red Pen missed. Confidence shows up in the next draft an editor opens. Surveys are a quarterly tripwire, never the primary signal.</div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>8 / 13</span></div>
</section>

<!-- 9. SECTION DIVIDER -->
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
      <div class="fix">"Who controls the prompting?" Answered.</div>
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
    <div style="font-family: 'Georgia', serif; font-size: 16px; color: #fff;">Build the four once. Ship the next ten features faster. Trust scales as a contract.</div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>10 / 13</span></div>
</section>

<!-- 11. PLATFORM STACK + TENANTS -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">11 — Productizing the platform</span>
    <span>One platform, three tenants, zero rebuilds</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 14px;">Productizing the platform. Beyond component enablement.</h2>

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
        <li>Economist voice <em>is</em> refusal. "We don't know yet" is a feature.</li>
        <li>Better prompts won't close the gap. The model itself has to change.</li>
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
        <li>Promptfoo, Langfuse, Braintrust assume static contracts.</li>
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
        <li>Off-the-shelf tools ship features. The contracts underneath are yours to build.</li>
        <li>Every team rebuilds eval logic from scratch.</li>
        <li>This is the gap at TEG. It's what I'd ship.</li>
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
        <li><strong style="color:#fff;">Published archive:</strong> 183 years of editorial decisions reified. What was published, what was corrected, what was refused. The decisions are already made.</li>
        <li><strong style="color:#fff;">Style Guide as rubric:</strong> the Economist Style Guide is already a codified ruleset. Half the work of building Voice judges is done.</li>
        <li><strong style="color:#fff;">Editorial veto trail:</strong> corrections column, "we don't know yet" patterns, the EIU/Newspaper wall. Mine these for the refusal contract.</li>
      </ul>
      <div class="punch">Buying this in is buying a generic auditor for a non-generic newsroom. That trade collapses the moat.</div>
    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>12 / 13</span></div>
</section>

<!-- 13. CLOSING -->
<section class="slide closing-slide">
  <div class="header-bar">
    <span class="brand">Thank you</span>
    <span>Three things if I joined</span>
  </div>
  <div style="margin-top: auto; margin-bottom: auto; max-width: 1100px;">
    <div class="kicker" style="color:#ff7a73;">If I joined</div>
    <h1 style="font-size: 52px; line-height: 1.1; margin-bottom: 36px;">Three things I'd do.</h1>

    <div style="display: flex; flex-direction: column; gap: 18px;">

      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <div style="font-family: 'Georgia', serif; font-size: 56px; font-weight: 700; color: #e3120b; line-height: 0.9; min-width: 70px;">01</div>
        <div>
          <div style="font-family: 'Georgia', serif; font-size: 22px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 6px;">Month one shadowing editors before opening a laptop.</div>
          <div style="font-family: 'Georgia', serif; font-size: 16px; color: #ccc; line-height: 1.45;">The deck is a hypothesis. They are the test.</div>
        </div>
      </div>

      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <div style="font-family: 'Georgia', serif; font-size: 56px; font-weight: 700; color: #e3120b; line-height: 0.9; min-width: 70px;">02</div>
        <div>
          <div style="font-family: 'Georgia', serif; font-size: 22px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 6px;">Ship the eval bench before the first new feature.</div>
          <div style="font-family: 'Georgia', serif; font-size: 16px; color: #ccc; line-height: 1.45;">The platform stops being a slide the day a CI gate blocks a prompt change.</div>
        </div>
      </div>

      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <div style="font-family: 'Georgia', serif; font-size: 56px; font-weight: 700; color: #e3120b; line-height: 0.9; min-width: 70px;">03</div>
        <div>
          <div style="font-family: 'Georgia', serif; font-size: 22px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 6px;">Hold the line on "audit, never write."</div>
          <div style="font-family: 'Georgia', serif; font-size: 16px; color: #ccc; line-height: 1.45;">The Economist's edge is what it won't publish. The platform's job is to hold that line.</div>
        </div>
      </div>

    </div>

    <div style="margin-top: 44px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #999;">
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
    <p style="font-family: 'Georgia', serif; font-size: 22px; color: #555; font-style: italic; margin-top: 18px; max-width: 900px; line-height: 1.4;">Red Pen roadmap · platform roadmap · patterns I've shipped · infra · stack · editor-pain evidence.</p>
    <div style="margin-top: 44px; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #6b6b6b;">
      A1 · Red Pen roadmap &nbsp;·&nbsp; A2 · Platform roadmap &nbsp;·&nbsp; A3 · Why this isn't theory &nbsp;·&nbsp; A4 · Infrastructure &nbsp;·&nbsp; A5 · Stack &nbsp;·&nbsp; A6 · Sources
    </div>
  </div>
  <div class="footer"><span>The Editorial Red Pen</span><span>Appendix</span></div>
</section>

<!-- A1. RED PEN FEATURE ROADMAP -->
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
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700;">Now → 4 weeks</span>
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; color: #999; letter-spacing: 1px; text-transform: uppercase;">Phase 01</span>
        </div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 5px;">Shadow real edits</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Sit with editors. Find where the Red Pen slots in or gets in the way. A tool no editor opens does not exist.</p>
      </div>

      <div style="background:#f9f6f0; border-top: 3px solid #e3120b; padding: 12px 14px;">
        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700;">Weeks 4 — 10</span>
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 8.5px; color: #999; letter-spacing: 1px; text-transform: uppercase;">Phase 02</span>
        </div>
        <div style="font-family: 'Georgia', serif; font-size: 16px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 5px;">Co-write the rules</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Build the voice ruleset <em>with</em> writers. Use existing edited articles as a baseline to extract candidate rules, then put them in front of editors.</p>
      </div>

      <div style="background:#f9f6f0; border-top: 3px solid #e3120b; padding: 12px 14px;">
        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px;">
          <span style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #e3120b; font-weight: 700;">Weeks 8 — 14</span>
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
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 4px;">Build 02 — House-style layer over foundation models</div>
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 4px;">A house-style layer, not a house-style model.</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Foundation models keep getting better at writing. A specialisation layer (codified rubrics, structured judges, retrieval over the Style Guide and edited archive) captures Economist voice without retraining anything. Faster to ship, easier to evolve, no model lock-in.</p>
      </div>

      <div style="background:#f4f5fb; border-top: 3px solid #1b3a8a; padding: 12px 14px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 4px;">Build 03 — Multi-modal evidence</div>
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 4px;">Audit charts and figures, not just prose.</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">Half of Economist claims sit in charts. Today's tool is blind to them. Multi-modal grounding catches misread axes, dropped units, swapped scales.</p>
      </div>

      <div style="background:#f4f5fb; border-top: 3px solid #1b3a8a; padding: 12px 14px;">
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9.5px; text-transform: uppercase; letter-spacing: 1.5px; color: #1b3a8a; font-weight: 700; margin-bottom: 4px;">Build 04 — In-situ integration</div>
        <div style="font-family: 'Georgia', serif; font-size: 15px; font-weight: 700; color: #121212; line-height: 1.2; margin-bottom: 4px;">Lives inside the CMS or Google Docs.</div>
        <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; line-height: 1.45; color: #444; margin: 0;">A standalone tool teaches editors a habit. An embedded one removes the habit and makes the audit invisible. This is the year-2 surface.</p>
      </div>

    </div>

  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A1 · Appendix</span></div>
</section>

<!-- A2. PLATFORM 90-DAY ROADMAP -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A2 — Platform roadmap</span>
    <span>What ships in the first quarter</span>
  </div>
  <h2 style="font-size: 30px; margin-bottom: 12px;">What I'd ship in the first 90 days.</h2>

  <div class="timeline">

    <div class="tl-col">
      <div class="week">Weeks 1 — 4</div>
      <div class="what">Eval contract, runner, first judge</div>
      <ul>
        <li>YAML contract spec + runner</li>
        <li>Test bench (~20 cases) editor-validated</li>
        <li>Grounding judge — reference</li>
        <li>Red Pen runs on the contract</li>
      </ul>
      <div class="tenant"><strong>Tenant 1 live</strong>Newspaper · Editorial Red Pen</div>
    </div>

    <div class="tl-col">
      <div class="week">Weeks 5 — 8</div>
      <div class="what">Registries + second tenant</div>
      <ul>
        <li>Source registry · per-team, versioned</li>
        <li>Prompt registry · owner, version, eval-linked</li>
        <li>Judge-as-service interface extracted</li>
        <li>EIU copilot plugs in</li>
      </ul>
      <div class="tenant"><strong>Tenant 2 live</strong>EIU · Copilot grounding</div>
    </div>

    <div class="tl-col">
      <div class="week">Weeks 9 — 12</div>
      <div class="what">CI hook, refusal, third tenant</div>
      <ul>
        <li>CI hook · no merge without bench green</li>
        <li>Voice + Rigor judges in production</li>
        <li>Refusal added to JudgeResult</li>
        <li>Customer service onboards</li>
      </ul>
      <div class="tenant"><strong>Tenant 3 live</strong>Customer service · Refusal</div>
    </div>

  </div>

  <div class="cuts-strip">
    <div class="label">What I'd cut</div>
    <div class="cuts">
      <strong>No fine-tune year 1</strong> · <strong>No CMS integration</strong> · <strong>No multi-modal</strong> · <strong>No PM-spec linter</strong>
    </div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A2 · Appendix</span></div>
</section>

<!-- A3. CREDENTIALS -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A3 — Why this isn't theory</span>
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
      <p style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 1.5; color: #333; margin: 0 0 10px 0;">Experimentation platform serving every PM. Defined experimentation velocity as the platform metric. Same playbook for eval velocity at TEG.</p>
      <div style="margin-top: auto; padding-top: 10px; border-top: 1px dashed #cfc9bc; font-family: 'Georgia', serif; font-size: 11.5px; font-style: italic; color: #6b6b6b;">+35% throughput · 18% faster decisions.</div>
    </div>

  </div>

  <div style="margin-top: 14px; background: #3a3a3a; color: #fff; padding: 12px 18px; border-left: 4px solid #e3120b; display: flex; align-items: center; justify-content: space-between;">
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #ff7a73; font-weight: 700;">The through-line</div>
    <div style="font-family: 'Georgia', serif; font-size: 15px; color: #fff;">AI wins in elite domains only when the evaluation layer is built by someone who's lived in the workflow.</div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A3 · Appendix</span></div>
</section>

<!-- A4. INFRASTRUCTURE -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A4 — Infrastructure</span>
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
       ─────────────────────┼───────────────────────┐
       ▼                    ▼                        ▼
  ┌──────────┐       ┌──────────────┐       ┌────────────────┐
  │  Parser  │       │  Tokeniser   │       │  Evaluator     │
  │ file→txt │─────▶ │  text→blocks │─────▶ │  3× LLM calls  │
  │ mammoth  │       │ Intl.        │       │  in parallel   │
  │ pdf-parse│       │ Segmenter    │       │ (strict JSON)  │
  │ tesseract│       │ +UUID per s. │       └────────┬───────┘
  └──────────┘       └──────────────┘               │
                                                    ▼
                                            <span class="red">Frontier general model</span>
                                            <span class="dim">(~400k ctx, one-shot)</span>

       <span class="dim">No database · No session store · No persistence · Request → response → done.</span>
</div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A4 · Appendix</span></div>
</section>

<!-- A5. STACK & CHUNKING -->
<section class="slide">
  <div class="header-bar">
    <span class="brand">A5 — Stack &amp; Chunking</span>
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
      <div class="cell tool">Frontier general model · strict JSON</div>
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

  <div class="footer"><span>The Editorial Red Pen</span><span>A5 · Appendix</span></div>
</section>

<!-- A6. EDITOR-PAIN SOURCES -->
<section class="slide a6-slide" id="a6-sources" style="padding: 36px 56px 52px 56px;">
  <div class="header-bar">
    <span class="brand">A6 — Editor-pain evidence</span>
    <span>The load is documented · I'm extrapolating to The Economist</span>
  </div>
  <h2 style="font-size: 26px; line-height: 1.15;">Editor pain is not assumed. It's measured across newsrooms.</h2>
  <p style="font-family: 'Georgia', serif; font-size: 13px; color: #555; font-style: italic; margin-bottom: 12px;">Nine sources, exact figures, one explicit extrapolation. Citations re-verified before submission.</p>

  <div class="a6-grid">

    <div class="src-card">
      <span class="verify-tag">Verified</span>
      <div class="src-num">01 · Verification time</div>
      <div class="src-stat">~50% of facts survive AI summarisation.</div>
      <div class="src-quote">"Human-generated summaries took three to four hours each. AI tools produced each summary in about a minute" — but recovered only ~half the facts, with longer AI summaries hallucinating <em>more</em>, not less.</div>
      <div class="src-link">
        <a href="https://www.cjr.org/analysis/can-ai-tools-meet-journalistic-standards.php" target="_blank">Can AI Tools Meet Journalistic Standards?</a>
        <span class="pub">Columbia Journalism Review · 2024</span>
      </div>
    </div>

    <div class="src-card">
      <span class="verify-tag">Verified</span>
      <div class="src-num">02 · Hallucination rate</div>
      <div class="src-stat">Heavy users hit hallucinations 3× as often (34% vs 12%).</div>
      <div class="src-quote">"Heavy users run into frequent hallucinations nearly three times more often than casual users (34% vs. 12%)." Power users are 10× more likely to spend 11+ minutes wrestling with output until satisfied.</div>
      <div class="src-link">
        <a href="https://www.rev.com/blog/ai-results" target="_blank">Heavy AI Users See 3× More Hallucinations</a>
        <span class="pub">Rev · 17 Feb 2026</span>
      </div>
    </div>

    <div class="src-card">
      <span class="verify-tag">Verified</span>
      <div class="src-num">03 · Fact-check load</div>
      <div class="src-stat">AI-content fact-checks more than doubled YoY at one major checker.</div>
      <div class="src-quote">"16% of the 619 claims fact-checked involved AI-generated content, compared with 7% the previous year" — Aos Fatos (Brazil). Indicative of a global shift, not yet a global aggregate. "Newsrooms lack the capacity to verify every claim."</div>
      <div class="src-link">
        <a href="https://reutersinstitute.politics.ox.ac.uk/news/ai-and-future-news-2026-what-we-learnt-about-its-impact-newsrooms-fact-checking-and-news" target="_blank">AI and the Future of News 2026</a>
        <span class="pub">Reuters Institute · 2026</span>
      </div>
    </div>

    <div class="src-card navy">
      <span class="verify-tag">Verified</span>
      <div class="src-num">04 · Workflow drag</div>
      <div class="src-stat">AI <em>increases</em> low-level editor work.</div>
      <div class="src-quote">"Many journalists say AI increases low-level work such as data cleaning and output checking. Newsrooms should examine workflows carefully to ensure AI reduces, rather than adds to, workload."</div>
      <div class="src-link">
        <a href="https://reutersinstitute.politics.ox.ac.uk/ai-adoption-uk-journalists-and-their-newsrooms-surveying-applications-approaches-and-attitudes" target="_blank">AI adoption by UK journalists</a>
        <span class="pub">Reuters Institute · Thurman et al. · 2025</span>
      </div>
    </div>

    <div class="src-card navy">
      <span class="verify-tag">Verified</span>
      <div class="src-num">05 · Adoption depth</div>
      <div class="src-stat">10% generate first drafts. 16% generate parts of articles. 22% use AI for research.</div>
      <div class="src-quote">"22% of journalists use AI at least monthly for story research; 16% for parts of articles (e.g. headlines); 10% for first drafts." Survey of n&gt;1,000 UK journalists, Aug-Nov 2024. Those drafts have to be policed by an editor.</div>
      <div class="src-link">
        <a href="https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2025-10/Gen_AI_and_News_Report_2025.pdf" target="_blank">Generative AI and News Report 2025 (PDF)</a>
        <span class="pub">Reuters Institute · Oct 2025</span>
      </div>
    </div>

    <div class="src-card navy">
      <span class="verify-tag">Verified</span>
      <div class="src-num">06 · Citation failure</div>
      <div class="src-stat">LLMs hallucinate authors, titles, and quotes.</div>
      <div class="src-quote">"AI tools like ChatGPT, Gemini, Copilot, and Meta AI are unable to reliably cite and quote their sources accurately, and commonly hallucinate authors and titles." Quotes are the single most-mishandled element.</div>
      <div class="src-link">
        <a href="https://www.cjr.org/analysis/i-tested-how-well-ai-tools-work-for-journalism.php" target="_blank">I Tested How Well AI Tools Work for Journalism</a>
        <span class="pub">Columbia Journalism Review · 2024</span>
      </div>
    </div>

    <div class="src-card amber">
      <span class="verify-tag warn">Re-verify</span>
      <div class="src-num">07 · Sub-editor time budget</div>
      <div class="src-stat">UK sub-editors work to tight, often hourly turnaround.</div>
      <div class="src-quote">"For breaking news, a copy editor may have less than an hour to read a piece and do everything the article needs." Adding "police an AI draft for hallucinations and voice slips" is an extra job, not a replacement task.</div>
      <div class="src-link">
        <a href="https://blog.ciep.uk/subediting/" target="_blank">What is subediting?</a>
        <span class="pub">CIEP · UK editors' professional body</span>
      </div>
    </div>

    <div class="src-card amber">
      <span class="verify-tag">Verified</span>
      <div class="src-num">08 · The thesis, externally</div>
      <div class="src-stat">Editing is where institutional standards live.</div>
      <div class="src-quote">"AI is everywhere. Editors should be, too." AI scales drafting, so the bottleneck moves to editing — and editing is where house style, refusal, and rigour are enforced. Exactly the Red Pen's thesis.</div>
      <div class="src-link">
        <a href="https://www.poynter.org/commentary/2025/ai-editors-hallucinations-human-help/" target="_blank">AI is everywhere. Editors should be, too.</a>
        <span class="pub">Poynter · April 2025</span>
      </div>
    </div>

    <div class="src-card dark">
      <span class="verify-tag">Verified</span>
      <div class="src-num">09 · Why The Economist feels it most</div>
      <div class="src-stat">Hard line on consumer-AI licensing. Format investment. Cloudflare-blocked scrapers.</div>
      <div class="src-quote">"Holding a hard line against licensing deals with AI firms it views as competitors… investing in formats like video and audio that are more difficult for machines to mimic… actively blocking AI bots via Cloudflare." Enterprise API stays open via ring-fenced LLMs.</div>
      <div class="src-link">
        <a href="https://digiday.com/media/inside-the-economists-plan-to-grow-revenues-in-a-post-search-ai-driven-future/" target="_blank">Inside The Economist's post-search plan</a>
        <span class="pub">Digiday · 2024</span>
      </div>
    </div>

  </div>

  <div class="talk-strip">
    <div class="label">The honest part</div>
    <div class="body">I have <strong>not</strong> spoken to an Economist editor. The load is documented across newsrooms; I'm extrapolating to TEG. Phase 1 of the Red Pen roadmap is editor shadowing. A falsifiable bet, replacing an assumption. Card 03 is a frontline indicator (Aos Fatos), not a global aggregate; Card 09 reflects TEG's consumer-AI posture, not a blanket licensing refusal.</div>
  </div>

  <div class="footer"><span>The Editorial Red Pen</span><span>A6 · Appendix · Editor-pain evidence</span></div>
</section>
`;

export default function SlidesPage() {
  return <div className="deck-v4" dangerouslySetInnerHTML={{ __html: DECK_HTML }} />;
}

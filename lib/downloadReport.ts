import type { EvaluateResponse } from "./types";

const CATEGORY_LABEL: Record<string, string> = {
  grounding: "Grounding",
  voice: "Voice",
  argumentation: "Argument",
};

const CATEGORY_COLOUR: Record<string, string> = {
  grounding: "#E3120B",
  voice: "#0F3B5F",
  argumentation: "#7A4F0A",
};

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildReportHTML(result: EvaluateResponse): string {
  const draftRec = result.ingestion.find((i) => i.role === "draft");
  const sourceRecs = result.ingestion.filter((i) => i.role === "source");
  const generated = new Date().toLocaleString("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
  });
  const total = result.mistakes.length;

  const blockText = new Map(result.blocks.map((b) => [b.id, b.text]));

  const byCategory = (["grounding", "voice", "argumentation"] as const).map(
    (cat) => ({
      cat,
      items: result.mistakes.filter((m) => m.category === cat),
    }),
  );

  const mistakeHtml = byCategory
    .map(({ cat, items }) => {
      if (items.length === 0) return "";
      const rows = items
        .map((m) => {
          const text = blockText.get(m.info_block_id) ?? "";
          return `<tr>
  <td class="quote">&ldquo;${esc(text)}&rdquo;</td>
  <td class="flaw">${esc(m.flaw)}</td>
  <td class="bid">${esc(m.info_block_id)}</td>
</tr>`;
        })
        .join("\n");
      return `<section class="cat cat-${cat}">
  <h2><span class="flag" style="background:${CATEGORY_COLOUR[cat]}"></span>${CATEGORY_LABEL[cat]} <span class="count">${items.length}</span></h2>
  <table>
    <thead>
      <tr><th>Flagged sentence</th><th>Flaw</th><th>Block ID</th></tr>
    </thead>
    <tbody>
${rows}
    </tbody>
  </table>
</section>`;
    })
    .filter(Boolean)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Editorial Red Pen — Audit Report</title>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=IBM+Plex+Sans+Condensed:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap");
  :root {
    --paper: #fbf8f1; --ink: #0a0a0a; --ink-2: #1c1a18; --ink-3: #3c3934;
    --rule: #9c9485; --econ-red: #e3120b;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: var(--paper); color: var(--ink);
    font-family: "IBM Plex Sans", system-ui, sans-serif;
    padding: 48px 56px 96px;
    max-width: 1080px; margin: 0 auto;
  }
  .flag-brand {
    display: inline-block; background: var(--econ-red); color: #fff;
    padding: 6px 14px 5px;
    font-family: "IBM Plex Sans Condensed", sans-serif;
    font-weight: 700; font-style: italic; font-size: 18px;
  }
  .meta {
    margin-top: 12px; padding: 6px 0; border-top: 1px solid var(--rule);
    font-family: "IBM Plex Sans", sans-serif;
    font-variant-caps: all-small-caps; letter-spacing: 0.08em;
    font-size: 12px; color: var(--ink-3);
  }
  h1 {
    margin-top: 40px;
    font-family: "Source Serif 4", Georgia, serif;
    font-size: 44px; font-weight: 700; color: var(--ink);
    letter-spacing: -0.01em;
  }
  .summary {
    margin-top: 24px; padding: 20px 24px; background: #fff;
    border: 1px solid var(--rule); border-left: 4px solid var(--econ-red);
  }
  .summary dt {
    font-family: "IBM Plex Sans Condensed", sans-serif;
    font-weight: 700; font-size: 10px; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--econ-red); margin-top: 8px;
  }
  .summary dt:first-of-type { margin-top: 0; }
  .summary dd {
    font-family: "Source Serif 4", Georgia, serif;
    font-size: 16px; color: var(--ink); margin-top: 4px; line-height: 1.45;
  }
  .tally {
    margin-top: 32px; border-top: 2px solid var(--ink);
    padding-top: 20px; display: flex; gap: 40px; align-items: baseline;
  }
  .tally .total {
    font-family: "Source Serif 4", Georgia, serif;
    font-size: 56px; font-weight: 700; color: var(--econ-red);
    line-height: 1; font-feature-settings: "tnum" 1;
  }
  .tally .lbl {
    font-family: "IBM Plex Sans Condensed", sans-serif;
    font-variant-caps: all-small-caps; letter-spacing: 0.12em;
    font-size: 14px; color: var(--ink);
  }
  .tally dl { display: flex; gap: 24px; margin-left: auto; }
  .tally dl > div { display: flex; gap: 6px; font-family: "IBM Plex Sans", sans-serif; }
  .tally dt {
    font-variant-caps: all-small-caps; letter-spacing: 0.08em;
    color: var(--ink-2); font-size: 13px;
  }
  .tally dd { font-weight: 700; color: var(--ink); font-size: 13px; }
  section.cat { margin-top: 48px; }
  section.cat h2 {
    font-family: "Source Serif 4", Georgia, serif;
    font-size: 26px; font-weight: 700;
    padding-bottom: 10px; border-bottom: 1px solid var(--rule);
    display: flex; align-items: baseline; gap: 10px;
  }
  section.cat h2 .flag {
    display: inline-block; width: 4px; height: 22px;
  }
  section.cat h2 .count {
    margin-left: auto;
    font-family: "IBM Plex Sans Condensed", sans-serif;
    font-variant-caps: all-small-caps; letter-spacing: 0.1em;
    font-size: 14px; color: var(--ink-3);
  }
  table {
    width: 100%; border-collapse: collapse; margin-top: 16px;
    font-family: "IBM Plex Sans", sans-serif;
  }
  thead th {
    text-align: left; padding: 10px 12px;
    font-family: "IBM Plex Sans Condensed", sans-serif;
    font-weight: 700; font-size: 11px; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--econ-red);
    border-bottom: 1px solid var(--rule);
  }
  tbody td {
    padding: 14px 12px; border-bottom: 1px solid var(--rule);
    vertical-align: top; font-size: 14px; line-height: 1.5; color: var(--ink);
  }
  tbody .quote {
    font-family: "Source Serif 4", Georgia, serif;
    font-style: italic; max-width: 420px;
  }
  tbody .flaw { font-family: "Source Serif 4", Georgia, serif; }
  tbody .bid {
    font-family: "IBM Plex Mono", monospace;
    font-size: 11px; color: var(--ink-3);
    font-variant-caps: all-small-caps; letter-spacing: 0.06em;
    white-space: nowrap;
  }
  footer {
    margin-top: 64px; padding-top: 16px; border-top: 1px solid var(--rule);
    font-family: "IBM Plex Sans Condensed", sans-serif;
    font-variant-caps: all-small-caps; letter-spacing: 0.1em;
    font-size: 11px; color: var(--ink-3); text-align: center;
  }
  @media print {
    body { padding: 24px 32px; }
    section.cat { break-inside: avoid; }
  }
</style>
</head>
<body>
  <span class="flag-brand">The Editorial Red Pen</span>
  <div class="meta">Audit report · generated ${esc(generated)} · model ${esc(result.model)}</div>

  <h1>Audit report</h1>

  <dl class="summary">
    <dt>Draft</dt>
    <dd>${draftRec ? esc(draftRec.name) + " (" + esc(draftRec.method) + ")" : "—"}</dd>
    <dt>Sources</dt>
    <dd>${sourceRecs.length === 0 ? "None · grounding desk dark" : sourceRecs.map((s) => esc(s.name) + " (" + esc(s.method) + ")").join(", ")}</dd>
    <dt>Info-blocks</dt>
    <dd>${result.blocks.length}</dd>
  </dl>

  <div class="tally">
    <span class="total">${total}</span>
    <span class="lbl">Red-lines</span>
    <dl>
      <div><dt>Grounding</dt><dd>${result.totals.grounding}</dd></div>
      <div><dt>Voice</dt><dd>${result.totals.voice}</dd></div>
      <div><dt>Argument</dt><dd>${result.totals.argumentation}</dd></div>
    </dl>
  </div>

${mistakeHtml}

  <footer>The Editorial Red Pen · evaluation only · no content was generated</footer>
</body>
</html>`;
}

export function downloadReport(result: EvaluateResponse) {
  const html = buildReportHTML(result);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const draftName =
    result.ingestion.find((i) => i.role === "draft")?.name ?? "manuscript";
  const stem = draftName.replace(/\.[^.]+$/, "");
  const a = document.createElement("a");
  a.href = url;
  a.download = `red-pen-report-${stem}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

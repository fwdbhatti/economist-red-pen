import type { Mistake } from "@/lib/types";

export function renderDraftWithMarks(
  draft: string,
  mistakes: Mistake[],
  activeId: string | null,
): string {
  if (!mistakes.length) return escapeHtml(draft);

  type Span = { start: number; end: number; m: Mistake };
  const spans: Span[] = [];
  const usedRanges: Array<[number, number]> = [];

  for (const m of mistakes) {
    const idx = findFuzzy(draft, m.exact_quote, usedRanges);
    if (idx === -1) continue;
    const end = idx + m.exact_quote.length;
    spans.push({ start: idx, end, m });
    usedRanges.push([idx, end]);
  }
  spans.sort((a, b) => a.start - b.start);

  let html = "";
  let cursor = 0;
  for (const s of spans) {
    if (s.start < cursor) continue;
    html += escapeHtml(draft.slice(cursor, s.start));
    const quote = escapeHtml(draft.slice(s.start, s.end));
    const isActive = s.m.id === activeId;
    html += `<mark class="redpen" data-type="${s.m.category}" data-id="${s.m.id}" data-active="${isActive}">${quote}</mark>`;
    cursor = s.end;
  }
  html += escapeHtml(draft.slice(cursor));
  return html;
}

function findFuzzy(
  haystack: string,
  needle: string,
  used: Array<[number, number]>,
): number {
  if (!needle) return -1;
  const direct = haystack.indexOf(needle);
  if (direct !== -1 && !overlaps(direct, direct + needle.length, used)) {
    return direct;
  }
  const normH = haystack.toLowerCase();
  const normN = needle.toLowerCase();
  const lc = normH.indexOf(normN);
  if (lc !== -1 && !overlaps(lc, lc + needle.length, used)) return lc;

  const collapsed = needle.replace(/\s+/g, " ").trim();
  if (collapsed !== needle) {
    const i = haystack.indexOf(collapsed);
    if (i !== -1 && !overlaps(i, i + collapsed.length, used)) return i;
  }
  return -1;
}

function overlaps(
  start: number,
  end: number,
  used: Array<[number, number]>,
): boolean {
  return used.some(([a, b]) => !(end <= a || start >= b));
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function draftToParagraphs(html: string): string {
  return html
    .split(/\n{2,}/)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("");
}

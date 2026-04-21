import type { EvaluateResponse, Mistake, MistakeCategory } from "@/lib/types";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const CATEGORY_PRIORITY: Record<MistakeCategory, number> = {
  grounding: 0,
  voice: 1,
  argumentation: 2,
};

export function renderDraftHTML(
  result: EvaluateResponse,
  activeId: string | null,
): string {
  const blockText = new Map(result.blocks.map((b) => [b.id, b.text]));
  const mistakeByBlock = new Map<string, Mistake[]>();
  for (const m of result.mistakes) {
    const list = mistakeByBlock.get(m.info_block_id) ?? [];
    list.push(m);
    mistakeByBlock.set(m.info_block_id, list);
  }
  for (const list of mistakeByBlock.values()) {
    list.sort(
      (a, b) =>
        CATEGORY_PRIORITY[a.category] - CATEGORY_PRIORITY[b.category],
    );
  }

  const paragraphsHtml = result.paragraphs.map((para) => {
    const inner = para.blockIds
      .map((bid) => {
        const text = blockText.get(bid) ?? "";
        const flags = mistakeByBlock.get(bid);
        if (!flags || flags.length === 0) {
          return `<span data-block-id="${bid}">${escapeHtml(text)} </span>`;
        }
        const primary = flags[0];
        const isActive = flags.some((f) => f.id === activeId);
        return `<mark class="redpen" data-type="${primary.category}" data-block-id="${bid}" data-mistake-id="${primary.id}" data-active="${isActive}">${escapeHtml(text)}</mark> `;
      })
      .join("");
    return `<p>${inner}</p>`;
  });

  return paragraphsHtml.join("\n");
}

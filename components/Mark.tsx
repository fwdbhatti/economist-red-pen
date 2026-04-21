import type { EvaluateResponse, Mistake } from "@/lib/types";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Render the draft so that ONLY the active mistake is highlighted.
 * Inactive flagged blocks render as plain spans — a single-highlight UX.
 */
export function renderDraftHTML(
  result: EvaluateResponse,
  activeMistakeId: string | null,
): string {
  const activeMistake: Mistake | undefined = activeMistakeId
    ? result.mistakes.find((m) => m.id === activeMistakeId)
    : undefined;
  const activeBlockId = activeMistake?.info_block_id ?? null;
  const blockText = new Map(result.blocks.map((b) => [b.id, b.text]));

  const paragraphsHtml = result.paragraphs.map((para) => {
    const inner = para.blockIds
      .map((bid) => {
        const text = blockText.get(bid) ?? "";
        if (activeMistake && bid === activeBlockId) {
          return `<mark class="redpen" data-type="${activeMistake.category}" data-block-id="${bid}" data-mistake-id="${activeMistake.id}" data-active="true">${escapeHtml(text)}</mark> `;
        }
        return `<span data-block-id="${bid}">${escapeHtml(text)} </span>`;
      })
      .join("");
    return `<p>${inner}</p>`;
  });

  return paragraphsHtml.join("\n");
}

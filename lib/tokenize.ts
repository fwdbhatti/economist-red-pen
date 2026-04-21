import type { InfoBlock } from "./types";

export interface TokenizedDraft {
  blocks: InfoBlock[];
  paragraphs: Array<{ blockIds: string[] }>;
}

export function tokenizeDraft(draft: string): TokenizedDraft {
  const paragraphTexts = draft
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const blocks: InfoBlock[] = [];
  const paragraphs: Array<{ blockIds: string[] }> = [];

  const segmenter = hasIntlSegmenter()
    ? new Intl.Segmenter("en", { granularity: "sentence" })
    : null;

  for (const para of paragraphTexts) {
    const sentences: string[] = [];
    if (segmenter) {
      for (const seg of segmenter.segment(para)) {
        const t = seg.segment.trim();
        if (t) sentences.push(t);
      }
    } else {
      for (const s of fallbackSplit(para)) {
        const t = s.trim();
        if (t) sentences.push(t);
      }
    }

    const blockIds: string[] = [];
    for (const sentence of sentences) {
      const id = `b_${crypto.randomUUID().slice(0, 8)}`;
      blocks.push({ id, text: sentence });
      blockIds.push(id);
    }
    paragraphs.push({ blockIds });
  }

  return { blocks, paragraphs };
}

function hasIntlSegmenter(): boolean {
  return typeof Intl !== "undefined" && "Segmenter" in Intl;
}

function fallbackSplit(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [text];
}

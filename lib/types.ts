export type MistakeCategory = "grounding" | "voice" | "argumentation";

export interface InfoBlock {
  id: string;
  text: string;
}

export interface Mistake {
  id: string;
  category: MistakeCategory;
  info_block_id: string;
  flaw: string;
}

export interface VoiceRule {
  id: string;
  kind: "banned_terms" | "passive_voice" | "custom";
  label: string;
  description?: string;
  items?: string[];
  children?: VoiceRule[];
}

export interface ParagraphRef {
  blockIds: string[];
}

export interface EvaluateResponse {
  model: string;
  blocks: InfoBlock[];
  paragraphs: ParagraphRef[];
  mistakes: Mistake[];
  totals: { grounding: number; voice: number; argumentation: number };
}

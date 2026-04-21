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

export type VoiceRuleKind =
  | "plain_english"
  | "banned_terms"
  | "active_voice"
  | "perspective"
  | "register"
  | "custom";

export interface VoiceRule {
  id: string;
  kind: VoiceRuleKind;
  label: string;
  description?: string;
  items?: string[];
  enabled: boolean;
}

export interface ParagraphRef {
  blockIds: string[];
}

export interface IngestionRecord {
  name: string;
  method: string;
}

export interface EvaluateResponse {
  model: string;
  blocks: InfoBlock[];
  paragraphs: ParagraphRef[];
  mistakes: Mistake[];
  totals: { grounding: number; voice: number; argumentation: number };
  ingestion: IngestionRecord[];
}

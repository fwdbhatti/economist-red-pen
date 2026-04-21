export type MistakeCategory = "grounding" | "voice" | "argumentation";
export type Severity = "low" | "medium" | "high";

export interface Mistake {
  id: string;
  category: MistakeCategory;
  severity: Severity;
  exact_quote: string;
  explanation: string;
  rule_ref?: string;
}

export interface VoiceRule {
  id: string;
  kind: "banned_terms" | "passive_voice" | "custom";
  label: string;
  description?: string;
  items?: string[];
  children?: VoiceRule[];
}

export interface EvaluateResponse {
  model: string;
  draft: string;
  mistakes: Mistake[];
  totals: { grounding: number; voice: number; argumentation: number };
}

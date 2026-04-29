export type MistakeCategory = "grounding" | "voice" | "argumentation";

export type MistakeSeverity = "error" | "nuance" | "opinion";

export interface InfoBlock {
  id: string;
  text: string;
}

export interface Mistake {
  id: string;
  category: MistakeCategory;
  severity: MistakeSeverity;
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
  role: "draft" | "source";
  name: string;
  method: string;
}

export interface ApiErrorDetail {
  name?: string;
  status?: number;
  code?: string;
  type?: string;
  requestId?: string;
  hint?: string;
  raw?: string;
  stack?: string;
}

export interface ApiErrorResponse {
  error: string;
  detail?: ApiErrorDetail;
}

export interface EvaluateResponse {
  model: string;
  blocks: InfoBlock[];
  paragraphs: ParagraphRef[];
  mistakes: Mistake[];
  totals: { grounding: number; voice: number; argumentation: number };
  ingestion: IngestionRecord[];
  draftText?: string;
  sources?: Array<{ name: string; text: string }>;
}

export type ConceptRole = "article" | "source" | "concept";
export type EdgeKind = "supports" | "contradicts" | "elaborates" | "cites";
export type EdgePolarity = "positive" | "negative";

export interface ConceptOrigin {
  docId: string;
  blockIds: string[];
}

export type ConceptKind = "claim" | "topic";
export type SupportStatus = "supported" | "unsupported" | "topic";

export interface ConceptNode {
  id: string;
  label: string;
  role: ConceptRole;
  summary: string;
  origin: ConceptOrigin;
  salience: number;
  kind?: ConceptKind;
  support?: SupportStatus;
}

export interface ConceptEdge {
  id: string;
  from: string;
  to: string;
  kind: EdgeKind;
  polarity: EdgePolarity;
  confidence: number;
  rationale: string;
  evidence: ConceptOrigin[];
}

export interface ConceptGraph {
  model: string;
  generatedAt: string;
  nodes: ConceptNode[];
  edges: ConceptEdge[];
}

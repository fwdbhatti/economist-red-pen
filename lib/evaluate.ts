import OpenAI from "openai";
import type { Mistake, MistakeCategory, VoiceRule } from "./types";

const MODEL = process.env.OPENAI_MODEL ?? "gpt-5.4";

const MISTAKE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["mistakes"],
  properties: {
    mistakes: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["severity", "exact_quote", "explanation"],
        properties: {
          severity: { type: "string", enum: ["low", "medium", "high"] },
          exact_quote: { type: "string" },
          explanation: { type: "string" },
          rule_ref: { type: "string" },
        },
      },
    },
  },
} as const;

const GROUNDING_INSTRUCTIONS = `You are an uncompromising sub-editor on the fact-checking desk of The Economist.
Task: compare the MANUSCRIPT to the SOURCE DOCUMENTS. Flag every sentence or clause that:
- claims a fact, statistic, date, name, or causal link that is not directly supported by the sources;
- extrapolates, rounds, or rewords a source figure in a way that changes its meaning;
- attributes a statement to a person or institution without warrant in the sources.
Do NOT flag stylistic issues — only grounding failures.
Each flagged item must include the exact verbatim quote from the manuscript (unchanged punctuation and spelling).
If the manuscript is clean, return an empty list.`;

const VOICE_INSTRUCTIONS = `You are the style editor of The Economist. Audit the MANUSCRIPT against the VOICE RULES supplied.
Flag every phrase or sentence that violates the rules: banned terms (lexicon), passive voice (unless an exception applies), jargon, hedging, adverbial flab, and house-style breaches.
Do NOT flag factual issues.
Each flagged item must cite the exact verbatim quote from the manuscript and, where relevant, name the rule that was broken in the \`rule_ref\` field (e.g. "Rule 2 · banned term").`;

const ARGUMENTATION_INSTRUCTIONS = `You are the leader-writer of The Economist. Audit the MANUSCRIPT for argumentative defects:
- missing premises, unsupported inferences, non-sequiturs;
- claims that beg the question or assume what they purport to prove;
- paragraphs that gesture at evidence without providing it;
- conclusions that overshoot what the preceding argument can support.
Do NOT flag grammar, style, or factual slips. Only flag gaps in the chain of reasoning.
Each flagged item must cite the exact verbatim quote from the manuscript and a one-sentence explanation of the logical defect.`;

function rulesToPrompt(rules: VoiceRule[]): string {
  if (!rules.length) {
    return "No explicit voice rules were supplied. Apply The Economist's standard style guide.";
  }
  return rules
    .map((r, i) => {
      const items = (r.items ?? []).length
        ? `\n   Items: ${(r.items ?? []).map((x) => `"${x}"`).join(", ")}`
        : "";
      return `${i + 1}. ${r.label}${r.description ? ` — ${r.description}` : ""}${items}`;
    })
    .join("\n");
}

async function runCall(
  client: OpenAI,
  category: MistakeCategory,
  instructions: string,
  userInput: string,
): Promise<Mistake[]> {
  const res = await client.responses.create({
    model: MODEL,
    instructions,
    input: userInput,
    text: {
      format: {
        type: "json_schema",
        name: `${category}_mistakes`,
        schema: MISTAKE_SCHEMA,
        strict: true,
      },
    },
  });

  const raw = res.output_text;
  if (!raw) return [];
  let parsed: { mistakes: Array<Omit<Mistake, "id" | "category">> };
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }

  return (parsed.mistakes ?? []).map((m) => ({
    id: `${category}-${crypto.randomUUID()}`,
    category,
    severity: m.severity ?? "medium",
    exact_quote: m.exact_quote,
    explanation: m.explanation,
    rule_ref: m.rule_ref,
  }));
}

export async function evaluateDraft(params: {
  draft: string;
  sources: Array<{ name: string; text: string }>;
  rules: VoiceRule[];
  apiKey: string;
}): Promise<{ mistakes: Mistake[]; model: string }> {
  const client = new OpenAI({ apiKey: params.apiKey });

  const sourcesBlock = params.sources.length
    ? params.sources
        .map(
          (s, i) =>
            `--- SOURCE ${i + 1} · ${s.name} ---\n${s.text.slice(0, 60_000)}`,
        )
        .join("\n\n")
    : "(no source documents supplied)";

  const groundingInput = `SOURCE DOCUMENTS:\n${sourcesBlock}\n\n--- MANUSCRIPT ---\n${params.draft}`;
  const voiceInput = `VOICE RULES:\n${rulesToPrompt(params.rules)}\n\n--- MANUSCRIPT ---\n${params.draft}`;
  const argInput = `--- MANUSCRIPT ---\n${params.draft}`;

  const [grounding, voice, argumentation] = await Promise.all([
    runCall(client, "grounding", GROUNDING_INSTRUCTIONS, groundingInput),
    runCall(client, "voice", VOICE_INSTRUCTIONS, voiceInput),
    runCall(client, "argumentation", ARGUMENTATION_INSTRUCTIONS, argInput),
  ]);

  return {
    mistakes: [...grounding, ...voice, ...argumentation],
    model: MODEL,
  };
}

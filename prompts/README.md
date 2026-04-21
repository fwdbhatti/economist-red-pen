# Editable Prompts

Each file in this directory is the **full prompt** (system instructions + inputs + task + output spec) for one of the three parallel evaluation chains that `/api/evaluate` fires at OpenAI.

| File | Chain | What it audits |
|---|---|---|
| [`grounding.md`](./grounding.md) | 1. Absolute Grounding | Every claim against the supplied source documents |
| [`voice.md`](./voice.md) | 2. Editorial Voice | Rules defined in the Voice Configuration panel |
| [`argumentation.md`](./argumentation.md) | 3. Argumentative Rigour (red-team) | Logical gaps, ignored counter-evidence |

## How edits flow

- **Edit freely.** The server reads these at request time — no rebuild required.
- Keep the `[OUTPUT FORMAT]` JSON block intact. The server enforces a strict JSON schema with exactly two fields per mistake: `info_block_id` and `flaw`. Adding fields will fail validation.
- The `{{placeholders}}` are substituted server-side. If you remove one, the corresponding context is dropped.

## Available placeholders

| Placeholder | Populated by |
|---|---|
| `{{ARTICLE_BLOCKS}}` | JSON array of `{id, text}` Info-Blocks produced from the manuscript |
| `{{SOURCES}}` | Concatenated source documents, each prefixed with `--- SOURCE N · filename ---` |
| `{{RULES}}` | Numbered human-readable dump of the voice-rules config |

## Architecture note

The LLM never sees raw prose directly — it sees Info-Blocks (sentence-level chunks with UUIDs). Responses reference those UUIDs, which the UI then maps back to the DOM via `data-block-id`. No fuzzy string matching; no drift. See [`lib/tokenize.ts`](../lib/tokenize.ts) and [`lib/evaluate.ts`](../lib/evaluate.ts).

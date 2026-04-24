import { NextRequest, NextResponse } from "next/server";
import { evaluateDraft } from "@/lib/evaluate";
import { parseFileToText } from "@/lib/parseFile";
import type { EvaluateResponse, VoiceRule } from "@/lib/types";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured." },
      { status: 500 },
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const draftFile = form.get("draft");
  if (!(draftFile instanceof File)) {
    return NextResponse.json({ error: "Draft file is required." }, { status: 400 });
  }

  const ingestion: Array<{ role: "draft" | "source"; name: string; method: string }> = [];

  let draft: string;
  try {
    const parsed = await parseFileToText(draftFile);
    draft = parsed.text;
    ingestion.push({
      role: "draft",
      name: draftFile.name,
      method: parsed.method,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Draft parse failed." },
      { status: 400 },
    );
  }
  if (!draft.trim()) {
    return NextResponse.json({ error: "Draft is empty." }, { status: 400 });
  }

  const sourceFiles = form
    .getAll("sources")
    .filter((v): v is File => v instanceof File);

  const sources: Array<{ name: string; text: string }> = [];

  for (const f of sourceFiles) {
    try {
      const parsed = await parseFileToText(f);
      sources.push({ name: f.name, text: parsed.text });
      ingestion.push({ role: "source", name: f.name, method: parsed.method });
    } catch (err) {
      return NextResponse.json(
        {
          error:
            err instanceof Error
              ? err.message
              : `Could not parse source "${f.name}".`,
        },
        { status: 400 },
      );
    }
  }

  let rules: VoiceRule[] = [];
  const rulesRaw = form.get("rules");
  if (typeof rulesRaw === "string" && rulesRaw.trim()) {
    try {
      rules = JSON.parse(rulesRaw) as VoiceRule[];
    } catch {
      return NextResponse.json({ error: "Invalid rules JSON." }, { status: 400 });
    }
  }

  try {
    const { mistakes, model, blocks, paragraphs } = await evaluateDraft({
      draft,
      sources,
      rules,
      apiKey,
    });

    const totals = mistakes.reduce(
      (acc, m) => {
        acc[m.category] += 1;
        return acc;
      },
      { grounding: 0, voice: 0, argumentation: 0 },
    );

    const response: EvaluateResponse = {
      model,
      blocks,
      paragraphs,
      mistakes,
      totals,
      ingestion,
      draftText: draft,
      sources,
    };
    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json(buildErrorPayload(err), { status: 502 });
  }
}

interface ErrorPayload {
  error: string;
  detail: {
    name?: string;
    status?: number;
    code?: string;
    type?: string;
    requestId?: string;
    hint?: string;
    raw?: string;
    stack?: string;
  };
}

function buildErrorPayload(err: unknown): ErrorPayload {
  console.error("[/api/evaluate] failure:", err);

  const e = err as Record<string, unknown> & { message?: string };
  const message = typeof e?.message === "string" ? e.message : "Unknown error.";
  const status = typeof e?.status === "number" ? (e.status as number) : undefined;
  const code = typeof e?.code === "string" ? (e.code as string) : undefined;
  const type = typeof e?.type === "string" ? (e.type as string) : undefined;
  const requestId =
    typeof e?.request_id === "string"
      ? (e.request_id as string)
      : typeof (e?.headers as { [k: string]: string } | undefined)?.[
            "x-request-id"
          ] === "string"
        ? ((e.headers as Record<string, string>)["x-request-id"] as string)
        : undefined;

  const lower = message.toLowerCase();
  let hint: string | undefined;
  if (lower.includes("model") && (lower.includes("not found") || lower.includes("does not exist"))) {
    hint = `The model "${process.env.OPENAI_MODEL ?? "gpt-5.4"}" is not available on this API key. Set OPENAI_MODEL to a model your key can access (e.g. gpt-4o, gpt-4o-mini) and restart dev.`;
  } else if (status === 401 || code === "invalid_api_key") {
    hint = "OPENAI_API_KEY is missing or invalid. Check .env.local and restart dev.";
  } else if (status === 429 || code === "rate_limit_exceeded") {
    hint = "Rate-limited by OpenAI. Wait a moment and retry, or upgrade tier.";
  } else if (status === 403 || code === "insufficient_quota") {
    hint = "OpenAI account has no quota / billing issue.";
  } else if (lower.includes("connection") || lower.includes("econnrefused") || lower.includes("fetch failed")) {
    hint = "Network call to OpenAI failed. Check connectivity / proxy / VPN.";
  } else if (lower.includes("aborted") || lower.includes("timeout")) {
    hint = "Request timed out. The draft may be too large; try a shorter draft or fewer sources.";
  }

  return {
    error: message,
    detail: {
      name: typeof e?.name === "string" ? (e.name as string) : undefined,
      status,
      code,
      type,
      requestId,
      hint,
      raw: safeStringify(err).slice(0, 4000),
      stack: typeof (e as { stack?: string })?.stack === "string"
        ? ((e as { stack: string }).stack).split("\n").slice(0, 8).join("\n")
        : undefined,
    },
  };
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value, Object.getOwnPropertyNames(value as object));
  } catch {
    try {
      return String(value);
    } catch {
      return "[unserialisable error]";
    }
  }
}

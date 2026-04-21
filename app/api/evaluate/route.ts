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
    };
    return NextResponse.json(response);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown OpenAI error.";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = process.env.OPENAI_MODEL ?? "gpt-5";

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  let body: { input?: string; system?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const input = body.input?.trim();
  if (!input) {
    return NextResponse.json({ error: "`input` is required." }, { status: 400 });
  }

  const client = new OpenAI({ apiKey });

  try {
    const response = await client.responses.create({
      model: MODEL,
      input,
      instructions:
        body.system ??
        "You are the Economist Red Pen: a rigorous editor who critiques economic writing for clarity, accuracy, and tight argument. Respond with sharp, constructive edits.",
    });

    return NextResponse.json({
      model: response.model,
      output: response.output_text,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown OpenAI error.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

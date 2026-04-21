import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const maxDuration = 300;

const DEFAULT_MODEL = process.env.OPENAI_MODEL ?? "gpt-5.4";

const SYSTEM_INSTRUCTIONS =
  "You are the Economist Red Pen: a rigorous editor who critiques economic writing for clarity, accuracy, and tight argument. Respond with sharp, constructive edits. Cite specific phrases you would change and explain briefly why.";

interface ChatBody {
  input?: string;
  system?: string;
  model?: string;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  let body: ChatBody;
  try {
    body = (await req.json()) as ChatBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const input = body.input?.trim();
  if (!input) {
    return NextResponse.json({ error: "`input` is required." }, { status: 400 });
  }

  const client = new OpenAI({ apiKey });
  const model = body.model ?? DEFAULT_MODEL;

  try {
    const response = await client.responses.create({
      model,
      input,
      instructions: body.system ?? SYSTEM_INSTRUCTIONS,
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

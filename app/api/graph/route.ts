import { NextRequest, NextResponse } from "next/server";
import { buildConceptGraph } from "@/lib/conceptGraph";
import type { ConceptGraph, InfoBlock, Mistake } from "@/lib/types";

export const runtime = "nodejs";
export const maxDuration = 300;

interface GraphRequestBody {
  draft: { name: string; text: string; blocks: InfoBlock[] };
  sources: Array<{ name: string; text: string }>;
  mistakes: Mistake[];
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY is not configured." },
      { status: 500 },
    );
  }

  let body: GraphRequestBody;
  try {
    body = (await req.json()) as GraphRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (!body?.draft?.text?.trim()) {
    return NextResponse.json(
      { error: "Draft text is required." },
      { status: 400 },
    );
  }
  if (!Array.isArray(body.draft.blocks)) {
    return NextResponse.json(
      { error: "Draft blocks are required." },
      { status: 400 },
    );
  }

  try {
    const graph: ConceptGraph = await buildConceptGraph({
      apiKey,
      draft: body.draft,
      sources: body.sources ?? [],
      mistakes: body.mistakes ?? [],
    });
    return NextResponse.json(graph);
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : "Concept graph generation failed.";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}

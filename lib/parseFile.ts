import mammoth from "mammoth";
import { extractText } from "unpdf";

export interface ParseResult {
  text: string;
  method: "native" | "docx" | "markdown" | "pdf-empty";
}

export async function parseFileToText(file: File): Promise<ParseResult> {
  const name = file.name.toLowerCase();
  const buf = Buffer.from(await file.arrayBuffer());

  if (name.endsWith(".md") || name.endsWith(".txt")) {
    return { text: buf.toString("utf8"), method: "markdown" };
  }

  if (name.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ buffer: buf });
    return { text: result.value, method: "docx" };
  }

  if (name.endsWith(".pdf")) {
    const { text } = await extractText(new Uint8Array(buf), {
      mergePages: true,
    });
    const joined = Array.isArray(text) ? text.join("\n\n") : text;
    if (!joined || joined.trim().length < 20) {
      throw new Error(
        `"${file.name}" appears to be a scanned PDF with no embedded text. OCR is not yet enabled on this build — please convert the file to a searchable PDF, DOCX, or markdown first.`,
      );
    }
    return { text: joined, method: "native" };
  }

  throw new Error(`Unsupported file type: ${file.name}`);
}

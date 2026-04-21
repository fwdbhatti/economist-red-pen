import mammoth from "mammoth";

export async function parseFileToText(file: File): Promise<string> {
  const name = file.name.toLowerCase();
  const buf = Buffer.from(await file.arrayBuffer());

  if (name.endsWith(".md") || name.endsWith(".txt")) {
    return buf.toString("utf8");
  }

  if (name.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ buffer: buf });
    return result.value;
  }

  if (name.endsWith(".pdf")) {
    const { PDFParse } = await import("pdf-parse");
    const parser = new PDFParse({ data: buf });
    try {
      const out = await parser.getText();
      return out.text;
    } finally {
      await parser.destroy();
    }
  }

  throw new Error(`Unsupported file type: ${file.name}`);
}

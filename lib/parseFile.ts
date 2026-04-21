import mammoth from "mammoth";

const OCR_TRIGGER_THRESHOLD = 100;

export interface ParseResult {
  text: string;
  method: "native" | "docx" | "markdown" | "ocr";
  pagesOCRed?: number;
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
    return parsePdf(buf);
  }

  throw new Error(`Unsupported file type: ${file.name}`);
}

async function parsePdf(buf: Buffer): Promise<ParseResult> {
  const { PDFParse } = await import("pdf-parse");
  const parser = new PDFParse({ data: buf });

  try {
    const nativeResult = await parser.getText();
    const nativeText = nativeResult.text?.trim() ?? "";

    if (nativeText.length >= OCR_TRIGGER_THRESHOLD) {
      return { text: nativeResult.text, method: "native" };
    }

    const pagesWithText = (nativeResult.pages ?? [])
      .map((p: { text?: string }) => (p.text ?? "").trim())
      .filter(Boolean).length;

    if (pagesWithText > 0 && nativeText.length > 0) {
      return { text: nativeResult.text, method: "native" };
    }

    const ocrText = await ocrPdfPages(parser);
    return {
      text: ocrText.text,
      method: "ocr",
      pagesOCRed: ocrText.pageCount,
    };
  } finally {
    await parser.destroy();
  }
}

async function ocrPdfPages(
  parser: InstanceType<typeof import("pdf-parse").PDFParse>,
): Promise<{ text: string; pageCount: number }> {
  const { createWorker } = await import("tesseract.js");

  const screenshotResult = await parser.getScreenshot({
    imageBuffer: true,
    scale: 2,
  });

  const pages = screenshotResult.pages ?? [];
  if (pages.length === 0) {
    return { text: "", pageCount: 0 };
  }

  const worker = await createWorker("eng");
  try {
    const texts: string[] = [];
    for (const page of pages) {
      if (!page.data) continue;
      const buffer = Buffer.from(page.data);
      const { data } = await worker.recognize(buffer);
      const pageText = (data.text ?? "").trim();
      if (pageText) texts.push(pageText);
    }
    return { text: texts.join("\n\n"), pageCount: pages.length };
  } finally {
    await worker.terminate();
  }
}

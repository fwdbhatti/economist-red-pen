import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Economist Red Pen",
  description: "A rigorous editor for economic writing, powered by GPT-5.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}

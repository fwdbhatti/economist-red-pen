import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Editorial Red Pen",
  description:
    "An editorial immune system for AI-assisted journalism. Auditing, not writing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}

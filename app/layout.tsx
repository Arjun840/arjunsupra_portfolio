import type { Metadata } from "next";
import "./globals.css";
import CommandPalette from "../components/CommandPalette";
import CommandPrompt from "../components/CommandPrompt";

export const metadata: Metadata = {
  title: "Portfolio | Modern Developer",
  description:
    "Minimal, fast portfolio for a university student and aspiring developer."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CommandPrompt />
        <CommandPalette />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import CommandPalette from "../components/CommandPalette";
import CommandPrompt from "../components/CommandPrompt";

export const metadata: Metadata = {
  title: "Arjun Supramaniam",
  description:
    "Informatics and Data Science student at UW. Full-stack developer, ML engineer, and software builder."
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

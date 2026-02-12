import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "[pseudo].sh",
    template: "%s | [pseudo].sh",
  },
  description: "Blog cybersécurité - Writeups, tutoriels et veille technique",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`dark ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div className="scanline" />
        <div className="glow-tl" />
        <div className="glow-br" />
        <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-8 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

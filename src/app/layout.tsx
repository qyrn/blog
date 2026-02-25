import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import Header from "@/components/layout/Header";
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
    default: "qyrn://blog",
    template: "%s | qyrn://blog",
  },
  description: "Cybersecurity blog — writeups, tutorials and technical notes",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://blog.qyrn.dev"),
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "qyrn://blog",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "qyrn://blog - Cybersecurity blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div className="scanline" />
        <div className="glow-tl" />
        <div className="glow-br" />
        <Header />
        <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-8 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

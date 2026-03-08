import type { Metadata } from "next";
import { Syne, Fira_Code } from "next/font/google";
import Providers from "@/components/layout/Providers";
import Header from "@/components/layout/Header";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  adjustFontFallback: false,
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
    <html lang="en" className={`dark ${syne.variable} ${firaCode.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg font-sans">
        <div
          aria-hidden="true"
          className="orb pointer-events-none fixed"
          style={{
            top: "-15%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="orb-2 pointer-events-none fixed"
          style={{
            bottom: "-20%",
            right: "-10%",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)",
          }}
        />
        <Providers>
          <Header />
          <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-8 relative z-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

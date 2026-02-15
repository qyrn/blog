"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav, portfolioNav } from "@/config/navigation";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-accent glitch-hover"
        >
          Qyrn.sh
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-text-dim hover:text-accent transition-colors tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}

          <span className="w-px h-4 bg-border" />

          {portfolioNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wide uppercase transition-colors"
              style={{ color: item.color }}
              title={item.description}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-dim hover:text-accent transition-colors p-1"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

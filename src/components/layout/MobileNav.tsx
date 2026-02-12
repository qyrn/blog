"use client";

import Link from "next/link";
import { mainNav, portfolioNav } from "@/config/navigation";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
      <nav className="flex flex-col px-6 py-4 gap-3">
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-sm text-text-dim hover:text-accent transition-colors py-1"
          >
            {item.label}
          </Link>
        ))}

        <hr className="border-border" />

        {portfolioNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="text-sm transition-colors py-1"
            style={{ color: item.color }}
          >
            {item.label}
            <span className="text-text-faint text-xs ml-2">{item.description}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

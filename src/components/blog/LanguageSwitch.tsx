"use client";

import { Globe } from "lucide-react";

export default function LanguageSwitch({
  currentLang,
  onToggle,
}: {
  currentLang: string;
  onToggle: () => void;
}) {
  const targetLang = currentLang === "fr" ? "EN" : "FR";

  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded border border-border text-text-dim hover:border-accent hover:text-accent transition-all cursor-pointer"
    >
      <Globe className="h-3 w-3" />
      Read in {targetLang}
    </button>
  );
}

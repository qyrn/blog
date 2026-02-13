"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg-card text-text-dim transition-all hover:border-border-hover hover:text-text"
      aria-label="Copier le code"
    >
      {copied ? <Check className="h-4 w-4 text-green" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

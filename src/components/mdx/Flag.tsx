"use client";

import { useState } from "react";
import { Flag as FlagIcon, Eye, EyeOff } from "lucide-react";

interface FlagProps {
  value: string;
}

export default function Flag({ value }: FlagProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="my-6 flex items-center gap-3 rounded-lg border border-green/30 bg-green/5 px-4 py-3">
      <FlagIcon className="h-5 w-5 shrink-0 text-green" />
      <div className="flex flex-1 items-center gap-3">
        <code className="font-mono text-sm text-green">
          {revealed ? value : "***************"}
        </code>
        <button
          onClick={() => setRevealed((r) => !r)}
          className="flex h-7 w-7 items-center justify-center rounded border border-green/30 text-green transition-colors hover:bg-green/10"
          aria-label={revealed ? "Masquer le flag" : "Révéler le flag"}
        >
          {revealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
        </button>
      </div>
    </div>
  );
}

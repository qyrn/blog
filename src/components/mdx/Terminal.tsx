import type { ReactNode } from "react";

interface TerminalProps {
  title?: string;
  children: ReactNode;
}

export default function Terminal({ title = "terminal", children }: TerminalProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border">
      <div className="flex items-center gap-2 border-b border-border bg-bg-card px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red/60" />
        <span className="h-3 w-3 rounded-full bg-orange/60" />
        <span className="h-3 w-3 rounded-full bg-green/60" />
        <span className="ml-2 font-mono text-xs text-text-dim">{title}</span>
      </div>
      <div className="bg-bg p-4 font-mono text-sm text-green [&>p]:m-0 [&>pre]:m-0 [&>pre]:border-0 [&>pre]:bg-transparent [&>pre]:p-0">
        {children}
      </div>
    </div>
  );
}

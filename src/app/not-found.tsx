import Link from "next/link";
import { ArrowLeft, Skull } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Skull className="h-12 w-12 text-red mb-4" />
      <h1 className="text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent mb-2">
        404
      </h1>
      <p className="text-sm text-text-dim mb-8">
        This page does not exist. It may have been removed or the URL is incorrect.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-text-dim transition-all hover:border-accent hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}

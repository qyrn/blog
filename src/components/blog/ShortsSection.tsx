import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ShortPlayer from "./ShortPlayer";
import { shorts, shortsChannelUrl } from "@/config/shorts";

export default function ShortsSection() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xs font-semibold font-display text-text-dim uppercase tracking-widest">
          Shorts
        </h2>
        <a
          href={shortsChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
        >
          All shorts
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-x-10">
        {shorts.map((short) => (
          <div key={short.id} className="flex flex-col gap-3 lg:flex-row lg:gap-5">
            <div className="w-full shrink-0 lg:w-[220px]">
              <ShortPlayer id={short.id} title={short.title} />
            </div>
            <div className="min-w-0 lg:pt-2">
              <h3 className="text-sm font-semibold font-display text-text leading-snug">
                {short.title}
              </h3>
              {short.articleSlug && (
                <Link
                  href={`/blog/${short.articleSlug}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
                >
                  Read the article
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ShortPlayer from "@/components/blog/ShortPlayer";
import { shorts, getShortUrl } from "@/config/shorts";

export default function Short({ id }: { id: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const short = shorts.find((candidate) => candidate.id === id);
  if (!short) {
    throw new Error(`Unknown short id "${id}", add it to src/config/shorts.ts`);
  }

  return (
    <figure className="not-prose my-8 flex flex-col gap-5 rounded-xl border border-border bg-bg-card p-4 sm:flex-row sm:items-center sm:gap-7">
      <div className="mx-auto w-full max-w-[230px] shrink-0 sm:mx-0 sm:w-[210px]">
        <ShortPlayer
          id={short.id}
          title={short.title}
          isPlaying={isPlaying}
          onPlay={() => setIsPlaying(true)}
        />
      </div>
      <figcaption className="min-w-0 text-center sm:text-left">
        <p className="text-lg font-semibold font-display text-text leading-snug">{short.title}</p>
        <a
          href={getShortUrl(short.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-xs text-text-dim !no-underline hover:text-accent transition-colors"
        >
          YouTube
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </figcaption>
    </figure>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ShortPlayer from "./ShortPlayer";
import { shorts, shortsChannelUrl, getShortPosterPath } from "@/config/shorts";
import type { Short } from "@/config/shorts";

export default function ShortsSection() {
  const [selected, setSelected] = useState<Short>(shorts[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(short: Short) {
    setSelected(short);
    setIsPlaying(true);
  }

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
      <div className="grid gap-6 md:grid-cols-[290px_minmax(0,1fr)] md:items-center md:gap-10">
        <div className="mx-auto w-full max-w-[260px] md:max-w-none">
          <ShortPlayer
            id={selected.id}
            title={selected.title}
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
          />
        </div>
        <ul className="flex flex-col gap-2">
          {shorts.map((short) => {
            const isSelected = short.id === selected.id;
            return (
              <li
                key={short.id}
                aria-current={isSelected}
                className={`relative flex items-center gap-4 rounded-lg border p-3 transition-colors ${
                  isSelected
                    ? "border-accent/40 bg-bg-card"
                    : "border-transparent hover:bg-bg-card"
                }`}
              >
                <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-md border border-border sm:w-44">
                  <Image
                    src={getShortPosterPath(short.id)}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 112px, 176px"
                    className="object-cover object-[50%_38%]"
                  />
                </div>
                <div className="min-w-0">
                  <button
                    type="button"
                    onClick={() => play(short)}
                    className={`text-left text-sm font-semibold font-display leading-snug transition-colors after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent sm:text-base ${
                      isSelected ? "text-accent" : "text-text"
                    }`}
                  >
                    {short.title}
                  </button>
                  {short.articleSlug && (
                    <Link
                      href={`/blog/${short.articleSlug}`}
                      className="relative z-10 mt-2 flex w-fit items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
                    >
                      Read the article
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

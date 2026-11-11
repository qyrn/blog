"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface ShortPlayerProps {
  id: string;
  title: string;
}

export default function ShortPlayer({ id, title }: ShortPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-border bg-bg-card">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play: ${title}`}
          className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        >
          <Image
            src={`/shorts/${id}.webp`}
            alt=""
            fill
            sizes="(max-width: 1024px) 45vw, 220px"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-bg/80 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
            <Play className="h-4 w-4 translate-x-px fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

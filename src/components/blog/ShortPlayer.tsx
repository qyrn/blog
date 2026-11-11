import Image from "next/image";
import { Play } from "lucide-react";
import { getShortPosterPath } from "@/config/shorts";

interface ShortPlayerProps {
  id: string;
  title: string;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function ShortPlayer({ id, title, isPlaying, onPlay }: ShortPlayerProps) {
  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-black">
      {isPlaying ? (
        <iframe
          key={id}
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
          onClick={onPlay}
          aria-label={`Play: ${title}`}
          className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        >
          <Image
            key={id}
            src={getShortPosterPath(id)}
            alt=""
            fill
            sizes="(max-width: 768px) 260px, 290px"
            className="object-cover"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 pt-16">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-bg transition-transform group-hover:scale-110 motion-reduce:transition-none">
              <Play className="h-5 w-5 translate-x-px fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

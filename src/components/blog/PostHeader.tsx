import { formatDate, readingTime } from "@/lib/utils";
import { TYPE_STYLES, DIFFICULTY_STYLES } from "@/lib/constants";
import type { PostType, Difficulty } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

interface PostHeaderProps {
  title: string;
  date: string;
  lang: string;
  type: string;
  category: string;
  difficulty: string;
  tags: string[];
  platform?: string;
  body: string;
  coverImage?: string | null;
  onToggle?: () => void;
}

export default function PostHeader({
  title,
  date,
  lang,
  type,
  category,
  difficulty,
  tags,
  platform,
  body,
  coverImage,
  onToggle,
}: PostHeaderProps) {
  const typeStyle = TYPE_STYLES[type as PostType] || "border-border text-text-dim";
  const diffStyle = DIFFICULTY_STYLES[difficulty as Difficulty] || "border-border text-text-dim";

  return (
    <header className="mb-12 pb-10 border-b border-border/60">
      {coverImage && (
        <div className="relative aspect-[2.2/1] overflow-hidden rounded-lg mb-8">
          <Image
            src={coverImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 680px) 100vw, 680px"
          />
        </div>
      )}

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className={`text-[11px] px-2.5 py-0.5 rounded border ${typeStyle}`}>
          {type}
        </span>
        <span className={`text-[11px] px-2.5 py-0.5 rounded border ${diffStyle}`}>
          {difficulty}
        </span>
        <span className="text-[11px] text-text-faint uppercase tracking-wide">{category}</span>
        {platform && (
          <span className="text-[11px] text-text-faint">/ {platform}</span>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-6 leading-[1.2] tracking-tight">
        {title}
      </h1>

      <div className="flex items-center gap-3 text-xs text-text-faint font-mono flex-wrap">
        <time>{formatDate(date, lang)}</time>
        <span className="text-border">·</span>
        <span>{readingTime(body)}</span>
        <span className="text-border">·</span>
        <span className="uppercase">{lang}</span>
        {onToggle && (
          <>
            <span className="text-border">·</span>
            <button
              onClick={onToggle}
              className="inline-flex items-center gap-1.5 text-text-faint hover:text-accent transition-colors cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5" />
              Read in {lang === "en" ? "FR" : "EN"}
            </button>
          </>
        )}
      </div>

      {tags.length > 0 && (
        <div className="flex gap-2.5 mt-5 flex-wrap">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="text-[11px] font-mono text-text-faint hover:text-accent transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

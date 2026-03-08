import { formatDate, readingTime } from "@/lib/utils";
import { TYPE_STYLES, DIFFICULTY_STYLES } from "@/lib/constants";
import type { PostType, Difficulty } from "@/lib/types";
import Link from "next/link";
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
  onToggle,
}: PostHeaderProps) {
  const typeStyle = TYPE_STYLES[type as PostType] || "border-border text-text-dim";
  const diffStyle = DIFFICULTY_STYLES[difficulty as Difficulty] || "border-border text-text-dim";

  return (
    <header className="mb-10 pb-8 border-b border-border">
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span className={`text-[10px] px-2 py-0.5 rounded border ${typeStyle}`}>
          {type}
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded border ${diffStyle}`}>
          {difficulty}
        </span>
        <span className="text-[10px] text-text-faint uppercase tracking-wide">{category}</span>
        {platform && (
          <span className="text-[10px] text-text-faint">/ {platform}</span>
        )}
      </div>

      <h1 className="text-2xl md:text-3xl font-bold font-display text-white mb-5 leading-tight">
        {title}
      </h1>

      <div className="flex items-center gap-3 text-[11px] text-text-faint font-mono flex-wrap">
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
              <Globe className="h-3 w-3" />
              Read in {lang === "en" ? "FR" : "EN"}
            </button>
          </>
        )}
      </div>

      {tags.length > 0 && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="text-[10px] font-mono text-text-faint hover:text-accent transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

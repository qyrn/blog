import { formatDate, readingTime } from "@/lib/utils";
import { TYPE_STYLES, DIFFICULTY_STYLES } from "@/lib/constants";
import type { PostType, Difficulty } from "@/lib/types";
import Link from "next/link";

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
}: PostHeaderProps) {
  const typeStyle = TYPE_STYLES[type as PostType] || "border-border text-text-dim";
  const diffStyle = DIFFICULTY_STYLES[difficulty as Difficulty] || "border-border text-text-dim";

  return (
    <header className="mb-8 pb-6 border-b border-border">
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className={`text-[10px] px-2 py-0.5 rounded border ${typeStyle}`}>
          {type}
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded border ${diffStyle}`}>
          {difficulty}
        </span>
        <span className="text-[10px] text-text-faint uppercase">{category}</span>
        {platform && (
          <span className="text-[10px] text-text-faint">/ {platform}</span>
        )}
      </div>

      <h1 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-xs text-text-dim">
        <time>{formatDate(date, lang)}</time>
        <span>{readingTime(body)}</span>
        <span className="uppercase">{lang}</span>
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="text-[10px] text-text-faint hover:text-accent transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </header>
  );
}

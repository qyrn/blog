import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { TYPE_STYLES, DIFFICULTY_STYLES } from "@/lib/constants";
import type { PostType, Difficulty } from "@/lib/types";

interface PostCardProps {
  title: string;
  slug: string;
  date: string;
  lang: string;
  type: string;
  category: string;
  difficulty: string;
  tags: string[];
  excerpt: string;
  platform?: string;
}

export default function PostCard({
  title,
  slug,
  date,
  lang,
  type,
  category,
  difficulty,
  tags,
  excerpt,
  platform,
}: PostCardProps) {
  const typeStyle = TYPE_STYLES[type as PostType] || "border-border text-text-dim";
  const diffStyle = DIFFICULTY_STYLES[difficulty as Difficulty] || "border-border text-text-dim";

  return (
    <Link
      href={`/blog/${slug}`}
      className="block p-5 bg-bg-card border border-border rounded-lg transition-all hover:border-border-hover hover:bg-bg-hover hover:-translate-y-0.5 group"
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
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
        <span className="text-[10px] text-text-faint ml-auto">{lang.toUpperCase()}</span>
      </div>

      <h3 className="text-sm font-semibold font-[family-name:var(--font-space-grotesk)] text-text group-hover:text-accent transition-colors mb-2">
        {title}
      </h3>

      <p className="text-xs text-text-dim line-clamp-2 mb-3">{excerpt}</p>

      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-text-faint"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-[10px] text-text-faint">{formatDate(date, lang)}</span>
      </div>
    </Link>
  );
}

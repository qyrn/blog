import Link from "next/link";
import Image from "next/image";
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
  readingTime?: number;
  coverImage?: string | null;
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
  readingTime,
  coverImage,
}: PostCardProps) {
  const typeStyle = TYPE_STYLES[type as PostType] || "border-border text-text-dim";
  const diffStyle = DIFFICULTY_STYLES[difficulty as Difficulty] || "border-border text-text-dim";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden bg-bg-card border border-border rounded-lg transition-all hover:border-border-hover hover:bg-bg-hover"
    >
      {coverImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] px-2 py-0.5 rounded border ${typeStyle}`}>
            {type}
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded border ${diffStyle}`}>
            {difficulty}
          </span>
          {platform && (
            <span className="text-[10px] text-text-faint ml-auto">{platform}</span>
          )}
        </div>

        <h3 className="text-sm font-semibold font-display text-text group-hover:text-accent transition-colors mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-xs text-text-dim line-clamp-2 mb-4 leading-relaxed">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] text-text-faint font-mono">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-2">
            {readingTime && (
              <span className="text-[10px] text-text-faint font-mono">
                {readingTime} min
              </span>
            )}
            <span className="text-[10px] text-text-faint font-mono">
              {formatDate(date, lang)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { TYPE_STYLES, DIFFICULTY_STYLES } from "@/lib/constants";
import type { PostType, Difficulty } from "@/lib/types";

interface FeaturedPostCardProps {
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

export default function FeaturedPostCard({
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
}: FeaturedPostCardProps) {
  const typeStyle = TYPE_STYLES[type as PostType] || "border-border text-text-dim";
  const diffStyle = DIFFICULTY_STYLES[difficulty as Difficulty] || "border-border text-text-dim";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden bg-bg-card border border-border rounded-xl transition-all hover:border-border-hover hover:bg-bg-hover"
    >
      {coverImage && (
        <div className="relative aspect-[2.2/1] overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-bg-card/30 to-transparent" />
        </div>
      )}

      <div className={`p-6 ${coverImage ? "-mt-16 relative" : ""}`}>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
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

        <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-accent transition-colors mb-3 leading-tight tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-text-dim line-clamp-3 mb-5 leading-relaxed">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2.5 flex-wrap">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-[11px] text-text-faint font-mono">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2.5 shrink-0 ml-2 text-[11px] text-text-faint font-mono">
            {readingTime && <span>{readingTime} min</span>}
            <span className="text-border">·</span>
            <time>{formatDate(date, lang)}</time>
          </div>
        </div>
      </div>
    </Link>
  );
}

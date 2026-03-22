import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { TYPE_STYLES } from "@/lib/constants";
import type { PostType } from "@/lib/types";

interface RelatedPost {
  title: string;
  slug: string;
  date: string;
  lang: string;
  type: string;
  category: string;
  readingTime: number;
}

export default function RelatedPosts({
  posts,
  lang,
}: {
  posts: RelatedPost[];
  lang: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-14 pt-10 border-t border-border/60">
      <h2 className="text-xs font-semibold font-display text-text-dim uppercase tracking-widest mb-6">
        {lang === "fr" ? "Articles similaires" : "Related posts"}
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const typeStyle =
            TYPE_STYLES[post.type as PostType] || "border-border text-text-dim";

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-4 bg-bg-card border border-border rounded-lg transition-all hover:border-border-hover hover:bg-bg-hover"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded border ${typeStyle}`}
                >
                  {post.type}
                </span>
                <span className="text-[10px] text-text-faint uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              <h3 className="text-sm font-semibold font-display text-text group-hover:text-accent transition-colors leading-snug mb-2">
                {post.title}
              </h3>

              <div className="flex items-center gap-2 text-[10px] text-text-faint font-mono">
                <span>{post.readingTime} min</span>
                <span className="text-border">·</span>
                <time>{formatDate(post.date, post.lang)}</time>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

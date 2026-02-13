import Link from "next/link";
import { posts } from "#site/content";
import { getPublishedPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import { siteConfig } from "@/config/site";
import { ArrowRight, Terminal, Shield, Tag } from "lucide-react";

export default function Home() {
  const published = getPublishedPosts(posts);
  const recent = published.slice(0, 4);
  const tags = getAllTags(published).slice(0, 12);

  return (
    <div className="space-y-16">
      <section className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex items-center gap-2 text-accent">
          <Terminal className="h-5 w-5" />
          <Shield className="h-5 w-5" />
        </div>
        <h1 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent glitch-hover mb-4">
          {siteConfig.name}
        </h1>
        <p className="max-w-md text-sm text-text-dim mb-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-5 py-2.5 text-sm text-accent transition-all hover:bg-accent/20"
          >
            Lire le blog
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-text-dim transition-all hover:border-border-hover hover:text-text"
          >
            À propos
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text">
            Derniers articles
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
          >
            Tout voir
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {recent.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              date={post.date}
              lang={post.lang}
              type={post.type}
              category={post.category}
              difficulty={post.difficulty}
              tags={post.tags}
              excerpt={post.excerpt}
              platform={post.platform}
            />
          ))}
        </div>
      </section>

      {tags.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text">
              Tags populaires
            </h2>
            <Link
              href="/tags"
              className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
            >
              Tous les tags
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-1.5 text-xs transition-all hover:border-accent/50 hover:bg-bg-hover"
              >
                <Tag className="h-3 w-3 text-text-faint group-hover:text-accent transition-colors" />
                <span className="text-text-dim group-hover:text-accent transition-colors">{tag}</span>
                <span className="text-text-faint">{count}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

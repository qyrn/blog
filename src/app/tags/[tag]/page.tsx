import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "#site/content";
import { getPublishedPosts, filterPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const published = getPublishedPosts(posts);
  const tags = getAllTags(published);
  return tags.map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded}`,
    description: `Articles tagués "${decoded}"`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const published = getPublishedPosts(posts);
  const filtered = filterPosts(published, { tag: decoded });

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/tags"
          className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors mb-4"
        >
          <ArrowLeft className="h-3 w-3" />
          Tous les tags
        </Link>
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent">
          #{decoded}
        </h1>
        <p className="text-sm text-text-dim mt-1">
          {filtered.length} article{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid gap-4">
        {filtered.map((post) => (
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
    </div>
  );
}

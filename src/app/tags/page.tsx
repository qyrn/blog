import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "#site/content";
import { getPublishedPosts, getDeduplicatedPosts, getAllTags } from "@/lib/posts";
import { Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Tags",
  description: "All blog tags",
};

export default function TagsPage() {
  const published = getPublishedPosts(posts);
  const deduplicated = getDeduplicatedPosts(published);
  const tags = getAllTags(deduplicated);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold font-display text-accent mb-2">
          /tags
        </h1>
        <p className="text-sm text-text-dim">
          {tags.length} tags, {deduplicated.length} article{deduplicated.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {tags.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="group flex items-center gap-2 rounded-lg border border-border bg-bg-card px-4 py-2.5 transition-all hover:border-accent/50 hover:bg-bg-hover"
          >
            <Tag className="h-3.5 w-3.5 text-text-faint group-hover:text-accent transition-colors" />
            <span className="text-sm text-text group-hover:text-accent transition-colors">
              {tag}
            </span>
            <span className="text-xs text-text-faint">
              {count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

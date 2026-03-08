import type { Metadata } from "next";
import { posts } from "#site/content";
import { getPublishedPosts, filterPosts } from "@/lib/posts";
import PostList from "@/components/blog/PostList";

export const metadata: Metadata = {
  title: "Intel",
  description: "Weekly cybersecurity intel — Échelon digests and industry news.",
};

export default function VeillePage() {
  const published = getPublishedPosts(posts);
  const watches = filterPosts(published, { types: ["watch"] });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-display text-white mb-2">
          /intel
        </h1>
        <p className="text-sm text-text-dim">
          Weekly digests and cybersecurity intelligence.
        </p>
      </div>

      <PostList posts={watches} />
    </div>
  );
}

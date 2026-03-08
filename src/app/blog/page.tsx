import type { Metadata } from "next";
import { posts } from "#site/content";
import { getPublishedPosts, getDeduplicatedPosts } from "@/lib/posts";
import PostList from "@/components/blog/PostList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Cybersecurity articles — CTF writeups, tutorials, learning journal and technical notes.",
};

export default function BlogPage() {
  const published = getPublishedPosts(posts);
  const deduplicated = getDeduplicatedPosts(published);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-display text-white mb-2">
          Blog
        </h1>
        <p className="text-sm text-text-dim">
          Writeups, tutorials and technical notes.
        </p>
      </div>

      <PostList posts={deduplicated} />
    </div>
  );
}

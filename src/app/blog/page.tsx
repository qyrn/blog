import type { Metadata } from "next";
import { posts } from "#site/content";
import { getPublishedPosts } from "@/lib/posts";
import PostList from "@/components/blog/PostList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles cybersécurité - Writeups CTF, tutoriels, journal de progression et veille technique.",
};

export default function BlogPage() {
  const published = getPublishedPosts(posts);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
          Blog
        </h1>
        <p className="text-sm text-text-dim">
          Writeups, tutoriels et notes techniques.
        </p>
      </div>

      <PostList posts={published} />
    </div>
  );
}

import type { Metadata } from "next";
import { posts } from "#site/content";
import { getPublishedPosts, filterPosts } from "@/lib/posts";
import PostList from "@/components/blog/PostList";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Tutoriels cybersécurité - Guides pratiques et formations techniques.",
};

export default function TutorialsPage() {
  const published = getPublishedPosts(posts);
  const tutorials = filterPosts(published, { types: ["tutorial"] });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
          /tutorials
        </h1>
        <p className="text-sm text-text-dim">
          Guides pratiques et tutoriels techniques.
        </p>
      </div>

      <PostList posts={tutorials} />
    </div>
  );
}

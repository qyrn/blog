import type { Metadata } from "next";
import { posts } from "#site/content";
import { getPublishedPosts, filterPosts } from "@/lib/posts";
import PostList from "@/components/blog/PostList";

export const metadata: Metadata = {
  title: "Veille",
  description: "Veille cybersécurité hebdomadaire - Échelon Digest et actualités du secteur.",
};

export default function VeillePage() {
  const published = getPublishedPosts(posts);
  const watches = filterPosts(published, { types: ["watch"] });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
          /veille
        </h1>
        <p className="text-sm text-text-dim">
          Digests hebdomadaires et veille cybersécurité.
        </p>
      </div>

      <PostList posts={watches} />
    </div>
  );
}

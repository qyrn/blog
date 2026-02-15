import type { Metadata } from "next";
import { posts } from "#site/content";
import { getPublishedPosts, filterPosts } from "@/lib/posts";
import PostList from "@/components/blog/PostList";

export const metadata: Metadata = {
  title: "Incidents",
  description: "Rapports d'incidents - Analyses Blue Team et retours d'expérience.",
};

export default function IncidentsPage() {
  const published = getPublishedPosts(posts);
  const incidents = filterPosts(published, { types: ["incident"] });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
          /incidents
        </h1>
        <p className="text-sm text-text-dim">
          Mini rapports d'incident et analyses Blue Team.
        </p>
      </div>

      <PostList posts={incidents} />
    </div>
  );
}

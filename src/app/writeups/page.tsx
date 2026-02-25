import type { Metadata } from "next";
import { posts } from "#site/content";
import { getPublishedPosts, filterPosts } from "@/lib/posts";
import PostList from "@/components/blog/PostList";

export const metadata: Metadata = {
  title: "Writeups",
  description: "CTF machine writeups — Hack The Box, TryHackMe, Root Me and other challenges.",
};

export default function WriteupsPage() {
  const published = getPublishedPosts(posts);
  const writeups = filterPosts(published, { types: ["writeup"] });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
          /writeups
        </h1>
        <p className="text-sm text-text-dim">
          CTF machine writeups — HTB, THM, Root Me.
        </p>
      </div>

      <PostList posts={writeups} />
    </div>
  );
}

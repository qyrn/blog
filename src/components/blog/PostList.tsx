"use client";

import { useState, useMemo } from "react";
import PostCard from "./PostCard";
import PostFilters from "./PostFilters";
import PostSearch from "./PostSearch";
import { filterPosts } from "@/lib/posts";
import type { PostFilterState } from "@/lib/types";

interface PostData {
  title: string;
  slug: string;
  date: string;
  lang: string;
  type: string;
  category: string;
  difficulty: string;
  tags: string[];
  excerpt: string;
  platform?: string;
  readingTime?: number;
  published: boolean;
  translationSlug?: string;
}

export default function PostList({ posts }: { posts: PostData[] }) {
  const [filters, setFilters] = useState<PostFilterState>({
    types: [],
    categories: [],
    difficulties: [],
    search: "",
  });

  const filtered = useMemo(
    () => filterPosts(posts as Parameters<typeof filterPosts>[0], filters),
    [posts, filters]
  );

  return (
    <div>
      <PostSearch
        value={filters.search}
        onChange={(search) => setFilters({ ...filters, search })}
      />
      <PostFilters filters={filters} onChange={setFilters} />

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-text-dim text-sm">
          No articles match your filters.
        </div>
      ) : (
        <div className="grid gap-3">
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
              readingTime={post.readingTime}
            />
          ))}
        </div>
      )}

      <div className="mt-4 text-[10px] text-text-faint text-right font-mono">
        {filtered.length} article{filtered.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
}

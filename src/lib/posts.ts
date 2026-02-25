import type { Post } from "#site/content";
import type { PostType, Category, Difficulty, Lang } from "./types";

export function getPublishedPosts(posts: Post[]): Post[] {
  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getDeduplicatedPosts(posts: Post[]): Post[] {
  const enSlugs = new Set(
    posts.filter((p) => p.lang === "en").map((p) => p.slug)
  );
  return posts.filter((p) => {
    if (p.lang === "fr" && p.translationSlug && enSlugs.has(p.translationSlug)) {
      return false;
    }
    return true;
  });
}

export function filterPosts(
  posts: Post[],
  filters: {
    types?: PostType[];
    categories?: Category[];
    difficulties?: Difficulty[];
    langs?: Lang[];
    search?: string;
    tag?: string;
  }
): Post[] {
  return posts.filter((post) => {
    if (filters.types?.length && !filters.types.includes(post.type as PostType)) return false;
    if (filters.categories?.length && !filters.categories.includes(post.category as Category))
      return false;
    if (filters.difficulties?.length && !filters.difficulties.includes(post.difficulty as Difficulty))
      return false;
    if (filters.langs?.length && !filters.langs.includes(post.lang as Lang)) return false;
    if (filters.tag && !post.tags.includes(filters.tag)) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });
}

export function getPostBySlug(posts: Post[], slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getTranslation(posts: Post[], post: Post): Post | undefined {
  if (!post.translationSlug) return undefined;
  return posts.find(
    (p) => p.translationSlug === post.translationSlug && p.lang !== post.lang && p.published
  );
}

export function getAllTags(posts: Post[]): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      map.set(tag, (map.get(tag) || 0) + 1);
    }
  }
  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getRelatedPosts(posts: Post[], current: Post, limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== current.slug && p.published)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => current.tags.includes(t)).length +
        (p.category === current.category ? 2 : 0) +
        (p.type === current.type ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.post);
}

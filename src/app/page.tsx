import { posts } from "#site/content";
import { getPublishedPosts, getDeduplicatedPosts, getAllTags } from "@/lib/posts";
import HomeContent from "@/components/blog/HomeContent";

export default function Home() {
  const published = getPublishedPosts(posts);
  const deduplicated = getDeduplicatedPosts(published);
  const recent = deduplicated.slice(0, 4);
  const tags = getAllTags(deduplicated).slice(0, 12);

  return <HomeContent recent={recent} tags={tags} />;
}

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { posts } from "#site/content";
import { getPostBySlug, getTranslation } from "@/lib/posts";
import PostContent from "@/components/blog/PostContent";
import ReadingProgress from "@/components/blog/ReadingProgress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(posts, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(posts, slug);
  if (!post || !post.published) notFound();

  const translation = getTranslation(posts, post);

  if (post.lang === "fr" && translation && translation.lang === "en") {
    redirect(`/blog/${translation.slug}`);
  }

  return (
    <>
      <ReadingProgress />
      <PostContent
        post={{
          title: post.title,
          date: post.date,
          lang: post.lang,
          type: post.type,
          category: post.category,
          difficulty: post.difficulty,
          tags: post.tags,
          platform: post.platform,
          excerpt: post.excerpt,
          body: post.body,
        }}
        translation={
          translation
            ? {
                title: translation.title,
                date: translation.date,
                lang: translation.lang,
                type: translation.type,
                category: translation.category,
                difficulty: translation.difficulty,
                tags: translation.tags,
                platform: translation.platform,
                excerpt: translation.excerpt,
                body: translation.body,
              }
            : undefined
        }
      />
    </>
  );
}

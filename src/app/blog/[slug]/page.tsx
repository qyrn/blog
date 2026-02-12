import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { getPostBySlug, getTranslation } from "@/lib/posts";
import PostHeader from "@/components/blog/PostHeader";
import PostBody from "@/components/blog/PostBody";
import TableOfContents from "@/components/blog/TableOfContents";
import LanguageSwitch from "@/components/blog/LanguageSwitch";
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

  return (
    <>
      <ReadingProgress />
      <div className="flex gap-10">
        <article className="flex-1 min-w-0">
          {translation && (
            <div className="mb-4">
              <LanguageSwitch
                currentLang={post.lang}
                translationSlug={translation.slug}
              />
            </div>
          )}

          <PostHeader
            title={post.title}
            date={post.date}
            lang={post.lang}
            type={post.type}
            category={post.category}
            difficulty={post.difficulty}
            tags={post.tags}
            platform={post.platform}
            body={post.body}
          />

          <PostBody code={post.body} />
        </article>

        <aside className="w-56 shrink-0">
          <TableOfContents />
        </aside>
      </div>
    </>
  );
}

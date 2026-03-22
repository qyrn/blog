"use client";

import { useState } from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import AuthorBio from "./AuthorBio";
import RelatedPosts from "./RelatedPosts";
import TableOfContents from "./TableOfContents";

interface RelatedPostData {
  title: string;
  slug: string;
  date: string;
  lang: string;
  type: string;
  category: string;
  readingTime: number;
}

interface PostData {
  title: string;
  date: string;
  lang: string;
  type: string;
  category: string;
  difficulty: string;
  tags: string[];
  platform?: string;
  coverImage?: string | null;
  excerpt: string;
  body: string;
}

export default function PostContent({
  post,
  translation,
  relatedPosts = [],
}: {
  post: PostData;
  translation?: PostData;
  relatedPosts?: RelatedPostData[];
}) {
  const [lang, setLang] = useState(post.lang);

  const active = lang === post.lang ? post : translation!;

  function toggle() {
    setLang((prev) => (prev === post.lang ? translation!.lang : post.lang));
  }

  return (
    <div className="flex gap-10 justify-center">
      <article className="w-full max-w-[680px] min-w-0">
        <PostHeader
          title={active.title}
          date={active.date}
          lang={active.lang}
          type={active.type}
          category={active.category}
          difficulty={active.difficulty}
          tags={active.tags}
          platform={active.platform}
          body={active.body}
          coverImage={active.coverImage}
          onToggle={translation ? toggle : undefined}
        />

        <PostBody code={active.body} />

        <AuthorBio lang={active.lang} />
        <RelatedPosts posts={relatedPosts} lang={active.lang} />
      </article>

      <aside className="hidden xl:block w-48 shrink-0">
        <TableOfContents key={lang} />
      </aside>
    </div>
  );
}

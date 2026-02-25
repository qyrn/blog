"use client";

import { useState } from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import TableOfContents from "./TableOfContents";

interface PostData {
  title: string;
  date: string;
  lang: string;
  type: string;
  category: string;
  difficulty: string;
  tags: string[];
  platform?: string;
  excerpt: string;
  body: string;
}

export default function PostContent({
  post,
  translation,
}: {
  post: PostData;
  translation?: PostData;
}) {
  const [lang, setLang] = useState(post.lang);

  const active = lang === post.lang ? post : translation!;

  function toggle() {
    setLang((prev) => (prev === post.lang ? translation!.lang : post.lang));
  }

  return (
    <div className="flex gap-10">
      <article className="flex-1 min-w-0">
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
          onToggle={translation ? toggle : undefined}
        />

        <PostBody code={active.body} />
      </article>

      <aside className="w-52 shrink-0">
        <TableOfContents key={lang} />
      </aside>
    </div>
  );
}

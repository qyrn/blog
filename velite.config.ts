import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(200),
          slug: s.slug("posts"),
          date: s.isodate(),
          lang: s.enum(["fr", "en"]),
          translationSlug: s.string().optional(),
          type: s.enum(["writeup", "tutorial", "journal", "watch", "incident"]),
          category: s.enum([
            "Web",
            "Network",
            "Privesc",
            "OSINT",
            "Forensics",
            "Crypto",
            "RE",
            "Misc",
          ]),
          difficulty: s.enum(["Easy", "Medium", "Hard"]),
          tags: s.array(s.string()),
          platform: s.string().optional(),
          excerpt: s.string().max(500),
          published: s.boolean().default(true),
          body: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/blog/${data.slug}`,
        })),
    },
  },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark-default", keepBackground: false }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["anchor"] },
        },
      ],
    ],
  },
});

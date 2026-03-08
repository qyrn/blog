"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Github, Target, Tag } from "lucide-react";
import PostCard from "./PostCard";
import { siteConfig } from "@/config/site";
import type { Post } from "#site/content";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const socials = [
  { icon: Github, label: "GitHub", href: siteConfig.author.github },
  { icon: Terminal, label: "HTB", href: siteConfig.author.hackthebox },
  { icon: Target, label: "THM", href: siteConfig.author.tryhackme },
];

interface HomeContentProps {
  recent: Post[];
  tags: { tag: string; count: number }[];
}

export default function HomeContent({ recent, tags }: HomeContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-14"
    >
      <motion.section variants={itemVariants} className="pt-8 pb-2">
        <div className="flex items-center gap-2 text-accent mb-3 text-xs font-mono">
          <Terminal className="h-3.5 w-3.5" />
          <span className="text-text-faint">~$</span>
          <span>whoami</span>
        </div>

        <h1 className="text-3xl font-bold font-display text-accent mb-1">
          {siteConfig.name}
        </h1>
        <p className="text-sm text-text-dim mb-6">
          {siteConfig.author.name} — SOC Analyst / Pentester
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-1.5 text-xs text-text-dim transition-all hover:border-accent/50 hover:text-accent"
            >
              <social.icon className="h-3.5 w-3.5" />
              {social.label}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-5 py-2.5 text-sm text-accent transition-all hover:bg-accent/20"
          >
            Browse posts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-text-dim transition-all hover:border-border-hover hover:text-text"
          >
            About
          </Link>
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xs font-semibold font-display text-text-dim uppercase tracking-widest">
            Latest posts
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
          >
            View all
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        {recent.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {recent.map((post) => (
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
        ) : (
          <div className="rounded-lg border border-border bg-bg-card p-8 text-center">
            <p className="text-sm text-text-dim">No posts published yet.</p>
          </div>
        )}
      </motion.section>

      {tags.length > 0 && (
        <motion.section variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold font-display text-text-dim uppercase tracking-widest">
              Tags
            </h2>
            <Link
              href="/tags"
              className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
            >
              All tags
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-1.5 text-xs transition-all hover:border-accent/50 hover:bg-bg-hover"
              >
                <Tag className="h-3 w-3 text-text-faint group-hover:text-accent transition-colors" />
                <span className="text-text-dim group-hover:text-accent transition-colors">{tag}</span>
                <span className="text-text-faint">{count}</span>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
}

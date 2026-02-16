import Link from "next/link";
import { posts } from "#site/content";
import { getPublishedPosts, filterPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  Terminal,
  Shield,
  Tag,
  FileText,
  Target,
  BookOpen,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const stack = [
  "Kali Linux",
  "Burp Suite",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "Python",
  "Wazuh",
  "Splunk",
];

export default function Home() {
  const published = getPublishedPosts(posts);
  const recent = published.slice(0, 4);
  const tags = getAllTags(published).slice(0, 12);

  const writeups = filterPosts(published, { types: ["writeup"] });
  const tutorials = filterPosts(published, { types: ["tutorial"] });
  const totalArticles = published.length;

  const stats = [
    { label: "Writeups", value: writeups.length, icon: Target },
    { label: "Tutorials", value: tutorials.length, icon: BookOpen },
    { label: "Articles", value: totalArticles, icon: FileText },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: siteConfig.author.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.author.linkedin, disabled: true },
    { icon: Terminal, label: "HTB", href: siteConfig.author.hackthebox },
    { icon: Target, label: "THM", href: siteConfig.author.tryhackme },
  ];

  return (
    <div className="space-y-16">
      <section className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex items-center gap-2 text-accent">
          <Terminal className="h-5 w-5" />
          <Shield className="h-5 w-5" />
        </div>
        <h1 className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent glitch-hover mb-2">
          {siteConfig.name}
        </h1>
        <p className="text-base text-text mb-1">
          {siteConfig.author.name} — Aspirant Analyste SOC / Pentester
        </p>
        <p className="max-w-md text-sm text-text-dim mb-6">
          {siteConfig.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {socials.map((social) =>
            social.disabled ? (
              <span
                key={social.label}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-1.5 text-xs text-text-faint opacity-50 cursor-not-allowed"
              >
                <social.icon className="h-3.5 w-3.5" />
                {social.label}
              </span>
            ) : (
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
            )
          )}
        </div>

        <div className="flex gap-4">
          <Link
            href="/writeups"
            className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-5 py-2.5 text-sm text-accent transition-all hover:bg-accent/20"
          >
            Voir les writeups
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm text-text-dim transition-all hover:border-border-hover hover:text-text"
          >
            À propos
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-lg border border-border bg-bg-card p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/5">
              <stat.icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-text">
                {stat.value}
              </p>
              <p className="text-xs text-text-dim">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-sm font-semibold font-[family-name:var(--font-space-grotesk)] text-text-dim mb-3">
          Stack technique
        </h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-border bg-bg-card px-3 py-1.5 text-xs text-text-dim"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text">
            Derniers articles
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
          >
            Tout voir
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        {recent.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
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
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-bg-card p-8 text-center">
            <p className="text-sm text-text-dim">Aucun article publié pour le moment.</p>
          </div>
        )}
      </section>

      {tags.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text">
              Tags populaires
            </h2>
            <Link
              href="/tags"
              className="inline-flex items-center gap-1.5 text-xs text-text-dim hover:text-accent transition-colors"
            >
              Tous les tags
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
        </section>
      )}
    </div>
  );
}

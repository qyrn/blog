import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  BookOpen,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About the author",
};

const certifications = [
  { name: "Certification in progress...", status: "wip" },
];

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    href: siteConfig.author.github,
  },
  {
    icon: Terminal,
    label: "Hack The Box",
    href: siteConfig.author.hackthebox,
  },
  {
    icon: Target,
    label: "TryHackMe",
    href: siteConfig.author.tryhackme,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: siteConfig.author.linkedin,
    disabled: true,
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-3xl">
      <section>
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-accent mb-2">
          /about
        </h1>
        <p className="text-sm text-text-dim">
          Cybersecurity enthusiast, CTF player and technical content creator.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-text">
          <Terminal className="h-4 w-4 text-accent" />
          <h2 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)]">
            whoami
          </h2>
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-5 text-sm text-text-dim leading-relaxed space-y-3">
          <p>
            I document my cybersecurity learning through machine writeups,
            tutorials and technical notes. This blog is my logbook.
          </p>
          <p>
            Active on Hack The Box and other CTF platforms. Particularly interested
            in web pentesting, OSINT and network security.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-text">
          <BookOpen className="h-4 w-4 text-accent" />
          <h2 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)]">
            Certifications
          </h2>
        </div>
        <div className="space-y-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-3 rounded-lg border border-border bg-bg-card px-4 py-2.5"
            >
              <span className="text-sm text-text-dim">{cert.name}</span>
              {cert.status === "wip" && (
                <span className="text-[10px] px-2 py-0.5 rounded border border-yellow/30 text-yellow bg-yellow/5">
                  In progress
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-text">
          <Target className="h-4 w-4 text-accent" />
          <h2 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)]">
            Projects
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.values(siteConfig.portfolio).map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg border border-border bg-bg-card p-4 transition-all hover:border-border-hover hover:bg-bg-hover"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold" style={{ color: project.color }}>
                    {project.name}
                  </span>
                  <ExternalLink className="h-3 w-3 text-text-faint" />
                </div>
                <p className="text-xs text-text-dim">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] text-text">
          Contact
        </h2>
        <div className="flex flex-wrap gap-3">
          {socials
            .filter((s) => s.href)
            .map((social) =>
              social.disabled ? (
                <span
                  key={social.label}
                  className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-faint opacity-50 cursor-not-allowed"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </span>
              ) : (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm text-text-dim transition-all hover:border-accent/50 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              )
            )}
        </div>
      </section>
    </div>
  );
}

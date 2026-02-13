import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Shield,
  Terminal,
  BookOpen,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description: "À propos de l'auteur du blog",
};

const skills = [
  { name: "Pentesting", level: "Avancé" },
  { name: "OSINT", level: "Avancé" },
  { name: "Network Security", level: "Intermédiaire" },
  { name: "Web Security", level: "Avancé" },
  { name: "Reverse Engineering", level: "Intermédiaire" },
  { name: "Forensics", level: "Intermédiaire" },
  { name: "Linux Administration", level: "Avancé" },
  { name: "Python / Scripting", level: "Avancé" },
];

const certifications = [
  { name: "Certification en cours...", status: "wip" },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: siteConfig.author.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: siteConfig.author.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    href: siteConfig.author.email ? `mailto:${siteConfig.author.email}` : "",
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
          Passionné de cybersécurité, CTF player et créateur de contenu technique.
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
            Je documente mon apprentissage en cybersécurité à travers des writeups de machines,
            des tutoriels et de la veille technique. Ce blog est mon carnet de bord.
          </p>
          <p>
            Actif sur Hack The Box et autres plateformes CTF. Je m'intéresse
            particulièrement au pentesting web, à l'OSINT et à la sécurité réseau.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-text">
          <Shield className="h-4 w-4 text-accent" />
          <h2 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)]">
            Compétences
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between rounded-lg border border-border bg-bg-card px-4 py-2.5"
            >
              <span className="text-sm text-text">{skill.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded border ${
                skill.level === "Avancé"
                  ? "border-green/30 text-green bg-green/5"
                  : "border-orange/30 text-orange bg-orange/5"
              }`}>
                {skill.level}
              </span>
            </div>
          ))}
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
                  En cours
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
            Projets
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
        <div className="flex gap-3">
          {socials
            .filter((s) => s.href)
            .map((social) => (
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
            ))}
        </div>
      </section>
    </div>
  );
}

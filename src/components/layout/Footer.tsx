import { Github, Terminal, Target, Rss } from "lucide-react";
import { siteConfig } from "@/config/site";

const socials = [
  { icon: Github, label: "GitHub", href: siteConfig.author.github },
  { icon: Terminal, label: "HTB", href: siteConfig.author.hackthebox },
  { icon: Target, label: "THM", href: siteConfig.author.tryhackme },
  { icon: Rss, label: "RSS", href: "/feed.xml" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-text-faint">
          © {new Date().getFullYear()} {siteConfig.author.name}
        </p>
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("/") ? undefined : "_blank"}
              rel={social.href.startsWith("/") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 text-[11px] text-text-dim hover:text-accent transition-colors"
            >
              <social.icon className="h-3.5 w-3.5" />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

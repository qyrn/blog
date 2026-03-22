import Link from "next/link";
import Image from "next/image";
import { Github, Terminal, Target } from "lucide-react";
import { siteConfig } from "@/config/site";

const socials = [
  { icon: Github, label: "GitHub", href: siteConfig.author.github },
  { icon: Terminal, label: "HTB", href: siteConfig.author.hackthebox },
  { icon: Target, label: "THM", href: siteConfig.author.tryhackme },
];

export default function AuthorBio() {

  return (
    <section className="mt-14 pt-10 border-t border-border/60">
      <div className="flex items-start gap-5">
        <div className="h-14 w-14 shrink-0 rounded-full overflow-hidden border border-border bg-bg-card">
          <Image
            src="/images/avatar.png"
            alt={siteConfig.author.name}
            width={56}
            height={56}
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold font-display text-white">
            {siteConfig.author.name}
          </p>
          <p className="text-sm text-text-dim mt-1.5 leading-relaxed">learning pentest • film enjoyer • contact@qyrn.dev</p>

          <div className="flex items-center gap-3 mt-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-text-faint hover:text-accent transition-colors"
              >
                <social.icon className="h-3.5 w-3.5" />
                {social.label}
              </a>
            ))}
            <span className="text-border">·</span>
            <Link
              href="/blog"
              className="text-xs text-text-faint hover:text-accent transition-colors"
            >
              All posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ExternalLink, Github, Database, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools",
  description: "Personal tools and projects — Vault, Échelon and scripts.",
};

const tools = [
  {
    name: siteConfig.portfolio.vault.name,
    description: siteConfig.portfolio.vault.description,
    url: siteConfig.portfolio.vault.url,
    color: siteConfig.portfolio.vault.color,
    icon: Database,
    features: ["Curated resources", "Useful links", "Documentation"],
  },
  {
    name: siteConfig.portfolio.echelon.name,
    description: siteConfig.portfolio.echelon.description,
    url: siteConfig.portfolio.echelon.url,
    color: siteConfig.portfolio.echelon.color,
    icon: Eye,
    features: ["Automated intel", "Weekly digest", "RSS feed"],
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2">
          /tools
        </h1>
        <p className="text-sm text-text-dim">
          Personal tools and projects.
        </p>
      </div>

      <div className="space-y-6">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border bg-bg-card p-6 transition-all hover:border-border-hover hover:bg-bg-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
                  style={{ borderColor: `${tool.color}30`, backgroundColor: `${tool.color}10` }}
                >
                  <tool.icon className="h-5 w-5" style={{ color: tool.color }} />
                </div>
                <div>
                  <h2
                    className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]"
                    style={{ color: tool.color }}
                  >
                    {tool.name}
                  </h2>
                  <p className="text-sm text-text-dim">{tool.description}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-text-faint group-hover:text-text-dim transition-colors" />
            </div>

            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-text-dim"
                >
                  {feature}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-border bg-bg-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Github className="h-4 w-4 text-accent" />
          <h2 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] text-text">
            Scripts & Open Source
          </h2>
        </div>
        <p className="text-sm text-text-dim mb-4">
          Find my scripts and contributions on GitHub.
        </p>
        <a
          href={siteConfig.author.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-text-dim transition-all hover:border-accent/50 hover:text-accent"
        >
          <Github className="h-4 w-4" />
          {siteConfig.author.github.replace("https://github.com/", "@")}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

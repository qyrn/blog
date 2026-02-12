import { siteConfig } from "@/config/site";
import { portfolioNav } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <span className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] text-accent">
              {siteConfig.name}
            </span>
            <p className="text-xs text-text-dim mt-1">{siteConfig.description}</p>
          </div>

          <div className="flex gap-6">
            {portfolioNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors hover:opacity-80"
                style={{ color: item.color }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
          <span className="text-[10px] text-text-faint tracking-widest uppercase">
            {new Date().getFullYear()} {siteConfig.name}
          </span>
          <div className="flex gap-4">
            {siteConfig.author.github && (
              <a
                href={`https://github.com/${siteConfig.author.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-faint hover:text-accent transition-colors text-xs"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

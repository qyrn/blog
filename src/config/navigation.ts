import { siteConfig } from "./site";

export const mainNav = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const portfolioNav = [
  {
    label: siteConfig.portfolio.vault.name,
    href: siteConfig.portfolio.vault.url,
    description: siteConfig.portfolio.vault.description,
    color: siteConfig.portfolio.vault.color,
    external: true,
  },
  {
    label: siteConfig.portfolio.echelon.name,
    href: siteConfig.portfolio.echelon.url,
    description: siteConfig.portfolio.echelon.description,
    color: siteConfig.portfolio.echelon.color,
    external: true,
  },
];

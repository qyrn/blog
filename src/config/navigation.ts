import { siteConfig } from "./site";

export const mainNav = [
  { label: "Writeups", href: "/writeups" },
  { label: "Veille", href: "/veille" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Tools", href: "/tools" },
  { label: "À propos", href: "/about" },
];

export const secondaryNav = [
  { label: "Blog", href: "/blog" },
  { label: "Incidents", href: "/incidents" },
  { label: "Tags", href: "/tags" },
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

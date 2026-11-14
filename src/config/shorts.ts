export interface Short {
  id: string;
  title: string;
  articleSlug?: string;
}

export const shortsChannelUrl = "https://www.youtube.com/@qyrnsec/shorts";

export const shorts: Short[] = [
  {
    id: "Xf-wAQGE0ho",
    title: "Impossible travel : comment un SOC repère un compte volé",
  },
  {
    id: "Wj1Pj4zj2iA",
    title: "Comment repérer un mail de phishing en 30 secondes",
  },
  {
    id: "eD95ttXTSpg",
    title: "Comment un SOC repère une injection SQL dans les logs en 30 sec",
    articleSlug: "sqli-log-patterns-soc-2026",
  },
  {
    id: "mN3kXziSK9M",
    title: "3 flags cookies que ton app oublie sûrement",
  },
];

export function getShortPosterPath(id: string): string {
  return `/shorts/${id}.webp`;
}

export function getShortUrl(id: string): string {
  return `https://www.youtube.com/shorts/${id}`;
}

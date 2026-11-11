export interface Short {
  id: string;
  title: string;
  articleSlug?: string;
}

export const shortsChannelUrl = "https://www.youtube.com/@qyrnsec/shorts";

export const shorts: Short[] = [
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

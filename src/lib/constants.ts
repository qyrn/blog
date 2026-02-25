import type { PostType, Category, Difficulty, Lang } from "./types";

export const POST_TYPES: { value: PostType; label: string }[] = [
  { value: "writeup", label: "Writeup" },
  { value: "tutorial", label: "Tutorial" },
  { value: "journal", label: "Journal" },
  { value: "watch", label: "Intel" },
  { value: "incident", label: "Incident" },
];

export const CATEGORIES: { value: Category; label: string }[] = [
  { value: "Web", label: "Web" },
  { value: "Network", label: "Network" },
  { value: "Privesc", label: "Privesc" },
  { value: "OSINT", label: "OSINT" },
  { value: "Forensics", label: "Forensics" },
  { value: "Crypto", label: "Crypto" },
  { value: "RE", label: "RE" },
  { value: "Misc", label: "Misc" },
];

export const DIFFICULTIES: { value: Difficulty; label: string; color: string }[] = [
  { value: "Easy", label: "Easy", color: "#00ff88" },
  { value: "Medium", label: "Medium", color: "#ff9f43" },
  { value: "Hard", label: "Hard", color: "#ff4d6a" },
];

export const LANGS: { value: Lang; label: string }[] = [
  { value: "fr", label: "FR" },
  { value: "en", label: "EN" },
];

export const TYPE_STYLES: Record<PostType, string> = {
  writeup: "bg-accent/20 border-accent text-accent",
  tutorial: "bg-blue/20 border-blue text-blue",
  journal: "bg-fuchsia/20 border-fuchsia text-fuchsia",
  watch: "bg-cyan/20 border-cyan text-cyan",
  incident: "bg-red/20 border-red text-red",
};

export const CATEGORY_STYLES: Record<Category, string> = {
  Web: "bg-accent/20 border-accent text-accent",
  Network: "bg-blue/20 border-blue text-blue",
  Privesc: "bg-red/20 border-red text-red",
  OSINT: "bg-cyan/20 border-cyan text-cyan",
  Forensics: "bg-orange/20 border-orange text-orange",
  Crypto: "bg-yellow/20 border-yellow text-yellow",
  RE: "bg-fuchsia/20 border-fuchsia text-fuchsia",
  Misc: "bg-purple/20 border-purple text-purple",
};

export const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  "Easy": "bg-green/20 border-green text-green",
  "Medium": "bg-orange/20 border-orange text-orange",
  "Hard": "bg-red/20 border-red text-red",
};

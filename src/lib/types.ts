export type PostType = "writeup" | "tutorial" | "journal" | "watch" | "incident";

export type Category =
  | "Web"
  | "Network"
  | "Privesc"
  | "OSINT"
  | "Forensics"
  | "Crypto"
  | "RE"
  | "Misc";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Lang = "fr" | "en";

export interface PostFilterState {
  types: PostType[];
  categories: Category[];
  difficulties: Difficulty[];
  langs: Lang[];
  search: string;
}

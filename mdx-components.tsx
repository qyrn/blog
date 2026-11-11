import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import Callout from "@/components/mdx/Callout";
import Terminal from "@/components/mdx/Terminal";
import Flag from "@/components/mdx/Flag";
import Difficulty from "@/components/mdx/Difficulty";
import ImageZoom from "@/components/mdx/ImageZoom";
import Short from "@/components/mdx/Short";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    Callout,
    Terminal,
    Flag,
    Difficulty,
    ImageZoom,
    Short,
    ...components,
  };
}

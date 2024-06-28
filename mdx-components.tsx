import type { MDXComponents } from "mdx/types";
import { Heading01, Heading02 } from "./components/mdx/heading";
import { Paragraph } from "./components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading01,
    h2: Heading02,
    p: Paragraph,
    ...components,
  };
}

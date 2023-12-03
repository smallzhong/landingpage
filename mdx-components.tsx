import React from "react";
import Image, { ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";
import Link, { LinkProps } from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    it: (props) => <em {...props} />,
    em: (props) => <em className="text-strong" {...props} />,
    Image: (props: ImageProps) => <Image {...props} />,
    ...components
  };
}
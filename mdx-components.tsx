import React from "react";
import Image, { ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";
import Link, { LinkProps } from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    it: (props) => <em {...props} />,
    em: (props) => <em className="text-strong" {...props} />,
    dcenter: (props) => <div className="text-center" {...props} />,
    Image: (props: ImageProps) => <Image {...props} />,
    ...components
  };
}
import React from "react"
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    it: (props) => <em {...props} />,
    em: (props) => <em className="text-strong" {...props} />,
    dcenter: (props) => <div className="text-center" {...props} />,
    // a: (props) => <a className="link" {...props} />,
    ...components
  }
}
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "public/[hash][ext]"
      }
    });

    return config;
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkDirective, remarkDirectiveRehype],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig);
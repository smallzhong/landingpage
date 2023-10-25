/** @type {import("next").NextConfig} */

const nextConfig = {
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

module.exports = nextConfig;
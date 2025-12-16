import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    // ATTENTION: MOCK
    domains: ["cdn.dummyjson.com"],
  },
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

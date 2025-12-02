import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)

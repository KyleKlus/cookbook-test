import createMDX from '@next/mdx'

import type { NextConfig } from "next";
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  basePath: '',
  output: 'export',
  images: {
    unoptimized: true,
    qualities: [100],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      // Without options
      'remark-gfm',
    ],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/herzen-final-term-paper',
  assetPrefix: '/herzen-final-term-paper',
  /* config options here */
  output: 'export',
  images: {
    path: '',
    unoptimized: true,
  },
};

export default nextConfig;

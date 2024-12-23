import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {unoptimized: true},
  basePath: '/herzen-final-term-paper',
  assetPrefix: '/herzen-final-term-paper/',
};

export default nextConfig;

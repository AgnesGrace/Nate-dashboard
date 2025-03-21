import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    // If you have other custom Webpack modifications, add them here
    return config;
  },
};

export default nextConfig;

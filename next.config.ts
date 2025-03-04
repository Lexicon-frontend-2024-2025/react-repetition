import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'majazocom.github.io',
        pathname: '/Data/**',
      },
      {
        protocol: 'https',
        hostname: 'images.dog.ceo'
      },
    ],
  },
};

export default nextConfig;

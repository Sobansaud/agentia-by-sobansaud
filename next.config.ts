import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.sanity.io"], // Sanity ke images ke liye domain allow karna zaroori hai
  },
};

export default nextConfig;

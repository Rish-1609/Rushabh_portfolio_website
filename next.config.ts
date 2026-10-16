import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/", permanent: true },
      { source: "/work/:path*", destination: "/", permanent: true },
      { source: "/education", destination: "/", permanent: true },
      { source: "/resume", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

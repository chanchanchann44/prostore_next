import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Will still allow production builds even if there are type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

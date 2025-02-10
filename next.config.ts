import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  async rewrites() {
    return [
      {
        source: "/user",
        destination: "/api/user",
      },
    ];
  },
};

export default nextConfig;

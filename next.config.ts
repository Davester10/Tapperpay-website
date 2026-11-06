import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: false,
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/create-account",
        destination: "/signin",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/signin",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/signin",
        permanent: true,
      },
      {
        source: "/get-started",
        destination: "/signin",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/signin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

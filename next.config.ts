import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows Cloudinary photo links in data/properties.ts
  images: { remotePatterns: [new URL("https://res.cloudinary.com/**")] },
};

export default nextConfig;

import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  outputFileTracingRoot: path.resolve("."),
};

export default nextConfig;

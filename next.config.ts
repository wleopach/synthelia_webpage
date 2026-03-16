import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If you're deploying to https://<username>.github.io/<repository>/, 
  // you must set the basePath to /<repository>
  basePath: "/synthelia_webpage",
  trailingSlash: true
};

export default nextConfig;

const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `${process.env.API_URL}/:path*`,
  //     },
  //   ];
  // },
  images: {
    domains: ["c4.wallpaperflare.com"],
  },
};

module.exports = nextConfig;

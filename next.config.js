/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["c4.wallpaperflare.com"],
  },
};

module.exports = nextConfig;

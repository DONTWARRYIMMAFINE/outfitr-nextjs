/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "c4.wallpaperflare.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;

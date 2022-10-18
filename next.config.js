/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},

  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

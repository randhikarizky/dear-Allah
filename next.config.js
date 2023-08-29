/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/github-pages",
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;

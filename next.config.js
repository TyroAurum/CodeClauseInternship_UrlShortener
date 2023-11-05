/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/api/short",
          destination: "https://api.encurtador.dev/encurtamentos",
        },
      ];
    },
  };

module.exports = nextConfig

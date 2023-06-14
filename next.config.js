/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      unoptimized: true,
    },
    experimental: {
      serverComponentsExternalPackages : ['mongoose'],
      serverActions: true,
    },
  };

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'g-datalabs.com',
      },
      {
        protocol: 'https',
        hostname: 'api.g-datalabs.com',
      },
      {
        protocol: 'https',
        hostname: 'ai.g-datalabs.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

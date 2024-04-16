/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.chasnz.org',
      },
    ],
  },
};

module.exports = nextConfig;

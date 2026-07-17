/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external images from simpleicons CDN used in skills
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
};

export default nextConfig;

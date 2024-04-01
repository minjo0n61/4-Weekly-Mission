/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      // { protocol: 'https', hostname: 'yt3.googleusercontent.com' },
      // { protocol: 'https', hostname: 'www.yupdduk.com' },
      // { protocol: 'https', hostname: 'www.dookki.co.kr' },
    ],
  },
};

module.exports = nextConfig;

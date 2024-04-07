/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cityfood.co.kr', 't1.kakaocdn.net'],
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.vercel.com' },
      { protocol: 'https', hostname: 'ca.slack-edge.com' },
      { protocol: 'https', hostname: 'codeit.kr' },
      { protocol: 'https', hostname: 'codeit-frontend.codeit.com' },
      { protocol: 'https', hostname: 'codeit-images.codeit.com' },
      {
        protocol: 'https',
        hostname: 'codeit-front.s3.ap-northeast-2.amazonaws.com',
      },
      { protocol: 'https', hostname: 'cityfood.co.kr' },
      { protocol: 'https', hostname: 'line.me' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'img.ruliweb.com' },
      { protocol: 'https', hostname: 'imgorg.catch.co.kr' },
      { protocol: 'https', hostname: 'img1.daumcdn.net' },
      { protocol: 'https', hostname: 'opengraph.githubassets.com' },
      { protocol: 'https', hostname: 'reactjs.org' },
      { protocol: 'https', hostname: 'rodrigovallades.gallerycdn.vsassets.io' },
      { protocol: 'https', hostname: 's.pstatic.net' },
      { protocol: 'https', hostname: 'signpen.net' },
      { protocol: 'https', hostname: 'static.cdninstagram.com' },
      { protocol: 'https', hostname: 'static.codenary.co.kr' },
      { protocol: 'https', hostname: 'storybook.js.org' },
      { protocol: 'https', hostname: 'tanstack.com' },
      { protocol: 'https', hostname: 't1.kakaocdn.net' },
      { protocol: 'https', hostname: 'testing-library.com' },
      { protocol: 'https', hostname: 'wormwlrm.github.io' },
      { protocol: 'https', hostname: 'www.dookki.co.kr' },
      { protocol: 'https', hostname: 'www.facebook.com' },
      { protocol: 'https', hostname: 'www.innoforest.co.kr' },
      { protocol: 'https', hostname: 'www.yupdduk.com' },
      { protocol: 'https', hostname: 'yt3.googleusercontent.com' },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products/:id',
        destination: '/items/:id',
        permanent: true, // 캐시에 저장하는 지 여부
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/codeitmall/**',
      },
    ],
  },
}

module.exports = nextConfig

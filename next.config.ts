import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "media-src 'self' https://drive.google.com; frame-src 'self' https://drive.google.com https://www.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

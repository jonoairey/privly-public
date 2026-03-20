import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.useprivly.com' },
    ],
  },
  output: 'standalone',

  // Enforce no trailing slash — /pricing not /pricing/ — prevents duplicate URLs
  trailingSlash: false,

  // Redirect non-www to www for consistent canonical URLs
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'useprivly.com' }],
        destination: 'https://www.useprivly.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

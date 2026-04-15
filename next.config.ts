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

  // Redirect non-www to www for consistent canonical URLs + consolidate deprecated DMCA guides
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'useprivly.com' }],
        destination: 'https://www.useprivly.com/:path*',
        permanent: true,
      },
      // --- Deprecated DMCA guides → 2026 master guide (consolidating keyword cannibalisation) ---
      {
        source: '/articles/dmca-takedowns-complete-guide-adult-creators',
        destination: '/articles/dmca-takedown-master-guide-2026',
        permanent: true,
      },
      {
        source: '/articles/complete-dmca-takedown-guide-adult-creators-2026',
        destination: '/articles/dmca-takedown-master-guide-2026',
        permanent: true,
      },
      // Platform-specific DMCA guides that are now superseded by remove-from pages
      {
        source: '/articles/how-to-file-dmca-reddit-telegram-twitter',
        destination: '/remove-from-telegram',
        permanent: true,
      },
      // Old free-template article → DMCA generator tool (better UX, same intent)
      {
        source: '/articles/free-dmca-takedown-notice-template',
        destination: '/tools/dmca-generator',
        permanent: true,
      },
      // Old comparison article → canonical comparison landing pages
      {
        source: '/articles/privly-vs-copyrightshark-vs-bruqi-comparison',
        destination: '/privly-vs-copyrightshark',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

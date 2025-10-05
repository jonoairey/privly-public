import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.useprivly.com'

  // Static pages
  const routes = [
    '',
    '/scam-watch',
    '/personal',
    '/professional',
    '/pricing',
    '/about',
    '/blog',
    '/privacy',
    '/terms',
    '/for-business',
    '/family',
    '/use-cases/ai-scam-protection',
    '/use-cases/creator-protection',
    '/use-cases/dating-safety',
    '/use-cases/digital-estate',
    '/use-cases/family-protection',
    '/use-cases/financial-security',
    // Platform Protection Guides
    '/guides/platform-protection/onlyfans-leak-protection',
    '/guides/platform-protection/fansly-content-protection',
    '/guides/platform-protection/patreon-creator-privacy',
    '/guides/platform-protection/manyvids-leak-detection',
    '/guides/platform-protection/instagram-content-theft',
    '/guides/platform-protection/tiktok-creator-privacy',
    // Privacy How-To Guides
    '/guides/privacy-how-to/remove-leaked-content',
    '/guides/privacy-how-to/dmca-takedown-service',
    '/guides/privacy-how-to/stop-content-pirates',
    '/guides/privacy-how-to/dark-web-monitoring',
    '/guides/privacy-how-to/delete-yourself-from-internet',
    '/guides/privacy-how-to/data-broker-removal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/pricing' ? 'daily' as const : route.startsWith('/guides') ? 'monthly' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/guides') ? 0.7 : route.startsWith('/use-cases') ? 0.6 : 0.8,
  }))

  return routes
}

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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/pricing' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/use-cases') ? 0.6 : 0.8,
  }))

  return routes
}

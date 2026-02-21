import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.useprivly.com'

  // Static pages (only pages that actually exist)
  const routes = [
    '',
    '/pricing',
    '/how-it-works',
    '/features',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (
      route === '' || route === '/pricing' || route === '/features'
        ? 'daily'
        : 'weekly'
    ) as const,
    priority: (
      route === ''
        ? 1.0
        : route === '/pricing' || route === '/how-it-works' || route === '/features'
        ? 0.9
        : 0.8
    ),
  }))

  // Blog posts
  const blogPosts = [
    'how-onlyfans-creators-losing-thousands-content-leaks',
    'dmca-takedowns-complete-guide-adult-creators',
    'deepfake-detection-protecting-identity-ai',
    '5-signs-content-leaked',
    'why-content-protection-best-investment-creator-business',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogPosts]
}

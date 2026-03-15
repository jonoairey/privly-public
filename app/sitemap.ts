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
    '/articles',
    '/fansly',
    '/onlyfans',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (
      route === '' || route === '/pricing' || route === '/features'
        ? 'daily' as const
        : 'weekly' as const
    ),
    priority: (
      route === ''
        ? 1.0
        : route === '/pricing' || route === '/how-it-works' || route === '/features' || route === '/fansly'
        || route === '/onlyfans'
        ? 0.9
        : 0.8
    ),
  }))

  // Articles
  const articleSlugs = [
    'how-onlyfans-creators-losing-thousands-content-leaks',
    'dmca-takedowns-complete-guide-adult-creators',
    'deepfake-detection-protecting-identity-ai',
    '5-signs-content-leaked',
    'why-content-protection-best-investment-creator-business',
    'how-to-remove-leaked-onlyfans-content',
    'complete-dmca-takedown-guide-adult-creators-2026',
    'forensic-watermarking-explained-trace-leakers',
    'someone-leaked-my-content-what-to-do',
    'free-dmca-takedown-notice-template',
    'privly-vs-copyrightshark-vs-bruqi-comparison',
    'how-to-file-dmca-reddit-telegram-twitter',
    'how-much-money-content-leaks-cost-creators',
    'how-to-watermark-onlyfans-content',
    'hidden-cost-ignoring-content-piracy',
    'fansly-leak-sites-how-to-find-remove-leaked-content',
    'fansly-dmca-how-to-file-takedowns-remove-leaked-content',
    'is-fansly-safe-complete-security-guide-creators',
    'dmca-takedowns-manyvids-what-works',
    'how-to-watermark-fansly-content-catch-leakers',
    'best-anti-content-theft-services-adult-creators',
    'onlyfans-leak-prevention-complete-security-checklist',
    'onlyfans-dmca-takedown-guide-step-by-step',
    'onlyfans-content-theft-what-to-do-when-leaked',
    'onlyfans-leak-sites-2026-how-they-work-how-to-fight-back',
  ].map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...articleSlugs]
}

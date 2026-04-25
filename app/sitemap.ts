import { MetadataRoute } from 'next'
import { articles as coreArticles } from '@/lib/article-data'
import { leakSiteArticles } from '@/lib/article-data-leak-sites'
import { safetyArticles } from '@/lib/article-data-safety'
import { onlyfansArticles } from '@/lib/article-data-onlyfans'
import { patreonArticles } from '@/lib/article-data-patreon'
import { glossaryEntries } from '@/lib/glossary-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.useprivly.com'

  // Static pages
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
    // Platform pages
    '/onlyfans',
    '/fansly',
    '/patreon',
    '/manyvids',
    '/chaturbate',
    '/instagram',
    '/tiktok',
    '/reddit',
    '/threads',
    // Q2 2026 platform expansion — emerging creator subscription platforms
    '/fanfix',
    '/justforfans',
    '/fanvue',
    '/loyalfans',
    // Removal guide landing pages
    '/remove-from-erome',
    '/remove-from-bunkr',
    '/remove-from-simpcity',
    '/remove-from-coomer',
    '/remove-from-cyberdrop',
    // Comparison pages
    '/privly-vs-rulta',
    '/privly-vs-bruqi',
    '/privly-vs-branditscan',
    '/privly-vs-copyrightshark',
    '/privly-vs-onlyguard',
    '/privly-vs-ceartas',
    '/privly-vs-takedowns-ai',
    '/privly-vs-removetech',
    // Remove-from pages (new)
    '/remove-from-telegram',
    '/remove-from-google',
    '/remove-from-thothub',
    '/remove-from-mrdeepfakes',
    // Remove-from pages (Q2 2026 expansion based on observatory data)
    '/remove-from-fapello',
    '/remove-from-nudostar',
    '/remove-from-spankbang',
    '/remove-from-wildskirts',
    '/remove-from-leakedzone',
    '/remove-from-fapodrop',
    '/remove-from-eporner',
    '/remove-from-thotsbay',
    // Tools
    '/tools',
    '/tools/dmca-generator',
    // Report
    '/report/content-leaks-2026',
    // Observatory (data dashboard)
    '/observatory',
    // Glossary index
    '/glossary',
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
        : route.startsWith('/onlyfans') || route.startsWith('/fansly') || route === '/pricing'
          || route === '/how-it-works' || route === '/features'
          || route.startsWith('/remove-from') || route === '/tools/dmca-generator'
        ? 0.9
        : 0.8
    ),
  }))

  // All articles
  const allArticles = [...coreArticles, ...leakSiteArticles, ...safetyArticles, ...onlyfansArticles, ...patreonArticles]
  const articleUrls = allArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Glossary terms
  const glossaryUrls = glossaryEntries.map((entry) => ({
    url: `${baseUrl}/glossary/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...articleUrls, ...glossaryUrls]
}

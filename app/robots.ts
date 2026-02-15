import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.useprivly.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/.well-known/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

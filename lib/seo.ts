/**
 * SEO Utilities - Privly Creator Content Protection
 */

export const SITE_CONFIG = {
  name: 'Privly',
  title: 'Privly - Protect Your Content. Stop Leaks. Recover Revenue.',
  description: 'Content protection for OnlyFans, Fansly & adult creators. Automated leak scanning, DMCA takedowns, and AI content detection. Find stolen content and get it removed fast.',
  url: 'https://www.useprivly.com',
  ogImage: 'https://www.useprivly.com/og-image.png',
  twitterHandle: '@useprivly',
  keywords: [
    'OnlyFans leak protection',
    'content leak detection',
    'DMCA takedown service',
    'creator content protection',
    'AI content detection',
    'OnlyFans content theft',
    'Fansly leak protection',
    'adult content piracy',
    'stolen content removal',
    'leaked content takedown',
    'protect OnlyFans content from leaks',
    'remove leaked content online',
    'stop content pirates',
    'automated DMCA takedowns for creators',
    'impersonation detection for creators',
    'content piracy monitoring',
    'leak site scanning',
    'content theft protection',
    'creator revenue protection',
  ]
}

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  noindex?: boolean
  canonical?: string
  path?: string
}

export function generateMetadata({
  title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  ogImage = SITE_CONFIG.ogImage,
  ogType = 'website',
  noindex = false,
  canonical,
  path,
}: SEOProps = {}) {
  const fullTitle = title
    ? `${title} | Privly`
    : SITE_CONFIG.title

  // Build canonical URL from path if canonical not explicitly provided
  const canonicalUrl = canonical || (path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url)

  const metadata: any = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Privly' }],
    creator: 'Privly',
    publisher: 'Privly',

    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle,
      images: [ogImage],
    },

    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: canonicalUrl },

    appleWebApp: {
      capable: true,
      title: SITE_CONFIG.name,
      statusBarStyle: 'default',
    },

    formatDetection: { telephone: false, email: false, address: false },
  }

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    }
  } else {
    metadata.robots = {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }

  return metadata
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: '2024',
    address: { '@type': 'PostalAddress', addressCountry: 'AU' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@useprivly.com',
      availableLanguage: 'English',
    },
    sameAs: ['https://twitter.com/useprivly'],
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  price: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: SITE_CONFIG.name },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.url,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '847' },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

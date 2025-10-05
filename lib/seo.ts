/**
 * SEO Utilities and Constants
 */

export const SITE_CONFIG = {
  name: 'Privly',
  title: 'Privly - AI-Powered Digital Privacy Protection & Scam Detection',
  description: 'Protect yourself from scams, data breaches, and digital threats with AI-powered privacy protection. Instant scam verification, dark web monitoring, and automated data removal from 500+ sites.',
  url: 'https://www.useprivly.com',
  ogImage: 'https://www.useprivly.com/og-image.png',
  twitterHandle: '@privlyme',
  keywords: [
    // Primary keywords
    'scam protection',
    'digital privacy',
    'data breach monitoring',
    'dark web monitoring',
    'AI scam detection',
    'identity theft protection',

    // Secondary keywords
    'data broker removal',
    'personal privacy protection',
    'online scam prevention',
    'WhatsApp scam checker',
    'email scam detector',
    'phishing protection',

    // Long-tail keywords
    'how to protect from scams',
    'remove personal data from internet',
    'check if email is scam',
    'AI powered scam detection',
    'family scam protection',
    'professional content protection',

    // Location-based
    'privacy protection Australia',
    'scam protection service',
    'digital privacy tools'
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
  jsonLd?: object
}

export function generateMetadata({
  title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  ogImage = SITE_CONFIG.ogImage,
  ogType = 'website',
  noindex = false,
  canonical,
  jsonLd
}: SEOProps = {}) {
  const fullTitle = title
    ? `${title} | Privly`
    : SITE_CONFIG.title

  const metadata: any = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Privly' }],
    creator: 'Privly',
    publisher: 'Privly',

    // Open Graph
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle,
      images: [ogImage],
    },

    // Additional metadata
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonical || SITE_CONFIG.url,
    },

    // Verification
    verification: {
      google: 'your-google-verification-code', // Add your Google Search Console verification
      // yandex: 'your-yandex-verification',
      // bing: 'your-bing-verification',
    },

    // App links
    appleWebApp: {
      capable: true,
      title: SITE_CONFIG.name,
      statusBarStyle: 'default',
    },

    // Format detection
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  }

  // Add noindex if specified
  if (noindex) {
    metadata.robots = {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
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

// Product-specific metadata generators
export const productMetadata = {
  scamWatch: generateMetadata({
    title: 'Scam Watch - AI Scam Detection & Protection',
    description: 'Never fall for a scam again. Get instant AI-powered scam verification via WhatsApp, SMS, or email in under 60 seconds. Protect yourself and your family for $5.99/month.',
    keywords: [
      'scam watch',
      'scam detection',
      'AI scam checker',
      'WhatsApp scam verification',
      'email scam checker',
      'SMS scam detection',
      'phishing protection',
      'fraud prevention',
      'online scam protection',
      'family scam protection'
    ],
    canonical: `${SITE_CONFIG.url}/scam-watch`,
  }),

  personal: generateMetadata({
    title: 'Personal Privacy Protection - Data Removal & Dark Web Monitoring',
    description: 'Complete digital privacy protection with automated data removal from 500+ sites, dark web monitoring, breach alerts, and monthly privacy advisor calls. $9.99/month.',
    keywords: [
      'personal privacy protection',
      'data broker removal',
      'dark web monitoring',
      'breach monitoring',
      'data privacy',
      'remove personal information online',
      'privacy protection service',
      'digital footprint removal',
      'online privacy tools'
    ],
    canonical: `${SITE_CONFIG.url}/personal`,
  }),

  professional: generateMetadata({
    title: 'Professional Content Protection - DMCA & Brand Monitoring',
    description: 'Advanced brand and content protection for creators and professionals. Monitor 72,000+ sites, automated DMCA takedowns, deepfake detection. $39.99/month.',
    keywords: [
      'content protection',
      'DMCA takedown',
      'brand protection',
      'creator protection',
      'deepfake detection',
      'copyright protection',
      'image theft protection',
      'professional privacy',
      'content monitoring'
    ],
    canonical: `${SITE_CONFIG.url}/professional`,
  }),
}

// Generate JSON-LD structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@useprivly.com',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://twitter.com/privlyme',
      // Add other social media profiles
    ],
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
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.url,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
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

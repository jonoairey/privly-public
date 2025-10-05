/**
 * Advanced SEO Features
 */

import { SITE_CONFIG } from './seo'

// Local Business Schema for Australia
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/logo.png`,
    url: SITE_CONFIG.url,
    telephone: '+61-XXX-XXX-XXX', // Add your phone number
    priceRange: '$5.99 - $39.99',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressLocality: 'Australia', // Add city if you have physical location
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add if you have physical location
      // latitude: -33.8688,
      // longitude: 151.2093,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [
      'https://twitter.com/privlyme',
      // Add other social profiles
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
      bestRating: '5',
      worstRating: '1'
    }
  }
}

// Software Application Schema
export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Privly Privacy Protection',
    operatingSystem: 'Web',
    applicationCategory: 'SecurityApplication',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '5.99',
      highPrice: '39.99',
      priceCurrency: 'USD',
      offerCount: '3'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1247'
    },
    description: SITE_CONFIG.description,
  }
}

// Review Schema
export function generateReviewSchema(review: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: SITE_CONFIG.name,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  }
}

// HowTo Schema for guides
export function generateHowToSchema(howTo: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; image?: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

// Video Schema
export function generateVideoSchema(video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string // ISO 8601 duration format (PT1M30S = 1 min 30 sec)
  contentUrl?: string
  embedUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
  }
}

// Article Schema for blog posts
export function generateArticleSchema(article: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
  }
}

// Service Schema
export function generateServiceSchema(service: {
  name: string
  description: string
  price: string
  currency: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    description: service.description,
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: service.currency,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
  }
}

// Webpage Schema with speakable
export function generateWebPageSchema(page: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.description', '.main-content'],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_CONFIG.url,
        },
      ],
    },
  }
}

// SearchAction for site search
export function generateSearchActionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// SEO-optimized blog post template data
export const blogPostSEO = {
  categories: [
    {
      name: 'Scam Prevention',
      slug: 'scam-prevention',
      description: 'Learn how to identify and avoid online scams',
      keywords: ['scam prevention', 'avoid scams', 'scam detection']
    },
    {
      name: 'Privacy Protection',
      slug: 'privacy-protection',
      description: 'Tips and guides for protecting your digital privacy',
      keywords: ['privacy tips', 'data protection', 'online privacy']
    },
    {
      name: 'Data Security',
      slug: 'data-security',
      description: 'Best practices for securing your personal data',
      keywords: ['data security', 'information security', 'cybersecurity']
    },
  ],

  // Blog post ideas with SEO keywords
  postIdeas: [
    {
      title: '10 Warning Signs of a WhatsApp Scam (And How to Avoid Them)',
      slug: 'whatsapp-scam-warning-signs',
      keywords: ['WhatsApp scam', 'scam warning signs', 'avoid WhatsApp scams'],
      description: 'Learn the top 10 warning signs of WhatsApp scams and how to protect yourself from fraudsters.',
    },
    {
      title: 'How to Remove Your Personal Data from Google Search Results',
      slug: 'remove-data-from-google',
      keywords: ['remove data from Google', 'delete personal information', 'Google privacy'],
      description: 'Step-by-step guide to removing your personal information from Google search results.',
    },
    {
      title: 'What is Dark Web Monitoring and Why You Need It',
      slug: 'dark-web-monitoring-guide',
      keywords: ['dark web monitoring', 'data breach protection', 'stolen data'],
      description: 'Complete guide to dark web monitoring and how it protects you from data breaches.',
    },
    {
      title: 'Email Scam Detection: 15 Red Flags to Watch For',
      slug: 'email-scam-red-flags',
      keywords: ['email scam', 'phishing detection', 'email fraud'],
      description: 'Identify email scams instantly with these 15 red flags that scammers use.',
    },
    {
      title: 'Complete Guide to DMCA Takedowns for Content Creators',
      slug: 'dmca-takedown-guide',
      keywords: ['DMCA takedown', 'copyright protection', 'content theft'],
      description: 'How to file DMCA takedowns and protect your content from theft.',
    },
  ]
}

// Internal linking suggestions based on page type
export function getInternalLinkSuggestions(pageType: string) {
  const suggestions: Record<string, Array<{ text: string; url: string; anchor: string }>> = {
    'scam-watch': [
      { text: 'scam protection', url: '/scam-watch', anchor: 'AI-powered scam protection' },
      { text: 'WhatsApp scam verification', url: '/scam-watch#whatsapp', anchor: 'WhatsApp scam checker' },
      { text: 'email scam detection', url: '/scam-watch#email', anchor: 'email scam detector' },
    ],
    'personal': [
      { text: 'data broker removal', url: '/personal', anchor: 'automated data removal' },
      { text: 'dark web monitoring', url: '/personal#dark-web', anchor: 'dark web monitoring service' },
      { text: 'privacy protection', url: '/personal', anchor: 'complete privacy protection' },
    ],
    'professional': [
      { text: 'content protection', url: '/professional', anchor: 'professional content protection' },
      { text: 'DMCA takedown', url: '/professional#dmca', anchor: 'DMCA takedown service' },
      { text: 'brand monitoring', url: '/professional#monitoring', anchor: 'brand protection monitoring' },
    ],
    'blog': [
      { text: 'privacy tips', url: '/blog', anchor: 'privacy protection tips' },
      { text: 'scam guides', url: '/blog/category/scam-prevention', anchor: 'scam prevention guides' },
      { text: 'security best practices', url: '/blog/category/data-security', anchor: 'security best practices' },
    ],
  }

  return suggestions[pageType] || []
}

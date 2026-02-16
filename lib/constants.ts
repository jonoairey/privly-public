/**
 * Privly - Creator Content Protection Platform
 */

export const PLAN = {
  name: 'Creator Protection',
  price: '$49',
  priceAmount: 49,
  interval: 'month',
  features: [
    'Invisible forensic watermarking',
    'Leak source tracing: find WHO leaked',
    'Leak scanning across 500+ platforms',
    'Automated DMCA takedown generation & submission',
    'AI deepfake & impersonation detection',
    'Content Vault with timestamped proof of ownership',
    'Dedicated human support (real people, not bots)',
    'Real-time email alerts',
    'Revenue impact tracking',
    'Monthly protection reports',
  ],
  guarantee: '30-day money-back guarantee',
}

export const PLATFORMS = [
  'OnlyFans',
  'Fansly',
  'Patreon',
  'ManyVids',
  'Chaturbate',
  'Instagram',
  'TikTok',
  'Twitter/X',
  'Reddit',
  'Telegram',
  'Discord',
  'Pornhub',
  'XVideos',
  'Mega',
  'Google Drive',
] as const

export const STATS = {
  platformsMonitored: '500+',
  takedownSuccessRate: '96%',
  avgDetectionTime: '< 2 hours',
  annualCreatorLoss: '$1.7B',
  creatorsAffected: '47%',
  leakReduction: '70%',
}

export const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
] as const

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.useprivly.com'

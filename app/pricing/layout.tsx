import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Pricing - Privacy Protection Plans',
  description: 'Choose the perfect privacy protection plan. Scam Watch ($5.99/mo), Personal Privacy ($9.99/mo), or Professional Protection ($39.99/mo). 30-day money-back guarantee.',
  keywords: [
    'privacy protection pricing',
    'scam protection cost',
    'data removal pricing',
    'privacy service plans',
    'affordable scam protection',
    'digital privacy cost',
    'privacy subscription',
  ],
  canonical: 'https://www.useprivly.com/pricing',
})

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

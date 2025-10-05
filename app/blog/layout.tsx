import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Privacy & Security Blog - Tips, News & Guides',
  description: 'Expert insights on digital privacy, scam prevention, and online security. Learn how to protect yourself from scams, data breaches, and identity theft.',
  keywords: [
    'privacy blog',
    'scam prevention tips',
    'digital security news',
    'privacy protection guide',
    'online safety blog',
    'cybersecurity tips',
  ],
  canonical: 'https://www.useprivly.com/blog',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

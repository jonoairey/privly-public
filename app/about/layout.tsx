import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'About Us - Protecting Digital Privacy Since 2024',
  description: 'Learn about Privly - Australia\'s leading AI-powered digital privacy protection service. Our mission is to make privacy protection accessible and effective for everyone.',
  keywords: [
    'about privly',
    'privacy protection company',
    'digital privacy service',
    'Australian privacy company',
    'privacy technology',
  ],
  canonical: 'https://www.useprivly.com/about',
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

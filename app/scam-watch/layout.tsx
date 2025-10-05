import { Metadata } from 'next'
import { productMetadata, generateProductSchema } from '@/lib/seo'

export const metadata: Metadata = productMetadata.scamWatch

export default function ScamWatchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const productSchema = generateProductSchema({
    name: 'Scam Watch',
    description: 'AI-powered scam detection and verification service. Get instant scam analysis via WhatsApp, SMS, or email.',
    price: '5.99',
    url: 'https://www.useprivly.com/scam-watch',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      {children}
    </>
  )
}

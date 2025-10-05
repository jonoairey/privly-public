import { Metadata } from 'next'
import { productMetadata, generateProductSchema } from '@/lib/seo'

export const metadata: Metadata = productMetadata.professional

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const productSchema = generateProductSchema({
    name: 'Professional Content Protection',
    description: 'Advanced brand and content protection for creators. Monitor 72,000+ sites, automated DMCA takedowns, and deepfake detection.',
    price: '39.99',
    url: 'https://www.useprivly.com/professional',
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

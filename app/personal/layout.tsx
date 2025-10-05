import { Metadata } from 'next'
import { productMetadata, generateProductSchema } from '@/lib/seo'

export const metadata: Metadata = productMetadata.personal

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const productSchema = generateProductSchema({
    name: 'Personal Privacy Protection',
    description: 'Complete digital privacy protection with data removal from 500+ sites, dark web monitoring, and breach alerts.',
    price: '9.99',
    url: 'https://www.useprivly.com/personal',
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

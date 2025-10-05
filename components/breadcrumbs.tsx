/**
 * Breadcrumb Navigation Component with Schema.org markup
 */

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/seo'

export interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = generateBreadcrumbSchema(items)

  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Visual breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {/* Always include Home */}
          <li>
            <Link
              href="/"
              className="hover:text-[#0EA5E9] transition-colors"
            >
              Home
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.href} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {index === items.length - 1 ? (
                // Last item - current page (no link)
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                // Intermediate items (links)
                <Link
                  href={item.href}
                  className="hover:text-[#0EA5E9] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

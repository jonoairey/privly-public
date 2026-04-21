/**
 * Breadcrumb Navigation Component with Schema.org markup
 */

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { generateBreadcrumbSchema } from '@/lib/seo'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  /**
   * When true, the "Home" crumb is rendered automatically as a prefix. The
   * `items` array should then NOT include Home. When false, `items` should
   * already include every crumb the caller wants in the schema output.
   * @default true
   */
  includeHomePrefix?: boolean
}

export function Breadcrumbs({ items, includeHomePrefix = true }: BreadcrumbsProps) {
  const schemaItems = includeHomePrefix
    ? [{ name: 'Home', url: 'https://www.useprivly.com' }, ...items]
    : items
  const breadcrumbSchema = generateBreadcrumbSchema(schemaItems)

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
        <ol className="flex items-center space-x-2 text-sm" style={{ color: 'var(--ink-2)' }}>
          {includeHomePrefix && (
            <li>
              <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                Home
              </Link>
            </li>
          )}

          {items.map((item, index) => (
            <li key={item.url} className="flex items-center space-x-2">
              {(includeHomePrefix || index > 0) && (
                <ChevronRight className="h-4 w-4" style={{ color: 'var(--mute)' }} />
              )}
              {index === items.length - 1 ? (
                <span className="font-medium" style={{ color: 'var(--ink)' }} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-[var(--accent)] transition-colors"
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

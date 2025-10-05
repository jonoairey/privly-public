/**
 * Testimonials Component with Review Schema
 * Displays customer reviews with schema.org markup for SEO
 */

import { Star } from 'lucide-react'
import { generateReviewSchema } from '@/lib/seo-advanced'
import { Card, CardContent } from '@/components/ui/card'

export interface Testimonial {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
  location?: string
  plan?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  showSchema?: boolean
}

export function Testimonials({ testimonials, showSchema = true }: TestimonialsProps) {
  // Generate review schemas for all testimonials
  const reviewSchemas = testimonials.map(testimonial =>
    generateReviewSchema({
      author: testimonial.author,
      rating: testimonial.rating,
      reviewBody: testimonial.reviewBody,
      datePublished: testimonial.datePublished,
    })
  )

  return (
    <>
      {/* Schema.org structured data for reviews */}
      {showSchema && reviewSchemas.map((schema, index) => (
        <script
          key={`review-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}

      {/* Visual testimonials display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Body */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.reviewBody}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    {testimonial.location && (
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    )}
                  </div>
                  {testimonial.plan && (
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {testimonial.plan}
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(testimonial.datePublished).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

// Example testimonials data - use this in your pages
export const exampleTestimonials: Testimonial[] = [
  {
    author: 'Sarah Mitchell',
    rating: 5,
    reviewBody: 'Privly removed my information from over 200 data broker sites in just two weeks. I finally feel like I have control over my digital privacy again.',
    datePublished: '2024-01-10',
    location: 'Sydney, Australia',
    plan: 'Personal Plan'
  },
  {
    author: 'James Chen',
    rating: 5,
    reviewBody: 'The Scam Watch feature saved me from a sophisticated WhatsApp scam. The AI detected it in seconds and explained exactly why it was fraudulent.',
    datePublished: '2024-01-08',
    location: 'Melbourne, Australia',
    plan: 'Scam Watch'
  },
  {
    author: 'Emily Rodriguez',
    rating: 5,
    reviewBody: 'As a content creator, the DMCA takedown automation has been a game-changer. My stolen content gets removed within days instead of months.',
    datePublished: '2024-01-05',
    location: 'Brisbane, Australia',
    plan: 'Professional Plan'
  },
  {
    author: 'Michael Thompson',
    rating: 5,
    reviewBody: 'I was skeptical at first, but the dark web monitoring actually found my data in a breach I didn\'t even know about. Worth every penny.',
    datePublished: '2024-01-03',
    location: 'Perth, Australia',
    plan: 'Personal Plan'
  },
  {
    author: 'Lisa Wang',
    rating: 5,
    reviewBody: 'My elderly parents kept getting scam calls. After signing them up for Scam Watch, they forward me every suspicious message and feel so much safer.',
    datePublished: '2023-12-28',
    location: 'Adelaide, Australia',
    plan: 'Family Plan'
  },
  {
    author: 'David Kumar',
    rating: 5,
    reviewBody: 'The monthly reports show exactly where my data was found and removed. Complete transparency and peace of mind.',
    datePublished: '2023-12-25',
    location: 'Canberra, Australia',
    plan: 'Personal Plan'
  }
]

/**
 * Testimonials Component
 * Displays customer reviews styled for the dark Privly website theme
 */

import { Star, Quote } from 'lucide-react'

export interface Testimonial {
  author: string
  rating: number
  reviewBody: string
  platform?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="rounded-xl p-6 border border-gray-800 bg-gray-900/50 hover:border-purple-500/30 transition-all"
        >
          {/* Quote icon */}
          <Quote className="w-8 h-8 text-purple-500/30 mb-4" />

          {/* Review Body */}
          <blockquote className="text-gray-300 mb-6 leading-relaxed text-sm">
            &ldquo;{testimonial.reviewBody}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-white text-sm">{testimonial.author}</p>
              {testimonial.platform && (
                <p className="text-xs text-gray-500">{testimonial.platform}</p>
              )}
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < testimonial.rating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const creatorTestimonials: Testimonial[] = [
  {
    author: 'Mia R.',
    rating: 5,
    reviewBody: 'I found my content on 6 different tube sites within the first scan. Privly had DMCA notices out the same day. Three of them were down within 48 hours. I had no idea it was that widespread.',
    platform: 'OnlyFans creator',
  },
  {
    author: 'Jade T.',
    rating: 5,
    reviewBody: 'The invisible watermarking is what sold me. I had a subscriber leaking to Telegram for months and could never prove who it was. Privly traced it back to them within a week.',
    platform: 'Fansly creator',
  },
  {
    author: 'Kayla B.',
    rating: 5,
    reviewBody: 'I was paying a "protection service" $300/month that basically did nothing. Switched to Privly at $49 and got more takedowns in the first week than I got in three months with them.',
    platform: 'OnlyFans & Fansly creator',
  },
  {
    author: 'Sophie L.',
    rating: 5,
    reviewBody: 'What I appreciate most is the monitoring. I get notified when new leaks appear instead of finding out weeks later from a fan DM. It just runs in the background and handles everything.',
    platform: 'OnlyFans creator',
  },
  {
    author: 'Ava M.',
    rating: 4,
    reviewBody: 'Took about 5 days to get content removed from one of the bigger sites, but everything else came down fast. The dashboard makes it easy to see exactly what is happening with each takedown.',
    platform: 'Fansly creator',
  },
  {
    author: 'Lauren K.',
    rating: 5,
    reviewBody: 'I was mass-leaked on a forum and panicking. Signed up for the trial, uploaded my content to the vault, and Privly found over 40 links across Reddit, Telegram, and Erome. Most were removed within a week.',
    platform: 'OnlyFans creator',
  },
]

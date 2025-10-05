import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/footer'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { generateArticleSchema } from '@/lib/seo-advanced'
import {
  Shield,
  Calendar,
  Clock,
  User,
  ChevronRight,
  ArrowLeft,
  Share2,
  BookOpen,
  CheckCircle
} from 'lucide-react'

// Simplified article content
const articles = {
  'how-data-brokers-sell-your-information': {
    title: 'How Data Brokers Sell Your Personal Information (And How to Stop Them)',
    author: 'Privacy Team',
    date: '2024-01-15',
    dateModified: '2024-01-15',
    readTime: '8 min read',
    category: 'Data Privacy',
    image: '/blog/data-brokers.jpg',
    keywords: ['data brokers', 'privacy protection', 'remove personal data', 'data privacy'],
    excerpt: 'Data brokers collect and sell billions of personal records annually. Learn how this $200 billion industry works and discover proven methods to remove your information from their databases.',
    content: [
      {
        type: 'paragraph',
        content: 'Every day, companies you\'ve never heard of are collecting, analyzing, and selling detailed profiles about you. These data brokers operate in the shadows of the internet, building massive databases that contain everything from your home address to your shopping habits.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The $200 Billion Data Broker Industry'
      },
      {
        type: 'paragraph',
        content: 'Data brokerage has grown into a massive industry worth over $200 billion annually. Companies like Acxiom, Epsilon, and CoreLogic have detailed profiles on nearly every American adult, containing thousands of data points per person.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'What Information Do They Collect?'
      },
      {
        type: 'list',
        items: [
          'Personal Details: Name, age, gender, addresses (current and previous)',
          'Financial Information: Income estimates, property ownership, credit scores',
          'Family & Relationships: Marital status, children, relatives',
          'Online Behavior: Shopping habits, website visits, social media activity',
          'Health & Lifestyle: Medical conditions, fitness habits, dietary preferences'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'How Data Brokers Get Your Information'
      },
      {
        type: 'paragraph',
        content: 'Data brokers use sophisticated methods to gather information from countless sources:'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Public Records'
      },
      {
        type: 'paragraph',
        content: 'Government databases containing voter registrations, property records, court documents, and professional licenses are often publicly accessible. Data brokers systematically scrape these records.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'The Hidden Dangers',
        content: 'Identity thieves use broker data to answer security questions, scammers craft personalized phishing attacks, stalkers track down victims\' new addresses, and companies use discriminatory pricing based on your profile.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'How to Remove Your Information'
      },
      {
        type: 'paragraph',
        content: 'Removing your data from broker sites is possible but time-consuming. Here\'s the process:'
      },
      {
        type: 'list',
        items: [
          'Identify major data brokers like Spokeo, Whitepages, BeenVerified',
          'Submit opt-out requests following each site\'s removal process',
          'Monitor for re-listing as data often reappears within months',
          'Consider automated services for continuous protection'
        ]
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Pro Tip',
        content: 'Manual removal from 500+ data brokers can take over 100 hours. Privly Me automates this entire process, continuously monitoring and removing your data with a 94.7% success rate.'
      }
    ],
    relatedArticles: ['dark-web-monitoring-explained', 'family-scam-protection-guide']
  },
  '10-signs-youre-being-scammed-online': {
    title: '10 Warning Signs You\'re Being Scammed Online (2024 Guide)',
    author: 'Security Team',
    date: '2024-01-12',
    dateModified: '2024-01-12',
    readTime: '6 min read',
    category: 'Scam Protection',
    image: '/blog/scam-warning-signs.jpg',
    keywords: ['online scams', 'scam detection', 'fraud prevention', 'cybersecurity'],
    excerpt: 'Scammers steal billions each year using sophisticated tactics. Learn the red flags that expose online scams and protect yourself with our expert-backed detection methods.',
    content: [
      {
        type: 'paragraph',
        content: 'Online scams have become increasingly sophisticated, stealing over $10 billion from Americans in 2023 alone. Recognizing the warning signs can save you from becoming a victim.'
      },
      {
        type: 'heading',
        level: 2,
        content: '1. Urgent or High-Pressure Tactics'
      },
      {
        type: 'paragraph',
        content: 'Scammers create artificial urgency to prevent you from thinking clearly or seeking advice from others.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Red Flag Phrases',
        content: '"Act now or lose this opportunity forever!" • "Your account will be closed in 24 hours" • "Limited time offer - expires today" • "Call immediately to avoid legal action"'
      },
      {
        type: 'heading',
        level: 2,
        content: '2. Requests for Unusual Payment Methods'
      },
      {
        type: 'paragraph',
        content: 'Legitimate businesses don\'t ask for payment via gift cards, wire transfers, or cryptocurrency for normal transactions.'
      },
      {
        type: 'list',
        items: [
          'Gift cards (iTunes, Google Play, Amazon)',
          'Wire transfers or money orders',
          'Cryptocurrency payments',
          'Prepaid debit cards',
          'Cash through mail'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'How to Protect Yourself'
      },
      {
        type: 'list',
        items: [
          'Verify independently - call official numbers, not provided contact info',
          'Never give personal information to unsolicited contacts',
          'Use trusted payment methods with fraud protection',
          'Trust your instincts - if it feels wrong, it probably is',
          'Report suspected scams to authorities'
        ]
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Instant Scam Verification',
        content: 'Privly Me\'s Scam Watch service provides instant verification of suspicious messages. Forward any questionable text, email, or screenshot via WhatsApp and get a verified response in under 60 seconds.'
      }
    ],
    relatedArticles: ['family-scam-protection-guide', 'how-data-brokers-sell-your-information']
  }
}

type ArticleContent = {
  type: 'paragraph' | 'heading' | 'list' | 'callout'
  level?: number
  content?: string
  items?: string[]
  variant?: 'warning' | 'info' | 'success'
  title?: string
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return {
      title: 'Post Not Found | Privly Blog',
    }
  }

  return {
    title: `${article.title} | Privly Blog`,
    description: article.excerpt,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.dateModified,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

function renderContent(content: ArticleContent[]) {
  return content.map((item, index) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-gray-600 mb-6 leading-relaxed">
            {item.content}
          </p>
        )
      
      case 'heading':
        const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements
        const headingClasses = item.level === 2 
          ? "text-2xl font-bold text-gray-900 mt-8 mb-4"
          : "text-xl font-semibold text-gray-900 mt-6 mb-3"
        
        return (
          <HeadingTag key={index} className={headingClasses}>
            {item.content}
          </HeadingTag>
        )
      
      case 'list':
        return (
          <ul key={index} className="space-y-2 mb-6 ml-4">
            {item.items?.map((listItem, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span className="text-gray-600">{listItem}</span>
              </li>
            ))}
          </ul>
        )
      
      case 'callout':
        const calloutClasses = {
          warning: 'bg-red-50 border-l-4 border-red-500',
          info: 'bg-blue-50 border-l-4 border-blue-500',
          success: 'bg-green-50 border-l-4 border-green-500'
        }
        const titleClasses = {
          warning: 'text-red-800',
          info: 'text-blue-800',
          success: 'text-green-800'
        }
        const contentClasses = {
          warning: 'text-red-700',
          info: 'text-blue-700',
          success: 'text-green-700'
        }
        
        return (
          <div key={index} className={`${calloutClasses[item.variant || 'info']} p-6 my-6 rounded-r-lg`}>
            {item.title && (
              <h4 className={`${titleClasses[item.variant || 'info']} font-semibold mb-2`}>
                {item.title}
              </h4>
            )}
            <p className={contentClasses[item.variant || 'info']}>
              {item.content}
            </p>
          </div>
        )
      
      default:
        return null
    }
  })
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  // Generate article schema
  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.dateModified,
    author: article.author,
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Privly Me</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              <Link href="/scam-watch" className="text-gray-300 hover:text-purple-400 transition-colors">Scam Watch</Link>
              <Link href="/personal" className="text-gray-300 hover:text-purple-400 transition-colors">Personal</Link>
              <Link href="/professional" className="text-gray-300 hover:text-purple-400 transition-colors">Professional</Link>
              <Link href="/blog" className="text-purple-400 font-medium">Blog</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signin`}>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">Sign In</Button>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Blog', href: '/blog' },
              { name: article.category, href: `/blog/category/${article.category.toLowerCase().replace(' ', '-')}` },
              { name: article.title, href: `/blog/${params.slug}` },
            ]}
          />

          <Badge className="mb-4 mt-6">{article.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </div>
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Protect your privacy today</p>
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stop Data Brokers from Selling Your Information
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Privly Me automatically removes your personal data from 500+ broker sites and 
            continuously monitors for new exposures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Protecting Your Privacy
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/personal">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              94.7% removal success rate
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              500+ sites monitored
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {article.relatedArticles.map(slug => {
                const related = articles[slug as keyof typeof articles]
                if (!related) return null
                
                return (
                  <Card key={slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">{related.category}</Badge>
                      <h4 className="text-lg font-semibold mb-2">
                        <Link href={`/blog/${slug}`} className="hover:text-purple-600 transition-colors">
                          {related.title}
                        </Link>
                      </h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {related.readTime}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
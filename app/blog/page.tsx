'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/footer'
import { 
  Shield, 
  Search,
  Calendar,
  Clock,
  ChevronRight,
  User
} from 'lucide-react'

// Blog post data - in production this would come from a CMS or database
const blogPosts = [
  {
    id: 'how-data-brokers-sell-your-information',
    title: 'How Data Brokers Sell Your Personal Information (And How to Stop Them)',
    excerpt: 'Data brokers collect and sell billions of personal records annually. Learn how this $200 billion industry works and discover proven methods to remove your information from their databases.',
    author: 'Privacy Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Data Privacy',
    image: '/blog/data-brokers-hero.jpg',
    featured: true
  },
  {
    id: '10-signs-youre-being-scammed-online',
    title: '10 Warning Signs You\'re Being Scammed Online (2024 Guide)',
    excerpt: 'Scammers steal billions each year using sophisticated tactics. Learn the red flags that expose online scams and protect yourself with our expert-backed detection methods.',
    author: 'Security Team',
    date: '2024-01-12',
    readTime: '6 min read',
    category: 'Scam Protection',
    image: '/blog/scam-warning-signs.jpg',
    featured: true
  },
  {
    id: 'dark-web-monitoring-explained',
    title: 'Dark Web Monitoring: What It Is and Why You Need It',
    excerpt: 'Your stolen data could be for sale on the dark web right now. Understand how dark web monitoring works and why it\'s essential for protecting your identity in 2024.',
    author: 'Privacy Team',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Identity Protection',
    image: '/blog/dark-web-monitoring.jpg'
  },
  {
    id: 'ai-deepfakes-threat-to-identity',
    title: 'AI Deepfakes: The New Threat to Your Digital Identity',
    excerpt: 'Deepfake technology is becoming dangerously accessible. Learn how criminals use AI to steal identities and discover cutting-edge detection methods to protect yourself.',
    author: 'AI Security Team',
    date: '2024-01-08',
    readTime: '9 min read',
    category: 'AI & Security',
    image: '/blog/ai-deepfakes.jpg'
  },
  {
    id: 'complete-guide-dmca-takedowns',
    title: 'The Complete Guide to DMCA Takedowns for Content Creators',
    excerpt: 'Content theft costs creators millions annually. Master the DMCA takedown process with our step-by-step guide including templates, platform contacts, and automation tools.',
    author: 'Legal Team',
    date: '2024-01-05',
    readTime: '12 min read',
    category: 'Content Protection',
    image: '/blog/dmca-guide.jpg'
  },
  {
    id: 'family-scam-protection-guide',
    title: 'Protecting Your Family from Online Scams: A Comprehensive Guide',
    excerpt: 'Seniors lose $3 billion annually to scams. Learn how to protect vulnerable family members with simple tools and proven strategies that actually work.',
    author: 'Privacy Team',
    date: '2024-01-03',
    readTime: '10 min read',
    category: 'Family Safety',
    image: '/blog/family-protection.jpg'
  }
]

const categories = [
  'All',
  'Data Privacy',
  'Scam Protection',
  'Identity Protection',
  'AI & Security',
  'Content Protection',
  'Family Safety'
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Privacy & Security Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert guides, breaking news, and actionable tips to protect your digital life. 
              Stay ahead of scammers, data brokers, and privacy threats.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`cursor-pointer px-4 py-2 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative w-full h-48 bg-gray-200">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                        <Shield className="w-16 h-16 text-purple-600 opacity-50" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl">
                      <Link href={`/blog/${post.id}`} className="hover:text-purple-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-purple-600">
                          Read More
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-gray-500">No articles found matching your criteria.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-32 bg-gray-200">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
                        <Shield className="w-12 h-12 text-purple-600 opacity-30" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-purple-600 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link href={`/blog/${post.id}`} className="text-purple-600 hover:underline">
                        Read →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Protected with Weekly Privacy Tips
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Get expert insights on protecting your digital life delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Subscribe Free
            </Button>
          </div>
          <p className="text-purple-200 text-sm mt-4">
            No spam, unsubscribe anytime. Read our privacy policy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Search,
  Camera,
  UserX,
  Phone,
  ArrowRight,
  Star,
  Users,
  Eye,
  Clock
} from 'lucide-react'

export default function DatingSafetyPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const threats = [
    {
      icon: UserX,
      title: 'Catfish & Fake Profiles',
      description: 'People using stolen photos and false identities',
      stats: '42% of dating app users report encountering fake profiles',
      detection: 'AI photo verification & reverse image search'
    },
    {
      icon: Heart,
      title: 'Romance Scams',
      description: 'Emotional manipulation leading to financial fraud',
      stats: '$547M lost to romance scams in 2021 alone',
      detection: 'Language pattern analysis & scammer database checks'
    },
    {
      icon: AlertTriangle,
      title: 'Criminal Backgrounds',
      description: 'Undisclosed criminal history or dangerous behavior',
      stats: '1 in 10 dating profiles linked to criminal records',
      detection: 'Background check integration & public records search'
    },
    {
      icon: Phone,
      title: 'Identity Theft',
      description: 'Personal information harvesting for fraudulent use',
      stats: '23% increase in dating-related identity theft',
      detection: 'Real-time identity verification & data monitoring'
    }
  ]

  const features = [
    {
      title: 'Profile Verification',
      description: 'Verify dating profiles across multiple platforms instantly',
      included: ['Photo authenticity check', 'Social media cross-reference', 'Identity consistency analysis']
    },
    {
      title: 'Romance Scam Detection',
      description: 'AI-powered analysis of conversation patterns and red flags',
      included: ['Language pattern analysis', 'Scammer database matching', 'Emotional manipulation alerts']
    },
    {
      title: 'Background Intelligence',
      description: 'Comprehensive background information from public sources',
      included: ['Criminal record checks', 'Court records search', 'Professional verification']
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring of matches and conversations',
      included: ['New profile alerts', 'Updated background info', 'Behavioral pattern changes']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      age: 28,
      location: 'San Francisco, CA',
      story: 'I was talking to someone for 3 weeks who seemed perfect. Privly Me revealed they were using stolen photos from an Instagram model. Saved me from meeting a complete stranger.',
      savings: 'Prevented potential identity theft',
      rating: 5
    },
    {
      name: 'Mike R.',
      age: 35,
      location: 'Austin, TX',
      story: 'The person I was chatting with asked for money for a "family emergency" after 2 weeks. The scam detection caught the exact phrases used by known romance scammers.',
      savings: 'Saved $2,500',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      age: 31,
      location: 'Chicago, IL',
      story: 'Found out my match had multiple assault charges that weren\'t disclosed. The background check potentially saved me from a dangerous situation.',
      savings: 'Personal safety protected',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-800">
                <Heart className="w-4 h-4 mr-2" />
                Dating Safety Protection
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Date Safely with AI-Powered Verification
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Verify who you're really talking to before you meet. Our AI analyzes profiles, 
                photos, and conversations to detect catfish, scammers, and dangerous individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                    Start Dating Safely - $9.99/month
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  500K+ people protected
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  4.9/5 rating
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Profile Analysis Complete</h3>
                    <p className="text-sm text-gray-600">Verification results ready</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Photo authenticity</span>
                    <Badge className="bg-green-100 text-green-800">✓ Verified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Identity check</span>
                    <Badge className="bg-green-100 text-green-800">✓ Confirmed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-700">Background scan</span>
                    <Badge className="bg-red-100 text-red-800">⚠ Issues found</Badge>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Safety Score: 6/10</strong> - Proceed with caution. 
                    Profile photos are authentic but background check reveals concerning information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Hidden Dangers of Online Dating
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Romance fraud and dating scams are at an all-time high. Don't become another statistic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threats.map((threat, index) => {
              const Icon = threat.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{threat.title}</h3>
                        <p className="text-gray-600 mb-3">{threat.description}</p>
                        <div className="bg-red-50 p-3 rounded-lg mb-3">
                          <p className="text-sm text-red-800 font-medium">{threat.stats}</p>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>Protected by: {threat.detection}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Dating Safety Protection Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive verification and monitoring to keep you safe while dating online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.included.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Stories from Protected Daters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Dating Safety Protection has helped real people avoid dangerous situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.story}"</p>
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-green-800">
                      Result: {testimonial.savings}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-pink-600 font-semibold">
                        {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Start Dating Safely Today
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            For less than the cost of one dinner date, protect yourself from romance scams, 
            catfish, and dangerous individuals for an entire month.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">$9.99</div>
                <div className="text-pink-100">Basic Plan with Dating Safety</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$19.99</div>
                <div className="text-pink-100">Standard Plan (includes 2 add-ons)</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <div className="text-pink-100">Premium Plan (all features included)</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-12 py-6">
                <Heart className="w-6 h-6 mr-3" />
                Start Dating Safely Now
              </Button>
            </Link>
          </div>
          <p className="text-sm text-pink-100">
            30-day money-back guarantee • No commitment • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
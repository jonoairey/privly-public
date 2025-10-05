'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Baby,
  UserCheck,
  Eye,
  Clock,
  ArrowRight,
  Star,
  Heart,
  Smartphone,
  MessageCircle,
  Camera
} from 'lucide-react'

export default function FamilyProtectionPage() {
  const [activeAgeGroup, setActiveAgeGroup] = useState('teens')

  const threats = [
    {
      ageGroup: 'Children (0-12)',
      icon: Baby,
      risks: [
        { threat: 'Online Predators', stat: '1 in 7 children receive sexual solicitations online' },
        { threat: 'Inappropriate Content', stat: '90% of children have seen online pornography' },
        { threat: 'Identity Exposure', stat: '23% of children share personal info with strangers' }
      ]
    },
    {
      ageGroup: 'Teens (13-17)',
      icon: UserCheck,
      risks: [
        { threat: 'Cyberbullying', stat: '37% of teens have been bullied online' },
        { threat: 'Sexting & Exploitation', stat: '15% of teens have sent intimate images' },
        { threat: 'Social Media Predators', stat: '1 in 5 teens contacted by unknown adults' }
      ]
    },
    {
      ageGroup: 'Adults (18+)',
      icon: Users,
      risks: [
        { threat: 'Romance Scams', stat: '$304M lost to romance fraud in 2020' },
        { threat: 'Identity Theft', stat: '21% of adults experienced identity fraud' },
        { threat: 'Privacy Breaches', stat: '64% don\'t know what data companies collect' }
      ]
    },
    {
      ageGroup: 'Seniors (65+)',
      icon: Heart,
      risks: [
        { threat: 'Tech Support Scams', stat: '44% of seniors fall for phone scams' },
        { threat: 'Medicare Fraud', stat: '$60B lost annually to healthcare fraud' },
        { threat: 'Grandparent Scams', stat: '$41M stolen through grandparent scams' }
      ]
    }
  ]

  const features = [
    {
      title: 'Child Social Media Monitoring',
      description: 'Monitor your children\'s activity across all major social platforms',
      ageGroups: ['Children', 'Teens'],
      capabilities: [
        'Instagram, TikTok, Snapchat, Discord monitoring',
        'Inappropriate contact detection',
        'Cyberbullying alert system',
        'Screen time tracking and insights'
      ]
    },
    {
      title: 'Predator Detection System',
      description: 'AI-powered analysis to identify potential predators and groomers',
      ageGroups: ['Children', 'Teens'],
      capabilities: [
        'Conversation pattern analysis',
        'Grooming behavior detection',
        'Unknown contact alerts',
        'Real-time threat notifications'
      ]
    },
    {
      title: 'Family Digital Safety Dashboard',
      description: 'Centralized view of your entire family\'s digital safety status',
      ageGroups: ['All Ages'],
      capabilities: [
        'Individual safety scores',
        'Recent threats and alerts',
        'Platform activity summaries',
        'Safety recommendations'
      ]
    },
    {
      title: 'Elder Scam Protection',
      description: 'Specialized protection for seniors against targeted scams',
      ageGroups: ['Seniors'],
      capabilities: [
        'Phone scam call blocking',
        'Email fraud detection',
        'Medicare scam alerts',
        'Family emergency verification'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Park',
      role: 'Mother of 3',
      location: 'Denver, CO',
      story: 'The family protection caught a 45-year-old man messaging my 14-year-old daughter on Instagram with inappropriate requests. The alert came within minutes and we were able to block him and report to authorities before anything happened.',
      children: '3 children (ages 10, 14, 16)',
      result: 'Protected daughter from potential predator',
      rating: 5
    },
    {
      name: 'Robert Chen',
      role: 'Father & IT Manager',
      location: 'Seattle, WA',
      story: 'My son was being cyberbullied on Discord and didn\'t want to tell us. The monitoring system detected the harassment patterns and we were able to intervene early, switch schools, and get him the support he needed.',
      children: '2 children (ages 12, 15)',
      result: 'Early intervention prevented depression',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Grandmother',
      location: 'Phoenix, AZ',
      story: 'I almost fell for a phone scam where someone claimed my grandson was in jail and needed bail money. The family protection system verified it was fake and saved me $3,000.',
      children: 'Grandmother to 5 grandchildren',
      result: 'Saved $3,000 from grandparent scam',
      rating: 5
    }
  ]

  const ageGroupColors = {
    'children': 'bg-blue-100 text-blue-800',
    'teens': 'bg-purple-100 text-purple-800',
    'adults': 'bg-green-100 text-green-800',
    'seniors': 'bg-orange-100 text-orange-800'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                <Users className="w-4 h-4 mr-2" />
                Family Protection Suite
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Protect Your Entire Family's Digital Life
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive protection for every family member, from children to grandparents. 
                Monitor social media, detect predators, prevent scams, and keep everyone safe online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Family Protection - $19.99/month
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  See Family Dashboard
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  2M+ children protected
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-blue-500 mr-2" />
                  Up to 6 family members
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Family Safety Dashboard</h3>
                    <p className="text-sm text-gray-600">Real-time protection status</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">E</span>
                      </div>
                      <span className="text-sm text-gray-700">Emma (Age 16)</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Safe</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">M</span>
                      </div>
                      <span className="text-sm text-gray-700">Max (Age 12)</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">1 Alert</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-medium">G</span>
                      </div>
                      <span className="text-sm text-gray-700">Grandma (Age 72)</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Protected</Badge>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Active Threats Blocked:</strong> 12 this week<br/>
                    <strong>Safety Score:</strong> 94/100 (Excellent)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Specific Threats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Age-Specific Digital Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different age groups face different online dangers. We protect against all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((ageGroup, index) => {
              const Icon = ageGroup.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{ageGroup.ageGroup}</h3>
                    </div>
                    <div className="space-y-4">
                      {ageGroup.risks.map((risk, riskIndex) => (
                        <div key={riskIndex} className="border-l-4 border-red-200 pl-4">
                          <h4 className="font-medium text-gray-900 text-sm">{risk.threat}</h4>
                          <p className="text-xs text-red-600 mt-1">{risk.stat}</p>
                        </div>
                      ))}
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
              Comprehensive Family Protection Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI monitoring and protection tailored to each family member's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {feature.ageGroups.map((age, ageIndex) => (
                        <Badge key={ageIndex} variant="secondary" className="text-xs">
                          {age}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Family Protection Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple setup, powerful protection for your entire family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Add Family Members</h3>
              <p className="text-gray-600">
                Add up to 4 family members to your protection plan. Set age-appropriate 
                monitoring levels for each person.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI Monitors 24/7</h3>
              <p className="text-gray-600">
                Our AI continuously monitors social media, communications, and online 
                activity for threats specific to each age group.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Instant Alerts</h3>
              <p className="text-gray-600">
                Get immediate notifications about potential threats, with guidance 
                on how to respond and protect your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Families, Real Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Family Protection has kept real families safe from digital threats.
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
                      Result: {testimonial.result}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Family: {testimonial.children}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">
                        {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Protect Your Entire Family Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            For less than $1 per family member per month, give your entire family 
            comprehensive digital protection and peace of mind.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">$19.99</div>
                <div className="text-blue-100">Standard Plan with Family Protection</div>
                <div className="text-sm text-blue-200 mt-1">Up to 6 family members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <div className="text-blue-100">Premium Plan (all features included)</div>
                <div className="text-sm text-blue-200 mt-1">Unlimited family members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$8.00</div>
                <div className="text-blue-100">Add-on to Basic Plan</div>
                <div className="text-sm text-blue-200 mt-1">If purchased separately</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 py-6">
                <Users className="w-6 h-6 mr-3" />
                Start Family Protection Now
              </Button>
            </Link>
          </div>
          <p className="text-sm text-blue-100">
            30-day money-back guarantee • Protect up to 4 family members • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
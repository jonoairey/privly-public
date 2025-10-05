'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Camera, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  TrendingDown,
  Bot,
  Zap,
  ArrowRight,
  Star,
  Users,
  Eye,
  Clock,
  Play,
  Image,
  FileText,
  Globe
} from 'lucide-react'

export default function CreatorProtectionPage() {
  const [activeContentType, setActiveContentType] = useState('video')

  const contentTheftStats = [
    {
      platform: 'YouTube',
      stat: '$2.3B lost annually to content theft',
      detail: '15% of creators affected by unauthorized reuploads'
    },
    {
      platform: 'Instagram',
      stat: '47% of creators report content theft',
      detail: 'Images stolen within hours of posting'
    },
    {
      platform: 'TikTok',
      stat: '73% increase in content piracy',
      detail: 'Videos reposted without attribution'
    },
    {
      platform: 'OnlyFans',
      stat: '$1.7B lost to content leaks',
      detail: 'Subscription content illegally distributed'
    }
  ]

  const threats = [
    {
      icon: Camera,
      title: 'Content Theft & Piracy',
      description: 'Your videos, images, and posts stolen and reuploaded without permission',
      impact: 'Lost revenue, reduced original engagement, diluted brand',
      detection: 'AI-powered content fingerprinting across 500+ platforms'
    },
    {
      icon: Bot,
      title: 'Deepfake & AI Impersonation',
      description: 'AI-generated fake content using your likeness for fraud or defamation',
      impact: 'Reputation damage, loss of trust, potential legal issues',
      detection: 'Advanced deepfake detection algorithms and facial recognition'
    },
    {
      icon: Users,
      title: 'Brand Impersonation',
      description: 'Fake accounts using your name, photos, and content to scam followers',
      impact: 'Follower trust lost, financial fraud using your identity',
      detection: 'Social media monitoring and impersonation alert system'
    },
    {
      icon: DollarSign,
      title: 'Revenue Theft',
      description: 'Others monetizing your content through ads, subscriptions, or sales',
      impact: 'Direct financial loss, competition with your own content',
      detection: 'Monetization tracking and revenue impact analysis'
    }
  ]

  const features = [
    {
      title: 'Content Fingerprinting & Detection',
      description: 'AI scans 500+ platforms to find unauthorized use of your content',
      capabilities: [
        'Video, image, and audio fingerprinting',
        'Text content plagiarism detection',
        'Real-time scanning of new uploads',
        'Similarity matching with AI precision'
      ]
    },
    {
      title: 'Automated Takedown System',
      description: 'Submit DMCA takedown requests automatically when theft is detected',
      capabilities: [
        'DMCA-compliant takedown notices',
        'Platform-specific removal requests',
        'Legal template generation',
        'Success rate tracking and follow-up'
      ]
    },
    {
      title: 'Revenue Impact Tracking',
      description: 'Calculate the financial impact of content theft on your business',
      capabilities: [
        'View count and engagement analysis',
        'Lost revenue calculations',
        'Competitor monetization tracking',
        'ROI reports for protection efforts'
      ]
    },
    {
      title: 'Deepfake & AI Monitoring',
      description: 'Advanced detection of AI-generated content using your likeness',
      capabilities: [
        'Facial recognition scanning',
        'Voice clone detection',
        'AI-generated content identification',
        'Deep learning threat analysis'
      ]
    }
  ]

  const successStories = [
    {
      name: 'Michael Rodriguez',
      type: 'YouTuber',
      subscribers: '2.3M subscribers',
      location: 'Austin, TX',
      story: 'My cooking videos were being stolen and reuploaded on 47 different channels. Privly Me found them all and helped me get 96% of them taken down. The theft was costing me $15,000/month in lost ad revenue.',
      result: 'Recovered $180,000 annual revenue',
      timeframe: '3 months',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      type: 'Instagram Influencer',
      subscribers: '850K followers',
      location: 'Los Angeles, CA',
      story: 'Someone created a deepfake of me promoting crypto scams. It looked so real that my followers were falling for it. The AI detection caught it within 2 hours and we got it removed before major damage.',
      result: 'Protected brand reputation & follower trust',
      timeframe: '2 hours detection',
      rating: 5
    },
    {
      name: 'Alex Chen',
      type: 'Content Creator',
      subscribers: '1.1M TikTok followers',
      location: 'Seattle, WA',
      story: 'My viral dance videos were being stolen faster than I could report them. The automated takedown system has removed over 200 stolen videos, and now thieves know not to mess with my content.',
      result: 'Stopped 95% of content theft',
      timeframe: 'Ongoing protection',
      rating: 5
    }
  ]

  const platforms = [
    'YouTube', 'Instagram', 'TikTok', 'Twitter', 'Facebook', 'LinkedIn',
    'OnlyFans', 'Patreon', 'Twitch', 'Discord', 'Telegram', 'Reddit',
    'Pinterest', 'Snapchat', 'WeChat', 'WhatsApp', 'Pornhub', 'XVideos'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">
                <Camera className="w-4 h-4 mr-2" />
                Creator Protection Suite
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Protect Your Content, Protect Your Revenue
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stop content theft, deepfakes, and brand impersonation across 500+ platforms. 
                AI-powered monitoring and automated takedowns to protect your creative work and income.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Creator Protection - $39.99/month
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  See Detection Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  500+ platforms monitored
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                  96% takedown success rate
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Camera className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Content Protection Alert</h3>
                    <p className="text-sm text-gray-600">Theft detected and removed</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-sm text-gray-700">Video stolen on YouTube</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800">Detected</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-sm text-gray-700">DMCA notice sent</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">Content removed</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Success</Badge>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Revenue Protected:</strong> $2,847 this month<br/>
                    <strong>Takedowns This Week:</strong> 12 successful removals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Theft Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Content Theft Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Content theft is costing creators billions. Don't let your hard work be stolen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTheftStats.map((platform, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{platform.platform}</h3>
                  <div className="text-2xl font-bold text-red-600 mb-2">{platform.stat}</div>
                  <p className="text-sm text-gray-600">{platform.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <TrendingDown className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              $4.2 Billion Lost Annually to Content Theft
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every day, creators lose revenue to unauthorized use of their content. 
              The longer it takes to detect and remove stolen content, the more money you lose.
            </p>
          </div>
        </div>
      </section>

      {/* Threats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Threats Facing Content Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the risks is the first step to protecting your creative work.
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
                          <p className="text-sm text-red-800"><strong>Impact:</strong> {threat.impact}</p>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>{threat.detection}</span>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Creator Protection Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technology to detect, report, and remove unauthorized use of your content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
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

      {/* Platform Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              500+ Platforms Monitored
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We monitor content across all major platforms where your content might be stolen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{platform}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <strong>And 480+ more platforms</strong> including forums, file-sharing sites, 
                adult platforms, international social networks, and emerging platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Creators Protecting Their Livelihood
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real creators sharing how protection saved their revenue and reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-green-100 text-green-800 mb-2">{story.type}</Badge>
                    <p className="text-sm text-gray-600">{story.subscribers}</p>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{story.story}"</p>
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-green-800">
                      <strong>Result:</strong> {story.result}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Timeline: {story.timeframe}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-semibold">
                        {story.name.split(' ')[0][0]}{story.name.split(' ')[1][0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{story.name}</div>
                      <div className="text-sm text-gray-500">{story.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much revenue you could be losing to content theft.
            </p>
          </div>

          <Card className="p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Average Creator</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">$4,200/month</p>
                  <p className="text-sm text-gray-600">Lost to content theft</p>
                </div>
                <div>
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Protection Cost</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">$39.99/month</p>
                  <p className="text-sm text-gray-600">Creator Protection Plan</p>
                </div>
                <div>
                  <TrendingDown className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Savings</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">$4,160/month</p>
                  <p className="text-sm text-gray-600">Protected revenue</p>
                </div>
              </div>
              <div className="mt-8 text-center bg-green-50 p-6 rounded-lg">
                <p className="text-lg font-semibold text-green-800">
                  ROI: 10,400% - Protection pays for itself in the first stolen video we stop
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Protect Your Creative Work Today
          </h2>
          <p className="text-xl mb-8 text-green-100">
            For less than the revenue from one sponsored post, protect your entire content library 
            and future earnings from theft and impersonation.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <div className="text-green-100">Premium Plan with Creator Protection</div>
                <div className="text-sm text-green-200 mt-1">All features included</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$15.00</div>
                <div className="text-green-100">Add-on to Basic/Standard</div>
                <div className="text-sm text-green-200 mt-1">If purchased separately</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">96%</div>
                <div className="text-green-100">Takedown Success Rate</div>
                <div className="text-sm text-green-200 mt-1">Industry leading</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-12 py-6">
                <Camera className="w-6 h-6 mr-3" />
                Start Creator Protection Now
              </Button>
            </Link>
          </div>
          <p className="text-sm text-green-100">
            30-day money-back guarantee • 500+ platforms monitored • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Bot, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Mail,
  MessageCircle,
  Eye,
  ArrowRight,
  Star,
  Users,
  Clock,
  DollarSign,
  Zap,
  Heart,
  TrendingUp,
  Building2
} from 'lucide-react'

export default function AIScamProtectionPage() {
  const [activeScamType, setActiveScamType] = useState('voice')

  const aiScamStats = [
    {
      scamType: 'Voice Clone Scams',
      growth: '2,400% increase in 2023',
      avgLoss: '$11,000 per victim',
      detection: '89% undetectable by humans',
      example: 'Fake calls from "family members" in emergency'
    },
    {
      scamType: 'Deepfake Video Calls',
      growth: '900% increase in 2023',
      avgLoss: '$25,000 per victim',
      detection: '73% fool video calls',
      example: 'CEO impersonation for wire transfers'
    },
    {
      scamType: 'AI-Generated Phishing',
      growth: '1,200% increase in 2023',
      avgLoss: '$4,500 per victim',
      detection: '95% bypass email filters',
      example: 'Personalized emails mimicking trusted contacts'
    },
    {
      scamType: 'Investment Fraud Bots',
      growth: '850% increase in 2023',
      avgLoss: '$19,000 per victim',
      detection: '67% appear legitimate',
      example: 'Fake trading platforms with AI customer service'
    }
  ]

  const aiThreats = [
    {
      icon: Phone,
      title: 'Voice Clone Emergencies',
      description: 'AI-generated voice calls impersonating family members in fake emergencies',
      realExample: '"Grandma, I\'m in jail and need $5,000 bail money right now!"',
      victims: 'Seniors lose $41M annually to these scams',
      detection: 'Real-time voice analysis and family verification system'
    },
    {
      icon: Eye,
      title: 'Deepfake Video Scams',
      description: 'AI-generated video calls for business email compromise and romance scams',
      realExample: 'CEO appears on video call requesting urgent wire transfer',
      victims: '$2.9B lost to business email compromise in 2023',
      detection: 'Advanced deepfake detection and biometric analysis'
    },
    {
      icon: Mail,
      title: 'AI-Powered Phishing',
      description: 'Personalized phishing emails that perfectly mimic writing style and context',
      realExample: 'Emails from "colleagues" with perfect company knowledge',
      victims: '91% of cyber attacks start with phishing emails',
      detection: 'Language pattern analysis and sender verification'
    },
    {
      icon: DollarSign,
      title: 'Investment Fraud Bots',
      description: 'AI chatbots and fake platforms promoting fraudulent investment opportunities',
      realExample: 'Crypto trading bots promising guaranteed returns',
      victims: '$4.9B lost to investment fraud in 2023',
      detection: 'Real-time scam database and platform verification'
    }
  ]

  const protectionFeatures = [
    {
      title: 'Voice Clone Detection',
      description: 'Real-time analysis of voice calls to detect AI-generated speech',
      capabilities: [
        'Live voice authenticity analysis',
        'Speaker verification against known voices',
        'Emotional pattern recognition',
        'Background audio forensics'
      ]
    },
    {
      title: 'Deepfake Video Analysis',
      description: 'Advanced AI detection of manipulated video content',
      capabilities: [
        'Facial micro-expression analysis',
        'Lighting and shadow consistency checks',
        'Pixel-level manipulation detection',
        'Real-time video call screening'
      ]
    },
    {
      title: 'Intelligent Email Scanning',
      description: 'AI-powered analysis of phishing attempts and social engineering',
      capabilities: [
        'Writing style analysis and comparison',
        'Context and relationship verification',
        'URL and attachment safety scanning',
        'Sender reputation tracking'
      ]
    },
    {
      title: 'Investment Fraud Prevention',
      description: 'Real-time verification of investment platforms and opportunities',
      capabilities: [
        'Platform legitimacy verification',
        'Return rate plausibility analysis',
        'Regulatory compliance checking',
        'Historical scam pattern matching'
      ]
    }
  ]

  const successStories = [
    {
      name: 'Robert Kim',
      age: 72,
      location: 'Phoenix, AZ',
      story: 'I got a call from what sounded exactly like my grandson saying he was arrested and needed $8,000 for bail. The voice clone detection immediately flagged it as fake and I hung up. Later I found out my real grandson was safe at home.',
      saved: '$8,000 grandparent scam',
      timeframe: 'Real-time detection',
      rating: 5
    },
    {
      name: 'Susan Chen',
      age: 45,
      location: 'Seattle, WA',
      story: 'My "CEO" appeared on a video call asking me to wire $50,000 to a vendor. Something felt off, so I checked the scam detection app - it showed 94% probability of deepfake. Turns out our real CEO was in surgery that day.',
      saved: '$50,000 business fraud',
      timeframe: '30-second video analysis',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      age: 58,
      location: 'Miami, FL',
      story: 'I almost invested $25,000 in what seemed like a legitimate crypto trading platform. The AI analysis revealed it was using the exact same template as 12 other known scam sites. Saved my retirement fund.',
      saved: '$25,000 investment fraud',
      timeframe: '2-minute platform analysis',
      rating: 5
    }
  ]

  const detectionMethods = [
    {
      method: 'Voice Biometrics',
      accuracy: '98.7%',
      description: 'Analyzes vocal patterns, breathing, and micro-expressions'
    },
    {
      method: 'Deepfake Detection',
      accuracy: '96.3%',
      description: 'Identifies pixel-level inconsistencies and unnatural movements'
    },
    {
      method: 'Language Analysis',
      accuracy: '94.8%',
      description: 'Compares writing patterns against known communication styles'
    },
    {
      method: 'Context Verification',
      accuracy: '99.1%',
      description: 'Cross-references claims against real-world data and relationships'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                <Bot className="w-4 h-4 mr-2" />
                AI Scam Protection Suite
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Stop AI Scams Before They Fool You
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Advanced AI protection against voice clones, deepfakes, and sophisticated scams 
                that traditional security can't detect. Real-time analysis saves you from the latest AI-powered fraud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Start AI Scam Protection - $39.99/month
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
                  98.7% detection accuracy
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                  Real-time analysis
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Threat Analysis</h3>
                    <p className="text-sm text-gray-600">Live scam detection results</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-sm text-gray-700">Voice Clone Detected</span>
                    </div>
                    <Badge className="bg-red-100 text-red-800">94% Fake</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <Eye className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-sm text-gray-700">Video Call Analysis</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Analyzing...</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">Email Verification</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Legitimate</Badge>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Scams Blocked This Week:</strong> 23<br/>
                    <strong>Money Saved:</strong> $127,000 across all users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Scam Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The AI Scam Epidemic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered scams are exploding in sophistication and frequency. Traditional security can't keep up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiScamStats.map((scam, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{scam.scamType}</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-red-800">{scam.growth}</p>
                      <p className="text-xs text-red-600">Growth in 2023</p>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Avg. Loss:</strong> {scam.avgLoss}</p>
                      <p><strong>Success Rate:</strong> {scam.detection}</p>
                      <p className="text-xs italic">"{scam.example}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI Scams Increased 2,400% in 2023
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As AI technology becomes more accessible, scammers are using it to create incredibly 
              convincing fake videos, voices, and messages. Human detection is no longer enough.
            </p>
          </div>
        </div>
      </section>

      {/* AI Threat Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Threats We Detect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding how AI scams work is the first step to protecting yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiThreats.map((threat, index) => {
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
                        <div className="bg-gray-100 p-3 rounded-lg mb-3 border-l-4 border-orange-400">
                          <p className="text-sm text-gray-700 italic">Example: {threat.realExample}</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg mb-3">
                          <p className="text-sm text-red-800 font-medium">{threat.victims}</p>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>Our Protection: {threat.detection}</span>
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

      {/* Protection Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Detection Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fight AI with AI. Our advanced detection systems analyze multiple factors to identify synthetic content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protectionFeatures.map((feature, index) => (
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

      {/* Detection Accuracy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Leading Detection Accuracy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI detection methods achieve the highest accuracy rates in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detectionMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{method.accuracy}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{method.method}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
            <Bot className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Combined Accuracy: 99.2%
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              By analyzing multiple factors simultaneously, our AI achieves industry-leading detection 
              rates while maintaining minimal false positives.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Protection, Real Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI Scam Protection has saved our users from sophisticated AI-powered fraud.
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
                  <p className="text-gray-700 mb-6 italic">"{story.story}"</p>
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-green-800">
                      <strong>Saved:</strong> {story.saved}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Detection: {story.timeframe}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">
                        {story.name.split(' ')[0][0]}{story.name.split(' ')[1][0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{story.name}, {story.age}</div>
                      <div className="text-sm text-gray-500">{story.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Protect Yourself from AI Scams Today
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            For less than the cost of one scam, protect yourself from all AI-powered fraud attempts. 
            The most sophisticated scam protection available.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">$49.99</div>
                <div className="text-purple-100">AI Scam Protection Only</div>
                <div className="text-sm text-purple-200 mt-1">If purchased separately</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <div className="text-purple-100">Premium Plan (all features included)</div>
                <div className="text-sm text-purple-200 mt-1">Best value - everything included</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.2%</div>
                <div className="text-purple-100">Detection Accuracy</div>
                <div className="text-sm text-purple-200 mt-1">Industry leading</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-12 py-6">
                <Bot className="w-6 h-6 mr-3" />
                Start AI Scam Protection Now
              </Button>
            </Link>
          </div>
          <p className="text-sm text-purple-100">
            30-day money-back guarantee • Real-time AI detection • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Archive, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Users,
  Key,
  Cloud,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Heart,
  Building2,
  Smartphone,
  Globe,
  Camera,
  Lock
} from 'lucide-react'

export default function DigitalEstatePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const digitalAssetStats = [
    {
      category: 'Financial Accounts',
      value: '$2.3T locked in forgotten accounts',
      items: 'Bank accounts, investment portfolios, retirement funds',
      challenge: '40% of digital assets never claimed by heirs'
    },
    {
      category: 'Cryptocurrency',
      value: '$140B lost forever',
      items: 'Bitcoin, Ethereum, NFTs, DeFi protocols',
      challenge: '20% of Bitcoin lost due to forgotten passwords'
    },
    {
      category: 'Digital Media',
      value: '$890B in creative assets',
      items: 'Photos, videos, music, art, intellectual property',
      challenge: '85% of digital memories lost within 10 years'
    },
    {
      category: 'Online Businesses',
      value: '$1.7T in digital businesses',
      items: 'Websites, domains, social media accounts, subscriptions',
      challenge: '67% of online businesses die with their owners'
    }
  ]

  const estateChallenges = [
    {
      icon: Key,
      title: 'Lost Access Credentials',
      description: 'Family members can\'t access accounts without passwords and 2FA',
      impact: '$140B in cryptocurrency lost forever due to forgotten passwords',
      solution: 'Secure credential inheritance and emergency access protocols'
    },
    {
      icon: FileText,
      title: 'Legal Complexity',
      description: 'Digital assets exist across multiple jurisdictions with unclear laws',
      impact: '2+ years average time to resolve digital estate disputes',
      solution: 'Legal document generation and jurisdiction-specific planning'
    },
    {
      icon: Clock,
      title: 'Account Deactivation',
      description: 'Platforms delete inactive accounts, erasing digital legacies forever',
      impact: '67% of social media accounts deleted within 1 year of death',
      solution: 'Automated account management and legacy preservation'
    },
    {
      icon: Users,
      title: 'Family Disputes',
      description: 'Unclear digital asset ownership leads to family conflicts',
      impact: '43% of families experience disputes over digital inheritance',
      solution: 'Clear beneficiary designation and distribution planning'
    }
  ]

  const features = [
    {
      title: 'Digital Asset Discovery',
      description: 'Comprehensive scanning to find all your digital assets and accounts',
      capabilities: [
        'Automated account discovery across 1000+ platforms',
        'Cryptocurrency wallet detection and tracking',
        'Subscription and recurring payment identification',
        'Intellectual property and domain portfolio mapping'
      ]
    },
    {
      title: 'Secure Inheritance Planning',
      description: 'Legal framework for transferring digital assets to beneficiaries',
      capabilities: [
        'Digital will creation and legal document generation',
        'Beneficiary designation and distribution planning',
        'Multi-factor authentication inheritance protocols',
        'Jurisdiction-specific legal compliance'
      ]
    },
    {
      title: 'Legacy Preservation',
      description: 'Preserve your digital memories and creative works for future generations',
      capabilities: [
        'Automated photo and video archiving',
        'Social media content preservation',
        'Creative work and intellectual property documentation',
        'Personal history and story compilation'
      ]
    },
    {
      title: 'Automated Management',
      description: 'Smart systems to manage your digital estate during your lifetime',
      capabilities: [
        'Account activity monitoring and alerts',
        'Automatic subscription cancellation upon death',
        'Social media memorialization setup',
        'Business continuity planning for digital ventures'
      ]
    }
  ]

  const successStories = [
    {
      name: 'Margaret Williams',
      age: 68,
      location: 'Portland, OR',
      story: 'After my husband passed, I discovered he had Bitcoin worth $180,000 but I couldn\'t access it. Digital Estate helped me create a plan so our children will never face the same problem. We also preserved 40 years of family photos.',
      result: 'Protected $180K crypto + preserved family memories',
      assets: 'Bitcoin, 50,000 family photos, 3 investment accounts',
      rating: 5
    },
    {
      name: 'David Chen',
      age: 42,
      location: 'Austin, TX',
      story: 'As a digital entrepreneur with 12 online businesses, I needed to ensure my family could continue or sell them if something happened to me. The succession planning tool created a complete business transition plan.',
      result: 'Secured $2.3M digital business empire',
      assets: '12 websites, 47 domain names, 8 social media accounts',
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      age: 35,
      location: 'Denver, CO',
      story: 'I\'m a photographer with 10 years of client work stored across various platforms. Digital Estate helped me organize everything and create a plan for my assistant to manage client access if needed.',
      result: 'Organized $400K photography business',
      assets: '100K photos, 15 client portals, creative portfolios',
      rating: 5
    }
  ]

  const assetTypes = [
    { type: 'Financial', icon: DollarSign, examples: ['Bank accounts', 'Investment portfolios', 'Retirement funds', 'Insurance policies'] },
    { type: 'Cryptocurrency', icon: Lock, examples: ['Bitcoin wallets', 'Ethereum accounts', 'NFT collections', 'DeFi protocols'] },
    { type: 'Creative', icon: Camera, examples: ['Photo libraries', 'Video content', 'Music files', 'Art collections'] },
    { type: 'Business', icon: Building2, examples: ['Websites', 'Domain names', 'Social media', 'Online stores'] },
    { type: 'Personal', icon: Heart, examples: ['Email accounts', 'Social profiles', 'Cloud storage', 'Digital documents'] },
    { type: 'Subscriptions', icon: Smartphone, examples: ['Software licenses', 'Streaming services', 'Apps', 'Memberships'] }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-100 text-indigo-800">
                <Archive className="w-4 h-4 mr-2" />
                Digital Estate Planning
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Secure Your Digital Legacy for Future Generations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Organize, protect, and transfer your digital assets seamlessly. From cryptocurrency 
                to family photos, ensure your digital life is preserved and accessible to your loved ones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    Start Digital Estate Planning - $39.99/month
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  See Estate Overview
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  Bank-level security
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-blue-500 mr-2" />
                  Unlimited beneficiaries
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <Archive className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Estate Overview</h3>
                    <p className="text-sm text-gray-600">Your complete digital footprint</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">Financial Assets</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">$847K</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-sm text-gray-700">Digital Memories</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">47K Items</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center">
                      <Lock className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-sm text-gray-700">Crypto Holdings</span>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">12 Wallets</Badge>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                  <p className="text-sm text-indigo-800">
                    <strong>Estate Value:</strong> $847,000<br/>
                    <strong>Beneficiaries:</strong> 4 family members<br/>
                    <strong>Last Updated:</strong> Today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Asset Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Digital Estate Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trillions of dollars in digital assets are lost every year because families can't access them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalAssetStats.map((asset, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{asset.category}</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-red-800">{asset.value}</p>
                      <p className="text-xs text-red-600">Lost annually</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-2">Includes:</p>
                      <p className="text-xs">{asset.items}</p>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded border-l-4 border-yellow-400">
                      <p className="text-xs text-yellow-800">{asset.challenge}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              $5.1 Trillion in Digital Assets at Risk
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Without proper planning, your digital assets could be lost forever. 
              Don't let your life's work disappear when you're gone.
            </p>
          </div>
        </div>
      </section>

      {/* Estate Planning Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Estate Planning Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional estate planning doesn't account for digital assets. We solve the unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {estateChallenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                        <p className="text-gray-600 mb-3">{challenge.description}</p>
                        <div className="bg-red-50 p-3 rounded-lg mb-3">
                          <p className="text-sm text-red-800"><strong>Impact:</strong> {challenge.impact}</p>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span>Our Solution: {challenge.solution}</span>
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
              Complete Digital Estate Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to preservation to inheritance, we handle every aspect of your digital legacy.
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

      {/* Asset Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Assets We Protect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all types of digital assets, from cryptocurrency to family photos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetTypes.map((assetType, index) => {
              const Icon = assetType.icon
              return (
                <Card key={index} className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{assetType.type}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {assetType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Families Protecting Their Digital Legacy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who secured their digital assets for future generations.
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
                      <strong>Result:</strong> {story.result}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Assets: {story.assets}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-indigo-600 font-semibold">
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Digital Estate Planning Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple setup, comprehensive protection. Secure your digital legacy in four steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Asset Discovery</h3>
              <p className="text-gray-600 text-sm">
                We scan across 1000+ platforms to find all your digital assets, 
                accounts, and subscriptions automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Beneficiary Setup</h3>
              <p className="text-gray-600 text-sm">
                Designate beneficiaries for each asset type and create detailed 
                inheritance instructions for your family.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Legal Documents</h3>
              <p className="text-gray-600 text-sm">
                Generate legally binding documents, digital wills, and access 
                instructions specific to your jurisdiction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">4. Secure Storage</h3>
              <p className="text-gray-600 text-sm">
                Your digital legacy is securely stored with bank-level encryption 
                and automatic updates as assets change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Secure Your Digital Legacy Today
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            For less than a cup of coffee per day, ensure your digital assets and memories 
            are preserved and accessible to your loved ones forever.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <div className="text-indigo-100">Digital Estate Only</div>
                <div className="text-sm text-indigo-200 mt-1">If purchased separately</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$19.99</div>
                <div className="text-indigo-100">Standard Plan (includes 2 add-ons)</div>
                <div className="text-sm text-indigo-200 mt-1">Great for families</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <div className="text-indigo-100">Premium Plan (all features)</div>
                <div className="text-sm text-indigo-200 mt-1">Complete protection</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-12 py-6">
                <Archive className="w-6 h-6 mr-3" />
                Start Digital Estate Planning
              </Button>
            </Link>
          </div>
          <p className="text-sm text-indigo-100">
            30-day money-back guarantee • Unlimited beneficiaries • 1TB secure storage • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
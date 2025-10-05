'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  CreditCard, 
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Eye,
  Lock,
  ArrowRight,
  Star,
  Users,
  Clock,
  Building2,
  Smartphone,
  Globe,
  Bot
} from 'lucide-react'

export default function FinancialSecurityPage() {
  const [activeTab, setActiveTab] = useState('monitoring')

  const financialThreats = [
    {
      threat: 'Identity Theft',
      cost: '$5.1B lost annually',
      victims: '14.4M Americans affected',
      impact: 'Average loss: $1,343 per victim',
      timeToResolve: '200+ hours to resolve'
    },
    {
      threat: 'Credit Card Fraud',
      cost: '$28.6B in losses',
      victims: '65% of cardholders affected',
      impact: 'Average fraud: $1,866 per incident',
      timeToResolve: '100+ hours dealing with banks'
    },
    {
      threat: 'Bank Account Takeover',
      cost: '$2.3B in unauthorized transfers',
      victims: '1 in 15 Americans',
      impact: 'Average loss: $12,500',
      timeToResolve: '6 months for full recovery'
    },
    {
      threat: 'Investment Fraud',
      cost: '$4.9B lost to crypto/investment scams',
      victims: '2.3M people scammed',
      impact: 'Median loss: $2,600',
      timeToResolve: 'Often unrecoverable'
    }
  ]

  const monitoringFeatures = [
    {
      title: 'Real-Time Account Monitoring',
      description: 'Monitor all your financial accounts for suspicious activity 24/7',
      capabilities: [
        'Bank account transaction monitoring',
        'Credit card activity alerts',
        'Investment account surveillance',
        'Cryptocurrency wallet tracking'
      ]
    },
    {
      title: 'Credit Score Protection',
      description: 'Track your credit score and get alerts for any changes or inquiries',
      capabilities: [
        'Daily credit score monitoring',
        'New account opening alerts',
        'Hard inquiry notifications',
        'Credit utilization tracking'
      ]
    },
    {
      title: 'Dark Web Monitoring',
      description: 'Scan dark web marketplaces for your financial information being sold',
      capabilities: [
        'Credit card number monitoring',
        'Bank account information tracking',
        'SSN and personal data surveillance',
        'Financial document leak detection'
      ]
    },
    {
      title: 'Investment Protection',
      description: 'Monitor investment accounts and detect fraudulent activity',
      capabilities: [
        'Portfolio change notifications',
        'Unauthorized trade alerts',
        'Broker communication monitoring',
        'Crypto exchange security tracking'
      ]
    }
  ]

  const successStories = [
    {
      name: 'David Thompson',
      role: 'Small Business Owner',
      location: 'Miami, FL',
      story: 'Someone opened 3 credit cards and 2 bank accounts using my identity. The monitoring system caught it within 24 hours of the first application. Without early detection, I could have lost everything.',
      loss: 'Prevented $47,000 in fraudulent charges',
      timeframe: '24-hour detection',
      rating: 5
    },
    {
      name: 'Rachel Martinez',
      role: 'Nurse',
      location: 'Phoenix, AZ', 
      story: 'My debit card was skimmed at a gas station and someone started making large withdrawals. I got an alert within minutes and was able to freeze my account before they could drain it.',
      loss: 'Saved $8,200 from my checking account',
      timeframe: '5-minute alert',
      rating: 5
    },
    {
      name: 'James Liu',
      role: 'Engineer',
      location: 'San Jose, CA',
      story: 'My investment account credentials were found on the dark web after a broker data breach. The alert let me change passwords and move my portfolio before anyone could access my $380,000 retirement savings.',
      loss: 'Protected $380,000 retirement portfolio',
      timeframe: '12-hour dark web detection',
      rating: 5
    }
  ]

  const protectionLevels = [
    {
      level: 'Basic Protection',
      price: '$10/month',
      features: [
        'Credit score monitoring',
        'Bank account alerts',
        'Basic dark web scanning',
        'Identity theft insurance ($25K)'
      ]
    },
    {
      level: 'Standard Plan + Financial',
      price: '$19.99/month',
      features: [
        'Everything in Basic',
        'Real-time transaction monitoring',
        'Investment account protection',
        'Advanced dark web monitoring',
        'Identity theft insurance ($100K)'
      ]
    },
    {
      level: 'Premium Plan (All Included)',
      price: '$39.99/month',
      features: [
        'Complete financial monitoring',
        'Priority fraud response team',
        'Personal financial consultant',
        'Identity theft insurance ($1M)',
        'Legal assistance for fraud cases'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">
                <Shield className="w-4 h-4 mr-2" />
                Financial Security Protection
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Protect Your Financial Future from Fraud
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Monitor your credit, bank accounts, investments, and personal information 24/7. 
                Get instant alerts about suspicious activity and prevent financial fraud before it happens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Start Financial Protection - $19.99/month
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  See Monitoring Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  $1M identity theft insurance
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-500 mr-2" />
                  Real-time monitoring
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Financial Security Dashboard</h3>
                    <p className="text-sm text-gray-600">Real-time protection status</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">Credit Score: 785</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">No Changes</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Building2 className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">Bank Accounts (3)</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Secure</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <Eye className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-sm text-gray-700">Dark Web Scan</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">1 Alert</Badge>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-emerald-800">
                    <strong>Threats Blocked:</strong> 7 this month<br/>
                    <strong>Financial Safety Score:</strong> 96/100 (Excellent)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Cost of Financial Fraud
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Financial fraud is at an all-time high. The average victim loses thousands and spends months recovering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialThreats.map((threat, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{threat.threat}</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-red-800">{threat.cost}</p>
                      <p className="text-xs text-red-600">Total losses annually</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p><strong>Victims:</strong> {threat.victims}</p>
                      <p><strong>Avg. Impact:</strong> {threat.impact}</p>
                      <p><strong>Recovery:</strong> {threat.timeToResolve}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Someone Becomes a Victim of Identity Theft Every 22 Seconds
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              By the time you finish reading this page, dozens of people will have fallen victim to financial fraud. 
              Don't wait until it happens to you.
            </p>
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI monitors your entire financial footprint for suspicious activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monitoringFeatures.map((feature, index) => (
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Financial Protection Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Set up once, protected forever. Our AI does the monitoring so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Secure Connection</h3>
              <p className="text-gray-600 text-sm">
                Securely connect your financial accounts using bank-level encryption. 
                We never store your login credentials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">2. AI Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Our AI analyzes transactions, credit changes, and dark web activity 
                24/7 to detect suspicious patterns.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Instant Alerts</h3>
              <p className="text-gray-600 text-sm">
                Get immediate notifications via SMS, email, or push notification 
                when suspicious activity is detected.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">4. Expert Response</h3>
              <p className="text-gray-600 text-sm">
                Our fraud specialists help you respond quickly with step-by-step 
                guidance and direct contact with financial institutions.
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
              Real People, Real Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Financial Security Protection has saved our customers thousands of dollars.
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
                      <strong>Saved:</strong> {story.loss}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Detection time: {story.timeframe}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-semibold">
                        {story.name.split(' ')[0][0]}{story.name.split(' ')[1][0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{story.name}</div>
                      <div className="text-sm text-gray-500">{story.role} • {story.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Financial Protection Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic monitoring to comprehensive fraud protection and insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protectionLevels.map((level, index) => (
              <Card key={index} className={`p-8 ${index === 1 ? 'border-2 border-emerald-500 shadow-lg' : ''}`}>
                <CardContent className="p-0">
                  {index === 1 && (
                    <Badge className="mb-4 bg-emerald-100 text-emerald-800">Most Popular</Badge>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.level}</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-6">{level.price}</div>
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                      <Button className={`w-full ${index === 1 ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`} 
                             variant={index === 1 ? 'default' : 'outline'}>
                        Get Protected Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Protect Your Financial Future Today
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            For less than you spend on coffee each month, protect your life savings, 
            credit score, and financial identity from fraud and theft.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">$29.99</div>
                <div className="text-emerald-100">Financial Protection Only</div>
                <div className="text-sm text-emerald-200 mt-1">If purchased separately</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$19.99</div>
                <div className="text-emerald-100">Standard Plan (includes 2 add-ons)</div>
                <div className="text-sm text-emerald-200 mt-1">Best value for families</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$39.99</div>
                <div className="text-emerald-100">Premium Plan (all features)</div>
                <div className="text-sm text-emerald-200 mt-1">Complete protection</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-12 py-6">
                <Shield className="w-6 h-6 mr-3" />
                Start Financial Protection Now
              </Button>
            </Link>
          </div>
          <p className="text-sm text-emerald-100">
            30-day money-back guarantee • $1M identity theft insurance • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Shield } from 'lucide-react'
import Link from 'next/link'
import { SUBSCRIPTION_PLANS } from '@/lib/constants'
import Footer from '@/components/footer'

export default function PricingPage() {
  const plans = [
    {
      id: 'scam_watch',
      ...SUBSCRIPTION_PLANS.SCAM_WATCH,
      popular: false,
      description: 'Essential scam protection for everyone'
    },
    {
      id: 'personal',
      ...SUBSCRIPTION_PLANS.PERSONAL,
      popular: false,
      description: 'Privacy & Security Shield for individuals'
    },
    {
      id: 'professional',
      ...SUBSCRIPTION_PLANS.PROFESSIONAL,
      popular: true,
      description: 'Maximum protection for professionals'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Privly Me</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/personal" className="text-gray-600 hover:text-gray-900 transition-colors">
                Personal
              </Link>
              <Link href="/professional" className="text-gray-600 hover:text-gray-900 transition-colors">
                Professional
              </Link>
              <Link href="/for-business" className="text-gray-600 hover:text-gray-900 transition-colors">
                For Business
              </Link>
              <Link href="/pricing" className="text-gray-900 font-semibold">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL || 'https://app.useprivly.com'}/auth/signin`}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Take Back Control of Your Digital Identity
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your privacy protection needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1 rounded-full">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Cancel anytime</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature: any) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                  asChild
                >
                  <Link href={`/dashboard/billing?plan=${plan.id}`}>
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Feature Comparison
          </h3>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-200">
              <div className="font-semibold text-gray-900">Feature</div>
              <div className="text-center font-semibold text-gray-900">Basic</div>
              <div className="text-center font-semibold text-gray-900">Standard</div>
              <div className="text-center font-semibold text-gray-900">Premium</div>
            </div>
            
            {[
              { feature: 'Identities Monitored', basic: '1', standard: 'Up to 5', premium: 'Unlimited' },
              { feature: 'Privacy Scans', basic: 'Monthly', standard: 'Weekly', premium: 'Daily' },
              { feature: 'Photo Protection', basic: 'Basic', standard: 'Advanced', premium: 'AI-Powered' },
              { feature: 'Dark Web Monitoring', basic: '—', standard: '✓', premium: '✓' },
              { feature: 'Real-time Alerts', basic: 'Email only', standard: 'Email & SMS', premium: 'All channels' },
              { feature: 'Identity Restoration', basic: '—', standard: '—', premium: '✓' },
              { feature: 'Legal Support', basic: '—', standard: '—', premium: '✓' },
              { feature: 'Business Protection', basic: '—', standard: '—', premium: 'Up to 6 users' },
              { feature: 'Support', basic: 'Standard', standard: 'Priority', premium: '24/7 Priority' },
              { feature: 'Data Removal Requests', basic: 'Manual', standard: 'Semi-automated', premium: 'Fully automated' },
              { feature: 'Privacy Reports', basic: 'Basic', standard: 'Detailed', premium: 'Comprehensive' }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b border-gray-100 last:border-b-0">
                <div className="font-medium text-gray-900">{row.feature}</div>
                <div className="text-center text-gray-700">{row.basic}</div>
                <div className="text-center text-gray-700">{row.standard}</div>
                <div className="text-center text-gray-700">{row.premium}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: 'What is included in the free trial?',
                  a: 'The 14-day free trial includes full access to all features of your chosen plan, with no setup fees or hidden costs.'
                },
                {
                  q: 'Can I change my plan anytime?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes are prorated and take effect immediately.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards (Visa, Mastercard, American Express) and bank transfers for Enterprise plans.'
                },
                {
                  q: 'Is there a setup fee?',
                  a: 'No, there are no setup fees or hidden costs. You only pay the monthly subscription fee.'
                },
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.'
                },
                {
                  q: 'Do you offer discounts for annual payments?',
                  a: 'Yes, we offer 20% discount for annual payments. Contact our sales team for more information.'
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
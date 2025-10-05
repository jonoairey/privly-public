'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Footer from '@/components/footer'
import { 
  Shield, 
  CheckCircle, 
  MessageCircle,
  MessageSquare,
  Mail,
  Phone,
  Users,
  Clock,
  Heart,
  AlertTriangle,
  Bot,
  Zap,
  ArrowRight,
  Star,
  Smartphone,
  Eye,
  ChevronRight,
  TrendingUp
} from 'lucide-react'

export default function ScamWatchPage() {
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
              <Link href="/scam-watch" className="text-purple-400 font-medium">Scam Watch</Link>
              <Link href="/personal" className="text-gray-300 hover:text-purple-400 transition-colors">Personal</Link>
              <Link href="/professional" className="text-gray-300 hover:text-purple-400 transition-colors">Professional</Link>
              <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</Link>
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
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-400 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              AI + Human Verification • 24/7 Protection
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Your Last Line of{' '}
              <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Defense Against Scams
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              While scammers use AI to steal <span className="text-white font-semibold">$12.5 billion yearly</span>, 
              we use superior AI + human experts to protect you. Forward any suspicious message 
              and get instant verification.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/90">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm">2M+ Scams Blocked</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm">$50M+ Saved</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm">99.8% Accuracy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-sm">30-Second Response</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/payment?plan=scam_watch&interval=monthly`}>
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  <MessageSquare className="w-6 h-6 mr-2" />
                  Start Protection Now →
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  See How It Works
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-yellow-400 mr-2" />
                Setup in 30 seconds
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-yellow-400 mr-2" />
                WhatsApp + Email ready
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-yellow-400 mr-2" />
                $5.99/month
              </div>
            </div>
          </div>
          
          {/* Visual Demo Preview */}
          <div className="relative max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold">WhatsApp Scam Detector</p>
                      <p className="text-blue-200 text-sm">+1 (555) 123-SAFE</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white px-3 py-1">Active</Badge>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 max-w-sm">
                    <p className="text-blue-200 text-sm mb-1">You forwarded:</p>
                    <p className="text-white">"Congratulations! You've won $50,000..."</p>
                  </div>
                  <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4 max-w-sm ml-auto">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <p className="text-red-400 font-semibold">SCAM DETECTED</p>
                    </div>
                    <p className="text-white text-sm">Prize scam targeting seniors. Block immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Problem Scale */}
      <section className="py-16 bg-red-50 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Scam Crisis Is Getting Worse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day, thousands of people fall victim to increasingly sophisticated scams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">11 sec</div>
              <p className="text-gray-700 font-medium">An American falls victim to a phone scam</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">$29.8B</div>
              <p className="text-gray-700 font-medium">Lost to scams in 2021 alone</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">$18K</div>
              <p className="text-gray-700 font-medium">Average loss per senior victim</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">68M</div>
              <p className="text-gray-700 font-medium">Scam calls made daily in the US</p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-red-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem Is Accelerating</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-700">Scam calls increased 325% from 2019 to 2021</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-700">AI-generated voice cloning makes scams more convincing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-700">Only 25% of seniors report scam attempts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-700">Scammers target the same victims repeatedly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to verify suspicious messages, all powered by AI and verified by human experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-center">🛡️ WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">Forward suspicious messages to our AI</p>
                  <p className="text-gray-600">Human experts verify complex scams</p>
                  <p className="text-gray-600">Instant verdict: Safe or Scam</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-center">📧 Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">One-click verification for any email</p>
                  <p className="text-gray-600">AI detects 99% of phishing attempts</p>
                  <p className="text-gray-600">Human team handles the tricky 1%</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-center">🔍 In-Platform Intelligence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">Real-time alerts while you browse</p>
                  <p className="text-gray-600">Community of thousands protecting each other</p>
                  <p className="text-gray-600">Expert analysis on emerging threats</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Scam Watch?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Speed, Human Accuracy</h3>
              <p className="text-gray-600">
                Our AI catches obvious scams instantly, while human experts handle the sophisticated ones
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Scam Prevention Team</h3>
              <p className="text-gray-600">
                Like having a security expert looking over your shoulder
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Protected by the Community</h3>
              <p className="text-gray-600">
                When one person reports a scam, everyone is protected
              </p>
            </Card>
          </div>

        </div>
      </section>

      {/* Why Scam Watch Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Your Family Needs Scam Watch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scammers specifically target people who aren't confident with technology. 
              Protect the people you care about most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Seniors Are Prime Targets</h3>
                    <p className="text-gray-600">
                      People over 60 lose $3 billion annually to scams. Scammers deliberately target those 
                      less familiar with digital threats, using phone calls, texts, and emails.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pressure Tactics Work</h3>
                    <p className="text-gray-600">
                      "Act now or lose your account!" Scammers create urgency to prevent people from 
                      thinking clearly or asking for help. Instant verification breaks this cycle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Peace of Mind</h3>
                    <p className="text-gray-600">
                      You can't be there 24/7 to verify every suspicious message. Scam Watch gives 
                      your loved ones instant, reliable verification whenever they need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Scams We Detect</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone & Robocall Scams
                  </h4>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Tech Support:</strong> "This is Microsoft. Your computer has a virus. 
                      We need remote access to fix it."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Grandparent Scam:</strong> "Grandma, it's me! I'm in jail and need 
                      $2,000 for bail. Don't tell mom and dad!"
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>IRS Threat:</strong> "You owe back taxes. Pay immediately or face arrest. 
                      Buy gift cards to settle your debt."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email & Text Scams
                  </h4>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Bank Phishing:</strong> "Your account has been compromised. 
                      Click here to verify your details immediately."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Fake Prize:</strong> "Congratulations! You've won $50,000! 
                      Pay $200 processing fee to claim your prize."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Romance Scam:</strong> "I love you but I'm stuck overseas. 
                      Send $1,000 for my plane ticket home."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Social Media & Online Scams
                  </h4>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Fake Charity:</strong> "Help victims of recent disaster. 
                      Donate now through our secure link."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Cryptocurrency:</strong> "Invest in this new crypto coin. 
                      Guaranteed 500% returns in 30 days!"
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Invoice & Business Scams
                  </h4>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Fake Invoice:</strong> "Payment overdue for services. 
                      Your account will be suspended unless paid today."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>CEO Fraud:</strong> "This is urgent. Wire $10,000 to this account 
                      for an important acquisition. Keep confidential."
                    </p>
                    <Badge className="bg-red-100 text-red-800">100% SCAM</Badge>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  ✨ With Scam Watch, any family member can instantly verify these suspicious messages 
                  without needing to understand complex technology. We detect all these scam types and thousands more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simple for Everyone */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              So Simple, Anyone Can Use It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No technical knowledge required. If you can send a text message, you can use Scam Watch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">1. Send the Message</CardTitle>
                <CardDescription>
                  Forward the suspicious text, email, or take a screenshot of the call
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    💬 WhatsApp: Just forward to our number<br/>
                    📧 Email: Forward to check@privly.com<br/>
                    📱 Screenshot: Send via WhatsApp
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">2. AI Analyzes Instantly</CardTitle>
                <CardDescription>
                  Our AI checks millions of known scams and threat patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    ⚡ Response in under 60 seconds<br/>
                    🧠 AI trained on millions of scams<br/>
                    🔍 Checks links, phone numbers, tactics
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">3. Get Clear Answer</CardTitle>
                <CardDescription>
                  Simple "SCAM" or "SAFE" with easy-to-understand explanation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-800">
                    ✅ Clear SAFE or SCAM verdict<br/>
                    📝 Simple explanation why<br/>
                    🛡️ Action steps if needed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for:</h3>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Parents & Grandparents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                    <span>Non-tech-savvy family</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <span>Visually impaired users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <span>Anyone wanting peace of mind</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Our AI Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology that catches scams faster and more accurately than humanly possible
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
                    <p className="text-gray-600">
                      Our AI analyzes millions of known scam patterns, learning from new threats daily. 
                      It recognizes subtle linguistic cues that humans might miss, like unusual urgency 
                      language or grammatical patterns common in scam messages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">URL & Link Analysis</h3>
                    <p className="text-gray-600">
                      Every link is instantly checked against our database of malicious URLs. We analyze 
                      domain age, SSL certificates, redirects, and suspicious hosting patterns to identify 
                      phishing sites before you click.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sender Verification</h3>
                    <p className="text-gray-600">
                      We verify if messages actually come from who they claim to be. Our AI checks 
                      email headers, phone number authenticity, and cross-references with official 
                      company communication channels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Database</h3>
                    <p className="text-gray-600">
                      Our system updates every 30 seconds with new threats reported globally. When one 
                      person encounters a new scam anywhere in the world, our entire community is protected 
                      within minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Detection Statistics</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.7%</div>
                  <p className="text-sm text-gray-600">Accuracy Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">&lt;30s</div>
                  <p className="text-sm text-gray-600">Average Response Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15M+</div>
                  <p className="text-sm text-gray-600">Scam Signatures</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-sm text-gray-600">Monitoring</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-gray-800 mb-4">Multi-Layer Detection Process</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">1</div>
                    <span className="text-sm text-gray-700">Initial AI scan (instant)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">2</div>
                    <span className="text-sm text-gray-700">Deep pattern analysis (10 seconds)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">3</div>
                    <span className="text-sm text-gray-700">Human expert review (if needed)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                    <span className="text-sm text-gray-700">Final verdict delivered</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  🛡️ Our AI continuously learns from every scam it encounters, becoming smarter 
                  and more protective with each verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Stories from Real Families
            </h2>
            <p className="text-xl text-gray-600">
              See how Scam Watch has protected families just like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Margaret, 73</CardTitle>
                    <CardDescription>Grandmother of 5</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "I got a call saying my grandson was in jail and needed bail money. 
                  I was so worried! I sent the message to Scam Watch and found out it was fake. 
                  It saved me $3,000."
                </p>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Robert, 68</CardTitle>
                    <CardDescription>Retired Teacher</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "I'm not good with computers, but my daughter set this up for me. 
                  Now I just text when something seems fishy. It's given me so much confidence 
                  to handle these situations."
                </p>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah, 45</CardTitle>
                    <CardDescription>Caring for elderly parents</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "My parents were getting 5-10 scam calls per day. Now they forward everything 
                  to Scam Watch first. It's eliminated the stress and worry for our whole family."
                </p>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Give Your Family the Gift of Security
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            For less than the cost of a coffee per week, protect your loved ones from scams. 
            Start protecting your family today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/payment?plan=scam_watch&interval=monthly`}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Get Scam Watch Protection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-blue-100">$5.99/month • Cancel anytime</p>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              No setup required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Works with any phone
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
24/7 protection
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
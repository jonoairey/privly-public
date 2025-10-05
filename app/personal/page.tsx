import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Footer from '@/components/footer'
import { 
  Shield, 
  CheckCircle, 
  Search, 
  AlertTriangle,
  Eye,
  Bot,
  Users,
  Clock,
  Globe,
  Heart,
  Lock,
  Zap,
  TrendingUp,
  Phone,
  Mail,
  UserCheck,
  Activity,
  Target,
  ArrowRight,
  DollarSign,
  UserX
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personal Privacy Protection Plan - Complete Digital Privacy',
  description: 'Comprehensive personal privacy protection with data breach monitoring, dark web surveillance, automated data broker removal, and AI-powered scam detection. $9.99/month.',
  keywords: [
    'personal privacy protection',
    'data breach monitoring', 
    'dark web monitoring',
    'data broker removal',
    'privacy protection plan',
    'digital privacy service',
    'identity theft protection',
    'personal privacy plan'
  ],
  openGraph: {
    title: 'Personal Privacy Protection Plan - Complete Digital Privacy',
    description: 'Comprehensive personal privacy protection with data breach monitoring, dark web surveillance, and automated data broker removal for $9.99/month.',
    url: 'https://useprivly.com/personal',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Privacy Protection Plan - Complete Digital Privacy',
    description: 'Comprehensive personal privacy protection with data breach monitoring, dark web surveillance, and automated data broker removal for $9.99/month.',
  },
  alternates: {
    canonical: 'https://useprivly.com/personal',
  },
}

export default function PersonalPage() {
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
              <Link href="/personal" className="text-purple-400 font-medium">Personal</Link>
              <Link href="/professional" className="text-gray-300 hover:text-purple-400 transition-colors">Professional</Link>
              <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signin`}>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">Sign In</Button>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
              <UserCheck className="w-4 h-4 mr-2" />
              Complete Privacy Protection • 500+ Data Brokers
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Your Family's Digital{' '}
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Privacy Fortress
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              While you sleep, our AI army finds and destroys your family's exposed data across 
              <span className="text-white font-semibold">500+ data brokers</span> and the dark web. 
              Set it once, protect forever.
            </p>
            
            {/* Real-time Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">12B+</div>
                <div className="text-xs text-purple-200">Breach Records Monitored</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
                <div className="text-xs text-purple-200">Data Brokers Removed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-purple-200">Automated Protection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
                <div className="text-xs text-purple-200">Privacy Score Increase</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-gray-900 text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  <Shield className="w-6 h-6 mr-2" />
                  Protect My Family Now →
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  See What's Included
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-purple-200">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                One-click setup
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 text-cyan-400 mr-2" />
                See results in 24 hours
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                $9.99/month for whole family
              </div>
            </div>
          </div>
          
          {/* Visual Privacy Shield Animation */}
          <div className="relative max-w-5xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-2xl">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Your Family's Privacy Shield</h3>
                  <p className="text-purple-200">Real-time protection across all major threats</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="w-8 h-8 text-red-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Dark Web Monitoring</h4>
                    <p className="text-sm text-purple-200">3 family members found on dark web</p>
                    <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-400">Action Required</Badge>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <UserX className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Data Broker Removal</h4>
                    <p className="text-sm text-purple-200">247 records removed this month</p>
                    <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-400">Active</Badge>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Breach Detection</h4>
                    <p className="text-sm text-purple-200">2 new breaches detected</p>
                    <Badge className="mt-2 bg-blue-500/20 text-blue-300 border-blue-400">Monitoring</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete family protection with AI automation and human oversight when you need it most
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-center">👨‍👩‍👧‍👦 Family Fortress</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">Protect 4 family members with one account</p>
                  <p className="text-gray-600">Kid-safe internet + grandparent-simple interface</p>
                  <p className="text-gray-600">AI monitors threats, humans handle concerns</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-center">🤖 Set It & Forget It</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">AI removes you from 200+ data brokers monthly</p>
                  <p className="text-gray-600">Human verification ensures successful removal</p>
                  <p className="text-gray-600">Validation reports with proof</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-center">💰 Financial Shield</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">AI detects identity theft patterns</p>
                  <p className="text-gray-600">Human experts guide you through any issues</p>
                  <p className="text-gray-600">Prevents average $3,500 in fraud losses</p>
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
              Why Choose Personal Shield?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Works 24/7, Humans When You Need Them</h3>
              <p className="text-gray-600">
                Automated protection with real people just a click away
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Than DIY</h3>
              <p className="text-gray-600">
                Our AI + human team saves you 47 hours of manual work monthly
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Protection Included</h3>
              <p className="text-gray-600">
                Competitors charge $30+ extra. We include it free.
              </p>
            </Card>
          </div>

          {/* Additional Statistics */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Numbers Don't Lie</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">47 hrs</div>
                <p className="text-gray-600">Manual work saved monthly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$3,500</div>
                <p className="text-gray-600">Average fraud losses prevented</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4x</div>
                <p className="text-gray-600">Family members protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Personal Protection */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Personal Protection is Essential
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The digital threats facing individuals today are more sophisticated than ever. Here's why you need both AI technology and human expertise to navigate this tricky world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Already Been Compromised?</h3>
                <p className="text-gray-600 mb-4">
                  If you've been scammed, breached, or had your identity stolen, we'll help you recover. 
                  Your personal information is on 500+ data broker sites being sold to criminals, and may appear on non-consensual information platforms.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    <strong>Recovery Support:</strong> We remove your data from data brokers, people search engines, and non-consensual information platforms. Complete digital identity recovery included.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Threats</h3>
                <p className="text-gray-600 mb-4">
                  Scammers now use AI to create deepfakes of your voice and appearance. 
                  They can impersonate you to friends, contacts, or use your identity for fraud.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    <strong>Growing Threat:</strong> Voice cloning scams increased 3,000% in 2023.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">DIY Removal Takes Forever</h3>
                <p className="text-gray-600 mb-4">
                  Manual data removal takes 40+ hours per person with only 23% success rate. 
                  Most people give up after finding just a few sites.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Our Solution:</strong> Expert-guided AI automation achieves 94.7% success rate with personalized strategies.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">It's Getting Worse</h3>
                <p className="text-gray-600 mb-4">
                  Data reappears within 24 hours without monitoring. New data brokers launch daily. 
                  What you remove today will be back tomorrow.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    <strong>Prevention First:</strong> Continuous monitoring catches and removes new exposures instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Personal Protection Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">AI Threat Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Real-time detection of deepfakes, voice clones, and sophisticated scams targeting you personally.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Data Removal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      We remove your personal information from 500+ data broker sites, people search engines, and non-consensual information platforms with 94.7% success rate. Unlimited requests included.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Privacy Advisor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Named privacy advisor who understands your situation and provides personalized guidance.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Protection Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Family Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One account protects your entire family with age-appropriate interfaces and monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cover 4 Family Members</h3>
                    <p className="text-gray-600">
                      Parents, kids, grandparents - everyone gets protection tailored to their tech comfort level. 
                      One subscription covers your entire household.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Kid-Safe Internet</h3>
                    <p className="text-gray-600">
                      Special protection for children with age-appropriate scam detection and parental controls. 
                      Educational alerts that teach digital safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Grandparent-Simple Interface</h3>
                    <p className="text-gray-600">
                      Large buttons, clear language, and simplified controls. Seniors get the same protection 
                      with an interface designed for their needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Family Coordination</h3>
                    <p className="text-gray-600">
                      AI learns your family's communication patterns to better detect when someone impersonates 
                      a family member. Cross-family verification for suspicious requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Family Protection vs. Individual Plans</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700">Personal Shield (Family)</span>
                  <span className="font-bold text-green-600">$9.99/month</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <span className="text-gray-700">Competitor Family Plans</span>
                  <span className="font-bold text-red-600">$40+/month</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-gray-800 mb-4">What's Included for Families</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">4 family member accounts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Age-appropriate interfaces</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Cross-family scam detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Family communication training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Centralized family dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Set It & Forget It Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI handles the heavy lifting while humans ensure everything works perfectly
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Automation Breakdown</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border-l-4 border-blue-500 bg-blue-50">
                  <div>
                    <h4 className="font-semibold text-gray-800">Data Broker Removal</h4>
                    <p className="text-sm text-gray-600">200+ sites scanned and removed</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">47 hrs</div>
                </div>

                <div className="flex items-center justify-between p-4 border-l-4 border-green-500 bg-green-50">
                  <div>
                    <h4 className="font-semibold text-gray-800">Threat Monitoring</h4>
                    <p className="text-sm text-gray-600">24/7 dark web & breach scanning</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">168 hrs</div>
                </div>

                <div className="flex items-center justify-between p-4 border-l-4 border-purple-500 bg-purple-50">
                  <div>
                    <h4 className="font-semibold text-gray-800">Verification Reports</h4>
                    <p className="text-sm text-gray-600">Proof of successful removals</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">8 hrs</div>
                </div>

                <div className="flex items-center justify-between p-4 border-l-4 border-orange-500 bg-orange-50">
                  <div>
                    <h4 className="font-semibold text-gray-800">Human Oversight</h4>
                    <p className="text-sm text-gray-600">Expert review and guidance</p>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">Available</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
                <p className="text-sm font-medium text-gray-800">
                  🎯 Total monthly value: 223+ hours of automated protection work
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Monitors Continuously</h3>
                    <p className="text-gray-600">
                      Our AI never sleeps. It continuously monitors 200+ data broker sites, removes your 
                      information when it appears, and tracks threats across the dark web.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Humans Verify Success</h3>
                    <p className="text-gray-600">
                      Real people check that removals actually worked. When sites don't comply or use 
                      tricky tactics, our human team steps in with personalized strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proof You Can Trust</h3>
                    <p className="text-gray-600">
                      Monthly reports with screenshots showing your data has been removed. No vague promises - 
                      concrete proof that your privacy is being protected.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Protection</h3>
                    <p className="text-gray-600">
                      AI algorithms detect identity theft patterns early, preventing an average of $3,500 
                      in fraud losses. Early detection means faster resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How AI + Human Expertise Protects You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Set up once, protected forever. Our AI works 24/7 while privacy experts guide you through the process and handle complex situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. AI-Powered Discovery</h3>
              <p className="text-gray-600">
                Our AI scans 500+ data broker sites while privacy experts analyze the results to understand your unique exposure risks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Expert-Guided Removal</h3>
              <p className="text-gray-600">
                Our AI submits removal requests automatically, while experts handle complex cases and develop personalized strategies for stubborn sites.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Ongoing Expert Support</h3>
              <p className="text-gray-600">
                24/7 AI monitoring with privacy experts available to guide you through new threats and help you understand what protection means for your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Personal Plan Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete personal protection for just $9.99/month
            </p>
          </div>

          <Card className="p-8 border-2 border-purple-500 shadow-lg">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">PERSONAL</h3>
                <div className="text-5xl font-bold text-purple-600 mb-2">$9.99</div>
                <div className="text-gray-600">per month</div>
                <p className="text-sm text-gray-500 mt-2">For individuals who want comprehensive protection</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Core Protection:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Real-time AI scam & deepfake detection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Dark web & breach monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Unlimited data removal from 500+ data brokers & non-consensual sites</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">24/7 Australian support</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Expert Guidance Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Dedicated privacy expert</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Expert-guided AI voice clone detection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Phishing email protection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Post-breach recovery assistance</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm font-medium text-blue-700">💬 Instant Scam Check (WhatsApp/Email)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm font-medium text-purple-700">🛡️ Surveillance Shield Extension</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-12 py-4">
                    Start Personal Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-4">
                  30-day money-back guarantee • No setup fees • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Personal Plan FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our Personal protection plan
            </p>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  What's included in my Personal protection?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Your Personal plan includes expert-guided AI scam detection, continuous monitoring across 200+ data broker sites, active data removal, dark web monitoring, and a dedicated privacy expert who understands your specific situation and helps you navigate the digital landscape.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  How does the personal privacy expert work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Every Personal plan customer gets a dedicated privacy expert - a real person who understands the digital landscape and your unique situation. They help you navigate complex privacy decisions and provide guidance when technology alone isn't enough.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  How quickly will I see results?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Most data removals happen within 7-14 days, with some sites responding within minutes. You'll receive weekly reports showing your progress, and our AI continuously monitors to ensure removed data doesn't reappear.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
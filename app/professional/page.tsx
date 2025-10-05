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
  Camera,
  Video,
  DollarSign,
  FileText,
  Gavel,
  MonitorPlay,
  Briefcase,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Privacy Protection - Brand & Content Protection',
  description: 'Advanced privacy protection for creators and professionals. Content theft detection, DMCA automation, deepfake protection, and brand monitoring. $39.99/month.',
  keywords: [
    'professional privacy protection',
    'brand protection',
    'content protection', 
    'DMCA automation',
    'deepfake detection',
    'creator protection',
    'professional privacy plan',
    'content theft detection',
    'brand monitoring'
  ],
  openGraph: {
    title: 'Professional Privacy Protection - Brand & Content Protection',
    description: 'Advanced privacy protection for creators and professionals with content theft detection, DMCA automation, and deepfake protection for $39.99/month.',
    url: 'https://useprivly.com/professional',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Privacy Protection - Brand & Content Protection',
    description: 'Advanced privacy protection for creators and professionals with content theft detection, DMCA automation, and deepfake protection for $39.99/month.',
  },
  alternates: {
    canonical: 'https://useprivly.com/professional',
  },
}

export default function ProfessionalPage() {
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
              <Link href="/professional" className="text-purple-400 font-medium">Professional</Link>
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
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-purple-400 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
              <Star className="w-4 h-4 mr-2" />
              Elite Creator Protection • Professional Grade
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Your Content. Your Revenue.{' '}
              <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Protected.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              While others steal your work for profit, we deploy <span className="text-white font-semibold">military-grade AI</span>{' '}
              + dedicated human experts to protect your empire.{' '}
              <span className="text-white font-semibold">77% less cost</span> than hiring individual services.
            </p>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs text-orange-200">Platforms Monitored</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">94%</div>
                <div className="text-xs text-orange-200">DMCA Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-orange-200">Human Expert Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-1">77%</div>
                <div className="text-xs text-orange-200">Cost Savings vs Competitors</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 text-lg px-10 py-6 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  <Camera className="w-6 h-6 mr-2" />
                  Launch Professional Shield →
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  See Elite Features
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-orange-200">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                Named privacy concierge
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-yellow-400 mr-2" />
                Anonymous DMCA filing
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-yellow-400 mr-2" />
                $39.99/month
              </div>
            </div>
          </div>
          
          {/* Professional Protection Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-2xl">
              <div className="bg-gradient-to-br from-orange-900/50 to-purple-900/50 rounded-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Protection Command Center</h3>
                  <p className="text-orange-200">Real-time content protection with human expert oversight</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-8 h-8 text-red-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Content Theft Detection</h4>
                    <p className="text-sm text-orange-200">247 unauthorized uses detected</p>
                    <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-400">Taking Action</Badge>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <UserCheck className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Personal Concierge</h4>
                    <p className="text-sm text-orange-200">Sarah M. - Your dedicated expert</p>
                    <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-400">Available Now</Badge>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Revenue Protection</h4>
                    <p className="text-sm text-orange-200">$47,230 recovered this quarter</p>
                    <Badge className="mt-2 bg-blue-500/20 text-blue-300 border-blue-400">Monitoring</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Elite Creator Protection Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Military-grade AI technology combined with dedicated human experts to protect your content empire
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-center">🎯 Content Theft Crusher</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">500+ platforms monitored 24/7 with AI</p>
                  <p className="text-gray-600">Instant detection when your content is stolen</p>
                  <p className="text-gray-600">94% DMCA takedown success rate</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gavel className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-center">⚖️ Anonymous DMCA Power</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">File DMCAs without revealing your identity</p>
                  <p className="text-gray-600">Legal team handles complex cases</p>
                  <p className="text-gray-600">Revenue recovery assistance included</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-center">👤 Named Privacy Concierge</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3">
                  <p className="text-gray-600">Dedicated expert who knows your brand</p>
                  <p className="text-gray-600">Weekly strategy calls included</p>
                  <p className="text-gray-600">Direct WhatsApp access for urgent issues</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Professional Protection Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Creators Lose Millions to Content Theft
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The creator economy is under attack. Here's what you're up against and how we protect you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Theft Epidemic</h3>
                <p className="text-gray-600 mb-4">
                  Your content is being stolen and monetized on 100+ platforms right now. 
                  Pirates earn millions from your work while you see nothing.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    <strong>Industry Reality:</strong> Average creator loses $47,000/year to content theft
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Deepfake Nightmare</h3>
                <p className="text-gray-600 mb-4">
                  Bad actors use AI to create deepfakes of you for adult content, scams, 
                  and reputation destruction. Once online, it spreads forever.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    <strong>Shocking Truth:</strong> 96% of deepfakes are non-consensual adult content
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Piracy Networks</h3>
                <p className="text-gray-600 mb-4">
                  International piracy rings operate across jurisdictions, making it nearly 
                  impossible for individuals to fight back effectively.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Our Advantage:</strong> Legal teams in 47 countries ready to act
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">DIY Protection Fails</h3>
                <p className="text-gray-600 mb-4">
                  Manual DMCA filing takes 40+ hours/month with 23% success rate. 
                  Most creators burn out and give up, losing revenue forever.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    <strong>Professional Shield:</strong> 94% success rate with zero effort from you
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Without protection, you're losing $3,900+ monthly to content theft
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Professional Shield Protects Your Empire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three-layer protection system: AI detection, human verification, legal enforcement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. AI Hunts Thieves 24/7</h3>
              <p className="text-gray-600">
                Military-grade AI scans 500+ platforms continuously. Image recognition, 
                video fingerprinting, and text matching catch every stolen piece.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Experts Verify & Strategize</h3>
              <p className="text-gray-600">
                Your dedicated concierge reviews findings, prioritizes high-revenue targets, 
                and develops custom takedown strategies for maximum impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Gavel className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Legal Team Strikes</h3>
              <p className="text-gray-600">
                Anonymous DMCA filings protect your identity. For complex cases, 
                our international legal network pursues revenue recovery.
              </p>
            </div>
          </div>

          {/* Visual Process Flow */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Real Client Success Story
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-orange-600 mb-2">Day 1</div>
                <p className="text-sm text-gray-600">AI detected 247 instances of stolen content across 89 platforms</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">Day 7</div>
                <p className="text-sm text-gray-600">Expert filed anonymous DMCAs, 94% removed within 48 hours</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">Day 30</div>
                <p className="text-sm text-gray-600">Legal team recovered $47,230 in stolen revenue</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">Ongoing</div>
                <p className="text-sm text-gray-600">Zero new theft detected - pirates know you're protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything Included in Professional Shield
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete protection stack worth $3,500/month for just $39.99
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">AI Protection Suite</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Content Theft Detection</h4>
                    <p className="text-gray-600">24/7 monitoring across 500+ platforms including adult sites, piracy forums, and content marketplaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Deepfake Scanner</h4>
                    <p className="text-gray-600">Advanced AI detects deepfakes of you across the internet before they spread</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Revenue Protection</h4>
                    <p className="text-gray-600">Track and recover stolen revenue with detailed loss reports</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Brand Impersonation Alert</h4>
                    <p className="text-gray-600">Instant alerts when someone impersonates your brand or creates fake accounts</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Human Expert Services</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Named Privacy Concierge</h4>
                    <p className="text-gray-600">Dedicated expert who learns your brand and handles complex situations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Anonymous DMCA Filing</h4>
                    <p className="text-gray-600">We file all DMCAs anonymously to protect your real identity and location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Legal Team Access</h4>
                    <p className="text-gray-600">International legal network for complex cases and revenue recovery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Weekly Strategy Calls</h4>
                    <p className="text-gray-600">Regular check-ins to review protection status and optimize strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Plus These Premium Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Priority Response</h4>
                  <p className="text-sm text-gray-600">30-minute response time for urgent takedown requests</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Revenue Reports</h4>
                  <p className="text-sm text-gray-600">Monthly reports showing recovered revenue and prevented losses</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp Access</h4>
                  <p className="text-sm text-gray-600">Direct line to your concierge for immediate assistance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional Shield by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real creators who took back control
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">$2.4M</div>
              <p className="text-gray-300">Revenue Recovered</p>
              <p className="text-sm text-gray-400 mt-1">Last 12 months</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">94.7%</div>
              <p className="text-gray-300">Takedown Success</p>
              <p className="text-sm text-gray-400 mt-1">Industry best</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">48hrs</div>
              <p className="text-gray-300">Average Removal</p>
              <p className="text-sm text-gray-400 mt-1">vs 30 days DIY</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <p className="text-gray-300">Platforms Monitored</p>
              <p className="text-sm text-gray-400 mt-1">Growing daily</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white">Creator Testimonials</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-300 mb-4">"They recovered $47K in stolen revenue in my first month. My concierge Sarah is amazing!"</p>
                <p className="text-sm text-gray-400">- Top 0.1% Creator</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-300 mb-4">"Pirates used to cost me $10K/month. Now they're all gone. Worth every penny!"</p>
                <p className="text-sm text-gray-400">- Professional Model</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-300 mb-4">"Anonymous DMCA filing saved my privacy. No more harassment from angry pirates!"</p>
                <p className="text-sm text-gray-400">- Content Creator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Shield vs. The Competition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why top creators choose us over expensive alternatives
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Professional Shield</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">DIY Protection</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Other Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Monthly Price</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-green-600">$39.99</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">$0 (40+ hrs work)</td>
                  <td className="px-6 py-4 text-center text-sm text-red-600">$100-500+</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Platforms Monitored</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-green-600">500+</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">10-20</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">50-100</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Success Rate</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-green-600">94.7%</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">23%</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">60-70%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Anonymous Filing</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Named Concierge</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Revenue Recovery</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                  <td className="px-6 py-4 text-center">Extra $$$</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Deepfake Protection</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                  <td className="px-6 py-4 text-center text-gray-400">✗</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                Save 77% vs. hiring individual services
              </p>
              <p className="text-gray-600">
                Get enterprise-grade protection for a fraction of the cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Plan Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elite protection for serious creators and professionals
            </p>
          </div>

          <Card className="p-8 border-2 border-orange-500 shadow-xl bg-white">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-2">
                  MOST POPULAR FOR CREATORS
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">PROFESSIONAL</h3>
                <div className="text-5xl font-bold text-orange-600 mb-2">$39.99</div>
                <div className="text-gray-600">per month</div>
                <p className="text-sm text-gray-500 mt-2">For creators & professionals who need maximum protection</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">AI Protection Suite:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Content theft detection across 500+ platforms</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">AI deepfake scanner & removal</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Brand impersonation monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Revenue loss tracking & recovery</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">94.7% DMCA success rate</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Human Expert Services:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-orange-700">🎯 Named privacy concierge</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Anonymous DMCA filing (hide your identity)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Weekly strategy calls</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">International legal team access</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-purple-700">💬 WhatsApp priority support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4 mb-8">
                <p className="text-center text-sm font-medium text-gray-800">
                  💰 Average creator recovers $3,900+ monthly in stolen revenue with Professional Shield
                </p>
              </div>

              <div className="text-center">
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-12 py-4 font-bold shadow-lg">
                    Protect My Content Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-4">
                  30-day money-back guarantee • No setup fees • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">Trusted by top creators on:</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <Camera className="w-8 h-8" />
              <Video className="w-8 h-8" />
              <MonitorPlay className="w-8 h-8" />
              <Briefcase className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Plan FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything creators need to know about Professional Shield
            </p>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  How fast can you remove stolen content?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Most content is removed within 48 hours. Priority platforms like major adult sites often comply within 24 hours. Your named concierge handles resistant sites with escalated legal action, ensuring 94.7% eventual success rate.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  What makes anonymous DMCA filing important?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Filing DMCAs reveals your real name and address to pirates who then harass creators. We file all DMCAs through our legal entity, keeping your identity 100% private. Pirates only see our lawyers, not you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  Can you really recover stolen revenue?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Yes. Our legal team has recovered over $2.4M for creators in the past year. We pursue payment processors, sue repeat offenders, and use international law to freeze pirate assets. Your concierge handles everything.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  What platforms do you monitor?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We monitor 500+ platforms including all major adult sites, tube sites, cam sites, content marketplaces, forums, file sharing sites, and social media. Our AI also discovers new piracy sites daily, so coverage constantly expands.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  How does the named privacy concierge work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  You get a dedicated expert who learns your brand, content style, and protection needs. They review all detected theft, prioritize high-value targets, coordinate takedowns, and provide weekly updates via call or WhatsApp.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  Is this worth it if I'm a smaller creator?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Absolutely. Smaller creators often lose higher percentages of revenue to theft. At $39.99/month, if we prevent just one subscription leak or recover one month of stolen content, you've already profited. Most creators see 10-50x ROI.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Losing Money to Content Thieves
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join 10,000+ creators who took back control with Professional Shield. 
            Your content empire deserves military-grade protection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-12 py-6 font-bold shadow-xl">
                <Shield className="w-6 h-6 mr-2" />
                Start Professional Protection
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600 text-lg px-12 py-6">
                Talk to a Specialist
              </Button>
            </Link>
          </div>
          <p className="text-sm text-orange-200 mt-6">
            No contracts • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Footer from '@/components/footer'
import { 
  Shield, 
  CheckCircle, 
  Search, 
  AlertTriangle,
  Eye,
  Bot,
  Zap,
  Star,
  ChevronRight,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Heart,
  Camera,
  Archive,
  DollarSign,
  Building2,
  CreditCard,
  Phone,
  Mail,
  Lock,
  Trash2,
  TrendingUp,
  X,
  Crown,
  UserX,
  Activity,
  ChevronDown
} from 'lucide-react'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [expandedFAQ, setExpandedFAQ] = useState<Set<number>>(new Set())

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Privly Me",
    "url": "https://useprivly.com",
    "logo": "https://useprivly.com/favicon-192x192.png",
    "description": "Complete digital privacy protection platform with AI-powered scam detection, data breach monitoring, dark web surveillance, and automated data broker removal.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@useprivly.com"
    },
    "sameAs": [
      "https://twitter.com/privlyme"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Scam Watch",
        "description": "Never fall for a scam again with instant verification",
        "price": "5.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "url": "https://useprivly.com/scam-watch"
      },
      {
        "@type": "Offer", 
        "name": "Personal Plan",
        "description": "Complete privacy protection with data removal and dark web monitoring",
        "price": "9.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "url": "https://useprivly.com/personal"
      },
      {
        "@type": "Offer",
        "name": "Professional Plan", 
        "description": "Advanced brand and content protection for creators and professionals",
        "price": "39.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "url": "https://useprivly.com/professional"
      }
    ]
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `/auth/signup?email=${encodeURIComponent(email)}`
  }

  const toggleFAQ = (index: number) => {
    const newExpanded = new Set(expandedFAQ)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedFAQ(newExpanded)
  }

  const faqs = [
    {
      question: "How do you remove my data without my passwords?",
      answer: "We don't need your passwords. Data brokers are legally required to honor removal requests under privacy laws like CCPA and GDPR. Our AI submits these requests automatically using your name and contact information, following each site's specific removal process.",
      highlight: {
        title: "Security Note:",
        text: "We never ask for passwords, logins, or access to your accounts. We work entirely through public removal processes.",
        color: "blue"
      }
    },
    {
      question: "What if a site refuses to remove my information?",
      answer: "Our AI automatically escalates stubborn cases to our human privacy experts. We have established relationships with major data brokers and know exactly how to handle non-compliant sites. In extreme cases, we involve legal channels.",
      highlight: {
        title: "Comprehensive Coverage:",
        text: "We monitor 200+ data broker sites continuously. Our automation system handles the removal process across multiple platforms.",
        color: "green"
      }
    },
    {
      question: "How do I know you're not collecting my data?",
      answer: "We operate under a strict \"zero data retention\" policy. We only collect the minimum information needed for removal requests and delete it immediately after processing. Our entire business model is based on protecting privacy, not collecting data.",
      highlight: {
        title: "Transparency:",
        text: "We undergo regular third-party security audits and maintain SOC 2 compliance. Our privacy policy is written in plain English.",
        color: "purple"
      }
    },
    {
      question: "What's the difference between you and just googling myself?",
      answer: "Googling yourself only shows a tiny fraction of what's out there. Data brokers operate hundreds of sites that don't appear in search results. Our AI monitors 200+ sites continuously, including data brokers and people-search sites, with automated removal workflows.",
      highlight: {
        title: "The Reality:",
        text: "Manual searching finds about 10% of your data exposures. Our AI finds and removes the other 90% you'd never discover on your own.",
        color: "yellow"
      }
    },
    {
      question: "How quickly will I see results?",
      answer: "Most removals happen within 7-14 days. Some sites respond in minutes, others take up to 30 days. Our AI continuously monitors and re-submits requests until successful. You'll receive weekly reports showing progress.",
      highlight: {
        title: "Record Time:",
        text: "Our fastest removal was completed in just 23 minutes. Emergency cases (stalking, harassment) get priority treatment.",
        color: "green"
      }
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, absolutely. Cancel anytime with no penalties. However, remember that data reappears within 24 hours without continuous monitoring. We recommend keeping protection active for ongoing privacy.",
      highlight: {
        title: "30-Day Guarantee:",
        text: "Try us risk-free for 30 days. If you're not satisfied, we'll refund your payment completely.",
        color: "blue"
      }
    }
  ]

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          to: 'hello@useprivly.com'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: '',
          privacy: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToContact = (service: string) => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      // Pre-fill the subject with the service name
      setContactForm(prev => ({
        ...prev,
        subject: `Interested in ${service}`
      }))
    }
  }





  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Privly Me</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-purple-400 font-medium">Home</Link>
              <Link href="/scam-watch" className="text-gray-300 hover:text-purple-400 transition-colors">Scam Watch</Link>
              <Link href="/personal" className="text-gray-300 hover:text-purple-400 transition-colors">Personal</Link>
              <Link href="/professional" className="text-gray-300 hover:text-purple-400 transition-colors">Professional</Link>
              <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">Blog</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Vision */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              AI + Human Expertise = Complete Protection
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Protecting Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Digital Life
              </span>
              <br />
              With Intelligence & Care
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your digital identity is under constant threat. We combine cutting-edge AI technology with 
              real human expertise to provide 24/7 protection that's both powerful and personal.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Detection</h3>
                <p className="text-purple-200 text-sm">
                  Advanced algorithms monitor millions of data points in real-time to identify threats instantly
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Human Touch</h3>
                <p className="text-purple-200 text-sm">
                  Real privacy experts provide personalized guidance when you need help most
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Always Protected</h3>
                <p className="text-purple-200 text-sm">
                  Continuous 24/7 monitoring and automatic removal keeps you safe around the clock
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mb-8">
              <Link href="#plans">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
                  View Protection Plans
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-purple-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Trusted by thousands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Anchor */}
      <div id="plans"></div>

      {/* Scam Watch Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Scam Watch - $5.99/month
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Never Fall for a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Scam Again
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Instant scam verification in under 60 seconds. Perfect for family members who aren't tech-savvy. 
                Just forward suspicious messages to our AI for immediate analysis.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Unlimited WhatsApp scam verification</p>
                    <p className="text-sm text-gray-600">24/7 instant analysis in under 60 seconds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">SMS and email scam analysis</p>
                    <p className="text-sm text-gray-600">Forward any suspicious message for instant verification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Voice call verification</p>
                    <p className="text-sm text-gray-600">Describe suspicious calls for immediate analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Family sharing available</p>
                    <p className="text-sm text-gray-600">Protect your entire family with one account</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/payment?plan=scam_watch&interval=monthly">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                    Start Scam Watch - $5.99
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/scam-watch">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Scam Detection Demo */}
            <div className="relative">
              <Card className="shadow-2xl border-blue-200 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">AI Scam Detection</CardTitle>
                      <CardDescription className="text-blue-100">Real-time scam analysis</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-100">ACTIVE</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-red-800 text-sm mb-1">⚠️ 100% SCAM DETECTED</p>
                        <p className="text-xs text-red-600 mb-2">"Your bank account has been compromised. Click here immediately..."</p>
                        <div className="bg-red-100 p-2 rounded text-xs text-red-700">
                          <strong>Why it's a scam:</strong> Banks never ask for account details via text. This is a phishing attempt.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-green-800 text-sm mb-1">✅ SAFE - Legitimate Message</p>
                        <p className="text-xs text-green-600 mb-2">"Your Amazon order #123 has been delivered to your doorstep"</p>
                        <div className="bg-green-100 p-2 rounded text-xs text-green-700">
                          <strong>Why it's safe:</strong> Legitimate delivery notification from verified Amazon sender.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-yellow-800 text-sm mb-1">⏳ Analyzing new message...</p>
                        <p className="text-xs text-yellow-600">"Congratulations! You've won $1,000. Call this number..."</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Plan Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="shadow-2xl border-green-200 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">Personal Privacy Dashboard</CardTitle>
                      <CardDescription className="text-green-100">Complete digital identity protection</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-100">MONITORING</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 divide-x bg-gray-50 py-3">
                    <div className="text-center px-2">
                      <p className="text-2xl font-bold text-green-600">500+</p>
                      <p className="text-xs text-gray-600">Sites Monitored</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="text-2xl font-bold text-blue-600">94.7%</p>
                      <p className="text-xs text-gray-600">Success Rate</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="text-2xl font-bold text-purple-600">24/7</p>
                      <p className="text-xs text-gray-600">Protection</p>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium text-green-800 text-sm">Data Removal Success</p>
                            <p className="text-xs text-green-600">Removed from 47 data broker sites this month</p>
                          </div>
                        </div>
                        <Badge className="bg-green-600 text-white text-xs">ACTIVE</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-purple-600" />
                          <div>
                            <p className="font-medium text-purple-800 text-sm">Dark Web Monitoring</p>
                            <p className="text-xs text-purple-600">Scanning 4 dark web sources continuously</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">MONITORING</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-blue-800 text-sm">Breach Monitoring</p>
                            <p className="text-xs text-blue-600">No new breaches detected this week</p>
                          </div>
                        </div>
                        <Badge className="bg-blue-600 text-white text-xs">PROTECTED</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Personal Plan - $9.99/month
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Complete{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Privacy Protection
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Everything in Scam Watch plus comprehensive data removal, dark web monitoring, and breach alerts. 
                Your complete digital privacy solution.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">500+ data broker monitoring</p>
                    <p className="text-sm text-gray-600">Automated removal with 94.7% success rate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Dark web monitoring</p>
                    <p className="text-sm text-gray-600">4 comprehensive sources monitored 24/7</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Breach alert system</p>
                    <p className="text-sm text-gray-600">Immediate notifications if your data appears</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Monthly privacy advisor calls</p>
                    <p className="text-sm text-gray-600">15-minute sessions with privacy experts</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/payment?plan=personal&interval=monthly">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                    Start Personal Plan - $9.99
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/personal">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Plan Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Professional Plan - $39.99/month
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Brand & Content{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Protection
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Everything in Personal plus advanced content monitoring, DMCA takedowns, and deepfake detection. 
                Complete protection for creators and professionals.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">72,000+ website monitoring</p>
                    <p className="text-sm text-gray-600">Content theft detection across the entire web</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">DMCA takedown tools</p>
                    <p className="text-sm text-gray-600">YouTube, TikTok, Instagram, Twitter/X, Reddit removal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">AI deepfake detection</p>
                    <p className="text-sm text-gray-600">Advanced protection against manipulated content</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Dedicated account manager</p>
                    <p className="text-sm text-gray-600">Priority support with expert guidance</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link href="/payment?plan=professional&interval=monthly">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                    Start Professional - $39.99
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/professional">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Professional Protection Dashboard */}
            <div className="relative">
              <Card className="shadow-2xl border-purple-200 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">Professional Protection Suite</CardTitle>
                      <CardDescription className="text-purple-100">Advanced brand & content monitoring</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-purple-100">ACTIVE</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 divide-x bg-gray-50 py-3">
                    <div className="text-center px-2">
                      <p className="text-2xl font-bold text-purple-600">72K+</p>
                      <p className="text-xs text-gray-600">Sites Monitored</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="text-2xl font-bold text-green-600">15</p>
                      <p className="text-xs text-gray-600">Takedowns</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="text-2xl font-bold text-blue-600">100%</p>
                      <p className="text-xs text-gray-600">Protected</p>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Camera className="w-5 h-5 text-orange-600" />
                          <div>
                            <p className="font-medium text-orange-800 text-sm">Content Theft Detected</p>
                            <p className="text-xs text-orange-600">Your image found on 3 unauthorized sites</p>
                          </div>
                        </div>
                        <Badge className="bg-orange-600 text-white text-xs">REMOVING</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <UserX className="w-5 h-5 text-red-600" />
                          <div>
                            <p className="font-medium text-red-800 text-sm">Deepfake Alert</p>
                            <p className="text-xs text-red-600">AI-generated video using your likeness detected</p>
                          </div>
                        </div>
                        <Badge variant="destructive" className="text-xs">URGENT</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium text-green-800 text-sm">DMCA Success</p>
                            <p className="text-xs text-green-600">Content removed from YouTube in 2 hours</p>
                          </div>
                        </div>
                        <Badge className="bg-green-600 text-white text-xs">COMPLETED</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>




      {/* Why Digital Safety Matters */}
      <section id="digital-safety" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Your Digital Life Needs Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day, your personal information is being collected, sold, and exploited. 
              We believe everyone deserves to feel safe and secure in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - The Problem */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Hidden Threats You Face Daily</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Brokers Sell Your Life</h4>
                    <p className="text-gray-600">
                      Your address, phone number, family details, and financial history are being sold 
                      to anyone willing to pay - including scammers and stalkers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Dark Web Exposure</h4>
                    <p className="text-gray-600">
                      Your passwords, emails, and personal data from breaches circulate on hidden networks 
                      where criminals buy and sell stolen identities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Scams</h4>
                    <p className="text-gray-600">
                      Criminals use AI to create fake images, videos, and voices to impersonate you 
                      or trick your loved ones into believing urgent emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Our Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">Protecting what matters most</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Restore your privacy</strong> by removing your data from hundreds of broker sites
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Shield your family</strong> from scams with instant verification technology
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Monitor the dark web</strong> to catch threats before they impact you
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Protect your content</strong> from theft and impersonation across the internet
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                <p className="text-sm text-purple-800 font-medium">
                  💙 We combine cutting-edge AI technology with human expertise to give you 
                  comprehensive protection that actually works.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Take Control of Your Digital Life Today
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't wait until you become a victim. Start protecting yourself and your family 
              with the most comprehensive digital security platform available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                  Start Your Protection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-gray-500">Join thousands who trust us with their digital safety</p>
            </div>
          </div>
        </div>
      </section>



      {/* Success Metrics - Simplified */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Trusted by Thousands
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600">Sites Monitored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">94.7%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Protection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">72K+</div>
              <div className="text-sm text-gray-600">Sites Monitored</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-gray-600">
              Three tiers designed to protect what matters most to you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Scam Watch Plan */}
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">SCAM WATCH</CardTitle>
                <div className="text-4xl font-bold text-orange-600 mb-2">$5.99</div>
                <div className="text-gray-600">per month</div>
                <CardDescription className="mt-2">Never fall for a scam again</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-left mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Instant Scam Protection:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Unlimited WhatsApp scam verification (24/7, &lt;60 seconds)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">SMS and email scam analysis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Voice call verification</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Real-time scam alerts and warnings</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Monthly scam trend reports</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Scam education library</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Perfect for: Anyone worried about falling for scams</p>
                </div>

                <Link href="/auth/signup?plan=scam_watch">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Start Scam Watch
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Personal Plan */}
            <Card className="border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">PERSONAL</CardTitle>
                <div className="text-4xl font-bold text-purple-600 mb-2">$9.99</div>
                <div className="text-gray-600">per month</div>
                <CardDescription className="mt-2">Complete privacy protection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-left mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Everything in Scam Watch, plus:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">500+ data broker monitoring and removal</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Automated removal requests (94.7% success)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Dark web monitoring (4 sources)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Breach alert system</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Monthly privacy advisor calls (15 min)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Weekly privacy reports</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Perfect for: Privacy-conscious individuals</p>
                </div>

                <Link href="/auth/signup?plan=personal">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Start Personal Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">PROFESSIONAL</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">$39.99</div>
                <div className="text-gray-600">per month</div>
                <CardDescription className="mt-2">Brand & content protection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-left mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Everything in Personal, plus:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">72,000+ website content monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">DMCA takedown tools (YouTube, TikTok, etc.)</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Automated takedown notice generation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Copyright registration assistance</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">AI deepfake detection for creators</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Perfect for: Creators, professionals, brands</p>
                </div>

                <Link href="/auth/signup?plan=professional">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Professional Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-4">
              30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
            <Link href="/dashboard/pricing">
              <Button variant="outline">
                View Complete Pricing Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* One-Time Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              One-Time Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Immediate Protection When You Need It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sometimes you need immediate action. Our one-time services provide instant protection 
              and expert guidance for urgent privacy situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Complete Data Wipe */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Complete Data Wipe™</CardTitle>
                <div className="text-4xl font-bold text-red-600 mb-2">$299</div>
                <CardDescription>One-time service</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="text-left mb-8">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Remove from 500+ data broker sites</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Comprehensive people search removal</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Social media profile cleanup</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Public records suppression</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">90-day completion guarantee</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => scrollToContact('Complete Data Wipe™')}
                >
                  Get Complete Data Wipe
                </Button>
              </CardContent>
            </Card>

            {/* Breach Recovery Concierge */}
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Breach Recovery Concierge</CardTitle>
                <div className="text-4xl font-bold text-orange-600 mb-2">$199</div>
                <CardDescription>One-time service</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="text-left mb-8">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Personal breach response advisor</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">24-hour emergency response</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Credit monitoring setup</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Account security assessment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Recovery action plan</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => scrollToContact('Breach Recovery Concierge')}
                >
                  Get Breach Recovery Help
                </Button>
              </CardContent>
            </Card>

            {/* Privacy Audit */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Privacy Audit</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">$79-$499</div>
                <CardDescription>Based on complexity</CardDescription>
              </CardHeader>
              <CardContent>
                
                <div className="text-left mb-8">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Comprehensive privacy assessment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Personal data exposure report</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Risk prioritization matrix</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Actionable improvement plan</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Follow-up consultation</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => scrollToContact('Privacy Audit')}
                >
                  Get Privacy Audit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Through Transparency */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-8">
              <Lock className="w-4 h-4 mr-2" />
              Trust Through Transparency
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Transparency in Everything We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Open-source detection tools, clear data handling, no hidden data sales, 
              and proudly Australian owned. Your trust is our foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Auditable Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our detection tools are auditable and transparent. 
                  Complete transparency in how we protect you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Clear Data Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Plain English privacy policy. No hidden clauses. 
                  You know exactly what data we collect and why.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">No Hidden Data Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We never sell your data. Ever. Our business model 
                  is protecting privacy, not exploiting it.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Australian Owned</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Proudly Australian owned and operated. 
                  Supporting local jobs while protecting Aussie privacy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Transparency Commitments
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Auditable Detection</h4>
                  <p className="text-sm text-gray-600">All our AI detection tools are auditable and transparent</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Clear Data Practices</h4>
                  <p className="text-sm text-gray-600">Complete transparency in what data we collect and why</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Privacy First</h4>
                  <p className="text-sm text-gray-600">Your privacy is our product, not your data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Take Back Control of Your Digital Identity
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Protect yourself and your privacy from identity theft, scams, and privacy invasions. 
            Start with our comprehensive privacy scan.
          </p>
          <div className="flex justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-12 py-6">
                <Search className="w-6 h-6 mr-3" />
                Start Your Privacy Scan
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-purple-100">
            Join thousands who've taken back control of their digital identity
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Have Questions? We're Here to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our privacy experts are ready to answer your questions and help you understand 
              how we can protect your digital identity.
            </p>
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription>
                Have questions about our privacy protection services? We're here to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <p className="text-green-800">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-red-800">
                      There was an error sending your message. Please try again or email us directly at hello@useprivly.com
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your privacy concerns or questions..."
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      checked={contactForm.privacy}
                      onChange={(e) => setContactForm({...contactForm, privacy: e.target.checked})}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-600">
                      I agree to the{' '}
                      <Link href="/privacy" className="text-purple-600 hover:text-purple-500 underline">
                        Privacy Policy
                      </Link>{' '}
                      and consent to being contacted by Privly Me about my inquiry. *
                    </label>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  You can also reach us directly at:
                </p>
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-purple-600 mr-2" />
                    <a href="mailto:hello@useprivly.com" className="text-purple-600 hover:text-purple-500">
                      hello@useprivly.com
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  We typically respond within 24 hours. For urgent privacy concerns, please mention "URGENT" in your subject line.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our privacy protection service
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-all duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl pr-2">{faq.question}</CardTitle>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        expandedFAQ.has(index) ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </div>
                </CardHeader>
                {expandedFAQ.has(index) && (
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-4">
                      {faq.answer}
                    </CardDescription>
                    <div className={`bg-${faq.highlight.color}-50 p-4 rounded-lg`}>
                      <p className={`text-sm text-${faq.highlight.color}-800`}>
                        <strong>{faq.highlight.title}</strong> {faq.highlight.text}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
    </>
  )
}

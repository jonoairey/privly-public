'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from '@/components/footer'
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Database, 
  Eye, 
  AlertTriangle,
  Target,
  Heart,
  Award,
  Globe,
  Lock,
  UserCheck,
  ArrowRight,
  BarChart3,
  Clock,
  Bot,
  Trash2
} from 'lucide-react'

export default function AboutPage() {
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
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
            <Heart className="w-4 h-4 mr-2" />
            Our Mission: Your Privacy, Your Control
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Take Back Control of Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Identity</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            The only privacy platform that combines AI technology with human expertise to guide you through 
            the complexity of digital privacy. We help people worldwide understand and navigate this 
            increasingly dangerous digital landscape.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-purple-600">47%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>of Australians experienced data breach</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-pink-600">$3.1B</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Lost to scams in Australia (2022)</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-blue-600">84%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Want more control over data</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-green-600">57%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Don&apos;t know how to protect privacy</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Navigating an Increasingly Complex Digital World
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Today&apos;s consumers face unprecedented digital threats that evolve faster than most people can keep up with. 
              Traditional privacy tools expect you to figure it out yourself—we provide expert guidance through the complexity.
            </p>
          </div>

          {/* Consumer Threat Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-pink-600">87%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Shocked by their online data exposure</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">47</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Average sites selling your personal info</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-600">$200</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Average profit from selling your data</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600">24hrs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>For removed data to reappear</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Problem Description */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The New Generation of Digital Threats</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Heart className="w-5 h-5 text-pink-600 mr-2" />
                      Dating App Dangers
                    </h4>
                    <p className="text-gray-700 mb-6">
                      Romance scams cost Americans $1.3B annually. Dating apps are filled with fake 
                      profiles, catfishers, and dangerous individuals. Most people have no way to 
                      verify who they&apos;re really talking to.
                    </p>

                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 text-blue-600 mr-2" />
                      Child Safety Crisis
                    </h4>
                    <p className="text-gray-700">
                      1 in 7 children receive unwanted sexual solicitations online. Social media 
                      platforms lack adequate protection, and parents struggle to monitor their 
                      children&apos;s digital activities across multiple platforms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-purple-600 mr-2" />
                      AI-Powered Scams
                    </h4>
                    <p className="text-gray-700 mb-6">
                      Voice cloning technology now allows scammers to impersonate loved ones 
                      perfectly. Investment fraudsters use AI to create convincing fake testimonials. 
                      Traditional fraud detection can&apos;t keep up.
                    </p>

                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Database className="w-5 h-5 text-green-600 mr-2" />
                      Content & Identity Theft
                    </h4>
                    <p className="text-gray-700">
                      Creators lose billions to content theft annually. Your photos appear on 
                      fake social media profiles. Deepfakes make anyone a target for 
                      reputation damage and harassment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Privly Me Was Born
              </h2>
              <p className="text-xl text-gray-600">
                Our founders&apos; personal experience with identity theft sparked a mission to protect millions.
              </p>
            </div>

            <div className="space-y-12">
              <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">The Wake-Up Call</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        In 2022, our founder discovered their photos were being used on fake dating profiles, 
                        their email was in 12 different data breaches, and their personal information was 
                        for sale on over 200 data broker websites. The shocking reality was clear: 
                        <strong> we had completely lost control of our digital identities.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">The Research Phase</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        We spent months researching the privacy landscape. What we found was shocking: 
                        existing solutions were either too expensive ($100+ per month), too complex for 
                        everyday users, or simply didn&apos;t work. <strong>There was no comprehensive, 
                        affordable privacy protection built for individuals.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Privly Me was born from a simple mission: <strong>democratize privacy protection</strong>. 
                        We combine cutting-edge AI technology (voice analysis, deepfake detection, scam protection) 
                        with human expertise (24/7 Australian support, privacy advisors) to create the only platform 
                        that truly protects your entire digital life. <strong>AI handles the scale, humans handle 
                        the care.</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Protection */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Complete Privacy Lifecycle Protection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Only Platform That Does It All
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike traditional privacy tools that focus on just one aspect, Privly provides end-to-end protection 
              through the entire privacy lifecycle. From prevention to recovery, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Prevent</h3>
                <p className="text-gray-600">
                  AI-powered scam detection for voice, text, and images. 
                  Real-time threat detection that stops problems before they start.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Monitor</h3>
                <p className="text-gray-600">
                  Continuous monitoring of dark web, data breaches, and 500+ data broker sites. 
                  24/7 surveillance that never sleeps.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Remove</h3>
                <p className="text-gray-600">
                  Automated data removal from hundreds of sites. 
                  Proactive removal services that clean up your digital footprint.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Recover</h3>
                <p className="text-gray-600">
                  Human-guided support through crises. 
                  Named advisors and expert escalation when you need it most.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Complete Protection Matters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proactive vs Reactive</h4>
                  <p className="text-sm text-gray-600">We prevent problems before they happen, not just respond after damage is done</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-Time Protection</h4>
                  <p className="text-sm text-gray-600">Continuous monitoring and automated responses within minutes, not days</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Human + AI Hybrid</h4>
                  <p className="text-sm text-gray-600">Technology handles the scale, humans handle the care and complex cases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Privly Me. They&apos;re not just words on a page—
              they&apos;re the foundation of how we build our platform and serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Privacy by Design</h3>
                <p className="text-gray-600 text-center">
                  We collect the minimum data necessary and never sell your information. 
                  Your privacy isn&apos;t a feature—it&apos;s our foundation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Accessible to All</h3>
                <p className="text-gray-600 text-center">
                  Privacy protection shouldn&apos;t be a luxury. We&apos;re building tools that everyone 
                  can afford and use, regardless of technical expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Transparency First</h3>
                <p className="text-gray-600 text-center">
                  No hidden fees, no dark patterns, no confusing terms. We believe in honest, 
                  clear communication about how our platform works.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Results Driven</h3>
                <p className="text-gray-600 text-center">
                  We measure success by how much control we give back to you. Every feature 
                  is designed to provide real, measurable privacy improvements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Human-Centered</h3>
                <p className="text-gray-600 text-center">
                  Behind every data point is a real person with real concerns. We build with 
                  empathy and never lose sight of the human impact.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Continuous Innovation</h3>
                <p className="text-gray-600 text-center">
                  The privacy landscape evolves daily. We&apos;re committed to staying ahead of new 
                  threats and constantly improving our protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Australian Focus */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
              <Globe className="w-4 h-4 mr-2" />
              Proudly Australian
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Australia, By Australians
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another tech company—we&apos;re Australians protecting Australians. 
              Every feature, every policy, every decision is made with Australian families in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Local Jobs & Support</h3>
                    <p className="text-gray-700 mb-4">
                      Our entire support team is based in Australia. Real people, not chatbots. 
                      We&apos;re creating local jobs while protecting local privacy.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 24/7 Australian support team</li>
                      <li>• Local knowledge of Australian threats</li>
                      <li>• Understanding of Australian culture and needs</li>
                      <li>• Same timezone support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">ACCC Integration</h3>
                    <p className="text-gray-700 mb-4">
                      We work directly with the Australian Competition and Consumer Commission&apos;s 
                      Scamwatch database to provide locally relevant threat intelligence.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Real-time Australian scam alerts</li>
                      <li>• Local fraud pattern recognition</li>
                      <li>• ACCC scam data integration</li>
                      <li>• Australian-specific threat vectors</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy Act Expertise</h3>
                    <p className="text-gray-700 mb-4">
                      Deep understanding of Australian Privacy Act requirements and data protection laws. 
                      Compliance-first approach to everything we do.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Australian Privacy Act compliance</li>
                      <li>• Notifiable data breach expertise</li>
                      <li>• Consumer Data Right understanding</li>
                      <li>• Local regulatory compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Data Sovereignty</h3>
                    <p className="text-gray-700 mb-4">
                      Your data stays in Australia. No offshore processing, no foreign government access. 
                      Complete compliance with Australian data sovereignty requirements.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Australian data centers only</li>
                      <li>• No offshore data processing</li>
                      <li>• Local data residency guarantees</li>
                      <li>• Protected from foreign surveillance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Supporting Australian Communities
              </h3>
              <p className="text-gray-700 mb-8">
                We&apos;re not just protecting privacy—we&apos;re building stronger, safer Australian communities. 
                Every subscription helps create local jobs and fund community privacy education programs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Local jobs created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Australian owned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Local support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Vision for the Future
            </h2>
            
            <Card className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-0">
                <Globe className="w-16 h-16 mx-auto mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-6">A World Where Privacy is the Default</h3>
                <p className="text-lg leading-relaxed mb-8">
                  We envision a future where every individual has complete visibility and control over their 
                  digital footprint. Where data collection is transparent, consent is meaningful, and privacy 
                  violations are impossible. We&apos;re building the tools to make this vision a reality, 
                  one person at a time.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">1M+</div>
                    <div className="text-purple-100">Users protected by 2025</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-purple-100">Data brokers monitored</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-purple-100">Transparency in everything</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Join the Privacy Revolution
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Don&apos;t let your digital life be controlled by others. Take back your privacy today 
            and join thousands who&apos;ve already reclaimed their digital sovereignty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/signup`}>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
                <UserCheck className="w-5 h-5 mr-2" />
                Start Protecting Your Privacy
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 text-lg px-8 py-4">
                Learn More About Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-purple-100">
            Starting at just $9.99/month • 30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
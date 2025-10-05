'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
  Baby,
  Smartphone,
  MonitorSpeaker
} from 'lucide-react'

export default function FamilyPage() {
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <Users className="w-4 h-4 mr-2" />
              Family Protection
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Protect Your Entire{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Family's Privacy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Comprehensive privacy protection for up to 4 family members. 
              Elder & child protection modes, dedicated family advisor, and age-appropriate monitoring.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Search className="w-5 h-5 mr-2" />
                  Start Family Protection
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  View Features
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                $24.99/month
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Up to 4 family members
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Dedicated family advisor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Family Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything in Personal plan, plus specialized protection for every family member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4 Family Members</h3>
                <p className="text-gray-600">
                  Protect up to 4 family members with individual profiles and age-appropriate settings.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Baby className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Elder & Child Protection</h3>
                <p className="text-gray-600">
                  Specialized protection modes for children and elderly family members with tailored threat detection.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Unlimited Data Removal</h3>
                <p className="text-gray-600">
                  Unlimited data removal for families with extensive data broker profiles across multiple family members.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dedicated Family Advisor</h3>
                <p className="text-gray-600">
                  Named family privacy advisor who understands your family's unique needs and situation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Priority Phone Support</h3>
                <p className="text-gray-600">
                  Priority phone support with faster response times for family emergencies.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Teen Social Media Monitoring</h3>
                <p className="text-gray-600">
                  Age-appropriate monitoring of social media platforms for cyberbullying and inappropriate content.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cyberbullying Detection</h3>
                <p className="text-gray-600">
                  AI-powered detection of cyberbullying attempts targeting your children across platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <MonitorSpeaker className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Privacy Dashboard</h3>
                <p className="text-gray-600">
                  Centralized dashboard to monitor and manage privacy settings for all family members.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Parental Control Integration</h3>
                <p className="text-gray-600">
                  Seamless integration with existing parental control tools and family safety apps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Family Protection */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Families Need Special Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protecting a family is more complex than protecting just yourself. Different ages face different threats, and one exposed family member puts everyone at risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Kids Are Online Targets</h3>
                <p className="text-gray-600 mb-4">
                  Children's school information, activities, and locations are easily found online. 
                  70% of parents don't know their child's info is on data broker sites.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    <strong>Shocking Reality:</strong> Average child has personal info on 23 sites before age 13.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Elderly Family Members at Risk</h3>
                <p className="text-gray-600 mb-4">
                  Seniors lose $3 billion annually to scams. Their information is often more exposed and they're less equipped to handle modern digital threats.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    <strong>Vulnerable Target:</strong> 1 in 3 seniors fall victim to privacy-related scams.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family Address Clustering</h3>
                <p className="text-gray-600 mb-4">
                  Data brokers cluster family information together. If one family member is exposed, 
                  it often reveals details about everyone else at the same address.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">
                    <strong>Chain Reaction:</strong> One exposed family member can reveal up to 4 others.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teen Cyberbullying Crisis</h3>
                <p className="text-gray-600 mb-4">
                  37% of teens have been cyberbullied. Traditional parental controls miss sophisticated attacks that use leaked personal information.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Hidden Danger:</strong> Cyberbullies use data broker info to make attacks more personal and hurtful.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Individual Protection Isn't Enough</h3>
                <p className="text-gray-600 mb-4">
                  Protecting just yourself leaves family vulnerable. Each family member needs age-appropriate protection that works together as a unified system.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    <strong>Family Approach:</strong> Our system protects everyone while adapting to each person's needs.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family Emergency Response</h3>
                <p className="text-gray-600 mb-4">
                  When one family member faces a privacy emergency, it affects everyone. 
                  You need coordinated response that protects the whole family, not just the individual.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-indigo-800">
                    <strong>Unified Response:</strong> One emergency contact manages protection for entire family.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Family Protection vs. Individual Plans
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-red-800 mb-4">❌ Individual Plans Only</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Kids remain unprotected and vulnerable</li>
                    <li>• Elderly family members exposed to scams</li>
                    <li>• No coordinated family emergency response</li>
                    <li>• Costs $9.99 × 4 people = $39.96/month</li>
                    <li>• No age-appropriate protection settings</li>
                    <li>• Family information still clustered together</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-green-800 mb-4">✅ Family Protection Plan</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• All 4 family members protected for $24.99</li>
                    <li>• Age-appropriate protection for each person</li>
                    <li>• Coordinated family emergency response</li>
                    <li>• Dedicated family advisor who knows everyone</li>
                    <li>• Teen cyberbullying detection & prevention</li>
                    <li>• Elder protection with scam detection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Age-Appropriate Protection for Every Family Member
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored protection that adapts to the unique needs of each family member's age and situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-blue-50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Baby className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Children (Under 13)</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">School information monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Activity schedule protection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Predator detection alerts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Location data removal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-purple-50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Teens (13-18)</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Social media monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Cyberbullying detection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">College application privacy</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Identity theft prevention</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-green-50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Elderly (65+)</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Senior-targeted scam detection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Medical information protection</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Financial fraud prevention</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Simple dashboard interface</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Family Plan Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete family protection for just $24.99/month
            </p>
          </div>

          <Card className="p-8 border-2 border-blue-500 shadow-lg">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">FAMILY</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$24.99</div>
                <div className="text-gray-600">per month</div>
                <p className="text-sm text-gray-500 mt-2">Everything in Personal for 4 family members</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Personal Features + :</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Monitor up to 4 family members</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Elder & child protection modes</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Unlimited data removals</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Dedicated family advisor</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Family-Specific Features:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Priority phone support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Teen social media monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Cyberbullying detection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5" />
                      <span className="text-sm">Family privacy dashboard</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4">
                    Start Family Plan
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
              Family Plan FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our Family protection plan
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How does age-appropriate protection work?
                </h3>
                <p className="text-gray-600">
                  Our AI automatically adjusts protection based on each family member's age. Children get school and activity protection, teens get social media monitoring, and elderly family members get enhanced scam detection. Parents can customize settings for each family member.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Can I add or remove family members?
                </h3>
                <p className="text-gray-600">
                  Yes! You can add or remove family members at any time through your family dashboard. The plan supports up to 4 family members total. If you need to protect more than 4 people, we can help you with a custom solution.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What makes the family advisor different?
                </h3>
                <p className="text-gray-600">
                  Your dedicated family advisor understands the unique challenges of protecting multiple family members. They provide guidance on age-appropriate settings, help with family privacy policies, and coordinate responses when multiple family members are affected by the same incident.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Privly Me</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Family privacy protection for up to 4 family members with age-appropriate monitoring and dedicated support.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/personal" className="hover:text-white transition-colors">Personal</Link></li>
                <li><Link href="/family" className="hover:text-white transition-colors">Family</Link></li>
                <li><Link href="/professional" className="hover:text-white transition-colors">Professional</Link></li>
                <li><Link href="/for-business" className="hover:text-white transition-colors">For Business</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="mailto:hello@useprivly.me" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2024 Privly Me. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <a href="mailto:hello@useprivly.me" className="hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from '@/components/footer'
import { 
  Shield, 
  Users, 
  Building2, 
  Database, 
  Eye, 
  AlertTriangle,
  CheckCircle,
  Globe,
  Lock,
  TrendingUp,
  Phone,
  Calendar,
  UserCheck,
  Zap,
  BarChart3,
  Settings,
  FileText,
  Clock,
  Heart,
  Target,
  ArrowRight,
  Mail,
  Briefcase,
  Server,
  Code,
  Activity,
  Bot
} from 'lucide-react'

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center">
        <div className="text-center p-12 max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Business Solutions</h1>
            <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-800 rounded-full text-lg font-semibold mb-6">
              COMING SOON
            </div>
            <p className="text-gray-600 text-lg mb-8">
              We're developing enterprise-grade privacy protection solutions for businesses. 
              Stay tuned for comprehensive B2B privacy services.
            </p>
          </div>
          <div className="space-y-4">
            <Link href="/personal">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Explore Personal Plans
              </Button>
            </Link>
            <Link href="/professional">
              <Button variant="outline" className="w-full">
                Professional Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
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
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
              <Building2 className="w-4 h-4 mr-2" />
              For Business Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Organisation-Wide{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Privacy Operations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Comprehensive privacy protection for your entire organisation. Unlimited licenses, 
              dedicated support team, and enterprise-grade security operations designed for 
              Australian businesses.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="#contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                  <Building2 className="w-5 h-5 mr-2" />
                  Get Custom Quote
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
                Unlimited employee licenses
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Dedicated account team
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Custom pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Protection */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete privacy operations for your entire organisation, 
              from individual employees to executive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Unlimited Employee Licenses</h3>
                <p className="text-gray-600">
                  Protect your entire workforce with unlimited user licenses. 
                  Scale across departments, locations, and subsidiaries.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Company-Wide Dark Web Monitoring</h3>
                <p className="text-gray-600">
                  Monitor for company data, employee credentials, and proprietary 
                  information across dark web marketplaces.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Breach Detection</h3>
                <p className="text-gray-600">
                  Real-time breach detection with automated response protocols. 
                  Instant alerts and containment procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Voice & Identity Protection</h3>
                <p className="text-gray-600">
                  Advanced protection for C-suite executives against deepfakes, 
                  voice cloning, and targeted impersonation attacks.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Risk Monitoring</h3>
                <p className="text-gray-600">
                  Monitor your supply chain and vendor ecosystem for privacy 
                  breaches that could impact your organisation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Automation</h3>
                <p className="text-gray-600">
                  Automated compliance with GDPR, Australian Privacy Act, 
                  and industry-specific regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom AI Threat Models</h3>
                <p className="text-gray-600">
                  Tailored AI models trained on your industry-specific threats 
                  and organisational risk profile.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Enterprise Privacy */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Need Enterprise Privacy Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise privacy threats are sophisticated and target your most valuable assets: your people, data, and reputation. Consumer tools can't protect business-scale operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Targeting Epidemic</h3>
                <p className="text-gray-600 mb-4">
                  95% of successful business attacks start with executive targeting. Your leaders' personal information 
                  is exploited to compromise your entire organization.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800">
                    <strong>Attack Cost:</strong> Average business email compromise costs $4.89 million per incident.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Privacy Attacks</h3>
                <p className="text-gray-600 mb-4">
                  Privacy breaches in your supply chain expose your business. 73% of organizations 
                  experienced supply chain compromises in 2023.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-orange-800">
                    <strong>Cascading Impact:</strong> One vendor breach can compromise hundreds of businesses.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Data = Attack Vector</h3>
                <p className="text-gray-600 mb-4">
                  Your employees' personal information is scraped and used for sophisticated 
                  social engineering attacks against your business.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">
                    <strong>Scale Problem:</strong> Large enterprises have 50,000+ employee data exposures on average.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance is No Longer Enough</h3>
                <p className="text-gray-600 mb-4">
                  GDPR, CCPA, and SOX compliance focus on data you control. But your business 
                  is vulnerable to data you don't control - what's leaked about your people.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Compliance Gap:</strong> 89% of privacy regulations don't address third-party data broker exposure.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">M&A Privacy Due Diligence</h3>
                <p className="text-gray-600 mb-4">
                  Acquiring a company with privacy exposures can tank valuations. 
                  Private equity firms now require privacy due diligence.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    <strong>Deal Impact:</strong> Privacy risks can reduce company valuations by 15-30%.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Business Attacks</h3>
                <p className="text-gray-600 mb-4">
                  Criminals use AI to analyze your employees' exposed data and create 
                  personalized attacks that bypass traditional security training.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-indigo-800">
                    <strong>Evolution:</strong> AI-powered attacks are 10x more effective than traditional phishing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Privacy Operations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-800 mb-4">🖯️ Executive Protection</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Proactive executive protection program</li>
                    <li>• Leadership team data removal</li>
                    <li>• Board member privacy monitoring</li>
                    <li>• C-suite threat assessment</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-green-800 mb-4">🛡️ Workforce Protection</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Bulk employee data removal operations</li>
                    <li>• Supply chain privacy risk monitoring</li>
                    <li>• Social engineering prevention</li>
                    <li>• HR data security enhancement</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-800 mb-4">🏢 Business Operations</h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• M&A privacy due diligence support</li>
                    <li>• Custom compliance automation</li>
                    <li>• Dedicated account team with 24/7 response</li>
                    <li>• Enterprise-grade SLA guarantees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise ROI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Privacy ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise privacy operations deliver measurable ROI through attack prevention, 
              compliance automation, and business continuity protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Attack Prevention</h3>
                <p className="text-gray-600 mb-4">
                  Prevent business email compromise and executive targeting attacks.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-green-800">
                    <strong>ROI:</strong> 15:1 return on investment
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automate privacy compliance across multiple jurisdictions and regulations.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">
                    <strong>Savings:</strong> 80% reduction in compliance costs
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Continuity</h3>
                <p className="text-gray-600 mb-4">
                  Protect business operations from privacy-related disruptions and incidents.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">
                    <strong>Impact:</strong> 99.9% uptime protection
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dedicated Human Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Dedicated Human Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Named Account Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every enterprise customer gets a dedicated team of 3 specialists who know 
              your business inside and out. No more explaining your situation to different people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Named Account Team (3 Specialists)</h3>
                <p className="text-gray-600 mb-4">
                  Your dedicated team includes a Privacy Operations Manager, 
                  Technical Specialist, and Compliance Expert.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Privacy Operations Manager</li>
                  <li>• Technical Integration Specialist</li>
                  <li>• Compliance & Legal Expert</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Check-ins</h3>
                <p className="text-gray-600 mb-4">
                  Regular scheduled check-ins to review threat landscape, 
                  incidents, and strategic privacy initiatives.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Threat landscape review</li>
                  <li>• Incident response planning</li>
                  <li>• Strategic privacy roadmap</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Emergency Hotline</h3>
                <p className="text-gray-600 mb-4">
                  Direct access to your account team for privacy emergencies, 
                  breaches, and critical incidents.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Direct team access</li>
                  <li>• 15-minute response time</li>
                  <li>• Escalation protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">On-Site Training Available</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive privacy training for your team at your location. 
                  Customised to your industry and threats.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Executive briefings</li>
                  <li>• Employee workshops</li>
                  <li>• Technical training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Incident Response Team</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated incident response team that activates within minutes 
                  of a privacy breach or security incident.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Immediate response activation</li>
                  <li>• Forensic investigation</li>
                  <li>• Remediation planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quarterly Business Reviews</h3>
                <p className="text-gray-600 mb-4">
                  Strategic reviews of your privacy program with metrics, 
                  improvements, and future planning.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Privacy metrics review</li>
                  <li>• ROI analysis</li>
                  <li>• Strategic planning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Data Operations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <Database className="w-4 h-4 mr-2" />
              Enterprise Data Operations
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Data Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade data operations that scale with your business. 
              From bulk operations to API integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bulk Employee Data Removal</h3>
                <p className="text-gray-600 mb-6">
                  Remove personal information for hundreds or thousands of employees 
                  from data brokers and people search sites simultaneously.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Bulk upload via CSV/Excel</li>
                  <li>• Automated processing workflows</li>
                  <li>• Progress tracking dashboard</li>
                  <li>• Completion reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Supply Chain Privacy Monitoring</h3>
                <p className="text-gray-600 mb-6">
                  Monitor your entire supply chain for privacy risks, vendor breaches, 
                  and third-party data exposures.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Vendor risk assessment</li>
                  <li>• Third-party breach monitoring</li>
                  <li>• Supply chain mapping</li>
                  <li>• Risk scoring algorithms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">M&A Privacy Due Diligence</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive privacy due diligence for mergers and acquisitions, 
                  including data exposure assessment and risk analysis.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Target company assessment</li>
                  <li>• Data exposure mapping</li>
                  <li>• Risk quantification</li>
                  <li>• Integration planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Governance Platform</h3>
                <p className="text-gray-600 mb-6">
                  Centralised platform for managing data governance, privacy policies, 
                  and compliance across your organisation.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Policy management</li>
                  <li>• Compliance tracking</li>
                  <li>• Audit trail</li>
                  <li>• Reporting dashboards</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                API for HR/IT Systems
              </h3>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Seamless integration with your existing HR and IT systems. 
                Automate employee onboarding/offboarding privacy protection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">RESTful API</h4>
                  <p className="text-sm text-gray-600">Full REST API access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-time Webhooks</h4>
                  <p className="text-sm text-gray-600">Instant notifications</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">HR Integration</h4>
                  <p className="text-sm text-gray-600">Employee lifecycle</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                  <p className="text-sm text-gray-600">Bank-grade encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Custom Enterprise Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every enterprise is unique. Let's discuss your specific needs and create 
              a custom privacy protection solution for your organisation.
            </p>
          </div>

          <Card className="p-8 bg-white shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Clock className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">30-Minute Discovery Call</h4>
                        <p className="text-gray-600">
                          We'll discuss your organisation's size, industry, and specific privacy challenges.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Custom Proposal</h4>
                        <p className="text-gray-600">
                          Tailored proposal with pricing, implementation timeline, and feature specifications.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Target className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Pilot Program</h4>
                        <p className="text-gray-600">
                          30-day pilot with a subset of your organisation before full deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-purple-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <a href="mailto:enterprise@useprivly.me" className="text-purple-600 hover:text-purple-500">
                          enterprise@useprivly.me
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-purple-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <a href="tel:+611800PRIVLY" className="text-purple-600 hover:text-purple-500">
                          +61 1800 PRIVLY
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-6 h-6 text-purple-600 mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Schedule</h4>
                        <p className="text-gray-600">Book a discovery call at your convenience</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="mailto:enterprise@useprivly.me">
                      <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                        <Mail className="w-5 h-5 mr-2" />
                        Contact Enterprise Sales
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
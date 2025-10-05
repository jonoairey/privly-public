'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from '@/components/footer'
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  UserCheck,
  Mail,
  AlertCircle,
  CheckCircle,
  FileText,
  Clock,
  Globe,
  Users,
  Key,
  Server,
  Smartphone,
  Brain,
  UserX,
  Search,
  CreditCard,
  HelpCircle
} from 'lucide-react'

export default function PrivacyPolicyPage() {
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
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
            <Lock className="w-4 h-4 mr-2" />
            Privacy-First Policy
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your privacy is our business. This policy explains how we protect your privacy 
            while helping you protect yours.
          </p>

          <Card className="p-6 bg-green-50 border-green-200 text-left">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Our Core Privacy Commitments</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>🔒 <strong>Your Data, Your Control</strong>: You always maintain ownership and control of your personal information.</li>
                    <li>🚫 <strong>Never Sold</strong>: We will never sell, rent, or share your personal information for marketing purposes.</li>
                    <li>🛡️ <strong>Privacy First</strong>: We collect only the minimum information necessary to protect your privacy.</li>
                    <li>⚡ <strong>Transparent Operations</strong>: We're committed to being clear about what we do with your data.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Last Updated */}
          <div className="mb-12 p-4 bg-gray-50 rounded-lg flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">
              <strong>Last Updated:</strong> December 2024 | 
              <strong> Effective Date:</strong> December 2024
            </span>
          </div>

          {/* Table of Contents */}
          <Card className="p-6 mb-12">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Table of Contents
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <a href="#information-we-collect" className="block text-purple-600 hover:text-purple-700">1. Information We Collect</a>
                  <a href="#how-we-use" className="block text-purple-600 hover:text-purple-700">2. How We Use Your Information</a>
                  <a href="#sharing" className="block text-purple-600 hover:text-purple-700">3. Information Sharing and Disclosure</a>
                  <a href="#security" className="block text-purple-600 hover:text-purple-700">4. Data Security</a>
                  <a href="#retention" className="block text-purple-600 hover:text-purple-700">5. Data Retention</a>
                  <a href="#rights" className="block text-purple-600 hover:text-purple-700">6. Your Rights and Choices</a>
                </div>
                <div className="space-y-2">
                  <a href="#service-specific" className="block text-purple-600 hover:text-purple-700">7. Service-Specific Privacy Practices</a>
                  <a href="#children" className="block text-purple-600 hover:text-purple-700">8. Children's Privacy</a>
                  <a href="#international" className="block text-purple-600 hover:text-purple-700">9. International Data Transfers</a>
                  <a href="#changes" className="block text-purple-600 hover:text-purple-700">10. Changes to This Policy</a>
                  <a href="#contact" className="block text-purple-600 hover:text-purple-700">11. Contact Us</a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-12">

            {/* 1. Information We Collect */}
            <section id="information-we-collect">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
              
              <div className="space-y-6">
                {/* Information You Provide */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Information You Provide
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Account Information</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Name and contact details (email address, phone number)</li>
                          <li>Account credentials (username, password)</li>
                          <li>Billing information (payment card details, billing address)</li>
                          <li>Subscription tier and preferences</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Monitoring Profile Data</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Primary and alternative email addresses</li>
                          <li>Usernames and social media handles</li>
                          <li>Phone numbers for monitoring</li>
                          <li>Home address (for data broker removal)</li>
                          <li>Date of birth (optional, for enhanced monitoring)</li>
                          <li>Business information (company name, domain, business email)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Scam Protection Content</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Messages, emails, and URLs submitted for scam analysis</li>
                          <li>WhatsApp messages sent to our expert analysis team</li>
                          <li>Email forwards to scamcheck@useprivly.com</li>
                          <li>Images and QR codes uploaded for scanning</li>
                          <li>Chat conversations with our AI scam detector</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Information We Collect Automatically */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Server className="w-5 h-5 mr-2" />
                      Information We Collect Automatically
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Technical Information</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>IP address and approximate location</li>
                          <li>Device type, operating system, and browser information</li>
                          <li>Unique device identifiers</li>
                          <li>Log data (access times, pages viewed, clicks)</li>
                          <li>Cookies and similar tracking technologies</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Usage Analytics</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Features used and frequency of use</li>
                          <li>Service performance metrics</li>
                          <li>Error reports and debugging information</li>
                          <li>Interaction with emails and notifications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Information from Third Parties */}
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2" />
                      Information from Third Parties
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Data Broker Information</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Public records and listings found on 1,000+ data broker sites</li>
                          <li>Information discovered during removal processes</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Dark Web Monitoring</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Credentials and personal information found in data breaches</li>
                          <li>Dark web marketplace listings containing your data</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Public Sources</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Social media profiles and posts (for monitoring purposes)</li>
                          <li>Public websites and forums</li>
                          <li>Search engine results</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section id="how-we-use">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Providing Core Services
                    </h3>
                    
                    <p className="text-gray-600 mb-4">We use your information to:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Service Delivery by Subscription Tier</h4>
                        <div className="space-y-3">
                          <div className="pl-4 border-l-4 border-green-500">
                            <p className="font-medium text-gray-700">Scam Watch ($5.99/month)</p>
                            <p className="text-gray-600">Real-time AI scam detection and alerts</p>
                          </div>
                          <div className="pl-4 border-l-4 border-blue-500">
                            <p className="font-medium text-gray-700">Personal ($9.99/month)</p>
                            <p className="text-gray-600">Dark web monitoring, data broker removal (250+ brokers), breach alerts</p>
                          </div>
                          <div className="pl-4 border-l-4 border-purple-500">
                            <p className="font-medium text-gray-700">Professional ($39.99/month)</p>
                            <p className="text-gray-600">Content theft detection (72,000+ websites), deepfake monitoring, reputation protection, 1,000+ data broker removal</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Service Operations</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li><strong>Data Broker Removal</strong>: Submit removal requests to 1,000+ data brokers on your behalf</li>
                          <li><strong>Dark Web Monitoring</strong>: Scan dark web sources for your personal information</li>
                          <li><strong>Breach Detection</strong>: Alert you when your data appears in new breaches</li>
                          <li><strong>Scam Analysis</strong>: Process content through AI and human experts to detect scams</li>
                          <li><strong>Content Protection</strong>: Monitor 72,000+ websites for unauthorized use of your content</li>
                          <li><strong>Deepfake Detection</strong>: Analyze images and videos for potential deepfakes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Communication & Improvement
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Communication</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Send service alerts and security notifications</li>
                          <li>Provide customer support and respond to inquiries</li>
                          <li>Deliver monthly privacy reports and insights</li>
                          <li>Send marketing communications (with your consent)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Improvement and Analytics</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Analyze usage patterns to improve services</li>
                          <li>Develop new features and capabilities</li>
                          <li>Conduct research on privacy threats and protection methods</li>
                          <li>Debug technical issues and improve performance</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Legal and Security</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          <li>Comply with legal obligations and requests</li>
                          <li>Prevent fraud and abuse</li>
                          <li>Enforce our terms of service</li>
                          <li>Protect the rights and safety of our users and others</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 3. Information Sharing */}
            <section id="sharing">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
              
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-lg mb-6">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold text-red-900">We Never Sell Your Personal Information</h3>
                </div>
                <p className="text-red-800">
                  We share information only in these limited circumstances:
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Providers</h3>
                    <p className="text-gray-600 mb-3">We share information with trusted vendors who help us operate our services:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Payment processors (PayPal, Stripe)</li>
                      <li>Cloud infrastructure (Vercel, Railway, Supabase)</li>
                      <li>Email service providers</li>
                      <li>Analytics providers</li>
                      <li>Customer support tools</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Broker Removal</h3>
                    <p className="text-gray-600 mb-3">When removing your information from data brokers, we may share:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Your name, email, and address as required for opt-out requests</li>
                      <li>Only the minimum information necessary for removal</li>
                      <li>Following each data broker's specific removal procedures</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Disclosures</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Legal Requirements</h4>
                        <p className="text-gray-600">We may disclose information when required by law or to respond to legal process, protect our rights, or investigate fraud.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Business Transfers</h4>
                        <p className="text-gray-600">If we're involved in a merger, acquisition, or sale of assets, your information may be transferred with notification.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Aggregated Information</h4>
                        <p className="text-gray-600">We may share aggregated, non-identifiable information about privacy trends with the public.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 4. Data Security */}
            <section id="security">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Industry-Leading Security Measures
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                        <Key className="w-4 h-4 mr-2" />
                        Technical Safeguards
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>AES-256 encryption for data at rest</li>
                        <li>TLS 1.3 for data in transit</li>
                        <li>Multi-factor authentication</li>
                        <li>Role-based access permissions</li>
                        <li>24/7 security monitoring</li>
                        <li>Regular security assessments</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Operational Security
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Employee background checks</li>
                        <li>Security training programs</li>
                        <li>Strict access controls</li>
                        <li>Incident response procedures</li>
                        <li>Regular security updates</li>
                        <li>Penetration testing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Data Breach Response
                    </h4>
                    <p className="text-blue-800">
                      In the unlikely event of a data breach, we'll notify affected users within 72 hours, 
                      provide specific details about compromised information, and offer guidance on protective steps.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 5. Data Retention */}
            <section id="retention">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Retention</h2>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Retention Periods</h3>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Active Accounts</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li><strong>Account Data</strong>: Retained while your account is active</li>
                        <li><strong>Scam Analysis History</strong>: 90 days for AI chat logs, 1 year for analysis results</li>
                        <li><strong>Monitoring Results</strong>: 2 years for breach and dark web findings</li>
                        <li><strong>Support Communications</strong>: 2 years from last interaction</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">After Account Deletion</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li><strong>Legal Records</strong>: Up to 7 years as required by law</li>
                        <li><strong>Anonymized Data</strong>: May be retained indefinitely for analytics</li>
                        <li><strong>Backup Systems</strong>: Deleted within 90 days from all backups</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 6. Your Rights */}
            <section id="rights">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Access and Correction
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>View and download your personal information</li>
                      <li>Correct inaccurate or incomplete data</li>
                      <li>Request information about how we use your data</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Database className="w-5 h-5 mr-2" />
                      Data Portability
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Export your monitoring profile and settings</li>
                      <li>Download scan results and reports</li>
                      <li>Transfer data to another service</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <UserX className="w-5 h-5 mr-2" />
                      Deletion Rights
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Delete your account and associated data</li>
                      <li>Request removal of specific information</li>
                      <li>Some data may be retained for legal compliance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Communication Preferences
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Opt-out of marketing emails</li>
                      <li>Customize notification settings</li>
                      <li>Choose preferred contact methods</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-6 mt-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Exercise Your Rights</h3>
                  <p className="text-gray-600 mb-3">Contact our Privacy Team at <a href="mailto:privacy@useprivly.com" className="text-purple-600 hover:text-purple-700">privacy@useprivly.com</a></p>
                  <p className="text-gray-600">We'll respond within 30 days. Verification required to protect your privacy.</p>
                </CardContent>
              </Card>
            </section>

            {/* 7. Service-Specific Privacy */}
            <section id="service-specific">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Service-Specific Privacy Practices</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Brain className="w-5 h-5 mr-2" />
                      AI Scam Detection
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Chat messages analyzed by AI models</li>
                      <li>Results stored for service improvement</li>
                      <li>Human review only with your consent</li>
                      <li>Automated decision-making with right to human review</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <UserX className="w-5 h-5 mr-2" />
                      Data Broker Removal
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Information shared only as required for opt-out</li>
                      <li>Removal confirmations stored for verification</li>
                      <li>Progress tracked across 1,000+ data brokers</li>
                      <li>Automated and manual removal processes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Dark Web Monitoring
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Continuous scanning without storing dark web content</li>
                      <li>Only your exposed information is retained</li>
                      <li>Immediate alerts for new discoveries</li>
                      <li>Secure handling of compromised credentials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Smartphone className="w-5 h-5 mr-2" />
                      WhatsApp and Email Analysis
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Messages to our WhatsApp experts handled confidentially</li>
                      <li>Emails to scamcheck@useprivly.com processed securely</li>
                      <li>Analysis results retained for your reference</li>
                      <li>Human expert review with strict confidentiality</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 8. Children's Privacy */}
            <section id="children">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <p className="text-gray-600">
                    Privly Me is not intended for children under 13. We don't knowingly collect information 
                    from children. If you believe we've collected data from a child, please contact us immediately 
                    at <a href="mailto:privacy@useprivly.com" className="text-purple-600 hover:text-purple-700">privacy@useprivly.com</a>.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* 9. International Data Transfers */}
            <section id="international">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. International Data Transfers</h2>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Global Operations
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Our primary operations are in Australia, but data may be processed in other countries. 
                      We ensure appropriate safeguards for international transfers.
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Your Rights by Region</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li><strong>Australian Users</strong>: Rights under the Privacy Act 1988</li>
                        <li><strong>EU/UK Users</strong>: GDPR rights including erasure and portability</li>
                        <li><strong>California Users</strong>: CCPA rights including sale opt-out</li>
                        <li><strong>Other Regions</strong>: Rights under applicable local laws</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 10. Changes to This Policy */}
            <section id="changes">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-3">
                    We may update this policy to reflect new features, legal requirements, or user feedback. 
                    We'll notify you of material changes via:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Email notification</li>
                    <li>In-app announcement</li>
                    <li>Website banner</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* 11. Contact Us */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Privacy Team
                    </h3>
                    <p className="text-gray-600 mb-2">For privacy-specific inquiries:</p>
                    <p className="text-purple-600 font-medium">privacy@useprivly.com</p>
                    <p className="text-sm text-gray-500 mt-1">Response time: Within 2 business days</p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2" />
                      General Support
                    </h3>
                    <p className="text-gray-600 mb-2">For general questions:</p>
                    <p className="text-purple-600 font-medium">support@useprivly.com</p>
                    <p className="text-purple-600 font-medium">scamcheck@useprivly.com</p>
                  </CardContent>
                </Card>

                <Card className="p-6 md:col-span-2">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Data Protection Officer
                    </h3>
                    <p className="text-gray-600 mb-2">
                      For privacy-specific inquiries, you can also contact our Data Protection Officer:
                    </p>
                    <p className="text-purple-600 font-medium">dpo@useprivly.com</p>
                  </CardContent>
                </Card>
              </div>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
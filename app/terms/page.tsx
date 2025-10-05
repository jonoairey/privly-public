'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from '@/components/footer'
import { 
  Shield, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Clock,
  CreditCard,
  UserX,
  RefreshCw,
  Scale,
  Mail,
  Gavel,
  Lock
} from 'lucide-react'

export default function TermsOfServicePage() {
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Scale className="w-4 h-4 mr-2" />
            Fair & Transparent Terms
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Clear, fair terms that protect both you and us. No confusing legal jargon, 
            just straightforward agreements.
          </p>

          <Card className="p-6 bg-blue-50 border-blue-200 text-left">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Our Commitment</h3>
                  <p className="text-blue-800">
                    These terms are designed to be fair and protect your rights. We believe in 
                    transparency and will always give you clear notice of any changes.
                  </p>
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
              <strong>Last Updated:</strong> December 28, 2024 | 
              <strong> Effective Date:</strong> December 28, 2024
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
                  <a href="#agreement" className="block text-purple-600 hover:text-purple-700">1. Agreement to Terms</a>
                  <a href="#services" className="block text-purple-600 hover:text-purple-700">2. Our Services</a>
                  <a href="#accounts" className="block text-purple-600 hover:text-purple-700">3. User Accounts</a>
                  <a href="#acceptable-use" className="block text-purple-600 hover:text-purple-700">4. Acceptable Use</a>
                  <a href="#billing" className="block text-purple-600 hover:text-purple-700">5. Billing & Payments</a>
                  <a href="#cancellation" className="block text-purple-600 hover:text-purple-700">6. Cancellation & Refunds</a>
                </div>
                <div className="space-y-2">
                  <a href="#intellectual-property" className="block text-purple-600 hover:text-purple-700">7. Intellectual Property</a>
                  <a href="#liability" className="block text-purple-600 hover:text-purple-700">8. Liability & Disclaimers</a>
                  <a href="#termination" className="block text-purple-600 hover:text-purple-700">9. Termination</a>
                  <a href="#governing-law" className="block text-purple-600 hover:text-purple-700">10. Governing Law</a>
                  <a href="#changes" className="block text-purple-600 hover:text-purple-700">11. Changes to Terms</a>
                  <a href="#contact" className="block text-purple-600 hover:text-purple-700">12. Contact Information</a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-12">

            {/* Agreement to Terms */}
            <section id="agreement">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Welcome to Privly Me! These Terms of Service ("Terms") govern your use of our 
                  privacy protection platform and services. By creating an account or using our 
                  services, you agree to be bound by these Terms.
                </p>
                <p>
                  If you don't agree with any part of these Terms, please don't use our services. 
                  These Terms apply to all users, including free and paid subscribers.
                </p>
              </div>
            </section>

            {/* Our Services */}
            <section id="services">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Our Services</h2>
              
              <Card className="p-6 mb-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Provide</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Scam Watch ($5.99)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Real-time AI scam detection</li>
                        <li>• WhatsApp expert analysis</li>
                        <li>• Email scam checking</li>
                        <li>• QR code and image analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Personal ($9.99)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Dark web monitoring</li>
                        <li>• Data breach alerts</li>
                        <li>• Unlimited data removals</li>
                        <li>• Personal risk dashboard</li>
                        <li>• 24/7 Australian support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Professional ($39.99)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Deep web monitoring</li>
                        <li>• Professional data removal (50/month)</li>
                        <li>• Content theft detection</li>
                        <li>• AI deepfake monitoring</li>
                        <li>• Reputation monitoring & protection</li>
                        <li>• Named privacy concierge</li>
                        <li>• Monthly video consultations</li>
                        <li>• Legal referral network</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-yellow-50 border-yellow-200">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Service Limitations
                  </h3>
                  <ul className="text-yellow-800 space-y-2">
                    <li>• We monitor publicly available information across 72,000+ websites and cannot access private databases</li>
                    <li>• We cannot guarantee removal of all instances of your information from 1,000+ data brokers online</li>
                    <li>• Third-party compliance with removal requests is beyond our control</li>
                    <li>• Some monitoring services depend on third-party APIs and dark web scanning tools</li>
                    <li>• Scam detection accuracy depends on AI model capabilities and ongoing training</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* User Accounts */}
            <section id="accounts">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Accounts</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Account Requirements</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• You must be at least 18 years old to create an account</li>
                      <li>• You must provide accurate and complete information</li>
                      <li>• You are responsible for keeping your login credentials secure</li>
                      <li>• One person may maintain only one account</li>
                      <li>• You must notify us immediately of any unauthorized access</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Account Security</h3>
                    <p className="text-gray-700 mb-3">
                      You are solely responsible for maintaining the security of your account and 
                      all activities that occur under your account. We recommend:
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Using a strong, unique password</li>
                      <li>• Enabling two-factor authentication</li>
                      <li>• Regularly reviewing your account activity</li>
                      <li>• Logging out from shared devices</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Acceptable Use */}
            <section id="acceptable-use">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Acceptable Use</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-green-50 border-green-200">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      You May
                    </h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Use our services to protect your own privacy</li>
                      <li>• Monitor information about yourself</li>
                      <li>• Request removal of your own data</li>
                      <li>• Share our service with friends and family</li>
                      <li>• Provide feedback and suggestions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-red-50 border-red-200">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      You May Not
                    </h3>
                    <ul className="text-red-800 space-y-2">
                      <li>• Monitor or request removal of others' information without consent</li>
                      <li>• Use our services for illegal activities</li>
                      <li>• Attempt to hack, disrupt, or abuse our systems</li>
                      <li>• Share your account credentials with others</li>
                      <li>• Use automated tools to access our services</li>
                      <li>• Violate any applicable laws or regulations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-6 mt-6 border-2 border-orange-200 bg-orange-50">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">Enforcement</h3>
                  <p className="text-orange-800">
                    Violation of these acceptable use terms may result in suspension or termination 
                    of your account. We reserve the right to investigate suspected violations and 
                    cooperate with law enforcement when necessary.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Billing & Payments */}
            <section id="billing">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Billing & Payments</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
                      Subscription Plans
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">Scam Watch</h4>
                        <p className="text-2xl font-bold text-gray-900">$5.99</p>
                        <p className="text-sm text-gray-600">per month</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">Personal</h4>
                        <p className="text-2xl font-bold text-gray-900">$9.99</p>
                        <p className="text-sm text-gray-600">per month</p>
                      </div>
                      <div className="p-4 bg-pink-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900">Professional</h4>
                        <p className="text-2xl font-bold text-gray-900">$39.99</p>
                        <p className="text-sm text-gray-600">per month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Billing Terms</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Subscriptions are billed monthly in advance</li>
                      <li>• All fees are in USD and non-refundable except as stated in our refund policy</li>
                      <li>• We use Stripe and PayPal for secure payment processing</li>
                      <li>• You authorize us to charge your payment method automatically</li>
                      <li>• Prices may change with 30 days' notice to existing subscribers</li>
                      <li>• Failed payments may result in service suspension after 7 days</li>
                      <li>• Annual billing discounts available (contact support for details)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Scam Watch: Instant AI analysis, human expert response within 2-4 hours</li>
                      <li>• Personal: Dark web monitoring updated daily, breach alerts within 24 hours</li>
                      <li>• Professional: Monthly video consultations scheduled in advance</li>
                      <li>• Data removal processing: 30-90 days depending on data broker compliance</li>
                      <li>• All services included in subscription pricing - no additional charges</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Cancellation & Refunds */}
            <section id="cancellation">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cancellation & Refunds</h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-green-50 border-green-200">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                      <RefreshCw className="w-5 h-5 mr-2" />
                      30-Day Money-Back Guarantee
                    </h3>
                    <p className="text-green-800 mb-4">
                      We offer a 30-day money-back guarantee for new subscribers. If you're not 
                      satisfied with our service, contact us within 30 days of your first payment 
                      for a full refund.
                    </p>
                    <div className="text-sm text-green-700">
                      <p><strong>Refund Process:</strong></p>
                      <ul className="mt-2 space-y-1">
                        <li>• Contact support within 30 days</li>
                        <li>• Refunds processed within 5-10 business days</li>
                        <li>• Account access continues until end of billing period</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <UserX className="w-5 h-5 text-blue-600 mr-2" />
                      Cancellation Policy
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• You can cancel your subscription anytime from your account settings</li>
                      <li>• Cancellation takes effect at the end of your current billing period</li>
                      <li>• You retain access to paid features until the end of the billing period</li>
                      <li>• No refunds for partial months (except 30-day guarantee)</li>
                      <li>• Your data is retained for 30 days after cancellation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Intellectual Property</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Our Rights</h3>
                    <p className="text-gray-700 mb-3">
                      The Privly Me platform, including all software, designs, text, graphics, and 
                      other content, is owned by us and protected by intellectual property laws. 
                      You may not copy, modify, or distribute our content without permission.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Your Rights</h3>
                    <p className="text-gray-700 mb-3">
                      You retain ownership of any personal information you provide to us. By using 
                      our services, you grant us a limited license to use this information solely 
                      to provide our privacy protection services.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Feedback</h3>
                    <p className="text-gray-700">
                      Any feedback, suggestions, or ideas you provide to us become our property 
                      and may be used to improve our services without compensation to you.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Liability & Disclaimers */}
            <section id="liability">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Liability & Disclaimers</h2>
              
              <Card className="p-6 bg-yellow-50 border-yellow-200">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Service Disclaimers
                  </h3>
                  <div className="text-yellow-800 space-y-3">
                    <p>
                      <strong>No Guarantee of Results:</strong> While we work diligently to protect 
                      your privacy, we cannot guarantee that all instances of your information will 
                      be found or removed from the internet.
                    </p>
                    <p>
                      <strong>Third-Party Dependencies:</strong> Our services rely on third-party 
                      APIs, databases, and cooperation from other websites. We are not responsible 
                      for their availability or compliance.
                    </p>
                    <p>
                      <strong>Service Availability:</strong> We strive for 99.9% uptime but cannot 
                      guarantee uninterrupted service due to maintenance, technical issues, or 
                      factors beyond our control.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 mt-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                  <p className="text-gray-700 mb-3">
                    To the maximum extent permitted by law, our total liability to you for any 
                    claims arising from these Terms or our services is limited to the amount you 
                    paid us in the 12 months preceding the claim.
                  </p>
                  <p className="text-gray-700">
                    We are not liable for indirect, incidental, special, or consequential damages, 
                    including lost profits, data loss, or business interruption.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Termination */}
            <section id="termination">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Termination by You</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Cancel anytime from account settings</li>
                      <li>• Access continues until end of billing period</li>
                      <li>• Data deleted 30 days after cancellation</li>
                      <li>• Export your data before cancellation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Termination by Us</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• For violation of these Terms</li>
                      <li>• For illegal or harmful activities</li>
                      <li>• For non-payment of fees</li>
                      <li>• With 30 days' notice for convenience</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-blue-900 mb-3">Effect of Termination</h3>
                  <p className="text-blue-800">
                    Upon termination, your right to use our services ceases immediately. We will 
                    retain your data for 30 days to allow for account reactivation, after which 
                    it will be permanently deleted unless legally required to retain it.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Governing Law */}
            <section id="governing-law">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <Gavel className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Jurisdiction and Law</h3>
                      <p className="text-gray-700 mb-4">
                        These Terms are governed by the laws of Australia without regard to 
                        conflict of law principles. Any disputes will be resolved in the courts 
                        of Australia.
                      </p>
                      <p className="text-gray-700">
                        <strong>Dispute Resolution:</strong> We encourage resolving disputes through 
                        direct communication. If that fails, disputes may be resolved through binding 
                        arbitration as an alternative to court proceedings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Changes to Terms */}
            <section id="changes">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
              
              <Card className="p-6 bg-purple-50 border-purple-200">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">How We Update These Terms</h3>
                  <div className="text-purple-800 space-y-3">
                    <p>
                      We may update these Terms from time to time to reflect changes in our services, 
                      legal requirements, or business practices.
                    </p>
                    <p><strong>We will notify you by:</strong></p>
                    <ul className="space-y-1">
                      <li>• Email notification to your account</li>
                      <li>• Notice on our website and platform</li>
                      <li>• In-app notification for material changes</li>
                    </ul>
                    <p>
                      <strong>Continued use of our services after changes constitutes acceptance 
                      of the new Terms.</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
              
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Questions About These Terms?
                  </h3>
                  <div className="space-y-3">
                    <p className="text-blue-800">
                      If you have questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Legal Team:</strong> legal@useprivly.com</p>
                      <p><strong>General Support:</strong> support@useprivly.com</p>
                      <p><strong>Billing Questions:</strong> billing@useprivly.com</p>
                      <p><strong>Scam Analysis:</strong> scamcheck@useprivly.com</p>
                      <p><strong>Mailing Address:</strong> Privly Me, Legal Department, Australia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Severability */}
            <section>
              <Card className="p-6 border-2 border-gray-200">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Severability</h3>
                  <p className="text-gray-700">
                    If any part of these Terms is found to be unenforceable, the remaining portions 
                    will remain in full force and effect. We will replace any unenforceable provision 
                    with a valid provision that most closely matches the intent of the original.
                  </p>
                </CardContent>
              </Card>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
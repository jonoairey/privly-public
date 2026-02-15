import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description: 'Learn how Privly handles your data and protects your privacy.',
  keywords: ['privacy policy', 'data protection', 'privacy', 'GDPR'],
  noindex: true,
});

export default function PrivacyPage() {
  const lastUpdated = 'February 2024';

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="flex-grow">
        {/* Header */}
        <section className="py-12 px-4 border-b border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                At Privly, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our service, including our website, mobile applications,
                and related services (collectively, the "Service").
              </p>
            </div>

            {/* What We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4">What Information Do We Collect?</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-purple-300 mb-2">Account Information</h3>
                  <p>When you create a Privly account, we collect your name, email address, password, and profile information.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300 mb-2">Content Information</h3>
                  <p>
                    To provide our leak detection services, we collect information about your content, including platform usernames,
                    links to your content, and metadata about your earnings or subscriber count.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300 mb-2">Payment Information</h3>
                  <p>
                    Payment details are processed by Stripe. We do not directly store your credit card information. We only store
                    transaction history and billing information necessary to manage your subscription.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-300 mb-2">Usage Data</h3>
                  <p>
                    We collect information about how you use the Service, including log data, IP addresses, device information,
                    and pages visited.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">How Do We Use Your Information?</h2>
              <div className="space-y-2 text-gray-300">
                <p>We use the information we collect for:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex gap-3">
                    <span className="text-purple-400">→</span>
                    <span>Providing and maintaining the Service</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">→</span>
                    <span>Detecting and monitoring leaks of your content</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">→</span>
                    <span>Generating and submitting DMCA takedowns</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">→</span>
                    <span>Processing payments and managing subscriptions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">→</span>
                    <span>Sending service updates and support communications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">→</span>
                    <span>Improving and optimizing the Service</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400">→</span>
                    <span>Complying with legal obligations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We use administrative, technical, and physical security measures to protect your information against unauthorized
                access, alteration, disclosure, or destruction. Your data is encrypted both in transit (using TLS/SSL) and at rest
                using AES-256 encryption. However, no method of transmission over the internet or electronic storage is 100% secure,
                so we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to provide the Service and fulfill the purposes outlined
                in this Privacy Policy. You can request deletion of your account and associated data at any time. Some information may
                be retained for legal compliance or fraud prevention.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <div className="space-y-3 text-gray-300">
                <p className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Right of Access:</strong> You can request a copy of your personal information</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Right to Correction:</strong> You can update or correct inaccurate information</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Right to Deletion:</strong> You can request deletion of your data</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Right to Portability:</strong> You can request your data in a portable format</span>
                </p>
                <p className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span><strong>Right to Opt-Out:</strong> You can opt-out of marketing communications</span>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar technologies to enhance your experience with the Service. These include session cookies
                (which expire when you close your browser) and persistent cookies (which remain on your device). You can control
                cookie settings through your browser preferences.
              </p>
            </div>

            {/* Third-Party Sharing */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Third-Party Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell your personal information. We only share information with third parties in the following circumstances:
              </p>
              <ul className="space-y-2 ml-4 text-gray-300 mt-4">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Service providers who assist us in operating the Service (hosting, analytics, payment processing)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>When required by law or to protect our rights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>In the event of a merger, acquisition, or sale of assets</span>
                </li>
              </ul>
            </div>

            {/* GDPR */}
            <div>
              <h2 className="text-2xl font-bold mb-4">GDPR Compliance</h2>
              <p className="text-gray-300 leading-relaxed">
                If you are located in the European Union, you have rights under the General Data Protection Regulation (GDPR).
                We process your data only when we have a legal basis to do so, such as your consent or our legitimate business interests.
                You have the right to lodge a complaint with your local data protection authority.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 bg-gray-900 rounded-lg p-6 border border-purple-500/20">
                <p className="text-gray-300">
                  <strong>Email:</strong> hello@useprivly.com
                </p>
                <p className="text-gray-300 mt-2">
                  We will respond to privacy requests within 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

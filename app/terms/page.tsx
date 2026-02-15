import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = genMeta({
  title: 'Terms of Service',
  description: 'Read the Terms of Service for Privly.',
  keywords: ['terms of service', 'terms', 'conditions'],
  noindex: true,
});

export default function TermsPage() {
  const lastUpdated = 'February 2024';

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="flex-grow">
        {/* Header */}
        <section className="py-12 px-4 border-b border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* 1. Acceptance */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the Privly service (the "Service"), you accept and agree to be bound by the terms and provision
                of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to
                update and change these terms at any time. Your continued use of the Service following any such update constitutes your
                acceptance of the modified terms.
              </p>
            </div>

            {/* 2. Service Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Privly provides automated content protection services, including:
              </p>
              <ul className="space-y-2 ml-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Monitoring of leak platforms and detection of unauthorized content distribution</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Automated generation and submission of DMCA takedown notices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>AI-based deepfake and impersonation detection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Real-time notifications and status tracking</span>
                </li>
              </ul>
            </div>

            {/* 3. Accounts and Registration */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Accounts and Registration</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To use Privly, you must create an account and provide accurate, complete, and current information.
                You agree to:
              </p>
              <ul className="space-y-2 ml-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Maintain the confidentiality of your password and account information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Take full responsibility for all activities under your account</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Notify us immediately of any unauthorized use of your account</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Ensure you are at least 18 years old and legally able to enter into contracts</span>
                </li>
              </ul>
            </div>

            {/* 4. Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Payment and Billing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Service requires a paid subscription. Payment is processed monthly or according to your selected billing cycle.
              </p>
              <ul className="space-y-2 ml-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>We offer a 30-day money-back guarantee if you are not satisfied</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Your subscription will automatically renew unless you cancel before the renewal date</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>We offer a 30-day money-back guarantee if you're not satisfied</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Refunds will be issued to the original payment method</span>
                </li>
              </ul>
            </div>

            {/* 5. Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Service and all content, including text, graphics, logos, software, and other materials, are the property of
                Privly or its content suppliers and are protected by international copyright laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You retain all rights to your content. By using our Service, you grant us a limited license to use your content
                solely for the purpose of providing the leak detection and takedown services.
              </p>
            </div>

            {/* 6. Acceptable Use */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Acceptable Use Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use the Service in any manner that:
              </p>
              <ul className="space-y-2 ml-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Violates applicable laws or regulations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Infringes on the rights of others</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Attempts to gain unauthorized access to our systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Uses the Service to harass, abuse, or harm others</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Transmits viruses or malicious code</span>
                </li>
              </ul>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, PRIVLY SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="space-y-2 ml-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Any indirect, incidental, special, consequential, or punitive damages</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Loss of profits, revenue, data, or use</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Errors, omissions, or delays in the Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>Content unavailable or inaccurate in leak reporting</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                The Service is provided "as is" without warranties of any kind. We do not guarantee that all leaks will be detected
                or that all takedowns will be successful.
              </p>
            </div>

            {/* 8. Indemnification */}
            <div>
              <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Privly and its officers, directors, employees, and agents from
                any claims, damages, or costs arising from your use of the Service or violation of these Terms, including but not
                limited to any false DMCA claims you may submit through our platform.
              </p>
            </div>

            {/* 9. Termination */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can terminate your subscription at any time. We may suspend or terminate your access if:
              </p>
              <ul className="space-y-2 ml-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>You violate these Terms of Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>You engage in fraudulent or illegal activity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400">→</span>
                  <span>You fail to pay subscription fees</span>
                </li>
              </ul>
            </div>

            {/* 10. Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of Australia,
                and you irrevocably submit to the exclusive jurisdiction of the courts located in Australia.
              </p>
            </div>

            {/* 11. Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 border border-purple-500/20">
                <p className="text-gray-300">
                  <strong>Email:</strong> hello@useprivly.com
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

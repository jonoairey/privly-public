import Header from '@/components/header';
import Footer from '@/components/footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { APP_URL, COPYRIGHT_ADDON } from '@/lib/constants';
import {
  Fingerprint,
  Target,
  Lock,
  Zap,
  Scale,
  AlertCircle,
  CheckCircle,
  Check,
  X,
  ArrowRight,
  HeadphonesIcon,
  Radio,
  Copyright,
} from 'lucide-react';

export const metadata = genMeta({
  title: 'Features - Privly',
  description: "Discover Privly's advanced content protection features: forensic watermarking, leak source tracing, 24/7 leak scanning, and more.",
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Hero — compact with feature highlights */}
      <section className="relative w-full pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            The Only Protection That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Finds Your Leakers</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Forensic watermarking + proactive monitoring + automated DMCA takedowns. Protect your work. Identify leakers. Reclaim control.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <p className="text-sm text-gray-500 mt-3">7-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* Two Hero Features — watermarking + leak tracing */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Forensic Watermarking */}
          <div className="rounded-xl p-7 border border-gray-800 bg-gray-900/50">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <Fingerprint className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Invisible Forensic Watermarking</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Embed unique identifiers in every piece of content you share. Our watermarks survive compression, format conversion, and editing. Completely invisible to the human eye.
            </p>
            <div className="space-y-3">
              {['Per-subscriber encoding', 'Survives all editing & compression', 'Zero quality loss, undetectable'].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leak Source Tracing */}
          <div className="rounded-xl p-7 border border-gray-800 bg-gray-900/50">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Leak Source Tracing</h2>
            </div>
            <p className="text-gray-300 mb-6">
              When your content appears where it shouldn't, instantly identify which subscriber leaked it. Get actionable intelligence to stop bad actors.
            </p>
            <div className="space-y-3">
              {['Know exactly who leaked your content', 'Track patterns and repeat offenders', 'One-click access revocation'].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Feature Grid */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Complete Protection Suite</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Lock,
                title: 'Content Vault',
                description: 'Timestamped proof of ownership for all your content. Establish irrefutable evidence of creation date and authorship.',
                bullets: ['AES-256 encrypted storage', 'Legal admissibility documentation'],
              },
              {
                icon: Zap,
                title: '24/7 Leak Scanning',
                description: 'Continuous monitoring across 500+ platforms using AI-powered matching. Spot unauthorized copies instantly.',
                bullets: ['Real-time leak detection alerts', 'AI similarity matching engine'],
              },
              {
                icon: Scale,
                title: 'DMCA Automation',
                description: 'Automated takedown notices filed on your behalf. We handle the legal side, generating and submitting DMCA claims instantly.',
                bullets: ['Auto-filed DMCA takedowns', 'High removal success rate'],
              },
              {
                icon: AlertCircle,
                title: 'Impersonation & AI Detection',
                description: 'Detect fake accounts, AI-generated content, and unauthorized use of your likeness across the web.',
                bullets: ['AI-generated content detection', 'Impersonation monitoring'],
              },
              {
                icon: Radio,
                title: 'Proactive Monitoring',
                description: "We don't just wait for leaks. Every 30 minutes, we scan known Telegram channels, Discord servers, and Reddit communities.",
                bullets: ['Telegram, Discord & Reddit monitoring', 'Scans every 30 minutes'],
              },
              {
                icon: Copyright,
                title: 'Copyright Registration',
                description: `Strengthen your legal standing with a formal US Copyright Office registration. Document prep for ${COPYRIGHT_ADDON.price}.`,
                bullets: ['Complete document preparation', 'Ready within 24 hours'],
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="rounded-xl p-6 border border-gray-800 bg-gray-900/50 hover:border-purple-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Human Support — full width */}
            <div className="md:col-span-2 rounded-xl p-6 border border-gray-800 bg-gray-900/50 hover:border-purple-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dedicated Human Support</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Real people, not chatbots. Our support team handles everything from account setup to complex takedown situations. Priority response within 24 hours.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" /> Real human support
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" /> Priority email response
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Privly vs The Competition</h2>
          <p className="text-center text-gray-400 mb-10">See how we stack up against other content protection services.</p>

          <div className="rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-800 bg-gray-900/50">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-semibold text-gray-400">Feature</th>
                    <th className="px-5 py-4 text-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">Privly</span>
                      <span className="block text-xs text-gray-500 font-normal mt-0.5">$49/mo</span>
                    </th>
                    <th className="px-5 py-4 text-center text-sm font-semibold text-gray-500">
                      <span>Others</span>
                      <span className="block text-xs text-gray-600 font-normal mt-0.5">$109-$324/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/50">
                  {[
                    { feature: 'Forensic Watermarking', privly: true, others: false },
                    { feature: 'Leak Source Tracing', privly: true, others: false },
                    { feature: '24/7 Leak Scanning', privly: true, others: true },
                    { feature: 'DMCA Takedowns', privly: true, others: true },
                    { feature: 'Proactive Channel Monitoring', privly: true, others: false },
                    { feature: 'Copyright Registration', privly: true, others: false },
                    { feature: 'Impersonation & AI Detection', privly: true, others: false },
                    { feature: 'Content Vault', privly: true, others: false },
                    { feature: 'Dedicated Human Support', privly: true, others: false },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-900/30 transition-colors">
                      <td className="px-5 py-3 text-sm font-medium">{row.feature}</td>
                      <td className="px-5 py-3 text-center">
                        <Check className="w-5 h-5 mx-auto text-green-400" />
                      </td>
                      <td className="px-5 py-3 text-center">
                        {row.others ? (
                          <Check className="w-5 h-5 mx-auto text-gray-600" />
                        ) : (
                          <X className="w-5 h-5 mx-auto text-gray-700" />
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-900/30">
                    <td className="px-5 py-3 text-sm font-bold">Starting Price</td>
                    <td className="px-5 py-3 text-center">
                      <span className="text-green-400 font-bold">$49/mo</span>
                    </td>
                    <td className="px-5 py-3 text-center">
                      <span className="text-gray-500 font-bold">$109-$324/mo</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 mt-4">
            * Pricing as of February 2026. Features and pricing subject to change.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-black to-black" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Take Back Control of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Your Content</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Full protection for your content. Try it free for 7 days — no credit card required.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-gray-500 text-sm mt-4">7-day free trial. No credit card required. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

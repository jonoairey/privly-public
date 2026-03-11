import Header from '@/components/header';
import Footer from '@/components/footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { PLAN, COPYRIGHT_ADDON, APP_URL } from '@/lib/constants';
import { generateProductSchema, generateFAQSchema } from '@/lib/seo';
import RoiCalculator from '@/components/roi-calculator';
import { CheckCircle, ArrowRight, Copyright } from 'lucide-react';

export const metadata = genMeta({
  title: 'Pricing',
  description: 'Privly pricing: $49/month for forensic watermarking, leak source tracing, proactive monitoring, content protection, and dedicated human support. Plus $199 copyright registration add-on.',
  path: '/pricing',
});

export default function PricingPage() {
  const faqItems = [
    {
      q: 'Why one plan?',
      a: "Full protection shouldn't depend on your income bracket. Whether you're just starting or earning six figures, you deserve the same tools to protect your content.",
    },
    {
      q: 'How is $49/mo possible when competitors charge $109+?',
      a: 'We built smart automation. No per-username surcharges. No hidden tiers. One price covers everything: all platforms, all your content, all the protection you need. Plus dedicated human support.',
    },
    {
      q: 'What about the $199 copyright registration?',
      a: "That's an optional one-time add-on. Your $49/month subscription gives you full protection. The copyright registration add-on prepares all documents for the US Copyright Office, strengthening your legal standing.",
    },
    {
      q: 'Can I cancel anytime?',
      a: "Yes. No contracts, no fine print. Cancel anytime. We offer a 30-day money-back guarantee — if you're not satisfied, full refund, no questions asked.",
    },
  ];

  const productSchema = generateProductSchema({
    name: 'Privly Creator Protection',
    description: 'Content protection for creators: forensic watermarking, leak scanning, DMCA automation, and dedicated human support.',
    price: '49',
    url: 'https://www.useprivly.com/pricing',
  });

  const pricingFaqSchema = generateFAQSchema(
    faqItems.map(f => ({ question: f.q, answer: f.a }))
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      <Header />

      <main className="pt-28 pb-0">
        {/* Hero — compact with price front and center */}
        <section className="relative w-full pb-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              One plan. Full protection.
            </h1>
            <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              {PLAN.price}/month
            </div>
            <p className="text-lg text-gray-300 mb-2 max-w-2xl mx-auto">
              Other services charge $109-$324/month just to scan and remove. Privly gives you that plus forensic watermarking, leak source tracing, and dedicated human support.
            </p>
          </div>
        </section>

        {/* Pricing Card + Copyright Add-On side by side on desktop */}
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            {/* Main Pricing Card — takes 2 cols */}
            <div className="lg:col-span-2 relative bg-gray-900/50 rounded-xl p-8 sm:p-10 border border-purple-500/20">
              <div className="absolute -top-3 left-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-xs font-semibold text-white">
                  7-DAY FREE TRIAL
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3">{PLAN.name}</h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">{PLAN.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-400">After 7-day free trial. Cancel anytime.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                {PLAN.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 py-1.5">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${idx < 2 ? 'text-purple-400' : 'text-green-400'}`} />
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-300">{feature}</span>
                      {idx < 2 && (
                        <span className="text-[10px] font-bold text-purple-300 bg-purple-600/30 border border-purple-400/40 px-1.5 py-0.5 rounded">
                          EXCLUSIVE
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="mb-6 p-4 bg-purple-600/10 border border-purple-500/20 rounded-lg">
                <p className="text-sm text-white font-semibold">30-Day Money-Back Guarantee</p>
                <p className="text-xs text-gray-400">Not satisfied? Full refund within 30 days. No questions asked.</p>
              </div>

              <a
                href={`${APP_URL}/auth/signup`}
                className="w-full block text-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Start Free Trial <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Copyright Add-On — takes 1 col */}
            <div className="rounded-xl p-7 border border-gray-800 bg-gray-900/50 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Copyright className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30 px-2 py-0.5 rounded">ADD-ON</span>
                  <h3 className="text-lg font-bold mt-1">Copyright Registration</h3>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-white">{COPYRIGHT_ADDON.price}</span>
                <span className="text-sm text-gray-500">one-time</span>
              </div>

              <p className="text-sm text-gray-400 mb-5 flex-1">
                We prepare all documents for the US Copyright Office — application forms, cover letters, and filing instructions. Strengthens DMCA enforcement and enables statutory damages.
              </p>

              <div className="space-y-2">
                {['Complete eCO application data', 'Professional cover letter', 'Step-by-step filing guide', 'Ready within 24 hours'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Comparison — streamlined */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Privly</span> is Different
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Typical Service */}
              <div className="rounded-xl p-6 border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-bold mb-5 text-gray-400">Typical Service</h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li>$109-$324/mo</li>
                  <li>Scan + Remove only</li>
                  <li>Leaks keep coming back</li>
                  <li>Per-username pricing</li>
                  <li>No source tracing</li>
                </ul>
              </div>

              {/* Privly */}
              <div className="rounded-xl p-6 border border-purple-500/30 bg-purple-950/10 relative">
                <div className="absolute -top-2.5 left-5">
                  <span className="text-[10px] font-bold text-purple-300 bg-purple-600/30 border border-purple-500/40 px-3 py-1 rounded-full uppercase tracking-wider">Privly</span>
                </div>
                <h3 className="text-lg font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-2">Full Protection</h3>
                <ul className="space-y-3 text-sm">
                  {['$49/mo — everything included', 'Scan + Remove + Source Tracing', 'Telegram, Discord & Reddit monitoring', 'Leaks decrease permanently', 'Copyright Registration add-on', 'Dedicated human support'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DIY */}
              <div className="rounded-xl p-6 border border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-bold mb-5 text-gray-400">DIY Approach</h3>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li>Free (your time isn't)</li>
                  <li>Manual Google searches</li>
                  <li>Hours of your time weekly</li>
                  <li>No enforcement tools</li>
                  <li>No support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ROI</span>
            </h2>
            <RoiCalculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Common Questions</h2>

            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
                  <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{item.q}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-black to-black" />

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-5">
              Start protecting your content today.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Full protection for your content. Try it free for 7 days.
            </p>
            <a
              href={`${APP_URL}/auth/signup`}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <p className="text-gray-500 text-sm mt-4">7-day free trial. No credit card required. Cancel anytime.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

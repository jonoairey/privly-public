import Header from '@/components/header';
import Footer from '@/components/footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { PLAN, APP_URL } from '@/lib/constants';
import { generateProductSchema, generateFAQSchema } from '@/lib/seo';
import RoiCalculator from '@/components/roi-calculator';
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata = genMeta({
  title: 'Pricing',
  description: 'Privly pricing: $49/month for forensic watermarking, leak source tracing, content protection, and dedicated human support. Compare with competitors charging $109-$324/month.',
  path: '/pricing',
});

export default function PricingPage() {
  const faqItems = [
    {
      q: 'Why one plan?',
      a: "Full protection shouldn't depend on your income bracket. Whether you're just starting or earning six figures, you deserve the same tools to protect your content.",
    },
    {
      q: 'How is "$49/mo" possible when competitors charge "$109+"?',
      a: 'We built smart automation. No per-username surcharges. No hidden tiers. One price covers everything: all platforms, all your content, all the protection you need. Plus you get dedicated human support whenever you need it.',
    },
    {
      q: 'Can I cancel anytime?',
      a: "Yes. No contracts, no fine print. You can cancel anytime, and we offer a 30-day money-back guarantee. If you're not satisfied, you get a full refund. No questions asked.",
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

      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="hero-gradient relative min-h-96 flex items-center justify-center overflow-hidden py-20">
          <div className="absolute -top-20 -right-20 w-96 h-96 orb orb-purple opacity-40" />
          <div className="absolute bottom-0 -left-32 w-72 h-72 orb orb-pink opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              One plan. Full protection.
            </h1>
            <div className="text-5xl md:text-6xl font-black text-gradient mb-6">
              {PLAN.price}/month
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
              Other services charge $109-$324/month just to scan and remove. Privly gives you that plus forensic watermarking, leak source tracing, and dedicated human support.
            </p>
          </div>
        </section>

        {/* Main Pricing Card */}
        <section className="relative py-24 px-6 bg-black">
          <div className="max-w-2xl mx-auto">
            <div className="border-gradient-animated glow-card relative rounded-3xl p-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10">
              <div className="absolute top-6 right-6">
                <div className="pulse-badge px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/40">
                  <span className="text-sm font-bold text-purple-300">BEST VALUE</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black mb-6">{PLAN.name}</h2>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl md:text-7xl font-black text-gradient">
                    {PLAN.price}
                  </span>
                  <span className="text-xl text-gray-400">/month</span>
                </div>
                <p className="text-lg text-gray-300">30-day money-back guarantee. Cancel anytime.</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-12">
                {PLAN.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className={`w-6 h-6 ${index < 2 ? 'text-purple-400' : 'text-green-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="text-gray-200 text-base">{feature}</p>
                        {index < 2 && (
                          <span className="inline-block px-2 py-1 bg-purple-600/40 border border-purple-400/60 text-xs font-bold rounded text-purple-300">
                            EXCLUSIVE
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="mb-10 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                <p className="text-base text-white font-semibold mb-1">30-Day Money-Back Guarantee</p>
                <p className="text-sm text-gray-300 leading-relaxed">Not satisfied? Get a full refund within 30 days, no questions asked. Cancel anytime with zero hassle.</p>
              </div>

              {/* CTA Button */}
              <a
                href={`${APP_URL}/auth/signup`}
                className="btn-glow w-full inline-block text-center py-4 px-8 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all text-lg"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <section className="relative py-24 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Why <span className="text-gradient">Privly</span> is Different
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Typical Service */}
              <div className="glass rounded-2xl p-10 border border-white/10 bg-gray-900/50">
                <h3 className="text-2xl font-black mb-8 text-gray-300">Typical Service</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">$109-$324/mo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">Scan + Remove only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">Leaks keep coming back</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">Per-username pricing</span>
                  </li>
                </ul>
              </div>

              {/* Privly - Center and Elevated */}
              <div className="glow-card relative rounded-2xl border-gradient-animated lg:scale-105 lg:z-10">
                <div className="glass rounded-2xl p-10 border border-purple-500/40 bg-gradient-to-br from-purple-950/40 to-pink-950/40">
                  <div className="mb-8">
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/30 border border-purple-400/50 mb-6">
                      <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Privly</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-8 text-gradient">Full Protection</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white font-bold text-lg">$49/mo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white font-bold text-lg">Scan + Remove + Source Tracing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white font-bold text-lg">Leaks Decrease Permanently</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white font-bold text-lg">All Platforms Included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-white font-bold text-lg">Dedicated Human Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* DIY Approach */}
              <div className="glass rounded-2xl p-10 border border-white/10 bg-gray-900/50">
                <h3 className="text-2xl font-black mb-8 text-gray-300">DIY Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">Free</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">Manual Google Searches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">Hours of Your Time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 text-2xl leading-none mt-1">•</span>
                    <span className="text-gray-400 text-lg">No Human Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="hero-gradient relative py-24 px-6 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 orb orb-purple opacity-30" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 orb orb-pink opacity-20" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Calculate Your <span className="text-gradient">ROI</span>
            </h2>
            <RoiCalculator />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 px-6 bg-black">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <div key={i} className="glass rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-white/5 to-white/0">
                  <h3 className="text-xl font-black mb-4 text-gradient">{item.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="hero-gradient relative min-h-80 flex items-center justify-center overflow-hidden py-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 orb orb-purple opacity-40" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 orb orb-pink opacity-30" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Start protecting your content today.
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
              Join thousands of creators who trust Privly to stop leaks.
            </p>
            <a
              href={`${APP_URL}/auth/signup`}
              className="btn-glow px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500 font-bold transition-all inline-flex items-center justify-center gap-3 text-lg"
            >
              Get Started Now
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-gray-400 text-sm mt-4">30-day money-back guarantee. Cancel anytime.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

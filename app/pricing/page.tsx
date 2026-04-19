import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { PLAN, COPYRIGHT_ADDON, APP_URL } from '@/lib/constants';
import { generateProductSchema, generateFAQSchema } from '@/lib/seo';
import RoiCalculator from '@/components/roi-calculator';
import { CheckCircle, XCircle, ArrowRight, Copyright, Zap, Shield } from 'lucide-react';

export const metadata = genMeta({
  title: 'OnlyFans Leak Protection Pricing — $49/mo Creator Plan',
  description: "Privly pricing: free 7-day trial, then $49/month for unlimited DMCA takedowns, leak scanning, forensic watermarking, Telegram/Discord monitoring and source tracing. No per-takedown fees.",
  path: '/pricing',
});

const TRIAL_FEATURES = [
  { name: 'Forensic watermarking', trial: 'Up to 3 files', pro: true },
  { name: 'Content Vault', trial: 'Up to 3 uploads', pro: true },
  { name: 'Leak scanning', trial: '1 scan', pro: true },
  { name: 'Deepfake detection', trial: true, pro: true },
  { name: 'Real-time email alerts', trial: true, pro: true },
  { name: 'Leak source tracing', trial: true, pro: true },
  { name: 'DMCA takedown filing', trial: false, pro: true },
  { name: 'Anonymous DMCA filing', trial: false, pro: true },
  { name: 'Google de-indexing', trial: false, pro: true },
  { name: 'Telegram & Discord monitoring', trial: false, pro: true },
  { name: 'Unlimited leak scans', trial: false, pro: true },
  { name: 'Unlimited vault uploads', trial: false, pro: true },
  { name: 'Copyright registration add-on', trial: false, pro: true },
  { name: 'Monthly protection reports', trial: false, pro: true },
  { name: 'Dedicated human support', trial: false, pro: true },
];

function FeatureCheck({ value }: { value: boolean | string }) {
  if (value === false) {
    return <XCircle className="w-4 h-4 text-[var(--mute)] flex-shrink-0" />;
  }
  if (value === true) {
    return <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />;
  }
  return (
    <span className="text-xs text-yellow-600 font-medium">{value}</span>
  );
}

export default function PricingPage() {
  const faqItems = [
    {
      q: 'What can I do on the free trial?',
      a: "You get 7 days to try Privly's core features: upload up to 3 files with forensic watermarking, run 1 leak scan, and explore the dashboard. DMCA takedowns, monitoring, and unlimited scans are available when you subscribe.",
    },
    {
      q: 'Do I need a credit card for the trial?',
      a: "No. Sign up with just your email. You won't be charged anything during the trial. When you're ready to subscribe, you can upgrade from inside the app.",
    },
    {
      q: 'Can I skip the trial and subscribe directly?',
      a: "Yes. Sign up, and you can go straight to the billing page to subscribe at $49/month. You'll get instant access to everything — including DMCA takedowns, monitoring, and unlimited scans.",
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
      a: "Yes. No contracts, no fine print. Cancel anytime — just hit the button and you're done. No retention calls, no hoops.",
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
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      <MarketingHeader />

      <main className="pt-28 pb-0">
        {/* Hero */}
        <section className="relative w-full pb-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Try free. Subscribe when ready.
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
              Start with a 7-day trial to explore the platform, or subscribe straight away for full protection at {PLAN.price}/month.
            </p>
          </div>
        </section>

        {/* Two Plan Cards */}
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

            {/* Free Trial Card */}
            <div className="relative rounded-xl p-8 border border-[var(--line)] flex flex-col" style={{ background: 'var(--bg-2)' }}>
              <div className="absolute -top-3 left-6">
                <div className="bg-[var(--bg-2)] px-4 py-1 rounded-full text-xs font-semibold">
                  FREE TRIAL
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-2)] flex items-center justify-center">
                  <Shield className="w-5 h-5" style={{ color: 'var(--ink-2)' }} />
                </div>
                <h2 className="text-2xl font-bold">Try Privly</h2>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold">$0</span>
                <span  style={{ color: 'var(--ink-2)' }}>/7 days</span>
              </div>
              <p className="text-sm mb-6" style={{ color: 'var(--ink-2)' }}>No credit card required</p>

              <div className="space-y-3 mb-8 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--mute)' }}>What&apos;s included</p>
                {TRIAL_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FeatureCheck value={f.trial} />
                    <span className={`text-sm ${f.trial ? 'text-[var(--ink-2)]' : 'text-[var(--mute)]'}`}>
                      {f.name}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={`${APP_URL}/auth/signup?plan=trial`}
                className="w-full block text-center px-8 py-4 border border-[var(--line)] rounded-lg font-semibold hover: transition-colors" style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                Start Free Trial <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Pro Plan Card */}
            <div className="relative rounded-xl p-8 border border-[var(--accent)]/30 flex flex-col">
              <div className="absolute -top-3 left-6">
                <div className="bg-[var(--accent)] px-4 py-1 rounded-full text-xs font-semibold text-white">
                  RECOMMENDED
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">{PLAN.name}</h2>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold">{PLAN.price}</span>
                <span  style={{ color: 'var(--ink-2)' }}>/month</span>
              </div>
              <p className="text-sm mb-6" style={{ color: 'var(--ink-2)' }}>Cancel anytime, no questions asked</p>

              <div className="space-y-3 mb-8 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--mute)' }}>Everything — no limits</p>
                {TRIAL_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-[var(--ink)]">{f.name}</span>
                  </div>
                ))}
              </div>

              <a
                href={`${APP_URL}/auth/signup?plan=pro`}
                className="w-full block text-center px-8 py-4 bg-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Full Protection <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>
              <p className="text-center text-xs mt-3" style={{ color: 'var(--mute)' }}>You&apos;ll create your account, then complete payment</p>
            </div>
          </div>
        </section>

        {/* Copyright Add-On */}
        <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl p-7 border border-[var(--line)] flex flex-col sm:flex-row sm:items-center gap-6" style={{ background: 'var(--bg-2)' }}>
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
                  <Copyright className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold text-[var(--accent)] bg-purple-500/10 border border-[var(--accent)]/30 px-2 py-0.5 rounded">ADD-ON</span>
                    <h3 className="text-lg font-bold">Copyright Registration</h3>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                    We prepare all US Copyright Office documents — application forms, cover letter, and filing instructions. Strengthens DMCA enforcement and enables statutory damages.
                  </p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{COPYRIGHT_ADDON.price}</span>
                  <span className="text-sm" style={{ color: 'var(--ink-2)' }}>one-time</span>
                </div>
                <p className="text-xs" style={{ color: 'var(--mute)' }}>Available with Pro subscription</p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Why <span  style={{ color: 'var(--accent)' }}>Privly</span> is Different
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-xl p-6 border border-[var(--line)]" style={{ background: 'var(--bg-2)' }}>
                <h3 className="text-lg font-bold mb-5" style={{ color: 'var(--ink-2)' }}>Typical Service</h3>
                <ul className="space-y-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                  <li>$109-$324/mo</li>
                  <li>Scan + Remove only</li>
                  <li>Leaks keep coming back</li>
                  <li>Per-username pricing</li>
                  <li>No source tracing</li>
                </ul>
              </div>

              <div className="rounded-xl p-6 border border-[var(--accent)]/30 relative">
                <div className="absolute -top-2.5 left-5">
                  <span className="text-[10px] font-bold text-[var(--accent)] bg-[var(--accent)]/20 border border-[var(--accent)]/40 px-3 py-1 rounded-full uppercase tracking-wider">Privly</span>
                </div>
                <h3 className="text-lg font-bold mb-5 mt-2" style={{ color: 'var(--accent)' }}>Full Protection</h3>
                <ul className="space-y-3 text-sm">
                  {['$49/mo — everything included', 'Scan + Remove + Source Tracing', 'Telegram, Discord & Reddit monitoring', 'Leaks decrease permanently', 'Copyright Registration add-on', 'Dedicated human support'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--ink)] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-6 border border-[var(--line)]" style={{ background: 'var(--bg-2)' }}>
                <h3 className="text-lg font-bold mb-5" style={{ color: 'var(--ink-2)' }}>DIY Approach</h3>
                <ul className="space-y-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                  <li>Free (your time isn&apos;t)</li>
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
              Calculate Your <span  style={{ color: 'var(--accent)' }}>ROI</span>
            </h2>
            <RoiCalculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Common Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="rounded-xl border border-[var(--line)] p-6" style={{ background: 'var(--bg-2)' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--accent)' }}>{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — both options */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/5 via-transparent to-transparent" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-5">
              Start protecting your content today.
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--ink-2)' }}>
              Try free for 7 days, or subscribe for instant full protection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${APP_URL}/auth/signup?plan=trial`}
                className="inline-flex items-center px-8 py-4 border border-[var(--line)] rounded-lg font-semibold hover: transition-colors" style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                Start Free Trial
              </a>
              <a
                href={`${APP_URL}/auth/signup?plan=pro`}
                className="inline-flex items-center px-8 py-4 bg-[var(--accent)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Full Protection — {PLAN.price}/mo <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <p className="text-sm mt-4" style={{ color: 'var(--mute)' }}>No credit card required for trial. Cancel anytime.</p>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

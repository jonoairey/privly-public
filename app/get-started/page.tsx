import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { PLAN, APP_URL } from '@/lib/constants';
import { ArrowRight, Shield, Zap, CheckCircle, XCircle } from 'lucide-react';

export const metadata = genMeta({
  title: 'Get Started',
  description: 'Choose your plan — start with a free 7-day trial or subscribe to Privly Creator Protection at $49/month for full content protection.',
  path: '/get-started',
});

const HIGHLIGHTS = {
  trial: [
    { text: 'Forensic watermarking (up to 3 files)', included: true },
    { text: 'Content Vault (up to 3 uploads)', included: true },
    { text: '1 leak scan', included: true },
    { text: 'Deepfake detection', included: true },
    { text: 'DMCA takedown filing', included: false },
    { text: 'Telegram & Discord monitoring', included: false },
    { text: 'Unlimited scans & uploads', included: false },
  ],
  pro: [
    { text: 'Everything — no limits', included: true },
    { text: 'Unlimited forensic watermarking', included: true },
    { text: 'Unlimited leak scans', included: true },
    { text: 'DMCA takedown filing & automation', included: true },
    { text: 'Telegram, Discord & Reddit monitoring', included: true },
    { text: 'Dedicated human support', included: true },
    { text: 'Monthly protection reports', included: true },
  ],
};

export default function GetStartedPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col overflow-hidden">
      <MarketingHeader />

      <main className="pt-28 pb-0">
        {/* Hero */}
        <section className="relative w-full pb-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              How do you want to get started?
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
              Try Privly free for 7 days, or go straight to full protection. Either way, your content is covered.
            </p>
          </div>
        </section>

        {/* Two Option Cards */}
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

            {/* Free Trial Option */}
            <div className="relative rounded-2xl p-8 border border-[var(--line)] flex flex-col hover:border-[var(--line)] transition-colors" style={{ background: 'var(--bg-2)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-2)] flex items-center justify-center">
                  <Shield className="w-6 h-6" style={{ color: 'var(--ink-2)' }} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Free Trial</h2>
                  <p className="text-sm" style={{ color: 'var(--ink-2)' }}>Explore the platform first</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">$0</span>
                <span  style={{ color: 'var(--ink-2)' }}>for 7 days</span>
              </div>
              <p className="text-sm mb-6" style={{ color: 'var(--mute)' }}>No credit card required</p>

              <div className="space-y-3 mb-8 flex-1">
                {HIGHLIGHTS.trial.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.included ? (
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-[var(--mute)] flex-shrink-0" />
                    )}
                    <span className={`text-sm ${item.included ? 'text-[var(--ink-2)]' : 'text-[var(--mute)]'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={`${APP_URL}/auth/signup?plan=trial`}
                className="w-full block text-center px-8 py-4 border border-[var(--line)] rounded-xl font-semibold hover: transition-colors" style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                Start Free Trial <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>

              <p className="text-center text-xs mt-3" style={{ color: 'var(--mute)' }}>
                Upgrade to full protection anytime from inside the app
              </p>
            </div>

            {/* Paid Subscription Option */}
            <div className="relative rounded-2xl p-8 border border-[var(--accent)]/30 flex flex-col hover:border-[var(--accent)]/50 transition-colors">
              <div className="absolute -top-3 right-6">
                <div className="bg-[var(--accent)] px-4 py-1 rounded-full text-xs font-semibold text-white">
                  MOST POPULAR
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)] flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{PLAN.name}</h2>
                  <p className="text-sm" style={{ color: 'var(--ink-2)' }}>Full protection, instantly</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">{PLAN.price}</span>
                <span  style={{ color: 'var(--ink-2)' }}>/month</span>
              </div>
              <p className="text-sm mb-6" style={{ color: 'var(--mute)' }}>Cancel anytime, no questions asked</p>

              <div className="space-y-3 mb-8 flex-1">
                {HIGHLIGHTS.pro.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-[var(--ink)]">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={`${APP_URL}/auth/signup?plan=pro`}
                className="w-full block text-center px-8 py-4 bg-[var(--accent)] rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get Full Protection <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>

              <p className="text-center text-xs mt-3" style={{ color: 'var(--mute)' }}>
                You&apos;ll create your account, then complete payment
              </p>
            </div>
          </div>
        </section>

        {/* Reassurance Strip */}
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold mb-1">96%</p>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>Takedown success rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">&lt; 2 hours</p>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>Average detection time</p>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">500+</p>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>Platforms monitored</p>
              </div>
            </div>
          </div>
        </section>

        {/* Not Sure Section */}
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Not sure which to choose?</h2>
            <p className="mb-6" style={{ color: 'var(--ink-2)' }}>
              The free trial lets you explore the dashboard, upload a few files, and run a leak scan. If you already know you need full protection — takedowns, monitoring, and unlimited scans — go straight to the paid plan and skip the limits.
            </p>
            <a
              href="/pricing"
              className="text-[var(--accent)] hover:text-[var(--accent)] font-semibold transition-colors"
            >
              Compare plans in detail →
            </a>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

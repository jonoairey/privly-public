import Header from '@/components/header';
import Footer from '@/components/footer';
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      <main className="pt-28 pb-0">
        {/* Hero */}
        <section className="relative w-full pb-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              How do you want to get started?
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Try Privly free for 7 days, or go straight to full protection. Either way, your content is covered.
            </p>
          </div>
        </section>

        {/* Two Option Cards */}
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

            {/* Free Trial Option */}
            <div className="relative rounded-2xl p-8 border border-gray-700/50 bg-gray-900/50 flex flex-col hover:border-gray-600/70 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Free Trial</h2>
                  <p className="text-sm text-gray-400">Explore the platform first</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-400">for 7 days</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">No credit card required</p>

              <div className="space-y-3 mb-8 flex-1">
                {HIGHLIGHTS.trial.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.included ? (
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-gray-600 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${item.included ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={`${APP_URL}/auth/signup?plan=trial`}
                className="w-full block text-center px-8 py-4 border border-gray-600 rounded-xl font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Start Free Trial <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>

              <p className="text-center text-xs text-gray-500 mt-3">
                Upgrade to full protection anytime from inside the app
              </p>
            </div>

            {/* Paid Subscription Option */}
            <div className="relative rounded-2xl p-8 border border-purple-500/30 bg-gradient-to-b from-purple-950/20 to-gray-900/50 flex flex-col hover:border-purple-500/50 transition-colors">
              <div className="absolute -top-3 right-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-xs font-semibold text-white">
                  MOST POPULAR
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{PLAN.name}</h2>
                  <p className="text-sm text-gray-400">Full protection, instantly</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">{PLAN.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">30-day money-back guarantee</p>

              <div className="space-y-3 mb-8 flex-1">
                {HIGHLIGHTS.pro.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={`${APP_URL}/auth/signup?plan=pro`}
                className="w-full block text-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get Full Protection <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>

              <p className="text-center text-xs text-gray-500 mt-3">
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
                <p className="text-2xl font-bold text-white mb-1">96%</p>
                <p className="text-sm text-gray-400">Takedown success rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">&lt; 2 hours</p>
                <p className="text-sm text-gray-400">Average detection time</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">500+</p>
                <p className="text-sm text-gray-400">Platforms monitored</p>
              </div>
            </div>
          </div>
        </section>

        {/* Not Sure Section */}
        <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Not sure which to choose?</h2>
            <p className="text-gray-400 mb-6">
              The free trial lets you explore the dashboard, upload a few files, and run a leak scan. If you already know you need full protection — takedowns, monitoring, and unlimited scans — go straight to the paid plan and skip the limits.
            </p>
            <a
              href="/pricing"
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Compare plans in detail →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

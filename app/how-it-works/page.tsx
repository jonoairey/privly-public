import Header from '@/components/header';
import Footer from '@/components/footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';
import {
  Lock,
  Fingerprint,
  Radar,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata = genMeta({
  title: 'How Privly Works',
  description: 'From invisible watermark to identified leaker in 4 steps. Learn how Privly protects your content.',
  path: '/how-it-works',
});

const steps = [
  {
    number: '1',
    title: 'Content Vault',
    icon: Lock,
    color: 'purple',
    description: 'Upload your sensitive content and receive timestamped cryptographic proof of ownership. Every file is securely stored with immutable records that stand up in court.',
    bullets: [
      'Instant file upload & verification',
      'Timestamped ownership proof',
      'Military-grade encryption',
    ],
  },
  {
    number: '2',
    title: 'Invisible Watermarking',
    icon: Fingerprint,
    color: 'pink',
    description: "Each subscriber receives a unique, imperceptible watermark embedded in your content. It's completely invisible to the human eye but digitally traceable.",
    bullets: [
      'Unique mark per subscriber',
      'Imperceptible to users',
      'Survives format conversions',
    ],
  },
  {
    number: '3',
    title: '24/7 Leak Scanning',
    icon: Radar,
    color: 'blue',
    description: 'Our AI continuously monitors 500+ platforms worldwide for any copies of your content. Real-time detection means faster intervention and damage control.',
    bullets: [
      '500+ platforms monitored',
      'AI-powered detection',
      'Real-time alerts',
    ],
  },
  {
    number: '4',
    title: 'Trace, Identify & Remove',
    icon: Shield,
    color: 'green',
    description: 'Automatically decode the watermark to identify the leaker, generate legally binding evidence, and file DMCA takedowns within hours.',
    bullets: [
      'Instant leaker identification',
      'Automated DMCA filing',
      'High takedown success rate',
    ],
  },
];

const stats = [
  { number: '500+', label: 'Platforms Scanned', desc: 'Comprehensive coverage across the web' },
  { number: '<2h', label: 'Detection Speed', desc: 'Average leak identified in under 2 hours' },
  { number: '24/7', label: 'Monitoring', desc: 'Round-the-clock automated protection' },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Hero — compact with inline 4-step overview */}
      <section className="relative w-full pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            How Privly <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Works</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            From invisible watermark to identified leaker in 4 steps. Full protection, fully automated.
          </p>

          {/* 4-step flow — visible above the fold */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <a key={idx} href={`#step-${step.number}`} className="group">
                  <div className="rounded-xl p-4 sm:p-5 border border-gray-800 bg-gray-900/50 hover:border-purple-500/30 transition-colors text-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Step {step.number}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{step.title}</div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-gray-800">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={`${APP_URL}/auth/signup`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <p className="text-sm text-gray-500 mt-3">7-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Step 1: Content Vault */}
          <div id="step-1" className="scroll-mt-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">1</span>
                <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">Step One</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Content Vault</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {steps[0].description}
              </p>
              <ul className="space-y-3">
                {steps[0].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <div className="space-y-3">
                {[
                  { name: 'document.pdf', size: '1.2 MB' },
                  { name: 'design.figma', size: '3.4 MB' },
                  { name: 'presentation.pptx', size: '5.1 MB' },
                ].map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <Lock className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{file.size}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-800 mt-3">
                  <p className="text-xs text-gray-500">
                    Verified: <span className="text-green-400 font-medium">2025-03-10 09:32:45 UTC</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800" />

          {/* Step 2: Invisible Watermarking */}
          <div id="step-2" className="scroll-mt-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <div className="space-y-5">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-3">BEFORE WATERMARK</p>
                  <div className="bg-gray-800 rounded-lg p-6 h-24 flex items-center justify-center">
                    <p className="text-lg font-bold text-gray-500">Your Content</p>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block text-xs text-purple-300 font-medium bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full">
                    Watermark: Invisible
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-3">AFTER WATERMARK</p>
                  <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 rounded-lg p-6 h-24 flex items-center justify-center relative overflow-hidden">
                    <p className="text-lg font-bold text-gray-400">Your Content</p>
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(168, 85, 247, 0.15) 35px, rgba(168, 85, 247, 0.15) 70px)'}} />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2</span>
                <span className="text-xs font-semibold text-pink-300 bg-pink-500/10 border border-pink-500/30 px-3 py-1 rounded-full">Step Two</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Invisible Watermarking</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {steps[1].description}
              </p>
              <ul className="space-y-3">
                {steps[1].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800" />

          {/* Step 3: 24/7 Leak Scanning */}
          <div id="step-3" className="scroll-mt-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">3</span>
                <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full">Step Three</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">24/7 Leak Scanning</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {steps[2].description}
              </p>
              <ul className="space-y-3">
                {steps[2].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <div className="flex items-center justify-center h-56 relative">
                {/* Radar animation */}
                <div className="absolute w-16 h-16 border border-blue-400/30 rounded-full animate-pulse" />
                <div className="absolute w-28 h-28 border border-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                <div className="absolute w-44 h-44 border border-blue-400/10 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full" />
                <div className="absolute w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-spin" style={{animationDuration: '2s'}} />
                <div className="absolute top-3 right-3 text-right">
                  <p className="text-xs text-blue-300">Platforms</p>
                  <p className="text-lg font-bold text-blue-400">500+</p>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-xs text-gray-500">Scanning every 30 min</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800" />

          {/* Step 4: Trace, Identify & Remove */}
          <div id="step-4" className="scroll-mt-24 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <span className="text-sm font-medium">Watermark Detected</span>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">Found</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg">
                  <span className="text-sm">Leaker Identified</span>
                  <span className="text-xs text-gray-400">User ID: 4827</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg">
                  <span className="text-sm">Platform</span>
                  <span className="text-xs text-gray-400">pastebin.com</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg">
                  <span className="text-sm">Detection Time</span>
                  <span className="text-xs text-gray-400">47 minutes</span>
                </div>
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg mt-1">
                  <p className="text-xs text-purple-300 font-medium mb-1">DMCA Filed</p>
                  <p className="text-xs text-gray-400">Takedown request submitted automatically</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">4</span>
                <span className="text-xs font-semibold text-green-300 bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-full">Step Four</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trace, Identify & Remove</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {steps[3].description}
              </p>
              <ul className="space-y-3">
                {steps[3].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-black to-black" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Ready to protect your content?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Full protection for your content. Try it free for 7 days — no credit card required.
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

      <Footer />
    </div>
  );
}

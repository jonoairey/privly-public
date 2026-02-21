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

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Content Vault',
      icon: Lock,
      description: 'Upload your sensitive content and receive timestamped cryptographic proof of ownership. Every file is securely stored with immutable records.',
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
      description: "Each subscriber receives a unique, imperceptible watermark embedded in your content. It's invisible to the human eye but traceable.",
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
      description: 'Our AI continuously monitors 100+ platforms worldwide for any copies of your content. Real-time detection means faster intervention.',
      bullets: [
        '100+ platforms monitored',
        'AI-powered detection',
        'Real-time alerts',
      ],
    },
    {
      number: '4',
      title: 'Trace, Identify & Remove',
      icon: Shield,
      description: 'Automatically decode the watermark to identify the leaker, generate evidence, and file DMCA takedowns within hours.',
      bullets: [
        'Instant leaker identification',
        'Automated DMCA filing',
        '96% takedown success rate',
      ],
    },
  ];

  const stats = [
    { number: '96%', label: 'Takedown Success Rate', desc: 'Industry-leading removal success' },
    { number: '<2h', label: 'Detection Speed', desc: 'Average leak identified in under 2 hours' },
    { number: '70%', label: 'Leak Reduction', desc: 'On average across all creators' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-20 -right-20 w-72 h-72 orb orb-purple opacity-40" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 orb orb-pink opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            How Privly <span className="text-gradient">Works</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
            From invisible watermark to identified leaker in 4 steps
          </p>
          <div className="flex justify-center">
            <a
              href={`${APP_URL}/auth/signup`}
              className="btn-glow px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 font-semibold transition-all inline-flex items-center gap-3"
            >
              Start Protecting Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative py-32 px-6 bg-black">
        {/* Step 1: Content Vault - Text Left, Visual Right */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="relative z-10">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-7xl font-black text-gradient">1</span>
                <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 inline-block">
                  <span className="text-sm font-semibold text-purple-300">Step One</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Content Vault
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Upload your sensitive content and receive timestamped cryptographic proof of ownership. Every file is securely stored with immutable records that stand up in court.
              </p>
              <ul className="space-y-4">
                {steps[0].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl opacity-50" />
              <div className="glow-card glass rounded-2xl p-8 relative z-10 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium">document.pdf</span>
                    </div>
                    <span className="text-xs text-gray-500">1.2 MB</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium">design.figma</span>
                    </div>
                    <span className="text-xs text-gray-500">3.4 MB</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium">presentation.pptx</span>
                    </div>
                    <span className="text-xs text-gray-500">5.1 MB</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 mt-4">
                    <p className="text-xs text-gray-400">
                      Verified: <span className="text-green-400 font-medium">2024-02-14 09:32:45 UTC</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shimmer Divider */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="shimmer-line h-px w-full" />
        </div>

        {/* Step 2: Invisible Watermarking - Visual Left, Text Right */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Side */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50" />
              <div className="glow-card glass rounded-2xl p-8 relative z-10 border border-white/10">
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <p className="text-xs text-gray-400 mb-4">BEFORE WATERMARK</p>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 h-32 flex items-center justify-center">
                      <p className="text-2xl font-bold text-gray-600">Your Content</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full border border-purple-400/40 mb-4">
                      <span className="text-xs text-purple-300 font-medium">✓ Watermark: Invisible</span>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <p className="text-xs text-gray-400 mb-4">AFTER WATERMARK</p>
                    <div className="bg-gradient-to-br from-purple-900/30 to-gray-900 rounded-lg p-8 h-32 flex items-center justify-center relative overflow-hidden">
                      <p className="text-2xl font-bold text-gray-400">Your Content</p>
                      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
                        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(168, 85, 247, 0.1) 35px, rgba(168, 85, 247, 0.1) 70px)'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="relative z-10 order-1 md:order-2">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-7xl font-black text-gradient">2</span>
                <div className="px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 inline-block">
                  <span className="text-sm font-semibold text-pink-300">Step Two</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Invisible Watermarking
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Each subscriber receives a unique, imperceptible watermark embedded in your content. It's completely invisible to the human eye but digitally traceable and legally binding.
              </p>
              <ul className="space-y-4">
                {steps[1].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Shimmer Divider */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="shimmer-line h-px w-full" />
        </div>

        {/* Step 3: 24/7 Leak Scanning - Text Left, Visual Right */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="relative z-10">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-7xl font-black text-gradient">3</span>
                <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 inline-block">
                  <span className="text-sm font-semibold text-blue-300">Step Three</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                24/7 Leak Scanning
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our AI continuously monitors 100+ platforms worldwide for any copies of your content. Real-time detection means faster intervention and damage control.
              </p>
              <ul className="space-y-4">
                {steps[2].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-2xl opacity-50" />
              <div className="glow-card glass rounded-2xl p-8 relative z-10 border border-white/10">
                <div className="flex items-center justify-center h-64 relative">
                  {/* Radar circles */}
                  <div className="absolute w-20 h-20 border border-blue-400/30 rounded-full animate-pulse" />
                  <div className="absolute w-36 h-36 border border-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                  <div className="absolute w-52 h-52 border border-blue-400/10 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />

                  {/* Center point */}
                  <div className="absolute w-3 h-3 bg-blue-400 rounded-full" />

                  {/* Scan line */}
                  <div className="absolute w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-spin" style={{animationDuration: '2s'}} />

                  {/* Platform indicators */}
                  <div className="absolute top-4 right-4 text-xs text-blue-300 font-medium">
                    <p>Platforms</p>
                    <p className="text-lg font-bold text-blue-400">100+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shimmer Divider */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="shimmer-line h-px w-full" />
        </div>

        {/* Step 4: Trace, Identify & Remove - Visual Left, Text Right */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Side */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-2xl opacity-50" />
              <div className="glow-card glass rounded-2xl p-8 relative z-10 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <span className="text-sm font-medium">Watermark Detected</span>
                    <span className="inline-block px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">Found</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-sm font-medium">Leaker Identified</span>
                    <span className="text-xs text-gray-400">User ID: 4827</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-sm font-medium">Platform</span>
                    <span className="text-xs text-gray-400">pastebin.com</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-sm font-medium">Detection Time</span>
                    <span className="text-xs text-gray-400">47 minutes</span>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg mt-4">
                    <p className="text-xs text-purple-300 mb-2">✓ DMCA Filed</p>
                    <p className="text-xs text-gray-400">Takedown request submitted automatically</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="relative z-10 order-1 md:order-2">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-7xl font-black text-gradient">4</span>
                <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/40 inline-block">
                  <span className="text-sm font-semibold text-green-300">Step Four</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Trace, Identify & Remove
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Automatically decode the watermark to identify the leaker, generate legally binding evidence, and file DMCA takedowns within hours. Get results, not excuses.
              </p>
              <ul className="space-y-4">
                {steps[3].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Proven <span className="text-gradient">Results</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glow-card glass rounded-2xl p-8 border border-white/10 text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-gradient mb-4">
                  {stat.number}
                </div>
                <p className="text-lg font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-gradient relative min-h-96 flex items-center justify-center overflow-hidden py-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 orb orb-purple opacity-40" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 orb orb-pink opacity-30" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Ready to protect your content?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Join creators already using Privly to stop leaks. Our dedicated human support team is with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`${APP_URL}/auth/signup`}
              className="btn-glow px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 font-semibold transition-all inline-flex items-center justify-center gap-3"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">30-day money-back guarantee. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

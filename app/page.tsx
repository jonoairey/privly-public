'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { PLAN, COPYRIGHT_ADDON, APP_URL } from '@/lib/constants';
import {
  Shield,
  Zap,
  Search,
  Lock,
  Eye,
  Droplet,
  CheckCircle,
  ArrowRight,
  FileText,
  Microscope,
  Cpu,
  HeadphonesIcon,
  Radio,
  Copyright,
  AlertTriangle,
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal, .stagger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* HERO SECTION — tight, content-dense, mockup visible */}
      <section className="relative w-full pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy + CTA */}
            <div className="reveal">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                <span className="text-white">We don't just remove your leaks.</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">We find who's leaking.</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Forensic watermarking meets automated enforcement. Catch leakers. Protect your content. Get paid for what you create.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-3">
                <a
                  href={APP_URL}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              <p className="text-sm text-gray-400">7-day free trial. No credit card required.</p>

              {/* Compact stats row */}
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-800">
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-400">Platforms Scanned</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{'< 2hrs'}</div>
                  <div className="text-xs text-gray-400">Detection Speed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-400">Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Auto</div>
                  <div className="text-xs text-gray-400">DMCA Takedowns</div>
                </div>
              </div>
            </div>

            {/* Right — Dashboard Mockup */}
            <div className="reveal">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON — Whack-a-mole vs Privly */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Whack-a-mole</span> vs Privly
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Most services react after leaks happen. We prevent them, catch them, and obliterate them.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Other Services */}
            <div className="rounded-xl p-8 border border-red-900/40 bg-red-950/10 reveal">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Other Services</h3>
              <div className="space-y-4">
                {[
                  'Content leaks & you find out later',
                  'Manual DMCA notices (if you remember)',
                  'Takedowns take weeks or months',
                  'No forensic proof of leaker',
                  'Recurring leaks from same source',
                  'Reactive, never proactive',
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-red-900/50 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 font-bold text-xs">{idx + 1}</span>
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privly */}
            <div className="rounded-xl p-8 border border-purple-500/30 bg-purple-950/10 reveal">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Privly</h3>
              <div className="space-y-4">
                {[
                  'Watermark embedded before sharing',
                  'Automatic leak detection < 2 hours',
                  'Proactive monitoring of Telegram, Discord & Reddit',
                  'Instant automated takedowns',
                  'Know exactly who leaked your content',
                  'Block repeat offenders permanently',
                  'Dedicated human support for anything',
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID — icon-based, no images */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Everything You Need</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Full-stack content protection — from watermarking to takedown.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {[
              {
                icon: Droplet,
                title: 'Forensic Watermarking',
                description: 'Invisible, traceable identifiers embedded in every piece of content.',
              },
              {
                icon: Microscope,
                title: 'Leak Source Tracing',
                description: 'Pinpoint exactly who leaked your content, when, and where.',
              },
              {
                icon: Radio,
                title: 'Proactive Monitoring',
                description: 'We monitor Telegram channels, Discord servers, and Reddit leak communities every 30 minutes.',
              },
              {
                icon: Lock,
                title: 'Content Vault',
                description: 'AES-256 encrypted storage with timestamped proof of ownership.',
              },
              {
                icon: Eye,
                title: 'Leak Scanning',
                description: 'Scan 500+ platforms continuously for unauthorized copies of your content.',
              },
              {
                icon: FileText,
                title: 'DMCA Automation',
                description: 'Automated takedown notices filed instantly across all platforms.',
              },
              {
                icon: Cpu,
                title: 'AI Deepfake Detection',
                description: 'Detect fake accounts, AI-generated content, and unauthorized use of your likeness.',
              },
              {
                icon: Copyright,
                title: 'Copyright Registration',
                description: `US Copyright Office registration prep — just ${COPYRIGHT_ADDON.price}. We handle the paperwork.`,
              },
              {
                icon: HeadphonesIcon,
                title: 'Dedicated Human Support',
                description: 'Real people backing you up with takedowns, questions, and anything you need.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl p-6 border border-gray-800 bg-gray-900/50 hover:border-purple-500/30 transition-colors reveal"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATE OF CONTENT LEAKS REPORT */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-gray-900/80 via-purple-950/20 to-gray-900/80 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left — content */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6 w-fit">
                  <FileText className="w-3.5 h-3.5" />
                  Free Report
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  The State of Content Leaks{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2026</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  How much are leaks really costing creators? Which platforms are hit hardest? What actually works to stop them? We analysed the data so you don&apos;t have to.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { stat: '$2.1B', label: 'Lost to leaks annually' },
                    { stat: '47%', label: 'Creators affected' },
                    { stat: '500+', label: 'Leak sites tracked' },
                    { stat: '96%', label: 'Takedown success rate' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{item.stat}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="/report/content-leaks-2026"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  Read the Full Report <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right — visual stats preview */}
              <div className="hidden md:flex flex-col justify-center p-8 sm:p-12 bg-gray-950/50 border-l border-purple-500/10">
                <div className="space-y-5">
                  {[
                    { label: 'OnlyFans', pct: 78, color: 'from-blue-500 to-blue-400' },
                    { label: 'Fansly', pct: 52, color: 'from-cyan-500 to-cyan-400' },
                    { label: 'Patreon', pct: 34, color: 'from-orange-500 to-orange-400' },
                    { label: 'Instagram', pct: 29, color: 'from-pink-500 to-pink-400' },
                    { label: 'TikTok', pct: 18, color: 'from-gray-400 to-gray-300' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-gray-400">{item.pct}% affected</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-6">% of creators reporting leaked content by platform, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM — why this matters */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">The Problem Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Massive</span></h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Content theft costs creators billions every year.
          </p>

          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              {
                icon: Zap,
                stat: '$1.7B+',
                title: 'Lost Annually',
                description: 'Estimated annual revenue lost by creators to piracy and unauthorized redistribution.',
              },
              {
                icon: AlertTriangle,
                stat: '47%',
                title: 'Creators Affected',
                description: 'Nearly half of all digital creators have had their content stolen or leaked.',
              },
              {
                icon: Search,
                stat: '72hrs',
                title: 'Average Spread Time',
                description: 'Once leaked, content spreads to dozens of piracy sites within 72 hours without action.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-xl p-8 border border-gray-800 bg-gray-900/50 text-center reveal">
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 reveal">Explore Privly</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger">
            {[
              { label: 'How It Works', href: '/how-it-works' },
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Articles & Guides', href: '/articles' },
              { label: 'OnlyFans Protection', href: '/onlyfans' },
              { label: 'Fansly Protection', href: '/fansly' },
              { label: 'Free DMCA Generator', href: '/tools/dmca-generator' },
              { label: 'Leak Report 2026', href: '/report/content-leaks-2026' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/40 hover:bg-gray-900 transition-all text-center text-sm text-gray-300 hover:text-white font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-black to-black" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 reveal">
            Stop losing money to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">content theft</span>.
          </h2>
          <p className="text-lg text-gray-300 mb-8 reveal">
            Join creators who are taking back control of their content and their revenue.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity reveal"
          >
            Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-gray-400 text-sm mt-4 reveal">7-day free trial. No credit card required. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ──────────────────────────────────────────
   Dashboard Mockup — pure CSS/SVG, no images
   ────────────────────────────────────────── */
function DashboardMockup() {
  return (
    <div className="relative rounded-xl border border-gray-800 bg-gray-950 overflow-hidden shadow-2xl shadow-purple-900/10">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-[10px] text-gray-400 bg-gray-800 rounded px-3 py-0.5">app.useprivly.com</div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 space-y-3">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-900 rounded-lg p-3 border border-gray-800">
            <div className="text-[10px] text-gray-400 mb-1">Active Scans</div>
            <div className="text-lg font-bold text-white">12</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-3 border border-gray-800">
            <div className="text-[10px] text-gray-400 mb-1">Leaks Found</div>
            <div className="text-lg font-bold text-red-400">3</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-3 border border-gray-800">
            <div className="text-[10px] text-gray-400 mb-1">Takedowns</div>
            <div className="text-lg font-bold text-green-400">3</div>
          </div>
        </div>

        {/* Leak findings */}
        <div className="bg-gray-900 rounded-lg border border-gray-800">
          <div className="px-3 py-2 border-b border-gray-800">
            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Recent Leak Findings</div>
          </div>
          <div className="divide-y divide-gray-800">
            {[
              { platform: 'Telegram', status: 'Removed', statusColor: 'text-green-400 bg-green-400/10', time: '2h ago' },
              { platform: 'Reddit', status: 'Removing...', statusColor: 'text-yellow-400 bg-yellow-400/10', time: '4h ago' },
              { platform: 'Mega.nz', status: 'Removed', statusColor: 'text-green-400 bg-green-400/10', time: '1d ago' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="text-xs text-gray-300">{item.platform}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${item.statusColor}`}>{item.status}</span>
                  <span className="text-[10px] text-gray-400">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Watermark trace */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider">Watermark Trace Detected</span>
          </div>
          <p className="text-[10px] text-gray-400">
            Leak source identified: <span className="text-white font-medium">subscriber_4821</span> — shared via Telegram on Mar 10
          </p>
        </div>
      </div>
    </div>
  );
}

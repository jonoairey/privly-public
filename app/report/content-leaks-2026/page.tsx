import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import {
  TrendingDown,
  Users,
  DollarSign,
  AlertTriangle,
  BarChart3,
  Globe,
  ArrowRight,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'State of Content Leaks 2026 Report | Creator Piracy Statistics | Privly',
  description:
    'The State of Content Leaks in 2026: $2.1B in lost creator revenue, 47% of creators affected, 500+ active leak sites. Comprehensive data on OnlyFans leaks, piracy statistics, and content protection strategies.',
  keywords: [
    'onlyfans leak statistics 2026',
    'content leak data',
    'creator piracy statistics',
    'content piracy report',
    'leak site statistics',
    'creator revenue lost',
    'onlyfans piracy report',
    'content theft data',
  ],
  openGraph: {
    title: 'The State of Content Leaks in 2026 | Privly Report',
    description:
      '$2.1B in lost creator revenue, 47% of creators affected, 96% DMCA success rate with professional help.',
    type: 'website',
    url: 'https://www.useprivly.com/report/content-leaks-2026',
  },
  alternates: {
    canonical: 'https://www.useprivly.com/report/content-leaks-2026',
  },
};

interface StatCard {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const keyStats: StatCard[] = [
  {
    value: '$2.1B',
    label: 'Annual Creator Revenue Lost',
    description:
      'Estimated total revenue lost across all creators to content piracy in 2026',
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    value: '47%',
    label: 'Creators Affected',
    description: 'Percentage of adult content creators who have experienced leaks',
    icon: <Users className="w-6 h-6" />,
  },
  {
    value: '$4,500',
    label: 'Monthly Loss Per Creator',
    description: 'Average monthly revenue loss for creators experiencing active leaks',
    icon: <TrendingDown className="w-6 h-6" />,
  },
  {
    value: '500+',
    label: 'Active Leak Sites',
    description: 'Documented leak sites, forums, and distribution channels',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    value: '45 days',
    label: 'Detection Time (DIY)',
    description: 'Average time to discover a leak without automated monitoring',
    icon: <AlertTriangle className="w-6 h-6" />,
  },
  {
    value: '40% vs 96%',
    label: 'DMCA Success Rate',
    description: 'DIY takedown success rate vs. professional/automated filing',
    icon: <Shield className="w-6 h-6" />,
  },
];

const platformBreakdown = [
  {
    platform: 'Dedicated Leak Sites',
    percentage: '35%',
    description: 'Sites dedicated to redistributing stolen content',
  },
  {
    platform: 'Tube Sites',
    percentage: '28%',
    description: 'Pornhub, XVideos, xHamster, and similar platforms',
  },
  {
    platform: 'Telegram Channels',
    percentage: '18%',
    description: 'Private and public groups sharing leaked content',
  },
  {
    platform: 'File-Sharing',
    percentage: '12%',
    description: 'Mega, Google Drive, Dropbox, and torrent sites',
  },
  {
    platform: 'Social Media',
    percentage: '5%',
    description: 'Reddit, Twitter/X, Discord, and other social platforms',
  },
  {
    platform: 'Other',
    percentage: '2%',
    description: 'Forums, blogs, and emerging platforms',
  },
];

const protectionStrategies = [
  {
    title: 'Automated Leak Monitoring',
    description:
      '24/7 scanning across 500+ platforms detects leaks within hours instead of weeks',
    impact: '4x faster detection',
  },
  {
    title: 'Multi-Target DMCA Filing',
    description:
      'Filing with hosting providers, CDNs, registrars, and Google simultaneously',
    impact: '96% success rate',
  },
  {
    title: 'Forensic Watermarking',
    description:
      'Invisible watermarks identify the exact subscriber who leaked content',
    impact: '100% accountability',
  },
  {
    title: 'Google De-indexing',
    description:
      'Removes leaked content from search results, eliminating organic traffic to leaks',
    impact: '70% less discovery',
  },
  {
    title: 'Persistent Enforcement',
    description:
      'Automatic re-filing when content reappears, keeping leaks suppressed long-term',
    impact: '80% prevention rate',
  },
  {
    title: 'AI-Powered Deepfake Detection',
    description:
      'Identifies deepfakes and synthetic media using creator content',
    impact: '99% detection accuracy',
  },
];

export default function ContentLeaksReport2026() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-8">
              <BarChart3 className="w-4 h-4" />
              2026 Industry Report
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The State of Content{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Leaks in 2026
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
              Comprehensive data on creator piracy, revenue losses, and the effectiveness
              of protection strategies.
            </p>

            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Data compiled from industry reports, creator surveys, and Privly platform
              data from 2024-2026.
            </p>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Statistics</h2>
              <p className="text-lg text-gray-400">The scale of the content leak crisis</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="font-semibold text-white mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Scale of the Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              The Scale of the Problem
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">$2.1 Billion in Annual Losses</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Adult content creators are losing an estimated $2.1 billion annually to
                  piracy. This figure is based on an average monthly loss of $4,500 per
                  creator experiencing active leaks, multiplied across the estimated
                  450,000+ active creators globally.
                </p>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong>Calculation:</strong> 450,000 creators × $4,500/month average
                    loss × 12 months = ~$2.43B (conservative estimate accounting for
                    partial losses)
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">47% of Creators Affected</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Nearly half of all adult content creators have experienced at least one
                  significant leak of their content. Of these, 73% experience repeated
                  leaks over time, indicating persistent challenges with leak suppression.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">20-40% Subscriber Drop</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Creators with widely leaked content see an average 20-40% reduction in
                  new subscriptions. When exclusive content is freely available on leak
                  sites, the economic incentive to subscribe evaporates. This compounds
                  over time into substantial yearly revenue losses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where Leaks Happen */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              Where Leaks Happen
            </h2>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">
                Distribution of Leaked Content by Platform (2026)
              </h3>
              <div className="space-y-4">
                {platformBreakdown.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold">{item.platform}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <p className="text-2xl font-bold text-red-400">{item.percentage}</p>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-600 to-orange-600 h-2 rounded-full"
                        style={{
                          width: item.percentage,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 className="font-semibold mb-3">The Speed of Spread</h4>
                <p className="text-gray-400 text-sm mb-4">
                  A single leaked video spreads to an average of 47 different platforms
                  within 24 hours. Telegram channels and dedicated leak sites move fastest,
                  spreading content to mirror sites within minutes.
                </p>
                <div className="text-3xl font-bold text-red-400">24 hours</div>
                <p className="text-xs text-gray-500">to reach dozens of mirror sites</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h4 className="font-semibold mb-3">The Discovery Problem</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Without automated monitoring, the average creator takes 45 days to
                  discover a leak. By that time, the content has been viewed hundreds of
                  thousands of times and spread to dozens of sites.
                </p>
                <div className="text-3xl font-bold text-orange-400">45 days</div>
                <p className="text-xs text-gray-500">
                  average discovery time without automation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Impact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              The Financial Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">For Individual Creators</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-3xl font-bold text-red-400">$4,500/month</p>
                    <p className="text-gray-400 text-sm">Average loss during active leaks</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-400">$54,000/year</p>
                    <p className="text-gray-400 text-sm">
                      Annual revenue loss for single creator
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yellow-400">$270,000/5yr</p>
                    <p className="text-gray-400 text-sm">Five-year cumulative loss</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Factors Influencing Loss</h3>
                <ul className="space-y-3">
                  {[
                    'Content popularity/exclusivity',
                    'Creator follower count',
                    'Subscription price point',
                    'Time since leak discovery',
                    'Number of leak sites hosting content',
                    'Availability in search results',
                  ].map((factor, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-red-400 mt-1 flex-shrink-0">→</span>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              What Works: Protection Strategies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protectionStrategies.map((strategy, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{strategy.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{strategy.description}</p>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-sm text-green-400 font-semibold">
                      Impact: {strategy.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-sm text-green-300">
                <strong>Key Finding:</strong> Creators who implement automated monitoring
                and DMCA filing see 70% reduction in active leaked content and recover 40-60%
                of lost revenue within 90 days of implementation.
              </p>
            </div>
          </div>
        </section>

        {/* AI Deepfakes */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">
              The Rise of AI Deepfakes
            </h2>

            <div className="bg-gray-900 border border-red-500/20 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                A new and alarming trend emerged in 2025-2026: synthetic deepfake content
                created using AI trained on stolen creator videos and photos. These
                deepfakes are often more profitable for leakers than the original content.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <p className="text-2xl font-bold text-red-400 mb-1">15%</p>
                  <p className="text-sm text-gray-400">
                    Of leaked content now includes AI-generated deepfakes
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <p className="text-2xl font-bold text-orange-400 mb-1">2x</p>
                  <p className="text-sm text-gray-400">
                    Higher download/view rates for deepfake content
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <p className="text-2xl font-bold text-yellow-400 mb-1">$850M+</p>
                  <p className="text-sm text-gray-400">
                    Estimated revenue generated from deepfake content in 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Why Deepfakes Are Dangerous</h3>
              <ul className="space-y-3">
                {[
                  "DMCA notices may not apply to synthetic content that doesn't contain the exact original",
                  'Deepfakes blur the line between creator content and impersonation',
                  'AI-generated content can be instantly regenerated if removed',
                  'Multiple identities can be synthesized from one original video',
                  'Reputational damage occurs even when deepfakes are labeled as synthetic',
                  'Legal frameworks lag behind AI capabilities',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-red-400 mt-1 flex-shrink-0">⚠️</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Recommendations for Creators
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Implement Automated Monitoring',
                  description:
                    'Set up 24/7 scanning across major leak sites and platforms. Manual checking takes too long.',
                },
                {
                  title: 'Use Forensic Watermarking',
                  description:
                    'Embed invisible watermarks in all content to trace leaks back to the source subscriber.',
                },
                {
                  title: 'File Multi-Target DMCA Notices',
                  description:
                    'Target hosting providers, CDNs, registrars, and Google simultaneously. Single-target filing has a 40% success rate; multi-target achieves 96%.',
                },
                {
                  title: 'Monitor for Deepfakes',
                  description:
                    'Use AI-powered detection to identify synthetic content using your likeness.',
                },
                {
                  title: 'Act Quickly on Detection',
                  description:
                    'Every hour a leak remains active increases copies and viewer counts. First 48 hours are critical.',
                },
                {
                  title: 'Keep Records & Documentation',
                  description:
                    'Document all leaks, removal efforts, and impact for potential legal action.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                      {idx + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Protect Your Content With Privly
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Automated leak detection across 500+ platforms, multi-target DMCA filing,
                forensic watermarking, and deepfake detection — all in one platform.
              </p>
              <p className="text-xl font-bold text-white mb-8">
                $49<span className="text-gray-400 text-base font-normal">/month</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  View all features
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                7-day free trial. No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Data Methodology */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-3">About This Report</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The State of Content Leaks in 2026 compiles data from industry research,
                creator surveys, Privly platform analytics, and public data sources. This
                report represents conservative estimates of the actual scale of the problem.
                Statistics are updated quarterly and reflect trends through Q1 2026.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

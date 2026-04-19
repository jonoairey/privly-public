import { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import {
  Shield,
  Search,
  FileText,
  Eye,
  Fingerprint,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Lock,
  Zap,
  Ban,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Content Protection | Stop Screenshot Theft & Get Content Removed | Privly",
  description:
    "Protect your Instagram content from screenshot theft and unauthorized sharing. Automated leak scanning across 500+ sites, instant DMCA takedowns, and deepfake detection. Built for Instagram creators and influencers.",
  keywords: [
    "instagram leak protection",
    "instagram content protection",
    "instagram dmca",
    "instagram leaks",
    "instagram screenshot",
    "protect instagram content",
    "instagram piracy",
    "instagram watermark",
    "instagram content theft",
    "remove leaked instagram content",
    "instagram leak takedown software",
    "stop instagram leaks",
    "instagram dmca takedown",
    "instagram copyright protection",
    "instagram screenshot protection",
    "instagram anti piracy",
    "instagram content stolen",
  ],
  openGraph: {
    title: "Instagram Content Protection — Stop Leaks & Get Content Removed | Privly",
    description:
      "Automated leak scanning and DMCA takedowns built for Instagram creators. Find and remove your stolen content from 500+ leak sites.",
    type: "website",
    url: "https://www.useprivly.com/instagram",
  },
  alternates: {
    canonical: "https://www.useprivly.com/instagram",
  },
};

const features = [
  {
    icon: Search,
    title: "Instagram Leak Scanning",
    description:
      "Continuous automated scans across 500+ leak sites, repost accounts, forums, Telegram, Discord, and file-sharing platforms for your Instagram content.",
  },
  {
    icon: FileText,
    title: "Automated DMCA Takedowns",
    description:
      "Legally compliant DMCA notices filed simultaneously with hosting providers, CDNs, domain registrars, and Google — not just the repost site.",
  },
  {
    icon: Fingerprint,
    title: "Screenshot Detection",
    description:
      "Advanced computer vision detects when your Instagram photos appear on other sites, even when cropped or edited.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring that detects deepfakes, face swaps, and impersonation content using your Instagram photos.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Get stolen content removed from Google search results so people can't find your Instagram content for free through search.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely store and fingerprint your original Instagram content to prove ownership and strengthen DMCA disputes.",
  },
  {
    icon: Ban,
    title: "Repost Account Tracking",
    description:
      "Monitor and suppress repeat offender accounts that repost your content. We track removals and enforce against serial reposters.",
  },
  {
    icon: Camera,
    title: "Reverse Image Search",
    description:
      "Find your Instagram photos across the web using TinEye and Google Lens integration — even when your handle isn't attached.",
  },
];

const stats = [
  { value: "500+", label: "Platforms monitored" },
  { value: "96%", label: "Takedown success rate" },
  { value: "<2hrs", label: "Average detection time" },
  { value: "70%", label: "Leak reduction" },
];

const faqItems = [
  {
    q: "How do I protect my Instagram content from being stolen and reposted?",
    a: "Use a layered approach: enable Instagram's privacy settings, add watermarks to identify stolen content, and run automated scanning to catch reposts early. Privly handles scanning 500+ leak sites and repost accounts, filing DMCA takedowns automatically when your content is found.",
  },
  {
    q: "How do I get my stolen Instagram content removed from the internet?",
    a: "File DMCA takedown notices with the hosting provider, CDN, domain registrar, and Google simultaneously. Target the infrastructure, not just the repost account. Privly automates this entire process — from detection through confirmed removal — achieving a 96% takedown success rate within 48-72 hours.",
  },
  {
    q: "How do I file a DMCA takedown for stolen Instagram content?",
    a: "A valid DMCA notice requires: identification of your copyrighted work, the exact URL of the infringing content, your contact information, a good-faith statement, and a signature under penalty of perjury. Send it to the hosting company's designated copyright agent.",
  },
  {
    q: "Is there software that automatically removes stolen Instagram content?",
    a: "Yes. Privly is a content protection platform built specifically for creators and influencers. It continuously scans for your content across 500+ platforms and automatically files DMCA takedowns when reposts and leaks are detected. It also handles Google de-indexing to remove stolen content from search results.",
  },
  {
    q: "How much do Instagram creators lose to stolen content?",
    a: "Studies estimate that content theft costs Instagram creators $2,500-5,000 per month in lost sponsorship and partnership opportunities. Brands are less likely to partner with creators whose content is freely available on repost sites. Over a year, this compounds to $30,000-60,000 in lost income.",
  },
  {
    q: "What should I put in my Instagram watermark?",
    a: "Include your Instagram handle or username, the date, and a statement like 'All Rights Reserved' or 'Do Not Repost'. However, visible watermarks can be cropped out. Forensic (invisible) watermarks embedded in the pixel data are more effective and survive screenshots and edits.",
  },
  {
    q: "Can Instagram repost accounts be reported and removed?",
    a: "Yes. Report repost accounts directly to Instagram through the copyright infringement form. Also file DMCA takedowns with the hosting provider and Google. Privly automates DMCA filing and tracks repeat offenders to enforce persistent removal.",
  },
  {
    q: "What's the best content protection service for Instagram creators?",
    a: "Look for a service that covers all three pillars: monitoring (scanning 500+ sites continuously), enforcement (automated DMCA filing), and prevention (watermarking). Privly offers all three for $49/month with a 7-day free trial.",
  },
];

export default function InstagramPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-[var(--hot)] text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for Instagram Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="from-pink-400" style={{ color: 'var(--accent)' }}>
                Instagram Content
              </span>{" "}
              From Reposting and Theft
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Automated leak scanning across 500+ sites, instant DMCA takedowns,
              screenshot detection, and deepfake detection. Find your stolen
              Instagram content and get it removed fast.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-pink-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-medium text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            <p className="text-sm mt-4" style={{ color: 'var(--ink-2)' }}>
              7-day free trial. No credit card required. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-[var(--line)]/50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold from-pink-400" style={{ color: 'var(--accent)' }}>
                  {stat.value}
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--ink-2)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Instagram Content Theft Is an Epidemic
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                42% of Instagram creators have had their content stolen and
                reposted. The average creator loses $2,500-5,000/month to theft.
                Manual takedowns can&apos;t keep up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$45,000/yr Lost</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  The average Instagram creator loses $2,500-5,000 per month to
                  stolen content and lost partnership opportunities — over
                  $45,000 per year in potential income.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[var(--hot)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hours to Spread</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  A single Instagram photo spreads to dozens of repost accounts
                  within hours. Every hour without a takedown means more people
                  following the thief instead of you.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">50% Following Drop</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Creators with heavily stolen content see followers migrating to
                  repost accounts. Why follow you when others are reposting your
                  best content?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Privly Protects Your Instagram Content
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                From detection to removal in hours, not weeks
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Upload & Fingerprint",
                  description:
                    "Add your Instagram content to Privly's secure vault. We create unique digital fingerprints of every photo — these are used to match your content when it appears on repost accounts and leak sites, even if it's been cropped, filtered, or edited.",
                },
                {
                  step: "2",
                  title: "Continuous Scanning",
                  description:
                    "Privly scans 500+ platforms 24/7 — leak sites, repost accounts, tube sites, file-sharing (Mega, Google Drive), forums, Reddit, Telegram channels, Discord servers, and social media. We detect reposts within hours.",
                },
                {
                  step: "3",
                  title: "Instant DMCA Filing",
                  description:
                    "When your content is found on repost sites, Privly generates legally compliant DMCA notices and files them with the hosting provider, CDN (Cloudflare), domain registrar, and Google Search simultaneously. Multi-target filing achieves 96% removal rates.",
                },
                {
                  step: "4",
                  title: "Track & Enforce",
                  description:
                    "Monitor every takedown in your dashboard — from filing to confirmed removal. If content reappears, Privly automatically re-files. Persistent enforcement keeps your content off repost sites long-term.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Complete Instagram Content Protection
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent theft of your
                Instagram content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-pink-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--hot)]" />
                    </div>
                    <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison: With vs Without */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                With Privly vs. Without Protection
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Without */}
              <div className="border border-red-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Without Protection
                </h3>
                <ul className="space-y-4">
                  {[
                    "Reposts spread for days before you find them",
                    "Manual DMCA filing takes 8-15 hours/week",
                    "40-50% takedown success rate with DIY notices",
                    "Stolen content stays in Google search results",
                    "Repost accounts continue operating repeatedly",
                    "Followers migrate to repost accounts",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Privly */}
              <div className="border border-green-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  With Privly
                </h3>
                <ul className="space-y-4">
                  {[
                    "Reposts detected within hours automatically",
                    "DMCA takedowns filed instantly — zero manual work",
                    "96% takedown success rate with multi-target filing",
                    "Google de-indexing removes stolen content from search",
                    "Repeat offender accounts tracked and suppressed",
                    "70% reduction in active stolen content",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Instagram Content Protection FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about protecting your Instagram content
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Instagram Creator Guides
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                In-depth guides to protecting your Instagram content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "How to Remove Stolen Instagram Content from the Internet",
                  slug: "how-to-remove-stolen-instagram-content",
                  readTime: "7 min",
                },
                {
                  title: "How Instagram Creators Are Losing Thousands to Content Theft",
                  slug: "how-instagram-creators-losing-thousands-content-theft",
                  readTime: "5 min",
                },
                {
                  title: "How to Watermark Instagram Photos Effectively",
                  slug: "how-to-watermark-instagram-photos",
                  readTime: "7 min",
                },
                {
                  title: "Instagram Content Theft Prevention: The Complete Guide",
                  slug: "instagram-content-theft-prevention-complete-guide",
                  readTime: "9 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group border rounded-xl p-6 hover:border-pink-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-pink-900/30 text-[var(--hot)] mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-[var(--hot)] transition-colors duration-300 line-clamp-2 text-sm">
                    {article.title}
                  </h3>
                  <span className="text-sm" style={{ color: 'var(--ink-2)' }}>
                    {article.readTime} read
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[var(--hot)] hover:text-[var(--hot)] font-medium transition-colors duration-300"
              >
                View all articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pink-600/10 via-purple-600/10 to-pink-600/10 border border-pink-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stop Losing Income to Instagram Content Theft
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Join creators who have taken back control of their content.
                Privly pays for itself by preventing losses that far exceed the
                monthly cost.
              </p>
              <p className="text-2xl font-bold mb-8">
                $49<span className="text-base font-normal" style={{ color: 'var(--ink-2)' }}>/month</span>
                <span className="text-sm font-normal ml-2" style={{ color: 'var(--ink-2)' }}>
                  — 7-day free trial, cancel anytime
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-pink-500/25"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="hover: transition-colors font-medium" style={{ color: 'var(--ink-2)' }}
                >
                  View full feature list
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

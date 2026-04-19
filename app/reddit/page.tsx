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
  title: "Reddit Content Protection | Stop Subreddit Reposts & DMCA Takedowns | Privly",
  description:
    "Protect your Reddit posts and content from unauthorized sharing across subreddits. Automated leak scanning, instant DMCA takedowns, and deepfake detection. Built for Reddit creators and content owners.",
  keywords: [
    "reddit leak protection",
    "reddit content protection",
    "reddit dmca",
    "reddit leaks",
    "reddit repost",
    "protect reddit content",
    "reddit piracy",
    "reddit watermark",
    "reddit content theft",
    "remove reddit posts",
    "reddit leak takedown software",
    "stop reddit leaks",
    "reddit dmca takedown",
    "reddit copyright protection",
    "reddit cross posting",
    "reddit anti piracy",
    "reddit stolen content",
  ],
  openGraph: {
    title: "Reddit Content Protection — Stop Leaks & Get Content Removed | Privly",
    description:
      "Automated leak scanning and DMCA takedowns built for Reddit creators. Find and remove your stolen content from 500+ platforms.",
    type: "website",
    url: "https://www.useprivly.com/reddit",
  },
  alternates: {
    canonical: "https://www.useprivly.com/reddit",
  },
};

const features = [
  {
    icon: Search,
    title: "Reddit Leak Scanning",
    description:
      "Continuous automated scans across 500+ subreddits, archival sites, screenshot platforms, and file-sharing services for your Reddit content.",
  },
  {
    icon: FileText,
    title: "Automated DMCA Takedowns",
    description:
      "Legally compliant DMCA notices filed with hosting providers, CDNs, domain registrars, and Google — targeting the infrastructure, not just individual subreddits.",
  },
  {
    icon: Fingerprint,
    title: "Content Fingerprinting",
    description:
      "Advanced fingerprinting detects when your Reddit posts and content appear in other subreddits or on archival sites, even when screenshots or excerpts.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring that detects deepfakes and face manipulation content using your Reddit-posted images and videos.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Get stolen content removed from Google search results so people can't find your Reddit content on archival sites through search.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely store and fingerprint your original Reddit content to prove ownership and strengthen DMCA disputes.",
  },
  {
    icon: Ban,
    title: "Subreddit Monitoring",
    description:
      "Track reposts across subreddits and archive sites. We identify repeat offenders and enforce persistent removal.",
  },
  {
    icon: Camera,
    title: "Reverse Image Search",
    description:
      "Find your Reddit images across the web using TinEye and Google Lens integration — track where your content migrates.",
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
    q: "How do I protect my Reddit posts from being reposted across subreddits?",
    a: "Use a layered approach: manage post privacy settings, add watermarks to images, and run automated monitoring to catch reposts early. Privly handles scanning 500+ subreddits and filing DMCA takedowns automatically when your content is found on archival sites or stolen platforms.",
  },
  {
    q: "How do I get my Reddit content removed from archival and repost sites?",
    a: "File DMCA takedown notices with the hosting provider, CDN, domain registrar, and Google simultaneously. Archival sites like Removeddit often host stolen Reddit content. Privly automates this entire process — from detection through confirmed removal — achieving a 96% takedown success rate within 48-72 hours.",
  },
  {
    q: "How do I file a DMCA takedown for Reddit content?",
    a: "A valid DMCA notice requires: identification of your copyrighted work, the exact URL of the infringing content, your contact information, a good-faith statement, and a signature under penalty of perjury. Send it to the hosting company's designated copyright agent.",
  },
  {
    q: "Is there software that automatically removes stolen Reddit content?",
    a: "Yes. Privly is a content protection platform built for creators across platforms including Reddit. It continuously scans archival sites and file-sharing platforms for your content and automatically files DMCA takedowns when leaks are detected.",
  },
  {
    q: "How much do Reddit creators and content owners lose to theft?",
    a: "Studies estimate that content theft costs Reddit creators and OC (original content) posters $1,000-3,000 per month in lost monetization opportunities, Patreon subscriptions, and affiliate income. Over a year, this compounds to $12,000-36,000 in losses.",
  },
  {
    q: "What are Reddit archive sites and why do they steal content?",
    a: "Archive sites like Removeddit and Unddit claim to preserve deleted Reddit content, but they often host original content without permission. These sites drive traffic away from your Reddit posts and the platforms (Patreon, etc.) linked in your posts.",
  },
  {
    q: "How do I watermark Reddit posts without violating subreddit rules?",
    a: "Many subreddits prohibit visible watermarks. Use forensic (invisible) watermarks instead — they're embedded in the pixel data of images and survive screenshots and re-encoding without being visible to viewers.",
  },
  {
    q: "What's the best content protection service for Reddit creators?",
    a: "Look for a service that covers monitoring (scanning archival sites and subreddits), enforcement (DMCA filing with hosting providers), and prevention (watermarking). Privly offers all three for $49/month with a 7-day free trial.",
  },
];

export default function RedditPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for Reddit Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="from-orange-400 to-red-400" style={{ color: 'var(--accent)' }}>
                Reddit Content
              </span>{" "}
              From Reposts and Archives
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Automated monitoring across 500+ subreddits and archival sites,
              instant DMCA takedowns, content fingerprinting, and deepfake
              detection. Find your stolen Reddit content and get it removed fast.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg shadow-orange-500/25"
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
                <p className="text-3xl font-bold from-orange-400 to-red-400" style={{ color: 'var(--accent)' }}>
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
                Reddit Content Theft and Archival Is an Epidemic
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                48% of Reddit creators report their content being reposted across
                subreddits or archived without permission. Archive sites strip
                attribution and monetization. Manual takedowns can&apos;t keep up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$24,000/yr Lost</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  The average Reddit creator loses $1,000-3,000 per month to
                  stolen content and archival sites — over $24,000 per year in
                  lost Patreon, affiliate, and sponsorship revenue.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hours to Archive</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Reddit posts are archived within hours on Removeddit and other
                  sites. Every hour without action means more people finding your
                  content on archival sites instead of your channels.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">35% Engagement Loss</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  When your Reddit content is freely available on archives and
                  other subreddits, new followers go there instead of to your
                  profile and linked content.
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
                How Privly Protects Your Reddit Content
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
                    "Add your Reddit posts and content to Privly's secure vault. We create unique digital fingerprints — these are used to match your content when it appears on archival sites, other subreddits, or file-sharing platforms.",
                },
                {
                  step: "2",
                  title: "Continuous Scanning",
                  description:
                    "Privly scans 500+ subreddits and archival sites 24/7 — including Removeddit, Unddit, archive.org, file-sharing platforms, forums, and more. We detect reposts and archives within hours.",
                },
                {
                  step: "3",
                  title: "Instant DMCA Filing",
                  description:
                    "When your content is found on archival or third-party sites, Privly generates legally compliant DMCA notices and files them with the hosting provider, CDN, domain registrar, and Google Search simultaneously.",
                },
                {
                  step: "4",
                  title: "Track & Enforce",
                  description:
                    "Monitor every takedown in your dashboard — from filing to confirmed removal. If content reappears, Privly automatically re-files. Persistent enforcement keeps your Reddit content protected long-term.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete Reddit Content Protection
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent theft of your
                Reddit content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-orange-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-orange-400" />
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
                    "Posts archived within hours without permission",
                    "Manual DMCA filing takes 8-15 hours/week",
                    "40-50% takedown success rate with DIY notices",
                    "Archive sites stay in Google search results",
                    "Reposts continue across subreddits",
                    "35% engagement and income loss",
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
                    "Archived content detected within hours automatically",
                    "DMCA takedowns filed instantly — zero manual work",
                    "96% takedown success rate with multi-target filing",
                    "Google de-indexing removes archive links from search",
                    "Subreddit reposts tracked and suppressed",
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
                Reddit Content Protection FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about protecting your Reddit content
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
                Reddit Creator Guides
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                In-depth guides to protecting your Reddit content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "How to Remove Your Reddit Content from Archival Sites",
                  slug: "how-to-remove-reddit-content-archival-sites",
                  readTime: "7 min",
                },
                {
                  title: "How Reddit Creators Are Losing Income to Theft",
                  slug: "how-reddit-creators-losing-income-content-theft",
                  readTime: "5 min",
                },
                {
                  title: "How to Watermark Reddit Images and Posts",
                  slug: "how-to-watermark-reddit-images",
                  readTime: "7 min",
                },
                {
                  title: "Reddit Content Protection: The Complete Creator Guide",
                  slug: "reddit-content-protection-complete-creator-guide",
                  readTime: "9 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group border rounded-xl p-6 hover:border-orange-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-900/30 text-orange-600 mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2 text-sm">
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
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-600 font-medium transition-colors duration-300"
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
            <div className="bg-gradient-to-br from-orange-600/10 via-red-600/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stop Losing Income to Reddit Content Theft
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-lg shadow-orange-500/25"
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

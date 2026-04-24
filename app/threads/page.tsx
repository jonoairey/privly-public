import { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import {
  generateBreadcrumbSchema,
  generateProductSchema,
  SITE_CONFIG,
} from "@/lib/seo";
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
  Users,
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Threads Content Protection | Stop Impersonation & Content Theft | Privly",
  description:
    "Protect your Threads posts and media from impersonation, screenshot theft, and cross-platform repost leaks. Automated scanning, Meta DMCA takedowns, and deepfake detection built for Threads creators.",
  keywords: [
    "threads content protection",
    "threads leak protection",
    "meta threads dmca",
    "threads impersonation takedown",
    "threads screenshot leaks",
    "protect threads posts",
    "threads account security",
    "instagram threads protection",
    "threads content theft",
    "remove stolen threads posts",
    "threads copyright protection",
    "meta threads content removal",
    "threads dmca filing",
    "threads image leaks",
    "threads creator protection",
    "threads stolen content",
    "threads repost removal",
  ],
  openGraph: {
    title: "Threads Content Protection — Stop Impersonation & Content Theft | Privly",
    description:
      "Automated content protection for Threads creators. Scan for stolen posts, file DMCAs with Meta, and remove impersonators fast.",
    type: "website",
    url: "https://www.useprivly.com/threads",
  },
  alternates: {
    canonical: "https://www.useprivly.com/threads",
  },
};

const features = [
  {
    icon: Search,
    title: "Threads Post Scanning",
    description:
      "Continuous monitoring for your Threads posts, images, and videos being reposted on other platforms, leak forums, Telegram, Reddit, and screenshot aggregators.",
  },
  {
    icon: FileText,
    title: "DMCA Filing for Meta",
    description:
      "Properly-formatted DMCA notices sent to Meta via the correct Threads-specific agent, so takedowns actually get actioned — not ignored by the generic Facebook abuse form.",
  },
  {
    icon: Users,
    title: "Impersonation Takedowns",
    description:
      "Catch and remove accounts copying your handle, bio, and profile photo on Threads. Impersonation is the #1 Threads-specific threat for creators.",
  },
  {
    icon: Fingerprint,
    title: "Image & Video Fingerprinting",
    description:
      "Fingerprint your original Threads media so we can match reposts even when they're cropped, re-encoded, or screen-captured onto another platform.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring flags deepfakes and face swaps using your Threads content across the web.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Remove stolen Threads content from Google search results, so people can't find reposts through a simple query of your name.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Fingerprint and securely store your original Threads posts to prove ownership and strengthen DMCA disputes.",
  },
  {
    icon: Camera,
    title: "Cross-Platform Coverage",
    description:
      "Threads content often spreads to Twitter/X, Reddit, Telegram, and tube sites. We monitor all four simultaneously — not just Meta's own platforms.",
  },
];

const stats = [
  { value: "500+", label: "Sites monitored" },
  { value: "96%", label: "Takedown success rate" },
  { value: "<2hrs", label: "Average detection time" },
  { value: "24/7", label: "Continuous scanning" },
];

const faqItems = [
  {
    q: "How do I protect my Threads posts from being stolen or reposted?",
    a: "Combine three things: strong account security (2FA, unique password), visible watermarks on images and videos before posting, and automated scanning to catch reposts early. Privly handles the scanning side — continuous monitoring across 500+ destinations where Threads content ends up, with automated DMCAs filed via Meta's correct takedown channels.",
  },
  {
    q: "Is DMCA filing for Threads different from Instagram or Facebook?",
    a: "Meta handles DMCA for Threads via the same copyright-agent endpoint as Instagram and Facebook, but Threads-specific content needs to be clearly identified (link format is threads.net/@username/post/id). Notices that reference only the Threads URL without media fingerprints sometimes get misrouted. Privly formats notices correctly and tracks which agent actioned each one.",
  },
  {
    q: "How do I stop someone from impersonating me on Threads?",
    a: "Threads impersonation reports go through Meta's standard impersonation flow (help.instagram.com/contact/636276399721841). Privly monitors for new accounts using your name, handle, or profile photo, collects screenshot evidence, and files impersonation reports the moment a fake account appears — typically within 2 hours.",
  },
  {
    q: "Can I remove my Threads content from Reddit and Twitter/X?",
    a: "Yes. Threads screenshots frequently end up on both Reddit and Twitter/X. Both platforms respond to DMCA notices filed against specific post URLs. The trick is filing against the reposts AND the original Threads URL to assert your chain of ownership. Privly handles both paths simultaneously.",
  },
  {
    q: "Will Meta actually take down stolen Threads content?",
    a: "Yes — Meta's DMCA compliance rate for properly-formatted notices is high (90%+ in our experience). The common reason a notice gets ignored is wrong framing (complaining about 'stolen' content without citing copyright) or filing via the general help form instead of the DMCA agent. Notices filed correctly with ownership proof typically action within 48-72 hours.",
  },
  {
    q: "How much does Threads content protection cost?",
    a: "Privly's $49/month plan includes Threads monitoring alongside Instagram, TikTok, OnlyFans, Fansly, and all other platforms — it's one price for all your creator accounts. 7-day free trial, no credit card required. Competing services that focus only on Threads typically charge $100+/month.",
  },
  {
    q: "What happens if my Threads account gets hacked?",
    a: "Account takeover is one of the fastest paths to a mass leak. If your Threads account is compromised, pause your posting immediately, file a Meta account recovery ticket, and start scanning for any content the attacker may have downloaded. Privly's scanning catches content appearing on leak sites post-takeover even while you're still recovering the account.",
  },
  {
    q: "Is it worth protecting a Threads account if I don't monetise it directly?",
    a: "Threads is increasingly part of the creator ecosystem — brand partnerships, cross-platform audience growth, content repurposing. Leaks and impersonation on Threads affect your brand reputation and can leak your other monetised content (OnlyFans clips, Patreon posts, etc.) that gets referenced in Threads posts. Most creators underestimate Threads' leak surface.",
  },
];

export default function ThreadsPage() {
  const canonical = `${SITE_CONFIG.url}/threads`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Platforms", url: SITE_CONFIG.url },
    { name: "Threads", url: canonical },
  ]);
  const productSchema = generateProductSchema({
    name: "Privly Threads Protection",
    description:
      "Impersonation, repost, and content-theft protection for Threads creators. Automated DMCA takedowns, cross-platform scanning, and deepfake detection.",
    price: "49",
    url: canonical,
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(124,58,237,0.15)' }} />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(219,39,119,0.10)' }} />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: 'rgba(124,58,237,0.10)', border: '1px solid rgba(124,58,237,0.25)', color: 'var(--accent)' }}>
              <Shield className="w-4 h-4" />
              Built for Threads Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span style={{ color: 'var(--accent)' }}>Threads Posts</span>{" "}
              From Impersonation and Content Theft
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Automated scanning for reposts, screenshots, and impersonator
              accounts. Correctly-formatted Meta DMCAs. Cross-platform coverage
              for where Threads leaks actually end up — Reddit, Twitter/X, leak
              aggregators, and Telegram.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--hot)', color: 'white', boxShadow: '0 10px 24px -10px rgba(219,39,119,0.55)' }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-lg bg-white transition-colors hover:text-[var(--accent)]"
                style={{ border: '1px solid var(--line)' }}
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
        <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
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
                Threads Is the Emerging Leak Surface
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Creators cross-posting from Instagram, OnlyFans, and Patreon to
                Threads have discovered their content spreads here faster than
                anywhere else — and impersonation runs rampant on a platform Meta
                is still scaling up protection for.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(239,68,68,0.10)' }}>
                  <AlertTriangle className="w-6 h-6" style={{ color: '#dc2626' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impersonation &gt; Reposts</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Threads impersonation is the #1 creator issue — fake accounts
                  using your handle, photo, and bio to farm followers or run
                  subscription scams. Manual reporting is slow; Meta&apos;s own
                  detection misses the majority.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(124,58,237,0.10)' }}>
                  <Clock className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cross-Platform Spread</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Threads posts get screenshotted and redistributed to Reddit,
                  Twitter/X, and Telegram within hours. Filing only with Meta
                  leaves 80% of the leak surface untouched.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(219,39,119,0.10)' }}>
                  <Zap className="w-6 h-6" style={{ color: 'var(--hot)' }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reputation Impact</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Impersonator accounts spreading edited or out-of-context
                  versions of your Threads posts can damage brand partnerships
                  and audience trust within days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--accent-3)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Privly Protects Your Threads Content
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
                    "Add your Threads posts and media to Privly's vault. We fingerprint every image and video so we can match reposts even when they're cropped, re-encoded, or screen-captured.",
                },
                {
                  step: "2",
                  title: "Continuous Cross-Platform Scanning",
                  description:
                    "Privly scans 500+ destinations 24/7 — Meta platforms, Twitter/X, Reddit, Telegram, leak aggregators, screenshot forums, tube sites. We detect your content within hours, not days.",
                },
                {
                  step: "3",
                  title: "Correct DMCA Filing",
                  description:
                    "When a leak is found, we file DMCA notices with Meta's Threads-specific agent (plus Reddit, Twitter/X, or wherever the content actually lives). Multi-target filing achieves a 96% success rate.",
                },
                {
                  step: "4",
                  title: "Impersonator Takedowns + Re-Scan",
                  description:
                    "We continuously monitor for new impersonator accounts using your handle or bio, file impersonation reports as they appear, and track every takedown. If content reappears, we re-file automatically.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ background: 'linear-gradient(135deg, var(--accent), var(--hot))' }}>
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
                Complete Threads Creator Protection
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent theft of your
                Threads content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-[var(--accent)] transition-colors duration-300"
                    style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(124,58,237,0.10)' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
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

        {/* With vs Without */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--accent-3)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                With Privly vs. Without Protection
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-8" style={{ background: 'white', border: '1px solid rgba(239,68,68,0.30)' }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: '#dc2626' }}>
                  <AlertTriangle className="w-5 h-5" />
                  Without Protection
                </h3>
                <ul className="space-y-4">
                  {[
                    "Impersonator accounts go unnoticed for weeks",
                    "Threads reposts spread to Reddit, X, Telegram within hours",
                    "Manual DMCA filing takes 10-20 hours/week",
                    "40-50% takedown success when filed generically",
                    "Google search still shows the stolen posts",
                    "Brand reputation damaged before you catch it",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }}>✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-8" style={{ background: 'white', border: '1px solid rgba(16,185,129,0.30)' }}>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: '#059669' }}>
                  <CheckCircle className="w-5 h-5" />
                  With Privly
                </h3>
                <ul className="space-y-4">
                  {[
                    "Impersonator accounts flagged within 2 hours",
                    "Cross-platform scanning catches every repost",
                    "DMCAs filed instantly with zero manual work",
                    "96% takedown success via correct agent routing",
                    "Google de-indexing removes stolen posts from search",
                    "Clean reputation protected proactively",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: '#059669' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Threads Content Protection FAQ
              </h2>
              <p style={{ color: 'var(--ink-2)' }}>
                Common questions about protecting your Threads content
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-6"
                  style={{ background: 'white', border: '1px solid var(--line)' }}
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

        {/* Pricing CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.10), rgba(219,39,119,0.10))', border: '1px solid rgba(124,58,237,0.25)' }}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stop Impersonators From Damaging Your Threads Brand
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                One subscription covers Threads, Instagram, TikTok, OnlyFans, and
                every other platform you post to. Privly pays for itself by
                stopping leaks before they spread.
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: 'var(--hot)', boxShadow: '0 10px 24px -10px rgba(219,39,119,0.55)' }}
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="transition-colors font-medium hover:text-[var(--accent)]"
                  style={{ color: 'var(--ink-2)' }}
                >
                  View full feature list
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
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

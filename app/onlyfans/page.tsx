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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Stop OnlyFans Leaks & Remove Stolen Content | Privly",
  description:
    "Find and remove leaked OnlyFans content from 500+ sites. Automated DMCA takedowns, Google de-indexing, and 24/7 leak monitoring. Start free trial.",
  keywords: [
    "onlyfans leak protection",
    "onlyfans content protection",
    "onlyfans dmca takedown",
    "stop onlyfans leaks",
    "remove leaked onlyfans",
    "onlyfans piracy",
    "onlyfans content stolen",
    "onlyfans leak site removal",
    "onlyfans copyright protection",
    "protect onlyfans content",
    "onlyfans watermark",
    "onlyfans anti piracy",
    "onlyfans leak scanner",
    "onlyfans dmca service",
  ],
  openGraph: {
    title: "Stop OnlyFans Leaks — Find & Remove Stolen Content | Privly",
    description:
      "Find and remove leaked OnlyFans content from 500+ sites. Automated DMCA takedowns, Google de-indexing, and 24/7 leak monitoring. Start free trial.",
    type: "website",
    url: "https://www.useprivly.com/onlyfans",
  },
  alternates: {
    canonical: "https://www.useprivly.com/onlyfans",
  },
};

const features = [
  {
    icon: Search,
    title: "OnlyFans Leak Scanning",
    description:
      "Monitor 500+ sites 24/7 — tube sites (Pornhub, xHamster), OnlyFans-specific leak sites (Erome, Bunkr, Simpcity, Coomer), forums, Telegram channels, Discord servers, Reddit, and file-sharing platforms. Catch leaks within hours.",
  },
  {
    icon: FileText,
    title: "Automated DMCA Takedowns",
    description:
      "Multi-target DMCA filing hits hosting providers, CDNs, domain registrars, and Google simultaneously. Single-site notices fail — we target the entire infrastructure. Escalation ladder for repeat offenders.",
  },
  {
    icon: Fingerprint,
    title: "Forensic Watermarking",
    description:
      "Invisible watermarks embed in every piece of content, surviving screenshots and compression. Identify exactly which subscriber leaked your content, ban them, and build a case for legal action.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI monitors for face-swaps, impersonation, and synthetic media using your OnlyFans photos and likeness. Flag deepfakes early before they spread.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Remove leaked content from Google and Bing search results. When fans can't find your content for free through search, they're more likely to subscribe.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely fingerprint your originals to prove ownership. Strengthens DMCA disputes and provides cryptographic proof in legal proceedings.",
  },
];

const stats = [
  { value: "500+", label: "Leak sites monitored" },
  { value: "96%", label: "Takedown success rate" },
  { value: "<2hrs", label: "Average detection time" },
  { value: "$4,500", label: "Avg. monthly loss to leaks" },
];

const faqItems = [
  {
    q: "How do I find where my OnlyFans content has been leaked?",
    a: "Manual searching is nearly impossible — leaked content spreads to dozens of sites within hours. Privly scans 500+ platforms automatically, including Erome, Bunkr, Simpcity, Coomer, Pornhub, xHamster, forums, Telegram, and file-sharing sites. You'll get an instant alert when your content is found.",
  },
  {
    q: "How long does it take to get leaked OnlyFans content removed?",
    a: "Most takedowns confirm within 48-72 hours when multi-target filing is used. Privly files DMCA notices with the hosting provider, CDN, domain registrar, and Google simultaneously. This approach is significantly faster and more successful than filing only with the leak site operator.",
  },
  {
    q: "Can I find out which subscriber leaked my OnlyFans content?",
    a: "Yes, through forensic watermarking. When your content is leaked, the invisible watermark is extracted to reveal which subscriber's copy it came from. You can ban them, revoke access, and if needed, pursue legal action for breach of your terms.",
  },
  {
    q: "Do DMCA takedowns actually work for OnlyFans content?",
    a: "Yes — Privly achieves a 96% success rate. The key is multi-target filing. Single-site DMCA notices often fail because mirrors exist on CDNs and other hosting providers. By filing with the hosting company, CDN (like Cloudflare), domain registrar, and Google simultaneously, you remove the content everywhere.",
  },
  {
    q: "How much does OnlyFans content protection cost?",
    a: "Privly is $49/month with a 7-day free trial (no credit card required). Given that the average creator loses $4,500/month to leaks, the service pays for itself many times over within a single month.",
  },
  {
    q: "What happens if my content keeps getting re-uploaded?",
    a: "Privly's persistent enforcement automatically re-files DMCA notices when content reappears. We track removals in your dashboard and escalate repeat offenders to domain registrars and upstream legal review. Over time, persistent enforcement makes your content less attractive to rehost.",
  },
];

export default function OnlyFansPage() {
  const canonical = `${SITE_CONFIG.url}/onlyfans`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Platforms", url: SITE_CONFIG.url },
    { name: "OnlyFans", url: canonical },
  ]);
  const productSchema = generateProductSchema({
    name: "Privly OnlyFans Protection",
    description:
      "Stop OnlyFans leaks. Automated DMCA takedowns, Google de-indexing, forensic watermarking, and 24/7 scanning across 500+ leak sites.",
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
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for OnlyFans Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Stop OnlyFans Leaks Before They{" "}
              <span  style={{ color: 'var(--accent)' }}>
                Destroy Your Revenue
              </span>
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Your PPV sales, tips, and subscriptions are bleeding to free tube sites and leak forums. Privly finds stolen content within hours and removes it automatically. 500+ sites monitored. 96% takedown success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
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
                OnlyFans Leaks Are Destroying Your Business
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                23% of creators have experienced unauthorized distribution. A single leaked PPV reaches dozens of free sites within hours. Your exclusivity is gone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$54,000/yr Lost</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  PPV sales, tips, and subscription revenue diverted to free tube sites and leak forums. The average creator loses $4,500/month when their content is leaked.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Leaks Spread in Hours</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  A single leaked PPV video reaches Erome, Bunkr, and tube sites within hours. Every minute without action means more mirrors and more lost subscribers.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Subscribers Cancel</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  When fans find your content free on leak sites, new subscriptions drop 20-40%. Your content's exclusivity is your entire business model.
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
                How Privly Protects Your OnlyFans Content
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                From detection to removal in hours, not weeks
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Connect Your Content",
                  description:
                    "Upload or link your OnlyFans content. We fingerprint every photo and video so we can match it even when cropped, compressed, or watermark-stripped.",
                },
                {
                  step: "2",
                  title: "We Scan 500+ Sites 24/7",
                  description:
                    "Leak forums, tube sites, Telegram channels, Discord servers, Reddit, file hosts — we check everywhere OnlyFans content gets reposted. Detection alerts within hours.",
                },
                {
                  step: "3",
                  title: "Takedowns Filed Automatically",
                  description:
                    "DMCA notices go to the hosting provider, CDN, domain registrar, and Google simultaneously. If they ignore it, we escalate to upstream providers and repeat offender lists.",
                },
                {
                  step: "4",
                  title: "Track Results in Your Dashboard",
                  description:
                    "See every detected leak, every DMCA filed, every confirmed removal. If content reappears, we re-file automatically. Persistent enforcement wins.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete OnlyFans Content Protection
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent leaks of your OnlyFans content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-blue-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue-600" />
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
                    "Leaks spread for days before you notice",
                    "Hours spent filing DMCA notices manually",
                    "Low success rate with single-target notices",
                    "Your content stays indexed in Google",
                    "No idea which subscriber leaked",
                    "Revenue drops as fans find free content",
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
                    "Leaks caught within hours of posting",
                    "DMCA takedowns filed automatically",
                    "96% success with multi-target enforcement",
                    "Google de-indexing removes search results",
                    "Forensic watermarks identify the leaker",
                    "70% reduction in active leaked content",
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
                OnlyFans Content Protection FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about protecting your OnlyFans content
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
                OnlyFans Creator Guides
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                In-depth guides to protecting your OnlyFans content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Your OnlyFans PPV Content Got Leaked: How to Respond Fast",
                  slug: "onlyfans-ppv-content-leaked-how-to-respond",
                  readTime: "7 min",
                },
                {
                  title: "Erome, Bunkr, and Simpcity: How OnlyFans Content Gets Leaked",
                  slug: "erome-bunkr-simpcity-how-onlyfans-content-gets-leaked",
                  readTime: "9 min",
                },
                {
                  title: "OnlyFans vs Fansly: Which Platform Is Safer for Creators?",
                  slug: "onlyfans-vs-fansly-which-platform-safer-creators",
                  readTime: "8 min",
                },
                {
                  title: "OnlyFans DMCA Takedown Guide: Step-by-Step for Every Platform",
                  slug: "onlyfans-dmca-takedown-guide-step-by-step",
                  readTime: "10 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group border rounded-xl p-6 hover:border-blue-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-600 mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 text-sm">
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
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-600 font-medium transition-colors duration-300"
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
            <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your Content Is Being Leaked Right Now
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Creators lose $4,500/month on average to unauthorized distribution. Privly catches and removes leaks automatically while you focus on content.
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
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

        {/* Schema.org structured data */}
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.useprivly.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "OnlyFans Content Protection",
                  item: "https://www.useprivly.com/onlyfans",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Privly OnlyFans Content Protection",
              description:
                "Automated leak scanning, DMCA takedowns, and forensic watermarking for OnlyFans creators. Stop content leaks before they destroy your revenue.",
              brand: {
                "@type": "Brand",
                name: "Privly",
              },
              offers: {
                "@type": "Offer",
                url: "https://www.useprivly.com/onlyfans",
                priceCurrency: "USD",
                price: "49",
                pricingPattern: "https://schema.org/RecurringPayment",
                priceValidUntil: "2026-12-31",
              },
            }),
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

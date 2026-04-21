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
  Ban,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patreon Content Protection | Stop Leaks & Protect Your Membership | Privly",
  description:
    "Protect your Patreon membership content from leaks. Automated scanning, DMCA takedowns, and Google de-indexing for Patreon creators. 7-day free trial.",
  keywords: [
    "patreon leak protection",
    "patreon content protection",
    "patreon dmca takedown",
    "stop patreon leaks",
    "patreon piracy",
    "patreon content stolen",
    "protect patreon posts",
    "patreon membership leak",
    "patreon copyright protection",
    "patreon anti piracy",
    "patreon kemono",
    "patreon piracy kemono",
    "patreon leak site",
    "patreon content security",
  ],
  openGraph: {
    title: "Patreon Content Protection — Stop Membership Leaks | Privly",
    description:
      "Protect your Patreon membership content from leaks. Automated scanning, DMCA takedowns, and Google de-indexing for Patreon creators. 7-day free trial.",
    type: "website",
    url: "https://www.useprivly.com/patreon",
  },
  alternates: {
    canonical: "https://www.useprivly.com/patreon",
  },
};

const features = [
  {
    icon: Search,
    title: "Patreon Leak Detection",
    description:
      "Monitor Kemono, piracy forums, file-sharing sites, Telegram, and Discord for your Patreon posts, images, videos, and downloadable files.",
  },
  {
    icon: FileText,
    title: "Automated DMCA Enforcement",
    description:
      "Legally compliant takedown notices sent to hosting providers, CDNs, registrars, and search engines. Escalation ladder from site operator to upstream infrastructure.",
  },
  {
    icon: Globe,
    title: "Google & Bing De-indexing",
    description:
      "Remove leaked Patreon content from search results so people searching for free access to your tiers can't find it.",
  },
  {
    icon: Fingerprint,
    title: "Forensic Watermarking",
    description:
      "Invisible watermarks trace leaks to the exact patron who shared your content. Identify and remove bad actors from your community.",
  },
  {
    icon: Lock,
    title: "Content Fingerprinting",
    description:
      "Create digital fingerprints of your Patreon posts and media. Prove ownership instantly when filing disputes or DMCA claims.",
  },
  {
    icon: Ban,
    title: "Persistent Enforcement",
    description:
      "When content reappears on the same or new sites, Privly re-files automatically. Escalation to domain registrars for repeat offenders.",
  },
];

const stats = [
  { value: "500+", label: "Sites scanned for leaks" },
  { value: "96%", label: "DMCA success rate" },
  { value: "48hrs", label: "Average removal time" },
  { value: "24/7", label: "Automated monitoring" },
];

const faqItems = [
  {
    q: "How is my Patreon content ending up on Kemono and piracy sites?",
    a: "Automated scrapers dump entire Patreon feeds to sites like Kemono.party. Some patrons use account sharing or take screenshots of tier-exclusive content. Kemono imports entire archives at once. Privly monitors these sites and files takedowns automatically when your content is detected.",
  },
  {
    q: "Can I get my content removed from Kemono.party?",
    a: "Yes. DMCA takedowns work because the hosting infrastructure must comply. Privly targets the hosting provider and CDN, not just the site itself. We also submit Google de-indexing requests to remove your content from search results. This multi-target approach achieves 96% removal rates.",
  },
  {
    q: "How do I stop patrons from sharing my exclusive content?",
    a: "Forensic watermarking identifies the specific patron who captured and shared your content. Combined with Patreon's own moderation tools, you can ban leakers and deter future sharing. The knowledge that their patron ID is embedded in your content creates accountability.",
  },
  {
    q: "How effective are DMCA takedowns for Patreon content?",
    a: "96% success rate when targeting hosting + CDN + registrar simultaneously. Single-target notices filed only to the site have much lower success rates (40-50%). Privly automates the multi-target approach, escalating from the site operator to upstream infrastructure providers.",
  },
  {
    q: "What types of Patreon content can Privly protect?",
    a: "Images, videos, audio, PDFs, downloadable files, and text posts. Works for all creator categories: art, education, podcasts, fitness, writing, and adult content. Any content you post behind a Patreon paywall can be protected.",
  },
  {
    q: "How much does Patreon content protection cost?",
    a: "$49/month with a 7-day free trial. No credit card required. Compared to the average $3,500/month in losses from leaks, Privly pays for itself immediately while protecting your community's trust.",
  },
];

export default function PatreonPage() {
  const canonical = `${SITE_CONFIG.url}/patreon`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Platforms", url: SITE_CONFIG.url },
    { name: "Patreon", url: canonical },
  ]);
  const productSchema = generateProductSchema({
    name: "Privly Patreon Protection",
    description:
      "Content protection for Patreon creators. Automated DMCA takedowns, forensic watermarking, leak source tracing, and 24/7 scanning across 500+ sites.",
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
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for Patreon Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="from-orange-400 to-red-400" style={{ color: 'var(--accent)' }}>
                Patreon Membership
              </span>{" "}
              From Content Pirates
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Tier-exclusive content appearing on Kemono and piracy forums. Patrons sharing member-only posts. Years of archives scraped and dumped. Privly automatically finds and removes your stolen content across 500+ sites.
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
                Patreon Piracy Is Costing Creators Thousands
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                The average affected creator loses $3,500/month to leaks. Communities built on trust are destroyed when exclusive content becomes free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kemono & Scraping Bots</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Automated scrapers dump entire Patreon archives to sites like Kemono.party. Your months of exclusive content becomes free overnight, destroying membership tier value.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$42,000/yr in Lost Pledges</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  When tier-exclusive content is freely available, patrons downgrade or cancel. The average affected creator loses $3,500/month in recurring revenue.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patron Trust Eroded</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Paying members feel cheated when they see your exclusive content shared freely. Leaks don't just cost revenue — they damage your community's foundation.
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
                How Privly Protects Your Patreon Content
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                From detection to removal in hours, not weeks
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Add Your Content",
                  description:
                    "Upload your Patreon posts, images, and media to Privly. We create unique digital fingerprints that match your content even when it's been reposted, compressed, or cropped.",
                },
                {
                  step: "2",
                  title: "Continuous Monitoring",
                  description:
                    "We scan Kemono, piracy forums, file hosts, Telegram, Discord, Reddit, and 500+ other platforms around the clock for your Patreon content.",
                },
                {
                  step: "3",
                  title: "Automated Takedowns",
                  description:
                    "When a leak is found, DMCA notices go to the site operator, hosting provider, CDN, and search engines simultaneously. No manual work required.",
                },
                {
                  step: "4",
                  title: "Dashboard & Reporting",
                  description:
                    "Track every leak detected, every takedown filed, and every removal confirmed. Export reports to share with your Patreon community or legal team.",
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
                Complete Patreon Content Protection
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent leaks of your Patreon membership content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    "Scrapers dump your archive before you notice",
                    "Filing DMCA notices manually takes hours per week",
                    "Single-target notices get ignored",
                    "Leaked posts stay in search results indefinitely",
                    "No way to identify which patron shared",
                    "Patrons cancel when exclusivity is gone",
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
                    "Leaks detected within hours across 500+ sites",
                    "DMCA takedowns filed and tracked automatically",
                    "96% success with multi-target enforcement",
                    "Google and Bing de-indexing removes search results",
                    "Forensic watermarks trace the source",
                    "70% reduction in freely available content",
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
                Patreon Content Protection FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about protecting your Patreon membership content
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
                Patreon Creator Guides
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                In-depth guides to protecting your Patreon content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "How to Remove Leaked Patreon Content from Kemono",
                  slug: "how-to-remove-leaked-patreon-content-kemono",
                  readTime: "8 min",
                },
                {
                  title: "Patreon Content Protection: The Complete Guide",
                  slug: "patreon-content-protection-complete-guide-creators",
                  readTime: "9 min",
                },
                {
                  title: "How Patreon Scrapers Work and How to Protect Your Posts",
                  slug: "how-patreon-scrapers-work-protect-your-posts",
                  readTime: "7 min",
                },
                {
                  title: "DMCA Takedowns for Patreon Creators: Step-by-Step",
                  slug: "patreon-dmca-takedown-step-by-step-guide",
                  readTime: "8 min",
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
                Your Patreon Content Deserves Real Protection
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Protect the community you've built. Stop leaks before they erode patron trust and destroy your recurring revenue.
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
                  name: "Patreon Content Protection",
                  item: "https://www.useprivly.com/patreon",
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
              name: "Privly Patreon Content Protection",
              description:
                "Automated leak detection, DMCA enforcement, and content protection for Patreon creators. Monitor 500+ sites for stolen content.",
              offers: {
                "@type": "Offer",
                price: "49",
                priceCurrency: "USD",
                priceValidUntil: "2026-12-31",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

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
  Camera,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chaturbate Content Protection | Stop Leaks & DMCA Takedowns | Privly",
  description:
    "Protect your Chaturbate content from leak sites and piracy. Automated leak scanning across 500+ sites, instant DMCA takedowns, forensic watermarking, and deepfake detection. Built for Chaturbate performers.",
  keywords: [
    "chaturbate leak protection",
    "chaturbate content protection",
    "chaturbate dmca",
    "chaturbate leaks",
    "chaturbate leak site",
    "chaturbate leak takedown",
    "protect chaturbate content",
    "chaturbate piracy",
    "chaturbate watermark",
    "chaturbate content theft",
    "remove leaked chaturbate content",
    "chaturbate leak takedown software",
    "stop chaturbate leaks",
    "chaturbate dmca takedown",
    "chaturbate copyright protection",
    "chaturbate recording",
    "chaturbate anti piracy",
  ],
  openGraph: {
    title: "Chaturbate Content Protection — Stop Leaks & Get Content Removed | Privly",
    description:
      "Automated leak scanning and DMCA takedowns built for Chaturbate performers. Find and remove your stolen content from 500+ leak sites.",
    type: "website",
    url: "https://www.useprivly.com/chaturbate",
  },
  alternates: {
    canonical: "https://www.useprivly.com/chaturbate",
  },
};

const features = [
  {
    icon: Search,
    title: "Chaturbate Leak Scanning",
    description:
      "Continuous automated scans across 500+ leak sites, tube sites, forums, Telegram, Discord, and file-sharing platforms for your Chaturbate streams and videos.",
  },
  {
    icon: FileText,
    title: "Automated DMCA Takedowns",
    description:
      "Legally compliant DMCA notices filed simultaneously with hosting providers, CDNs, domain registrars, and Google — not just the leak site operator.",
  },
  {
    icon: Fingerprint,
    title: "Forensic Watermarking",
    description:
      "Invisible watermarks embedded in your content that trace recordings back to the exact viewer who captured and shared your streams.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring that detects deepfakes and impersonation content using your Chaturbate photos and videos.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Get leaked content removed from Google search results so people can't find your Chaturbate streams for free through search.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely store and fingerprint your original Chaturbate content to prove ownership and strengthen DMCA disputes.",
  },
  {
    icon: Ban,
    title: "Leak Site Suppression",
    description:
      "Ongoing enforcement against repeat offender sites that rehost your streams. We track removals and re-file when content reappears.",
  },
  {
    icon: Camera,
    title: "Reverse Image Search",
    description:
      "Find your Chaturbate thumbnails and images across the web using TinEye and Google Lens integration — even when your name isn't attached.",
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
    q: "How do I protect my Chaturbate streams from being recorded and leaked?",
    a: "Use multiple layers of protection: enable Chaturbate's privacy settings, use forensic watermarks that identify who recorded the stream, and run automated monitoring to catch leaks early. Privly handles scanning 500+ leak sites and filing DMCA takedowns automatically when recordings appear online.",
  },
  {
    q: "How do I get my leaked Chaturbate recordings removed from the internet?",
    a: "File DMCA takedown notices with the hosting provider, CDN, domain registrar, and Google simultaneously. Target the infrastructure, not just the leak site. Privly automates this entire process — from detection through confirmed removal — achieving a 96% takedown success rate within 48-72 hours.",
  },
  {
    q: "How do I file a DMCA takedown for leaked Chaturbate content?",
    a: "A valid DMCA notice requires: identification of your copyrighted work, the exact URL of the infringing content, your contact information, a good-faith statement, and a signature under penalty of perjury. Send it to the hosting company's designated copyright agent.",
  },
  {
    q: "Is there software that automatically removes leaked Chaturbate content?",
    a: "Yes. Privly is a content protection platform built specifically for adult performers. It continuously scans for your content across 500+ platforms and automatically files DMCA takedowns when leaks are detected. It also handles Google de-indexing to remove leaked content from search results.",
  },
  {
    q: "How much do Chaturbate performers lose to stream recordings and leaks?",
    a: "Studies estimate that leaked streams cost the average Chaturbate performer $5,000+ per month in lost token revenue. Viewers who've seen free recordings are less likely to tip during live shows. Over a year, this compounds to $60,000+ in losses.",
  },
  {
    q: "Can I find out who recorded and leaked my Chaturbate stream?",
    a: "With forensic watermarking, yes. Invisible watermarks embedded in your stream identify which viewer recorded it. When leaked content is found, the watermark is extracted to reveal the recorder's viewer ID. You can then ban them and potentially pursue legal action.",
  },
  {
    q: "How do I watermark Chaturbate streams without affecting viewers?",
    a: "Forensic (invisible) watermarks don't affect stream quality or visibility at all — they're embedded in the pixel data and invisible to the human eye. Unlike visible watermarks that degrade stream experience, forensic watermarks survive recordings, compression, and re-encoding.",
  },
  {
    q: "What's the best content protection service for Chaturbate performers?",
    a: "Look for a service that covers all three pillars: monitoring (scanning 500+ leak sites continuously), enforcement (automated DMCA filing with hosting providers and Google), and prevention (forensic watermarking). Privly offers all three for $49/month with a 7-day free trial.",
  },
];

export default function ChaturbatePage() {
  const canonical = `${SITE_CONFIG.url}/chaturbate`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Platforms", url: SITE_CONFIG.url },
    { name: "Chaturbate", url: canonical },
  ]);
  const productSchema = generateProductSchema({
    name: "Privly Chaturbate Protection",
    description:
      "Content protection for Chaturbate cam models. Record-and-leak monitoring, automated DMCA takedowns, Telegram/Discord coverage, and dedicated human support.",
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
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for Chaturbate Performers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="from-amber-400 to-orange-400" style={{ color: 'var(--accent)' }}>
                Chaturbate Streams
              </span>{" "}
              From Recording and Piracy
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Automated leak scanning across 500+ sites, instant DMCA takedowns,
              forensic watermarking, and Google de-indexing. Find your stolen
              Chaturbate content and get it removed fast.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-amber-500/25"
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
                <p className="text-3xl font-bold from-amber-400 to-orange-400" style={{ color: 'var(--accent)' }}>
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
                Chaturbate Stream Recording Is an Epidemic
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                35% of Chaturbate performers report stream recordings being
                leaked. The average performer loses $5,000+/month to free leaked
                recordings. Manual takedowns can&apos;t keep up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$60,000/yr Lost</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  The average Chaturbate performer loses $5,000+ per month to
                  leaked stream recordings — over $60,000 per year in token
                  revenue that goes to free leak sites instead.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hours After Stream</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Streams are recorded and uploaded to leak sites within hours of
                  going live. Every hour without a takedown means more viewers
                  seeing free content instead of tipping.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">45% Income Loss</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Performers with heavily recorded and leaked streams see 40-50%
                  drops in tips. Why pay when the streams are free? Leaks destroy
                  your income stream.
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
                How Privly Protects Your Chaturbate Streams
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
                    "Add your Chaturbate stream clips to Privly's secure vault. We create unique digital fingerprints of every video — these are used to match your content when it appears on leak sites, even if it's been cropped, recompressed, or watermarked by the leaker.",
                },
                {
                  step: "2",
                  title: "Continuous Scanning",
                  description:
                    "Privly scans 500+ platforms 24/7 — leak sites, tube sites (the largest Chaturbate recording repositories), file-sharing (Mega, Google Drive), forums, Telegram, Discord, Reddit, and social media. We detect new recordings within hours of upload.",
                },
                {
                  step: "3",
                  title: "Instant DMCA Filing",
                  description:
                    "When leaked streams are found, Privly generates legally compliant DMCA notices and files them with the hosting provider, CDN (Cloudflare), domain registrar, and Google Search simultaneously. Multi-target filing achieves 96% removal rates.",
                },
                {
                  step: "4",
                  title: "Track & Enforce",
                  description:
                    "Monitor every takedown in your dashboard — from filing to confirmed removal. If content reappears, Privly automatically re-files. Persistent enforcement keeps your streams off leak sites long-term.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete Chaturbate Stream Protection
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent leaks of your
                Chaturbate streams — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-amber-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-amber-400" />
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
                    "Streams recorded and leaked hours after going live",
                    "Manual DMCA filing takes 15-30 hours/week",
                    "40-50% takedown success rate with DIY notices",
                    "Leaked streams stay in Google search results",
                    "No way to identify who recorded your stream",
                    "40-50% income drop after widespread leaks",
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
                    "Leaked streams detected within hours automatically",
                    "DMCA takedowns filed instantly — zero manual work",
                    "96% takedown success rate with multi-target filing",
                    "Google de-indexing removes streams from search",
                    "Forensic watermarks identify who recorded",
                    "70% reduction in active leaked streams",
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
                Chaturbate Stream Protection FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about protecting your Chaturbate streams
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
                Chaturbate Performer Guides
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                In-depth guides to protecting your Chaturbate streams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "How to Remove Leaked Chaturbate Streams from the Internet",
                  slug: "how-to-remove-leaked-chaturbate-streams",
                  readTime: "7 min",
                },
                {
                  title: "How Chaturbate Performers Are Losing Thousands to Leaks",
                  slug: "how-chaturbate-performers-losing-thousands-content-leaks",
                  readTime: "5 min",
                },
                {
                  title: "How to Watermark Chaturbate Streams",
                  slug: "how-to-watermark-chaturbate-streams",
                  readTime: "7 min",
                },
                {
                  title: "Chaturbate Leak Prevention: The Complete Security Guide",
                  slug: "chaturbate-leak-prevention-complete-security-guide",
                  readTime: "9 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group border rounded-xl p-6 hover:border-amber-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-900/30 text-amber-600 mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2 text-sm">
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
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-600 font-medium transition-colors duration-300"
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
            <div className="bg-gradient-to-br from-amber-600/10 via-orange-600/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stop Losing Income to Chaturbate Stream Leaks
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Join performers who have taken back control of their content.
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-amber-500/25"
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

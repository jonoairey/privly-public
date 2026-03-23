import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
  title: "Patreon Content Protection | Stop Leaks & DMCA Takedowns | Privly",
  description:
    "Protect your Patreon content from leak sites and piracy. Automated leak scanning across 500+ sites, instant DMCA takedowns, forensic watermarking, and deepfake detection. Built for Patreon creators.",
  keywords: [
    "patreon leak protection",
    "patreon content protection",
    "patreon dmca",
    "patreon leaks",
    "patreon leak site",
    "patreon leak takedown",
    "protect patreon content",
    "patreon piracy",
    "patreon watermark",
    "patreon content theft",
    "remove leaked patreon content",
    "patreon leak takedown software",
    "stop patreon leaks",
    "patreon dmca takedown",
    "patreon copyright protection",
    "patreon content stolen",
    "patreon leaked photos removed",
    "patreon anti piracy",
  ],
  openGraph: {
    title: "Patreon Content Protection — Stop Leaks & Get Content Removed | Privly",
    description:
      "Automated leak scanning and DMCA takedowns built for Patreon creators. Find and remove your stolen content from 500+ leak sites.",
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
    title: "Patreon Leak Scanning",
    description:
      "Continuous automated scans across 500+ leak sites, tube sites, forums, Telegram, Discord, and file-sharing platforms for your Patreon content.",
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
      "Invisible watermarks embedded in your content that trace leaks back to the exact patron who captured and shared it.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring that detects deepfakes and impersonation content using your Patreon photos and videos.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Get leaked content removed from Google search results so people can't find your Patreon content for free through search.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely store and fingerprint your original Patreon content to prove ownership and strengthen DMCA disputes.",
  },
  {
    icon: Ban,
    title: "Leak Site Suppression",
    description:
      "Ongoing enforcement against repeat offender sites that rehost your content. We track removals and re-file when content reappears.",
  },
  {
    icon: Camera,
    title: "Reverse Image Search",
    description:
      "Find your Patreon photos and thumbnails across the web using TinEye and Google Lens integration — even when your name isn't attached.",
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
    q: "How do I protect my Patreon content from being leaked?",
    a: "Use a layered approach: enable Patreon's content security settings, add forensic watermarks that identify leakers, and run automated scanning to catch leaks early. Privly handles scanning 500+ leak sites and filing DMCA takedowns automatically when your content is found.",
  },
  {
    q: "How do I get my leaked Patreon content removed from the internet?",
    a: "File DMCA takedown notices with the hosting provider, CDN, domain registrar, and Google simultaneously. Target the infrastructure, not just the leak site. Privly automates this entire process — from detection through confirmed removal — achieving a 96% takedown success rate within 48-72 hours.",
  },
  {
    q: "How do I file a DMCA takedown for Patreon content?",
    a: "A valid DMCA notice requires: identification of your copyrighted work, the exact URL of the infringing content, your contact information, a good-faith statement, and a signature under penalty of perjury. Send it to the hosting company's designated copyright agent.",
  },
  {
    q: "Is there software that automatically removes leaked Patreon content?",
    a: "Yes. Privly is a content protection platform built specifically for Patreon creators. It continuously scans for your content across 500+ platforms and automatically files DMCA takedowns when leaks are detected. It also handles Google de-indexing to remove leaked content from search results.",
  },
  {
    q: "How much revenue do Patreon creators lose to leaks?",
    a: "Studies estimate that content leaks cost the average Patreon creator $3,500 per month in lost revenue. Creators typically see a 25-35% drop in new patrons when their content is freely available on leak sites. Over a year, this compounds to $40,000+ in losses.",
  },
  {
    q: "Can I find out who leaked my Patreon content?",
    a: "With forensic watermarking, yes. Invisible watermarks embedded in your content identify which patron captured and shared it. When leaked content is found, the watermark is extracted to reveal the leaker's patron ID. You can then ban them and potentially pursue legal action.",
  },
  {
    q: "How do I watermark Patreon content without ruining quality?",
    a: "Forensic (invisible) watermarks don't affect visual quality at all — they're embedded in the pixel data and invisible to the human eye. Unlike visible watermarks that can be cropped or edited out, forensic watermarks survive screenshots, screen recordings, compression, and re-encoding.",
  },
  {
    q: "What's the best content protection service for Patreon creators?",
    a: "Look for a service that covers all three pillars: monitoring (scanning 500+ sites), enforcement (automated DMCA filing with hosting providers and Google), and prevention (forensic watermarking). Privly offers all three for $49/month with a 7-day free trial.",
  },
];

export default function PatreonPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for Patreon Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Patreon Content
              </span>{" "}
              From Leaks and Piracy
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Automated leak scanning across 500+ sites, instant DMCA takedowns,
              forensic watermarking, and Google de-indexing. Find your stolen
              Patreon content and get it removed fast.
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              7-day free trial. No credit card required. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Patreon Content Leaks Are an Epidemic
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                28% of Patreon creators have experienced unauthorized
                distribution. The average creator loses $3,500/month to leaks.
                Manual takedowns can&apos;t keep up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$42,000/yr Lost</h3>
                <p className="text-gray-400 text-sm">
                  The average Patreon creator loses $3,500 per month to leaked
                  content — over $42,000 per year in patron revenue that goes
                  to free sites instead.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24hr Spread Time</h3>
                <p className="text-gray-400 text-sm">
                  A single leaked post spreads to dozens of mirror sites within
                  24 hours. Every hour without a takedown means more copies and
                  more lost revenue.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">35% Patron Drop</h3>
                <p className="text-gray-400 text-sm">
                  Creators with widely leaked content see 25-35% drops in new
                  patrons. Why pay when it&apos;s free? Leaks destroy the
                  exclusivity your business depends on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Privly Protects Your Patreon Content
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From detection to removal in hours, not weeks
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Upload & Fingerprint",
                  description:
                    "Add your Patreon content to Privly's secure vault. We create unique digital fingerprints of every photo and video — these are used to match your content when it appears on leak sites, even if it's been cropped, compressed, or re-encoded.",
                },
                {
                  step: "2",
                  title: "Continuous Scanning",
                  description:
                    "Privly scans 500+ platforms 24/7 — leak sites, tube sites, file-sharing (Mega, Google Drive), forums, Reddit, Telegram channels, Discord servers, and social media. We use Google Custom Search, reverse image search, and direct platform monitoring.",
                },
                {
                  step: "3",
                  title: "Instant DMCA Filing",
                  description:
                    "When leaked content is found, Privly generates legally compliant DMCA notices and files them with the hosting provider, CDN (Cloudflare), domain registrar, and Google Search simultaneously. Multi-target filing achieves 96% removal rates.",
                },
                {
                  step: "4",
                  title: "Track & Enforce",
                  description:
                    "Monitor every takedown in your dashboard — from filing to confirmed removal. If content reappears, Privly automatically re-files. Persistent enforcement keeps your content suppressed long-term.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
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
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to find, remove, and prevent leaks of your
                Patreon content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-600/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison: With vs Without */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                With Privly vs. Without Protection
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Without */}
              <div className="bg-gray-900 border border-red-500/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Without Protection
                </h3>
                <ul className="space-y-4">
                  {[
                    "Leaks spread for weeks before you find them",
                    "Manual DMCA filing takes 10-20 hours/week",
                    "40-50% takedown success rate with DIY notices",
                    "Leaked content stays in Google search results",
                    "No way to identify which patron leaked",
                    "25-35% patron drop after major leaks",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Privly */}
              <div className="bg-gray-900 border border-green-500/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  With Privly
                </h3>
                <ul className="space-y-4">
                  {[
                    "Leaks detected within hours automatically",
                    "DMCA takedowns filed instantly — zero manual work",
                    "96% takedown success rate with multi-target filing",
                    "Google de-indexing cuts off search traffic to leaks",
                    "Forensic watermarks trace leaks to the patron",
                    "70% reduction in active leaked content",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
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
              <p className="text-gray-400">
                Common questions about protecting your Patreon content
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Patreon Creator Guides
              </h2>
              <p className="text-gray-400">
                In-depth guides to protecting your Patreon content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "How to Remove Leaked Patreon Content from the Internet",
                  slug: "how-to-remove-leaked-patreon-content",
                  readTime: "7 min",
                },
                {
                  title: "How Patreon Creators Are Losing Thousands to Content Leaks",
                  slug: "how-patreon-creators-losing-thousands-content-leaks",
                  readTime: "5 min",
                },
                {
                  title: "How to Watermark Patreon Content",
                  slug: "how-to-watermark-patreon-content",
                  readTime: "7 min",
                },
                {
                  title: "Patreon Leak Prevention: The Complete Security Checklist",
                  slug: "patreon-leak-prevention-complete-security-checklist",
                  readTime: "9 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-600/50 transition-colors duration-300"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-900/30 text-orange-300 mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2 text-sm">
                    {article.title}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {article.readTime} read
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300"
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
                Stop Losing Revenue to Patreon Leaks
              </h2>
              <p className="text-lg text-gray-400 mb-3 max-w-2xl mx-auto">
                Join creators who have taken back control of their content.
                Privly pays for itself by preventing losses that far exceed the
                monthly cost.
              </p>
              <p className="text-2xl font-bold text-white mb-8">
                $49<span className="text-gray-400 text-base font-normal">/month</span>
                <span className="text-gray-400 text-sm font-normal ml-2">
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
                  className="text-gray-400 hover:text-white transition-colors font-medium"
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

      <Footer />
    </div>
  );
}

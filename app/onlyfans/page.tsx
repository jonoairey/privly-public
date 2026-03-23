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
  title: "OnlyFans Content Protection | Stop Leaks & DMCA Takedowns | Privly",
  description:
    "Protect your OnlyFans content from leak sites and piracy. Automated leak scanning across 500+ sites, instant DMCA takedowns, forensic watermarking, and deepfake detection. Built for OnlyFans creators.",
  keywords: [
    "onlyfans leak protection",
    "onlyfans content protection",
    "onlyfans dmca",
    "onlyfans leaks",
    "onlyfans leak site",
    "onlyfans leak takedown",
    "protect onlyfans content",
    "onlyfans piracy",
    "onlyfans watermark",
    "onlyfans content theft",
    "remove leaked onlyfans content",
    "onlyfans leak takedown software",
    "stop onlyfans leaks",
    "onlyfans dmca takedown",
    "onlyfans copyright protection",
    "onlyfans content stolen",
    "onlyfans leaked photos removed",
    "onlyfans anti piracy",
  ],
  openGraph: {
    title: "OnlyFans Content Protection — Stop Leaks & Get Content Removed | Privly",
    description:
      "Automated leak scanning and DMCA takedowns built for OnlyFans creators. Find and remove your stolen content from 500+ leak sites.",
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
      "Continuous automated scans across 500+ leak sites, tube sites, forums, Telegram, Discord, and file-sharing platforms for your OnlyFans content.",
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
      "Invisible watermarks embedded in your content that trace leaks back to the exact subscriber who captured and shared it.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring that detects deepfakes and impersonation content using your OnlyFans photos and videos.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Get leaked content removed from Google search results so people can't find your OnlyFans content for free through search.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely store and fingerprint your original OnlyFans content to prove ownership and strengthen DMCA disputes.",
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
      "Find your OnlyFans photos and thumbnails across the web using TinEye and Google Lens integration — even when your name isn't attached.",
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
    q: "How do I protect my OnlyFans content from being leaked?",
    a: "Use a layered approach: enable OnlyFans' built-in DRM and watermarking, add forensic watermarks that identify leakers, and run automated scanning to catch leaks early. Privly handles scanning 500+ leak sites and filing DMCA takedowns automatically when your content is found.",
  },
  {
    q: "How do I get my leaked OnlyFans content removed from the internet?",
    a: "File DMCA takedown notices with the hosting provider, CDN, domain registrar, and Google simultaneously. Target the infrastructure, not just the leak site. Privly automates this entire process — from detection through confirmed removal — achieving a 96% takedown success rate within 48-72 hours.",
  },
  {
    q: "How do I file a DMCA takedown for OnlyFans content?",
    a: "A valid DMCA notice requires: identification of your copyrighted work, the exact URL of the infringing content, your contact information, a good-faith statement, and a signature under penalty of perjury. Send it to the hosting company's designated copyright agent. Major tube sites like Pornhub and XVideos have dedicated copyright reporting forms.",
  },
  {
    q: "Is there software that automatically removes leaked OnlyFans content?",
    a: "Yes. Privly is a content protection platform built specifically for OnlyFans creators. It continuously scans for your content across 500+ platforms and automatically files DMCA takedowns when leaks are detected. It also handles Google de-indexing to remove leaked content from search results.",
  },
  {
    q: "How much revenue do OnlyFans creators lose to leaks?",
    a: "Studies estimate that content leaks cost the average OnlyFans creator $4,500 per month in lost revenue. Creators typically see a 20-40% drop in new subscriptions when their content is freely available on leak sites. Over a year, this compounds to $50,000+ in losses.",
  },
  {
    q: "Can I find out who leaked my OnlyFans content?",
    a: "With forensic watermarking, yes. Invisible watermarks embedded in your content identify which subscriber captured and shared it. When leaked content is found, the watermark is extracted to reveal the leaker's subscriber ID. You can then ban them and potentially pursue legal action.",
  },
  {
    q: "How do I watermark OnlyFans content without ruining quality?",
    a: "Forensic (invisible) watermarks don't affect visual quality at all — they're embedded in the pixel data and invisible to the human eye. Unlike visible watermarks that can be cropped or edited out, forensic watermarks survive screenshots, screen recordings, compression, and re-encoding.",
  },
  {
    q: "What's the best content protection service for OnlyFans creators?",
    a: "Look for a service that covers all three pillars: monitoring (scanning 500+ sites), enforcement (automated DMCA filing with hosting providers and Google), and prevention (forensic watermarking). Privly offers all three for $49/month with a 7-day free trial.",
  },
];

export default function OnlyFansPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for OnlyFans Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                OnlyFans Content
              </span>{" "}
              From Leaks and Piracy
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Automated leak scanning across 500+ sites, instant DMCA takedowns,
              forensic watermarking, and Google de-indexing. Find your stolen
              OnlyFans content and get it removed fast.
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
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                OnlyFans Content Leaks Are an Epidemic
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                23% of adult content creators have experienced unauthorized
                distribution. The average creator loses $4,500/month to leaks.
                Manual takedowns can&apos;t keep up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$54,000/yr Lost</h3>
                <p className="text-gray-400 text-sm">
                  The average OnlyFans creator loses $4,500 per month to leaked
                  content — over $54,000 per year in subscriber revenue that goes
                  to free sites instead.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24hr Spread Time</h3>
                <p className="text-gray-400 text-sm">
                  A single leaked video spreads to dozens of mirror sites within
                  24 hours. Every hour without a takedown means more copies and
                  more lost revenue.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">40% Sub Drop</h3>
                <p className="text-gray-400 text-sm">
                  Creators with widely leaked content see 20-40% drops in new
                  subscriptions. Why pay when it&apos;s free? Leaks destroy the
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
                How Privly Protects Your OnlyFans Content
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
                    "Add your OnlyFans content to Privly's secure vault. We create unique digital fingerprints of every photo and video — these are used to match your content when it appears on leak sites, even if it's been cropped, compressed, or re-encoded.",
                },
                {
                  step: "2",
                  title: "Continuous Scanning",
                  description:
                    "Privly scans 500+ platforms 24/7 — leak sites, tube sites (Pornhub, XVideos, xHamster), file-sharing (Mega, Google Drive), forums, Reddit, Telegram channels, Discord servers, and social media. We use Google Custom Search, reverse image search, and direct platform monitoring.",
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete OnlyFans Content Protection
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to find, remove, and prevent leaks of your
                OnlyFans content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue-400" />
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
                    "No way to identify which subscriber leaked",
                    "20-40% subscriber drop after major leaks",
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
                    "Forensic watermarks trace leaks to the subscriber",
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
                OnlyFans Content Protection FAQ
              </h2>
              <p className="text-gray-400">
                Common questions about protecting your OnlyFans content
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
                OnlyFans Creator Guides
              </h2>
              <p className="text-gray-400">
                In-depth guides to protecting your OnlyFans content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "How to Remove Leaked OnlyFans Content from the Internet",
                  slug: "how-to-remove-leaked-onlyfans-content",
                  readTime: "7 min",
                },
                {
                  title: "How OnlyFans Creators Are Losing Thousands to Content Leaks",
                  slug: "how-onlyfans-creators-losing-thousands-content-leaks",
                  readTime: "5 min",
                },
                {
                  title: "How to Watermark OnlyFans Content",
                  slug: "how-to-watermark-onlyfans-content",
                  readTime: "7 min",
                },
                {
                  title: "OnlyFans Leak Prevention: The Complete Security Checklist",
                  slug: "onlyfans-leak-prevention-complete-security-checklist",
                  readTime: "9 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-colors duration-300"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300 mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 text-sm">
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
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
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
                Stop Losing Revenue to OnlyFans Leaks
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
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

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
  title: "TikTok Content Protection | Stop Video Theft & Copyright Violations | Privly",
  description:
    "Protect your TikTok videos from unauthorized sharing and download sites. Automated leak scanning across 500+ sites, instant DMCA takedowns, and deepfake detection. Built for TikTok creators.",
  keywords: [
    "tiktok leak protection",
    "tiktok content protection",
    "tiktok dmca",
    "tiktok leaks",
    "tiktok video theft",
    "protect tiktok videos",
    "tiktok piracy",
    "tiktok watermark",
    "tiktok content theft",
    "remove tiktok videos",
    "tiktok leak takedown software",
    "stop tiktok leaks",
    "tiktok dmca takedown",
    "tiktok copyright protection",
    "tiktok video download",
    "tiktok anti piracy",
    "tiktok stolen videos",
  ],
  openGraph: {
    title: "TikTok Content Protection — Stop Leaks & Get Content Removed | Privly",
    description:
      "Automated leak scanning and DMCA takedowns built for TikTok creators. Find and remove your stolen videos from 500+ leak sites.",
    type: "website",
    url: "https://www.useprivly.com/tiktok",
  },
  alternates: {
    canonical: "https://www.useprivly.com/tiktok",
  },
};

const features = [
  {
    icon: Search,
    title: "TikTok Leak Scanning",
    description:
      "Continuous automated scans across 500+ leak sites, video download sites, forums, Telegram, Discord, and file-sharing platforms for your TikTok videos.",
  },
  {
    icon: FileText,
    title: "Automated DMCA Takedowns",
    description:
      "Legally compliant DMCA notices filed simultaneously with hosting providers, CDNs, domain registrars, and Google — not just the leak site operator.",
  },
  {
    icon: Fingerprint,
    title: "Video Fingerprinting",
    description:
      "Advanced fingerprinting detects when your TikTok videos appear on download sites and piracy platforms, even if re-encoded or recompressed.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring that detects deepfakes and face swaps using your TikTok videos.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Get leaked videos removed from Google search results so people can't find your TikTok content for free through search.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely store and fingerprint your original TikTok videos to prove ownership and strengthen DMCA disputes.",
  },
  {
    icon: Ban,
    title: "Piracy Site Suppression",
    description:
      "Ongoing enforcement against video download and piracy sites. We track removals and re-file when content reappears.",
  },
  {
    icon: Camera,
    title: "Reverse Video Search",
    description:
      "Find your TikTok videos across the web using advanced video matching — even when thumbnails are changed.",
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
    q: "How do I protect my TikTok videos from being downloaded and shared?",
    a: "Use a layered approach: enable TikTok's privacy settings, add watermarks to your videos, and run automated scanning to catch leaks early. Privly handles scanning 500+ leak and download sites, filing DMCA takedowns automatically when your videos are found.",
  },
  {
    q: "How do I get my TikTok videos removed from download sites?",
    a: "File DMCA takedown notices with the hosting provider, CDN, domain registrar, and Google simultaneously. Target the infrastructure, not just the leak site. Privly automates this entire process — from detection through confirmed removal — achieving a 96% takedown success rate within 48-72 hours.",
  },
  {
    q: "How do I file a DMCA takedown for stolen TikTok videos?",
    a: "A valid DMCA notice requires: identification of your copyrighted work, the exact URL of the infringing content, your contact information, a good-faith statement, and a signature under penalty of perjury. Send it to the hosting company's designated copyright agent.",
  },
  {
    q: "Is there software that automatically removes leaked TikTok content?",
    a: "Yes. Privly is a content protection platform built specifically for creators. It continuously scans for your videos across 500+ platforms and automatically files DMCA takedowns when leaks are detected. It also handles Google de-indexing to remove leaked videos from search results.",
  },
  {
    q: "How much do TikTok creators lose to piracy and downloads?",
    a: "While TikTok videos themselves aren't directly monetized on the platform, leaked videos harm creators through lost brand partnerships, sponsored content opportunities, and audience engagement. Studies estimate $2,000-6,000 per month in lost opportunities per creator.",
  },
  {
    q: "Can I copyright claim my TikTok videos?",
    a: "Yes. You own the copyright to your original TikTok videos. File a DMCA takedown with the hosting provider if your videos appear on download or piracy sites. Privly automates this process, filing takedowns with hosting providers, Google, and CDNs simultaneously.",
  },
  {
    q: "What are the best TikTok download site alternatives?",
    a: "Don't use them. TikTok download sites are the primary distribution method for stolen creator content. Instead, save your videos directly from TikTok. If your videos appear on download sites, Privly can help remove them through automated DMCA takedowns.",
  },
  {
    q: "What's the best content protection service for TikTok creators?",
    a: "Look for a service that covers all three pillars: monitoring (scanning 500+ sites continuously), enforcement (automated DMCA filing), and prevention (watermarking). Privly offers all three for $49/month with a 7-day free trial.",
  },
];

export default function TikTokPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for TikTok Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                TikTok Videos
              </span>{" "}
              From Download Sites and Piracy
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Automated leak scanning across 500+ sites, instant DMCA takedowns,
              video fingerprinting, and deepfake detection. Find your stolen
              TikTok videos and get them removed fast.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
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

            <p className="text-sm text-gray-500 mt-4">
              7-day free trial. No credit card required. Cancel anytime.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                TikTok Video Download Sites Are an Epidemic
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                38% of TikTok creators report their videos appearing on download
                and piracy sites. These sites redistribute content and damage
                creator brands and partnerships. Manual takedowns can&apos;t keep up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">$36,000/yr Lost</h3>
                <p className="text-gray-400 text-sm">
                  The average TikTok creator loses $2,000-6,000 per month in lost
                  partnership and sponsorship opportunities when their videos are
                  on download sites — over $36,000 per year.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24hrs to Spread</h3>
                <p className="text-gray-400 text-sm">
                  TikTok videos are downloaded to piracy sites within 24 hours.
                  Every hour without a takedown means more distribution and more
                  damage to your brand.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">30% Partnership Loss</h3>
                <p className="text-gray-400 text-sm">
                  Brands are less likely to partner with creators whose content is
                  distributed on piracy sites. Your videos losing value means fewer
                  sponsorship opportunities.
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
                How Privly Protects Your TikTok Videos
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
                    "Add your TikTok videos to Privly's secure vault. We create unique digital fingerprints of every video — these are used to match your content when it appears on download sites, even if re-encoded or recompressed.",
                },
                {
                  step: "2",
                  title: "Continuous Scanning",
                  description:
                    "Privly scans 500+ platforms 24/7 — download sites, video piracy sites, file-sharing (Mega, Google Drive), forums, Reddit, Telegram channels, Discord servers, and social media. We detect stolen videos within hours.",
                },
                {
                  step: "3",
                  title: "Instant DMCA Filing",
                  description:
                    "When your videos are found, Privly generates legally compliant DMCA notices and files them with the hosting provider, CDN (Cloudflare), domain registrar, and Google Search simultaneously. Multi-target filing achieves 96% removal rates.",
                },
                {
                  step: "4",
                  title: "Track & Enforce",
                  description:
                    "Monitor every takedown in your dashboard — from filing to confirmed removal. If content reappears, Privly automatically re-files. Persistent enforcement keeps your videos off piracy sites long-term.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete TikTok Video Protection
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to find, remove, and prevent theft of your
                TikTok videos — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-600/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-cyan-400" />
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
                    "Videos on download sites within 24 hours",
                    "Manual DMCA filing takes 10-20 hours/week",
                    "40-50% takedown success rate with DIY notices",
                    "Stolen videos stay in Google search results",
                    "Lost brand partnerships and sponsorships",
                    "30% drop in partnership opportunities",
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
                    "Stolen videos detected within hours automatically",
                    "DMCA takedowns filed instantly — zero manual work",
                    "96% takedown success rate with multi-target filing",
                    "Google de-indexing removes videos from search",
                    "Brands see clean reputation and protection",
                    "70% reduction in active stolen videos",
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
                TikTok Video Protection FAQ
              </h2>
              <p className="text-gray-400">
                Common questions about protecting your TikTok videos
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
                TikTok Creator Guides
              </h2>
              <p className="text-gray-400">
                In-depth guides to protecting your TikTok videos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "How to Remove Your TikTok Videos from Download Sites",
                  slug: "how-to-remove-tiktok-videos-download-sites",
                  readTime: "7 min",
                },
                {
                  title: "How TikTok Creators Are Losing Partnerships to Piracy",
                  slug: "how-tiktok-creators-losing-partnerships-piracy",
                  readTime: "5 min",
                },
                {
                  title: "How to Watermark TikTok Videos",
                  slug: "how-to-watermark-tiktok-videos",
                  readTime: "7 min",
                },
                {
                  title: "TikTok Video Protection: The Complete Creator Guide",
                  slug: "tiktok-video-protection-complete-creator-guide",
                  readTime: "9 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-cyan-600/50 transition-colors duration-300"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-300 mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 text-sm">
                    {article.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {article.readTime} read
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
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
            <div className="bg-gradient-to-br from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border border-cyan-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stop Losing Partnerships to TikTok Video Piracy
              </h2>
              <p className="text-lg text-gray-400 mb-3 max-w-2xl mx-auto">
                Join creators who have taken back control of their content.
                Privly pays for itself by preventing losses that far exceed the
                monthly cost.
              </p>
              <p className="text-2xl font-bold text-white mb-8">
                $49<span className="text-gray-400 text-base font-normal">/month</span>
                <span className="text-gray-500 text-sm font-normal ml-2">
                  — 7-day free trial, cancel anytime
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
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

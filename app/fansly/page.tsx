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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fansly Content Protection | Stop Leaks & Remove Stolen Content | Privly",
  description:
    "Protect your Fansly content from leak sites. Automated leak scanning, DMCA takedowns, forensic watermarking, and deepfake detection built for Fansly creators. Get leaked content removed fast.",
  keywords: [
    "fansly leak protection",
    "fansly content protection",
    "fansly dmca",
    "fansly leaks",
    "fansly leak site",
    "is fansly safe",
    "fansly watermark",
    "fansly remove leaks",
    "fansly safe",
    "fansly vault",
    "protect fansly content",
    "fansly leak takedown",
    "fansly pirating",
    "anti content theft fansly",
  ],
  openGraph: {
    title: "Fansly Content Protection — Stop Leaks & Get Content Removed | Privly",
    description:
      "Automated leak scanning and DMCA takedowns built for Fansly creators. Find and remove your stolen content from leak sites.",
    type: "website",
    url: "https://www.useprivly.com/fansly",
  },
  alternates: {
    canonical: "https://www.useprivly.com/fansly",
  },
};

const features = [
  {
    icon: Search,
    title: "Fansly Leak Scanning",
    description:
      "Automated scans across 500+ leak sites, forums, Telegram channels, and tube sites for your Fansly content.",
  },
  {
    icon: FileText,
    title: "Automated DMCA Takedowns",
    description:
      "Legally compliant DMCA notices filed with hosting providers, platforms, and Google — not just the leak site.",
  },
  {
    icon: Fingerprint,
    title: "Forensic Watermarking",
    description:
      "Invisible watermarks that trace leaked Fansly content back to the exact subscriber who shared it.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection",
    description:
      "AI-powered monitoring that detects deepfakes and impersonation content using your Fansly identity.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Get leaked content removed from Google search results so fans can't find your Fansly content for free.",
  },
  {
    icon: Lock,
    title: "Content Vault",
    description:
      "Securely store and fingerprint your original Fansly content to prove ownership in DMCA disputes.",
  },
];

const stats = [
  { value: "500+", label: "Platforms monitored" },
  { value: "96%", label: "Takedown success rate" },
  { value: "<2hrs", label: "Average detection time" },
  { value: "24/7", label: "Automated monitoring" },
];

const faqItems = [
  {
    q: "How do I protect my Fansly content from leaks?",
    a: "Use a combination of Fansly's built-in DRM, forensic watermarking to trace leakers, and automated scanning to find leaks early. Privly handles all of this — scanning for your content across 500+ sites and filing DMCA takedowns automatically when leaks are found.",
  },
  {
    q: "Is Fansly safe for creators?",
    a: "Fansly has solid platform security with 2FA, DRM, and encrypted payments. However, no platform can prevent subscribers from screen-recording or screenshotting content. External content protection supplements Fansly's security to give you full coverage.",
  },
  {
    q: "How do I file a DMCA for leaked Fansly content?",
    a: "File DMCA notices with the hosting provider (not just the leak site), the CDN, the domain registrar, and Google Search simultaneously. Each notice must include specific legal language. Privly automates this entire process and typically achieves removal within 48-72 hours.",
  },
  {
    q: "Can I find out who leaked my Fansly content?",
    a: "With forensic watermarking, yes. Invisible watermarks embedded in your content identify which subscriber captured and shared it. When leaked content is found, the watermark is extracted to reveal the leaker's identity so you can ban them.",
  },
  {
    q: "How much does Fansly content protection cost?",
    a: "Privly's Creator Protection plan is $49/month and includes unlimited leak scanning, DMCA takedowns, deepfake detection, content vault, and Google de-indexing. Most Fansly creators see ROI within the first month.",
  },
  {
    q: "What leak sites does Privly scan for Fansly content?",
    a: "Privly monitors 500+ platforms including major tube sites, file-sharing services (Mega, Google Drive), forums, Reddit, Telegram channels, Discord servers, and dedicated leak aggregator sites — everywhere Fansly content typically gets shared.",
  },
];

export default function FanslyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Built for Fansly Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Stop{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fansly Leaks
              </span>{" "}
              Before They Cost You Thousands
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Automated leak scanning, DMCA takedowns, and forensic watermarking
              for Fansly creators. Find your stolen content on 500+ leak sites
              and get it removed fast.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
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
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Fansly Leak Sites Are Costing You Money
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Your paid Fansly content is being shared for free on leak sites,
                forums, and Telegram channels. Every day it stays up, you lose
                subscribers and revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">20-40% Revenue Loss</h3>
                <p className="text-gray-400 text-sm">
                  Creators with leaked content see a 20-40% drop in new
                  subscriptions as fans access content for free.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Spreads in Hours</h3>
                <p className="text-gray-400 text-sm">
                  A single leak can appear on dozens of mirror sites within 24-48
                  hours. Speed of response is everything.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Manual Takedowns Fail</h3>
                <p className="text-gray-400 text-sm">
                  Filing DMCA notices manually achieves 40-50% success. Automated
                  enforcement achieves 96% with proper targeting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Complete Fansly Content Protection
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything you need to find, remove, and prevent leaks of your
                Fansly content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-600/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Privly Protects Your Fansly Content
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Connect Your Profile",
                  description:
                    "Add your Fansly username and upload your content to the secure vault. Privly creates unique fingerprints of your original content for matching.",
                },
                {
                  step: "2",
                  title: "Automated Scanning",
                  description:
                    "Privly continuously scans 500+ platforms — leak sites, tube sites, forums, Telegram, Discord, and file-sharing services — for your content.",
                },
                {
                  step: "3",
                  title: "Instant DMCA Takedowns",
                  description:
                    "When leaked content is found, Privly generates and files legally compliant DMCA notices with the hosting provider, CDN, registrar, and Google simultaneously.",
                },
                {
                  step: "4",
                  title: "Confirmed Removal",
                  description:
                    "Track every takedown from filing to confirmed removal in your dashboard. Average removal time: 48-72 hours. 96% success rate.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Fansly Content Protection FAQ
              </h2>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Fansly Creator Guides
              </h2>
              <p className="text-gray-400">
                In-depth guides to protecting your Fansly content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Fansly Leak Sites: How to Find and Remove Your Leaked Content",
                  slug: "fansly-leak-sites-how-to-find-remove-leaked-content",
                  readTime: "7 min",
                },
                {
                  title: "Fansly DMCA: How to File Takedowns and Remove Leaked Content",
                  slug: "fansly-dmca-how-to-file-takedowns-remove-leaked-content",
                  readTime: "8 min",
                },
                {
                  title: "Is Fansly Safe? A Complete Security Guide for Creators",
                  slug: "is-fansly-safe-complete-security-guide-creators",
                  readTime: "8 min",
                },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-600/50 transition-colors duration-300"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300 mb-3">
                    Guide
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
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
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
              >
                View all articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Protecting Your Fansly Content Today
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Join creators who have taken back control of their content.
              7-day free trial, $49/month after. Cancel anytime.
            </p>
            <Link
              href="https://app.useprivly.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
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

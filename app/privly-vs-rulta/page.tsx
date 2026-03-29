import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  X,
  DollarSign,
  Search,
  FileText,
  Globe,
  MessageCircle,
  Fingerprint,
  Lock,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privly vs Rulta | Content Protection Comparison | Privly",
  description:
    "Compare Privly and Rulta side by side. See how features, pricing, and protection coverage stack up for OnlyFans, Fansly, and adult content creators.",
  keywords: [
    "privly vs rulta",
    "rulta alternative",
    "best dmca service onlyfans",
    "content protection comparison",
    "rulta review",
    "onlyfans leak protection",
    "dmca takedown service comparison",
    "rulta pricing",
  ],
  openGraph: {
    title: "Privly vs Rulta | Content Protection Compared",
    description:
      "Side-by-side comparison of Privly and Rulta for content creators. Compare pricing, features, and protection coverage.",
    type: "website",
    url: "https://www.useprivly.com/privly-vs-rulta",
  },
  alternates: {
    canonical: "https://www.useprivly.com/privly-vs-rulta",
  },
};

const comparisonFeatures = [
  {
    feature: "Monthly price",
    privly: "$49/mo (1 username)",
    rulta: "From $109/mo (Pro)",
    privlyHas: true,
    rultaHas: true,
    highlight: true,
  },
  {
    feature: "24/7 automated scanning",
    privly: "500+ platforms",
    rulta: "Yes, AI-powered",
    privlyHas: true,
    rultaHas: true,
  },
  {
    feature: "DMCA takedown filing",
    privly: "Unlimited, one-click",
    rulta: "10/day (Pro), 40/day (Premier), unlimited (Legend)",
    privlyHas: true,
    rultaHas: true,
  },
  {
    feature: "Google de-indexing",
    privly: "Included",
    rulta: "Included",
    privlyHas: true,
    rultaHas: true,
  },
  {
    feature: "Telegram monitoring & removal",
    privly: "Included in all plans",
    rulta: "Legend plan only ($324/mo)",
    privlyHas: true,
    rultaHas: false,
  },
  {
    feature: "Discord monitoring",
    privly: "Included in all plans",
    rulta: "Not available",
    privlyHas: true,
    rultaHas: false,
  },
  {
    feature: "Forensic watermarking",
    privly: "Invisible watermarks to trace leak sources",
    rulta: "Not available",
    privlyHas: true,
    rultaHas: false,
  },
  {
    feature: "Content Vault",
    privly: "Timestamped ownership proof",
    rulta: "Not available",
    privlyHas: true,
    rultaHas: false,
  },
  {
    feature: "Copyright registration",
    privly: "Included",
    rulta: "$120 extra (free on Legend)",
    privlyHas: true,
    rultaHas: false,
  },
  {
    feature: "Deepfake / AI detection",
    privly: "Included",
    rulta: "Not available",
    privlyHas: true,
    rultaHas: false,
  },
  {
    feature: "Impersonation detection",
    privly: "Included",
    rulta: "Premier and Legend only",
    privlyHas: true,
    rultaHas: true,
  },
  {
    feature: "Free trial",
    privly: "7-day free trial",
    rulta: "No free trial",
    privlyHas: true,
    rultaHas: false,
  },
];

const pricingComparison = [
  {
    plan: "Privly",
    price: "$49",
    period: "/mo",
    features: [
      "1 username included",
      "Unlimited scans",
      "Unlimited DMCA takedowns",
      "Telegram & Discord monitoring",
      "Forensic watermarking",
      "Content Vault",
      "Copyright registration",
      "Deepfake detection",
      "7-day free trial",
    ],
    highlight: true,
  },
  {
    plan: "Rulta Pro",
    price: "$109",
    period: "/mo",
    features: [
      "1 username included",
      "Automated scanning",
      "10 manual takedowns/day",
      "No Telegram removal",
      "No watermarking",
      "No Content Vault",
      "Copyright registration ($120 extra)",
      "No deepfake detection",
      "No free trial",
    ],
    highlight: false,
  },
  {
    plan: "Rulta Legend",
    price: "$324",
    period: "/mo",
    features: [
      "4 usernames included",
      "Automated scanning",
      "Unlimited takedowns",
      "Telegram removal included",
      "No watermarking",
      "No Content Vault",
      "Copyright registration included",
      "No deepfake detection",
      "No free trial",
    ],
    highlight: false,
  },
];

const faqItems = [
  {
    q: "Is Privly really cheaper than Rulta?",
    a: "Yes. Privly is $49/month for a single plan that includes everything. Rulta starts at $109/month for their Pro plan, which limits you to 10 manual takedowns per day and doesn't include Telegram removal. To get Telegram removal with Rulta, you need the Legend plan at $324/month.",
  },
  {
    q: "Does Rulta offer Telegram monitoring?",
    a: "Only on their Legend plan ($324/month). Telegram is one of the biggest sources of leaked creator content, and Privly includes Telegram and Discord monitoring on every plan at $49/month.",
  },
  {
    q: "What is forensic watermarking and why doesn't Rulta have it?",
    a: "Forensic watermarking embeds invisible markers into your content that survive screenshots, re-encoding, and cropping. If your content leaks, you can trace it back to the subscriber who shared it. Rulta focuses on detection and takedown but doesn't offer leak source identification.",
  },
  {
    q: "Does Privly have a free trial?",
    a: "Yes. Privly offers a 7-day free trial with full access to all features. No credit card required. Rulta does not offer a free trial.",
  },
  {
    q: "What about Rulta's removal success rate?",
    a: "According to Google Transparency data, Rulta achieves around a 78% removal rate from Google search results. Both services handle DMCA filing, but Privly also targets CDN providers and hosting infrastructure directly, which can speed up removal.",
  },
  {
    q: "Can I switch from Rulta to Privly?",
    a: "Yes. Sign up for a free trial, connect your accounts, and run your first scan. Your existing DMCA history stays with the platforms you filed with. There's no lock-in or data transfer needed.",
  },
  {
    q: "Which service is better for new creators?",
    a: "Privly is a better fit for creators just starting out. The 7-day free trial lets you see results before paying, the $49/month price is more accessible, and you get Telegram and Discord monitoring from day one without paying for a premium tier.",
  },
];

export default function PrivlyVsRultaPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Comparison
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Privly vs{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Rulta
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Both services protect creator content from piracy. Here's how they
              compare on pricing, features, and coverage so you can pick the
              right one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Try Privly Free for 7 Days
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                The Short Version
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">55% cheaper</h3>
                <p className="text-gray-400 text-sm">
                  $49/mo vs $109/mo for Rulta's cheapest plan. You'd need
                  Rulta's $324/mo Legend plan to match Privly's feature set.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 mx-auto">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Telegram & Discord included
                </h3>
                <p className="text-gray-400 text-sm">
                  Privly monitors both on every plan. Rulta charges $324/mo for
                  Telegram and doesn't cover Discord at all.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 mx-auto">
                  <Fingerprint className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Trace the source
                </h3>
                <p className="text-gray-400 text-sm">
                  Privly's forensic watermarking identifies which subscriber
                  leaked your content. Rulta doesn't offer this.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Feature-by-Feature Comparison
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                How Privly and Rulta compare across key protection features
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-800 bg-gray-900/80">
                <div className="text-sm font-semibold text-gray-400">
                  Feature
                </div>
                <div className="text-sm font-semibold text-purple-400 text-center">
                  Privly
                </div>
                <div className="text-sm font-semibold text-gray-400 text-center">
                  Rulta
                </div>
              </div>

              {/* Table rows */}
              {comparisonFeatures.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-3 gap-4 p-4 items-center ${
                    idx < comparisonFeatures.length - 1
                      ? "border-b border-gray-800/50"
                      : ""
                  } ${row.highlight ? "bg-purple-500/5" : ""}`}
                >
                  <div className="text-sm font-medium text-white">
                    {row.feature}
                  </div>
                  <div className="text-sm text-center">
                    <div className="flex items-center justify-center gap-2">
                      {row.privlyHas ? (
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      )}
                      <span className="text-gray-300 text-xs sm:text-sm">
                        {row.privly}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-center">
                    <div className="flex items-center justify-center gap-2">
                      {row.rultaHas ? (
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      )}
                      <span className="text-gray-400 text-xs sm:text-sm">
                        {row.rulta}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Pricing Comparison
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                What you get at each price point
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingComparison.map((plan) => (
                <div
                  key={plan.plan}
                  className={`rounded-xl p-6 ${
                    plan.highlight
                      ? "bg-gradient-to-b from-purple-600/10 to-violet-600/10 border-2 border-purple-500/30"
                      : "bg-gray-900 border border-gray-800"
                  }`}
                >
                  {plan.highlight && (
                    <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">
                      Best value
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {plan.plan}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => {
                      const isNegative =
                        feature.startsWith("No ") ||
                        feature.includes("extra") ||
                        feature.includes("/day");
                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          {isNegative ? (
                            <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          )}
                          <span
                            className={
                              isNegative ? "text-gray-500" : "text-gray-300"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Where Privly Pulls Ahead
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Telegram & Discord on every plan
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Telegram and Discord are where most leaked content gets
                      shared first. Privly monitors both on every plan. With
                      Rulta, Telegram removal is only available on the Legend
                      plan at $324/month, and Discord isn't covered at all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Fingerprint className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Find who leaked your content
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Privly's forensic watermarking embeds invisible markers
                      into your content. If it leaks, you can trace it back to
                      the specific subscriber who shared it. Rulta focuses on
                      detection and takedown but can't identify the source.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Content Vault for ownership proof
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Upload your original content to Privly's secure vault and
                      get timestamped proof of ownership. This strengthens any
                      DMCA filing and makes counter-claims much harder. Rulta
                      doesn't offer anything similar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      AI and deepfake detection
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Privly scans for AI-generated deepfakes using your
                      likeness, not just direct copies of your content. As
                      deepfake tools become more common, this is an increasingly
                      important layer of protection that Rulta doesn't provide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Rulta is Strong */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Where Rulta Does Well
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Credit where it's due
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-base font-semibold mb-2">
                  Established track record
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rulta has been around for a while and has processed millions
                  of takedowns. They're a known name in the creator protection
                  space with 20,000+ users.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-gray-700/50 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-base font-semibold mb-2">
                  Global scanning infrastructure
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rulta runs servers in 50+ countries for international
                  scanning. Their AI can detect cropped or re-encoded content,
                  not just exact matches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Common Questions
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

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/10 via-violet-600/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Try Privly free for 7 days
              </h2>
              <p className="text-lg text-gray-400 mb-3 max-w-2xl mx-auto">
                See how many leaks we find before you pay anything. No credit
                card required.
              </p>
              <p className="text-2xl font-bold text-white mb-8">
                $49
                <span className="text-gray-400 text-base font-normal">
                  /month
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Schema.org FAQ */}
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

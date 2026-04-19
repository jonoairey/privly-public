import { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import {
  Shield,
  FileText,
  Globe,
  Lock,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  Search,
  Fingerprint,
  Ban,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Remove Content from Erome | DMCA Takedown Guide | Privly",
  description:
    "Complete guide to removing your leaked content from Erome. DMCA takedowns, CDN targeting, Google de-indexing, and automated removal with Privly.",
  keywords: [
    "remove content from erome",
    "erome dmca",
    "erome takedown",
    "erome leak removal",
    "erome copyright removal",
    "get content removed from erome",
    "erome content takedown",
    "erome leak takedown",
    "how to remove from erome",
  ],
  openGraph: {
    title: "Remove Content from Erome | DMCA Takedown & Leak Removal | Privly",
    description:
      "Step-by-step guide to removing leaked content from Erome using DMCA takedowns and infrastructure targeting. Automated removal available.",
    type: "website",
    url: "https://www.useprivly.com/remove-from-erome",
  },
  alternates: {
    canonical: "https://www.useprivly.com/remove-from-erome",
  },
};

const features = [
  {
    icon: Search,
    title: "Leak Detection on Erome",
    description:
      "We continuously scan Erome and mirror sites for your content across all uploaded galleries and profiles.",
  },
  {
    icon: FileText,
    title: "Multi-Layer DMCA Filing",
    description:
      "File DMCA notices simultaneously with Erome, Cloudflare CDN, and the domain registrar for maximum compliance.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Remove leaked Erome URLs from Google search results so people can't find your content.",
  },
  {
    icon: Lock,
    title: "Infrastructure Targeting",
    description:
      "Target Erome's hosting provider and CDN to disable content delivery while DMCA notices are processed.",
  },
  {
    icon: Zap,
    title: "Persistent Enforcement",
    description:
      "Re-file DMCA notices when content reappears. Most creators see permanent suppression after 2-3 cycles.",
  },
  {
    icon: Ban,
    title: "Repeat Infringer Tracking",
    description:
      "Document Erome's pattern of rehosting your content for potential legal action against repeat violations.",
  },
];

const faqItems = [
  {
    q: "How long does it take to remove content from Erome?",
    a: "With proper DMCA filing targeting all infrastructure layers, content is typically removed within 24-72 hours. Cloudflare CDN blocking often occurs within hours, making content inaccessible even before Erome processes the DMCA notice.",
  },
  {
    q: "What's Erome's DMCA process?",
    a: "Locate Erome's DMCA agent in their terms of service. Send a notice identifying the copyrighted work, providing exact URLs, and including a statement under penalty of perjury that you own the copyright. Simultaneously file with Cloudflare and the domain registrar for faster removal.",
  },
  {
    q: "Why target Cloudflare and the registrar?",
    a: "Filing only with Erome achieves 30-40% compliance. Multi-layer filing increases success to 85-95%. Cloudflare can block content delivery within hours, and registrars can enforce copyright compliance on domain operators.",
  },
  {
    q: "Does Erome content reappear after removal?",
    a: "Yes, leakers sometimes re-upload removed content. This is why persistent enforcement is necessary. Most creators find that after 2-3 removal cycles, leakers stop re-uploading because the effort becomes uneconomical.",
  },
  {
    q: "What if I can't prove I created the content?",
    a: "Document creation metadata from your original files (timestamps, EXIF data, version history). If available, show publication history on the original platform. File ownership claims and include evidence of your copyright registration if applicable.",
  },
  {
    q: "Can Erome just ignore my DMCA notice?",
    a: "No. Platforms must honor valid DMCA notices to maintain safe harbor protection from liability. However, notices must be legally correct and specific. Vague or incomplete notices are often rejected.",
  },
  {
    q: "How do I find all instances of my content on Erome?",
    a: "Search Erome for your name and distinctive phrases. Use reverse image search (TinEye, Google Images) on your thumbnail images. Check Erome mirrors and related sites. Document every URL before filing DMCA notices.",
  },
  {
    q: "Is Google de-indexing really necessary?",
    a: "Yes. Many people discover your leaked content through Google search results. De-indexing removes the primary discovery mechanism and reduces traffic to the leaked content by 75-85%, even if files technically remain on Erome.",
  },
];

const dmcaSteps = [
  {
    title: "Document Your Content",
    description:
      "Search Erome thoroughly for your content using your name, scene descriptions, and reverse image search. Record exact URLs and screenshots of every gallery containing your material.",
  },
  {
    title: "Gather Ownership Proof",
    description:
      "Collect evidence you created the content: original file metadata, publication dates on your official platform, copyright registration, or timestamps showing creation before the Erome upload.",
  },
  {
    title: "Locate DMCA Contacts",
    description:
      "Find Erome's designated DMCA agent in their terms of service. Also identify Cloudflare's abuse contact and the domain registrar for Erome's domain.",
  },
  {
    title: "Write DMCA Notices",
    description:
      "Craft legally valid notices identifying the copyrighted work, providing exact URLs, including your contact information, and containing statements under penalty of perjury.",
  },
  {
    title: "File Simultaneously",
    description:
      "Send DMCA notices to Erome, Cloudflare, and the domain registrar at the same time. This multi-layer approach increases success from 30% to 85%+.",
  },
  {
    title: "Request Google De-indexing",
    description:
      "File removal requests in Google Search Console for each Erome URL. Use Google's Copyright Removal Tool as backup. Processing typically takes 24-48 hours.",
  },
];

export default function EromeRemovalPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Erome Leak Removal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Remove Your Content from{" "}
              <span className="from-red-400 to-orange-400" style={{ color: 'var(--accent)' }}>
                Erome
              </span>
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Complete guide to DMCA takedowns targeting Erome's hosting infrastructure.
              Automated removal achieves 85-95% success rates within 24-72 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-red-500/25"
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

        {/* The Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--line)]/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Erome: The Leak Aggregation Problem
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Erome has become one of the primary repositories for leaked adult
                content. Understanding how content spreads there is the first step to
                effective removal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Spread</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Content leaked to Erome spreads to dozens of mirror sites within
                  24 hours. Early detection and removal is critical.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Visibility</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Erome content ranks well in search results, making your leaked
                  material easily discoverable through Google.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Persistent Reuploads</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  After initial removal, leakers often re-upload removed content to
                  Erome, requiring persistent enforcement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DMCA Process Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                6-Step Erome DMCA Removal Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                From documentation to confirmed removal
              </p>
            </div>

            <div className="space-y-8">
              {dmcaSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                      {step.description}
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
                Comprehensive Erome Removal
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent Erome leaks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-red-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-400" />
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

        {/* Why Multi-Layer Filing Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Multi-Layer DMCA Filing Works Better
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Single Layer */}
              <div className="border border-red-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Single-Layer Filing (Erome Only)
                </h3>
                <ul className="space-y-4">
                  {[
                    "30-40% removal success rate",
                    "Content remains cached on CDN",
                    "Domain operator can ignore notice",
                    "7-14 days typical removal time",
                    "Limited enforcement pressure",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Multi-Layer */}
              <div className="border border-green-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Multi-Layer Filing (All Infrastructure)
                </h3>
                <ul className="space-y-4">
                  {[
                    "85-95% removal success rate",
                    "CDN blocks content within hours",
                    "Multiple enforcement pressure points",
                    "24-72 hours typical removal time",
                    "Domain registrar enforcement included",
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
                Erome Removal FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about removing content from Erome
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Leak Sites */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Remove from Other Leak Sites
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Complete removal guides for major leak platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Bunkr", slug: "remove-from-bunkr" },
                { name: "Simpcity", slug: "remove-from-simpcity" },
                { name: "Coomer", slug: "remove-from-coomer" },
                { name: "CyberDrop", slug: "remove-from-cyberdrop" },
              ].map((site) => (
                <Link
                  key={site.slug}
                  href={`/${site.slug}`}
                  className="group border rounded-xl p-6 hover:border-red-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <h3 className="font-semibold text-lg group-hover:text-red-400 transition-colors duration-300 mb-2">
                    {site.name}
                  </h3>
                  <p className="text-sm group-hover: transition-colors" style={{ color: 'var(--ink-2)' }}>
                    DMCA removal guide
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-600/10 via-orange-600/10 to-red-600/10 border border-red-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Automate Erome Removal
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Stop managing DMCA takedowns manually. Let Privly detect,
                file, and track Erome removals automatically.
              </p>
              <p className="text-2xl font-bold mb-8">
                $49<span className="text-base font-normal" style={{ color: 'var(--ink-2)' }}>/month</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-red-500/25"
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

      <MarketingFooter />
    </div>
  );
}

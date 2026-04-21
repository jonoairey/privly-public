import { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  SITE_CONFIG,
} from "@/lib/seo";
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
  title: "Remove Content from CyberDrop | DMCA Takedown Guide | Privly",
  description:
    "Complete guide to removing leaked content from CyberDrop. DMCA takedowns with Cloudflare targeting, Google de-indexing, and automated removal.",
  keywords: [
    "remove content from cyberdrop",
    "cyberdrop dmca",
    "cyberdrop takedown",
    "cyberdrop leak removal",
    "cyberdrop copyright removal",
    "get content removed from cyberdrop",
    "how to remove from cyberdrop",
    "cyberdrop file removal",
  ],
  openGraph: {
    title: "Remove Content from CyberDrop | DMCA Takedown & Leak Removal | Privly",
    description:
      "Step-by-step guide to removing leaked files from CyberDrop using DMCA takedowns and Cloudflare targeting. Automated removal available.",
    type: "website",
    url: "https://www.useprivly.com/remove-from-cyberdrop",
  },
  alternates: {
    canonical: "https://www.useprivly.com/remove-from-cyberdrop",
  },
};

const features = [
  {
    icon: Search,
    title: "CyberDrop Album Scanning",
    description:
      "Continuously scan CyberDrop albums and mirror sites for your content across all file uploads.",
  },
  {
    icon: FileText,
    title: "Multi-Target DMCA Filing",
    description:
      "File DMCA notices with CyberDrop, Cloudflare, and domain registrar simultaneously for 85%+ success rates.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Remove CyberDrop URLs from Google search results to eliminate discoverability of your leaked files.",
  },
  {
    icon: Lock,
    title: "Cloudflare CDN Blocking",
    description:
      "Target Cloudflare to disable content delivery while CyberDrop processes DMCA notices.",
  },
  {
    icon: Zap,
    title: "Album-Level Removal",
    description:
      "Track and remove entire albums containing your content, not just individual files.",
  },
  {
    icon: Ban,
    title: "Persistent Enforcement",
    description:
      "Re-file against reappearing content. Most creators achieve permanent suppression within 2-3 cycles.",
  },
];

const faqItems = [
  {
    q: "What is CyberDrop and why is my content there?",
    a: "CyberDrop is a file-sharing platform where leaked content from creators is organized into albums. Content typically appears through subscriber leaks or account compromises. CyberDrop's distributed album structure makes finding and removing your content complex but achievable with proper documentation.",
  },
  {
    q: "How long does CyberDrop DMCA removal take?",
    a: "With multi-target filing (CyberDrop + Cloudflare + registrar), removal typically occurs within 48-72 hours. Cloudflare often blocks content within hours, making it inaccessible even before CyberDrop processes the notice.",
  },
  {
    q: "Why do I need to file with Cloudflare separately?",
    a: "Cloudflare delivers CyberDrop's content. Filing only with CyberDrop achieves 30-40% compliance. Cloudflare can disable content delivery for specific URLs within hours, creating redundant removal mechanisms and increasing overall success to 85%+.",
  },
  {
    q: "Can I search for all my content on CyberDrop efficiently?",
    a: "Yes. Use CyberDrop's built-in search for your name and distinctive phrases. Use reverse image search (TinEye, Google Images) on your thumbnail images. Check multiple times as new albums may be created with your content after your initial search.",
  },
  {
    q: "What if my content is in multiple albums?",
    a: "List all album URLs in your DMCA notice. Most albums contain the same content organized differently, but each must be identified separately. Automated services like Privly track all instances and include them in single comprehensive DMCA filings.",
  },
  {
    q: "Does CyberDrop content stay removed?",
    a: "Usually, but leakers sometimes re-upload removed albums. This is why persistent enforcement is necessary. Most creators find that after 2-3 removal cycles, re-uploading becomes uneconomical for leakers.",
  },
  {
    q: "How important is Google de-indexing for CyberDrop?",
    a: "Very important. Many people discover CyberDrop albums through Google search. De-indexing those URLs removes the primary discovery mechanism and reduces traffic by 75-85%, even if albums technically remain on CyberDrop.",
  },
  {
    q: "Should I provide proof of copyright ownership?",
    a: "Yes. Include metadata from original files, timestamps showing creation before the CyberDrop upload, or proof of publication on your official platform. This strengthens your DMCA notice and reduces the likelihood of counter-claims.",
  },
];

const dmcaSteps = [
  {
    title: "Search CyberDrop Thoroughly",
    description:
      "Use CyberDrop's search, reverse image search, and multiple search phrases to locate all albums containing your content. Document every album URL.",
  },
  {
    title: "Document Everything",
    description:
      "Screenshot album pages, record upload dates, and preserve evidence of your content's presence. Create a spreadsheet tracking all album URLs.",
  },
  {
    title: "Gather Ownership Evidence",
    description:
      "Collect original file metadata, creation timestamps, publication dates on your official platform, or copyright registration documents.",
  },
  {
    title: "Locate All Contacts",
    description:
      "Find CyberDrop's abuse email, Cloudflare's DMCA agent, and the domain registrar for CyberDrop's domain.",
  },
  {
    title: "Draft Legal Notices",
    description:
      "Write DMCA notices identifying copyrighted works, providing exact album URLs, and including statements under penalty of perjury.",
  },
  {
    title: "File & De-index",
    description:
      "Send notices to all three parties simultaneously. File Google de-indexing requests. Track removal progress in your dashboard.",
  },
];

export default function CyberdropRemovalPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              CyberDrop Leak Removal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Remove Your Files from{" "}
              <span className="from-cyan-400 to-teal-400" style={{ color: 'var(--accent)' }}>
                CyberDrop
              </span>
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Complete guide to DMCA takedowns with Cloudflare targeting. Automated
              removal achieves 85%+ success rates within 48-72 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-lg hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
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
                CyberDrop: Album-Based Leak Distribution
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                CyberDrop's album structure makes removal complex but achievable.
                Understanding how to target all infrastructure layers is key to
                success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Albums</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Your content may be distributed across dozens of albums,
                  each requiring separate documentation and targeting.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CDN Caching</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Cloudflare caches CyberDrop content globally. Filing only with CyberDrop
                  leaves cached content available.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-cyan-600/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Search Indexing</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  CyberDrop albums rank in Google search results, making your
                  leaked content easily discoverable.
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
                6-Step CyberDrop DMCA Removal Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                From discovery to confirmed removal
              </p>
            </div>

            <div className="space-y-8">
              {dmcaSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete CyberDrop Removal Services
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything needed to find and remove your content from CyberDrop
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-cyan-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-cyan-400" />
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

        {/* Multi-Layer Advantage */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Cloudflare Targeting Makes the Difference
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-red-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Without CDN Targeting
                </h3>
                <ul className="space-y-4">
                  {[
                    "30-40% removal success rate",
                    "Content remains in CDN cache",
                    "Slow regional access reduction",
                    "7-14 days typical removal",
                    "CyberDrop may ignore notices",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-green-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  With CDN Targeting
                </h3>
                <ul className="space-y-4">
                  {[
                    "85%+ removal success rate",
                    "CDN blocks content within hours",
                    "Immediate global inaccessibility",
                    "48-72 hours typical removal",
                    "Multiple enforcement pressure points",
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
                CyberDrop Removal FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about CyberDrop content removal
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
                Complete removal guides for all major leak platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Bunkr", slug: "remove-from-bunkr" },
                { name: "Erome", slug: "remove-from-erome" },
                { name: "Simpcity", slug: "remove-from-simpcity" },
                { name: "Coomer", slug: "remove-from-coomer" },
              ].map((site) => (
                <Link
                  key={site.slug}
                  href={`/${site.slug}`}
                  className="group border rounded-xl p-6 hover:border-cyan-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <h3 className="font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300 mb-2">
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
            <div className="bg-gradient-to-br from-cyan-600/10 via-teal-600/10 to-cyan-600/10 border border-cyan-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Automate CyberDrop Removal
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Stop manually tracking CyberDrop albums. Let Privly scan,
                document, file, and track removals automatically.
              </p>
              <p className="text-2xl font-bold mb-8">
                $49<span className="text-base font-normal" style={{ color: 'var(--ink-2)' }}>/month</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-lg hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Structured data — FAQ, HowTo, Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateFAQSchema(faqItems.map((i) => ({ question: i.q, answer: i.a })))
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateHowToSchema({
                name: "How to remove content from Cyberdrop",
                description:
                  "Step-by-step guide to removing leaked content from Cyberdrop using DMCA takedowns, CDN targeting, and Google de-indexing.",
                totalTime: "PT30M",
                steps: dmcaSteps.map((s) => ({
                  name: s.title,
                  text: s.description,
                  url: `${SITE_CONFIG.url}/remove-from-cyberdrop`,
                })),
              })
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbSchema([
                { name: "Home", url: SITE_CONFIG.url },
                { name: "Remove content", url: `${SITE_CONFIG.url}/remove-from-cyberdrop` },
                { name: "Cyberdrop", url: `${SITE_CONFIG.url}/remove-from-cyberdrop` },
              ])
            ),
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

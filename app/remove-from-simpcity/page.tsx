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
  title: "Remove Content from Simpcity | DMCA Takedown Guide | Privly",
  description:
    "Complete guide to removing leaked content from Simpcity forum. DMCA takedowns, Cloudflare targeting, Google de-indexing, and automated removal.",
  keywords: [
    "remove content from simpcity",
    "simpcity dmca",
    "simpcity takedown",
    "simpcity leak removal",
    "simpcity copyright removal",
    "get content removed from simpcity",
    "how to remove from simpcity",
    "simpcity forum removal",
  ],
  openGraph: {
    title: "Remove Content from Simpcity | DMCA Takedown & Leak Removal | Privly",
    description:
      "Step-by-step guide to removing leaked content from Simpcity forum using DMCA takedowns. Automated forum content removal available.",
    type: "website",
    url: "https://www.useprivly.com/remove-from-simpcity",
  },
  alternates: {
    canonical: "https://www.useprivly.com/remove-from-simpcity",
  },
};

const features = [
  {
    icon: Search,
    title: "Simpcity Thread Detection",
    description:
      "Continuously scan Simpcity forums for threads containing your content across all sections.",
  },
  {
    icon: FileText,
    title: "Comprehensive DMCA Filing",
    description:
      "File DMCA notices with Simpcity, Cloudflare, and domain registrar targeting all infrastructure.",
  },
  {
    icon: Globe,
    title: "Forum-Specific Removal",
    description:
      "Target specific thread URLs where your content appears in discussion threads.",
  },
  {
    icon: Lock,
    title: "CDN Blocking",
    description:
      "Use Cloudflare notifications to disable content delivery across Simpcity's global network.",
  },
  {
    icon: Zap,
    title: "Thread Tracking",
    description:
      "Monitor removal of all threads containing your content in a single dashboard.",
  },
  {
    icon: Ban,
    title: "Persistent Forum Enforcement",
    description:
      "Re-file against new threads. Forums often can't keep pace with continuous enforcement.",
  },
];

const faqItems = [
  {
    q: "What is Simpcity and how is my content distributed there?",
    a: "Simpcity is a forum platform where leaked adult content is shared and discussed in threads. Content appears in multiple forums/sections and is referenced in discussion posts. Your content might appear across dozens of threads, each requiring separate documentation.",
  },
  {
    q: "Why is Simpcity removal harder than other platforms?",
    a: "Because content is distributed across many discussion threads rather than centralized in galleries or files. Each thread must be identified separately. Forums have weak moderation, making content persist longer. However, systematic DMCA filing still achieves 80%+ removal rates.",
  },
  {
    q: "How do I find all my content on Simpcity?",
    a: "Search the forum for your name, distinctive phrases, and scene descriptions. Check multiple search variations. Use reverse image search on your content thumbnails. Browse relevant forum sections directly. Create a master list of all thread URLs containing your material.",
  },
  {
    q: "Should I file separate DMCA notices for each thread?",
    a: "No. File one comprehensive DMCA notice listing multiple thread URLs. This is more efficient and demonstrates the scale of infringement. Simpcity and other recipients will understand they need to address your content systematically.",
  },
  {
    q: "What role does Cloudflare play in Simpcity removal?",
    a: "Simpcity uses Cloudflare for CDN services. Filing with Cloudflare can result in content delivery being disabled for specific URLs within hours, before Simpcity even processes your DMCA notice. This creates redundant removal mechanisms.",
  },
  {
    q: "How important is Google de-indexing for forum content?",
    a: "Critical. Many people discover forum leaks through Google searches. De-indexing Simpcity thread URLs removes the primary discovery mechanism and reduces traffic by 75-85%, even if threads technically remain on the forum.",
  },
  {
    q: "What if Simpcity ignores my DMCA notice?",
    a: "Document the non-compliance and file follow-up notices. Re-file with Cloudflare and the domain registrar emphasizing Simpcity's failure to comply with legal requirements. After 2-3 cycles, platform accountability pressure usually increases compliance.",
  },
  {
    q: "Do forum threads get de-listed from Google quickly?",
    a: "Usually within 24-48 hours of de-indexing requests. Google prioritizes removing copyrighted content from search results. After de-indexing, most traffic to Simpcity threads containing your content drops dramatically.",
  },
];

const dmcaSteps = [
  {
    title: "Search Simpcity Thoroughly",
    description:
      "Search for your name, content descriptions, and distinctive phrases. Check multiple forum sections. Use reverse image search on thumbnails. Document every thread URL containing your content.",
  },
  {
    title: "Document Thread Content",
    description:
      "Screenshot the full thread, noting post numbers where your content appears. Preserve evidence of the content's presence before filing DMCA notices.",
  },
  {
    title: "Create URL List",
    description:
      "Compile all thread URLs in a spreadsheet. Note which sections threads appear in and how many posts in each thread reference your content.",
  },
  {
    title: "Verify Ownership",
    description:
      "Gather proof you created the content: original file metadata, timestamps, publication on your official platform, or copyright registration.",
  },
  {
    title: "Draft Multi-URL DMCA Notice",
    description:
      "Write a single DMCA notice identifying all thread URLs. Include a statement under penalty of perjury and your contact information.",
  },
  {
    title: "File Simultaneously & Track",
    description:
      "Send notices to Simpcity, Cloudflare, and the registrar. File Google de-indexing requests. Monitor removal in your dashboard.",
  },
];

export default function SimpcityRemovalPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-[var(--hot)] text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Simpcity Leak Removal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Remove Your Content from{" "}
              <span className="from-pink-400 to-rose-400" style={{ color: 'var(--accent)' }}>
                Simpcity Forum
              </span>
            </h1>

            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              Complete guide to DMCA takedowns on forum-based leak distribution.
              Automated removal achieves 80%+ success rates within 48-72 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold text-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg shadow-pink-500/25"
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
                Simpcity: Thread-Based Leak Distribution
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Forum platforms distribute leaks across thousands of threads.
                Systematic removal requires understanding thread structure and DMCA
                procedures specific to forums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-[var(--hot)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Distributed Content</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Your content is scattered across dozens of discussion threads in
                  multiple forum sections, making discovery time-consuming.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Persistent Discussion</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Threads continue accumulating posts and comments long after
                  initial upload, increasing content visibility.
                </p>
              </div>
              <div className="border rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Heavy Indexing</h3>
                <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Forum threads are heavily indexed by Google, making your leaked
                  content highly discoverable through search.
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
                6-Step Simpcity DMCA Removal Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                From forum discovery to confirmed removal
              </p>
            </div>

            <div className="space-y-8">
              {dmcaSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete Simpcity Removal Services
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Everything needed to find and remove your content from Simpcity
                threads
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="border rounded-xl p-6 hover:border-pink-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[var(--hot)]" />
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

        {/* Forum vs File Hosting */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 /30" style={{ background: 'white', border: '1px solid var(--line)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Forum DMCA Removal vs File Hosting Removal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-orange-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-orange-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Forum-Based (Simpcity)
                </h3>
                <ul className="space-y-4">
                  {[
                    "Content spread across many threads",
                    "Manual thread discovery required",
                    "Moderation generally weak",
                    "Content persists in discussions",
                    "Requires comprehensive documentation",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="text-orange-400 mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-green-500/20 rounded-xl p-8" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  File Hosting (Bunkr/CyberDrop)
                </h3>
                <ul className="space-y-4">
                  {[
                    "Content centralized in galleries",
                    "Organized URLs easy to identify",
                    "Content management focused",
                    "Files removed completely",
                    "Documentation more straightforward",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
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
                Simpcity Removal FAQ
              </h2>
              <p  style={{ color: 'var(--ink-2)' }}>
                Common questions about forum content removal
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
                { name: "Erome", slug: "remove-from-erome" },
                { name: "Bunkr", slug: "remove-from-bunkr" },
                { name: "Coomer", slug: "remove-from-coomer" },
                { name: "CyberDrop", slug: "remove-from-cyberdrop" },
              ].map((site) => (
                <Link
                  key={site.slug}
                  href={`/${site.slug}`}
                  className="group border rounded-xl p-6 hover:border-pink-600/50 transition-colors duration-300" style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <h3 className="font-semibold text-lg group-hover:text-[var(--hot)] transition-colors duration-300 mb-2">
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
            <div className="bg-gradient-to-br from-pink-600/10 via-rose-600/10 to-pink-600/10 border border-pink-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Automate Simpcity Thread Removal
              </h2>
              <p className="text-lg mb-3 max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
                Stop searching Simpcity manually. Let Privly discover all
                threads containing your content and automate DMCA filing.
              </p>
              <p className="text-2xl font-bold mb-8">
                $49<span className="text-base font-normal" style={{ color: 'var(--ink-2)' }}>/month</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold text-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg shadow-pink-500/25"
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

import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
  title: "Remove Content from Coomer | DMCA Takedown Guide | Privly",
  description:
    "Complete guide to removing leaked content from Coomer.party and Coomer.su. Multi-domain DMCA takedowns, Cloudflare targeting, and automated removal.",
  keywords: [
    "remove content from coomer",
    "coomer party dmca",
    "coomer su takedown",
    "coomer leak removal",
    "coomer copyright removal",
    "get content removed from coomer",
    "how to remove from coomer party",
    "coomer content takedown",
  ],
  openGraph: {
    title: "Remove Content from Coomer | DMCA Takedown & Leak Removal | Privly",
    description:
      "Step-by-step guide to removing leaked content from all Coomer domains (coomer.party, coomer.su). Multi-domain DMCA filing and automated removal.",
    type: "website",
    url: "https://www.useprivly.com/remove-from-coomer",
  },
  alternates: {
    canonical: "https://www.useprivly.com/remove-from-coomer",
  },
};

const features = [
  {
    icon: Search,
    title: "Multi-Domain Scanning",
    description:
      "Scan all Coomer variants (coomer.party, coomer.su, and other active domains) for your content.",
  },
  {
    icon: FileText,
    title: "Simultaneous Multi-Domain DMCA",
    description:
      "File DMCA notices with all active Coomer domains, Cloudflare, and multiple domain registrars at once.",
  },
  {
    icon: Globe,
    title: "Search Result De-indexing",
    description:
      "Remove Coomer URLs from Google across all domains to eliminate discoverability through search.",
  },
  {
    icon: Lock,
    title: "CDN Infrastructure Targeting",
    description:
      "Target Cloudflare to disable content delivery across all Coomer variant domains simultaneously.",
  },
  {
    icon: Zap,
    title: "Domain Variant Tracking",
    description:
      "Monitor new Coomer domains and automatically add them to your removal campaign.",
  },
  {
    icon: Ban,
    title: "Repeat Infringer Documentation",
    description:
      "Track Coomer's pattern of domain multiplication for potential legal action against persistent violations.",
  },
];

const faqItems = [
  {
    q: "What is Coomer and why does it operate multiple domains?",
    a: "Coomer is a subscription content aggregation platform (coomer.party, coomer.su, and other variants) that automatically archives and redistributes leaked subscription content. Operating multiple domains is a deliberate evasion strategy — when one domain receives takedowns, the content reappears on other variants.",
  },
  {
    q: "How do I find my content across all Coomer domains?",
    a: "Search coomer.party, coomer.su, and any other known variants using your name and content descriptions. Check creator profiles for organized collections. Document URLs from each domain variant. New Coomer domains emerge as old ones face takedown pressure, so regular re-checking is necessary.",
  },
  {
    q: "Why is multi-domain filing necessary?",
    a: "Filing DMCA notices only with coomer.party leaves your content active on coomer.su and other variants. Effective removal requires simultaneously targeting all known domains, Cloudflare CDN, and multiple domain registrars. This prevents the leapfrog effect where takedowns on one domain result in re-uploads to others.",
  },
  {
    q: "How many Coomer domains currently exist?",
    a: "The number changes constantly as domains are taken down and new ones are registered. At any time, 2-5 active Coomer variants typically exist. Your DMCA strategy must account for potentially finding new variants and adding them to removal campaigns.",
  },
  {
    q: "What's the difference between coomer.party and coomer.su?",
    a: "Both are the same service operated under different domain names. coomer.party uses .party TLD (typically using different registrars), while coomer.su uses .su TLD (Russian registrar). Content on both sites is identical or mirrored. Both must be targeted separately.",
  },
  {
    q: "Can I remove my content from one Coomer domain but not others?",
    a: "You can file DMCA notices separately, but Coomer operators often copy content across domains automatically. Removing from coomer.party alone leaves your content on coomer.su and other variants. Comprehensive removal requires simultaneous multi-domain filing.",
  },
  {
    q: "How long does removal take from all Coomer domains?",
    a: "With simultaneous multi-domain filing, removal typically occurs within 48-72 hours from all active domains. Cloudflare can block content delivery within hours of notification. However, if new Coomer domains launch, your content may reappear there.",
  },
  {
    q: "What if my content reappears on a new Coomer domain?",
    a: "Repeat the DMCA filing process with the new domain, Cloudflare, and its registrar. Persistent enforcement is necessary because Coomer deliberately operates multiple domains. After 2-3 removal cycles, leakers often give up due to the effort and cost of continuous re-uploads.",
  },
];

const dmcaSteps = [
  {
    title: "Identify All Active Coomer Domains",
    description:
      "Research current Coomer variants (coomer.party, coomer.su, and others). Document all active domain names where your content may appear.",
  },
  {
    title: "Search All Variants",
    description:
      "Search each Coomer domain separately for your content. Check creator profiles, archives, and collections. Document URLs from each domain variant.",
  },
  {
    title: "Compile Master URL List",
    description:
      "Create a comprehensive spreadsheet listing all URLs containing your content, organized by domain variant. Include screenshot evidence from each domain.",
  },
  {
    title: "Gather Ownership Proof",
    description:
      "Collect original file metadata, creation timestamps, publication history on your official platform, or copyright registration documents.",
  },
  {
    title: "Draft Multi-Domain DMCA Notices",
    description:
      "Write separate DMCA notices for each domain variant (coomer.party, coomer.su, etc.) with specific URLs from that domain.",
  },
  {
    title: "File Simultaneously Everywhere",
    description:
      "Send DMCA notices to all Coomer domains, Cloudflare, and all relevant domain registrars simultaneously. File Google de-indexing requests for all domain variants.",
  },
];

export default function CoomerRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Coomer Leak Removal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Remove Your Content from{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Coomer
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Complete guide to DMCA takedowns across all Coomer domains.
              Multi-domain filing achieves 90%+ removal rates within 48-72 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25"
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

        {/* The Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Coomer: The Multi-Domain Leak Distribution Challenge
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Coomer's deliberate use of multiple domains creates unique removal
                challenges. Understanding the multi-domain strategy is essential for
                effective takedowns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Domain Multiplication</h3>
                <p className="text-gray-400 text-sm">
                  Content removed from coomer.party reappears on coomer.su and new
                  variants. Leakproof removal requires simultaneous multi-domain
                  targeting.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Re-uploads</h3>
                <p className="text-gray-400 text-sm">
                  Coomer automatically mirrors content across all active domains.
                  Manual handling of multiple domains is inefficient and error-prone.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Persistent Harassment</h3>
                <p className="text-gray-400 text-sm">
                  Coomer's infrastructure is designed specifically to evade
                  takedowns through redundancy and domain evasion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DMCA Process Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                6-Step Coomer Multi-Domain DMCA Removal
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From domain research to confirmed removal across all variants
              </p>
            </div>

            <div className="space-y-8">
              {dmcaSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
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
                Multi-Domain Coomer Removal
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything needed to remove your content from all Coomer variants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-600/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-indigo-400" />
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

        {/* Single vs Multi-Domain */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Single-Domain vs Multi-Domain Removal
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Why targeting all Coomer variants is necessary
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-red-500/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Single-Domain Filing
                </h3>
                <ul className="space-y-4">
                  {[
                    "Content removed from coomer.party",
                    "Reappears on coomer.su immediately",
                    "Manual process for each domain",
                    "Time-consuming and incomplete",
                    "Endless cat-and-mouse game",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 border border-green-500/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Multi-Domain Filing
                </h3>
                <ul className="space-y-4">
                  {[
                    "Simultaneous filing across all variants",
                    "All domains targeted at once",
                    "Comprehensive removal achieved",
                    "Leakers can't escape to alternate domain",
                    "Automated monitoring of new domains",
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
                Coomer Removal FAQ
              </h2>
              <p className="text-gray-400">
                Common questions about multi-domain Coomer removal
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-3">{item.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Leak Sites */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Remove from Other Leak Sites
              </h2>
              <p className="text-gray-400">
                Complete removal guides for all major leak platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Erome", slug: "remove-from-erome" },
                { name: "Bunkr", slug: "remove-from-bunkr" },
                { name: "Simpcity", slug: "remove-from-simpcity" },
                { name: "CyberDrop", slug: "remove-from-cyberdrop" },
              ].map((site) => (
                <Link
                  key={site.slug}
                  href={`/${site.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-600/50 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition-colors duration-300 mb-2">
                    {site.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-400 transition-colors">
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
            <div className="bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-indigo-600/10 border border-indigo-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Automate Multi-Domain Coomer Removal
              </h2>
              <p className="text-lg text-gray-400 mb-3 max-w-2xl mx-auto">
                Stop manually filing DMCA notices to multiple Coomer domains.
                Privly detects all variants and files simultaneously.
              </p>
              <p className="text-2xl font-bold text-white mb-8">
                $49<span className="text-gray-400 text-base font-normal">/month</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25"
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

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
  title: "Remove Content from Bunkr | DMCA Takedown Guide | Privly",
  description:
    "Complete guide to removing leaked content from Bunkr. DMCA takedowns with Bunny CDN targeting, Google de-indexing, and automated removal.",
  keywords: [
    "remove content from bunkr",
    "bunkr dmca",
    "bunkr takedown",
    "bunkr leak removal",
    "bunkr copyright removal",
    "get content removed from bunkr",
    "how to remove from bunkr",
    "bunkr file removal",
  ],
  openGraph: {
    title: "Remove Content from Bunkr | DMCA Takedown & Leak Removal | Privly",
    description:
      "Step-by-step guide to removing leaked files from Bunkr using DMCA takedowns and Bunny CDN targeting. Automated removal available.",
    type: "website",
    url: "https://www.useprivly.com/remove-from-bunkr",
  },
  alternates: {
    canonical: "https://www.useprivly.com/remove-from-bunkr",
  },
};

const features = [
  {
    icon: Search,
    title: "Bunkr Gallery Scanning",
    description:
      "Continuously scan Bunkr galleries and mirror sites for your content across all file uploads.",
  },
  {
    icon: FileText,
    title: "Multi-Target DMCA Filing",
    description:
      "File DMCA notices with Bunkr, Bunny CDN, and domain registrar simultaneously for 90%+ success rates.",
  },
  {
    icon: Globe,
    title: "Google De-indexing",
    description:
      "Remove Bunkr URLs from Google search results to eliminate discoverability of your leaked files.",
  },
  {
    icon: Lock,
    title: "CDN Blocking",
    description:
      "Target Bunny CDN to disable content delivery while Bunkr processes DMCA notices.",
  },
  {
    icon: Zap,
    title: "Gallery-Level Removal",
    description:
      "Track and remove entire galleries containing your content, not just individual files.",
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
    q: "What is Bunkr and why is my content there?",
    a: "Bunkr is a file-sharing platform where leaked content from creators is organized into galleries. Content typically appears through subscriber leaks or account compromises. Unlike centralized leak sites, Bunkr's distributed gallery structure makes finding and removing your content more complex but still very achievable.",
  },
  {
    q: "How long does Bunkr DMCA removal take?",
    a: "With multi-target filing (Bunkr + Bunny CDN + registrar), removal typically occurs within 24-48 hours. Bunny CDN often blocks content within hours, making it inaccessible even before Bunkr processes the notice.",
  },
  {
    q: "Why do I need to file with Bunny CDN separately?",
    a: "Bunny CDN delivers Bunkr's content. Filing only with Bunkr achieves 40-50% compliance. Bunny CDN can disable content delivery for specific URLs within hours, creating redundant removal mechanisms and increasing overall success to 90%+.",
  },
  {
    q: "Can I search for all my content on Bunkr efficiently?",
    a: "Yes. Use Bunkr's built-in search for your name and distinctive phrases. Use reverse image search (TinEye, Google Images) on your thumbnail images. Check multiple times as new galleries may be created with your content after your initial search.",
  },
  {
    q: "What if my content is in multiple galleries?",
    a: "List all gallery URLs in your DMCA notice. Most galleries contain the same content organized differently, but each must be identified separately. Automated services like Privly track all instances and include them in single comprehensive DMCA filings.",
  },
  {
    q: "Does Bunkr content stay removed?",
    a: "Usually, but leakers sometimes re-upload removed galleries. This is why persistent enforcement is necessary. Most creators find that after 2-3 removal cycles, re-uploading becomes uneconomical for leakers.",
  },
  {
    q: "How important is Google de-indexing for Bunkr?",
    a: "Very important. Many people discover Bunkr galleries through Google search. De-indexing those URLs removes the primary discovery mechanism and reduces traffic by 75-85%, even if galleries technically remain on Bunkr.",
  },
  {
    q: "Should I provide proof of copyright ownership?",
    a: "Yes. Include metadata from original files, timestamps showing creation before the Bunkr upload, or proof of publication on your official platform. This strengthens your DMCA notice and reduces the likelihood of counter-claims.",
  },
];

const dmcaSteps = [
  {
    title: "Search Bunkr Thoroughly",
    description:
      "Use Bunkr's search, reverse image search, and multiple search phrases to locate all galleries containing your content. Document every gallery URL.",
  },
  {
    title: "Document Everything",
    description:
      "Screenshot gallery pages, record upload dates, and preserve evidence of your content's presence. Create a spreadsheet tracking all gallery URLs.",
  },
  {
    title: "Gather Ownership Evidence",
    description:
      "Collect original file metadata, creation timestamps, publication dates on your official platform, or copyright registration documents.",
  },
  {
    title: "Locate All Contacts",
    description:
      "Find Bunkr's DMCA agent, Bunny CDN's abuse contact, and the domain registrar for Bunkr's domain.",
  },
  {
    title: "Draft Legal Notices",
    description:
      "Write DMCA notices identifying copyrighted works, providing exact gallery URLs, and including statements under penalty of perjury.",
  },
  {
    title: "File & De-index",
    description:
      "Send notices to all three parties simultaneously. File Google de-indexing requests. Track removal progress in your dashboard.",
  },
];

export default function BunkrRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Bunkr Leak Removal
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Remove Your Files from{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Bunkr
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Complete guide to DMCA takedowns with Bunny CDN targeting. Automated
              removal achieves 90%+ success rates within 24-48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold text-lg hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-500/25"
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

        {/* The Problem */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Bunkr: Gallery-Based Leak Distribution
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Bunkr's gallery structure makes removal complex but achievable.
                Understanding how to target all infrastructure layers is key to
                success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple Galleries</h3>
                <p className="text-gray-400 text-sm">
                  Your content may be distributed across dozens of galleries,
                  each requiring separate documentation and targeting.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CDN Caching</h3>
                <p className="text-gray-400 text-sm">
                  Bunny CDN caches Bunkr content globally. Filing only with Bunkr
                  leaves cached content available.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Search Indexing</h3>
                <p className="text-gray-400 text-sm">
                  Bunkr galleries rank in Google search results, making your
                  leaked content easily discoverable.
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
                6-Step Bunkr DMCA Removal Process
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From discovery to confirmed removal
              </p>
            </div>

            <div className="space-y-8">
              {dmcaSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
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
                Complete Bunkr Removal Services
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Everything needed to find and remove your content from Bunkr
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-600/50 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-amber-400" />
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

        {/* Multi-Layer Advantage */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Bunny CDN Targeting Makes the Difference
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border border-red-500/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Without CDN Targeting
                </h3>
                <ul className="space-y-4">
                  {[
                    "40-50% removal success rate",
                    "Content remains in CDN cache",
                    "Slow regional access reduction",
                    "7-14 days typical removal",
                    "Bunkr may ignore notices",
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
                  With CDN Targeting
                </h3>
                <ul className="space-y-4">
                  {[
                    "90%+ removal success rate",
                    "CDN blocks content within hours",
                    "Immediate global inaccessibility",
                    "24-48 hours typical removal",
                    "Multiple enforcement pressure points",
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
                Bunkr Removal FAQ
              </h2>
              <p className="text-gray-400">
                Common questions about Bunkr content removal
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
                { name: "Simpcity", slug: "remove-from-simpcity" },
                { name: "Coomer", slug: "remove-from-coomer" },
                { name: "CyberDrop", slug: "remove-from-cyberdrop" },
              ].map((site) => (
                <Link
                  key={site.slug}
                  href={`/${site.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-amber-600/50 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-lg group-hover:text-amber-400 transition-colors duration-300 mb-2">
                    {site.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
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
            <div className="bg-gradient-to-br from-amber-600/10 via-yellow-600/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Automate Bunkr Removal
              </h2>
              <p className="text-lg text-gray-400 mb-3 max-w-2xl mx-auto">
                Stop manually tracking Bunkr galleries. Let Privly scan,
                document, file, and track removals automatically.
              </p>
              <p className="text-2xl font-bold text-white mb-8">
                $49<span className="text-gray-400 text-base font-normal">/month</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://app.useprivly.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold text-lg hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-500/25"
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

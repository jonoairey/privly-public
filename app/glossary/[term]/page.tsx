import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { glossaryEntries } from "@/lib/glossary-data";
import { ArrowRight, ArrowLeft, Shield } from "lucide-react";

interface Props {
  params: Promise<{
    term: string;
  }>;
}

export async function generateStaticParams() {
  return glossaryEntries.map((entry) => ({
    term: entry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const entry = glossaryEntries.find((e) => e.slug === resolvedParams.term);

  if (!entry) {
    return {
      title: "Term Not Found | Privly Glossary",
    };
  }

  return {
    title: `${entry.term} — Content Protection Glossary | Privly`,
    description: entry.definition,
    keywords: [entry.term.toLowerCase(), ...entry.relatedTerms],
    openGraph: {
      title: `${entry.term} | Privly Glossary`,
      description: entry.definition,
      type: "website",
      url: `https://www.useprivly.com/glossary/${entry.slug}`,
    },
    alternates: {
      canonical: `https://www.useprivly.com/glossary/${entry.slug}`,
    },
  };
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Legal: "bg-blue-900/30 text-blue-300",
    Technology: "bg-purple-900/30 text-purple-300",
    Detection: "bg-orange-900/30 text-orange-300",
    Prevention: "bg-green-900/30 text-green-300",
    "AI & Security": "bg-pink-900/30 text-pink-300",
    Enforcement: "bg-indigo-900/30 text-indigo-300",
    Piracy: "bg-red-900/30 text-red-300",
    Security: "bg-cyan-900/30 text-cyan-300",
  };
  return colors[category] || "bg-gray-800 text-gray-300";
};

export default async function GlossaryTermPage({ params }: Props) {
  const resolvedParams = await params;
  const entry = glossaryEntries.find((e) => e.slug === resolvedParams.term);

  if (!entry) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
        <Header />
        <main className="flex-1 w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Term Not Found</h1>
            <p className="text-gray-400 mb-8">
              The glossary term you're looking for doesn't exist.
            </p>
            <Link
              href="/glossary"
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300"
            >
              Back to Glossary
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related entries
  const relatedTerms = glossaryEntries.filter((e) =>
    entry.relatedTerms.includes(e.slug)
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/glossary"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Glossary
          </Link>

          {/* Term Header */}
          <div className="mb-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                  entry.category
                )}`}
              >
                {entry.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {entry.term}
            </h1>

            {/* Quick Definition */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
              <p className="text-lg text-blue-200 leading-relaxed">
                {entry.definition}
              </p>
            </div>
          </div>

          {/* Extended Description */}
          <article className="prose prose-invert max-w-none mb-16">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              {entry.extendedDescription
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
            </div>
          </article>

          {/* Divider */}
          <div className="border-t border-gray-800 my-12" />

          {/* Related Terms */}
          {relatedTerms.length > 0 && (
            <section className="mt-16 mb-16">
              <h2 className="text-3xl font-bold mb-8">Related Terms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedTerms.map((relatedEntry) => (
                  <Link
                    key={relatedEntry.slug}
                    href={`/glossary/${relatedEntry.slug}`}
                    className="group"
                  >
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600/50 transition-colors duration-300 h-full">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium mb-3 ${getCategoryColor(
                          relatedEntry.category
                        )}`}
                      >
                        {relatedEntry.category}
                      </span>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {relatedEntry.term}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {relatedEntry.definition}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Divider */}
          <div className="border-t border-gray-800 my-12" />

          {/* CTA */}
          <section className="mt-16">
            <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-10 text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Protect Your Content Today
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Understand the concepts. Let Privly automate the enforcement.
                Continuous leak monitoring, instant DMCA takedowns, and forensic
                watermarking in one platform.
              </p>
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* DefinedTerm structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: entry.term,
            description: entry.definition,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Privly Content Protection Glossary",
              url: "https://www.useprivly.com/glossary",
            },
            url: `https://www.useprivly.com/glossary/${entry.slug}`,
          }),
        }}
      />
    </div>
  );
}

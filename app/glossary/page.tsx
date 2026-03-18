import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { glossaryEntries } from "@/lib/glossary-data";
import {
  Shield,
  Search,
  Lock,
  AlertTriangle,
  Zap,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Content Protection Glossary | Privly",
  description:
    "Learn content protection terminology. Understand DMCA takedowns, deepfakes, watermarking, leak sites, and other key concepts for protecting your digital content.",
  keywords: [
    "content protection glossary",
    "dmca glossary",
    "deepfake detection",
    "digital watermarking",
    "content piracy",
    "leak sites",
    "forensic watermarking",
    "perceptual hashing",
    "content fingerprinting",
    "reverse image search",
  ],
  openGraph: {
    title: "Content Protection Glossary — Key Terms and Concepts | Privly",
    description:
      "Comprehensive glossary of content protection terminology, from DMCA takedowns to deepfake detection.",
    type: "website",
    url: "https://www.useprivly.com/glossary",
  },
  alternates: {
    canonical: "https://www.useprivly.com/glossary",
  },
};

const categories = [
  { name: "Legal", color: "bg-blue-900/30 text-blue-300" },
  { name: "Technology", color: "bg-purple-900/30 text-purple-300" },
  { name: "Detection", color: "bg-orange-900/30 text-orange-300" },
  { name: "Prevention", color: "bg-green-900/30 text-green-300" },
  { name: "AI & Security", color: "bg-pink-900/30 text-pink-300" },
  { name: "Enforcement", color: "bg-indigo-900/30 text-indigo-300" },
  { name: "Piracy", color: "bg-red-900/30 text-red-300" },
  { name: "Security", color: "bg-cyan-900/30 text-cyan-300" },
];

export default function GlossaryPage() {
  const getCategoryColor = (category: string) => {
    const categoryObj = categories.find((c) => c.name === category);
    return categoryObj?.color || "bg-gray-800 text-gray-300";
  };

  const groupedByCategory = glossaryEntries.reduce(
    (acc, entry) => {
      if (!acc[entry.category]) {
        acc[entry.category] = [];
      }
      acc[entry.category].push(entry);
      return acc;
    },
    {} as Record<string, typeof glossaryEntries>
  );

  const sortedCategories = Object.keys(groupedByCategory).sort();

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
              <BookOpen className="w-4 h-4" />
              Content Protection Glossary
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Content Protection{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Terminology
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Master the language of content protection. Learn what deepfakes,
              watermarking, DMCA takedowns, and leak sites really mean.
            </p>
          </div>
        </section>

        {/* Category Overview */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/30 border-y border-gray-800/50">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-400 mb-8">
              {glossaryEntries.length} terms organized by category
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sortedCategories.map((category) => (
                <div
                  key={category}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center"
                >
                  <p className="font-semibold text-sm mb-1">{category}</p>
                  <p className="text-gray-400 text-lg font-bold">
                    {groupedByCategory[category].length}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary Terms by Category */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {sortedCategories.map((category) => (
              <div key={category} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-3 h-3 rounded-full ${getCategoryColor(category).split(' ')[0]}`} />
                  <h2 className="text-2xl font-bold">{category}</h2>
                  <span className="text-gray-500 text-sm ml-auto">
                    {groupedByCategory[category].length} terms
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupedByCategory[category]
                    .sort((a, b) => a.term.localeCompare(b.term))
                    .map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/glossary/${entry.slug}`}
                        className="group"
                      >
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-colors duration-300 h-full flex flex-col">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {entry.term}
                          </h3>

                          <p className="text-gray-400 text-sm mb-4 flex-grow">
                            {entry.definition}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                                entry.category
                              )}`}
                            >
                              {entry.category}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors duration-300" />
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use This Glossary */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Using This Glossary
              </h2>
              <p className="text-lg text-gray-400">
                Essential knowledge for content creators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-gray-400 text-sm">
                  Find and understand the terminology used in content protection,
                  piracy defense, and creator security.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Protection</h3>
                <p className="text-gray-400 text-sm">
                  Learn what protections like watermarking, fingerprinting, and
                  vaults actually do for your content.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Action</h3>
                <p className="text-gray-400 text-sm">
                  Understand how to respond to leaks, file takedowns, and use
                  enforcement strategies effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Protect Your Content?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Understanding your protection options is the first step. Privly
                automates the enforcement strategies explained in this glossary.
              </p>
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

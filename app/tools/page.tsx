import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { FileText, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Content Protection Tools | Privly',
  description:
    'Free tools for creators to protect their content. DMCA notice generator, leak detection guide, and more.',
  keywords: [
    'free dmca generator',
    'dmca tools',
    'content protection tools',
    'leak detection',
    'copyright tools',
  ],
  openGraph: {
    title: 'Free Content Protection Tools | Privly',
    description: 'Free tools for creators to protect their content.',
    type: 'website',
    url: 'https://www.useprivly.com/tools',
  },
  alternates: {
    canonical: 'https://www.useprivly.com/tools',
  },
};

interface Tool {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  badge: string;
  features: string[];
}

const tools: Tool[] = [
  {
    title: 'DMCA Notice Generator',
    description:
      'Create a legally compliant DMCA takedown notice in minutes. No lawyer required.',
    icon: <FileText className="w-8 h-8" />,
    href: '/tools/dmca-generator',
    badge: 'Free',
    features: [
      'Legally compliant format',
      'All required statutory elements',
      'Copy to clipboard or download',
      'Works for any platform',
    ],
  },
];

export default function ToolsPage() {
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
              <Zap className="w-4 h-4" />
              Free Tools for Creators
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Free Content Protection{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tools
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Powerful, free tools to help you protect your content from leaks and
              piracy. No credit card required.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-300"
                >
                  <div className="p-8 md:flex md:items-stretch">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                          {tool.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                            {tool.title}
                          </h3>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400">
                            {tool.badge}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">
                          Features:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {tool.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={tool.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                      >
                        Access Tool
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Leak Detection Scanner',
                    description:
                      'Upload your content and get a report of where it appears online',
                  },
                  {
                    title: 'Watermark Generator',
                    description:
                      'Create invisible watermarks to trace leaked content back to the source',
                  },
                ].map((tool) => (
                  <div
                    key={tool.title}
                    className="bg-gray-900 border border-gray-800 rounded-xl p-6 opacity-75"
                  >
                    <h3 className="font-semibold mb-2">{tool.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400">
                      Coming Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why These Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Creators Need These Tools
              </h2>
              <p className="text-lg text-gray-400">
                Protect your content independently, without expensive legal services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Free & Accessible',
                  description:
                    'Professional-grade tools available to all creators, regardless of budget',
                },
                {
                  title: 'Legally Compliant',
                  description:
                    'Our tools follow statutory requirements and legal best practices',
                },
                {
                  title: 'Takes Minutes',
                  description:
                    'No complex forms or confusing legal jargon. Just simple, clear steps',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                These Tools Are Just the Start
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                For complete protection, use Privly's automated platform. Detect leaks
                24/7, file takedowns instantly, and monitor removals across 500+ sites.
              </p>
              <Link
                href="https://app.useprivly.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Start Your Free Trial
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

import type { Metadata } from 'next';
import Link from 'next/link';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';

export const metadata: Metadata = {
  title: 'Page Not Found | Privly',
  description: 'The page you are looking for may have been moved or removed. Browse our resources or contact us for help.',
};

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-20">
        {/* 404 Display */}
        <div className="text-center mb-12">
          <div className="text-9xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            This page does not exist
          </h1>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--ink-2)' }}>
            The page you are looking for may have been moved or removed.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-200"
          >
            Go to Homepage
          </Link>
          <Link
            href="/articles"
            className="px-8 py-3 rounded-lg font-semibold border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-purple-500 hover:text-white transition-all duration-200"
          >
            Browse Articles
          </Link>
        </div>

        {/* Popular Pages Section */}
        <div className="w-full max-w-2xl mb-12">
          <h2 className="text-xl font-semibold mb-6 text-center">Popular Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link
              href="/how-it-works"
              className="p-4 rounded-lg border hover:border-[var(--accent)] hover: transition-all duration-200 text-center" style={{ background: 'white', border: '1px solid var(--line)' }}
            >
              <span className="hover:text-[var(--accent)]" style={{ color: 'var(--ink-2)' }}>How It Works</span>
            </Link>
            <Link
              href="/pricing"
              className="p-4 rounded-lg border hover:border-[var(--accent)] hover: transition-all duration-200 text-center" style={{ background: 'white', border: '1px solid var(--line)' }}
            >
              <span className="hover:text-[var(--accent)]" style={{ color: 'var(--ink-2)' }}>Pricing</span>
            </Link>
            <Link
              href="/tools/dmca-generator"
              className="p-4 rounded-lg border hover:border-[var(--accent)] hover: transition-all duration-200 text-center" style={{ background: 'white', border: '1px solid var(--line)' }}
            >
              <span className="hover:text-[var(--accent)]" style={{ color: 'var(--ink-2)' }}>DMCA Generator</span>
            </Link>
            <Link
              href="/onlyfans"
              className="p-4 rounded-lg border hover:border-[var(--accent)] hover: transition-all duration-200 text-center" style={{ background: 'white', border: '1px solid var(--line)' }}
            >
              <span className="hover:text-[var(--accent)]" style={{ color: 'var(--ink-2)' }}>OnlyFans Protection</span>
            </Link>
            <Link
              href="/fansly"
              className="p-4 rounded-lg border hover:border-[var(--accent)] hover: transition-all duration-200 text-center" style={{ background: 'white', border: '1px solid var(--line)' }}
            >
              <span className="hover:text-[var(--accent)]" style={{ color: 'var(--ink-2)' }}>Fansly Protection</span>
            </Link>
            <Link
              href="/glossary"
              className="p-4 rounded-lg border hover:border-[var(--accent)] hover: transition-all duration-200 text-center" style={{ background: 'white', border: '1px solid var(--line)' }}
            >
              <span className="hover:text-[var(--accent)]" style={{ color: 'var(--ink-2)' }}>Glossary</span>
            </Link>
          </div>
        </div>

        {/* Contact Fallback */}
        <div className="text-center mb-8">
          <p className="mb-3" style={{ color: 'var(--ink-2)' }}>
            Think something is broken?{' '}
            <Link href="/contact" className="text-[var(--accent)] hover:text-[var(--accent)] font-semibold">
              Let us know
            </Link>
          </p>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}

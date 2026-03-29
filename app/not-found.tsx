import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Page Not Found | Privly',
  description: 'The page you are looking for may have been moved or removed. Browse our resources or contact us for help.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-20">
        {/* 404 Display */}
        <div className="text-center mb-12">
          <div className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            This page does not exist
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
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
            className="px-8 py-3 rounded-lg font-semibold border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200"
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
              className="p-4 rounded-lg border border-gray-800 hover:border-purple-500 hover:bg-gray-900 transition-all duration-200 text-center"
            >
              <span className="text-gray-300 hover:text-purple-400">How It Works</span>
            </Link>
            <Link
              href="/pricing"
              className="p-4 rounded-lg border border-gray-800 hover:border-purple-500 hover:bg-gray-900 transition-all duration-200 text-center"
            >
              <span className="text-gray-300 hover:text-purple-400">Pricing</span>
            </Link>
            <Link
              href="/tools/dmca-generator"
              className="p-4 rounded-lg border border-gray-800 hover:border-purple-500 hover:bg-gray-900 transition-all duration-200 text-center"
            >
              <span className="text-gray-300 hover:text-purple-400">DMCA Generator</span>
            </Link>
            <Link
              href="/onlyfans"
              className="p-4 rounded-lg border border-gray-800 hover:border-purple-500 hover:bg-gray-900 transition-all duration-200 text-center"
            >
              <span className="text-gray-300 hover:text-purple-400">OnlyFans Protection</span>
            </Link>
            <Link
              href="/fansly"
              className="p-4 rounded-lg border border-gray-800 hover:border-purple-500 hover:bg-gray-900 transition-all duration-200 text-center"
            >
              <span className="text-gray-300 hover:text-purple-400">Fansly Protection</span>
            </Link>
            <Link
              href="/glossary"
              className="p-4 rounded-lg border border-gray-800 hover:border-purple-500 hover:bg-gray-900 transition-all duration-200 text-center"
            >
              <span className="text-gray-300 hover:text-purple-400">Glossary</span>
            </Link>
          </div>
        </div>

        {/* Contact Fallback */}
        <div className="text-center mb-8">
          <p className="text-gray-400 mb-3">
            Think something is broken?{' '}
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 font-semibold">
              Let us know
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

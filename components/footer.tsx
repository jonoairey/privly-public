'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Articles', href: '/articles' },
    { label: 'Glossary', href: '/glossary' },
  ],
  platforms: [
    { label: 'OnlyFans', href: '/onlyfans' },
    { label: 'Fansly', href: '/fansly' },
    { label: 'Patreon', href: '/patreon' },
    { label: 'ManyVids', href: '/manyvids' },
    { label: 'Chaturbate', href: '/chaturbate' },
    { label: 'Instagram', href: '/instagram' },
    { label: 'TikTok', href: '/tiktok' },
    { label: 'Reddit', href: '/reddit' },
  ],
  removal: [
    { label: 'Remove from Erome', href: '/remove-from-erome' },
    { label: 'Remove from Bunkr', href: '/remove-from-bunkr' },
    { label: 'Remove from Simpcity', href: '/remove-from-simpcity' },
    { label: 'Remove from Coomer', href: '/remove-from-coomer' },
  ],
  tools: [
    { label: 'All Tools', href: '/tools' },
    { label: 'DMCA Generator', href: '/tools/dmca-generator' },
    { label: 'Leak Report 2026', href: '/report/content-leaks-2026' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, 0.15) 25%, rgba(139, 92, 246, 0.15) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.15) 75%, rgba(139, 92, 246, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.15) 25%, rgba(139, 92, 246, 0.15) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.15) 75%, rgba(139, 92, 246, 0.15) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Gradient Glow at Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-600/20 via-pink-600/10 to-transparent pointer-events-none" />

      {/* Shimmer Line */}
      <div className="shimmer-line absolute top-0 left-0 right-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center group mb-4">
              <Image
                src="/logo-light.png"
                alt="Privly"
                width={200}
                height={100}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Secure your content. Protect your privacy. Own your voice.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Twitter
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Email
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platforms</h3>
            <ul className="space-y-2.5">
              {footerLinks.platforms.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Removal Guides Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Removal Guides</h3>
            <ul className="space-y-2.5">
              {footerLinks.removal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4 mt-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Privly. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

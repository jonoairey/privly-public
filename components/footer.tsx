'use client';

import Link from 'next/link';
import { Shield } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ],
  platforms: [
    { label: 'OnlyFans', href: '#' },
    { label: 'Fansly', href: '#' },
    { label: 'Patreon', href: '#' },
    { label: 'ManyVids', href: '#' },
    { label: 'Chaturbate', href: '#' },
    { label: '+ 500 more', href: '#' },
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-lg font-bold text-white">Privly</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Secure your content, protect your privacy, empower your voice.
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
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
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
            <h3 className="text-white font-semibold mb-6">Platforms</h3>
            <ul className="space-y-3">
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

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
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
            &copy; 2025 Privly. All rights reserved.
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

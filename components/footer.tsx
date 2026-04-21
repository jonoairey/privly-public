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
    { label: 'Remove from Coomer', href: '/remove-from-coomer' },
    { label: 'Remove from Simpcity', href: '/remove-from-simpcity' },
    { label: 'Remove from Cyberdrop', href: '/remove-from-cyberdrop' },
    { label: 'Remove from Telegram', href: '/remove-from-telegram' },
    { label: 'Remove from Google', href: '/remove-from-google' },
    { label: 'Remove from MrDeepfakes', href: '/remove-from-mrdeepfakes' },
    { label: 'Remove from ThotHub', href: '/remove-from-thothub' },
  ],
  compare: [
    { label: 'Privly vs Rulta', href: '/privly-vs-rulta' },
    { label: 'Privly vs Ceartas', href: '/privly-vs-ceartas' },
    { label: 'Privly vs BranditScan', href: '/privly-vs-branditscan' },
    { label: 'Privly vs CopyrightShark', href: '/privly-vs-copyrightshark' },
    { label: 'Privly vs Takedowns.ai', href: '/privly-vs-takedowns-ai' },
    { label: 'Privly vs OnlyGuard', href: '/privly-vs-onlyguard' },
    { label: 'Privly vs RemoveTech', href: '/privly-vs-removetech' },
    { label: 'Privly vs Bruqi', href: '/privly-vs-bruqi' },
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

      {/* Static border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-purple-500/20" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center group mb-4">
              <Image
                src="/logo-white.svg"
                alt="Privly"
                width={520}
                height={200}
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

          {/* Compare Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Compare</h3>
            <ul className="space-y-2.5">
              {footerLinks.compare.map((link) => (
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

        {/* Trust Badges */}
        <div className="border-t border-purple-500/20 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {/* DMCA Registered Agent Badge */}
            <div className="flex items-center gap-3 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/80 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">&copy;</text>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold leading-tight">Registered DMCA Agent</p>
                <p className="text-gray-500 text-xs leading-tight mt-0.5">U.S. Copyright Office &middot; 17 U.S.C. &sect; 512</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-purple-500/20" />

            {/* EU DSA Trusted Flagger Badge */}
            <div className="flex items-center gap-3 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/80 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  {/* EU stars circle */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
                    const rad = (angle * Math.PI) / 180;
                    const cx = 12 + 6.5 * Math.cos(rad - Math.PI / 2);
                    const cy = 12 + 6.5 * Math.sin(rad - Math.PI / 2);
                    return (
                      <circle key={angle} cx={cx} cy={cy} r="0.7" fill="currentColor" stroke="none" />
                    );
                  })}
                  {/* Shield in center */}
                  <path d="M12 7.5l3.5 1.5v3c0 2.5-1.5 4-3.5 5-2-1-3.5-2.5-3.5-5v-3L12 7.5z" fill="currentColor" stroke="none" opacity="0.6" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold leading-tight">EU Digital Services Act</p>
                <p className="text-gray-500 text-xs leading-tight mt-0.5">DSA Trusted Flagger &middot; Article 22</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
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

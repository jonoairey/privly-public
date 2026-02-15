'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';
import { NAV_LINKS, APP_URL } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-purple-500/20 shadow-lg shadow-purple-500/10' : ''
      }`}
    >
      {/* Glass Background */}
      <div className="absolute inset-0 glass pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Privly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={`${APP_URL}/auth/login`}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Log in
            </Link>
            <Link
              href={`${APP_URL}/auth/signup`}
              className="btn-glow px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-purple-500/20">
            <nav className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-purple-500/20 space-y-3">
                <Link
                  href={`${APP_URL}/auth/login`}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href={`${APP_URL}/auth/signup`}
                  className="btn-glow block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Shimmer Line */}
      <div className="shimmer-line absolute bottom-0 left-0 right-0" />
    </header>
  );
}

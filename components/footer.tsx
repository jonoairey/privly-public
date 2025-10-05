'use client'

import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Privly Me</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Take back control of your digital identity with AI-powered privacy protection. 
              We monitor, detect, and remove your personal information from data brokers, 
              while our privacy concierge team provides personalized support.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/scam-watch" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Scam Watch
                </Link>
              </li>
              <li>
                <Link href="/personal" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Personal
                </Link>
              </li>
              <li>
                <Link href="/professional" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Professional
                </Link>
              </li>
              <li>
                <Link href="/for-business" className="text-gray-300 hover:text-white transition-colors text-sm">
                  For Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Protection */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Creator Protection</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/platform-protection/onlyfans-leak-protection" className="text-gray-300 hover:text-white transition-colors text-sm">
                  OnlyFans Leak Protection
                </Link>
              </li>
              <li>
                <Link href="/guides/platform-protection/fansly-content-protection" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Fansly Content Protection
                </Link>
              </li>
              <li>
                <Link href="/guides/platform-protection/patreon-creator-privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Patreon Creator Privacy
                </Link>
              </li>
              <li>
                <Link href="/guides/platform-protection/manyvids-leak-detection" className="text-gray-300 hover:text-white transition-colors text-sm">
                  ManyVids Leak Detection
                </Link>
              </li>
              <li>
                <Link href="/guides/platform-protection/instagram-content-theft" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Instagram Content Theft
                </Link>
              </li>
              <li>
                <Link href="/guides/platform-protection/tiktok-creator-privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  TikTok Creator Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy How-To Guides */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Privacy Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/privacy-how-to/remove-leaked-content" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Remove Leaked Content
                </Link>
              </li>
              <li>
                <Link href="/guides/privacy-how-to/dmca-takedown-service" className="text-gray-300 hover:text-white transition-colors text-sm">
                  DMCA Takedown Service
                </Link>
              </li>
              <li>
                <Link href="/guides/privacy-how-to/stop-content-pirates" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Stop Content Pirates
                </Link>
              </li>
              <li>
                <Link href="/guides/privacy-how-to/dark-web-monitoring" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dark Web Monitoring
                </Link>
              </li>
              <li>
                <Link href="/guides/privacy-how-to/delete-yourself-from-internet" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Delete Yourself Online
                </Link>
              </li>
              <li>
                <Link href="/guides/privacy-how-to/data-broker-removal" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Data Broker Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Privly Me. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
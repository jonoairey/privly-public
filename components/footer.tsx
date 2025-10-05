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
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Indicators */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Trust & Security</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-white text-sm">Bank-Level Security</h5>
                <p className="text-gray-400 text-xs">256-bit SSL encryption</p>
              </div>
              <div>
                <h5 className="font-medium text-white text-sm">Trusted by Privacy Professionals</h5>
                <p className="text-gray-400 text-xs">Thousands of active users</p>
              </div>
              <div>
                <h5 className="font-medium text-white text-sm">30-Day Guarantee</h5>
                <p className="text-gray-400 text-xs">Money-back guarantee</p>
              </div>
            </div>
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
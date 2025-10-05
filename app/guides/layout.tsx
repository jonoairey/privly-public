import Link from 'next/link'
import { Shield } from 'lucide-react'
import Footer from '@/components/footer'

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Privly Me</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/personal" className="text-gray-600 hover:text-gray-900 transition-colors">
                Personal
              </Link>
              <Link href="/professional" className="text-gray-600 hover:text-gray-900 transition-colors">
                Professional
              </Link>
              <Link href="/for-business" className="text-gray-600 hover:text-gray-900 transition-colors">
                For Business
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL || 'https://app.useprivly.com'}/auth/signin`}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      {children}

      {/* Footer */}
      <Footer />
    </>
  )
}

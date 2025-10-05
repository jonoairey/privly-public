import { Metadata } from 'next'
import Link from 'next/link'
import { Trash2, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Delete Yourself from the Internet: Complete Privacy Guide | Privly',
  description: 'Step-by-step guide to removing your personal information from the internet. Delete social media, opt out of data brokers, and reclaim your privacy.',
}

export default function DeleteYourselfFromInternetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Trash2 className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Delete Yourself from the Internet
            </h1>
          </div>
          <p className="text-xl text-purple-100">
            Comprehensive guide to removing your personal information from the internet
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Your personal information is scattered across thousands of websites, databases, and social platforms. While complete deletion is nearly impossible, this guide shows you how to significantly reduce your digital footprint and reclaim your privacy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1: Delete Social Media Accounts</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">Social media platforms hold vast amounts of personal data. Here's how to delete your accounts permanently:</p>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Facebook</h3>
                <p className="text-sm text-gray-700 mb-2">Settings → Your Facebook Information → Deactivation and Deletion → Delete Account</p>
                <p className="text-xs text-gray-600">Note: 30-day grace period before permanent deletion. Download your data first if you want a backup.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-sm text-gray-700 mb-2">accountscenter.instagram.com → Personal Details → Account Ownership → Deactivate or Delete → Delete Account</p>
                <p className="text-xs text-gray-600">Note: Deletion is permanent after 30 days. Cannot be undone.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Twitter/X</h3>
                <p className="text-sm text-gray-700 mb-2">Settings → Your Account → Deactivate your account</p>
                <p className="text-xs text-gray-600">Note: 30-day deactivation period, then permanent deletion. Your @username becomes available to others.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-700 mb-2">Settings & Privacy → Account Preferences → Account Management → Closing your LinkedIn account</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">TikTok</h3>
                <p className="text-sm text-gray-700 mb-2">Settings → Manage Account → Delete Account</p>
                <p className="text-xs text-gray-600">Note: 30-day grace period before permanent deletion.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2: Remove from Data Brokers</h2>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Data brokers collect and sell your personal information—name, address, phone, email, property records, court records, and more. Opt out of major brokers:
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Major Data Brokers to Opt Out:</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• <strong>Whitepages:</strong> whitepages.com/suppression-requests</li>
                  <li>• <strong>Spokeo:</strong> spokeo.com/optout</li>
                  <li>• <strong>BeenVerified:</strong> beenverified.com/optout</li>
                  <li>• <strong>PeopleFinders:</strong> peoplefinders.com/opt-out</li>
                  <li>• <strong>Intelius:</strong> intelius.com/optout</li>
                  <li>• <strong>MyLife:</strong> mylife.com/privacy-policy (Contact support for removal)</li>
                  <li>• <strong>TruthFinder:</strong> truthfinder.com/opt-out</li>
                  <li>• <strong>Instant Checkmate:</strong> instantcheckmate.com/opt-out</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> There are 200+ data brokers in the US. Manual opt-out is time-consuming (20-40 hours) and brokers often re-add your data. Consider automated removal services like Privly for comprehensive coverage.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 3: Remove from Google Search</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">Even after deleting accounts, Google may still show your cached information in search results.</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Request URL Removal from Google:</h3>
                <ol className="space-y-2 text-gray-700 ml-6">
                  <li>1. Visit google.com/webmasters/tools/removals</li>
                  <li>2. Sign in with Google account</li>
                  <li>3. Click "New Request" → "Remove this URL"</li>
                  <li>4. Enter the URL you want removed</li>
                  <li>5. Select reason (e.g., "Contains personal information")</li>
                  <li>6. Submit request</li>
                </ol>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">For Personal Information:</h4>
                <p className="text-sm text-gray-700">
                  Use Google's "Remove personal information" form: support.google.com/websearch/answer/9673730
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Google prioritizes removal requests for doxxing, financial info, nude/intimate images, and government IDs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Delete Old Accounts & Online Profiles</h2>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Most people have dozens of forgotten accounts from old forums, shopping sites, and apps. Here's how to find and delete them:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tools to Find Your Accounts:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Email Search:</strong> Search your email inbox for "welcome", "verify", "created account"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Password Manager:</strong> Review saved logins in Chrome, Safari, or password managers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>JustDeleteMe:</strong> Directory of account deletion links for major services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>AccountKiller:</strong> Ratings of how difficult it is to delete accounts from various sites</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Priority Deletions:</h3>
                <ul className="space-y-1 text-sm text-gray-700 ml-6">
                  <li>• Shopping accounts with saved payment info</li>
                  <li>• Dating apps and relationship sites</li>
                  <li>• Old forums and community sites</li>
                  <li>• Abandoned blogs and websites</li>
                  <li>• Gaming accounts no longer used</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 5: Ongoing Privacy Maintenance</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Deleting yourself from the internet isn't a one-time task. Data brokers re-add information, new breaches occur, and content can resurface. Maintain your privacy with these habits:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Google yourself quarterly to find new results that need removal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Re-submit data broker opt-outs every 6 months (they often re-add you)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Use privacy-focused alternatives: DuckDuckGo (search), ProtonMail (email), Signal (messaging)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Minimize future data sharing: use email aliases, fake birthdays, PO boxes instead of home address</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Enable privacy settings on accounts you keep (limit data collection, ad targeting, public visibility)</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Privly's Complete Internet Deletion Service</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Automated Data Broker Removal</strong>
                  <p className="text-purple-100">We handle opt-outs from 200+ data brokers and continuously monitor for re-additions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Google De-Indexing</strong>
                  <p className="text-purple-100">We file removal requests to eliminate your personal info from Google search results</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Account Discovery & Deletion</strong>
                  <p className="text-purple-100">We find and delete forgotten accounts associated with your email addresses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Continuous Monitoring</strong>
                  <p className="text-purple-100">We monitor for your information resurfacing and automatically request removal</p>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Delete My Internet Presence
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Privacy Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/privacy-how-to/data-broker-removal" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Data Broker Removal Service</h3>
              <p className="text-gray-700 text-sm">Remove your info from data broker databases</p>
            </Link>
            <Link href="/guides/privacy-how-to/dark-web-monitoring" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Dark Web Monitoring</h3>
              <p className="text-gray-700 text-sm">Monitor for your data on the dark web</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

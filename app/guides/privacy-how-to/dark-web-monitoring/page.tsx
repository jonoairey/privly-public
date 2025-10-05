import { Metadata } from 'next'
import Link from 'next/link'
import { Eye, Shield, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dark Web Monitoring: Protect Your Personal Data & Identity | Privly',
  description: 'Learn how to monitor the dark web for your personal information, leaked credentials, and identity theft threats.',
}

export default function DarkWebMonitoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Dark Web Monitoring
            </h1>
          </div>
          <p className="text-xl text-purple-100">
            Protect yourself by monitoring the dark web for your personal information and leaked data
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Your Data Is Likely Already on the Dark Web</h3>
                <p className="text-yellow-800 text-sm">
                  Data breaches have exposed billions of records. There's a high probability your email, passwords, or personal information are already circulating on dark web marketplaces and forums.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            The dark web is a hidden part of the internet where stolen data, credentials, and personal information are bought and sold. This guide explains what dark web monitoring is, why it matters, and how to protect yourself.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Dark Web?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              The dark web is a portion of the internet not indexed by search engines, accessible only through special browsers like Tor. It hosts both legitimate privacy-focused services and illegal marketplaces where stolen data is traded.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">What Gets Sold on the Dark Web:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Email addresses and passwords</li>
                  <li>• Credit card numbers and CVVs</li>
                  <li>• Social Security numbers</li>
                  <li>• Bank account credentials</li>
                  <li>• Driver's license scans</li>
                </ul>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Medical records</li>
                  <li>• Cryptocurrency wallet keys</li>
                  <li>• Corporate login credentials</li>
                  <li>• Personal photos and videos</li>
                  <li>• Full identity packages</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Dark Web Monitoring Matters</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Early Warning System</h3>
              <p className="text-gray-700 mb-4">
                Dark web monitoring alerts you when your data appears on dark web marketplaces, giving you time to take protective action before criminals exploit it.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Change passwords immediately after credential leaks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Freeze credit before identity thieves open fraudulent accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Alert financial institutions of compromised card numbers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Sources of Dark Web Data:</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Data Breaches:</strong> Hacks of major companies (Facebook, LinkedIn, Equifax, etc.) expose millions of user records</li>
                <li><strong>Phishing Attacks:</strong> Credentials stolen through fake websites and emails</li>
                <li><strong>Malware:</strong> Keyloggers and info-stealers harvesting data from infected computers</li>
                <li><strong>Social Engineering:</strong> Scammers tricking people into revealing personal information</li>
                <li><strong>Insider Threats:</strong> Employees selling customer databases</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Monitor the Dark Web</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 1: Free Tools (Limited Coverage)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Have I Been Pwned (haveibeenpwned.com)</h4>
                  <p className="text-sm text-gray-700 mb-2">Check if your email appears in known data breaches. Free and reputable service by security researcher Troy Hunt.</p>
                  <p className="text-xs text-gray-600">Limitation: Only shows publicly disclosed breaches, not active dark web sales</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Google Password Checkup</h4>
                  <p className="text-sm text-gray-700 mb-2">Chrome extension that alerts you if saved passwords were compromised in breaches.</p>
                  <p className="text-xs text-gray-600">Limitation: Only checks credentials saved in Google Password Manager</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Firefox Monitor</h4>
                  <p className="text-sm text-gray-700 mb-2">Mozilla's breach monitoring service, powered by Have I Been Pwned data.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 2: Paid Monitoring Services</h3>
              <p className="text-gray-700 mb-4">
                Professional dark web monitoring services actively scan dark web forums, marketplaces, and private channels for your data.
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Credit Monitoring Services</h4>
                  <p className="text-sm text-gray-700">Experian, LifeLock, Identity Guard—focus on financial data and SSN monitoring</p>
                  <p className="text-xs text-gray-600">Cost: $10-30/month</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Privacy Services</h4>
                  <p className="text-sm text-gray-700">Privly, DeleteMe, Privacy Bee—monitor dark web + data brokers + social media</p>
                  <p className="text-xs text-gray-600">Cost: $30-100/month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Do If Your Data is on the Dark Web</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <strong className="block mb-1">Change Passwords Immediately</strong>
                  <p className="text-sm">Update passwords for all accounts using the compromised email/password. Use unique, strong passwords for each account.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <strong className="block mb-1">Enable Two-Factor Authentication</strong>
                  <p className="text-sm">Add 2FA to all critical accounts (email, banking, social media) to prevent unauthorized access even with leaked passwords.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <strong className="block mb-1">Freeze Your Credit</strong>
                  <p className="text-sm">Contact Equifax, Experian, and TransUnion to freeze your credit reports. Free and prevents new accounts being opened in your name.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <strong className="block mb-1">Monitor Financial Accounts</strong>
                  <p className="text-sm">Check bank statements, credit card transactions, and credit reports monthly for unauthorized activity.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</span>
                <div>
                  <strong className="block mb-1">File Identity Theft Report</strong>
                  <p className="text-sm">If fraud occurs, report to FTC at identitytheft.gov and file police report for legal protection.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Preventing Dark Web Exposure</h2>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Use unique passwords for every account—password managers make this easy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Enable 2FA on all accounts that support it</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Be cautious with data sharing—minimize personal info given to companies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Use privacy-focused email aliases for online accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>Regularly audit and delete old online accounts you no longer use</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Privly's Dark Web Monitoring</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Comprehensive Dark Web Scanning</strong>
                  <p className="text-purple-100">We monitor dark web marketplaces, forums, Telegram channels, and private paste sites for your data 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Instant Alerts</strong>
                  <p className="text-purple-100">Get notified within hours when your email, passwords, SSN, or other PII appears on dark web</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Guided Remediation</strong>
                  <p className="text-purple-100">Step-by-step instructions on what to do when your data is compromised</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Identity Theft Insurance</strong>
                  <p className="text-purple-100">Professional plan includes $1M identity theft insurance and restoration services</p>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Dark Web Monitoring
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Privacy Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/privacy-how-to/data-broker-removal" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Data Broker Removal</h3>
              <p className="text-gray-700 text-sm">Remove your info from data broker databases</p>
            </Link>
            <Link href="/guides/privacy-how-to/delete-yourself-from-internet" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Delete Yourself from the Internet</h3>
              <p className="text-gray-700 text-sm">Complete online privacy guide</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Database, Shield, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Broker Removal Service: Remove Your Personal Information | Privly',
  description: 'Complete guide to removing your personal data from data broker websites. Opt-out instructions for 200+ data brokers that sell your information.',
}

export default function DataBrokerRemovalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Data Broker Removal Service
            </h1>
          </div>
          <p className="text-xl text-purple-100">
            Remove your personal information from data broker databases that sell your data
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Your Data is Being Sold Right Now</h3>
                <p className="text-yellow-800 text-sm">
                  Data brokers collect and sell your personal information—including name, address, phone number, email, family members, property records, and online behavior—to anyone willing to pay. This guide shows you how to opt out.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Data brokers are companies that harvest your personal information from public records, purchase history, social media, and other sources, then package and sell it to marketers, employers, insurance companies, and anyone else who pays.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Data Brokers Know About You</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Data brokers compile shockingly detailed profiles. Here's what they typically have:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Personal Identifiers:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Full name (current and previous)</li>
                  <li>• Date of birth</li>
                  <li>• Home address (current and historical)</li>
                  <li>• Phone numbers (landline and mobile)</li>
                  <li>• Email addresses</li>
                  <li>• Social media profiles</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Financial & Property Data:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Property ownership records</li>
                  <li>• Estimated home value</li>
                  <li>• Mortgage information</li>
                  <li>• Income estimates</li>
                  <li>• Vehicle ownership</li>
                  <li>• Bankruptcy/lien records</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Family & Relationships:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Names of relatives</li>
                  <li>• Ages of family members</li>
                  <li>• Marital status</li>
                  <li>• Associates and neighbors</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Behavioral Data:</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Online browsing history</li>
                  <li>• Purchase history</li>
                  <li>• Political affiliation</li>
                  <li>• Religious beliefs</li>
                  <li>• Hobbies and interests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Should Remove Your Data</h2>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Risks:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span><strong>Identity Theft:</strong> Criminals buy data broker info to open fraudulent accounts in your name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span><strong>Stalking/Harassment:</strong> Anyone can pay $20-50 to find your address and phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span><strong>Targeted Scams:</strong> Scammers use your data to create personalized phishing attacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span><strong>Price Discrimination:</strong> Companies charge higher prices based on your income/location data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span><strong>Employer/Insurance Screening:</strong> Used to deny jobs or charge higher premiums</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Remove Yourself from Data Brokers</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 1: Manual Opt-Out (Free but Time-Consuming)</h3>
              <p className="text-gray-700 mb-4">
                You can opt out of data brokers yourself, but expect to invest 20-40 hours and repeat the process quarterly.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">General Opt-Out Process:</h4>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Visit the data broker's website</li>
                  <li>2. Search for your name/address to find your profile</li>
                  <li>3. Find their "opt-out" or "privacy" page (often buried in footer)</li>
                  <li>4. Fill out opt-out form (may require email verification, ID upload, or phone call)</li>
                  <li>5. Wait 7-30 days for removal processing</li>
                  <li>6. Verify removal and repeat if your data reappears</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Top 20 Data Brokers to Opt Out (Priority List):</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>1. <strong>Whitepages</strong> - whitepages.com/suppression-requests</li>
                    <li>2. <strong>Spokeo</strong> - spokeo.com/optout</li>
                    <li>3. <strong>BeenVerified</strong> - beenverified.com/app/optout/search</li>
                    <li>4. <strong>PeopleFinders</strong> - peoplefinders.com/opt-out</li>
                    <li>5. <strong>Intelius</strong> - intelius.com/optout</li>
                    <li>6. <strong>TruthFinder</strong> - truthfinder.com/opt-out</li>
                    <li>7. <strong>Instant Checkmate</strong> - instantcheckmate.com/opt-out</li>
                    <li>8. <strong>MyLife</strong> - mylife.com/privacy-policy</li>
                    <li>9. <strong>PeekYou</strong> - peekyou.com/about/contact/optout</li>
                    <li>10. <strong>Radaris</strong> - radaris.com/control/privacy</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>11. <strong>USSearch</strong> - ussearch.com/opt-out</li>
                    <li>12. <strong>Pipl</strong> - pipl.com/privacy</li>
                    <li>13. <strong>PublicRecordsNow</strong> - publicrecordsnow.com/static/view/optout</li>
                    <li>14. <strong>NeighborWho</strong> - neighborwho.com/control/privacy</li>
                    <li>15. <strong>ZabaSearch</strong> - zabasearch.com/block_records</li>
                    <li>16. <strong>AdvancedBackgroundChecks</strong> - advancedbackgroundchecks.com/removal</li>
                    <li>17. <strong>Addresses</strong> - addresses.com/optout.php</li>
                    <li>18. <strong>FamilyTreeNow</strong> - familytreenow.com/privacy</li>
                    <li>19. <strong>ThatsThem</strong> - thatsthem.com/optout</li>
                    <li>20. <strong>FastPeopleSearch</strong> - fastpeoplesearch.com/removal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 2: Automated Removal Services</h3>
              <p className="text-gray-700 mb-6">
                Professional services handle opt-outs for you and continuously monitor for data re-additions.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Privly (Recommended)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Removes from 200+ data brokers, quarterly monitoring, includes dark web monitoring and content leak protection
                  </p>
                  <p className="text-xs text-gray-600">Cost: $29.99/month | Coverage: Comprehensive</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">DeleteMe</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Removes from 30+ major data brokers, quarterly scans and re-removal
                  </p>
                  <p className="text-xs text-gray-600">Cost: $129/year | Coverage: Major brokers only</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Privacy Bee</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Removes from 100+ data brokers, monthly monitoring
                  </p>
                  <p className="text-xs text-gray-600">Cost: $197/year | Coverage: Moderate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect During Removal</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Typical Timeline:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Week 1-2:</strong> Initial opt-out requests submitted to all major brokers
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Week 2-4:</strong> First wave of removals processed (60-70% of brokers)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Week 4-8:</strong> Follow-ups for unresponsive brokers, full removal from most sites
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Ongoing:</strong> Quarterly re-checks and re-removals as brokers re-add your data
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Important Notes:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Complete removal is impossible—new data constantly enters the ecosystem</li>
                  <li>• Brokers often re-add your info from new sources within 3-6 months</li>
                  <li>• Some brokers require ID verification or phone calls (manual services handle this)</li>
                  <li>• Your data won't disappear from Google immediately—search results update over weeks/months</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Privly's Data Broker Removal Service</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">200+ Data Broker Coverage</strong>
                  <p className="text-purple-100">We remove your information from all major and niche data brokers—far more comprehensive than competitors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Fully Automated Process</strong>
                  <p className="text-purple-100">Just provide your info once—we handle all opt-out forms, verifications, and follow-ups</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Continuous Monitoring</strong>
                  <p className="text-purple-100">We check quarterly and automatically re-submit removals when your data reappears</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Privacy Dashboard</strong>
                  <p className="text-purple-100">Track removal progress, see which brokers have your data, and get alerts for new exposures</p>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Data Broker Removal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Privacy Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/privacy-how-to/delete-yourself-from-internet" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Delete Yourself from the Internet</h3>
              <p className="text-gray-700 text-sm">Complete internet privacy deletion guide</p>
            </Link>
            <Link href="/guides/privacy-how-to/dark-web-monitoring" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Dark Web Monitoring</h3>
              <p className="text-gray-700 text-sm">Monitor the dark web for your data</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

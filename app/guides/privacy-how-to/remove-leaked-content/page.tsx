import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Trash2, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Remove Leaked Content: Complete Takedown Guide | Privly',
  description: 'Step-by-step guide to removing your leaked content from the internet. DMCA takedowns, platform reporting, and professional removal services.',
}

export default function RemoveLeakedContentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Trash2 className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              How to Remove Leaked Content
            </h1>
          </div>
          <p className="text-xl text-purple-100">
            Complete step-by-step guide to removing your leaked content from the internet
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Act Quickly for Best Results</h3>
                <p className="text-yellow-800 text-sm">
                  The faster you respond to leaked content, the more effective your removal efforts will be. Content spreads rapidly across platforms, so immediate action is critical.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Discovering your private content leaked online is distressing, but you have legal rights and practical tools to remove it. This guide walks you through the complete removal process, from initial discovery to successful takedown.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1: Document the Leak</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Before taking removal action, thoroughly document the leaked content. This evidence is critical for DMCA notices and potential legal action.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What to Capture:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Full URLs:</strong> Copy and save the complete URL of every page containing your content
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Screenshots:</strong> Capture the entire page showing the content, URL bar, and timestamp
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Uploader Information:</strong> Username, account details, upload date if visible
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Hosting Details:</strong> Website name, hosting provider (use WHOIS lookup)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Sharing Metrics:</strong> View counts, shares, comments—shows extent of distribution
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Pro Tip: Archive the Evidence</h4>
                <p className="text-sm text-gray-700">
                  Use web archive services like archive.is or the Wayback Machine to create permanent records of infringing pages. This prevents the uploader from deleting evidence before you file your takedown.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2: Identify Where Content is Hosted</h2>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Leak Locations by Content Type:</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Adult Content Creators:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Coomer.party / Kemono.party</li>
                  <li>• ThothHub and variations</li>
                  <li>• Simpcity forums</li>
                  <li>• Pornhub, xVideos, xHamster</li>
                  <li>• Telegram leak channels</li>
                  <li>• Discord servers</li>
                  <li>• Reddit r/[creator]leaks subreddits</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">General Creators/Influencers:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Instagram repost accounts</li>
                  <li>• YouTube re-upload channels</li>
                  <li>• Twitter/X leak accounts</li>
                  <li>• Facebook groups</li>
                  <li>• Pinterest boards</li>
                  <li>• Tumblr blogs</li>
                  <li>• File hosting (MEGA, MediaFire, Dropbox)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Find All Instances:</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <strong>Google Search:</strong> Search "[your name/username] leaked" and related terms
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <strong>Reverse Image/Video Search:</strong> Use Google Images, Yandex, TinEye to find unauthorized copies
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <strong>Platform-Specific Searches:</strong> Search your username on each major platform
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <strong>Monitor Social Mentions:</strong> Check if people are sharing links to your leaked content
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 3: Choose Your Removal Method</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option A: Platform Reporting (Fastest for Major Sites)</h3>
              <p className="text-gray-700 mb-4">
                Most major platforms have built-in copyright reporting tools:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Instagram/Facebook (Meta)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    In-app: Report → Intellectual Property → Copyright<br/>
                    Or web form: facebook.com/help/contact/634636770043106
                  </p>
                  <p className="text-xs text-gray-600">Response time: 24-48 hours</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">TikTok</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    In-app: Long-press video → Report → Intellectual Property → Copyright<br/>
                    Or form: tiktok.com/legal/copyright-policy
                  </p>
                  <p className="text-xs text-gray-600">Response time: 24-72 hours</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">YouTube</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    youtube.com/copyright_complaint_form
                  </p>
                  <p className="text-xs text-gray-600">Response time: 48-96 hours</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Twitter/X</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    help.twitter.com/forms/dmca
                  </p>
                  <p className="text-xs text-gray-600">Response time: 24-48 hours</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Reddit</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    reddit.com/report → Copyright → Fill out DMCA form
                  </p>
                  <p className="text-xs text-gray-600">Response time: 48-72 hours</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pornhub / Major Tube Sites</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Email: content-removal@pornhub.com<br/>
                    xVideos: xvideos.com/abuse<br/>
                    SpankBang: dmca@spankbang.com
                  </p>
                  <p className="text-xs text-gray-600">Response time: 48-96 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option B: Formal DMCA Takedown (For Unresponsive Sites)</h3>
              <p className="text-gray-700 mb-4">
                If a site doesn't have a reporting form or ignores reports, send a formal DMCA notice:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Required Elements of DMCA Notice:</h4>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>1. Your name and contact information (email, address)</li>
                    <li>2. Description of copyrighted work being infringed</li>
                    <li>3. URL(s) of infringing content</li>
                    <li>4. Statement of good faith belief that use is unauthorized</li>
                    <li>5. Statement that information is accurate under penalty of perjury</li>
                    <li>6. Your physical or electronic signature</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Finding DMCA Contact:</h4>
                  <ul className="space-y-1 text-sm text-gray-700 ml-6">
                    <li>• Check website footer for "DMCA", "Copyright", or "Legal" links</li>
                    <li>• Search site for "dmca agent" or "designated agent"</li>
                    <li>• Use WHOIS lookup to find hosting provider, then contact them</li>
                    <li>• Search US Copyright Office database for registered agent</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option C: Google De-Indexing (Reduce Visibility)</h3>
              <p className="text-gray-700 mb-4">
                Even if you can't remove content from a site, you can remove it from Google search results:
              </p>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">1.</span>
                  <span>Visit google.com/webmasters/tools/legal-removal-request</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">2.</span>
                  <span>Select "Copyright" and fill out the removal request</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">3.</span>
                  <span>Provide URLs you want removed from search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">4.</span>
                  <span>Google typically processes within 24-48 hours</span>
                </li>
              </ol>
              <p className="text-sm text-gray-600 mt-4">
                Note: This doesn't delete content, just makes it harder to find via Google
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Follow Up and Escalate</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Don't assume your first takedown request worked. Active follow-up dramatically increases success rates.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Follow-Up Timeline:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>24 hours:</strong> Check if content was removed
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>72 hours:</strong> Send follow-up email if still live
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>7 days:</strong> Escalate to hosting provider if no response
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong>14 days:</strong> Consider legal action for blatant refusal to comply
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Escalation Steps:</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>Contact the website's hosting provider with DMCA notice</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>File complaint with the hosting provider's upstream ISP</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>Submit copyright claim to domain registrar (may get domain suspended)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                    <div>Report to payment processors (PayPal, Stripe) if site monetizes your content</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</span>
                    <div>Consult attorney about legal action (cease & desist, lawsuit)</div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Situations</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenge Porn / Non-Consensual Intimate Images</h3>
              <p className="text-gray-700 mb-4">
                This is a criminal offense in most jurisdictions. Additional protections available:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>File police report immediately—this is a crime, not just copyright violation</div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>Use specialized reporting: cybercivilrights.org or Google's "Remove intimate images" form</div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>Platforms prioritize these reports—often removed within hours</div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>Consider restraining order if you know the uploader</div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content on Dark Web / Anonymous Forums</h3>
              <p className="text-gray-700 mb-4">
                Harder to remove but not impossible:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Standard DMCA won't work on anonymous networks (Tor, I2P)</li>
                <li>• Focus on de-indexing from search engines that catalog dark web</li>
                <li>• Report to hosting providers if content surfaces on clearnet mirrors</li>
                <li>• Monitor to prevent spread to mainstream platforms</li>
                <li>• Consider professional reputation management services</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">File Sharing Services (MEGA, Dropbox, Google Drive)</h3>
              <p className="text-gray-700 mb-4">
                These platforms have streamlined DMCA processes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>MEGA:</strong> mega.nz/takedown → Usually responds within 24 hours</li>
                <li>• <strong>Google Drive:</strong> support.google.com/legal/troubleshooter/1114905 → Very responsive</li>
                <li>• <strong>Dropbox:</strong> dropbox.com/dmca → Processes within 48 hours</li>
                <li>• <strong>MediaFire:</strong> mediafire.com/dmca.php → Response time varies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">How Privly Handles Leaked Content Removal</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Automated Detection</strong>
                  <p className="text-purple-100">24/7 monitoring across 500+ leak sites, tube sites, forums, and social platforms to detect your content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Instant Takedown Filing</strong>
                  <p className="text-purple-100">We file DMCA notices within 2 hours of detection—you don't lift a finger</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Aggressive Follow-Up</strong>
                  <p className="text-purple-100">Our legal team escalates to hosting providers, ISPs, and domain registrars until content is removed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">95% Success Rate</strong>
                  <p className="text-purple-100">Most leaked content removed within 48-72 hours. We don't stop until it's gone.</p>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Professional Leak Removal
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Privacy Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/privacy-how-to/dmca-takedown-service" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">DMCA Takedown Service</h3>
              <p className="text-gray-700 text-sm">Detailed guide to filing DMCA notices</p>
            </Link>
            <Link href="/guides/privacy-how-to/stop-content-pirates" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Stop Content Pirates</h3>
              <p className="text-gray-700 text-sm">Prevent future content theft</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Video, CheckCircle, ArrowRight, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TikTok Creator Privacy: Protect Your Content & Personal Data | Privly',
  description: 'Essential privacy and security guide for TikTok creators. Protect your content, data, and identity on the platform.',
}

export default function TikTokCreatorPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Video className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              TikTok Creator Privacy Guide
            </h1>
          </div>
          <p className="text-xl text-purple-100">
            Comprehensive privacy and security strategies for TikTok content creators
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            TikTok's massive reach comes with significant privacy challenges for creators. From content theft to data privacy concerns, protecting yourself on TikTok requires a multi-layered approach. This guide covers essential privacy strategies for creators at all levels.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TikTok Privacy Settings You Must Enable</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Account Privacy Controls</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">1. Private vs. Public Account</h4>
                  <ul className="ml-6 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>For Growing Creators:</strong> Keep public but enable other protective settings
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>For Exclusive Content:</strong> Use private account, approve followers manually
                      </div>
                    </li>
                    <li className="text-sm text-gray-600 mt-2">
                      Path: Settings → Privacy → Private Account
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Restrict Who Can Interact</h4>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• <strong>Comments:</strong> Set to "Friends" or manually approve (Settings → Privacy → Comments)</li>
                    <li>• <strong>Duet/Stitch:</strong> Disable or set to "Friends only" to prevent unauthorized remixes</li>
                    <li>• <strong>Downloads:</strong> Disable video downloads (Settings → Privacy → Downloads)</li>
                    <li>• <strong>Direct Messages:</strong> Limit to mutual followers to reduce spam/harassment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Hide Personal Information</h4>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Disable "Suggest your account to others" (Privacy → Suggest your account to others → OFF)</li>
                    <li>• Turn off "Allow others to find you by phone/email" (Privacy → Discoverability)</li>
                    <li>• Don't link other social media accounts publicly (Privacy → Linked accounts)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Content Protection Settings</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Disable Downloads:</strong> Settings → Privacy → Downloads → Turn OFF
                    <p className="text-sm text-gray-600 mt-1">Prevents easy downloading (though screen recording still possible)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Control Duets/Stitches:</strong> Settings → Privacy → Duet/Stitch
                    <p className="text-sm text-gray-600 mt-1">Set to "Only you" or "Friends" to prevent unauthorized remixes</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Watermark Placement:</strong> Always include your @username in video
                    <p className="text-sm text-gray-600 mt-1">Use text overlay or in-video branding; TikTok watermark isn't enough</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Geographic Restrictions:</strong> For sensitive content, limit visibility by region
                    <p className="text-sm text-gray-600 mt-1">Post privacy settings → Who can view this video</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Privacy Settings</h3>
              <p className="text-gray-700 mb-4">
                TikTok collects extensive data. Minimize exposure:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• <strong>Personalized Ads:</strong> Settings → Privacy → Ads → Toggle off ad personalization</li>
                <li>• <strong>Data Download:</strong> Regularly request your data (Settings → Privacy → Download your data) to see what TikTok knows</li>
                <li>• <strong>Activity Status:</strong> Turn off (Settings → Privacy → Activity Status) to hide when you're online</li>
                <li>• <strong>Location Services:</strong> Disable unless necessary for content (Phone Settings → TikTok → Location)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Eye className="w-8 h-8 text-purple-500" />
            Common TikTok Privacy Threats for Creators
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">1. Content Reposting</h3>
              <p className="text-gray-700 text-sm mb-3">
                Your viral TikToks being downloaded and re-uploaded to Instagram Reels, YouTube Shorts, or other TikTok accounts—often without credit.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Prevention:</strong> Disable downloads, use visible watermarks, monitor cross-platform
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">2. Doxxing & Harassment</h3>
              <p className="text-gray-700 text-sm mb-3">
                Personal information (real name, address, phone) being shared in comments or other videos after you gain visibility.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Prevention:</strong> Never show identifiable locations, disable comments on controversial videos
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">3. Impersonation Accounts</h3>
              <p className="text-gray-700 text-sm mb-3">
                Fake accounts using your name, profile photo, and content to scam followers or promote scams.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Prevention:</strong> Get verified (if eligible), warn followers about fakes in bio
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">4. Data Harvesting</h3>
              <p className="text-gray-700 text-sm mb-3">
                Third-party tools scraping your profile data, follower lists, and video analytics for marketing or malicious purposes.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Prevention:</strong> Set profile to private, disable discoverability features
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Your TikTok Content</h2>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Watermarking for TikTok</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Visible Text Overlays:</h4>
                <ul className="ml-6 space-y-1 text-sm">
                  <li>• Place your @username in a corner throughout the video</li>
                  <li>• Use contrasting colors so it's visible against any background</li>
                  <li>• Don't make it too large/distracting, but ensure it can't be cropped out</li>
                  <li>• For dance/movement content, place watermark near center where you're always visible</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Branding Integration:</h4>
                <ul className="ml-6 space-y-1 text-sm">
                  <li>• Develop a consistent intro/outro with your branding</li>
                  <li>• Use custom sounds/music that can be traced back to you</li>
                  <li>• Create a signature style (editing, transitions, effects) that's recognizable</li>
                  <li>• Include branded props or backgrounds in frame</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring for Stolen TikTok Content</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <strong className="block mb-1">TikTok Search</strong>
                  <p className="text-sm">Search your @username and common hashtags weekly to find reposts on TikTok itself</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <strong className="block mb-1">Cross-Platform Monitoring</strong>
                  <p className="text-sm">Check Instagram Reels, YouTube Shorts, and Facebook for your TikToks being reposted</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <strong className="block mb-1">Google Video Search</strong>
                  <p className="text-sm">Take a screenshot from your popular videos and use Google's reverse video search feature</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <strong className="block mb-1">Follower Reports</strong>
                  <p className="text-sm">Ask your community to tag you if they see your content reposted elsewhere</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reporting Violations on TikTok</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Copyright Infringement Report</h3>
              <p className="text-gray-700 mb-4">
                To report someone reposting your TikTok content:
              </p>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>Press and hold on the infringing video → Tap "Report"</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>Select "Intellectual Property Violation" → "Copyright Infringement"</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>Provide link to your original video and submit</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>TikTok typically reviews within 24-48 hours</div>
                </li>
              </ol>
              <p className="text-sm text-gray-600 mt-4">
                For persistent violators, file a formal DMCA at: www.tiktok.com/legal/copyright-policy
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Impersonation Report</h3>
              <p className="text-gray-700 mb-4">
                To report fake accounts impersonating you:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Go to the fake profile → Tap "..." → "Report"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Select "Account" → "Pretending to be someone"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Indicate if they're impersonating you or someone else</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Provide evidence (screenshots, links to your real account)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Violations & Harassment</h3>
              <p className="text-gray-700 mb-4">
                If someone posts your personal information or harasses you:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Report the specific video/comment → "Harassment or bullying"</li>
                <li>• For doxxing: "Privacy violation" → "Sharing private information"</li>
                <li>• Block the user immediately (prevents them from seeing your future content)</li>
                <li>• Document everything with screenshots for potential legal action</li>
                <li>• Consider filing a police report for serious threats or doxxing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Privacy Protections</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Separate Personal & Creator Identities</h3>
                <ul className="ml-6 space-y-1 text-gray-700 text-sm">
                  <li>• Use stage name/creator persona instead of real full name</li>
                  <li>• Create separate email for TikTok (not your primary personal email)</li>
                  <li>• Don't show your home, car, workplace, or local landmarks in videos</li>
                  <li>• Never share your location in real-time (post location-based content with delays)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Two-Factor Authentication</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Enable 2FA to prevent account takeovers: Settings → Security and login → Two-step verification
                </p>
                <p className="text-xs text-gray-600">
                  Use authenticator app (Google Authenticator, Authy) rather than SMS for stronger security
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Regular Security Audits</h3>
                <ul className="ml-6 space-y-1 text-gray-700 text-sm">
                  <li>• Review "Manage devices" monthly (Settings → Security) to remove unknown devices</li>
                  <li>• Check "Apps and websites" to see what third-party apps can access your TikTok</li>
                  <li>• Revoke access for any services you no longer use</li>
                  <li>• Change your password every 90 days</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Get Verified</h3>
                <p className="text-gray-700 text-sm">
                  TikTok verification (blue checkmark) helps prevent impersonation and gives you priority in copyright disputes. Requirements vary but typically need 100K+ followers and authentic account history. Apply through Settings → Manage account → Request verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">How Privly Protects TikTok Creators</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Cross-Platform Content Monitoring</strong>
                  <p className="text-purple-100">Track your TikToks across Instagram Reels, YouTube Shorts, Facebook, and unauthorized repost accounts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Impersonation Detection</strong>
                  <p className="text-purple-100">AI-powered scanning for fake TikTok accounts using your name, content, and branding</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Automated Takedown Filing</strong>
                  <p className="text-purple-100">We file copyright and impersonation reports on TikTok and other platforms on your behalf</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Personal Data Leak Alerts</strong>
                  <p className="text-purple-100">Monitor dark web and data broker sites for your personal information being exposed</p>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Protect My TikTok Privacy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Privacy Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/platform-protection/instagram-content-theft" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Instagram Content Theft Protection</h3>
              <p className="text-gray-700 text-sm">Protect your Instagram photos and Reels</p>
            </Link>
            <Link href="/guides/privacy-how-to/delete-yourself-from-internet" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Delete Yourself from the Internet</h3>
              <p className="text-gray-700 text-sm">Remove your personal data from online databases</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DMCA Takedown Service: Complete Copyright Protection Guide | Privly',
  description: 'Learn how to file effective DMCA takedown notices to protect your copyrighted content. Templates, step-by-step instructions, and expert guidance.',
}

export default function DMCATakedownServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              DMCA Takedown Service Guide
            </h1>
          </div>
          <p className="text-xl text-purple-100">
            Everything you need to know about filing effective DMCA copyright takedown notices
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Digital Millennium Copyright Act (DMCA) provides powerful legal tools to protect your copyrighted content online. This comprehensive guide explains how to file DMCA takedown notices, what to include, and how to maximize your success rate.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a DMCA Takedown?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-4">
              A DMCA takedown notice is a legal request under US copyright law (17 U.S.C. § 512) that demands removal of infringing content from websites and online platforms.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Legal requirement: Hosting providers MUST respond or risk losing DMCA safe harbor protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Fast response: Most platforms respond within 24-72 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>No lawyer required: You can file DMCA notices yourself</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Global reach: Works internationally for US-based hosting companies</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Elements of a DMCA Notice</h2>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6">
              Your DMCA notice must include these six elements to be legally valid:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Your Contact Information</h3>
                <p className="text-gray-700 text-sm">
                  Full legal name, mailing address, phone number, and email address. Some platforms accept PO boxes or business addresses for privacy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Identification of Copyrighted Work</h3>
                <p className="text-gray-700 text-sm">
                  Describe the copyrighted material being infringed. For multiple works, provide a representative list. Include links to your original content if publicly accessible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Identification of Infringing Material</h3>
                <p className="text-gray-700 text-sm">
                  Full URL(s) of the infringing content. Be specific—link directly to the content, not just the homepage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Good Faith Statement</h3>
                <p className="text-gray-700 text-sm">
                  "I have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law."
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Accuracy Statement Under Penalty of Perjury</h3>
                <p className="text-gray-700 text-sm">
                  "I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner, or am authorized to act on behalf of the owner."
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Physical or Electronic Signature</h3>
                <p className="text-gray-700 text-sm">
                  Your full legal name typed at the end counts as an electronic signature. Scanned handwritten signature also acceptable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">DMCA Notice Template</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 font-mono text-sm">
              <p className="mb-4">To: [Platform DMCA Agent or abuse@hostname.com]</p>
              <p className="mb-4">Subject: DMCA Takedown Notice</p>
              <p className="mb-4">Dear Sir or Madam,</p>
              <p className="mb-4">I am writing to report copyright infringement on your platform.</p>

              <p className="font-bold mb-2">1. Contact Information:</p>
              <p className="mb-4 ml-4">
                [Your Full Legal Name]<br/>
                [Your Address]<br/>
                [Your Phone Number]<br/>
                [Your Email Address]
              </p>

              <p className="font-bold mb-2">2. Copyrighted Work:</p>
              <p className="mb-4 ml-4">
                [Description of your original work, e.g., "Original video content created and published by me on my OnlyFans/Patreon/ManyVids account"]<br/>
                [If applicable: Link to your original content]
              </p>

              <p className="font-bold mb-2">3. Infringing Material:</p>
              <p className="mb-4 ml-4">
                The following URL(s) contain unauthorized copies of my copyrighted work:<br/>
                [URL 1]<br/>
                [URL 2]<br/>
                [URL 3]
              </p>

              <p className="font-bold mb-2">4. Good Faith Statement:</p>
              <p className="mb-4 ml-4">
                I have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
              </p>

              <p className="font-bold mb-2">5. Accuracy Statement:</p>
              <p className="mb-4 ml-4">
                I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner, or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
              </p>

              <p className="font-bold mb-2">6. Signature:</p>
              <p className="mb-4 ml-4">
                [Your Full Legal Name]<br/>
                [Date]
              </p>

              <p>Respectfully,<br/>
              [Your Name]</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where to Send DMCA Notices</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Finding the Right Contact:</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                <div>
                  <strong>Check website footer:</strong> Look for "DMCA", "Copyright", "Legal", or "Terms" links
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                <div>
                  <strong>Search site:</strong> Use site search for "DMCA agent" or "designated agent"
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                <div>
                  <strong>WHOIS lookup:</strong> Find hosting provider contact if site doesn't list DMCA contact
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                <div>
                  <strong>US Copyright Office:</strong> Search their database of registered DMCA agents at copyright.gov/dmca-directory
                </div>
              </li>
            </ol>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Common Platform DMCA Contacts:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Google/YouTube:</strong> support.google.com/youtube/answer/2807622</li>
                <li>• <strong>Facebook/Instagram:</strong> facebook.com/help/contact/634636770043106</li>
                <li>• <strong>Twitter/X:</strong> help.twitter.com/forms/dmca</li>
                <li>• <strong>Reddit:</strong> reddit.com/report</li>
                <li>• <strong>Discord:</strong> dis.gd/request</li>
                <li>• <strong>Telegram:</strong> telegram.org/tos → Section 2</li>
                <li>• <strong>Pornhub:</strong> content-removal@pornhub.com</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for Effective DMCA Notices</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Do's:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Be specific about which URLs to remove—direct links, not just domain names</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Include proof of ownership (link to your original content if public)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Use professional, polite language—you're making a legal request, not a threat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Send from a professional email address if possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Keep copies of all correspondence for your records</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Don'ts:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Don't make false claims—perjury has serious legal consequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Don't use DMCA for non-copyright issues (trademark, defamation, privacy violations require different processes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Don't threaten legal action in your DMCA notice—the notice itself is the legal action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Don't file duplicate notices for the same content without waiting for response</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens After You File?</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Typical Timeline:</h3>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li><strong>24-48 hours:</strong> Platform reviews your notice for completeness</li>
                  <li><strong>48-72 hours:</strong> Valid notices result in content removal or temporary takedown</li>
                  <li><strong>10-14 days:</strong> Alleged infringer can file counter-notice claiming fair use</li>
                  <li><strong>10-14 days after counter:</strong> If you don't sue, platform may restore content</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Possible Outcomes:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Content removed:</strong> Most common outcome (90%+ for valid claims)</li>
                  <li>⚠️ <strong>Notice rejected:</strong> Missing required elements—re-file with corrections</li>
                  <li>⚠️ <strong>Counter-notice filed:</strong> Uploader claims fair use—may require legal action</li>
                  <li>⚠️ <strong>No response:</strong> Follow up or escalate to hosting provider</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Privly's Automated DMCA Service</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">We File For You</strong>
                  <p className="text-purple-100">Our legal team drafts and files DMCA notices on your behalf—no forms to fill out</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Lightning Fast Response</strong>
                  <p className="text-purple-100">We submit takedown notices within 2 hours of detecting your leaked content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Escalation Experts</strong>
                  <p className="text-purple-100">If platforms don't respond, we escalate to hosting providers, ISPs, and domain registrars</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <strong className="block mb-1">Handle Counter-Notices</strong>
                  <p className="text-purple-100">Our attorneys respond to counter-notices and pursue legal action when necessary</p>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Professional DMCA Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Privacy Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/privacy-how-to/remove-leaked-content" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Remove Leaked Content</h3>
              <p className="text-gray-700 text-sm">Complete guide to removing your content from leak sites</p>
            </Link>
            <Link href="/guides/privacy-how-to/stop-content-pirates" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-purple-600 mb-2">Stop Content Pirates</h3>
              <p className="text-gray-700 text-sm">Prevent unauthorized content distribution</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/seo';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';

export const metadata: Metadata = genMeta({
  title: 'Terms of Service',
  description: 'Terms of Service for Privly Ventures Pty Ltd. Acceptable use, free-tool clauses, DMCA repeat-infringer policy, payment terms, and Australian governing law.',
  keywords: ['terms of service', 'terms', 'conditions', 'DMCA repeat infringer policy', 'acceptable use'],
  path: '/terms',
});

/**
 * /terms — operational + factual Terms of Service.
 *
 * Updated April 2026 to reflect the actual product surface and to fix the
 * single biggest legal exposure on the previous version: "all sales are final"
 * conflicts with Australian Consumer Law statutory guarantees, which can't be
 * contracted out of for consumers. New wording acknowledges the statutory
 * floor without abandoning the general non-refundable position.
 *
 * Several sections (limitation of liability cap, indemnification scope, dispute
 * resolution / arbitration positioning) remain at a level that is factually
 * coherent but legally generic — these need solicitor review before being
 * relied on for material disputes.
 */
export default function TermsPage() {
  const lastUpdated = 'April 2026';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-grow">
        {/* Header */}
        <section className="px-4 py-12" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">Terms of Service</h1>
            <p style={{ color: 'var(--ink-2)' }}>
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* 1. Acceptance */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">1. Acceptance of Terms</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                These Terms of Service (&ldquo;Terms&rdquo;) form a legal agreement between you and <strong>Privly Ventures Pty Ltd</strong> (&ldquo;Privly&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing or using the Privly website, application, free tools, or any related service (the &ldquo;Service&rdquo;), you accept and agree to be bound by these Terms. If you do not agree, please do not use the Service.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We may update these Terms from time to time. Material changes will be notified to your account email at least 14 days before they take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* 2. Service Description */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">2. Service Description</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Privly provides automated content protection services for creators, including:
              </p>
              <ul className="ml-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Continuous monitoring of leak destinations and detection of unauthorised redistribution of your content</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Generation, submission, and follow-up of DMCA and equivalent takedown notices</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Per-subscriber forensic watermarking for content attribution</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>AI-based deepfake and impersonation detection</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Free tools (e.g., the DMCA Generator at /tools/dmca-generator) — see Section 4 for terms specific to free tools</span></li>
              </ul>
            </div>

            {/* 3. Accounts and Eligibility */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">3. Accounts and Eligibility</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                To use the Service&rsquo;s paid features you must create an account. You agree to:
              </p>
              <ul className="ml-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Provide accurate, complete, and current information</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Maintain the confidentiality of your password and account credentials</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Take full responsibility for all activities that occur under your account</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Notify us immediately of any unauthorised use of your account at hello@useprivly.com</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Be at least 18 years old and legally capable of entering into binding contracts in your jurisdiction</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Use the Service only for content you own or are authorised to act on behalf of</span></li>
              </ul>
            </div>

            {/* 4. Free Tools */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">4. Free Tools (incl. DMCA Generator)</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Privly provides certain tools free of charge, including the DMCA Generator at /tools/dmca-generator. These tools are made available to support creators and the broader content-protection community. Terms specific to free tools:
              </p>
              <ul className="ml-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>You are the legally responsible party.</strong> When you use a free tool to generate a DMCA notice or other legal document, you are the issuer of that notice. Privly does not vet, review, or endorse the contents of notices you generate.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Not legal advice.</strong> The DMCA Generator and other free tools are informational. They are not legal advice. Privly is not a law firm and our staff are not your attorneys. If your matter is complex, high-value, or contentious, consult a qualified lawyer.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>False or bad-faith claims carry liability.</strong> Knowingly false DMCA notices can result in liability for damages and attorneys&rsquo; fees under 17 U.S.C. § 512(f). Equivalent provisions exist under other jurisdictions. Use the tool only for content you own or are authorised to act on behalf of.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Privly may discontinue free tools at any time</strong> without notice. We&rsquo;ll do our best to give reasonable warning.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Indemnification for free tool use:</strong> You agree to indemnify Privly for any losses arising from your use of a free tool, including costs of defending claims based on notices you generated through the tool.</span></li>
              </ul>
            </div>

            {/* 5. Payment and Billing */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">5. Payment and Billing</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Paid features of the Service require a subscription. Pricing is published at <Link href="/pricing" style={{ color: 'var(--accent)' }} className="underline">/pricing</Link>. By subscribing, you agree to:
              </p>
              <ul className="ml-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Pay all fees according to your selected billing cycle (monthly unless otherwise specified)</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Allow your subscription to renew automatically unless cancelled before the renewal date</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Cancel at any time from your billing settings, with the cancellation effective at the end of your current billing period</span></li>
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>Refunds.</strong> Subscription fees are non-refundable except where required by applicable law, including (without limitation) the Australian Consumer Law in Schedule 2 of the <em>Competition and Consumer Act 2010</em> (Cth). If you believe you are entitled to a refund under consumer-protection laws applicable to you, contact us at hello@useprivly.com and we will review your case in good faith. Statutory consumer guarantees that cannot be excluded under applicable law are not affected by these Terms.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>7-day free trial.</strong> New subscribers receive a 7-day free trial. You can cancel at any time during the trial period without being charged. Trial features are limited as described at /pricing.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We reserve the right to change pricing for new billing cycles. Existing subscribers will be notified at least 30 days before any price increase takes effect.
              </p>
            </div>

            {/* 6. Intellectual Property */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">6. Intellectual Property Rights</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                The Service and its content (text, graphics, logos, software, data sets including the Privly Observatory dataset) are the property of Privly Ventures Pty Ltd or its licensors and are protected under copyright, trade-mark, and other applicable laws.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                You retain all rights to content you upload to the Service. By uploading content, you grant Privly a limited, non-exclusive, worldwide licence to use, store, copy, fingerprint, watermark, and process that content solely to operate the Service for you. This licence terminates when you delete the content or your account.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                The Privly Observatory dataset (published at /observatory) is made available under <strong>Creative Commons Attribution 4.0</strong>. You may quote, republish, and build upon it as long as you cite &ldquo;Privly Observatory&rdquo; and link to /observatory.
              </p>
            </div>

            {/* 7. Acceptable Use Policy */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">7. Acceptable Use Policy</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                You may use the Service only for lawful purposes and in accordance with these Terms. You agree <strong>not</strong> to use the Service to:
              </p>
              <ul className="ml-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Submit, monitor, or generate takedowns for content you do not own or are not authorised to act on behalf of</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Submit any child sexual abuse material (CSAM) or content depicting minors. Such material will be reported immediately to relevant authorities</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Submit non-consensual intimate imagery of others. If you are a victim of NCII, we recommend StopNCII.org as the appropriate first response</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Submit deepfake or AI-generated content as if it were content you produced</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Submit copyrighted music, film, TV, or other third-party content where you are not the rights holder</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Use the Service to harass, intimidate, or bring bad-faith legal pressure on individuals or businesses</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Reverse-engineer, decompile, or attempt to extract source code from the Service</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Probe, scan, or test the vulnerability of the Service without prior written authorisation. Responsible disclosure is welcome at hello@useprivly.com</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Use the Service in a way that violates applicable law or regulation in your jurisdiction</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Transmit malicious code, spam, or attempt to overload our infrastructure</span></li>
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We reserve the right to investigate suspected violations and to suspend or terminate accounts engaged in prohibited use without refund.
              </p>
            </div>

            {/* 8. DMCA Repeat-Infringer Policy + Designated Agent */}
            <div id="dmca-agent" style={{ scrollMarginTop: 100 }}>
              <h2 className="mb-4 text-2xl font-bold">8. DMCA Repeat-Infringer Policy &amp; Designated Agent</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                In accordance with 17 U.S.C. § 512(i), Privly maintains a policy of terminating, in appropriate circumstances, the accounts of users who are repeat infringers.
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>Privly Ventures Pty Ltd is registered with the United States Copyright Office</strong> under the DMCA Designated Agent Directory. If you believe that any content uploaded to or processed by Privly infringes your copyright, please send a written DMCA notice — including all elements required by 17 U.S.C. § 512(c)(3) — to:
              </p>
              <div className="rounded-lg p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <p style={{ color: 'var(--ink-2)' }}><strong>DMCA Designated Agent</strong></p>
                <p className="mt-2" style={{ color: 'var(--ink-2)' }}>
                  <strong>Agent name:</strong> Privly Takedown Service
                </p>
                <p className="mt-1" style={{ color: 'var(--ink-2)' }}>
                  <strong>Service provider:</strong> Privly Ventures Pty Ltd — DMCA Agent
                </p>
                <p className="mt-1" style={{ color: 'var(--ink-2)' }}>
                  <strong>Email:</strong> <a href="mailto:dmca@useprivly.com" style={{ color: 'var(--accent)' }} className="underline">dmca@useprivly.com</a>
                </p>
                <p className="mt-3 text-sm" style={{ color: 'var(--mute)' }}>
                  Verifiable on the public US Copyright Office DMCA Designated Agent Directory at{' '}
                  <a href="https://www.copyright.gov/dmca-directory/" target="_blank" rel="noopener" className="underline" style={{ color: 'var(--accent)' }}>
                    copyright.gov/dmca-directory
                  </a>.
                </p>
              </div>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                A valid DMCA notice must include: (a) physical or electronic signature of the rights holder or authorised agent; (b) identification of the copyrighted work; (c) identification of the infringing material with sufficient detail for us to locate it; (d) your contact information; (e) a good-faith statement; and (f) a statement under penalty of perjury that the information is accurate and you are authorised to act.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We will respond to valid notices expeditiously and in accordance with the DMCA. Knowingly false notices may subject the sender to liability under 17 U.S.C. § 512(f), including damages, costs, and attorneys&rsquo; fees.
              </p>
            </div>

            {/* 9. Service Availability */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">9. Service Availability</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We aim for high availability but do not guarantee uninterrupted operation. The Service may be unavailable from time to time for scheduled maintenance, infrastructure provider outages, or other operational reasons. We do not currently offer a written service-level agreement (SLA) at the standard subscription tier; this section will be updated if SLA-backed pricing is added.
              </p>
            </div>

            {/* 10. Limitation of Liability */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">10. Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Subject to applicable consumer-protection laws, including (without limitation) Australian Consumer Law statutory guarantees that cannot be excluded:
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                TO THE FULLEST EXTENT PERMITTED BY LAW, PRIVLY VENTURES LTD SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="ml-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Any indirect, incidental, special, consequential, or punitive damages</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Loss of profits, revenue, business, opportunity, goodwill, or data</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Errors, omissions, or delays in detecting, reporting, or removing leaked content</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Acts or omissions of third parties (including platforms, hosts, and recipients of takedown notices)</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Loss arising from inaccurate or incomplete information you provided to us</span></li>
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind beyond those required by applicable law. We do not guarantee that all leaks will be detected, that all takedowns will be successful, or that any specific outcome will be achieved. Nothing in these Terms purports to exclude any liability or right that cannot be lawfully excluded.
              </p>
            </div>

            {/* 11. Indemnification */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">11. Indemnification</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                You agree to indemnify, defend, and hold harmless Privly Ventures Pty Ltd, its officers, directors, employees, contractors, and agents from any claims, damages, losses, liabilities, costs, or expenses (including reasonable legal fees) arising from: (a) your use of the Service in violation of these Terms; (b) your submission of inaccurate, misleading, or unauthorised information; (c) any DMCA or equivalent notice you generate, request, or authorise (whether through the free DMCA Generator or as part of a paid subscription); or (d) your violation of any third-party right.
              </p>
            </div>

            {/* 12. Termination */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">12. Termination</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                You may terminate your subscription at any time from your billing settings; access continues until the end of your current billing period. We may suspend or terminate your access if:
              </p>
              <ul className="ml-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>You materially violate these Terms or our Acceptable Use Policy</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>You engage in fraudulent or illegal activity</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>You fail to pay applicable subscription fees</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span>Your continued use of the Service exposes Privly to legal or operational risk</span></li>
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Where termination is for cause, we will (where feasible) provide notice and an opportunity to remedy the issue. Sections that by their nature should survive (Intellectual Property, Limitation of Liability, Indemnification, Governing Law) survive termination.
              </p>
            </div>

            {/* 13. Governing Law */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">13. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                These Terms are governed by and construed in accordance with the laws of <strong>New South Wales, Australia</strong>, without regard to conflict-of-laws principles. You and Privly submit to the exclusive jurisdiction of the courts located in New South Wales for any dispute arising out of or relating to these Terms or the Service, except where applicable consumer-protection law gives you a right to bring proceedings in your home jurisdiction.
              </p>
            </div>

            {/* 14. General */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">14. General</h2>
              <p className="mb-3 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>Entire agreement.</strong> These Terms, together with our <Link href="/privacy" style={{ color: 'var(--accent)' }} className="underline">Privacy Policy</Link>, constitute the entire agreement between you and Privly Ventures Pty Ltd regarding the Service.
              </p>
              <p className="mb-3 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>Severability.</strong> If any provision of these Terms is held unenforceable, the remaining provisions remain in full force.
              </p>
              <p className="mb-3 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>Waiver.</strong> No failure to enforce any provision of these Terms operates as a waiver.
              </p>
              <p className="mb-3 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>Assignment.</strong> You may not assign your rights under these Terms without our prior written consent. We may assign our rights to a successor in connection with a merger, acquisition, or sale of assets.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>Notices.</strong> Notices to you will be sent to your account email. Notices to us should be sent to hello@useprivly.com.
              </p>
            </div>

            {/* 15. Contact */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">15. Contact Information</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Questions about these Terms? Contact us:
              </p>
              <div className="rounded-lg p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <p style={{ color: 'var(--ink-2)' }}><strong>Privly Ventures Pty Ltd</strong></p>
                <p className="mt-1" style={{ color: 'var(--ink-2)' }}><strong>Email:</strong> <a href="mailto:hello@useprivly.com" style={{ color: 'var(--accent)' }} className="underline">hello@useprivly.com</a></p>
              </div>
              <p className="mt-4 text-sm" style={{ color: 'var(--mute)' }}>
                See also our <Link href="/privacy" style={{ color: 'var(--accent)' }} className="underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

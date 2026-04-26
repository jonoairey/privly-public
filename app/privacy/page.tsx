import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/seo';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description:
    'How Privly Ventures Pty Ltd collects, uses, stores, and protects your information. Subprocessor list, retention periods, and your rights under GDPR, CCPA, and the Australian Privacy Principles.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'CCPA', 'Australian Privacy Principles', 'subprocessors'],
  path: '/privacy',
});

/**
 * /privacy — operational + factual policy.
 *
 * Updated April 2026 to reflect the actual data flows of the live system:
 * named subprocessors, the DMCA generator tool, automated DMCA filing as
 * automated decision-making, GA4 + Crisp + Resend etc.
 *
 * Several sections (CCPA, GDPR Article 6 legal bases, international transfer
 * SCC framing) remain at a level that is factually accurate but legally
 * generic — these need solicitor review before being relied on for compliance.
 * Marked inline with "Note for legal review" comments where applicable.
 */
export default function PrivacyPage() {
  const lastUpdated = 'April 2026';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-grow">
        {/* Header */}
        <section className="px-4 py-12" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-2 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
            <p style={{ color: 'var(--ink-2)' }}>
              Last updated: {lastUpdated} · Effective immediately for new users; existing users on prior policy until next billing cycle.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                This Privacy Policy explains how <strong>Privly Ventures Pty Ltd</strong> (&ldquo;Privly&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, discloses, and safeguards your
                information when you use our website at useprivly.com, the application at app.useprivly.com, our free tools (including the
                DMCA Generator), and related services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We&rsquo;re a small bootstrapped business and we treat your data the way we&rsquo;d want ours treated. We don&rsquo;t sell it, we minimise what we
                collect, and we tell you what we do with it. If anything in this policy is unclear, email us at{' '}
                <a href="mailto:hello@useprivly.com" style={{ color: 'var(--accent)' }} className="underline">hello@useprivly.com</a>.
              </p>
            </div>

            {/* What We Collect */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Information We Collect</h2>
              <div className="space-y-4" style={{ color: 'var(--ink-2)' }}>
                <div>
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--accent)' }}>Account information</h3>
                  <p>When you create a Privly account, we collect your email address, password (stored hashed, never plain-text), display name, platform usernames you wish to monitor, and onboarding details such as content type and platform.</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--accent)' }}>Content fingerprints + monitored URLs</h3>
                  <p>To detect leaks, we generate perceptual hashes (dHash + aHash) of reference content you upload, and we store the URLs you specify or that our scans surface. We do not retain copies of leaked content beyond what&rsquo;s necessary to verify and document a takedown.</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--accent)' }}>Free tool submissions (DMCA Generator)</h3>
                  <p>If you use our free DMCA Generator at /tools/dmca-generator, we store your name, email, the platform name you specified, the URL of your original work, and the URLs of the infringing content you listed. We email you a copy of your generated notice and may store the submission to follow up. You can request deletion of this data at any time by emailing hello@useprivly.com.</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--accent)' }}>Payment information</h3>
                  <p>Stripe processes all payment details on our behalf. We do not store your full payment-card information — Stripe holds that under PCI-DSS compliance. We retain transaction history (subscription status, billing periods, plan tier) necessary to manage your subscription.</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--accent)' }}>Usage and device data</h3>
                  <p>We collect log data, IP addresses, device and browser information, pages visited, and interaction events through Google Analytics (configured for IP anonymisation where applicable).</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--accent)' }}>Support communications</h3>
                  <p>If you contact us via email or our chat widget (Crisp), we receive and store the contents of those messages so we can respond. Crisp also stores chat history under their privacy terms.</p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">How We Use Your Information</h2>
              <div className="space-y-2" style={{ color: 'var(--ink-2)' }}>
                <p>We use the information we collect to:</p>
                <ul className="ml-4 space-y-2">
                  {[
                    'Provide, maintain, and operate the Service',
                    'Detect and monitor leaks of your content across the web',
                    'Generate, file, and follow up on DMCA takedown notices on your behalf',
                    'Process payments and manage your subscription via Stripe',
                    'Send transactional emails (account confirmations, takedown notifications, billing receipts) via Resend',
                    'Reply to your support enquiries via email and Crisp chat',
                    'Improve and optimise the Service via aggregate analytics (Google Analytics)',
                    'Comply with our legal obligations and enforce our Terms of Service',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span style={{ color: 'var(--accent)' }}>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">We do not sell your personal information. We do not use your data to train AI models. We do not share your data with advertisers.</p>
              </div>
            </div>

            {/* Subprocessors */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Subprocessors</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We use the following third-party services to operate the Service. Each is named here for transparency. Each runs under their own privacy policy, which we link to.
              </p>
              <div className="overflow-hidden rounded-xl" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr style={{ background: 'var(--accent-3)' }}>
                      <th className="px-4 py-3 font-semibold">Service</th>
                      <th className="px-4 py-3 font-semibold">Purpose</th>
                      <th className="px-4 py-3 font-semibold">Data location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Stripe', 'Payment processing', 'United States / Ireland', 'https://stripe.com/privacy'],
                      ['Supabase', 'Database, authentication, file storage', 'AWS (us-east-1 primary)', 'https://supabase.com/privacy'],
                      ['Vercel', 'Application hosting + edge network', 'Global edge / United States primary', 'https://vercel.com/legal/privacy-policy'],
                      ['Cloudflare', 'CDN + DDoS protection (mini-PC worker)', 'Global edge', 'https://www.cloudflare.com/privacypolicy/'],
                      ['Resend', 'Transactional email delivery', 'United States', 'https://resend.com/legal/privacy-policy'],
                      ['Crisp', 'Customer support chat widget', 'European Union', 'https://crisp.chat/en/privacy/'],
                      ['Google Analytics 4', 'Website usage analytics', 'United States', 'https://policies.google.com/privacy'],
                      ['SerpAPI', 'Search-engine query infrastructure for leak scanning', 'United States', 'https://serpapi.com/legal/privacy-policy'],
                    ].map(([service, purpose, location, url]) => (
                      <tr key={service} style={{ borderTop: '1px solid var(--line)' }}>
                        <td className="px-4 py-3 font-semibold" style={{ color: 'var(--ink)' }}>{service}</td>
                        <td className="px-4 py-3" style={{ color: 'var(--ink-2)' }}>{purpose}</td>
                        <td className="px-4 py-3 text-xs" style={{ color: 'var(--ink-2)' }}>
                          {location} ·{' '}
                          <a href={url} target="_blank" rel="noopener" className="underline" style={{ color: 'var(--accent)' }}>policy</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs" style={{ color: 'var(--mute)' }}>
                We&rsquo;ll update this list when we add or remove subprocessors. If you require advance notice of subprocessor changes for compliance reasons, email hello@useprivly.com to be added to our notification list.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Data Security</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Data is encrypted in transit using TLS 1.2+ and at rest using AES-256 (provided by Supabase and Vercel). Passwords are hashed using bcrypt. Access to creator data is restricted to authorised personnel and logged. We use industry-standard administrative, technical, and physical measures, but no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Data Retention</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We keep your information only for as long as we need it to provide the Service or as required by law. Specifically:
              </p>
              <ul className="space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Account data:</strong> retained while your account is active. After account deletion, removed within 30 days, except where required for legal or fraud-prevention purposes.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Content fingerprints:</strong> retained for the life of your account; removed within 30 days of account deletion.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>DMCA notice records:</strong> retained for 7 years for legal-evidentiary purposes (this is the standard retention period for DMCA-related records under US Copyright Office guidelines).</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Billing records:</strong> retained for 7 years to comply with tax and audit requirements (Australian Tax Office, IRS).</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Free DMCA Generator submissions:</strong> retained for 12 months for follow-up purposes; automatically purged after that. Email us to request earlier deletion.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Support communications:</strong> retained for 3 years.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Analytics data:</strong> Google Analytics is configured with the maximum 14-month retention period.</span></li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Cookies and Tracking</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We use cookies and similar technologies to operate the Service and understand usage. The cookies we set include:
              </p>
              <ul className="space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Authentication / session</strong> — necessary for keeping you signed in to your dashboard. Set by Supabase Auth.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Stripe Checkout</strong> — necessary for processing payments and protecting against fraud.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Crisp chat</strong> — stores your chat session so support conversations persist across visits.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Google Analytics 4</strong> — _ga and related cookies for aggregate usage analytics. Configured for IP anonymisation.</span></li>
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                You can control cookies through your browser preferences. Blocking session cookies will prevent you from signing in to the dashboard. We honour the Global Privacy Control (GPC) signal where supported.
              </p>
            </div>

            {/* Automated Decision-Making */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Automated Decision-Making</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Privly uses automated processes to detect potential leaks of your content, calculate match-confidence scores, and route candidates for DMCA filing. These are operational decisions, not legal ones — every DMCA notice that goes out from your account is reviewed by you (or a Privly enforcement agent on your behalf) before submission. You can opt out of automated leak detection by disabling scanning in your account settings, in which case the Service becomes a manual takedown tool only.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Children&rsquo;s Privacy</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Privly is not intended for use by anyone under 18 years of age. We do not knowingly collect personal information from anyone under 18. If you believe we have collected information from a minor, contact us at hello@useprivly.com and we will delete it.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Your Privacy Rights</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Depending on where you live, you may have additional rights regarding your personal information. We extend these rights to all our users regardless of location:
              </p>
              <div className="space-y-3" style={{ color: 'var(--ink-2)' }}>
                <p className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Access:</strong> Request a copy of the personal information we hold about you.</span></p>
                <p className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Correction:</strong> Update or correct inaccurate information.</span></p>
                <p className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Deletion:</strong> Request deletion of your data. We honour deletion requests within 30 days unless legal-retention periods (above) apply.</span></p>
                <p className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</span></p>
                <p className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Objection:</strong> Object to specific uses of your data (e.g., direct marketing).</span></p>
                <p className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Withdrawal of consent:</strong> Where processing relies on consent, you can withdraw it at any time.</span></p>
              </div>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                To exercise any of these rights, email <a href="mailto:hello@useprivly.com" style={{ color: 'var(--accent)' }} className="underline">hello@useprivly.com</a>. We respond within 30 days. Verification of identity may be required to prevent unauthorised account access.
              </p>
            </div>

            {/* Australian Privacy Principles */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Australian Privacy Principles (APPs)</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                As an Australian-incorporated business, Privly handles personal information in accordance with the 13 Australian Privacy Principles set out in the Privacy Act 1988 (Cth). If you have a complaint about how we have handled your personal information that we have been unable to resolve, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.
              </p>
            </div>

            {/* GDPR */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">European Users (GDPR)</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                If you are located in the European Economic Area (EEA) or the United Kingdom, you have rights under the General Data Protection Regulation (GDPR) and UK GDPR. We process your data only when we have a legal basis to do so — typically your consent (signing up for the Service), the performance of our contract with you (delivering the Service), our legitimate interests (improving the Service), or compliance with a legal obligation.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                Some of our subprocessors are located outside the EEA. Where we transfer your data outside the EEA, we rely on Standard Contractual Clauses or other lawful transfer mechanisms. You have the right to lodge a complaint with your local data protection authority.
              </p>
            </div>

            {/* CCPA */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">California Residents (CCPA / CPRA)</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), including: the right to know what personal information we collect, the right to delete your personal information, the right to correct inaccurate personal information, the right to opt out of the sale or sharing of personal information, and the right to non-discrimination for exercising these rights.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                <strong>We do not sell or share your personal information</strong> as those terms are defined in the CCPA. To exercise your rights, email <a href="mailto:hello@useprivly.com" style={{ color: 'var(--accent)' }} className="underline">hello@useprivly.com</a>.
              </p>
            </div>

            {/* Third-Party Sharing */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">When We Share Your Information</h2>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We do not sell your personal information. We share information with third parties only in these circumstances:
              </p>
              <ul className="ml-4 mt-4 space-y-2" style={{ color: 'var(--ink-2)' }}>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Subprocessors</strong> listed above, who help us operate the Service under our instructions.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Recipients of DMCA notices.</strong> When you authorise us to file a DMCA on your behalf, your name and contact information appear in the notice (this is a statutory requirement of the DMCA and cannot be anonymised).</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Legal compliance.</strong> Where required by law, court order, or regulator request. We&rsquo;ll notify you first where legally permitted.</span></li>
                <li className="flex gap-3"><span style={{ color: 'var(--accent)' }}>→</span><span><strong>Business transfers.</strong> In the event of a merger, acquisition, or sale of assets, your data may transfer to the acquirer subject to this Privacy Policy.</span></li>
              </ul>
            </div>

            {/* Changes */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Changes to This Policy</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top reflects the most recent change. Material changes will be communicated by email to your account email address before they take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                For privacy questions, requests to exercise your rights, or any concerns about how we handle your data, please contact us:
              </p>
              <div className="mt-4 rounded-lg p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <p style={{ color: 'var(--ink-2)' }}><strong>Privly Ventures Pty Ltd</strong></p>
                <p className="mt-1" style={{ color: 'var(--ink-2)' }}><strong>Email:</strong> <a href="mailto:hello@useprivly.com" style={{ color: 'var(--accent)' }} className="underline">hello@useprivly.com</a></p>
                <p className="mt-3 text-sm" style={{ color: 'var(--mute)' }}>
                  We respond to privacy enquiries within 30 days. Identity verification may be required.
                </p>
              </div>
              <p className="mt-4 text-sm" style={{ color: 'var(--mute)' }}>
                See also our <Link href="/terms" style={{ color: 'var(--accent)' }} className="underline">Terms of Service</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

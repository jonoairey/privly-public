import MarketingHeader from '@/components/marketing/Header'
import MarketingFooter from '@/components/marketing/Footer'
import Reveal from '@/components/marketing/shared/Reveal'
import { Check } from '@/components/marketing/shared/Icons'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Privly for Creator Agencies — One Dashboard, Every Creator',
  description:
    'Manage 5–25+ creators under one billing relationship. One shared dashboard, one named protection agent, $49/creator/month. Built for agencies that protect adult creator income.',
  path: '/agencies',
})

const INCLUDED = [
  'One shared dashboard with creator switcher',
  'One named protection agent for the agency',
  'Live Telegram channel monitoring per creator',
  'Forensic watermarking + subscriber-level leaker tracing',
  'Face-match + deepfake detection (opt-in per creator)',
  'Unlimited DMCA takedowns + Google de-indexing',
  'Automated re-emergence checks on every confirmed-removed link',
  'Slack / WhatsApp / email channel with your protection agent',
  'Consolidated monthly reporting per creator',
  'Single invoice — one billing relationship, no per-creator card management',
]

const FAQ_ITEMS = [
  {
    q: "How is this different from creators paying for Privly individually?",
    a: "It's the same product underneath, but designed for agencies that manage multiple creators. You get one billing relationship, one dashboard with a creator switcher, and one named protection agent who knows the whole roster. Saves you the per-card / per-account juggling and gives you a single point of contact at Privly.",
  },
  {
    q: "What's the minimum?",
    a: "5 creators ($245/month floor). We can ramp you in over a few weeks if you're onboarding creators in batches — talk to us about the timing.",
  },
  {
    q: "Do creators sign anything individually?",
    a: 'Yes. Each creator still verifies their identity with Privly before takedowns are filed on their behalf — that\'s a US Copyright Office DMCA agent requirement, not something we can skip. The agency relationship handles billing and account management; the per-creator authorisation handles the legal side.',
  },
  {
    q: "How do you handle creators leaving the agency?",
    a: "Cleanly. When a creator leaves, you can either (a) detach them so they continue with Privly under their own billing, or (b) close their account entirely. We don't lock creators in. Their case history follows them either way.",
  },
  {
    q: 'Is there a longer-term contract?',
    a: "No. Month-to-month, cancel any time. We'd rather earn the renewal than enforce one. Subscription fees are not refundable except where required by law.",
  },
  {
    q: "Can I white-label Privly under my agency's brand?",
    a: "Not at this stage. The product is shipped under the Privly brand — your protection agent is a Privly employee, takedowns are filed under our registered DMCA agent at the US Copyright Office, and creators see Privly's dashboard. If you need a fully white-labelled product with your brand on top, that's a different conversation — happy to discuss but it's a 1-3 month engineering build with a much higher commercial floor.",
  },
]

export default function AgenciesPage() {
  return (
    <div
      style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}
      className="flex flex-col overflow-hidden"
    >
      <MarketingHeader />

      {/* ─── Hero ─── */}
      <section style={{ padding: '130px 0 60px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
          <Reveal>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              built for agencies
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(44px, 6vw, 80px)',
                lineHeight: 0.98,
                margin: '14px 0 0',
                fontWeight: 400,
                letterSpacing: '-0.03em',
              }}
            >
              One dashboard.
              <br />
              <span className="italic" style={{ color: 'var(--accent)' }}>
                Every creator on your roster.
              </span>
            </h1>
          </Reveal>

          <Reveal
            delay={200}
            style={{
              marginTop: 28,
              fontSize: 18,
              color: 'var(--ink-2)',
              maxWidth: 660,
              margin: '28px auto 0',
              lineHeight: 1.6,
            }}
          >
            Most agencies manage 5–25 creators with a patchwork of subscriptions, screenshots, and email
            threads. We built a version of Privly that treats your roster as one relationship — one
            dashboard, one protection agent, one invoice.
          </Reveal>

          <Reveal
            delay={320}
            style={{
              marginTop: 36,
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="mailto:hello@useprivly.com?subject=Privly%20for%20Agencies%20%E2%80%94%20enquiry"
              className="btn btn-accent"
              style={{ padding: '18px 30px', fontSize: 17 }}
            >
              Talk to us <span>→</span>
            </a>
            <a
              href="#whats-included"
              className="btn btn-ghost"
              style={{ padding: '18px 30px', fontSize: 17 }}
            >
              See what&apos;s included
            </a>
          </Reveal>

          <Reveal
            delay={400}
            style={{
              marginTop: 24,
              fontSize: 13,
              color: 'var(--mute)',
            }}
          >
            5-creator minimum · $49/creator/month · month-to-month
          </Reveal>
        </div>
      </section>

      {/* ─── Pricing band ─── */}
      <section style={{ padding: '32px 0 72px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px' }}>
          <Reveal
            style={{
              background: 'linear-gradient(180deg, #1F0F2E, #2D1A45)',
              color: 'white',
              borderRadius: 28,
              padding: '40px 36px',
              display: 'grid',
              gap: 32,
              alignItems: 'center',
            }}
            className="grid-cols-1 md:grid-cols-[1fr_auto]"
          >
            <div>
              <span
                className="font-hand"
                style={{ fontSize: 22, color: 'color-mix(in oklab, var(--accent) 70%, white)' }}
              >
                simple, no surprises
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(28px, 3.4vw, 42px)',
                  margin: '6px 0 12px',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: 'white',
                }}
              >
                $49 per creator, per month.{' '}
                <span className="italic" style={{ color: 'color-mix(in oklab, var(--hot) 65%, white)' }}>
                  No tiers.
                </span>
              </h2>
              <p
                style={{
                  fontSize: 15,
                  margin: 0,
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.78)',
                }}
              >
                5-creator minimum ($245/month floor). One invoice. Month-to-month, cancel any time.
                Same plan whether you have 5 creators or 50.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 20,
                padding: '24px 28px',
                textAlign: 'center',
                minWidth: 240,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                example
              </div>
              <div
                className="font-serif"
                style={{
                  fontSize: 36,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  margin: '6px 0 4px',
                }}
              >
                $735/mo
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.78)' }}>
                15 creators × $49
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── What's included ─── */}
      <section
        id="whats-included"
        style={{ padding: '72px 0', background: 'var(--bg-2)' }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              what&apos;s included
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                margin: '10px 0 0',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              The full Privly stack,{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                multi-creator-shaped.
              </span>
            </h2>
          </Reveal>

          <Reveal
            style={{
              background: 'white',
              borderRadius: 24,
              border: '1px solid var(--line)',
              padding: '32px 36px',
              display: 'grid',
              gap: 14,
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {INCLUDED.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  fontSize: 15,
                  color: 'var(--ink-2)',
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    background: 'color-mix(in oklab, var(--accent) 18%, transparent)',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Check size={13} color="var(--accent)" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section style={{ padding: '72px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              how onboarding works
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                margin: '10px 0 0',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              Set up in a week.{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                Protected by week two.
              </span>
            </h2>
          </Reveal>

          <Reveal
            style={{ display: 'grid', gap: 16 }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                n: '01',
                title: 'Intro call',
                body: '30-min call to scope your roster, your platforms, and any specific concerns (managers, ex-talent, regional issues).',
              },
              {
                n: '02',
                title: 'Roster onboarding',
                body: 'We help you collect creator authorisations and platform handles. Each creator does a 5-minute identity verification.',
              },
              {
                n: '03',
                title: 'Scanning live',
                body: 'Within 24 hours of authorisation, scanning + Telegram monitoring is running for every creator on your roster.',
              },
              {
                n: '04',
                title: 'Ongoing',
                body: 'Your protection agent runs the day-to-day; you get a single monthly report covering every creator. One invoice.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="card card-h"
                style={{ padding: '28px 24px', border: '1px solid var(--line)' }}
              >
                <div
                  className="font-hand"
                  style={{ fontSize: 20, color: 'var(--accent)', marginBottom: 4 }}
                >
                  step {step.n}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 22,
                    margin: '0 0 8px',
                    lineHeight: 1.15,
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: '72px 0', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              the practical stuff
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                margin: '10px 0 0',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              Common questions.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gap: 12 }}>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--line)] p-6"
                style={{ background: 'white' }}
              >
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'var(--accent)',
                    margin: '0 0 8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.65 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: '90px 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
          <Reveal>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              let&apos;s scope it
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                margin: '10px 0 0',
                lineHeight: 1.02,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              Tell us about{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                your roster.
              </span>
            </h2>
          </Reveal>
          <Reveal
            delay={240}
            style={{
              marginTop: 24,
              fontSize: 17,
              color: 'var(--ink-2)',
              maxWidth: 540,
              margin: '24px auto 0',
              lineHeight: 1.55,
            }}
          >
            Email <a href="mailto:hello@useprivly.com" style={{ color: 'var(--accent)' }}>hello@useprivly.com</a>{' '}
            with rough roster size, the platforms your creators use, and any specific concerns. We&apos;ll
            reply within one business day with a tailored quote and a 30-min call slot.
          </Reveal>
          <Reveal
            delay={320}
            style={{
              marginTop: 36,
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="mailto:hello@useprivly.com?subject=Privly%20for%20Agencies%20%E2%80%94%20enquiry&body=Roster%20size%3A%20%0APrimary%20platforms%3A%20%0AAny%20specific%20concerns%3A%20%0A"
              className="btn btn-accent"
              style={{ padding: '18px 30px', fontSize: 17 }}
            >
              Email hello@useprivly.com <span>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}

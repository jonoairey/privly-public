import MarketingHeader from '@/components/marketing/Header'
import MarketingFooter from '@/components/marketing/Footer'
import Reveal from '@/components/marketing/shared/Reveal'
import { HOW_STEPS } from '@/components/marketing/shared/data'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'How Privly Works',
  description:
    'From invisible watermark to identified leaker in 4 steps. Learn how Privly protects your content.',
  path: '/how-it-works',
})

const TEAM_TASKS = [
  {
    emoji: '🕵️',
    title: 'Manual leak hunting',
    body: 'Human agents search private Telegram groups, Discord servers, and forums that automated crawlers can\u2019t reach.',
  },
  {
    emoji: '📬',
    title: 'DMCA filing & follow-up',
    body: 'Every takedown is filed and tracked. If a platform is slow to respond, your team escalates directly.',
  },
  {
    emoji: '🌐',
    title: 'Google de-indexing',
    body: 'We submit removal requests to Google so leaked content disappears from search results entirely.',
  },
  {
    emoji: '👁️',
    title: 'Re-upload monitoring',
    body: 'After content is removed, your team watches for re-uploads to the same sites and new ones.',
  },
  {
    emoji: '⚖️',
    title: 'Platform escalation',
    body: 'When standard takedowns are ignored, your team contacts platform legal departments directly.',
  },
  {
    emoji: '📊',
    title: 'Protection reports',
    body: 'Regular updates on what was found, what was removed, and what your team is currently working on.',
  },
]

const STATS = [
  { value: '500+', label: 'platforms scanned' },
  { value: '<2h', label: 'avg detection time' },
  { value: '96%', label: 'takedown success' },
  { value: '24/7', label: 'always watching' },
]

export default function HowItWorksPage() {
  return (
    <div
      style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}
      className="flex flex-col overflow-hidden"
    >
      <MarketingHeader />

      {/* ─── Hero ─── */}
      <section style={{ padding: '160px 0 80px', position: 'relative' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
          <Reveal>
            <span className="font-hand" style={{ fontSize: 28, color: 'var(--accent)' }}>
              four steps, zero stress
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.98,
                margin: '14px 0 0',
                fontWeight: 400,
                letterSpacing: '-0.03em',
              }}
            >
              Upload. Watermark.
              <br />
              <span className="italic" style={{ color: 'var(--accent)' }}>
                We handle the rest.
              </span>
            </h1>
          </Reveal>

          <Reveal
            delay={200}
            style={{
              marginTop: 24,
              fontSize: 18,
              color: 'var(--ink-2)',
              maxWidth: 560,
              margin: '24px auto 0',
              lineHeight: 1.6,
            }}
          >
            From invisible watermark to identified leaker &mdash; fully automated, fully human-backed.
            Here&apos;s exactly what happens when you sign up.
          </Reveal>
        </div>
      </section>

      {/* ─── Four Steps ─── */}
      <section style={{ padding: '60px 0 100px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              position: 'relative',
            }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {HOW_STEPS.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                style={{
                  padding: '36px 28px 32px',
                  background: 'white',
                  borderRadius: 24,
                  border: '1px solid var(--line)',
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{s.emoji}</div>
                <div
                  className="font-hand"
                  style={{ fontSize: 22, color: 'var(--accent)', marginBottom: 4 }}
                >
                  step {s.n}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 26,
                    margin: '0 0 12px',
                    lineHeight: 1.1,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: 'var(--ink-2)',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {s.body}
                </p>
                <div
                  className="font-hand"
                  style={{ marginTop: 16, fontSize: 18, color: 'var(--mute)' }}
                >
                  ✨ {s.note}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Deep Dive: Each Step Expanded ─── */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              let&apos;s go deeper
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(38px, 5vw, 56px)',
                margin: '10px 0 0',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              Every step, <span className="italic" style={{ color: 'var(--accent)' }}>explained.</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gap: 64 }}>
            {/* Step 1 */}
            <Reveal>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                }}
                className="grid-cols-1 md:grid-cols-2"
              >
                <div>
                  <div className="font-hand" style={{ fontSize: 20, color: 'var(--accent)', marginBottom: 8 }}>
                    step 01
                  </div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 32, margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em' }}
                  >
                    Upload &amp; fingerprint
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                    Drop your content into the Privly vault. Every subscriber who downloads it gets their
                    own invisible watermark &mdash; a unique digital fingerprint baked into the file itself.
                    It&apos;s invisible to the eye, survives compression, cropping, and format conversion.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                    Your originals are stored in an AES-256 encrypted vault with timestamped proof of
                    ownership. We physically can&apos;t view them &mdash; and neither can your protection agent.
                  </p>
                </div>
                <div
                  style={{
                    background: 'var(--bg-2)',
                    borderRadius: 20,
                    border: '1px solid var(--line)',
                    padding: 28,
                  }}
                >
                  <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Content Vault
                  </div>
                  {['photo_set_042.zip', 'exclusive_vid_march.mp4', 'custom_request_jay.jpg'].map(
                    (name, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          background: 'white',
                          borderRadius: 12,
                          border: '1px solid var(--line)',
                          marginBottom: 8,
                          fontSize: 14,
                        }}
                      >
                        <span>🔐 {name}</span>
                        <span style={{ fontSize: 12, color: 'var(--accent)' }}>✓ watermarked</span>
                      </div>
                    ),
                  )}
                  <div
                    className="font-hand"
                    style={{ marginTop: 12, textAlign: 'center', fontSize: 16, color: 'var(--mute)' }}
                  >
                    encrypted · zero-knowledge · yours forever
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={100}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                }}
                className="grid-cols-1 md:grid-cols-2"
              >
                <div
                  className="order-2 md:order-1"
                  style={{
                    background: 'var(--bg-2)',
                    borderRadius: 20,
                    border: '1px solid var(--line)',
                    padding: 28,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Scanning now...
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
                    {['Telegram', 'Discord', 'Reddit', 'Mega'].map((p) => (
                      <div
                        key={p}
                        style={{
                          padding: '10px 14px',
                          background: 'white',
                          borderRadius: 10,
                          border: '1px solid var(--line)',
                          fontSize: 13,
                        }}
                      >
                        👀 {p}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {['Tube sites', 'Cyberlockers', 'Image boards', 'Forums'].map((p) => (
                      <div
                        key={p}
                        style={{
                          padding: '10px 14px',
                          background: 'white',
                          borderRadius: 10,
                          border: '1px solid var(--line)',
                          fontSize: 13,
                        }}
                      >
                        👀 {p}
                      </div>
                    ))}
                  </div>
                  <div
                    className="font-hand"
                    style={{ marginTop: 16, fontSize: 16, color: 'var(--mute)' }}
                  >
                    500+ platforms, every 30 minutes
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="font-hand" style={{ fontSize: 20, color: 'var(--accent)', marginBottom: 8 }}>
                    step 02
                  </div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 32, margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em' }}
                  >
                    We scan. 24/7.
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                    The moment your content is uploaded, our bots start scanning. Telegram channels, Discord
                    servers, Reddit, Mega, tube sites, cyberlockers, image boards, niche forums &mdash;
                    over 500 platforms, every 30 minutes, around the clock.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                    And where bots can&apos;t go &mdash; private groups, invite-only channels &mdash; your
                    dedicated human agent picks up the slack. You do nothing. We do everything.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={100}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                }}
                className="grid-cols-1 md:grid-cols-2"
              >
                <div>
                  <div className="font-hand" style={{ fontSize: 20, color: 'var(--accent)', marginBottom: 8 }}>
                    step 03
                  </div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 32, margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em' }}
                  >
                    Leak found &rarr; we trace it.
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                    When we find your content somewhere it shouldn&apos;t be, the watermark tells us exactly
                    which subscriber released it. Their account, their email, and exactly when they shared it.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                    No guessing. No ambiguity. You get the receipts. Ban them, refund them, blacklist them
                    &mdash; it&apos;s your call. We give you the evidence and let you decide.
                  </p>
                </div>
                <div
                  style={{
                    background: 'var(--bg-2)',
                    borderRadius: 20,
                    border: '1px solid var(--line)',
                    padding: 28,
                  }}
                >
                  <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Leak Report
                  </div>
                  <div
                    style={{
                      padding: '14px 16px',
                      background: 'rgba(236, 72, 153, 0.08)',
                      borderRadius: 12,
                      border: '1px solid rgba(236, 72, 153, 0.2)',
                      marginBottom: 10,
                      fontSize: 14,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>🚨 Leak detected</span>
                    <span style={{ color: 'var(--ink-2)', marginLeft: 8 }}>photo_set_042.zip</span>
                  </div>
                  {[
                    ['Subscriber', 'user_8291 (john_d@...com)'],
                    ['Platform', 'Telegram · @leaks_channel'],
                    ['Shared', '14 minutes ago'],
                    ['Watermark match', '99.8%'],
                  ].map(([label, value], i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 16px',
                        background: 'white',
                        borderRadius: 10,
                        border: '1px solid var(--line)',
                        marginBottom: 6,
                        fontSize: 13,
                      }}
                    >
                      <span style={{ color: 'var(--ink-2)' }}>{label}</span>
                      <span style={{ fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                  <div
                    className="font-hand"
                    style={{ marginTop: 12, textAlign: 'center', fontSize: 16, color: 'var(--hot)' }}
                  >
                    caught red-handed 🎯
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Step 4 */}
            <Reveal delay={100}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                }}
                className="grid-cols-1 md:grid-cols-2"
              >
                <div
                  className="order-2 md:order-1"
                  style={{
                    background: 'var(--bg-2)',
                    borderRadius: 20,
                    border: '1px solid var(--line)',
                    padding: 28,
                  }}
                >
                  <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Takedown Status
                  </div>
                  {[
                    { label: 'DMCA filed', status: '✅ sent', color: 'var(--accent)' },
                    { label: 'Platform notified', status: '✅ confirmed', color: 'var(--accent)' },
                    { label: 'Content removed', status: '✅ gone', color: 'var(--accent)' },
                    { label: 'Google de-indexed', status: '✅ removed', color: 'var(--accent)' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                        background: 'white',
                        borderRadius: 10,
                        border: '1px solid var(--line)',
                        marginBottom: 8,
                        fontSize: 14,
                      }}
                    >
                      <span>{item.label}</span>
                      <span style={{ color: item.color, fontWeight: 500, fontSize: 13 }}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                  <div
                    className="font-hand"
                    style={{ marginTop: 12, textAlign: 'center', fontSize: 16, color: 'var(--accent)' }}
                  >
                    receipts included 💜
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="font-hand" style={{ fontSize: 20, color: 'var(--accent)', marginBottom: 8 }}>
                    step 04
                  </div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: 32, margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em' }}
                  >
                    Gone in hours.
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                    Automated DMCAs go out the second a leak is found. No queues, no forms to fill, no
                    three-week wait. Our system files the claim and a real human chases the platform until
                    it&apos;s actually removed.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                    We don&apos;t just remove the host &mdash; we make sure it disappears from Google search
                    results too. And then we keep watching in case it gets re-uploaded.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section style={{ padding: '64px 0', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 24,
              textAlign: 'center',
            }}
            className="grid-cols-2 sm:grid-cols-4"
          >
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="font-serif"
                  style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 6 }}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Your Protection Team ─── */}
      <section style={{ padding: '110px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              bots + humans = you win
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(38px, 5vw, 56px)',
                margin: '10px 0 0',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              Your dedicated{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                protection team.
              </span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'var(--ink-2)',
                maxWidth: 600,
                margin: '20px auto 0',
                lineHeight: 1.6,
              }}
            >
              Automation handles the speed. Your named protection agent handles everything else &mdash;
              the places bots can&apos;t reach, the follow-ups platforms ignore, and the situations
              that need a real person who knows your case.
            </p>
          </Reveal>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {TEAM_TASKS.map((t, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className="card card-h"
                style={{ padding: '28px 24px', border: '1px solid var(--line)' }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{t.emoji}</div>
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
                  {t.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                  {t.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} style={{ textAlign: 'center', marginTop: 48 }}>
            <p
              className="font-serif italic"
              style={{
                fontSize: 26,
                lineHeight: 1.35,
                maxWidth: 680,
                margin: '0 auto',
                fontWeight: 400,
              }}
            >
              This isn&apos;t a helpdesk. It&apos;s a{' '}
              <span className="mark-purple">protection team working for you every day</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: '120px 0', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '8%',
            fontSize: 42,
            opacity: 0.5,
          }}
          className="float1"
        >
          💜
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '18%',
            right: '10%',
            fontSize: 38,
            opacity: 0.5,
          }}
          className="float2"
        >
          ✨
        </div>

        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '0 28px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Reveal>
            <span className="font-hand" style={{ fontSize: 28, color: 'var(--accent)' }}>
              ready when you are 💜
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(42px, 6vw, 80px)',
                lineHeight: 0.98,
                margin: '14px 0 0',
                fontWeight: 400,
                letterSpacing: '-0.03em',
              }}
            >
              You make the content.
              <br />
              <span className="italic" style={{ color: 'var(--accent)' }}>
                We&apos;ll protect it.
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={240}
            style={{
              marginTop: 28,
              fontSize: 18,
              color: 'var(--ink-2)',
              maxWidth: 540,
              margin: '28px auto 0',
            }}
          >
            Seven days free. No card. If we haven&apos;t pulled at least one leak of yours off the
            internet by day seven, you never pay us a cent.
          </Reveal>

          <Reveal
            delay={320}
            style={{
              marginTop: 40,
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="/get-started"
              className="btn btn-accent"
              style={{ padding: '18px 30px', fontSize: 17 }}
            >
              Start my free trial <span>&rarr;</span>
            </a>
            <a
              href="/pricing"
              className="btn btn-ghost"
              style={{ padding: '18px 30px', fontSize: 17 }}
            >
              See pricing
            </a>
          </Reveal>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}

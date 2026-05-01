import MarketingHeader from '@/components/marketing/Header'
import MarketingFooter from '@/components/marketing/Footer'
import Reveal from '@/components/marketing/shared/Reveal'
import FloatingBrandLogos from '@/components/marketing/shared/FloatingBrandLogos'
import FinalCTA from '@/components/marketing/FinalCTA'
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
      <section style={{ padding: '130px 0 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Floating platform logos — "every platform, every country" */}
        <FloatingBrandLogos variant="hero" />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', position: 'relative' }}>
          <div
            style={{ display: 'grid', gap: 56, alignItems: 'center' }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {/* Left column — text */}
            <div>
              <Reveal>
                <span className="font-hand" style={{ fontSize: 28, color: 'var(--accent)' }}>
                  four steps, zero stress
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(48px, 6vw, 88px)',
                    lineHeight: 0.98,
                    margin: '14px 0 0',
                    fontWeight: 400,
                    letterSpacing: '-0.03em',
                  }}
                >
                  You sign up.
                  <br />
                  <span className="italic" style={{ color: 'var(--accent)' }}>
                    We do the rest.
                  </span>
                </h1>
              </Reveal>

              <Reveal
                delay={200}
                style={{
                  marginTop: 24,
                  fontSize: 18,
                  color: 'var(--ink-2)',
                  lineHeight: 1.6,
                }}
              >
                Scanning, DMCA takedowns, Google de-indexing, follow-ups, and re-emergence
                checks start the moment you sign up &mdash; fully automated, fully human-backed.
                Forensic watermarking is in the box for when you want subscriber-level leaker tracing.
              </Reveal>

              <Reveal
                delay={280}
                style={{
                  marginTop: 18,
                  fontSize: 14,
                  color: 'var(--mute)',
                  lineHeight: 1.5,
                }}
              >
                You don&apos;t need to upload anything to get protection. Just give us your handles
                and we&apos;ll start scanning.
              </Reveal>
            </div>

            {/* Right column — portrait with day-03 corner tag */}
            <Reveal delay={160}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4 / 5',
                  width: '100%',
                  maxWidth: 460,
                  margin: '0 auto',
                  borderRadius: 18,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px -20px rgba(31,15,46,0.4)',
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?w=720&h=900&fit=crop&crop=faces)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-hidden
              >
                {/* corner-tag pill */}
                <span
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: 18,
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    gap: 8,
                    padding: '8px 14px',
                    background: 'rgba(255,255,255,0.94)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    borderRadius: 99,
                    boxShadow: '0 4px 14px -4px rgba(31,15,46,0.18)',
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.005em', color: 'var(--ink)' }}>
                    day 03
                  </span>
                  <span className="font-hand" style={{ fontSize: 18, color: 'var(--accent)' }}>
                    first leak removed
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Four Steps ─── */}
      <section style={{ padding: '48px 0 72px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{
              display: 'grid',
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
      <section style={{ padding: '72px 0' }}>
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
                    Optional, but powerful. Drop content into the Privly vault and every subscriber
                    who downloads it gets their own invisible watermark &mdash; a unique digital
                    fingerprint baked into the file itself. Invisible to the eye, survives compression,
                    cropping, and format conversion.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                    Your originals are stored in an AES-256 encrypted vault with timestamped proof of
                    ownership. We physically can&apos;t view them &mdash; and neither can your protection agent.
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--mute)', lineHeight: 1.6, margin: 0 }}>
                    Skip this step entirely if you just want scanning + takedowns. The rest of
                    Privly works without watermarking &mdash; this is the upgrade path for catching
                    the specific subscriber who leaked.
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
                  {[
                    { name: 'photo_set_042.zip', highlight: false, ago: '12 days ago' },
                    { name: 'april_drop_v2.mp4', highlight: true, ago: '2 min ago' },
                    { name: 'custom_jay_03.jpg', highlight: false, ago: '3 weeks ago' },
                  ].map((file, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        background: 'white',
                        borderRadius: 12,
                        border: file.highlight ? '1px solid var(--accent)' : '1px solid var(--line)',
                        marginBottom: 8,
                        fontSize: 14,
                        boxShadow: file.highlight ? '0 0 0 3px color-mix(in oklab, var(--accent) 12%, transparent)' : 'none',
                      }}
                    >
                      <span>🔐 {file.name}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 11, color: 'var(--mute)' }}>{file.ago}</span>
                        <span style={{ fontSize: 12, color: 'var(--accent)' }}>✓ watermarked</span>
                      </span>
                    </div>
                  ))}
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
                    {[
                      { label: 'Telegram', hit: false },
                      { label: 'Discord', hit: false },
                      { label: 'Reddit', hit: true },
                      { label: 'Mega', hit: false },
                    ].map((p) => (
                      <div
                        key={p.label}
                        style={{
                          padding: '10px 14px',
                          background: p.hit
                            ? 'linear-gradient(135deg, color-mix(in oklab, var(--accent) 14%, white), color-mix(in oklab, var(--hot) 10%, white))'
                            : 'white',
                          borderRadius: 10,
                          border: p.hit ? '1px solid var(--accent)' : '1px solid var(--line)',
                          fontSize: 13,
                          fontWeight: p.hit ? 600 : 400,
                          color: p.hit ? 'var(--accent)' : 'var(--ink)',
                          position: 'relative',
                        }}
                      >
                        {p.hit ? '🚨' : '👀'} {p.label}
                        {p.hit && (
                          <span
                            style={{
                              position: 'absolute',
                              top: -6,
                              right: -6,
                              padding: '2px 6px',
                              background: 'var(--hot)',
                              color: 'white',
                              fontSize: 10,
                              fontWeight: 600,
                              borderRadius: 99,
                            }}
                          >
                            match
                          </span>
                        )}
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
                    spotted on r/leakedstuff &mdash; 7:42am
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
                    The moment you sign up, our bots start scanning. 500+ leak sites every 30 minutes.
                    Telegram channels monitored live via the Telegram API. Discord, Reddit, Mega, tube
                    sites, cyberlockers, image boards, niche forums &mdash; around the clock.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: '0 0 16px' }}>
                    Confirmed-removed links get rechecked every 4 hours, automatically &mdash; the
                    second something comes back, we file again.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                    And where bots can&apos;t go &mdash; private groups, invite-only Discord servers
                    &mdash; your dedicated human agent picks up the slack. You do nothing. We do everything.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={100}>
              <div
                style={{
                  display: 'grid',
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
                    We match leaks by username, face (opt-in), and content fingerprint &mdash; so we
                    catch your stuff even when usernames are stripped or files re-encoded. The
                    takedown goes out either way.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                    If you watermarked the upload, we also pinpoint the exact subscriber: their account,
                    their email, and when they shared it. No guessing, no ambiguity &mdash; ban them,
                    refund them, blacklist them. Your call. We give you the evidence.
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
                    <span style={{ color: 'var(--ink-2)', marginLeft: 8 }}>april_drop_v2.mp4</span>
                  </div>
                  {[
                    ['Subscriber', 'acct_7724 · m.t@***.com'],
                    ['Platform', 'Reddit · r/leakzfree'],
                    ['Spotted', '18 minutes ago'],
                    ['Watermark match', '99.6%'],
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      Takedown Status
                    </div>
                    <span style={{ fontSize: 12, color: 'var(--ink-2)', fontWeight: 500 }}>
                      april_drop_v2.mp4 · Reddit
                    </span>
                  </div>
                  {[
                    { label: 'DMCA filed', status: '✅ 02:14am', color: 'var(--accent)' },
                    { label: 'Reddit confirmed', status: '✅ 04:38am', color: 'var(--accent)' },
                    { label: 'Google de-indexed', status: '✅ same day', color: 'var(--accent)' },
                    { label: 'Re-upload watch', status: '🟢 active · 4h checks', color: '#16a34a' },
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
                    posted overnight, gone by breakfast 💜
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
      <section style={{ padding: '48px 0', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{
              display: 'grid',
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
      <section style={{ padding: '80px 0' }}>
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
            style={{ display: 'grid', gap: 16 }}
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

      <FinalCTA />

      <MarketingFooter />
    </div>
  )
}

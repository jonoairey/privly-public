import MarketingHeader from '@/components/marketing/Header'
import MarketingFooter from '@/components/marketing/Footer'
import Reveal from '@/components/marketing/shared/Reveal'
import { FEATURES_LIST, COMPARE_ROWS } from '@/components/marketing/shared/data'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata = genMeta({
  title: 'Features - Privly',
  description:
    "Discover Privly's advanced content protection features: forensic watermarking, leak source tracing, 24/7 leak scanning, and more.",
  path: '/features',
})

const HERO_FEATURES = [
  {
    emoji: '🔐',
    title: 'Invisible watermarks',
    body: 'Every file gets a unique fingerprint for each subscriber. They can\u2019t see it. We can. So can the law. Survives compression, cropping, and format conversion.',
  },
  {
    emoji: '🎯',
    title: 'Leak source tracing',
    body: 'When your content shows up where it shouldn\u2019t, the watermark tells us exactly which subscriber released it. Their account, their email, their timestamp.',
  },
  {
    emoji: '💬',
    title: 'A real person, yours',
    body: 'Named protection agent. Slack, email, or WhatsApp. They know your case, your content, your boundaries. This isn\u2019t a help desk \u2014 it\u2019s someone who cares.',
  },
]

export default function FeaturesPage() {
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
              everything included, obviously
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
              The only protection that
              <br />
              <span className="italic" style={{ color: 'var(--accent)' }}>
                finds your leakers.
              </span>
            </h1>
          </Reveal>

          <Reveal
            delay={200}
            style={{
              marginTop: 24,
              fontSize: 18,
              color: 'var(--ink-2)',
              maxWidth: 580,
              margin: '24px auto 0',
              lineHeight: 1.6,
            }}
          >
            Forensic watermarking + proactive monitoring + automated DMCA takedowns + a real human who
            knows your name. One plan. No tiers. No upsells.
          </Reveal>
        </div>
      </section>

      {/* ─── Three Hero Feature Cards ─── */}
      <section style={{ padding: '0 0 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {HERO_FEATURES.map((f, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="card card-h"
                style={{ padding: '36px 28px', border: '1px solid var(--line)' }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{f.emoji}</div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 26,
                    margin: '0 0 12px',
                    lineHeight: 1.15,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 15, color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI & Automation Spotlight ─── */}
      <section style={{ padding: '100px 0', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              the engine under the hood
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(34px, 4.5vw, 52px)',
                margin: '10px 0 0',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              AI that never sleeps.{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                Humans that never quit.
              </span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: 'var(--ink-2)',
                maxWidth: 580,
                margin: '20px auto 0',
                lineHeight: 1.6,
              }}
            >
              Most services give you bots or people. Privly gives you both &mdash; AI handles the
              speed, your named protection agent handles everything bots can&apos;t reach.
            </p>
          </Reveal>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {/* AI / Automation Column */}
            <Reveal>
              <div
                style={{
                  background: 'white',
                  borderRadius: 24,
                  border: '1px solid var(--line)',
                  padding: '32px 28px',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 14px',
                    background: 'rgba(124, 58, 237, 0.08)',
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: 20,
                  }}
                >
                  ⚡ Automation &amp; AI
                </div>
                <div style={{ display: 'grid', gap: 16 }}>
                  {[
                    { emoji: '🤖', label: 'AI content matching across 500+ platforms' },
                    { emoji: '⚡', label: 'Instant DMCA generation & filing' },
                    { emoji: '🧬', label: 'Forensic watermarks that survive re-encoding' },
                    { emoji: '🛡️', label: 'Deepfake & impersonation detection' },
                    { emoji: '🔍', label: 'Scans every 30 minutes, 24/7' },
                    { emoji: '📬', label: 'Automated Google de-indexing requests' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}
                    >
                      <span style={{ fontSize: 20 }}>{item.emoji}</span>
                      <span style={{ color: 'var(--ink-2)' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Human Column */}
            <Reveal delay={120}>
              <div
                style={{
                  background: 'white',
                  borderRadius: 24,
                  border: '1px solid var(--line)',
                  padding: '32px 28px',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 14px',
                    background: 'rgba(236, 72, 153, 0.08)',
                    borderRadius: 99,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--hot)',
                    marginBottom: 20,
                  }}
                >
                  💜 Your protection agent
                </div>
                <div style={{ display: 'grid', gap: 16 }}>
                  {[
                    { emoji: '💬', label: 'Named agent on Slack, email, or WhatsApp' },
                    { emoji: '🕵️', label: 'Searches private groups bots can\u2019t access' },
                    { emoji: '⚖️', label: 'Escalates ignored takedowns to platform legal' },
                    { emoji: '👁️', label: 'Monitors for re-uploads after removal' },
                    { emoji: '📊', label: 'Regular protection status reports' },
                    { emoji: '🤐', label: 'Zero judgment \u2014 our team comes from the industry' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15 }}
                    >
                      <span style={{ fontSize: 20 }}>{item.emoji}</span>
                      <span style={{ color: 'var(--ink-2)' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240} style={{ textAlign: 'center', marginTop: 40 }}>
            <p
              className="font-serif italic"
              style={{ fontSize: 24, lineHeight: 1.35, maxWidth: 600, margin: '0 auto', fontWeight: 400 }}
            >
              AI finds the leak in minutes. <span className="mark-purple">Your person makes sure it stays gone</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Full Feature Grid ─── */}
      <section style={{ padding: '110px 0', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              one plan, the works
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
              Everything you get{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                for $49/mo.
              </span>
            </h2>
          </Reveal>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES_LIST.map((f, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className="card card-h"
                style={{ padding: '28px 24px', border: '1px solid var(--line)' }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{f.emoji}</div>
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
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
      <section style={{ padding: '110px 0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              why switch?
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
              Privly vs.{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                everyone else.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div
              style={{
                borderRadius: 24,
                border: '1px solid var(--line)',
                overflow: 'hidden',
                background: 'white',
              }}
            >
              {/* Table Header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 100px 100px 100px',
                  padding: '16px 24px',
                  borderBottom: '1px solid var(--line)',
                  background: 'var(--bg-2)',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                <span style={{ color: 'var(--ink-2)' }}>Feature</span>
                <span style={{ textAlign: 'center', color: 'var(--accent)' }}>Privly</span>
                <span style={{ textAlign: 'center', color: 'var(--ink-2)' }}>DMCA services</span>
                <span style={{ textAlign: 'center', color: 'var(--ink-2)' }}>DIY</span>
              </div>

              {/* Table Rows */}
              {COMPARE_ROWS.map(([feature, privly, dmca, diy], i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 100px 100px 100px',
                    padding: '14px 24px',
                    borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid var(--line)' : 'none',
                    fontSize: 14,
                    alignItems: 'center',
                  }}
                >
                  <span>{feature}</span>
                  <span style={{ textAlign: 'center', fontSize: 18 }}>{privly ? '💜' : '—'}</span>
                  <span style={{ textAlign: 'center', fontSize: 18 }}>{dmca ? '⚪' : '—'}</span>
                  <span style={{ textAlign: 'center', fontSize: 18 }}>{diy ? '⚪' : '—'}</span>
                </div>
              ))}

              {/* Price Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 100px 100px 100px',
                  padding: '16px 24px',
                  borderTop: '1px solid var(--line)',
                  background: 'var(--bg-2)',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <span>Starting price</span>
                <span style={{ textAlign: 'center', color: 'var(--accent)' }}>$49/mo</span>
                <span style={{ textAlign: 'center', color: 'var(--ink-2)' }}>$109+/mo</span>
                <span style={{ textAlign: 'center', color: 'var(--ink-2)' }}>Free*</span>
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                color: 'var(--mute)',
                textAlign: 'center',
                marginTop: 16,
              }}
            >
              * Free in money. Costs you dozens of hours, emotional energy, and usually doesn&apos;t work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── The Human Difference ─── */}
      <section style={{ padding: '100px 0', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 28px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              the part that matters most
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(34px, 4.5vw, 52px)',
                margin: '10px 0 0',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              Bots do the scanning.{' '}
              <span className="italic" style={{ color: 'var(--accent)' }}>
                Your person does the rest.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div
              style={{
                background: 'white',
                borderRadius: 24,
                border: '1px solid var(--line)',
                padding: '40px 36px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 32,
                }}
                className="grid-cols-1 md:grid-cols-2"
              >
                <div>
                  <p
                    style={{
                      fontSize: 16,
                      color: 'var(--ink-2)',
                      lineHeight: 1.65,
                      margin: '0 0 16px',
                    }}
                  >
                    Every Privly account gets a named protection agent on day one. They know your
                    content, your boundaries, and your case history. When you message them, they
                    already know what&apos;s going on.
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
                    They manually search private Telegram groups, hunt through invite-only Discord
                    servers, and follow up with platform legal teams when automated takedowns get
                    ignored. Not a chatbot. Not a ticket queue. A real person who texts you updates.
                  </p>
                </div>
                <div style={{ display: 'grid', gap: 10 }}>
                  {[
                    'Searches places bots can\u2019t go',
                    'Files and follows up on every DMCA',
                    'Escalates ignored takedowns to legal',
                    'Google de-indexing requests',
                    'Monitors for re-uploads',
                    'Regular protection status updates',
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        fontSize: 14,
                        color: 'var(--ink-2)',
                      }}
                    >
                      <span style={{ fontSize: 18 }}>💜</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: '1px solid var(--line)',
                  textAlign: 'center',
                }}
              >
                <p
                  className="font-serif italic"
                  style={{ fontSize: 22, fontWeight: 400, margin: 0 }}
                >
                  &ldquo;It feels like having a{' '}
                  <span className="mark-purple">lawyer on retainer who actually cares</span>.&rdquo;
                </p>
                <p style={{ fontSize: 14, color: 'var(--mute)', marginTop: 8, margin: '8px 0 0' }}>
                  &mdash; Jess K., Fansly creator
                </p>
              </div>
            </div>
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
            Seven days free. No card. One plan, everything included.
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

          <Reveal
            delay={420}
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span className="chip">💜 hundreds of creators</span>
            <span className="chip">⚡ takedowns actioned instantly</span>
            <span className="chip">🌎 every platform, every country</span>
          </Reveal>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}

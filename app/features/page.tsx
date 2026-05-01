import Image from 'next/image'
import MarketingHeader from '@/components/marketing/Header'
import MarketingFooter from '@/components/marketing/Footer'
import Reveal from '@/components/marketing/shared/Reveal'
import { Check } from '@/components/marketing/shared/Icons'
import FloatingBrandLogos from '@/components/marketing/shared/FloatingBrandLogos'
import FinalCTA from '@/components/marketing/FinalCTA'
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
      <section style={{ padding: '130px 0 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Floating platform logos — "every platform, every country" */}
        <FloatingBrandLogos variant="hero" />

        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', position: 'relative' }}>
          <div
            style={{ display: 'grid', gap: 56, alignItems: 'center' }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {/* Left column — copy */}
            <div>
              <Reveal>
                <span className="font-hand" style={{ fontSize: 28, color: 'var(--accent)' }}>
                  everything included, obviously
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(44px, 5.4vw, 78px)',
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
                  fontSize: 17,
                  color: 'var(--ink-2)',
                  lineHeight: 1.6,
                }}
              >
                Forensic watermarking + proactive monitoring + automated DMCA takedowns + a real human who
                knows your name. One plan. No tiers. No upsells.
              </Reveal>

              {/* Forensic watermarks pull-out — sits beside the visual */}
              <Reveal
                delay={280}
                style={{
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: '1px solid var(--line)',
                }}
              >
                <span
                  className="font-hand"
                  style={{ fontSize: 20, color: 'var(--accent)' }}
                >
                  forensic watermarks
                </span>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(22px, 2.4vw, 28px)',
                    margin: '4px 0 10px',
                    lineHeight: 1.15,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                  }}
                >
                  One file.{' '}
                  <span className="italic" style={{ color: 'var(--accent)' }}>
                    Three subscribers.
                  </span>
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: 'var(--ink-2)',
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  Every download carries an invisible fingerprint &mdash; unique to the subscriber who grabbed it.
                  Survives screenshots, re-encoding, cropping, and format conversion. The three tiles to the right
                  are the same file, but each one carries a different subscriber&apos;s ID.
                </p>
              </Reveal>
            </div>

            {/* Right column — compact watermark trio */}
            <Reveal
              delay={160}
              style={{
                background: 'linear-gradient(180deg, #1F0F2E, #2D1A45)',
                borderRadius: 22,
                padding: 22,
                color: 'white',
                boxShadow: '0 22px 50px -22px rgba(31,15,46,0.35)',
              }}
            >
              <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr 1fr' }}>
                {[
                  { label: 'SUBSCRIBER A', id: 'WM_8291_a4f', hue: 0 },
                  { label: 'SUBSCRIBER B', id: 'WM_4456_e2c', hue: -3 },
                  { label: 'SUBSCRIBER C', id: 'WM_7724_b1d', hue: 2 },
                ].map((tile, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      aspectRatio: '4 / 5',
                      borderRadius: 12,
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div
                      aria-hidden
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=320&h=400&fit=crop)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: `hue-rotate(${tile.hue}deg) saturate(0.95)`,
                      }}
                    />
                    <div
                      aria-hidden
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(31,15,46,0) 55%, rgba(31,15,46,0.85) 100%)',
                      }}
                    />

                    {/* badge */}
                    <span
                      style={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        padding: '3px 8px',
                        borderRadius: 99,
                        background: 'rgba(255,255,255,0.94)',
                        color: 'var(--ink)',
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {tile.label}
                    </span>

                    {/* mono ID stamp */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 8,
                        right: 8,
                        bottom: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 6,
                        padding: '5px 8px',
                        background: 'rgba(15,8,24,0.78)',
                        borderRadius: 6,
                        fontFamily:
                          '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, monospace',
                        fontSize: 10,
                        color: 'rgba(255,255,255,0.94)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      <span>{tile.id}</span>
                      <span
                        className="animate-pulse"
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#22c55e',
                          boxShadow: '0 0 0 2px rgba(34,197,94,0.25)',
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.78)' }}>
                  identical to the human eye &rarr;
                </span>
                <span
                  className="font-hand"
                  style={{ fontSize: 18, color: 'color-mix(in oklab, var(--hot) 65%, white)' }}
                >
                  we know which one leaked 💜
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Three Hero Feature Cards ─── */}
      <section style={{ padding: '0 0 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
          <div
            style={{ display: 'grid', gap: 24 }}
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
      <section style={{ padding: '72px 0', background: 'var(--bg-2)' }}>
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
            style={{ display: 'grid', gap: 20 }}
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
                    { emoji: '📡', label: 'Live Telegram channel monitoring' },
                    { emoji: '🪞', label: 'Face-match + deepfake detection' },
                    { emoji: '🔁', label: 'Re-emergence checks every 4 hours' },
                    { emoji: '🧬', label: 'Forensic watermarks that survive re-encoding' },
                    { emoji: '⚡', label: 'Instant DMCA generation & filing' },
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
                    { emoji: '🕵️', label: 'Searches invite-only Discord + private groups bots can\u2019t access' },
                    { emoji: '⚖️', label: 'Escalates ignored takedowns to platform legal' },
                    { emoji: '🧐', label: 'Reviews ambiguous matches before any takedown goes out' },
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
      <section style={{ padding: '80px 0', background: 'var(--bg-2)' }}>
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
            style={{ display: 'grid', gap: 16 }}
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
      <section style={{ padding: '80px 0' }}>
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
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                background: 'white',
              }}
            >
              <div style={{ minWidth: 480 }}>
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
              {COMPARE_ROWS.map(([feature, privly, dmca, diy], i) => {
                const cellGlyph = (v: typeof privly) =>
                  v === 'yes' ? '✓' : v === 'partial' ? '◐' : '✗'
                const cellColor = (v: typeof privly) =>
                  v === 'yes' ? 'var(--accent)' : v === 'partial' ? '#B45309' : 'var(--mute)'
                return (
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
                    <span style={{ textAlign: 'center', fontSize: 18, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                      {privly === 'yes' ? (
                        <Image src="/favicon.svg" alt="yes" width={22} height={22} style={{ display: 'block' }} unoptimized />
                      ) : (
                        <span style={{ color: cellColor(privly), fontSize: 18, fontWeight: 700 }}>{cellGlyph(privly)}</span>
                      )}
                    </span>
                    <span style={{ textAlign: 'center', fontSize: 18, color: cellColor(dmca), fontWeight: dmca === 'no' ? 400 : 700 }}>
                      {cellGlyph(dmca)}
                    </span>
                    <span style={{ textAlign: 'center', fontSize: 18, color: cellColor(diy), fontWeight: diy === 'no' ? 400 : 700 }}>
                      {cellGlyph(diy)}
                    </span>
                  </div>
                )
              })}

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
      <section style={{ padding: '72px 0', background: 'var(--bg-2)' }}>
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
                        }}
                      >
                        <Check size={13} color="var(--accent)" />
                      </span>
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
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr',
                    gap: 20,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=faces)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '3px solid white',
                      boxShadow: '0 8px 24px -8px rgba(31,15,46,0.2)',
                      flexShrink: 0,
                    }}
                    aria-hidden
                  />
                  <div>
                    <p
                      className="font-serif italic"
                      style={{ fontSize: 22, fontWeight: 400, margin: 0, lineHeight: 1.35 }}
                    >
                      &ldquo;It feels like having a{' '}
                      <span className="mark-purple">lawyer on retainer who actually cares</span>.&rdquo;
                    </p>
                    <p style={{ fontSize: 14, color: 'var(--mute)', margin: '10px 0 0' }}>
                      Jess K. &middot; Fansly creator &middot; 200k subs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />

      <MarketingFooter />
    </div>
  )
}

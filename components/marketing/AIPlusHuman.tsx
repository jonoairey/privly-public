import Reveal from './shared/Reveal'

const SPEED_LAYER = [
  {
    emoji: '🤖',
    title: 'AI-powered scanning',
    body: 'Machine learning matches your content across 500+ platforms every 30 minutes — even when it\u2019s been cropped, compressed, or reformatted.',
  },
  {
    emoji: '⚡',
    title: 'Instant DMCA automation',
    body: 'The second a leak is detected, our system generates and files a legally valid DMCA takedown. No forms. No queues. No waiting.',
  },
  {
    emoji: '🧬',
    title: 'Forensic watermarking',
    body: 'AI-embedded fingerprints survive screenshots, re-encoding, and editing. Every copy traces back to the exact subscriber who leaked it.',
  },
  {
    emoji: '🛡️',
    title: 'Deepfake & impersonation detection',
    body: 'Our models detect AI-generated content using your likeness before it spreads. Protect your face, not just your files.',
  },
]

const CARE_LAYER = [
  {
    emoji: '💬',
    title: 'Named protection agent',
    body: 'A real person who knows your case, your content, and your boundaries. Slack, email, or WhatsApp — they text you updates.',
  },
  {
    emoji: '🕵️',
    title: 'Human-led investigations',
    body: 'Private Telegram groups, invite-only Discord servers, niche forums — the places bots can\u2019t go. Your agent searches them manually.',
  },
  {
    emoji: '⚖️',
    title: 'Legal escalation',
    body: 'When platforms ignore automated takedowns, your agent contacts their legal teams directly. Real pressure from a real person.',
  },
  {
    emoji: '📊',
    title: 'Protection reports',
    body: 'Regular updates on what was found, what was removed, and what\u2019s being worked on. Not a dashboard you check — updates that come to you.',
  },
]

export default function AIPlusHuman() {
  return (
    <section style={{ padding: '110px 0', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
            AI + humans, working together
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.05,
              margin: '12px 0 16px',
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            Automation for <span className="italic" style={{ color: 'var(--accent)' }}>speed</span>.
            <br />
            Humans for <span className="italic" style={{ color: 'var(--accent)' }}>everything else</span>.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Most services give you one or the other. Privly gives you both &mdash; AI that never sleeps
            and a real person who actually cares.
          </p>
        </Reveal>

        {/* Two-column layout */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Speed Layer */}
          <div>
            <Reveal style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  background: 'rgba(124, 58, 237, 0.08)',
                  borderRadius: 99,
                  border: '1px solid rgba(124, 58, 237, 0.15)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--accent)',
                }}
              >
                ⚡ The speed layer
              </div>
            </Reveal>
            <div style={{ display: 'grid', gap: 12 }}>
              {SPEED_LAYER.map((item, i) => (
                <Reveal
                  key={i}
                  delay={i * 60}
                  style={{
                    padding: '24px 22px',
                    background: 'white',
                    borderRadius: 20,
                    border: '1px solid var(--line)',
                  }}
                >
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 28, flexShrink: 0, lineHeight: 1 }}>{item.emoji}</div>
                    <div>
                      <h3
                        className="font-serif"
                        style={{
                          fontSize: 20,
                          margin: '0 0 6px',
                          lineHeight: 1.15,
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Care Layer */}
          <div>
            <Reveal style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  background: 'rgba(236, 72, 153, 0.08)',
                  borderRadius: 99,
                  border: '1px solid rgba(236, 72, 153, 0.15)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--hot)',
                }}
              >
                💜 The care layer
              </div>
            </Reveal>
            <div style={{ display: 'grid', gap: 12 }}>
              {CARE_LAYER.map((item, i) => (
                <Reveal
                  key={i}
                  delay={i * 60}
                  style={{
                    padding: '24px 22px',
                    background: 'white',
                    borderRadius: 20,
                    border: '1px solid var(--line)',
                  }}
                >
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 28, flexShrink: 0, lineHeight: 1 }}>{item.emoji}</div>
                    <div>
                      <h3
                        className="font-serif"
                        style={{
                          fontSize: 20,
                          margin: '0 0 6px',
                          lineHeight: 1.15,
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={400} style={{ textAlign: 'center', marginTop: 56 }}>
          <p
            className="font-serif italic"
            style={{ fontSize: 28, lineHeight: 1.3, maxWidth: 700, margin: '0 auto', fontWeight: 400 }}
          >
            AI finds the leak in minutes. <span className="mark-purple">Your person makes sure it stays gone</span>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

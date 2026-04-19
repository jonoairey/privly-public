import Reveal from './shared/Reveal'
import { EMPATHY_CARDS } from './shared/data'

export default function WeGetIt() {
  return (
    <section style={{ padding: '110px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
            we&apos;ve heard it all
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
            We <span className="italic" style={{ color: 'var(--accent)' }}>get it</span>. We really do.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 560, margin: '0 auto' }}>
            Before we built Privly, our team spent a year talking to full-time creators. Here&apos;s what almost every one of them told us.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gap: 24 }} className="grid-cols-1 md:grid-cols-3">
          {EMPATHY_CARDS.map((f, i) => (
            <Reveal key={i} delay={i * 100} className="card card-h" style={{ padding: '32px 28px', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{f.emoji}</div>
              <h3
                className="font-serif"
                style={{ fontSize: 24, margin: 0, lineHeight: 1.2, fontWeight: 500, letterSpacing: '-0.015em' }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', marginTop: 14, lineHeight: 1.55, marginBottom: 0 }}>
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} style={{ textAlign: 'center', marginTop: 56 }}>
          <p
            className="font-serif italic"
            style={{ fontSize: 30, lineHeight: 1.3, maxWidth: 740, margin: '0 auto', fontWeight: 400 }}
          >
            So we built the service <span className="mark-purple">we wish existed</span> when it happened to our friends.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

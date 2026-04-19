import Reveal from './shared/Reveal'
import { FEATURES_LIST } from './shared/data'

export default function Features() {
  return (
    <section style={{ padding: '110px 0', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
            everything included, obviously
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(42px, 5vw, 68px)',
              margin: '10px 0 0',
              lineHeight: 1.02,
              fontWeight: 400,
              letterSpacing: '-0.025em',
            }}
          >
            One plan. <span className="italic" style={{ color: 'var(--accent)' }}>The works.</span>
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
                style={{ fontSize: 22, margin: '0 0 8px', lineHeight: 1.15, fontWeight: 500, letterSpacing: '-0.01em' }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

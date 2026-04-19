import Reveal from './shared/Reveal'
import { Arrow } from './shared/Icons'
import { HOW_STEPS } from './shared/data'

export default function HowItWorks() {
  return (
    <section style={{ padding: '110px 0', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
            four steps, zero stress
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
            How it <span className="italic" style={{ color: 'var(--accent)' }}>all works.</span>
          </h2>
        </Reveal>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, position: 'relative' }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HOW_STEPS.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              style={{
                padding: '32px 24px 28px',
                background: 'white',
                borderRadius: 24,
                border: '1px solid var(--line)',
                position: 'relative',
              }}
            >
              <div style={{ fontSize: 44, marginBottom: 14 }}>{s.emoji}</div>
              <div className="font-hand" style={{ fontSize: 22, color: 'var(--accent)', marginBottom: 4 }}>
                step {s.n}
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: 24, margin: '0 0 10px', lineHeight: 1.1, fontWeight: 500, letterSpacing: '-0.015em' }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>{s.body}</p>
              <div className="font-hand" style={{ marginTop: 14, fontSize: 18, color: 'var(--mute)' }}>
                ✨ {s.note}
              </div>
              {i < 3 && (
                <Arrow
                  w={40}
                  h={30}
                  color="var(--line-2)"
                  className="float1 hidden lg:block"
                  // @ts-expect-error inline style on SVG wrapper
                  style={{ position: 'absolute', right: -30, top: '50%', zIndex: 2 }}
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from './shared/Reveal'
import { PRIVACY_CARDS } from './shared/data'

export default function Privacy() {
  return (
    <section
      style={{
        padding: '110px 0',
        background: 'var(--ink)',
        color: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', position: 'relative' }}>
        <Reveal style={{ maxWidth: 720, marginBottom: 48 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent-2)' }}>
            some things stay between us
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(42px, 5vw, 68px)',
              lineHeight: 1.02,
              margin: '10px 0 16px',
              fontWeight: 400,
              letterSpacing: '-0.025em',
              color: 'white',
            }}
          >
            Discreet by <span className="italic" style={{ color: 'var(--accent-2)' }}>design.</span>
          </h2>
          <p style={{ fontSize: 17, color: '#D8B4FE', lineHeight: 1.6, margin: 0 }}>
            Your bank statement won&apos;t tell anyone what you do. Your support agent won&apos;t preview
            your content. And your data never leaves encrypted storage. Full stop.
          </p>
        </Reveal>

        <div
          style={{ display: 'grid', gap: 20 }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRIVACY_CARDS.map(([emoji, title, body], i) => (
            <Reveal
              key={i}
              delay={i * 80}
              style={{
                padding: '28px 24px',
                background: 'rgba(255,255,255,.05)',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,.08)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{emoji}</div>
              <h3 className="font-serif" style={{ fontSize: 20, margin: '0 0 8px', fontWeight: 500, color: 'white' }}>
                {title}
              </h3>
              <p style={{ fontSize: 13, color: '#D8B4FE', margin: 0, lineHeight: 1.55 }}>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

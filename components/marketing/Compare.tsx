import Reveal from './shared/Reveal'
import { Heart } from './shared/Icons'
import { COMPARE_ROWS } from './shared/data'

export default function Compare() {
  return (
    <section style={{ padding: '110px 0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
            we don&apos;t do half-measures
          </span>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(40px, 5vw, 60px)', margin: '10px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}
          >
            Privly vs. <span className="italic">the usual suspects.</span>
          </h2>
        </Reveal>

        <Reveal
          delay={160}
          style={{
            background: 'white',
            borderRadius: 28,
            border: '1px solid var(--line)',
            overflow: 'hidden',
            boxShadow: '0 22px 50px -20px rgba(147,51,234,.2)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              padding: '20px 28px',
              borderBottom: '1px solid var(--line)',
              background: 'var(--bg-2)',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--mute)' }}>
              What you get
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 99,
                  background: 'linear-gradient(135deg, var(--accent), var(--hot))',
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                <Heart size={10} color="white" /> Privly
              </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--mute)' }}>DMCA bots</div>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--mute)' }}>&ldquo;Agencies&rdquo;</div>
          </div>

          {/* Rows */}
          {COMPARE_ROWS.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                padding: '18px 28px',
                borderBottom: i < COMPARE_ROWS.length - 1 ? '1px solid var(--line)' : 'none',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: 15, color: 'var(--ink)' }}>{r[0]}</div>
              {[r[1], r[2], r[3]].map((v, j) => (
                <div key={j} style={{ textAlign: 'center' }}>
                  {v ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        width: 28,
                        height: 28,
                        borderRadius: 99,
                        background: j === 0 ? 'linear-gradient(135deg, var(--accent), var(--hot))' : '#DCFCE7',
                        color: j === 0 ? 'white' : '#166534',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                  ) : (
                    <span
                      style={{
                        display: 'inline-flex',
                        width: 28,
                        height: 28,
                        borderRadius: 99,
                        background: '#F3F4F6',
                        color: '#9CA3AF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                      }}
                    >
                      —
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

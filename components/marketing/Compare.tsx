import Reveal from './shared/Reveal'
import { Heart } from './shared/Icons'
import { COMPARE_ROWS, COMPARE_PRICE, CompareCell } from './shared/data'

const ICON_FOR: Record<CompareCell, { glyph: string; bg: string; color: string }> = {
  yes: {
    glyph: '✓',
    bg: 'linear-gradient(135deg, var(--accent), var(--hot))',
    color: 'white',
  },
  partial: {
    glyph: '◐',
    bg: '#FEF3C7',
    color: '#B45309',
  },
  no: {
    glyph: '✗',
    bg: '#F3F4F6',
    color: '#9CA3AF',
  },
}

function CellIcon({ value }: { value: CompareCell }) {
  const icon = ICON_FOR[value]
  return (
    <span
      style={{
        display: 'inline-flex',
        width: 28,
        height: 28,
        borderRadius: 99,
        background: icon.bg,
        color: icon.color,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
      }}
      aria-label={value}
    >
      {icon.glyph}
    </span>
  )
}

export default function Compare() {
  return (
    <section style={{ padding: '80px 0' }}>
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
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            boxShadow: '0 22px 50px -20px rgba(147,51,234,.2)',
          }}
        >
          <div style={{ minWidth: 520 }}>
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
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: 15, color: 'var(--ink)' }}>{r[0]}</div>
                {[r[1], r[2], r[3]].map((v, j) => (
                  <div key={j} style={{ textAlign: 'center' }}>
                    <CellIcon value={v} />
                  </div>
                ))}
              </div>
            ))}

            {/* Price row — plum-tinted */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                padding: '20px 28px',
                borderTop: '2px solid var(--accent)',
                background:
                  'linear-gradient(90deg, color-mix(in oklab, var(--accent) 8%, white), color-mix(in oklab, var(--hot) 6%, white))',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.005em', color: 'var(--ink)' }}>
                {COMPARE_PRICE[0]}
              </div>
              <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 700, color: 'var(--accent)' }}>
                {COMPARE_PRICE[1]}
              </div>
              <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--ink-2)' }}>
                {COMPARE_PRICE[2]}
              </div>
              <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--ink-2)' }}>
                {COMPARE_PRICE[3]}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

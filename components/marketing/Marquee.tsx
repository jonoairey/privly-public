import { Sparkle } from './shared/Icons'
import { MARQUEE_ITEMS } from './shared/data'

export default function Marquee() {
  // Duplicate 4x for seamless loop
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      style={{
        padding: '28px 0',
        background: 'var(--ink)',
        color: 'var(--bg)',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,.08)',
        borderBottom: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <div className="marquee-track font-serif" style={{ fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1, fontWeight: 400 }}>
        {doubled.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 32 }}>
            <span>{t}</span>
            <Sparkle size={24} color="var(--accent-2)" className="float1" />
          </span>
        ))}
      </div>
    </div>
  )
}

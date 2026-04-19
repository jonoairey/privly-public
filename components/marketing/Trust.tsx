import Reveal from './shared/Reveal'
import { Star } from './shared/Icons'

export default function Trust() {
  return (
    <section style={{ padding: '64px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 32 }}>
          <span className="font-hand" style={{ fontSize: 22, color: 'var(--mute)' }}>
            not just talk — actually registered
          </span>
        </Reveal>

        <Reveal delay={120} style={{ display: 'grid', gap: 20, alignItems: 'stretch' }} className="grid-cols-1 md:grid-cols-2">
          {/* DMCA Agent */}
          <div
            style={{
              background: 'white',
              padding: '24px 28px',
              borderRadius: 20,
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: 'linear-gradient(135deg, var(--accent), var(--hot))',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span className="font-serif" style={{ fontSize: 30 }}>©</span>
            </div>
            <div>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--mute)' }}>
                US Copyright Office
              </div>
              <div className="font-serif" style={{ fontSize: 20, marginTop: 4, fontWeight: 500 }}>
                Registered DMCA Agent
              </div>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>
                17 U.S.C § 512 · verified since 2023
              </div>
            </div>
          </div>

          {/* DSA Trusted Flagger */}
          <div
            style={{
              background: 'white',
              padding: '24px 28px',
              borderRadius: 20,
              border: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: 'linear-gradient(135deg, var(--accent), var(--hot))',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Star size={24} color="white" />
            </div>
            <div>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--mute)' }}>
                European Union
              </div>
              <div className="font-serif" style={{ fontSize: 20, marginTop: 4, fontWeight: 500 }}>
                DSA Trusted Flagger
              </div>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>
                Digital Services Act · Article 22
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

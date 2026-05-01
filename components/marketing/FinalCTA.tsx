import Reveal from './shared/Reveal'
import FloatingBrandLogos from './shared/FloatingBrandLogos'

export default function FinalCTA() {
  return (
    <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Floating platform logos — sit behind everything as soft background */}
      <FloatingBrandLogos variant="cta" />

      <div
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', position: 'relative' }}
      >
        <div
          style={{ display: 'grid', gap: 56, alignItems: 'center' }}
          className="grid-cols-1 md:grid-cols-[1.4fr_1fr]"
        >
          {/* Left column — copy */}
          <div>
            <Reveal>
              <span className="font-hand" style={{ fontSize: 28, color: 'var(--accent)' }}>
                your move 💜
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'clamp(44px, 6vw, 88px)',
                  lineHeight: 0.96,
                  margin: '14px 0 0',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                }}
              >
                Sign up tonight.
                <br />
                <span className="italic" style={{ color: 'var(--accent)' }}>
                  First takedown by tomorrow.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={240}
              style={{
                marginTop: 28,
                fontSize: 18,
                color: 'var(--ink-2)',
                maxWidth: 540,
                lineHeight: 1.6,
              }}
            >
              Onboard in 30 seconds. Scanning, takedowns, and follow-ups start the moment
              you sign up. Seven days free, no card.
            </Reveal>

            <Reveal
              delay={320}
              style={{
                marginTop: 32,
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <a href="/get-started" className="btn btn-accent" style={{ padding: '18px 30px', fontSize: 17 }}>
                Start my free trial <span>→</span>
              </a>
              <a href="/pricing" className="btn btn-ghost" style={{ padding: '18px 30px', fontSize: 17 }}>
                Subscribe — $49/mo
              </a>
            </Reveal>
          </div>

          {/* Right column — portrait */}
          <Reveal delay={180}>
            <div
              aria-hidden
              style={{
                aspectRatio: '4 / 5',
                width: '100%',
                maxWidth: 420,
                margin: '0 auto',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 22px 50px -16px rgba(31,15,46,0.35)',
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=720&h=900&fit=crop&crop=faces)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

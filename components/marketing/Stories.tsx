import Reveal from './shared/Reveal'
import { Star } from './shared/Icons'
import { STORIES } from './shared/data'

export default function Stories() {
  return (
    <section style={{ padding: '110px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 56 }}>
          <div>
            <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
              real creators, real revenue
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(42px, 5vw, 68px)',
                margin: '10px 0 0',
                lineHeight: 1,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              Stories from <span className="italic" style={{ color: 'var(--accent)' }}>our corner.</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: 'var(--ink-2)', maxWidth: 440, margin: 0, paddingBottom: 8 }}>
            Names changed, faces private. Every creator verified through their payment processor.
            Average revenue recovery in first 90 days: <b>18–34%</b>.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="grid-cols-1 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className="card card-h"
              style={{ padding: '32px 28px 28px', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div
                  className="avtr"
                  style={{ backgroundImage: `url(${s.avatar})`, width: 48, height: 48 }}
                />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--mute)' }}>{s.role}</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: 12, letterSpacing: '.1em' }}>{s.spice}</div>
              </div>
              <p
                className="font-serif"
                style={{ fontSize: 17, lineHeight: 1.4, margin: 0, fontWeight: 400, flex: 1, letterSpacing: '-0.005em' }}
              >
                &ldquo;{s.quote}&rdquo;
              </p>
              <div
                style={{
                  marginTop: 22, paddingTop: 16, borderTop: '1px dashed var(--line-2)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12,
                }}
              >
                <span className="font-hand" style={{ fontSize: 18, color: 'var(--accent)' }}>
                  {s.metric}
                </span>
                <span style={{ color: 'var(--mute)' }}>{s.ago}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

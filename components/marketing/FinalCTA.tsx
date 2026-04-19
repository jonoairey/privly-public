import Reveal from './shared/Reveal'
import { Heart } from './shared/Icons'

export default function FinalCTA() {
  return (
    <section style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Floating emojis */}
      <div style={{ position: 'absolute', top: '20%', left: '8%', fontSize: 42, opacity: 0.5 }} className="float1">
        💜
      </div>
      <div style={{ position: 'absolute', bottom: '18%', right: '10%', fontSize: 38, opacity: 0.5 }} className="float2">
        ✨
      </div>
      <div style={{ position: 'absolute', top: '55%', right: '8%', fontSize: 34, opacity: 0.4 }} className="float1">
        🌸
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px', textAlign: 'center', position: 'relative' }}>
        <Reveal>
          <span className="font-hand" style={{ fontSize: 28, color: 'var(--accent)' }}>
            ready when you are 💜
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(54px, 7.5vw, 112px)',
              lineHeight: 0.96,
              margin: '14px 0 0',
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
          >
            You make the content.
            <br />
            <span className="italic" style={{ color: 'var(--accent)' }}>We&apos;ll protect it.</span>
          </h2>
        </Reveal>

        <Reveal delay={240} style={{ marginTop: 28, fontSize: 18, color: 'var(--ink-2)', maxWidth: 540, margin: '28px auto 0' }}>
          Seven days free. No card. If we haven&apos;t pulled at least one leak of yours off the internet by
          day seven, you never pay us a cent.
        </Reveal>

        <Reveal delay={320} style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/get-started" className="btn btn-accent" style={{ padding: '18px 30px', fontSize: 17 }}>
            Start my free trial <span>→</span>
          </a>
          <a href="/pricing" className="btn btn-ghost" style={{ padding: '18px 30px', fontSize: 17 }}>
            Subscribe — $49/mo
          </a>
        </Reveal>

        <Reveal delay={420} style={{ marginTop: 32, display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="chip">
            <Heart size={12} color="var(--hot)" /> hundreds of creators
          </span>
          <span className="chip">⚡ takedowns actioned instantly</span>

          <span className="chip">🌎 every platform, every country</span>
        </Reveal>
      </div>
    </section>
  )
}

import Reveal from './shared/Reveal'
import { Shield } from './shared/Icons'

/**
 * Floating brand logos shown in the background of the final CTA.
 * These represent the platforms Privly monitors & issues takedowns on —
 * OnlyFans/Fansly/Patreon (creator platforms), Reddit/X/TikTok/Instagram/Telegram/Discord
 * (leak vectors), Google (search de-indexing), Mega (file lockers).
 *
 * Brand logos are used descriptively to indicate coverage, not to imply endorsement.
 * All SVGs are tinted in a muted brand purple (#9A7BC8) so they sit quietly behind
 * the headline rather than competing with it.
 */
const BRAND_LOGOS: { name: string; top?: string; bottom?: string; left?: string; right?: string; size: number; opacity: number; anim: 'float1' | 'float2'; delay: string }[] = [
  // Top band — above the "ready when you are" kicker
  { name: 'onlyfans',  top: '8%',    left: '6%',   size: 40, opacity: 0.28, anim: 'float1', delay: '0s'   },
  { name: 'google',    top: '10%',   left: '22%',  size: 32, opacity: 0.22, anim: 'float2', delay: '1.2s' },
  { name: '4chan',     top: '3%',    right: '36%', size: 26, opacity: 0.18, anim: 'float2', delay: '0.5s' },
  { name: 'reddit',    top: '6%',    right: '20%', size: 36, opacity: 0.25, anim: 'float1', delay: '2.4s' },
  { name: 'tiktok',    top: '12%',   right: '6%',  size: 38, opacity: 0.28, anim: 'float2', delay: '0.6s' },

  // Upper-middle band — flanking the headline
  { name: 'twitch',    top: '30%',   left: '13%',  size: 32, opacity: 0.24, anim: 'float1', delay: '2.2s' },
  { name: 'youtube',   top: '24%',   right: '14%', size: 36, opacity: 0.26, anim: 'float2', delay: '1.5s' },

  // Middle band — hugging the edges so text stays clean
  { name: 'fansly',    top: '42%',   left: '4%',   size: 42, opacity: 0.30, anim: 'float2', delay: '1.8s' },
  { name: 'x',         top: '48%',   right: '5%',  size: 28, opacity: 0.22, anim: 'float1', delay: '3.0s' },

  // Lower-middle band
  { name: 'pinterest', top: '58%',   right: '20%', size: 30, opacity: 0.22, anim: 'float1', delay: '0.9s' },
  { name: 'instagram', top: '66%',   left: '3%',   size: 34, opacity: 0.24, anim: 'float1', delay: '0.9s' },
  { name: 'dropbox',   top: '72%',   right: '3%',  size: 34, opacity: 0.24, anim: 'float2', delay: '2.6s' },
  { name: 'snapchat',  top: '76%',   left: '18%',  size: 30, opacity: 0.22, anim: 'float2', delay: '1.9s' },

  // Bottom band — beneath the CTAs & trust chips
  { name: 'telegram',  bottom: '14%', left: '9%',  size: 32, opacity: 0.22, anim: 'float2', delay: '2.1s' },
  { name: 'patreon',   bottom: '10%', left: '26%', size: 30, opacity: 0.20, anim: 'float1', delay: '1.5s' },
  { name: 'mega',      bottom: '12%', right: '22%',size: 30, opacity: 0.22, anim: 'float2', delay: '0.3s' },
  { name: 'discord',   bottom: '16%', right: '7%', size: 36, opacity: 0.26, anim: 'float1', delay: '2.7s' },
]

export default function FinalCTA() {
  return (
    <section style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Floating platform logos — "every platform, every country" */}
      {BRAND_LOGOS.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element -- decorative SVGs don't benefit from next/image
        <img
          key={logo.name}
          src={`/brand-logos/${logo.name}.svg`}
          alt=""
          aria-hidden="true"
          className={logo.anim}
          style={{
            position: 'absolute',
            top: logo.top,
            bottom: logo.bottom,
            left: logo.left,
            right: logo.right,
            width: logo.size,
            height: logo.size,
            opacity: logo.opacity,
            animationDelay: logo.delay,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      ))}

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 28px', textAlign: 'center', position: 'relative' }}>
        <Reveal>
          <span className="font-hand" style={{ fontSize: 28, color: 'var(--accent)' }}>
            ready when you are
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
            <Shield size={12} color="var(--accent)" /> hundreds of creators
          </span>
          <span className="chip">⚡ takedowns actioned instantly</span>

          <span className="chip">🌎 every platform, every country</span>
        </Reveal>
      </div>
    </section>
  )
}

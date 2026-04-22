/**
 * Decorative floating platform/brand logos used as a background for hero
 * and final-CTA sections. Used to communicate "every platform, every country"
 * — the logos are the platforms Privly monitors (creator platforms like OnlyFans
 * & Fansly, leak vectors like Reddit/Telegram/Discord/X, file lockers like Mega
 * & Dropbox, and search like Google).
 *
 * The parent section MUST set `position: relative` and `overflow: hidden`
 * so the absolutely-positioned logos stay inside and don't leak out of
 * the page.
 *
 * Brand logos are used descriptively to indicate coverage, not to imply
 * endorsement. All SVGs are tinted in a muted brand purple (#9A7BC8 — done
 * at SVG level) so they sit quietly behind headlines rather than competing.
 *
 * Usage:
 *   <section style={{ position: 'relative', overflow: 'hidden' }}>
 *     <FloatingBrandLogos variant="cta" />
 *     ...
 *   </section>
 */

type Anim = 'float1' | 'float2'

type BrandLogo = {
  name: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  opacity: number
  anim: Anim
  delay: string
  /** Hide on <640px screens to declutter on phones. */
  hideSm?: boolean
}

/**
 * Layout tuned for tall "final CTA" sections (~600–800px tall).
 * Logos span top, upper-middle, middle, lower-middle, and bottom bands —
 * hugging the edges so headline + CTAs stay clean in the center.
 */
const CTA_LOGOS: BrandLogo[] = [
  // Top band — above the kicker
  { name: 'onlyfans',  top: '8%',    left: '6%',   size: 40, opacity: 0.28, anim: 'float1', delay: '0s'   },
  { name: 'google',    top: '10%',   left: '22%',  size: 32, opacity: 0.22, anim: 'float2', delay: '1.2s', hideSm: true },
  { name: '4chan',     top: '3%',    right: '36%', size: 26, opacity: 0.18, anim: 'float2', delay: '0.5s', hideSm: true },
  { name: 'reddit',    top: '6%',    right: '20%', size: 36, opacity: 0.25, anim: 'float1', delay: '2.4s', hideSm: true },
  { name: 'tiktok',    top: '12%',   right: '6%',  size: 38, opacity: 0.28, anim: 'float2', delay: '0.6s' },

  // Upper-middle band — flanking the headline
  { name: 'twitch',    top: '30%',   left: '13%',  size: 32, opacity: 0.24, anim: 'float1', delay: '2.2s', hideSm: true },
  { name: 'youtube',   top: '24%',   right: '14%', size: 36, opacity: 0.26, anim: 'float2', delay: '1.5s', hideSm: true },

  // Middle band — hugging the edges so text stays clean
  { name: 'fansly',    top: '42%',   left: '4%',   size: 42, opacity: 0.30, anim: 'float2', delay: '1.8s' },
  { name: 'x',         top: '48%',   right: '5%',  size: 28, opacity: 0.22, anim: 'float1', delay: '3.0s' },

  // Lower-middle band
  { name: 'pinterest', top: '58%',   right: '20%', size: 30, opacity: 0.22, anim: 'float1', delay: '0.9s', hideSm: true },
  { name: 'instagram', top: '66%',   left: '3%',   size: 34, opacity: 0.24, anim: 'float1', delay: '0.9s' },
  { name: 'dropbox',   top: '72%',   right: '3%',  size: 34, opacity: 0.24, anim: 'float2', delay: '2.6s' },
  { name: 'snapchat',  top: '76%',   left: '18%',  size: 30, opacity: 0.22, anim: 'float2', delay: '1.9s', hideSm: true },

  // Bottom band — beneath the CTAs & trust chips
  { name: 'telegram',  bottom: '14%', left: '9%',  size: 32, opacity: 0.22, anim: 'float2', delay: '2.1s' },
  { name: 'patreon',   bottom: '10%', left: '26%', size: 30, opacity: 0.20, anim: 'float1', delay: '1.5s', hideSm: true },
  { name: 'mega',      bottom: '12%', right: '22%',size: 30, opacity: 0.22, anim: 'float2', delay: '0.3s', hideSm: true },
  { name: 'discord',   bottom: '16%', right: '7%', size: 36, opacity: 0.26, anim: 'float1', delay: '2.7s' },
]

/**
 * Layout tuned for shorter hero sections (~450–600px tall).
 * Logos cluster around the top third and edges so the main headline
 * stays readable. Fewer total logos than the CTA variant.
 */
const HERO_LOGOS: BrandLogo[] = [
  // Top band — flanking the kicker/eyebrow
  { name: 'onlyfans',  top: '12%',  left: '6%',   size: 38, opacity: 0.26, anim: 'float1', delay: '0s'   },
  { name: 'reddit',    top: '8%',   left: '22%',  size: 30, opacity: 0.22, anim: 'float2', delay: '1.2s', hideSm: true },
  { name: 'google',    top: '6%',   right: '28%', size: 28, opacity: 0.20, anim: 'float2', delay: '0.5s', hideSm: true },
  { name: 'tiktok',    top: '10%',  right: '18%', size: 36, opacity: 0.26, anim: 'float1', delay: '2.4s', hideSm: true },
  { name: 'instagram', top: '16%',  right: '5%',  size: 38, opacity: 0.28, anim: 'float2', delay: '0.6s' },

  // Upper-middle band — hugging the far edges
  { name: 'fansly',    top: '40%',  left: '3%',   size: 40, opacity: 0.28, anim: 'float2', delay: '1.8s' },
  { name: 'discord',   top: '36%',  right: '3%',  size: 36, opacity: 0.26, anim: 'float1', delay: '1.5s' },

  // Middle-to-lower band
  { name: 'x',         top: '62%',  left: '12%',  size: 28, opacity: 0.22, anim: 'float1', delay: '2.2s', hideSm: true },
  { name: 'telegram',  top: '68%',  right: '14%', size: 32, opacity: 0.24, anim: 'float2', delay: '0.9s', hideSm: true },
  { name: 'youtube',   top: '72%',  left: '4%',   size: 30, opacity: 0.22, anim: 'float2', delay: '1.9s' },
  { name: 'mega',      top: '78%',  right: '6%',  size: 30, opacity: 0.22, anim: 'float1', delay: '2.7s' },

  // Bottom band
  { name: 'patreon',   bottom: '8%',  left: '24%', size: 28, opacity: 0.20, anim: 'float1', delay: '0.3s', hideSm: true },
  { name: 'snapchat',  bottom: '10%', right: '32%',size: 26, opacity: 0.18, anim: 'float2', delay: '1.1s', hideSm: true },
]

const VARIANTS = {
  cta: CTA_LOGOS,
  hero: HERO_LOGOS,
} as const

export default function FloatingBrandLogos({
  variant = 'cta',
}: {
  variant?: keyof typeof VARIANTS
}) {
  const logos = VARIANTS[variant]

  return (
    <>
      {logos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element -- decorative SVGs don't benefit from next/image
        <img
          key={logo.name}
          src={`/brand-logos/${logo.name}.svg`}
          alt=""
          aria-hidden="true"
          className={`${logo.anim} cta-bg-logo${logo.hideSm ? ' cta-bg-logo--hide-sm' : ''}`}
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
    </>
  )
}

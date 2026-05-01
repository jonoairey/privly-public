/**
 * Continuous-scroll product-update marquee.
 *
 * Sits below the marketing header on pages that opt in (homepage at minimum).
 * Continuously scrolls a list of recent product wins so creators see momentum
 * (Branditscan does this with their "V2 IS HERE • FASTER • SMARTER" banner —
 * but as a marquee instead of an auto-rotate, which doesn't fight the navbar).
 *
 * Uses the existing `.marquee-track` keyframes from globals.css for the loop.
 *
 * Rules:
 *   - Smaller font than the homepage's main `<Marquee>` (which is 28–44px
 *     hero-scale). This sits in service-strip territory at 14–16px.
 *   - Sober copy. No "we shipped!" emoji-heavy energy. One emoji per item.
 *   - Plum band so it visually reads as Privly's accent strip, not the
 *     dark-ink hero marquee.
 *   - Server-rendered — no JS, no dismissal. Marquee mode means there's
 *     always something on screen so dismissal would be confusing.
 *
 * To edit copy: tweak ITEMS below. Order = scroll order.
 */

const ITEMS: { emoji: string; text: string }[] = [
  { emoji: '📡', text: 'Telegram channel monitoring is live' },
  { emoji: '🪞', text: 'Deepfake & impersonation detection now live' },
  { emoji: '©', text: 'Registered DMCA Designated Agent · US Copyright Office' },
  { emoji: '🔁', text: '4-hour re-emergence checks on every removed link' },
]

export default function ProductUpdateBanner() {
  // Duplicate enough times for seamless loop at any viewport width.
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div
      role="region"
      aria-label="Recent product updates"
      style={{
        background: 'linear-gradient(90deg, #1F0F2E, #2D1A45)',
        color: 'rgba(255,255,255,0.92)',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          fontSize: 13,
          lineHeight: 1,
          fontWeight: 500,
          letterSpacing: '-0.005em',
          padding: '8px 0',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
          >
            <span aria-hidden style={{ fontSize: 13, opacity: 0.95 }}>
              {item.emoji}
            </span>
            <span>{item.text}</span>
            <span
              aria-hidden
              style={{
                color: 'rgba(255,255,255,0.4)',
                marginLeft: 12,
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

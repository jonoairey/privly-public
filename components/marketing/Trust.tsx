import Link from 'next/link'
import {
  SiOnlyfans, SiPatreon, SiInstagram, SiTiktok, SiThreads, SiReddit,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import Reveal from './shared/Reveal'

/**
 * Trust block — homepage credibility signals.
 *
 * Platform strip rules (April 2026):
 *   - Logo glyph for every platform (no text-only fallbacks).
 *   - All glyphs rendered in a single muted plum-grey so the strip blends with
 *     Privly's branding instead of competing with it. Brand colour briefly
 *     surfaces on hover.
 *   - simple-icons covers the mainstream socials. Adult platforms without
 *     simple-icons get a clean monogram glyph in matching style.
 *   - Facebook, YouTube, and Snapchat are intentionally excluded from the
 *     homepage strip (their /facebook and /youtube pages still exist and
 *     remain linked from the footer).
 *
 * Removed false claims (do NOT re-add):
 *   - "verified since 2023" (DMCA Agent registered 2026, not 2023)
 *   - "DSA Trusted Flagger" (Privly is not — that's an EU member-state-granted status)
 */

interface PlatformEntry {
  name: string
  slug: string
  /** simple-icons component if available */
  Icon?: IconType
  /** monogram fallback for brands without simple-icons coverage */
  monogram?: string
}

const PLATFORMS: PlatformEntry[] = [
  // Adult subscription platforms — Privly's core market
  { name: 'OnlyFans',    slug: 'onlyfans',    Icon: SiOnlyfans },
  { name: 'Fansly',      slug: 'fansly',      monogram: 'Fa' },
  { name: 'JustForFans', slug: 'justforfans', monogram: 'JFF' },
  { name: 'Loyalfans',   slug: 'loyalfans',   monogram: 'Lf' },
  { name: 'Fanvue',      slug: 'fanvue',      monogram: 'Fv' },
  { name: 'Fanfix',      slug: 'fanfix',      monogram: 'Fx' },
  { name: 'ManyVids',    slug: 'manyvids',    monogram: 'MV' },
  { name: 'Chaturbate',  slug: 'chaturbate',  monogram: 'CB' },
  // Mainstream socials creators also publish to
  { name: 'Patreon',     slug: 'patreon',     Icon: SiPatreon },
  { name: 'Instagram',   slug: 'instagram',   Icon: SiInstagram },
  { name: 'TikTok',      slug: 'tiktok',      Icon: SiTiktok },
  { name: 'Threads',     slug: 'threads',     Icon: SiThreads },
  { name: 'Reddit',      slug: 'reddit',      Icon: SiReddit },
]

/** Renders a brand glyph at a uniform size — either a simple-icons component
 *  or a serif-monogram SVG fallback. `currentColor` lets the parent control
 *  the tint so hover states work via CSS. */
function PlatformGlyph({ platform }: { platform: PlatformEntry }) {
  if (platform.Icon) {
    const Icon = platform.Icon
    return <Icon size={22} aria-hidden />
  }
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontSize={(platform.monogram?.length ?? 1) >= 3 ? 9 : 12}
        fontWeight={600}
        letterSpacing="-0.5"
      >
        {platform.monogram}
      </text>
    </svg>
  )
}

export default function Trust() {
  return (
    <section style={{ padding: '90px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>
        {/* ============ Platform-logo strip ============ */}
        <Reveal style={{ textAlign: 'center', marginBottom: 14 }}>
          <span className="font-hand" style={{ fontSize: 22, color: 'var(--mute)' }}>
            Privly creators come from
          </span>
        </Reveal>

        <Reveal
          delay={80}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px 8px',
            marginBottom: 14,
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          {PLATFORMS.map((p) => (
            <Link
              key={p.slug + p.name}
              href={`/${p.slug}`}
              title={p.name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 12px',
                borderRadius: 10,
                color: 'var(--mute)',
                textDecoration: 'none',
                transition: 'color 0.2s, transform 0.2s, background 0.2s',
              }}
              className="trust-platform"
            >
              <PlatformGlyph platform={p} />
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 17,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  color: 'inherit',
                }}
              >
                {p.name}
              </span>
            </Link>
          ))}
        </Reveal>

        <Reveal
          delay={140}
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'var(--mute)',
            marginTop: 18,
            marginBottom: 70,
          }}
        >
          …and many more. We&apos;re not partnered with these platforms — our customers are.
        </Reveal>

        {/* ============ Credibility cards ============ */}
        <Reveal style={{ textAlign: 'center', marginBottom: 32 }}>
          <span className="font-hand" style={{ fontSize: 22, color: 'var(--mute)' }}>
            not just talk — actually registered
          </span>
        </Reveal>

        <Reveal
          delay={120}
          style={{ display: 'grid', gap: 20, alignItems: 'stretch' }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* === DMCA Designated Agent (real, 2026) === */}
          <Link
            href="/terms#dmca-agent"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                background: 'white',
                padding: '24px 28px',
                borderRadius: 20,
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                height: '100%',
                transition: 'border-color 0.2s, transform 0.2s',
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
                <div
                  style={{
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '.08em',
                    color: 'var(--mute)',
                  }}
                >
                  US Copyright Office
                </div>
                <div
                  className="font-serif"
                  style={{ fontSize: 20, marginTop: 4, fontWeight: 500 }}
                >
                  Registered DMCA Agent
                </div>
                <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>
                  Privly Takedown Service · 17 U.S.C § 512
                </div>
              </div>
            </div>
          </Link>

          {/* === Observatory data callout (real, sourced) === */}
          <Link
            href="/observatory"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                background: 'white',
                padding: '24px 28px',
                borderRadius: 20,
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                height: '100%',
                transition: 'border-color 0.2s, transform 0.2s',
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
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                }}
              >
                77M+
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '.08em',
                    color: 'var(--mute)',
                  }}
                >
                  Privly Observatory · live data
                </div>
                <div
                  className="font-serif"
                  style={{ fontSize: 20, marginTop: 4, fontWeight: 500 }}
                >
                  500+ leak sites scanned
                </div>
                <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>
                  77M+ takedowns tracked across the leak ecosystem
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

import Link from 'next/link'
import type { CSSProperties } from 'react'
import {
  SiOnlyfans, SiPatreon, SiInstagram, SiTiktok, SiThreads, SiReddit,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import Reveal from './shared/Reveal'

/**
 * Trust block — homepage credibility signals.
 *
 * Platform strip rules (May 2026 — Branditscan visual benchmark):
 *   - Logos only. No text labels alongside the icons.
 *   - Two presentation styles, mixed in one strip:
 *       (a) Brands with simple-icons coverage → icon-only glyph
 *       (b) Adult platforms without simple-icons coverage → custom wordmark
 *           with brand-specific typography (varied weight / case / italic /
 *           supplemental glyph) so each platform's visual character comes
 *           through. ManyVids gets a small crown above the wordmark.
 *   - All glyphs/wordmarks render in a uniform muted plum-grey so the strip
 *     blends with Privly's branding. Brand colour briefly surfaces on hover.
 *   - Facebook, YouTube, Snapchat are intentionally excluded from the
 *     homepage strip (their /facebook and /youtube pages still exist and
 *     remain linked from the footer).
 *   - Telegram is intentionally NOT on this strip — it's a leak channel,
 *     not a platform creators "come from."
 *
 * For perfect brand fidelity on the adult platforms, the next step is to
 * swap these custom wordmarks with each platform's actual logo SVG (most
 * have a brand-kit page; ~10 mins per platform). Tracked as a separate
 * follow-up task.
 *
 * Removed false claims (do NOT re-add):
 *   - "verified since 2023" (DMCA Agent registered 2026, not 2023)
 *   - "DSA Trusted Flagger" (Privly is not — that's an EU member-state-granted status)
 */

interface PlatformEntry {
  name: string
  slug: string
  /** simple-icons component if available — when present, renders as icon-only */
  Icon?: IconType
  /** custom wordmark spec for adult platforms without simple-icons coverage.
   *  Each spec gets its own typographic feel so the strip doesn't read as
   *  identical-looking text everywhere. */
  wordmark?: WordmarkSpec
}

interface WordmarkSpec {
  /** displayed text */
  label: string
  /** font stack — Inter (sans, default), Fraunces (serif), system-ui */
  family: 'inter' | 'fraunces' | 'system'
  weight: 400 | 500 | 600 | 700 | 800
  italic?: boolean
  /** force lowercase / uppercase / preserve as-typed */
  transform?: 'lowercase' | 'uppercase' | 'none'
  /** letter-spacing in em — negative tightens, positive loosens */
  tracking?: number
  /** optional crown / heart / ornament drawn above the wordmark via SVG path */
  ornament?: 'crown'
}

const FONT_STACKS: Record<WordmarkSpec['family'], string> = {
  inter: "'Inter', system-ui, -apple-system, 'Helvetica Neue', sans-serif",
  fraunces: "'Fraunces', Georgia, serif",
  system: "system-ui, -apple-system, 'Segoe UI', sans-serif",
}

const PLATFORMS: PlatformEntry[] = [
  // Adult subscription platforms — Privly's core market
  { name: 'OnlyFans', slug: 'onlyfans', Icon: SiOnlyfans },
  {
    name: 'Fansly',
    slug: 'fansly',
    // Real Fansly: rounded lowercase wordmark, modern sans
    wordmark: { label: 'fansly', family: 'inter', weight: 700, transform: 'lowercase', tracking: -0.025 },
  },
  {
    name: 'JustForFans',
    slug: 'justforfans',
    // Real JFF: bold italic wordmark
    wordmark: { label: 'JustForFans', family: 'inter', weight: 800, italic: true, tracking: -0.02 },
  },
  {
    name: 'Loyalfans',
    slug: 'loyalfans',
    // Real Loyalfans: clean lowercase wordmark, lighter weight
    wordmark: { label: 'loyalfans', family: 'inter', weight: 500, transform: 'lowercase', tracking: 0.005 },
  },
  {
    name: 'Fanvue',
    slug: 'fanvue',
    // Real Fanvue: modern bold sans-serif wordmark
    wordmark: { label: 'Fanvue', family: 'inter', weight: 700, tracking: -0.015 },
  },
  {
    name: 'Fanfix',
    slug: 'fanfix',
    // Real Fanfix: italic display wordmark
    wordmark: { label: 'Fanfix', family: 'fraunces', weight: 600, italic: true, tracking: -0.02 },
  },
  {
    name: 'ManyVids',
    slug: 'manyvids',
    // Real ManyVids: crown above the wordmark, bold compressed type
    wordmark: { label: 'ManyVids', family: 'inter', weight: 800, tracking: -0.03, ornament: 'crown' },
  },
  {
    name: 'Chaturbate',
    slug: 'chaturbate',
    // Real Chaturbate: italic script-style wordmark
    wordmark: { label: 'Chaturbate', family: 'fraunces', weight: 700, italic: true, tracking: -0.025 },
  },
  // Mainstream socials creators also publish to (icon-only)
  { name: 'Patreon',   slug: 'patreon',   Icon: SiPatreon },
  { name: 'Instagram', slug: 'instagram', Icon: SiInstagram },
  { name: 'TikTok',    slug: 'tiktok',    Icon: SiTiktok },
  { name: 'Threads',   slug: 'threads',   Icon: SiThreads },
  { name: 'Reddit',    slug: 'reddit',    Icon: SiReddit },
]

/** Render a single brand wordmark with its custom typography. */
function Wordmark({ spec }: { spec: WordmarkSpec }) {
  const style: CSSProperties = {
    fontFamily: FONT_STACKS[spec.family],
    fontSize: 22,
    fontWeight: spec.weight,
    fontStyle: spec.italic ? 'italic' : 'normal',
    letterSpacing: `${spec.tracking ?? 0}em`,
    textTransform:
      spec.transform === 'lowercase'
        ? 'lowercase'
        : spec.transform === 'uppercase'
        ? 'uppercase'
        : 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  }

  return (
    <span aria-hidden style={style}>
      {spec.ornament === 'crown' && (
        <svg
          width={16}
          height={8}
          viewBox="0 0 16 8"
          fill="currentColor"
          aria-hidden
          style={{ display: 'block', opacity: 0.85 }}
        >
          {/* Tiny crown — three points + base */}
          <path d="M 0 8 L 2 1 L 4.5 5 L 8 0 L 11.5 5 L 14 1 L 16 8 Z" />
        </svg>
      )}
      <span>{spec.label}</span>
    </span>
  )
}

export default function Trust() {
  return (
    <section style={{ padding: '68px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>
        {/* ============ Platform-logo strip ============ */}
        <Reveal style={{ textAlign: 'center', marginBottom: 18 }}>
          <span className="font-hand" style={{ fontSize: 22, color: 'var(--mute)' }}>
            Privly creators come from
          </span>
        </Reveal>

        <Reveal
          delay={80}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px 32px',
            marginBottom: 14,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {PLATFORMS.map((p) => (
            <Link
              key={p.slug + p.name}
              href={`/${p.slug}`}
              title={p.name}
              aria-label={p.name}
              className="trust-platform"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 32,
                padding: '0 4px',
                color: 'var(--mute)',
                textDecoration: 'none',
                transition: 'color 0.2s, transform 0.2s, opacity 0.2s',
                opacity: 0.78,
              }}
            >
              {p.Icon ? (
                <p.Icon size={28} aria-hidden />
              ) : p.wordmark ? (
                <Wordmark spec={p.wordmark} />
              ) : null}
            </Link>
          ))}
        </Reveal>

        <Reveal
          delay={140}
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'var(--mute)',
            marginTop: 22,
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

import type { CSSProperties } from 'react'

/**
 * Privly logo — inline SVG component.
 *
 * Why inline (not <Image src="/logo-plum.svg">):
 *   The wordmark uses Fraunces, which is loaded as a Google Font on every
 *   page via `app/layout.tsx`. When a logo is rendered as <img>, the SVG
 *   loads in isolation from the page's CSS — so Google-Font wordmarks
 *   render in fallback fonts instead of the brand serif.
 *
 *   Inline SVG (rendered as part of the page's DOM tree) inherits the page
 *   stylesheet, so <text> here picks up Fraunces correctly.
 *
 * Variants:
 *   - "dark"  → plum mark on light backgrounds (Header)
 *   - "light" → white mark on dark backgrounds (Footer, dark CTAs)
 *
 * The static `/public/logo-plum.svg` and `/public/logo-white.svg` files
 * still exist and are referenced by SEO metadata (Organization schema,
 * OG images) where standalone-SVG rendering is unavoidable. Those files
 * use the same shield geometry but fall back to Georgia for the wordmark.
 */

interface PrivlyLogoProps {
  variant?: 'dark' | 'light'
  /** Rendered height in CSS pixels. Width auto-scales from the 520×200 viewBox. */
  height?: number
  className?: string
  style?: CSSProperties
}

export default function PrivlyLogo({
  variant = 'dark',
  height = 48,
  className,
  style,
}: PrivlyLogoProps) {
  const isDark = variant === 'dark'

  // Shield + keyhole inversion between variants
  const shieldFill = isDark ? '#3D1470' : '#FFFFFF'
  const keyholeFill = isDark ? '#FFFFFF' : '#3D1470'
  const wordmarkFill = isDark ? '#3D1470' : '#FFFFFF'

  return (
    <svg
      role="img"
      aria-label="Privly"
      viewBox="0 0 520 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height, width: 'auto', display: 'block', ...style }}
    >
      <title>Privly</title>

      {/* Shield (geometry from /public/favicon.svg, scaled 1.2x) */}
      <g transform="translate(20 40) scale(1.2)">
        <path
          d="M50 6 L88 18 C88 18 88 48 88 58 C88 78 70 90 50 96 C30 90 12 78 12 58 C12 48 12 18 12 18 Z"
          fill={shieldFill}
        />
        <circle cx="50" cy="44" r="8" fill={keyholeFill} />
        <path d="M46 50 L54 50 L56 68 L44 68 Z" fill={keyholeFill} />
      </g>

      {/* Wordmark — picks up Fraunces from page CSS when rendered inline */}
      <text
        x="160"
        y="138"
        fontFamily="'Fraunces', Georgia, 'Times New Roman', serif"
        fontSize="108"
        fontWeight="500"
        fill={wordmarkFill}
        letterSpacing="-2"
      >
        privly
      </text>
    </svg>
  )
}

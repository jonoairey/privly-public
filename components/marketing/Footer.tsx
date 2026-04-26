import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_GROUPS } from './shared/data'

export default function MarketingFooter() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '80px 0 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        {/* Link columns — all six FOOTER_GROUPS in a single row on lg+ */}
        <div
          style={{
            display: 'grid',
            gap: 'clamp(24px, 2.5vw, 32px)',
            paddingBottom: 48,
          }}
          className="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {FOOTER_GROUPS.map((group) => (
            <div key={group.heading}>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--accent-2)',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {group.heading}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="ul-hover"
                      style={{ fontSize: 13, color: '#D8B4FE', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand block — centered beneath the link rows */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.1)',
            paddingTop: 40,
            paddingBottom: 32,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, textDecoration: 'none' }}>
            <Image
              src="/logo-white.svg"
              alt="Privly"
              width={520}
              height={200}
              style={{ height: 40, width: 'auto' }}
            />
          </Link>
          <p style={{ fontSize: 14, color: '#D8B4FE', maxWidth: 560, lineHeight: 1.6, margin: 0 }}>
            We&apos;re a small team that got tired of watching creators get leaked and do nothing about it.
            So we built this. Hope it helps 💜
          </p>
          <div className="font-hand" style={{ marginTop: 20, fontSize: 22, color: 'var(--accent-2)' }}>
            made with 💜 for creators
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,.1)',
            fontSize: 12,
            color: '#A892C4',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span>
            © {new Date().getFullYear()} Privly Ventures Pty Ltd ·{' '}
            <Link href="/terms#dmca-agent" style={{ color: '#A892C4', textDecoration: 'none' }}>
              Registered DMCA Designated Agent (US Copyright Office)
            </Link>
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/privacy" style={{ color: '#A892C4', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ color: '#A892C4', textDecoration: 'none' }}>Terms</Link>
            <Link href="/contact" style={{ color: '#A892C4', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

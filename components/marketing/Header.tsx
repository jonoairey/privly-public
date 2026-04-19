'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from './shared/data'
import { APP_URL } from '@/lib/constants'

export default function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', h)
    h()
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(245, 243, 255, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all 0.25s',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image
            src="/logo-dark.png"
            alt="Privly"
            width={200}
            height={100}
            className="h-12 w-auto"
            style={{ height: 48, width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 32, fontSize: 14 }} className="hidden md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="ul-hover"
              style={{ color: 'var(--ink-2)', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="hidden md:flex">
          <Link
            href={`${APP_URL}/auth/login`}
            className="ul-hover"
            style={{ fontSize: 14, color: 'var(--ink-2)', textDecoration: 'none' }}
          >
            Log in
          </Link>
          <Link
            href="/get-started"
            className="btn btn-accent"
            style={{ padding: '10px 18px', fontSize: 14 }}
          >
            Protect me →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--ink)',
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(245, 243, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--line)',
            padding: '16px 28px',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '10px 0',
                color: 'var(--ink-2)',
                textDecoration: 'none',
                fontSize: 15,
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ paddingTop: 16, borderTop: '1px solid var(--line)', marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link
              href={`${APP_URL}/auth/login`}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--ink-2)', textDecoration: 'none', fontSize: 15 }}
            >
              Log in
            </Link>
            <Link
              href="/get-started"
              className="btn btn-accent"
              onClick={() => setMenuOpen(false)}
              style={{ justifyContent: 'center' }}
            >
              Protect me →
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

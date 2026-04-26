'use client';

import { useEffect, useState } from 'react';

/**
 * Sticky bottom-bar CTA for article pages on mobile only.
 *
 * Why: articles are the primary traffic surface (54+ articles vs ~12 product pages).
 * Most readers won't scroll to the related-articles block at the bottom, and on
 * mobile the standard CTA buttons are buried in the page flow. A small fixed
 * bar at the bottom captures the "I'm sold but don't want to scroll" cohort.
 *
 * Behaviour:
 *   - Mobile-only (hidden at md+ via Tailwind)
 *   - Appears after the user scrolls 600px (so it doesn't crowd the hero)
 *   - User can dismiss via the X — preference stored in sessionStorage so it
 *     reappears next visit but not within the same session
 *   - Two-line layout: small headline + visible CTA button
 *
 * No GA event tracking yet — easy to add later if we want to measure click-through.
 */
export default function StickyArticleCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check session-level dismissal so we don't pester repeat-readers within one session
    if (typeof window !== 'undefined') {
      const wasDismissed = window.sessionStorage.getItem('privly_sticky_cta_dismissed') === '1';
      if (wasDismissed) {
        setDismissed(true);
        return;
      }
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > 600);
        ticking = false;
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  function handleDismiss() {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('privly_sticky_cta_dismissed', '1');
    }
  }

  return (
    <div
      aria-hidden={!visible}
      className="md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        transform: visible ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          margin: '0 12px 12px',
          background: 'white',
          border: '1px solid var(--line)',
          borderRadius: 16,
          boxShadow: '0 12px 30px -10px rgba(61,20,112,0.25), 0 4px 10px -2px rgba(61,20,112,0.10)',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--ink)',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            Protect your content.
          </div>
          <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 1 }}>
            $49/mo · 7-day free trial · cancel any time
          </div>
        </div>

        <a
          href="https://app.useprivly.com/auth/signup?ref=article-sticky"
          style={{
            background: 'var(--hot)',
            color: 'white',
            padding: '10px 14px',
            borderRadius: 99,
            fontWeight: 600,
            fontSize: 13,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 6px 14px -6px rgba(219,39,119,0.55)',
          }}
        >
          Start trial →
        </a>

        <button
          aria-label="Dismiss"
          onClick={handleDismiss}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--mute)',
            fontSize: 18,
            lineHeight: 1,
            padding: 6,
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

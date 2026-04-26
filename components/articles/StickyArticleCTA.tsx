'use client';

import { useEffect, useState } from 'react';

/**
 * Sticky TOP CTA bar for article pages on mobile only.
 *
 * Why top, not bottom: the Crisp chat bubble sits in the bottom-right corner
 * of every page. A bottom-fixed CTA bar visually overlapped/cropped against
 * it on phones (reported on Pixel 9). Top placement avoids the conflict
 * entirely and keeps the trial offer above the fold once the user has read
 * past the hero.
 *
 * Behaviour:
 *   - Mobile-only (hidden at md+ via Tailwind)
 *   - Slides in from above after the user scrolls 600px (so it doesn't crowd
 *     the article hero immediately)
 *   - User can dismiss via the X — preference stored in sessionStorage so it
 *     reappears next visit but not within the same session
 *   - Slim single-line layout: short headline + CTA pill + dismiss
 */
export default function StickyArticleCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        // Honour iOS safe-area inset on the top (notch / Dynamic Island)
        // and sides so the card never sits behind the curved corners.
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
        transform: visible ? 'translateY(0)' : 'translateY(-110%)',
        transition: 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          margin: '8px 12px 0',
          background: 'white',
          border: '1px solid var(--line)',
          borderRadius: 14,
          boxShadow: '0 10px 24px -10px rgba(61,20,112,0.22), 0 3px 8px -2px rgba(61,20,112,0.10)',
          padding: '8px 10px 8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          minWidth: 0,
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--ink)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Protect your content.
          </div>
          <div
            style={{
              fontSize: 11,
              color: 'var(--mute)',
              marginTop: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            $49/mo · 7-day free trial
          </div>
        </div>

        <a
          href="https://app.useprivly.com/auth/signup?ref=article-sticky"
          style={{
            background: 'var(--hot)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: 99,
            fontWeight: 600,
            fontSize: 12,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 6px 14px -6px rgba(219,39,119,0.55)',
            flexShrink: 0,
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
            padding: 4,
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

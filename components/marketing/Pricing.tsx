'use client'

import { useState } from 'react'
import Reveal from './shared/Reveal'
import { PRICING_FEATURES, TRIAL_FEATURES } from './shared/data'

export default function Pricing() {
  const [mode, setMode] = useState<'trial' | 'paid'>('trial')
  const isTrial = mode === 'trial'

  return (
    <section id="pricing" style={{ padding: '110px 0' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
            keeping it simple
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(42px, 5vw, 64px)',
              margin: '10px 0 0',
              lineHeight: 1.02,
              fontWeight: 400,
              letterSpacing: '-0.025em',
            }}
          >
            No tiers. No upsells. <span className="italic" style={{ color: 'var(--accent)' }}>Just protection.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div
            style={{
              background: 'white',
              borderRadius: 32,
              border: '1px solid var(--line)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 30px 60px -24px rgba(147,51,234,.25)',
            }}
          >
            {/* Floating sticker */}
            <div
              className="font-hand float1"
              style={{
                position: 'absolute',
                top: 24,
                right: 32,
                background: 'linear-gradient(135deg, var(--accent), var(--hot))',
                color: 'white',
                padding: '10px 20px',
                borderRadius: 99,
                fontSize: 22,
                transform: 'rotate(6deg)',
                zIndex: 2,
                boxShadow: '0 12px 26px -8px rgba(236,72,153,.5)',
              }}
            >
              {isTrial ? '7 days free 💜' : 'start today 💜'}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="grid-cols-1 md:grid-cols-2">
              {/* Left — Price + toggle */}
              <div
                style={{
                  padding: '48px 44px',
                  background: 'linear-gradient(180deg, var(--bg-2), var(--bg))',
                  borderRight: '1px solid var(--line)',
                }}
              >
                <div style={{ fontSize: 13, color: 'var(--mute)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  The everything plan
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 14 }}>
                  <span className="font-serif" style={{ fontSize: 96, lineHeight: 1, fontWeight: 400, letterSpacing: '-0.04em' }}>
                    $49
                  </span>
                  <span style={{ fontSize: 15, color: 'var(--mute)' }}>/month</span>
                </div>
                <p style={{ fontSize: 15, color: 'var(--ink-2)', margin: '0 0 20px', lineHeight: 1.5 }}>
                  Cancel anytime. We mean it — no &ldquo;talk to sales,&rdquo; no contract. Just an unsubscribe button that works.
                </p>

                {/* Toggle */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 6,
                    padding: 4,
                    background: 'rgba(147,51,234,.08)',
                    borderRadius: 14,
                    marginBottom: 16,
                    border: '1px solid var(--line)',
                  }}
                >
                  <button
                    onClick={() => setMode('trial')}
                    style={{
                      padding: '10px 8px',
                      fontSize: 13,
                      fontWeight: 600,
                      borderRadius: 10,
                      border: 'none',
                      cursor: 'pointer',
                      background: isTrial ? 'white' : 'transparent',
                      color: isTrial ? 'var(--accent)' : 'var(--ink-2)',
                      boxShadow: isTrial ? '0 4px 10px -3px rgba(147,51,234,.25)' : 'none',
                      transition: 'all .18s',
                    }}
                  >
                    7-day free trial
                  </button>
                  <button
                    onClick={() => setMode('paid')}
                    style={{
                      padding: '10px 8px',
                      fontSize: 13,
                      fontWeight: 600,
                      borderRadius: 10,
                      border: 'none',
                      cursor: 'pointer',
                      background: !isTrial ? 'white' : 'transparent',
                      color: !isTrial ? 'var(--accent)' : 'var(--ink-2)',
                      boxShadow: !isTrial ? '0 4px 10px -3px rgba(147,51,234,.25)' : 'none',
                      transition: 'all .18s',
                    }}
                  >
                    Skip trial, subscribe
                  </button>
                </div>

                <a
                  href="/get-started"
                  className="btn btn-accent"
                  style={{ padding: '16px 26px', fontSize: 16, width: '100%', justifyContent: 'center' }}
                >
                  {isTrial ? 'Start my 7 days →' : 'Subscribe — $49/mo →'}
                </a>
                <div className="font-hand" style={{ marginTop: 16, textAlign: 'center', fontSize: 18, color: 'var(--mute)' }}>
                  {isTrial ? 'no card · no commitment · no catch' : 'protection starts the moment you sign up'}
                </div>
              </div>

              {/* Right — Feature list */}
              <div style={{ padding: '48px 44px' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 20, fontWeight: 600 }}>
                  {isTrial ? 'What\u2019s included in the trial:' : 'Everything\u2019s in the box:'}
                </div>
                <div style={{ display: 'grid', gap: 12 }}>
                  {(isTrial ? TRIAL_FEATURES : PRICING_FEATURES).map(([label, emoji], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                      <span style={{ fontSize: 18 }}>{emoji}</span>
                      <span style={{ color: 'var(--ink-2)' }}>{label}</span>
                    </div>
                  ))}
                </div>
                {isTrial && (
                  <p style={{ fontSize: 13, color: 'var(--mute)', marginTop: 16, lineHeight: 1.5 }}>
                    Upgrade anytime for unlimited scans, DMCA takedowns, monitoring, and a dedicated protection agent.
                  </p>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

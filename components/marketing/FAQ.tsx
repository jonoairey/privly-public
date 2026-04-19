'use client'

import { useState } from 'react'
import Reveal from './shared/Reveal'
import { FAQ_ITEMS } from './shared/data'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section style={{ padding: '110px 0', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 28px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="font-hand" style={{ fontSize: 26, color: 'var(--accent)' }}>
            things people ask us
          </span>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(38px, 4.5vw, 56px)', margin: '10px 0 0', fontWeight: 400, letterSpacing: '-0.02em' }}
          >
            You might be <span className="italic">wondering…</span>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gap: 14 }}>
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={i} delay={i * 50}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'block',
                  background: 'white',
                  borderRadius: 18,
                  border: '1px solid var(--line)',
                  padding: '22px 26px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <span className="font-serif" style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', textAlign: 'left' }}>
                    {item.q}
                  </span>
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 99,
                      background: open === i ? 'linear-gradient(135deg, var(--accent), var(--hot))' : 'var(--bg-2)',
                      color: open === i ? 'white' : 'var(--ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 16,
                      transition: 'all .2s',
                      flexShrink: 0,
                    }}
                  >
                    {open === i ? '−' : '+'}
                  </span>
                </div>
                {open === i && (
                  <div style={{ marginTop: 14, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                    {item.a}
                  </div>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Reveal from '../shared/Reveal'
import { Heart, Sparkle, Star } from '../shared/Icons'
import { AVATARS, POLAROID_BEFORE, POLAROID_AFTER } from '../shared/data'

export default function HeroStory() {
  return (
    <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div className="grid lg:grid-cols-2 gap-14 items-center" style={{ gridTemplateColumns: undefined }}>
          {/* Left — Copy */}
          <Reveal>
            <div className="chip" style={{ marginBottom: 24 }}>
              <span className="heartbeat" style={{ color: 'var(--hot)' }}>
                <Heart size={14} color="currentColor" />
              </span>
              <span>Hundreds of creators protected · made by creators, for creators</span>
            </div>

            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(42px, 5.2vw, 72px)',
                lineHeight: 1,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              We don&apos;t just remove your leaks.
              <br />
              <span className="italic" style={{ color: 'var(--accent)' }}>
                We find who&apos;s leaking.
              </span>
            </h1>

            <p style={{ fontSize: 19, color: 'var(--ink-2)', marginTop: 28, lineHeight: 1.55, maxWidth: 520 }}>
              Forensic watermarking meets automated enforcement.{' '}
              <b>Catch leakers. Protect your content. Get paid for what you create.</b>
            </p>

            <div style={{ marginTop: 36, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="/get-started" className="btn btn-accent" style={{ padding: '17px 28px', fontSize: 16 }}>
                Start my 7-day trial <span>→</span>
              </a>
              <a href="/how-it-works" className="btn btn-ghost" style={{ padding: '17px 28px', fontSize: 16 }}>
                See how it works
              </a>
            </div>

            {/* Social proof row */}
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex' }}>
                {AVATARS.slice(0, 5).map((a, i) => (
                  <div
                    key={i}
                    className="avtr"
                    style={{ backgroundImage: `url(${a})`, marginLeft: i ? -10 : 0 }}
                  />
                ))}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={12} color="#FBBF24" />
                  ))}
                </div>
                <span>
                  <b>5-star reviews</b>{' '}
                  <span style={{ color: 'var(--mute)' }}>from creators who&apos;ve been there</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right — Polaroid composition */}
          <Reveal delay={180} style={{ position: 'relative', height: 600 }} className="hidden lg:block">
            {/* Before polaroid */}
            <div
              style={{ position: 'absolute', left: '4%', top: 20, transform: 'rotate(-5deg)', zIndex: 1 }}
              className=""
            >
              <div className="polaroid" style={{ width: 220 }}>
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', background: '#F3E8FF' }}>
                  <Image
                    src={POLAROID_BEFORE}
                    alt="creator before"
                    fill
                    style={{ objectFit: 'cover', filter: 'saturate(.7) contrast(.95) brightness(.92)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(61,30,85,.15), rgba(61,30,85,.35))' }} />
                  {/* Scattered file icons */}
                  <svg viewBox="0 0 200 250" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    {[[28, 36, -12], [158, 52, 14], [36, 162, 8], [150, 180, -10], [168, 108, -6], [22, 108, 10]].map(([x, y, r], i) => (
                      <g key={i} transform={`translate(${x} ${y}) rotate(${r})`} opacity=".92">
                        <rect width="22" height="28" rx="3" fill="#fff" />
                        <rect x="4" y="8" width="14" height="1.5" fill="#A855F7" />
                        <rect x="4" y="13" width="10" height="1.5" fill="#A855F7" />
                        <rect x="4" y="18" width="12" height="1.5" fill="#A855F7" />
                      </g>
                    ))}
                    <circle cx="52" cy="62" r="6" fill="#EC4899" />
                    <circle cx="172" cy="150" r="6" fill="#EC4899" />
                    <circle cx="92" cy="212" r="5" fill="#EC4899" />
                  </svg>
                  <span
                    style={{
                      position: 'absolute', top: 10, left: 12, fontSize: 10, letterSpacing: '.12em',
                      color: '#3D1E55', background: 'rgba(255,255,255,.85)', padding: '3px 8px',
                      borderRadius: 99, fontFamily: 'Inter, monospace',
                    }}
                  >
                    BEFORE
                  </span>
                </div>
                <div className="font-hand" style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'var(--mute)' }}>
                  leaks everywhere 😮‍💨
                </div>
              </div>
            </div>

            {/* After polaroid */}
            <div
              style={{ position: 'absolute', right: '4%', top: 90, transform: 'rotate(4deg)', zIndex: 2 }}
              className=""
            >
              <div className="polaroid" style={{ width: 240 }}>
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', background: 'linear-gradient(135deg, var(--accent), var(--hot))' }}>
                  <Image
                    src={POLAROID_AFTER}
                    alt="creator after"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(168,85,247,.22), rgba(236,72,153,.28))' }} />
                  {/* Shield + sparkles */}
                  <svg viewBox="0 0 200 250" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    <g transform="translate(160 38)">
                      <circle r="20" fill="#fff" />
                      <path d="M 0 -12 C -8 -10, -11 -8, -11 -4 C -11 4, -6 10, 0 13 C 6 10, 11 4, 11 -4 C 11 -8, 8 -10, 0 -12 Z" fill="#9333EA" />
                      <path d="M -4 -1 L -1 3 L 5 -4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                    <g fill="#fff" opacity=".9">
                      <path d="M 30 44 l 1.5 6 l 6 1.5 l -6 1.5 l -1.5 6 l -1.5 -6 l -6 -1.5 l 6 -1.5 z" />
                      <path d="M 42 210 l 1.2 4.5 l 4.5 1.2 l -4.5 1.2 l -1.2 4.5 l -1.2 -4.5 l -4.5 -1.2 l 4.5 -1.2 z" />
                      <path d="M 168 200 l 1.5 5 l 5 1.5 l -5 1.5 l -1.5 5 l -1.5 -5 l -5 -1.5 l 5 -1.5 z" />
                    </g>
                  </svg>
                  <span
                    style={{
                      position: 'absolute', top: 10, left: 12, fontSize: 10, letterSpacing: '.12em',
                      color: 'white', background: 'rgba(0,0,0,.35)', padding: '3px 8px',
                      borderRadius: 99, fontFamily: 'Inter, monospace', backdropFilter: 'blur(6px)',
                    }}
                  >
                    AFTER
                  </span>
                </div>
                <div className="font-hand" style={{ textAlign: 'center', marginTop: 10, fontSize: 20, color: 'var(--accent)' }}>
                  with Privly 💜
                </div>
              </div>
            </div>

            {/* Leaker-caught card */}
            <div
              style={{ position: 'absolute', left: '12%', bottom: 40, transform: 'rotate(-2deg)', zIndex: 3 }}
              className=""
            >
              <div
                style={{
                  background: 'white', padding: '18px 22px', borderRadius: 18,
                  boxShadow: '0 22px 50px -16px rgba(147,51,234,.3)', maxWidth: 260,
                  border: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span className="spicy">
                    <Sparkle size={10} color="white" /> LEAKER CAUGHT
                  </span>
                </div>
                <div className="font-serif" style={{ fontSize: 22, lineHeight: 1.1 }}>subscriber_4821</div>
                <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>
                  bought Mar 10 · shared to Telegram Mar 12
                </div>
                <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
                  <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: '#DCFCE7', color: '#166534' }}>
                    ✓ banned
                  </span>
                  <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 99, background: '#DCFCE7', color: '#166534' }}>
                    ✓ refunded
                  </span>
                </div>
              </div>
            </div>

            {/* Revenue chip — tucked beneath the After polaroid */}
            <div
              style={{ position: 'absolute', right: '6%', top: 470, transform: 'rotate(3deg)', zIndex: 3 }}
              className=""
            >
              <div
                style={{
                  background: 'var(--ink)', color: 'white', padding: '16px 20px', borderRadius: 18,
                  boxShadow: '0 22px 50px -16px rgba(31,15,46,.5)', minWidth: 180,
                }}
              >
                <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-2)' }}>
                  this week
                </div>
                <div className="font-serif" style={{ fontSize: 36, lineHeight: 1, marginTop: 4, fontWeight: 400 }}>
                  +$2,140
                </div>
                <div style={{ fontSize: 12, color: '#D8B4FE', marginTop: 4 }}>revenue recovered ↗</div>
              </div>
            </div>

            {/* Sparkles */}
            <Sparkle size={36} color="var(--hot)" className="" style={{ position: 'absolute', top: 10, right: '30%' }} />
            <Sparkle size={24} color="var(--accent)" className="" style={{ position: 'absolute', bottom: 0, right: '40%' }} />
            <div style={{ position: 'absolute', top: '40%', left: '48%', fontSize: 30, zIndex: 2 }} className="">
              💜
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

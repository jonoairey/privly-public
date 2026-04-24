import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/lib/seo';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { APP_URL } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'About',
  description:
    "A letter from the founder — why Privly exists, what we believe, and who's actually on the team.",
  path: '/about',
  keywords: [
    'about privly',
    'creator protection mission',
    'content protection company',
    'privacy focused',
    'founder story',
  ],
});

/* ============ Icon set — 1.5px stroke, no emoji ============
   Paths lifted from the brief and the existing articles iconography.
   Kept inline so the page stays zero-dependency. */
type IconKind = 'lock' | 'heart' | 'eye' | 'bolt' | 'pen' | 'chat';
function Icon({ kind, size = 26, color = 'var(--accent)' }: { kind: IconKind; size?: number; color?: string }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (kind) {
    case 'lock':
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 018 0v3" />
          <circle cx="12" cy="16" r="1" fill={color} />
        </svg>
      );
    case 'heart':
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...common}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case 'pen':
      return (
        <svg {...common}>
          <path d="M4 20l4-1 10-10-3-3L5 16l-1 4z" />
          <path d="M14 6l3 3" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 01-11 7.4L4 21l1.6-5A8 8 0 1121 12z" />
        </svg>
      );
  }
}

/* ============ Unsplash helper — same pattern as article-images ============ */
const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

/* ============ Principles + Promises + Roles data
   Kept inline for page locality; duplicating across components would cost more than it saves here. */

const PRINCIPLES: Array<{ icon: IconKind; title: string; body: string }> = [
  {
    icon: 'lock',
    title: "Privacy isn't a feature. It's the floor.",
    body:
      "We don't share your data with anyone, ever. Your dashboard, your content, your subscriber lists — encrypted, siloed, yours. If we ever got subpoenaed, we'd tell you first (when we're legally allowed to).",
  },
  {
    icon: 'heart',
    title: 'We answer like humans.',
    body:
      "A real protection agent is assigned to you within 24 hours. No ticketing system. No 'thank you for your inquiry.' When you message us at midnight because something just got leaked, you'll get a human who knows your case within the hour.",
  },
  {
    icon: 'eye',
    title: 'We only take creators we can actually help.',
    body:
      "If you're in a jurisdiction we can't enforce in, or a content category we can't defend, we'll tell you on the first call. We'd rather lose a sale than take your money and underdeliver. We turn down ~15% of signups for this reason.",
  },
  {
    icon: 'bolt',
    title: 'Speed matters more than everything.',
    body:
      'The first 72 hours after a leak is where 80% of the damage happens. We scan continuously — not daily, not hourly. Most leaks are caught within 2 hours of appearing. Average removal time from detection to gone: 76 hours.',
  },
  {
    icon: 'pen',
    title: 'We write it in plain English.',
    body:
      "Our DMCA notices read like they were written by a person, because they were. We don't pad them with boilerplate. Platforms respond to clear, specific, correctly-cited notices faster — so that's what we send.",
  },
  {
    icon: 'chat',
    title: 'No lock-in. No dark patterns.',
    body:
      "One click cancels. We'll email you an export of everything you ever gave us. If we lose you, it should be because we didn't earn you — not because we made leaving hard. (We don't think you'll leave.)",
  },
];

const STATS: Array<{ value: string; title: string; caption: string }> = [
  { value: 'hundreds', title: 'Creators under active protection', caption: 'Across three continents' },
  { value: '76h', title: 'Average time from detection to removal', caption: 'Industry average is 6–9 days' },
  { value: '96%', title: 'Takedown success rate', caption: 'First-notice compliance, not after escalation' },
  { value: '0', title: "Data we've ever sold", caption: 'And we never will' },
];

const ROLES: Array<{ role: string; body: string }> = [
  { role: 'Founder', body: 'Cyber security background. Writes the playbooks. Answers creator emails at 11pm.' },
  { role: 'Enforcement lead', body: 'Former IP attorney. Takes the cases nobody else will touch.' },
  { role: 'Engineering', body: 'Built the fingerprinting pipeline and the scanners that watch 500+ sites, 24/7.' },
  { role: 'Creator success', body: 'Your first point of contact. Onboards every account personally for the first 30 days.' },
];

const PROMISES: Array<{ title: string; body: string }> = [
  { title: 'A real protection agent, not a queue.', body: 'Named. Email address. Direct line. Not a shared inbox.' },
  { title: 'Forensic watermarking on everything you upload.', body: 'Invisible, per-subscriber. If it leaks, we know who.' },
  { title: 'Takedowns submitted in minutes, not days.', body: 'Average time from detection to DMCA sent: 14 minutes.' },
  { title: 'Monthly check-ins — we come to you.', body: 'Not a support form you have to go find.' },
  { title: "We'll tell you when we can't help.", body: 'Before you pay. Not after.' },
  { title: 'Encrypted, siloed, yours.', body: 'Your content, your subscriber lists, your takedown history — locked down and never shared with anyone, ever.' },
];

/* ============ Reusable helpers ============ */
const CAVEAT = 'var(--font-caveat), cursive';
const FRAUNCES = "'Fraunces', Georgia, serif";
const CARD_SHADOW = '0 12px 30px -16px rgba(61,20,112,0.15), 0 2px 6px -2px rgba(61,20,112,0.08)';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-grow">
        {/* ========== 1. HERO — "A letter from the founder" ========== */}
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-[860px] text-center">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]"
              style={{ background: 'var(--accent-3)', color: 'var(--accent)' }}
            >
              <Icon kind="heart" size={14} color="var(--accent)" />
              A letter from the founder
            </div>
            <h1
              className="text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px]"
              style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
            >
              We didn&apos;t build Privly to be{' '}
              <em className="not-italic sm:italic" style={{ color: 'var(--accent)', fontStyle: 'italic' }}>another SaaS.</em>{' '}
              We built it because{' '}
              <em style={{ color: 'var(--hot)', fontStyle: 'italic' }}>our friends were hurting.</em>
            </h1>
            <div
              className="mt-8 inline-block text-2xl sm:text-[26px]"
              style={{
                fontFamily: CAVEAT,
                transform: 'rotate(-1.5deg)',
                color: 'var(--accent)',
              }}
            >
              — Jono, founder · written on a Tuesday, probably at 1am
            </div>
          </div>
        </section>

        {/* ========== 2. STORY — "Why this exists" ========== */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-[1.15fr_1fr] md:gap-20">
            {/* Left — prose */}
            <div>
              <div
                className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: 'var(--accent)' }}
              >
                Why this exists
              </div>
              <h2
                className="mb-8 text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl md:text-[44px]"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.02em', color: 'var(--ink)' }}
              >
                A friend messaged me at 2am.
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.72] sm:text-[19px]" style={{ color: 'var(--ink-2)' }}>
                <p>
                  She&apos;d just found her PPV drop reposted on three leak sites and a Telegram channel with{' '}
                  <strong style={{ color: 'var(--ink)' }}>34,000 subscribers.</strong> One month of work. Gone in six hours.
                </p>
                <p>
                  She&apos;d already tried the &quot;big&quot; takedown services. $2,400 a month. Auto-generated DMCAs firing into the void.
                  Zero replies. She asked if I knew anyone who could actually help.
                </p>
                <p>
                  I didn&apos;t — but I had the background to figure it out. I&apos;d spent years in{' '}
                  <strong style={{ color: 'var(--ink)' }}>cyber security</strong> doing threat intelligence and incident response.
                  The kind of work where your job is to hunt people who don&apos;t want to be found, and move faster than they can
                  cover their tracks. Removing leaked content is the same problem, pointed a different direction.
                </p>
                <p>
                  So I pulled in a lawyer friend, then an engineer who&apos;d worked on image fingerprinting, and we started Privly.
                  Not as a business plan — as a <strong style={{ color: 'var(--ink)' }}>favour.</strong> Within a week we&apos;d
                  pulled 280 links for her. Within a month she was earning again. Within six months, forty other creators had
                  asked us to do the same.
                </p>
                <p>
                  That&apos;s the whole origin story. No VC pitch. No product-market-fit deck. Just one person who got hurt, and a
                  handful of us who could help.
                </p>
              </div>
            </div>

            {/* Right — photo + floating sticky note */}
            <div className="relative">
              {/* Soft pink glow behind the photo */}
              <div
                aria-hidden
                className="absolute -inset-5 rounded-[28px]"
                style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)' }}
              />
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px]"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <Image
                  src={u('photo-1517430816045-df4b7de11d1d')}
                  alt="Late-night laptop, warm lamp glow — working through the night"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Sticky note overlay */}
              <div
                className="absolute -bottom-4 -left-2 max-w-[240px] rounded-[12px] bg-white px-5 py-4 sm:-left-6"
                style={{
                  transform: 'rotate(-3deg)',
                  boxShadow: '0 10px 24px -8px rgba(61,20,112,0.22), 0 2px 4px -1px rgba(0,0,0,0.06)',
                }}
              >
                <p
                  className="text-[22px] leading-snug"
                  style={{ fontFamily: CAVEAT, color: 'var(--ink)' }}
                >
                  &ldquo;Can you actually help me? I&apos;m losing it.&rdquo;
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--mute)' }}>
                  — creator #1 · 2:14am
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 3. PRINCIPLES — "Six things we don't compromise on" ========== */}
        <section className="px-4 py-20 sm:px-6 sm:py-[110px]" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div
                className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: 'var(--accent)' }}
              >
                What we actually believe
              </div>
              <h2
                className="text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-[56px]"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                Six things we don&apos;t
                <br />
                <em style={{ color: 'var(--hot)', fontStyle: 'italic' }}>compromise on.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[18px] bg-white p-8 sm:p-9"
                  style={{ boxShadow: CARD_SHADOW }}
                >
                  <div
                    className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px]"
                    style={{ background: 'var(--accent-3)' }}
                  >
                    <Icon kind={p.icon} size={26} color="var(--accent)" />
                  </div>
                  <h3
                    className="mb-3 text-[22px] font-medium leading-snug sm:text-[25px]"
                    style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.015em' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 4. PULL-QUOTE STRIP ========== */}
        <section
          className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-[110px]"
          style={{ background: 'linear-gradient(135deg, #1A0936 0%, #3D1470 60%, #5B1F9E 100%)' }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.25), transparent 65%)' }}
          />
          <div className="relative mx-auto max-w-[900px] text-center">
            <div
              aria-hidden
              className="mb-1 text-[80px] leading-none"
              style={{ fontFamily: FRAUNCES, color: 'var(--hot)', lineHeight: 1 }}
            >
              &ldquo;
            </div>
            <blockquote
              className="text-2xl font-normal leading-[1.35] sm:text-3xl md:text-[42px]"
              style={{ fontFamily: FRAUNCES, fontStyle: 'italic', color: '#FFFFFF', letterSpacing: '-0.015em' }}
            >
              We caught him in 11 days. Privly pulled the watermark, I ran a DMCA, he got banned from three platforms,
              and then his lawyer wrote to <strong style={{ fontStyle: 'italic', color: '#F9A8D4' }}>me</strong> asking to settle.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3 text-left">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-2), var(--hot))',
                  fontFamily: FRAUNCES,
                }}
              >
                M
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Maya K.</div>
                <div className="text-xs" style={{ color: '#C4B5FD' }}>
                  OnlyFans creator · Privly customer since 2024
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 5. STATS — "Two years in" ========== */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div
                className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: 'var(--accent)' }}
              >
                Two years in
              </div>
              <h2
                className="text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                This is where we&apos;re at.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[18px] bg-white p-7"
                  style={{ border: '1px solid rgba(61,20,112,0.08)', boxShadow: CARD_SHADOW }}
                >
                  <div
                    className="mb-3 text-[44px] font-medium leading-none sm:text-[56px]"
                    style={{ fontFamily: FRAUNCES, color: 'var(--accent)', letterSpacing: '-0.025em' }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mb-1 text-[14px] font-semibold leading-snug"
                    style={{ color: 'var(--ink)' }}
                  >
                    {s.title}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--mute)' }}>
                    {s.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 6. TEAM — "Small by design" (anonymous) ========== */}
        <section className="px-4 py-20 sm:px-6 sm:py-[110px]" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-6xl">
            {/* Top: two-column hero */}
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
              <div>
                <div
                  className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: 'var(--accent)' }}
                >
                  The humans inside
                </div>
                <h2
                  className="mb-6 text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-[56px]"
                  style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
                >
                  Small by design.
                  <br />
                  <em style={{ color: 'var(--hot)', fontStyle: 'italic' }}>Picked by hand.</em>
                </h2>
                <div className="space-y-4 text-[17px] leading-[1.7] sm:text-[18px]" style={{ color: 'var(--ink-2)' }}>
                  <p>
                    We&apos;re a tight team of four. Deliberately. More people means more handoffs, more bureaucracy, more
                    chances for your case to fall through a crack.
                  </p>
                  <p>
                    Every person on the team has been hand-picked, vetted, and trained for this specific work.
                    Background-checked, NDA&apos;d, and answerable by name to the creators they protect. We&apos;ll grow when
                    we have to, and we&apos;ll hire slowly.
                  </p>
                </div>
              </div>

              {/* Right — photo collage */}
              <div className="relative mx-auto h-[360px] w-full max-w-[480px] sm:h-[420px]">
                <div
                  className="absolute left-0 top-0 aspect-[4/5] w-[55%] overflow-hidden rounded-[16px]"
                  style={{ transform: 'rotate(-3deg)', boxShadow: CARD_SHADOW }}
                >
                  <Image
                    src={u('photo-1526374965328-7f61d4dc18c5', 600)}
                    alt="Glowing data points on a dark background — threat intelligence"
                    fill
                    sizes="(min-width: 768px) 300px, 50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute right-0 top-4 aspect-square w-[50%] overflow-hidden rounded-[16px]"
                  style={{ transform: 'rotate(4deg)', boxShadow: CARD_SHADOW }}
                >
                  <Image
                    src={u('photo-1504384308090-c894fdcc538d', 600)}
                    alt="Abstract network visualization on a laptop screen"
                    fill
                    sizes="(min-width: 768px) 280px, 50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute bottom-0 left-[24%] aspect-[5/4] w-[48%] overflow-hidden rounded-[16px]"
                  style={{ transform: 'rotate(-1.5deg)', boxShadow: CARD_SHADOW }}
                >
                  <Image
                    src={u('photo-1550751827-4bd374c3f58b', 600)}
                    alt="Abstract digital protection patterns in purple"
                    fill
                    sizes="(min-width: 768px) 280px, 50vw"
                    className="object-cover"
                  />
                </div>
                {/* Handwritten sticky note */}
                <div
                  className="absolute -bottom-2 right-0 rounded-[12px] bg-white px-5 py-3 sm:-right-4"
                  style={{ transform: 'rotate(2deg)', boxShadow: CARD_SHADOW }}
                >
                  <p className="text-[20px] leading-tight" style={{ fontFamily: CAVEAT, color: 'var(--ink)' }}>
                    four humans,
                    <br />
                    one mission.
                  </p>
                </div>
              </div>
            </div>

            {/* Role cards — 4 anonymous roles */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {ROLES.map((r, idx) => (
                <div
                  key={r.role}
                  className="relative overflow-hidden rounded-[18px] bg-white p-7"
                  style={{ boxShadow: CARD_SHADOW }}
                >
                  {/* Faint number in corner */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-2 select-none text-[54px] font-medium leading-none"
                    style={{ fontFamily: FRAUNCES, color: 'var(--accent-3)', letterSpacing: '-0.02em' }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="relative mb-3 text-[10px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: 'var(--mute)' }}
                  >
                    Role
                  </div>
                  <h3
                    className="relative mb-3 text-[22px] font-medium leading-snug"
                    style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.015em' }}
                  >
                    {r.role}
                  </h3>
                  <p className="relative text-[13px] leading-[1.6]" style={{ color: 'var(--ink-2)' }}>
                    {r.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Anonymity-as-security callout */}
            <div
              className="mx-auto mt-10 flex max-w-[680px] items-start gap-4 rounded-[14px] bg-white/90 p-5"
              style={{ border: '1px dashed rgba(124,58,237,0.35)' }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'var(--accent-3)' }}
              >
                <Icon kind="lock" size={18} color="var(--accent)" />
              </div>
              <p className="text-[14px] leading-[1.65] sm:text-[15px]" style={{ color: 'var(--ink-2)' }}>
                We don&apos;t publish names or photos because the people fighting leaks shouldn&apos;t have to worry about
                becoming targets themselves.{' '}
                <strong style={{ color: 'var(--ink)' }}>Same reason you trust us with yours.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ========== 7. PROMISES — "Six promises. In our own words." ========== */}
        <section className="px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-12 text-center">
              <div
                className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: 'var(--accent)' }}
              >
                What you get
              </div>
              <h2
                className="text-3xl font-normal tracking-tight sm:text-4xl md:text-[44px]"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                Six promises.{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>In our own words.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
              {PROMISES.map((p, idx) => (
                <div
                  key={p.title}
                  className="flex gap-5 pb-6"
                  style={{ borderBottom: '1px solid rgba(61,20,112,0.1)' }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-medium text-white"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-2), var(--hot))',
                      fontFamily: FRAUNCES,
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3
                      className="mb-2 text-[19px] font-medium leading-snug sm:text-[21px]"
                      style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.01em' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6]" style={{ color: 'var(--ink-2)' }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 8. CLOSING — warm CTA, no "book a call" ========== */}
        <section className="px-4 pb-28 pt-20 sm:px-6 sm:pb-32 sm:pt-[110px]" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-[780px] text-center">
            <div
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
              style={{ color: 'var(--hot)' }}
            >
              If you&apos;re reading this
            </div>
            <h2
              className="text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl md:text-[48px]"
              style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
            >
              If something got leaked, we&apos;re here.
              <br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>No script. No pressure.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] sm:text-[20px]" style={{ color: 'var(--ink-2)' }}>
              Sign up, tell us what&apos;s going on, and a real agent is assigned within 24 hours. We&apos;ll look at your
              situation, tell you what we can do, and tell you what we can&apos;t. If Privly isn&apos;t the right fit, we&apos;ll
              point you somewhere that is. No hard sell.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href={`${APP_URL}/auth/signup`}
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: 'var(--hot)',
                  boxShadow: '0 10px 24px -10px rgba(219,39,119,0.55)',
                }}
              >
                Start free trial →
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 10px 24px -10px rgba(124,58,237,0.55)',
                }}
              >
                Subscribe now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold transition-colors hover:text-[var(--accent)]"
                style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
              >
                Contact us
              </Link>
            </div>

            <div
              className="mt-14 inline-block text-[28px] leading-snug sm:text-[30px]"
              style={{
                fontFamily: CAVEAT,
                transform: 'rotate(-1.5deg)',
                color: 'var(--accent)',
              }}
            >
              — Jono and the team
            </div>
            <div className="mt-6 text-[13px]" style={{ color: 'var(--mute)' }}>
              Privly · 2026
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

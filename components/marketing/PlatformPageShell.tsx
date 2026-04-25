/**
 * Shared shell for platform pages (/fanfix, /justforfans, /fanvue, /loyalfans).
 *
 * Extracted from the /threads pattern. Each new platform passes a PlatformConfig
 * and the shell renders the full 9-section page (hero, stats, problem, how-it-works,
 * features, with-vs-without, FAQ, pricing CTA, plus FAQPage + Breadcrumb + Product
 * structured data).
 *
 * The original 8 platform pages (/onlyfans, /fansly etc.) still inline-render their
 * own structure — they can migrate to this shell over time but don't need to today.
 */

import Link from 'next/link';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import {
  generateBreadcrumbSchema,
  generateProductSchema,
  SITE_CONFIG,
} from '@/lib/seo';
import {
  Shield, Search, FileText, Eye, Fingerprint, AlertTriangle, CheckCircle,
  ArrowRight, Clock, Globe, Lock, Zap, Users, Camera, Ban,
  type LucideIcon,
} from 'lucide-react';

export type FeatureIconName =
  | 'shield' | 'search' | 'file' | 'eye' | 'fingerprint' | 'alert' | 'check'
  | 'arrow' | 'clock' | 'globe' | 'lock' | 'zap' | 'users' | 'camera' | 'ban';

const ICONS: Record<FeatureIconName, LucideIcon> = {
  shield: Shield, search: Search, file: FileText, eye: Eye,
  fingerprint: Fingerprint, alert: AlertTriangle, check: CheckCircle,
  arrow: ArrowRight, clock: Clock, globe: Globe, lock: Lock, zap: Zap,
  users: Users, camera: Camera, ban: Ban,
};

export interface PlatformPageConfig {
  slug: string;                    // 'fanfix'
  platformName: string;            // 'Fanfix'
  /** SEO + OG */
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  /** Hero */
  heroBadge: string;               // 'Built for Fanfix Creators'
  heroEyebrow?: string;
  heroHeadline: string;            // The accent phrase (italic)
  heroSubcopy: string;
  /** Stats row (4 items) */
  stats: Array<{ value: string; label: string }>;
  /** Problem section */
  problemTitle: string;
  problemBlurb: string;
  problemPillars: Array<{ icon: FeatureIconName; title: string; body: string }>;
  /** How It Works (4 steps) */
  howItWorks: Array<{ title: string; description: string }>;
  /** Feature grid (8 items) */
  features: Array<{ icon: FeatureIconName; title: string; description: string }>;
  /** With/Without comparison */
  comparison: {
    withoutItems: string[];
    withItems: string[];
  };
  /** FAQ */
  faqs: Array<{ q: string; a: string }>;
  /** CTA */
  ctaTitle: string;
  ctaBlurb: string;
}

const FRAUNCES = "'Fraunces', Georgia, serif";

export default function PlatformPageShell({ config }: { config: PlatformPageConfig }) {
  const url = `${SITE_CONFIG.url}/${config.slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Platforms', url: SITE_CONFIG.url },
    { name: config.platformName, url },
  ]);
  const productSchema = generateProductSchema({
    name: `Privly ${config.platformName} Protection`,
    description: config.metaDescription,
    price: '49',
    url,
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketingHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full blur-3xl" style={{ background: 'rgba(124,58,237,0.15)' }} />
            <div className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full blur-3xl" style={{ background: 'rgba(219,39,119,0.10)' }} />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: 'rgba(124,58,237,0.10)', border: '1px solid rgba(124,58,237,0.25)', color: 'var(--accent)' }}
            >
              <Shield className="h-4 w-4" />
              {config.heroBadge}
            </div>

            {config.heroEyebrow && (
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--mute)' }}>
                {config.heroEyebrow}
              </div>
            )}

            <h1
              className="mb-6 text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
            >
              Protect your{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{config.platformName} content</em>{' '}
              <span style={{ display: 'inline' }}>{config.heroHeadline}</span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              {config.heroSubcopy}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://app.useprivly.com/auth/signup"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--hot)', boxShadow: '0 10px 24px -10px rgba(219,39,119,0.55)' }}
              >
                Start free trial
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold transition-colors hover:text-[var(--accent)]"
                style={{ border: '1px solid var(--line)', color: 'var(--ink-2)' }}
              >
                View pricing
              </Link>
            </div>

            <p className="mt-4 text-sm" style={{ color: 'var(--mute)' }}>
              7-day free trial. No credit card required. Cancel any time.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="px-4 py-12 sm:px-6 lg:px-8" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
            {config.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-medium" style={{ fontFamily: FRAUNCES, color: 'var(--accent)', letterSpacing: '-0.02em' }}>
                  {s.value}
                </p>
                <p className="mt-1 text-sm" style={{ color: 'var(--ink-2)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEM */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                {config.problemTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--ink-2)' }}>
                {config.problemBlurb}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {config.problemPillars.map((p, i) => {
                const Icon = ICONS[p.icon];
                const tone = i === 0 ? '#dc2626' : i === 1 ? 'var(--accent)' : 'var(--hot)';
                const bgTone = i === 0 ? 'rgba(239,68,68,0.10)' : i === 1 ? 'rgba(124,58,237,0.10)' : 'rgba(219,39,119,0.10)';
                return (
                  <div key={p.title} className="rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: bgTone }}>
                      <Icon className="h-6 w-6" style={{ color: tone }} />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold" style={{ color: 'var(--ink)' }}>{p.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--ink-2)' }}>{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                How Privly protects your {config.platformName} content
              </h2>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--ink-2)' }}>
                From detection to removal in hours, not weeks.
              </p>
            </div>

            <div className="space-y-8">
              {config.howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--hot))', fontFamily: FRAUNCES }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold" style={{ color: 'var(--ink)' }}>{step.title}</h3>
                    <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                Complete {config.platformName} creator protection
              </h2>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--ink-2)' }}>
                Everything you need to find, remove, and prevent theft of your {config.platformName} content — in one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {config.features.map((f) => {
                const Icon = ICONS[f.icon];
                return (
                  <div
                    key={f.title}
                    className="rounded-xl p-6 transition-colors hover:border-[var(--accent)]"
                    style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(124,58,237,0.10)' }}>
                      <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="mb-2 text-base font-semibold" style={{ color: 'var(--ink)' }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                With Privly vs. without protection
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl p-8" style={{ background: 'white', border: '1px solid rgba(239,68,68,0.30)' }}>
                <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold" style={{ color: '#dc2626' }}>
                  <AlertTriangle className="h-5 w-5" />
                  Without protection
                </h3>
                <ul className="space-y-4">
                  {config.comparison.withoutItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="mt-0.5 shrink-0" style={{ color: '#dc2626' }}>✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-8" style={{ background: 'white', border: '1px solid rgba(16,185,129,0.30)' }}>
                <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold" style={{ color: '#059669' }}>
                  <CheckCircle className="h-5 w-5" />
                  With Privly
                </h3>
                <ul className="space-y-4">
                  {config.comparison.withItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span className="mt-0.5 shrink-0" style={{ color: '#059669' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                {config.platformName} content protection FAQ
              </h2>
              <p style={{ color: 'var(--ink-2)' }}>
                Common questions about protecting your {config.platformName} content.
              </p>
            </div>

            <div className="space-y-4">
              {config.faqs.map((item, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                  <h3 className="mb-3 text-lg font-semibold" style={{ color: 'var(--ink)' }}>{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.10), rgba(219,39,119,0.10))',
                border: '1px solid rgba(124,58,237,0.25)',
              }}
            >
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                {config.ctaTitle}
              </h2>
              <p className="mx-auto mb-3 max-w-2xl text-lg" style={{ color: 'var(--ink-2)' }}>
                {config.ctaBlurb}
              </p>
              <p className="mb-8 text-2xl font-bold" style={{ color: 'var(--ink)' }}>
                $49<span className="text-base font-normal" style={{ color: 'var(--ink-2)' }}>/month</span>
                <span className="ml-2 text-sm font-normal" style={{ color: 'var(--ink-2)' }}>
                  — 7-day free trial, cancel any time
                </span>
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="https://app.useprivly.com/auth/signup"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: 'var(--hot)', boxShadow: '0 10px 24px -10px rgba(219,39,119,0.55)' }}
                >
                  Start your free trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="font-semibold transition-colors hover:text-[var(--accent)]"
                  style={{ color: 'var(--ink-2)' }}
                >
                  View full feature list
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: config.faqs.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            }),
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

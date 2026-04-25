/**
 * Shared shell for /remove-from-* pages.
 *
 * Each new remove-from page passes a SiteConfig and the shell renders the full
 * 9-section page (hero, problem, DMCA steps, features, FAQ, related, CTA, plus
 * FAQ + HowTo + Breadcrumb structured data).
 *
 * Keeps the eight new pages consistent and ~80 lines each instead of 500.
 * The original 9 remove-from pages still inline-render their own structure;
 * those can migrate to this shell over time but don't need to today.
 */

import Link from 'next/link';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  SITE_CONFIG,
} from '@/lib/seo';
import {
  Shield,
  FileText,
  Globe,
  Lock,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  Search,
  Fingerprint,
  Ban,
  Camera,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type FeatureIconName =
  | 'shield' | 'file' | 'globe' | 'lock' | 'zap' | 'check' | 'alert'
  | 'clock' | 'search' | 'fingerprint' | 'ban' | 'camera' | 'users';

const ICONS: Record<FeatureIconName, LucideIcon> = {
  shield: Shield,
  file: FileText,
  globe: Globe,
  lock: Lock,
  zap: Zap,
  check: CheckCircle,
  alert: AlertTriangle,
  clock: Clock,
  search: Search,
  fingerprint: Fingerprint,
  ban: Ban,
  camera: Camera,
  users: Users,
};

export interface RemoveFromConfig {
  slug: string;                    // e.g. 'remove-from-fapello'
  siteName: string;                // 'Fapello'
  canonicalDomain: string;         // 'fapello.com'
  mirrors?: string[];              // ['fapello.su']
  takedownsDisplay: string;        // '24.5M' — for the hero badge
  category: string;                // 'Aggregator' | 'Tube site' | 'Forum' etc
  /** SEO + OpenGraph */
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  /** Hero */
  heroBadge: string;               // 'Fapello Leak Removal'
  heroEyebrow?: string;            // optional small line above
  heroSubcopy: string;             // paragraph under H1
  /** Problem section */
  problemTitle: string;
  problemBlurb: string;
  problemPillars: Array<{ icon: FeatureIconName; title: string; body: string }>;
  /** DMCA process steps (5-7) */
  dmcaSteps: Array<{ title: string; description: string }>;
  /** Feature grid (6 items) */
  features: Array<{ icon: FeatureIconName; title: string; description: string }>;
  /** Comparison side-by-side (optional) */
  comparison?: {
    title: string;
    blurb: string;
    withoutLabel: string;
    withoutItems: string[];
    withLabel: string;
    withItems: string[];
  };
  /** FAQs (6-8) */
  faqs: Array<{ q: string; a: string }>;
  /** Related-sites cards (4 slugs without the leading /) */
  relatedSlugs: string[];
  /** CTA copy */
  ctaTitle: string;
  ctaBlurb: string;
}

const FRAUNCES = "'Fraunces', Georgia, serif";

export default function RemoveFromPageShell({ config }: { config: RemoveFromConfig }) {
  const url = `${SITE_CONFIG.url}/${config.slug}`;
  const allDomains = [config.canonicalDomain, ...(config.mirrors ?? [])];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1">
        {/* ========== HERO ========== */}
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
              Remove your content from{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{config.siteName}.</em>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              {config.heroSubcopy}
            </p>

            {/* Site context strip */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs" style={{ color: 'var(--mute)' }}>
              <span>Tracked at <strong style={{ color: 'var(--ink-2)' }}>{config.canonicalDomain}</strong></span>
              {config.mirrors && config.mirrors.length > 0 && (
                <>
                  <span aria-hidden>·</span>
                  <span>Active mirror{config.mirrors.length > 1 ? 's' : ''}: <strong style={{ color: 'var(--ink-2)' }}>{config.mirrors.join(', ')}</strong></span>
                </>
              )}
              <span aria-hidden>·</span>
              <span>Category: <strong style={{ color: 'var(--ink-2)' }}>{config.category}</strong></span>
              <span aria-hidden>·</span>
              <span>
                <strong style={{ color: 'var(--hot)' }}>{config.takedownsDisplay}</strong> URLs requested for delisting
                {' '}
                <Link href="/observatory" className="font-semibold underline-offset-2 hover:underline" style={{ color: 'var(--accent)' }}>
                  (source)
                </Link>
              </span>
            </div>

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

        {/* ========== PROBLEM ========== */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ borderTop: '1px solid var(--line)' }}>
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

        {/* ========== DMCA STEPS ========== */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                The {config.dmcaSteps.length}-step DMCA workflow
              </h2>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--ink-2)' }}>
                From discovery to confirmed removal across {allDomains.join(' + ')}.
              </p>
            </div>

            <div className="space-y-8">
              {config.dmcaSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--hot))', fontFamily: FRAUNCES }}
                  >
                    {idx + 1}
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

        {/* ========== FEATURE GRID ========== */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                What we do for {config.siteName} removals
              </h2>
              <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--ink-2)' }}>
                Everything needed to remove your content — without you doing the work yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* ========== COMPARISON (optional) ========== */}
        {config.comparison && (
          <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: 'var(--accent-3)' }}>
            <div className="mx-auto max-w-5xl">
              <div className="mb-16 text-center">
                <h2
                  className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                  style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
                >
                  {config.comparison.title}
                </h2>
                <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--ink-2)' }}>
                  {config.comparison.blurb}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-xl p-8" style={{ background: 'white', border: '1px solid rgba(239,68,68,0.30)' }}>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold" style={{ color: '#dc2626' }}>
                    <AlertTriangle className="h-5 w-5" />
                    {config.comparison.withoutLabel}
                  </h3>
                  <ul className="space-y-3">
                    {config.comparison.withoutItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                        <span className="mt-0.5 shrink-0" style={{ color: '#dc2626' }}>✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl p-8" style={{ background: 'white', border: '1px solid rgba(16,185,129,0.30)' }}>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold" style={{ color: '#059669' }}>
                    <CheckCircle className="h-5 w-5" />
                    {config.comparison.withLabel}
                  </h3>
                  <ul className="space-y-3">
                    {config.comparison.withItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                        <span className="mt-0.5 shrink-0" style={{ color: '#059669' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========== FAQ ========== */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                {config.siteName} removal FAQ
              </h2>
              <p style={{ color: 'var(--ink-2)' }}>
                Common questions about getting your content off {config.canonicalDomain}.
              </p>
            </div>

            <div className="space-y-4">
              {config.faqs.map((item, idx) => (
                <div key={idx} className="rounded-xl p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                  <h3 className="mb-3 text-lg font-semibold" style={{ color: 'var(--ink)' }}>{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== RELATED ========== */}
        <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2
                className="mb-4 text-3xl font-normal tracking-tight"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                Remove from other leak sites
              </h2>
              <p style={{ color: 'var(--ink-2)' }}>
                Complete removal guides for the major leak platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {config.relatedSlugs.map((slug) => {
                const name = slug
                  .replace(/^remove-from-/, '')
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (c) => c.toUpperCase());
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="group rounded-xl p-6 transition-colors hover:border-[var(--accent)]"
                    style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-[var(--accent)]" style={{ color: 'var(--ink)' }}>
                      {name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--ink-2)' }}>DMCA removal guide</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
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
              </div>
            </div>
          </div>
        </section>

        {/* ========== STRUCTURED DATA ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(config.faqs.map((i) => ({ question: i.q, answer: i.a })))),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateHowToSchema({
                name: `How to remove content from ${config.siteName}`,
                description: `Step-by-step guide to removing leaked content from ${config.canonicalDomain} using DMCA takedowns, host targeting, and Google de-indexing.`,
                totalTime: 'PT30M',
                steps: config.dmcaSteps.map((s) => ({ name: s.title, text: s.description, url })),
              }),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateBreadcrumbSchema([
                { name: 'Home', url: SITE_CONFIG.url },
                { name: 'Remove content', url },
                { name: config.siteName, url },
              ]),
            ),
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

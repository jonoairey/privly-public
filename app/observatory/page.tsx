import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { generateBreadcrumbSchema, SITE_CONFIG } from '@/lib/seo';
import observatoryData from '@/lib/observatory-data.json';
import ObservatoryTable, { type ObservatoryRow } from './observatory-table';

export const metadata: Metadata = {
  title: 'The Privly Observatory — Live data on the leak-site ecosystem',
  description:
    'Live data on 50 of the largest creator-leak sites. URLs requested for delisting from Google, recent activity, mirror-domain patterns. Sourced from Google Transparency Report. Updated quarterly.',
  keywords: [
    'leak site statistics',
    'DMCA takedown data',
    'creator content protection data',
    'leak site ecosystem report',
    'Google transparency report',
    'OnlyFans leak sites',
    'Fansly leak sites',
    'content piracy statistics 2026',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/observatory` },
  openGraph: {
    title: 'The Privly Observatory — 77M URLs requested for delisting',
    description:
      'Live data on the largest creator-leak sites — sourced from Google Transparency Report. Updated quarterly by Privly.',
    type: 'website',
    url: `${SITE_CONFIG.url}/observatory`,
  },
  twitter: { card: 'summary_large_image' },
};

/* ============ types ============ */
interface ObservatoryFile {
  generated_at: string;
  source: string;
  method: string;
  site_count: number;
  summary: {
    ok: number;
    no_data: number;
    total_urls_requested_all_sites: number;
    recent_4_weeks_all_sites: number;
    biggest_offenders: string[];
    notes: string[];
  };
  results: ObservatoryRow[];
}

const FRAUNCES = "'Fraunces', Georgia, serif";
const CAVEAT = 'var(--font-caveat), cursive';
const CARD_SHADOW = '0 12px 30px -16px rgba(61,20,112,0.15), 0 2px 6px -2px rgba(61,20,112,0.08)';

/* ============ helpers ============ */
function formatBig(n: number) {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}

function formatGenerated(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return iso;
  }
}

/** Mirror-domain pairs we want to surface as a teaching example. */
const MIRROR_PAIRS: Array<[string, string]> = [
  ['bunkr.ru', 'bunkrr.org'],
  ['coomer.su', 'coomer.st'],
  ['kemono.su', 'kemono.party'],
  ['simpcity.cr', 'simpcity.su'],
  ['thothub.tv', 'thothub.lol'],
  ['fapello.com', 'fapello.su'],
  ['cyberdrop.me', 'cyberdrop.to'],
  ['thotsbay.com', 'thotsbay.tv'],
];

export default function ObservatoryPage() {
  const data = observatoryData as ObservatoryFile;
  const rows = data.results;

  const okRows = rows.filter((r) => r.status === 'ok');
  const sortedByTotal = [...okRows].sort(
    (a, b) => b.total_urls_requested - a.total_urls_requested,
  );
  const sortedByRecent = [...okRows].sort(
    (a, b) => b.recent_4_weeks - a.recent_4_weeks,
  );
  const top5AllTime = sortedByTotal.slice(0, 5);
  const top5Recent = sortedByRecent.slice(0, 5);

  // Aggregator vs Tube site totals — for the "counterintuitive finding" callout
  const aggregatorTotal = okRows
    .filter((r) => r.category === 'Aggregator')
    .reduce((s, r) => s + r.total_urls_requested, 0);
  const tubeTotal = okRows
    .filter((r) => r.category === 'Tube site')
    .reduce((s, r) => s + r.total_urls_requested, 0);

  // Mirror-pair lookup
  const byDomain = new Map(rows.map((r) => [r.domain, r]));
  const mirrorRows = MIRROR_PAIRS
    .map(([a, b]) => ({ a: byDomain.get(a), b: byDomain.get(b) }))
    .filter((p) => p.a && p.b && p.a.status === 'ok' && p.b.status === 'ok') as Array<{
      a: ObservatoryRow;
      b: ObservatoryRow;
    }>;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      {/* Breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: SITE_CONFIG.url },
              { name: 'Observatory', url: `${SITE_CONFIG.url}/observatory` },
            ]),
          ),
        }}
      />
      {/* Dataset structured data — helps surface in research-leaning queries */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'The Privly Observatory — Leak Site DMCA Activity',
            description:
              'Aggregated DMCA takedown request volumes across 50 of the largest creator-leak sites, sourced from Google Transparency Report. Updated quarterly by Privly.',
            url: `${SITE_CONFIG.url}/observatory`,
            license: 'https://creativecommons.org/licenses/by/4.0/',
            isAccessibleForFree: true,
            datePublished: data.generated_at,
            creator: {
              '@type': 'Organization',
              name: 'Privly',
              url: SITE_CONFIG.url,
            },
            keywords: ['DMCA', 'leak sites', 'content protection', 'Google Transparency Report', 'creator economy'],
          }),
        }}
      />

      <MarketingHeader />

      <main className="flex-grow">
        {/* ========== 1. HERO ========== */}
        <section className="px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ background: 'var(--accent-3)', color: 'var(--accent)' }}
              >
                The Privly Observatory
              </div>
              <h1
                className="text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
                style={{ fontFamily: FRAUNCES, letterSpacing: '-0.025em', color: 'var(--ink)' }}
              >
                Live data on the{' '}
                <em style={{ color: 'var(--hot)', fontStyle: 'italic' }}>leak-site ecosystem.</em>
              </h1>
              <p
                className="mt-6 text-[18px] leading-[1.65]"
                style={{ color: 'var(--ink-2)' }}
              >
                We monitor 50 of the largest creator-leak sites, aggregators, and tube hosts.
                Together they&apos;ve had{' '}
                <strong style={{ color: 'var(--ink)' }}>
                  {formatBig(data.summary.total_urls_requested_all_sites)} URLs
                </strong>{' '}
                requested for delisting from Google — including{' '}
                <strong style={{ color: 'var(--hot)' }}>
                  {formatBig(data.summary.recent_4_weeks_all_sites)}
                </strong>{' '}
                in the last four weeks alone.
              </p>
              <div
                className="mt-6 inline-block text-[22px]"
                style={{
                  fontFamily: CAVEAT,
                  transform: 'rotate(-1.5deg)',
                  color: 'var(--accent)',
                }}
              >
                — sourced from Google&apos;s public Transparency Report.
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs" style={{ color: 'var(--mute)' }}>
                <span>Last refreshed: <strong style={{ color: 'var(--ink-2)' }}>{formatGenerated(data.generated_at)}</strong></span>
                <span aria-hidden>·</span>
                <span>Refresh cadence: quarterly</span>
                <span aria-hidden>·</span>
                <a href="#methodology" className="font-semibold hover:underline" style={{ color: 'var(--accent)' }}>
                  Methodology →
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-5 rounded-[28px]"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)' }}
              />
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop"
                  alt="Abstract data dashboard with charts and analytics — leak-site monitoring concept"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========== 2. HEADLINE STATS GRID ========== */}
        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {[
                {
                  label: 'URLs requested for delisting',
                  sub: 'all-time, across the 50 sites we track',
                  value: formatBig(data.summary.total_urls_requested_all_sites),
                  color: 'var(--accent)',
                },
                {
                  label: 'URLs in the last 4 weeks',
                  sub: '~1.2M new takedown URLs each week',
                  value: formatBig(data.summary.recent_4_weeks_all_sites),
                  color: 'var(--hot)',
                },
                {
                  label: 'Sites tracked',
                  sub: 'aggregators, tube sites, file hosts, forums',
                  value: data.site_count.toString(),
                  color: 'var(--accent)',
                },
                {
                  label: 'With active Google data',
                  sub: `${data.summary.no_data} have no DMCA records`,
                  value: data.summary.ok.toString(),
                  color: 'var(--accent)',
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-[18px] bg-white p-6 sm:p-7"
                  style={{ border: '1px solid var(--line)', boxShadow: CARD_SHADOW }}
                >
                  <div
                    className="mb-2 text-[40px] font-medium leading-none sm:text-[52px]"
                    style={{ fontFamily: FRAUNCES, color: s.color, letterSpacing: '-0.025em' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[13px] font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
                    {s.label}
                  </div>
                  <div className="mt-1 text-[11px]" style={{ color: 'var(--mute)' }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 3. WHAT THIS PAGE IS ========== */}
        <section className="px-4 py-16 sm:px-6 sm:py-20" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--accent)' }}>
                What this page is
              </div>
              <h2
                className="mb-6 text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                A live dashboard of where creator content actually ends up.
              </h2>
              <div className="space-y-4 text-[16px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                <p>
                  Most articles about leak sites tell you they&apos;re bad. They don&apos;t tell you
                  which ones are getting hit hardest by takedowns, which ones are quietly
                  dying out, and which ones are still climbing. This page does.
                </p>
                <p>
                  The data here is publicly auditable — every number traces back to Google&apos;s
                  own Transparency Report, which records every DMCA notice Google has received
                  for each domain since 2011. You can verify any of it by visiting
                  <code className="mx-1 rounded px-1 py-0.5 text-[14px]" style={{ background: 'white', border: '1px solid var(--line)' }}>
                    transparencyreport.google.com/copyright/domains/[domain]
                  </code>
                  yourself.
                </p>
                <p>
                  We refresh quarterly. The next update lands in roughly 90 days.
                </p>
              </div>
            </div>
            <div
              className="rounded-[16px] bg-white p-6"
              style={{ border: '1px dashed rgba(124,58,237,0.35)', boxShadow: CARD_SHADOW }}
            >
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--hot)' }}>
                Why we publish this
              </div>
              <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                Content protection is a category where competitors quote big numbers without
                showing their working. We&apos;d rather publish ours and let creators, journalists,
                and competitors check it. If you find a mistake, email
                <a href="mailto:support@useprivly.com" className="font-semibold underline-offset-2 hover:underline" style={{ color: 'var(--accent)' }}>
                  &nbsp;support@useprivly.com
                </a>{' '}
                — we&apos;ll fix it.
              </p>
            </div>
          </div>
        </section>

        {/* ========== 4. THE BIG TABLE ========== */}
        <section className="px-4 py-16 sm:px-6 sm:py-20" id="data">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--accent)' }}>
                The full dataset
              </div>
              <h2
                className="text-3xl font-normal tracking-tight sm:text-4xl md:text-[44px]"
                style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                The leak-site ecosystem,{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>ranked.</em>
              </h2>
              <p className="mt-3 max-w-2xl text-[15px]" style={{ color: 'var(--ink-2)' }}>
                Sort by all-time volume, recent activity, or domain. Filter by category. Search.
                The activity badge tells you whether each site is heating up or going dormant.
              </p>
            </div>

            <ObservatoryTable rows={rows} />
          </div>
        </section>

        {/* ========== 5. WHAT'S HEATING UP ========== */}
        <section className="px-4 py-16 sm:px-6 sm:py-20" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--accent)' }}>
                Top movers
              </div>
              <h2
                className="text-3xl font-normal tracking-tight sm:text-4xl md:text-[44px]"
                style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                Active right now vs.{' '}
                <em style={{ color: 'var(--hot)', fontStyle: 'italic' }}>legacy giants.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <TopList
                title="Most active in the last 4 weeks"
                subtitle="Where new takedowns are landing right now"
                rows={top5Recent}
                metricLabel="Recent URLs"
                metricKey="recent_4_weeks"
                accent="var(--hot)"
              />
              <TopList
                title="Largest all-time"
                subtitle="Cumulative takedown volume since Google began tracking"
                rows={top5AllTime}
                metricLabel="All-time URLs"
                metricKey="total_urls_requested"
                accent="var(--accent)"
              />
            </div>
          </div>
        </section>

        {/* ========== 6. AGGREGATOR VS TUBE FINDING ========== */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--accent)' }}>
              Counterintuitive finding
            </div>
            <h2
              className="mb-6 text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl"
              style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.025em' }}
            >
              Leak aggregators are{' '}
              <em style={{ color: 'var(--hot)', fontStyle: 'italic' }}>bigger than the tube sites</em> —
              by a wide margin.
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
              <p>
                Most creator-protection writing focuses on the big-name tube sites — Pornhub,
                xHamster, xVideos, Tube8. Conventional wisdom says they&apos;re where leaked content
                ends up. The data says otherwise.
              </p>
              <p>
                The eight Aylo-owned and adjacent tube sites in our cohort have{' '}
                <strong style={{ color: 'var(--ink)' }}>{formatBig(tubeTotal)}</strong> all-time
                URL takedowns combined. The aggregator category alone has{' '}
                <strong style={{ color: 'var(--hot)' }}>{formatBig(aggregatorTotal)}</strong> —
                roughly{' '}
                <strong style={{ color: 'var(--ink)' }}>
                  {Math.round(aggregatorTotal / Math.max(1, tubeTotal))}×
                </strong>{' '}
                more.
              </p>
              <p>
                Fapello.com alone (24.5M takedowns) has more volume than every tube site in our
                cohort combined and multiplied by ~50. This is where creator content actually goes
                to die — not the household-name tube platforms, but the long-tail aggregators
                that copy paywalled content the day it&apos;s posted.
              </p>
            </div>

            <div
              className="mt-8 rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(236,72,153,0.06))',
                border: '1px solid rgba(124,58,237,0.20)',
              }}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--accent)' }}>
                    Aggregators
                  </div>
                  <div className="text-[40px] font-medium" style={{ fontFamily: FRAUNCES, color: 'var(--accent)', letterSpacing: '-0.025em' }}>
                    {formatBig(aggregatorTotal)}
                  </div>
                  <div className="mt-1 text-[12px]" style={{ color: 'var(--ink-2)' }}>
                    URL takedowns, all-time
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--hot)' }}>
                    Tube sites
                  </div>
                  <div className="text-[40px] font-medium" style={{ fontFamily: FRAUNCES, color: 'var(--hot)', letterSpacing: '-0.025em' }}>
                    {formatBig(tubeTotal)}
                  </div>
                  <div className="mt-1 text-[12px]" style={{ color: 'var(--ink-2)' }}>
                    URL takedowns, all-time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 7. MIRROR DOMAIN PATTERN ========== */}
        <section className="px-4 py-16 sm:px-6 sm:py-20" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--accent)' }}>
                A pattern in the data
              </div>
              <h2
                className="mb-4 text-3xl font-normal tracking-tight sm:text-4xl"
                style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.025em' }}
              >
                Mirror domains fragment DMCA volume.
              </h2>
              <p className="max-w-2xl text-[15px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
                Operators register multiple TLD variants of the same site so DMCA filings split across them.
                Filing only on the canonical domain misses content on the mirror — which is often where most
                of the new content actually lives. Every pair below is the same operator, two domains, very
                different Google datasets.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-2xl bg-white"
              style={{ border: '1px solid var(--line)', boxShadow: CARD_SHADOW }}
            >
              <table className="w-full text-left text-sm">
                <thead>
                  <tr style={{ background: 'rgba(245,243,255,0.5)', color: 'var(--ink)' }}>
                    <th className="px-4 py-3 font-semibold">Primary domain</th>
                    <th className="px-4 py-3 text-right font-semibold">URLs</th>
                    <th className="px-4 py-3 font-semibold">Mirror</th>
                    <th className="px-4 py-3 text-right font-semibold">URLs</th>
                  </tr>
                </thead>
                <tbody>
                  {mirrorRows.map(({ a, b }) => (
                    <tr key={a.domain} style={{ borderTop: '1px solid var(--line)' }}>
                      <td className="px-4 py-3 font-mono text-[13px]" style={{ color: 'var(--ink)' }}>{a.domain}</td>
                      <td className="px-4 py-3 text-right tabular-nums font-semibold" style={{ color: 'var(--ink)' }}>
                        {formatBig(a.total_urls_requested)}
                      </td>
                      <td className="px-4 py-3 font-mono text-[13px]" style={{ color: 'var(--ink-2)' }}>{b.domain}</td>
                      <td className="px-4 py-3 text-right tabular-nums" style={{ color: 'var(--ink-2)' }}>
                        {formatBig(b.total_urls_requested)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs" style={{ color: 'var(--mute)' }}>
              The takeaway: when you (or your protection service) file a DMCA, target every active
              TLD variant of the operator. Otherwise content stays up on the mirror your notice never reached.
            </p>
          </div>
        </section>

        {/* ========== 8. METHODOLOGY ========== */}
        <section className="px-4 py-16 sm:px-6 sm:py-20" id="methodology">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--accent)' }}>
              Methodology
            </div>
            <h2
              className="mb-6 text-3xl font-normal tracking-tight sm:text-4xl"
              style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.025em' }}
            >
              How we built this.
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
              <p>
                <strong style={{ color: 'var(--ink)' }}>Source.</strong> Google Transparency Report,
                per-domain pages. Google publishes the volume of DMCA takedown notices it has received
                for each domain since March 2011. Every number on this page is verifiable by visiting{' '}
                <code className="rounded px-1 py-0.5 text-[14px]" style={{ background: 'var(--accent-3)' }}>
                  transparencyreport.google.com/copyright/domains/[domain]
                </code>.
              </p>
              <p>
                <strong style={{ color: 'var(--ink)' }}>Site selection.</strong> 50 domains chosen by
                Privly based on what we see in our own scan logs and creator submissions. The list spans
                aggregators, tube sites, file hosts, forums, and deepfake-specific sites. Curation is
                intentional — we focused on the ecosystem most relevant to creator content.
              </p>
              <p>
                <strong style={{ color: 'var(--ink)' }}>Data extraction.</strong> Each per-domain page
                is rendered in a real browser (the page is JavaScript-driven), parsed for the visible
                stats, and the result is written to a JSON snapshot. We do not scrape Google&apos;s
                bulk dataset. Per-domain queries are well below Google&apos;s rate-limit threshold and
                respect their published terms.
              </p>
              <p>
                <strong style={{ color: 'var(--ink)' }}>Refresh cadence.</strong> Quarterly. Google
                updates these numbers daily, but a quarter is the right cadence for trend signal versus
                noise. The current snapshot was generated on {formatGenerated(data.generated_at)}.
              </p>
              <p>
                <strong style={{ color: 'var(--ink)' }}>Activity classification.</strong> &quot;Hot&quot;
                means recent four-week pace exceeds 1.5× the lifetime weekly average. &quot;Fading&quot;
                means recent pace is below 30% of lifetime average. &quot;Dormant&quot; means fewer than
                six URLs in the last four weeks. &quot;Active&quot; covers everything in between.
              </p>
            </div>

            <h3
              className="mt-10 mb-4 text-2xl font-normal tracking-tight"
              style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.02em' }}
            >
              Caveats worth knowing
            </h3>
            <ul className="space-y-3 text-[15px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
              <li className="flex gap-3">
                <span aria-hidden style={{ color: 'var(--accent)' }}>·</span>
                <span>
                  These are <em>requests</em> for delisting, not confirmed removals. Google&apos;s
                  delisting rate per domain varies — published per-request on each transparency page.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden style={{ color: 'var(--accent)' }}>·</span>
                <span>
                  Google groups data by exact domain. Subdomains and TLD variants are separate datasets
                  (this is the mirror-domain pattern above).
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden style={{ color: 'var(--accent)' }}>·</span>
                <span>
                  Five sites on our list returned no Google data — most likely because they&apos;re too
                  new, too small, or too niche for any DMCA notices to have been filed yet. We&apos;ve
                  kept them in the table marked &quot;no data&quot; for transparency.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden style={{ color: 'var(--accent)' }}>·</span>
                <span>
                  The &quot;Mar 10, 2011&quot; inception date is when Google&apos;s Transparency Report
                  itself began — not when each domain first appeared. It&apos;s reported uniformly across
                  every site.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ========== 9. RELATED + CTA ========== */}
        <section className="px-4 pb-24 pt-16 sm:px-6 sm:pt-20" style={{ background: 'var(--accent-3)' }}>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--hot)' }}>
              Related
            </div>
            <h2
              className="mb-6 text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl md:text-[44px]"
              style={{ fontFamily: FRAUNCES, color: 'var(--ink)', letterSpacing: '-0.025em' }}
            >
              Read the full Q2 2026 report{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>or jump straight in.</em>
            </h2>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/articles/leak-site-observatory-q2-2026"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ border: '1px solid var(--accent)', color: 'var(--accent)', boxShadow: '0 8px 20px -10px rgba(124,58,237,0.30)' }}
              >
                Read the Q2 2026 report →
              </Link>
              <Link
                href="https://app.useprivly.com/auth/signup"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: 'var(--hot)', boxShadow: '0 10px 24px -10px rgba(219,39,119,0.55)' }}
              >
                Start free trial
              </Link>
            </div>

            <p className="mt-12 text-[13px]" style={{ color: 'var(--mute)' }}>
              Have a leak site we should add to the list? Email{' '}
              <a href="mailto:support@useprivly.com" className="font-semibold underline-offset-2 hover:underline" style={{ color: 'var(--accent)' }}>
                support@useprivly.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

/* ============ small subcomponent for the top-N lists ============ */
function TopList({
  title,
  subtitle,
  rows,
  metricLabel,
  metricKey,
  accent,
}: {
  title: string;
  subtitle: string;
  rows: ObservatoryRow[];
  metricLabel: string;
  metricKey: 'recent_4_weeks' | 'total_urls_requested';
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl bg-white p-6 sm:p-8"
      style={{ boxShadow: CARD_SHADOW, border: '1px solid var(--line)' }}
    >
      <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: accent }}>
        {title}
      </div>
      <p className="mb-5 text-[12px]" style={{ color: 'var(--mute)' }}>
        {subtitle}
      </p>
      <ol className="space-y-3">
        {rows.map((r, i) => (
          <li key={r.domain} className="flex items-baseline gap-3">
            <span
              className="w-5 text-right text-[14px] font-medium"
              style={{ fontFamily: FRAUNCES, color: accent }}
            >
              {i + 1}
            </span>
            <span className="font-mono text-[13px] font-medium flex-1 truncate" style={{ color: 'var(--ink)' }}>
              {r.domain}
            </span>
            <span className="text-right text-sm tabular-nums font-semibold" style={{ color: 'var(--ink)' }}>
              {formatBig(r[metricKey])}
            </span>
            <span className="hidden text-[11px] sm:inline" style={{ color: 'var(--mute)' }}>
              {metricLabel.replace(/^\w/, '').toLowerCase()}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

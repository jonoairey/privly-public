'use client';

/**
 * The interactive heart of the Privly Observatory.
 * Renders the 50-site table with sort + filter + search.
 *
 * The data shape mirrors `lib/observatory-data.json`. When the data refreshes
 * (next quarterly scrape), only the JSON file changes — no code touches needed.
 */

import { useMemo, useState } from 'react';

export interface ObservatoryRow {
  domain: string;
  tier: number;
  category: string;
  covered_by_remove_from: boolean;
  status: 'ok' | 'no_data' | string;
  total_urls_requested: number;
  recent_4_weeks: number;
  series_weeks: number;
  request_pages_label?: string;
}

interface Props {
  rows: ObservatoryRow[];
}

type SortKey = 'total' | 'recent' | 'domain' | 'tier' | 'activity';
type SortDir = 'asc' | 'desc';

const CATEGORY_COLOR: Record<string, string> = {
  Aggregator: '#7C3AED',
  'Tube site': '#DB2777',
  'File host': '#0891B2',
  Forum: '#D97706',
  Deepfake: '#EC4899',
};

function formatNumber(n: number) {
  if (n === 0) return '0';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toLocaleString();
}

/**
 * Activity trend — compares the recent 4-week pace to the lifetime average.
 * Returns -1..2 score and a label.
 *  - "hot"      → recent pace > 1.5× lifetime avg (site is heating up)
 *  - "active"   → roughly steady
 *  - "fading"   → recent pace < 0.3× lifetime avg
 *  - "dormant"  → recent_4_weeks ≤ 5
 */
function activityTrend(row: ObservatoryRow) {
  if (row.status !== 'ok' || row.total_urls_requested === 0) {
    return { label: 'no data', tone: 'mute' as const };
  }
  if (row.recent_4_weeks <= 5) {
    return { label: 'dormant', tone: 'mute' as const };
  }
  const lifetimeWeekly = row.total_urls_requested / Math.max(1, row.series_weeks);
  const recentWeekly = row.recent_4_weeks / 4;
  const ratio = recentWeekly / Math.max(1, lifetimeWeekly);
  if (ratio >= 1.5) return { label: 'hot', tone: 'hot' as const };
  if (ratio < 0.3) return { label: 'fading', tone: 'fading' as const };
  return { label: 'active', tone: 'active' as const };
}

const TONE_STYLES: Record<string, { bg: string; color: string }> = {
  hot:    { bg: 'rgba(219,39,119,0.10)',  color: '#DB2777' },
  active: { bg: 'rgba(124,58,237,0.10)',  color: '#7C3AED' },
  fading: { bg: 'rgba(245,158,11,0.10)',  color: '#D97706' },
  mute:   { bg: 'rgba(139,127,163,0.12)', color: '#6B5B95' },
};

export default function ObservatoryTable({ rows }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('total');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [hideNoData, setHideNoData] = useState(false);

  const categories = useMemo(() => {
    const set = new Set<string>();
    rows.forEach((r) => set.add(r.category));
    return Array.from(set).sort();
  }, [rows]);

  const visible = useMemo(() => {
    let out = rows.slice();
    if (filterCategory) out = out.filter((r) => r.category === filterCategory);
    if (hideNoData) out = out.filter((r) => r.status === 'ok');
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter(
        (r) =>
          r.domain.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q),
      );
    }
    out.sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      switch (sortKey) {
        case 'domain':
          return dir * a.domain.localeCompare(b.domain);
        case 'tier':
          return dir * (a.tier - b.tier);
        case 'recent':
          return dir * (a.recent_4_weeks - b.recent_4_weeks);
        case 'activity': {
          const ratio = (r: ObservatoryRow) =>
            r.status !== 'ok' || r.series_weeks === 0
              ? 0
              : (r.recent_4_weeks / 4) / Math.max(1, r.total_urls_requested / r.series_weeks);
          return dir * (ratio(a) - ratio(b));
        }
        case 'total':
        default:
          return dir * (a.total_urls_requested - b.total_urls_requested);
      }
    });
    return out;
  }, [rows, sortKey, sortDir, filterCategory, search, hideNoData]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  }

  const arrow = (key: SortKey) =>
    sortKey === key ? (sortDir === 'desc' ? ' ↓' : ' ↑') : '';

  return (
    <div>
      {/* Filter chips + search */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterCategory(null)}
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
            style={
              filterCategory === null
                ? { background: 'var(--ink)', color: 'white' }
                : { background: 'white', border: '1px solid var(--line)', color: 'var(--ink-2)' }
            }
          >
            All ({rows.length})
          </button>
          {categories.map((c) => {
            const active = filterCategory === c;
            const count = rows.filter((r) => r.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setFilterCategory(active ? null : c)}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
                style={
                  active
                    ? { background: CATEGORY_COLOR[c] ?? 'var(--accent)', color: 'white' }
                    : { background: 'white', border: '1px solid var(--line)', color: 'var(--ink-2)' }
                }
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: active ? 'white' : CATEGORY_COLOR[c] ?? 'var(--accent)' }}
                />
                {c} ({count})
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs" style={{ color: 'var(--ink-2)' }}>
            <input
              type="checkbox"
              checked={hideNoData}
              onChange={(e) => setHideNoData(e.target.checked)}
              className="h-4 w-4 rounded"
              style={{ accentColor: 'var(--accent)' }}
            />
            Hide sites with no Google data
          </label>
          <input
            type="text"
            placeholder="Search domain…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-44 rounded-full bg-white px-4 py-1.5 text-sm focus:outline-none focus:ring-2"
            style={{ border: '1px solid var(--line)', color: 'var(--ink)' }}
          />
        </div>
      </div>

      {/* Counts row */}
      <div className="mb-3 text-xs" style={{ color: 'var(--mute)' }}>
        Showing {visible.length} of {rows.length} sites
        {filterCategory && <> · filtered by {filterCategory}</>}
        {hideNoData && <> · hiding no-data</>}
        {search && <> · matching “{search}”</>}
      </div>

      {/* Desktop table — scrollable on mobile */}
      <div
        className="overflow-x-auto rounded-2xl bg-white"
        style={{ border: '1px solid var(--line)', boxShadow: '0 8px 24px -16px rgba(61,20,112,0.10)' }}
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr style={{ background: 'var(--accent-3)', color: 'var(--ink)' }}>
              <th className="cursor-pointer px-4 py-3.5 font-semibold" onClick={() => toggleSort('domain')}>
                Domain{arrow('domain')}
              </th>
              <th className="cursor-pointer px-4 py-3.5 font-semibold" onClick={() => toggleSort('tier')}>
                Tier{arrow('tier')}
              </th>
              <th className="px-4 py-3.5 font-semibold">Category</th>
              <th
                className="cursor-pointer px-4 py-3.5 text-right font-semibold"
                onClick={() => toggleSort('total')}
              >
                URLs (all-time){arrow('total')}
              </th>
              <th
                className="cursor-pointer px-4 py-3.5 text-right font-semibold"
                onClick={() => toggleSort('recent')}
              >
                Last 4 weeks{arrow('recent')}
              </th>
              <th
                className="cursor-pointer px-4 py-3.5 font-semibold"
                onClick={() => toggleSort('activity')}
              >
                Activity{arrow('activity')}
              </th>
              <th className="px-4 py-3.5 font-semibold">Privly guide</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row, i) => {
              const trend = activityTrend(row);
              const tone = TONE_STYLES[trend.tone];
              const catColor = CATEGORY_COLOR[row.category] ?? 'var(--accent)';
              const isStripe = i % 2 === 1;
              return (
                <tr
                  key={row.domain}
                  style={{
                    background: isStripe ? 'rgba(245,243,255,0.45)' : 'transparent',
                    borderTop: '1px solid var(--line)',
                  }}
                  className="transition-colors hover:bg-[var(--accent-3)]"
                >
                  <td className="px-4 py-3.5">
                    <span className="font-mono text-[13px] font-medium" style={{ color: 'var(--ink)' }}>
                      {row.domain}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs" style={{ color: 'var(--mute)' }}>
                    T{row.tier}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ border: '1px solid var(--line)', color: catColor }}
                    >
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: catColor }}
                      />
                      {row.category}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right tabular-nums">
                    {row.status === 'ok' ? (
                      <span className="font-semibold" style={{ color: 'var(--ink)' }}>
                        {formatNumber(row.total_urls_requested)}
                      </span>
                    ) : (
                      <span style={{ color: 'var(--mute)' }}>—</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-right tabular-nums">
                    {row.status === 'ok' ? (
                      <span style={{ color: 'var(--ink-2)' }}>
                        {formatNumber(row.recent_4_weeks)}
                      </span>
                    ) : (
                      <span style={{ color: 'var(--mute)' }}>—</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ background: tone.bg, color: tone.color }}
                    >
                      {trend.label}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    {row.covered_by_remove_from ? (
                      <a
                        href={`/remove-from-${row.domain.split('.')[0]}`}
                        className="text-xs font-semibold underline-offset-2 hover:underline"
                        style={{ color: 'var(--accent)' }}
                      >
                        Removal guide →
                      </a>
                    ) : (
                      <span className="text-xs italic" style={{ color: 'var(--mute)' }}>
                        coming soon
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
            {visible.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center" style={{ color: 'var(--mute)' }}>
                  No sites match these filters. <button onClick={() => { setFilterCategory(null); setSearch(''); setHideNoData(false); }} className="font-semibold underline" style={{ color: 'var(--accent)' }}>Reset</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs" style={{ color: 'var(--mute)' }}>
        Click any column header to sort. Use the chips above to filter by category. Activity classification compares the last 4 weeks against each site&apos;s lifetime weekly average.
      </p>
    </div>
  );
}

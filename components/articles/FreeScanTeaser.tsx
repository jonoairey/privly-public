'use client';

import { useState, type FormEvent } from 'react';
import { APP_URL } from '@/lib/constants';
import {
  type ArticleScanPlatform,
  PLATFORM_LABELS,
  PLATFORMS,
} from '@/lib/article-platform';

/**
 * Inline article CTA — captures a username and routes to /auth/signup with
 * the username + platform pre-filled. The single biggest conversion lever for
 * the marketing site: articles drive ~70% of traffic, but only ~3% of
 * visitors hit /pricing or /get-started. The teaser shrinks the gap from
 * "I'm worried about leaks" to "I just typed my name and I'm one click from
 * an account."
 *
 * Two placements per article: one above the fold (top of body) and one above
 * the divider before related services. Both use this same component but pass
 * a different `placement` so we can attribute conversions per-slot in GA4.
 *
 * No backend persistence — the form just fires a `free_scan_started` gtag
 * event and redirects to the app's signup with `?username=X&platform=Y&ref=...`.
 * If we ever want to capture leads who type a username and bounce, we can
 * add a fire-and-forget POST to /api/tools/scan-lead later. Keeping it simple
 * for ship-now velocity.
 *
 * `ArticleScanPlatform`, the labels map, and `detectPlatformFromSlug` live in
 * `lib/article-platform.ts` so the server-side article page can call them at
 * render time. Exporting them from this `'use client'` file made them
 * client-only and Next 16 rejects server→client function calls at build.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Re-export for legacy imports — the type is server-safe because it's not
// a runtime value.
export type { ArticleScanPlatform } from '@/lib/article-platform';

export interface FreeScanTeaserProps {
  /** Article slug (sent to GA + signup as `ref`). */
  articleSlug: string;
  /**
   * Pre-selected platform inferred from the article. If absent, the user
   * gets a dropdown — but we should set this whenever possible because
   * dropdowns kill conversion.
   */
  defaultPlatform?: ArticleScanPlatform;
  /** Top of article vs end of article. Used for GA attribution + copy. */
  placement: 'top' | 'end';
}

export default function FreeScanTeaser({
  articleSlug,
  defaultPlatform,
  placement,
}: FreeScanTeaserProps) {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState<ArticleScanPlatform | ''>(defaultPlatform ?? '');
  const [submitting, setSubmitting] = useState(false);

  const platformLabel = platform ? PLATFORM_LABELS[platform] : 'your platform';
  const ref = `article-${articleSlug}-${placement}`;

  // Distinct heading per placement — top is the hook, end is the close.
  const heading =
    placement === 'top'
      ? defaultPlatform
        ? `Worried your ${PLATFORM_LABELS[defaultPlatform]} content is on these sites?`
        : 'Worried your content is on these sites?'
      : 'Find out where your content has ended up';

  const subheading =
    placement === 'top'
      ? `Type your ${platformLabel} username — we'll start scanning the moment you create your free trial. No card required.`
      : `Privly scans 500+ leak sites, Telegram channels, and aggregators for your content. Start your free 7-day trial — we'll show you what we find.`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username.trim() || submitting) return;

    setSubmitting(true);

    // Fire GA event so Jono can mark `free_scan_started` as a Key event in
    // GA4 admin and see source/article/placement in conversion reports.
    try {
      window.gtag?.('event', 'free_scan_started', {
        article_slug: articleSlug,
        placement,
        platform: platform || 'unknown',
        has_username: true,
      });
    } catch {
      /* gtag may not be present in dev / with content blockers */
    }

    // Build signup URL with prefill params. The app's signup page reads these
    // and pre-populates the form.
    const params = new URLSearchParams({
      username: username.trim(),
      plan: 'trial',
      ref,
    });
    if (platform) params.set('platform', platform);

    window.location.href = `${APP_URL}/auth/signup?${params.toString()}`;
  }

  return (
    <div
      className="my-8 overflow-hidden rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(236,72,153,0.04))',
        border: '1px solid rgba(124,58,237,0.20)',
        boxShadow: '0 12px 32px -16px rgba(61,20,112,0.18)',
      }}
    >
      <div className="p-6 sm:p-8">
        <div
          className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em]"
          style={{ color: 'var(--accent)' }}
        >
          Free leak scan
        </div>
        <h3
          className="mt-2 text-2xl font-medium leading-snug sm:text-[28px]"
          style={{ fontFamily: "'Fraunces', Georgia, serif", color: 'var(--ink)', letterSpacing: '-0.015em' }}
        >
          {heading}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>
          {subheading}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-stretch"
        >
          {/* Username — always shown */}
          <div className="relative flex-1">
            <span
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[15px] font-semibold"
              style={{ color: 'var(--mute)' }}
            >
              @
            </span>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your_username"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label="Your creator username"
              className="w-full rounded-xl bg-white px-3 py-3 pl-8 text-[15px] outline-none transition-colors"
              style={{
                border: '1px solid var(--line-2)',
                color: 'var(--ink)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--line-2)')}
            />
          </div>

          {/* Platform — only shown if no defaultPlatform was provided.
              Dropdowns kill conversion, so we lean on inferring from the
              article slug whenever we can. */}
          {!defaultPlatform && (
            <select
              required
              value={platform}
              onChange={(e) => setPlatform(e.target.value as ArticleScanPlatform | '')}
              aria-label="Platform"
              className="rounded-xl bg-white px-3 py-3 text-[15px] outline-none"
              style={{
                border: '1px solid var(--line-2)',
                color: platform ? 'var(--ink)' : 'var(--mute)',
                minWidth: 140,
              }}
            >
              <option value="" disabled>
                Platform
              </option>
              {PLATFORMS.map((p) => (
                <option key={p} value={p} style={{ color: 'var(--ink)' }}>
                  {PLATFORM_LABELS[p]}
                </option>
              ))}
            </select>
          )}

          <button
            type="submit"
            disabled={!username.trim() || submitting || (!defaultPlatform && !platform)}
            className="rounded-xl px-5 py-3 text-[15px] font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              background: 'var(--hot)',
              boxShadow: '0 8px 18px -8px rgba(219,39,119,0.55)',
              whiteSpace: 'nowrap',
            }}
          >
            {submitting ? 'Starting…' : 'Start free scan →'}
          </button>
        </form>

        <p
          className="mt-3 text-[12px]"
          style={{ color: 'var(--mute)' }}
        >
          7-day free trial · No credit card · Cancel anytime
        </p>
      </div>
    </div>
  );
}

// `detectPlatformFromSlug` is intentionally NOT re-exported here. It lives
// in lib/article-platform.ts so server components can call it; re-exporting
// from this `'use client'` file would tag it as client-only again and
// re-introduce the build error we just fixed. Import it from
// '@/lib/article-platform' directly.

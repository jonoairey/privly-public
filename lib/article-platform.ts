/**
 * Pure helpers for inferring a platform from an article slug.
 *
 * Lives in `lib/` rather than next to FreeScanTeaser because the server-side
 * article page needs to call `detectPlatformFromSlug()` at render time to
 * pre-fill the teaser prop. The teaser itself is a client component, so
 * exporting the helper from there made it a client export — which Next 16
 * blocks from being called by server components (build error: "Attempted to
 * call detectPlatformFromSlug() from the server but it's on the client").
 *
 * Keeping the helper in a plain TS module makes it callable from both sides.
 */

export type ArticleScanPlatform =
  | 'onlyfans'
  | 'fansly'
  | 'patreon'
  | 'manyvids'
  | 'fanfix'
  | 'justforfans'
  | 'fanvue'
  | 'loyalfans'
  | 'chaturbate'
  | 'instagram'
  | 'tiktok'
  | 'reddit'
  | 'threads';

export const PLATFORM_LABELS: Record<ArticleScanPlatform, string> = {
  onlyfans: 'OnlyFans',
  fansly: 'Fansly',
  patreon: 'Patreon',
  manyvids: 'ManyVids',
  fanfix: 'Fanfix',
  justforfans: 'JustForFans',
  fanvue: 'Fanvue',
  loyalfans: 'Loyalfans',
  chaturbate: 'Chaturbate',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  reddit: 'Reddit',
  threads: 'Threads',
};

export const PLATFORMS: ArticleScanPlatform[] = [
  'onlyfans', 'fansly', 'patreon', 'manyvids', 'fanfix',
  'justforfans', 'fanvue', 'loyalfans', 'chaturbate',
  'instagram', 'tiktok', 'reddit', 'threads',
];

/**
 * Map an article slug → default platform so the teaser doesn't have to show
 * a dropdown when context is obvious. Falls back to undefined (dropdown).
 *
 * Order matters — check more specific terms first so e.g. "fansly-vs-onlyfans"
 * doesn't shortcut on "onlyfans".
 */
export function detectPlatformFromSlug(slug: string): ArticleScanPlatform | undefined {
  const s = slug.toLowerCase();
  if (s.includes('fansly')) return 'fansly';
  if (s.includes('patreon')) return 'patreon';
  if (s.includes('manyvids')) return 'manyvids';
  if (s.includes('fanfix')) return 'fanfix';
  if (s.includes('justforfans') || s.includes('jff')) return 'justforfans';
  if (s.includes('fanvue')) return 'fanvue';
  if (s.includes('loyalfans')) return 'loyalfans';
  if (s.includes('chaturbate')) return 'chaturbate';
  if (s.includes('instagram')) return 'instagram';
  if (s.includes('tiktok')) return 'tiktok';
  if (s.includes('reddit')) return 'reddit';
  if (s.includes('threads')) return 'threads';
  if (s.includes('onlyfans')) return 'onlyfans';
  return undefined;
}

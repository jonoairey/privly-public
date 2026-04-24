import Link from "next/link";

/**
 * RelatedServices — contextual internal-link block shown under every article.
 *
 * Purpose: distribute internal link equity from high-traffic leak-site / DMCA
 * content to the /privly-vs-* comparison pages and /remove-from-* removal guides,
 * which are lower-authority but commercially important landing pages.
 *
 * The `cluster` prop lets individual articles (esp. leak-site cluster) bias the
 * link selection toward the most relevant remove-from / comparison pages.
 *
 * Styling notes (April 2026): this block sits inside the plum/cream article
 * template, so it uses white card tiles with var(--line) borders and
 * var(--ink)/var(--ink-2) text. The legacy dark-theme palette
 * (bg-gray-900, text-gray-100) made every card read as muddy grey.
 */

export type Cluster =
  | "onlyfans"
  | "fansly"
  | "patreon"
  | "chaturbate"
  | "manyvids"
  | "instagram"
  | "tiktok"
  | "reddit"
  | "dmca"
  | "deepfake"
  | "watermark"
  | "leak-sites"
  | "default";

const COMPARISONS: Array<{ href: string; title: string; blurb: string; priority: Cluster[] }> = [
  { href: "/privly-vs-rulta", title: "Privly vs Rulta", blurb: "Two of the most-compared creator protection services.", priority: ["onlyfans", "fansly", "default"] },
  { href: "/privly-vs-branditscan", title: "Privly vs BrandItScan", blurb: "How the two platforms handle OnlyFans/Fansly leaks.", priority: ["onlyfans", "fansly", "default"] },
  { href: "/privly-vs-ceartas", title: "Privly vs Ceartas", blurb: "Enterprise vs creator-tier content protection.", priority: ["dmca", "default"] },
  { href: "/privly-vs-copyrightshark", title: "Privly vs CopyrightShark", blurb: "DMCA automation head-to-head for creators.", priority: ["dmca", "default"] },
  { href: "/privly-vs-onlyguard", title: "Privly vs OnlyGuard", blurb: "Monitoring depth, DMCA throughput, and pricing compared.", priority: ["onlyfans", "default"] },
  { href: "/privly-vs-takedowns-ai", title: "Privly vs Takedowns AI", blurb: "AI-first takedowns vs Privly's hybrid model.", priority: ["dmca", "default"] },
  { href: "/privly-vs-removetech", title: "Privly vs RemoveTech", blurb: "Takedown speed and coverage compared.", priority: ["default"] },
  { href: "/privly-vs-bruqi", title: "Privly vs Bruqi", blurb: "Side-by-side on coverage, speed, and price.", priority: ["default"] },
];

const REMOVAL_GUIDES: Array<{ href: string; title: string; blurb: string; clusters: Cluster[] }> = [
  { href: "/remove-from-telegram", title: "Remove content from Telegram", blurb: "Step-by-step DMCA workflow for Telegram channels + bots.", clusters: ["onlyfans", "fansly", "patreon", "manyvids", "chaturbate", "leak-sites", "dmca", "default"] },
  { href: "/remove-from-google", title: "Remove content from Google", blurb: "De-index leaked content from Google search results.", clusters: ["onlyfans", "fansly", "patreon", "instagram", "tiktok", "reddit", "manyvids", "chaturbate", "leak-sites", "dmca", "default"] },
  { href: "/remove-from-thothub", title: "Remove content from Thothub", blurb: "DMCA path for one of the largest leak sites.", clusters: ["onlyfans", "fansly", "leak-sites", "default"] },
  { href: "/remove-from-mrdeepfakes", title: "Remove deepfakes from MrDeepfakes", blurb: "Removal + legal options for non-consensual deepfakes.", clusters: ["deepfake", "default"] },
  { href: "/remove-from-erome", title: "Remove content from Erome", blurb: "Erome's takedown workflow and response times.", clusters: ["leak-sites", "onlyfans", "fansly", "default"] },
  { href: "/remove-from-bunkr", title: "Remove content from Bunkr", blurb: "DMCA path for bunkr.ru-hosted leaks.", clusters: ["leak-sites", "onlyfans", "fansly", "default"] },
  { href: "/remove-from-simpcity", title: "Remove content from SimpCity", blurb: "SimpCity takedown strategy and escalation path.", clusters: ["leak-sites", "onlyfans", "fansly", "default"] },
  { href: "/remove-from-coomer", title: "Remove content from Coomer", blurb: "Coomer.su / coomer.party removal workflow.", clusters: ["leak-sites", "fansly", "onlyfans", "patreon", "default"] },
  { href: "/remove-from-cyberdrop", title: "Remove content from Cyberdrop", blurb: "Cyberdrop DMCA process and escalation contacts.", clusters: ["leak-sites", "onlyfans", "fansly", "default"] },
];

const PLATFORM_PAGES: Partial<Record<Cluster, { href: string; title: string; blurb: string }>> = {
  onlyfans: { href: "/onlyfans", title: "Content protection for OnlyFans", blurb: "Watermarks, 24/7 monitoring, and instant DMCAs for OnlyFans creators." },
  fansly: { href: "/fansly", title: "Content protection for Fansly", blurb: "Forensic watermarking and Fansly-specific leak coverage." },
  patreon: { href: "/patreon", title: "Content protection for Patreon", blurb: "Protect exclusive tier content and remove Patreon leaks." },
  chaturbate: { href: "/chaturbate", title: "Content protection for Chaturbate", blurb: "Stream watermarking and clip-site takedowns for Chaturbate performers." },
  manyvids: { href: "/manyvids", title: "Content protection for ManyVids", blurb: "Protect clips and takedowns across tube sites and forums." },
  instagram: { href: "/instagram", title: "Content protection for Instagram", blurb: "Impersonation takedowns and photo-leak removals for Instagram creators." },
  tiktok: { href: "/tiktok", title: "Content protection for TikTok", blurb: "Protect TikTok content from rips, impersonators, and deepfakes." },
  reddit: { href: "/reddit", title: "Content protection for Reddit", blurb: "Subreddit monitoring and Reddit DMCA workflows for creators." },
};

/** Deterministic comparison ranking — prioritise items whose priority list includes cluster first. */
function rankComparisons(cluster: Cluster) {
  const inCluster = COMPARISONS.filter((c) => c.priority.includes(cluster));
  const rest = COMPARISONS.filter((c) => !c.priority.includes(cluster));
  return [...inCluster, ...rest];
}

export default function RelatedServices({ cluster = "default" }: { cluster?: Cluster }) {
  const platformPage = PLATFORM_PAGES[cluster];
  const comparisonsToShow = rankComparisons(cluster).slice(0, 3);
  const removalGuidesToShow = REMOVAL_GUIDES.filter((g) => g.clusters.includes(cluster)).slice(0, 3);

  return (
    <section className="mt-16" aria-labelledby="related-services-heading">
      <h2
        id="related-services-heading"
        className="mb-8 text-3xl font-bold"
        style={{ fontFamily: "'Fraunces', Georgia, serif", color: 'var(--ink)' }}
      >
        Tools, comparisons &amp; removal guides
      </h2>

      {platformPage && (
        <div
          className="mb-8 rounded-2xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(236,72,153,0.06) 100%)',
            border: '1px solid rgba(124,58,237,0.25)',
          }}
        >
          <div
            className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: 'var(--accent)' }}
          >
            Recommended for your platform
          </div>
          <Link href={platformPage.href} className="group block">
            <div
              className="text-xl font-semibold transition-colors group-hover:text-[var(--accent)]"
              style={{ color: 'var(--ink)', fontFamily: "'Fraunces', Georgia, serif" }}
            >
              {platformPage.title} →
            </div>
            <div className="mt-1 text-sm" style={{ color: 'var(--ink-2)' }}>
              {platformPage.blurb}
            </div>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Comparisons */}
        <div>
          <h3
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: 'var(--accent)' }}
          >
            Compare content protection services
          </h3>
          <ul className="space-y-3">
            {comparisonsToShow.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="group block rounded-xl bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(61,20,112,0.18)]"
                  style={{ border: '1px solid var(--line)' }}
                >
                  <div
                    className="font-semibold transition-colors group-hover:text-[var(--accent)]"
                    style={{ color: 'var(--ink)' }}
                  >
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                    {c.blurb}
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privly-vs-rulta"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: 'var(--accent)' }}
              >
                See all comparisons →
              </Link>
            </li>
          </ul>
        </div>

        {/* Removal guides */}
        <div>
          <h3
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: '#DB2777' }}
          >
            Remove your content from leak sites
          </h3>
          <ul className="space-y-3">
            {removalGuidesToShow.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="group block rounded-xl bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(219,39,119,0.18)]"
                  style={{ border: '1px solid var(--line)' }}
                >
                  <div
                    className="font-semibold transition-colors"
                    style={{ color: 'var(--ink)' }}
                  >
                    <span className="group-hover:text-[#DB2777]">{g.title}</span>
                  </div>
                  <div className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                    {g.blurb}
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/tools/dmca-generator"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#DB2777' }}
              >
                Generate a DMCA notice →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

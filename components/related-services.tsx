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
 */

type Cluster = "onlyfans" | "fansly" | "dmca" | "deepfake" | "leak-sites" | "default";

const COMPARISONS: Array<{ href: string; title: string; blurb: string }> = [
  { href: "/privly-vs-bruqi", title: "Privly vs Bruqi", blurb: "Side-by-side on coverage, speed, and price." },
  { href: "/privly-vs-branditscan", title: "Privly vs BrandItScan", blurb: "How the two platforms handle OnlyFans/Fansly leaks." },
  { href: "/privly-vs-copyrightshark", title: "Privly vs CopyrightShark", blurb: "DMCA automation head-to-head for creators." },
  { href: "/privly-vs-onlyguard", title: "Privly vs OnlyGuard", blurb: "Monitoring depth, DMCA throughput, and pricing compared." },
  { href: "/privly-vs-ceartas", title: "Privly vs Ceartas", blurb: "Enterprise vs creator-tier content protection." },
  { href: "/privly-vs-takedowns-ai", title: "Privly vs Takedowns AI", blurb: "AI-first takedowns vs Privly's hybrid model." },
  { href: "/privly-vs-removetech", title: "Privly vs RemoveTech", blurb: "Takedown speed and coverage compared." },
  { href: "/privly-vs-rulta", title: "Privly vs Rulta", blurb: "Two of the most-compared creator protection services." },
];

const REMOVAL_GUIDES: Array<{ href: string; title: string; blurb: string; clusters: Cluster[] }> = [
  { href: "/remove-from-telegram", title: "Remove content from Telegram", blurb: "Step-by-step DMCA workflow for Telegram channels + bots.", clusters: ["onlyfans", "fansly", "leak-sites", "dmca", "default"] },
  { href: "/remove-from-google", title: "Remove content from Google", blurb: "De-index leaked content from Google search results.", clusters: ["onlyfans", "fansly", "leak-sites", "dmca", "default"] },
  { href: "/remove-from-thothub", title: "Remove content from Thothub", blurb: "DMCA path for one of the largest leak sites.", clusters: ["onlyfans", "fansly", "leak-sites", "default"] },
  { href: "/remove-from-mrdeepfakes", title: "Remove deepfakes from MrDeepfakes", blurb: "Removal + legal options for non-consensual deepfakes.", clusters: ["deepfake", "default"] },
  { href: "/remove-from-erome", title: "Remove content from Erome", blurb: "Erome's takedown workflow and response times.", clusters: ["leak-sites", "default"] },
  { href: "/remove-from-bunkr", title: "Remove content from Bunkr", blurb: "DMCA path for bunkr.ru-hosted leaks.", clusters: ["leak-sites", "default"] },
  { href: "/remove-from-simpcity", title: "Remove content from SimpCity", blurb: "SimpCity takedown strategy and escalation path.", clusters: ["leak-sites", "default"] },
  { href: "/remove-from-coomer", title: "Remove content from Coomer", blurb: "Coomer.su / coomer.party removal workflow.", clusters: ["leak-sites", "fansly", "onlyfans", "default"] },
  { href: "/remove-from-cyberdrop", title: "Remove content from Cyberdrop", blurb: "Cyberdrop DMCA process and escalation contacts.", clusters: ["leak-sites", "default"] },
];

export default function RelatedServices({ cluster = "default" }: { cluster?: Cluster }) {
  // Bias: show 3 comparisons (rotated deterministically) + 3 removal guides most relevant to cluster.
  const comparisonsToShow = COMPARISONS.slice(0, 3);
  const removalGuidesToShow = REMOVAL_GUIDES.filter((g) => g.clusters.includes(cluster)).slice(0, 3);

  return (
    <section className="mt-16" aria-labelledby="related-services-heading">
      <h2 id="related-services-heading" className="text-3xl font-bold mb-8">
        Tools, comparisons &amp; removal guides
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Comparisons */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Compare content protection services</h3>
          <ul className="space-y-3">
            {comparisonsToShow.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="block rounded-lg border border-gray-800 bg-gray-900/40 p-4 hover:border-purple-600 transition-colors"
                >
                  <div className="font-semibold text-gray-100">{c.title}</div>
                  <div className="text-sm text-gray-400 mt-1">{c.blurb}</div>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privly-vs-rulta"
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                See all comparisons →
              </Link>
            </li>
          </ul>
        </div>

        {/* Removal guides */}
        <div>
          <h3 className="text-lg font-semibold text-pink-300 mb-4">Remove your content from leak sites</h3>
          <ul className="space-y-3">
            {removalGuidesToShow.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="block rounded-lg border border-gray-800 bg-gray-900/40 p-4 hover:border-pink-600 transition-colors"
                >
                  <div className="font-semibold text-gray-100">{g.title}</div>
                  <div className="text-sm text-gray-400 mt-1">{g.blurb}</div>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/tools/dmca-generator"
                className="text-sm text-pink-400 hover:text-pink-300"
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

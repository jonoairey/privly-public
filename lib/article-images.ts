/**
 * Article cover images — drop-in map for Privly articles.
 *
 * Usage:
 *   import { ARTICLE_IMAGES } from '@/lib/article-images';
 *   const img = ARTICLE_IMAGES[post.slug];
 *   // img => { src, alt, motif, credit }
 *
 * Image policy (agreed with Jono, Apr 2026):
 *   - Conceptual / hands / devices / back-of-head for anything touching leaks, DMCA,
 *     blackmail, impersonation, deepfakes. No identifiable faces.
 *   - Faces OK on positive-framed pieces (platform comparisons, company, wins).
 *   - All images are Unsplash — free for commercial use, no attribution required
 *     but credit is included below for courtesy.
 *
 * Template in the article interior:
 *   - `motif` drives which SVG motif appears inside Template A hero
 *     (watermark | shield | search | eye | lock | chart | trace)
 *   - The photo is used on the feed card only.
 */

export type ArticleImageMotif =
  | 'watermark' | 'shield' | 'search' | 'eye' | 'lock' | 'chart' | 'trace';

export interface ArticleImage {
  /** 1200w Unsplash URL with auto-format + cropping */
  src: string;
  /** Descriptive alt text — used for SEO + accessibility */
  alt: string;
  /** Which Template A hero motif to pair with */
  motif: ArticleImageMotif;
  /** Attribution (optional, Unsplash doesn't require it) */
  credit?: string;
}

/** Unsplash helper — adds sizing + auto-format to any photo ID. */
const u = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

export const ARTICLE_IMAGES: Record<string, ArticleImage> = {
  /* ============ CORE ARTICLES ============ */
  'how-onlyfans-creators-losing-thousands-content-leaks': {
    src: u('photo-1579621970588-a35d0e7ab9b6'),
    alt: 'Falling dollar bills on a dark surface — content leak financial impact',
    motif: 'chart',
  },
  'deepfake-detection-protecting-identity-ai': {
    src: u('photo-1550439062-609e1531270e'),
    alt: 'Abstract data visualization representing AI facial analysis',
    motif: 'eye',
  },
  '5-signs-content-leaked': {
    src: u('photo-1611224923853-80b023f02d71'),
    alt: 'Warning sign icons on a blurred screen — content leak indicators',
    motif: 'search',
  },
  'why-content-protection-best-investment-creator-business': {
    src: u('photo-1554224155-6726b3ff858f'),
    alt: 'Calculator and financial notes on a desk — ROI planning',
    motif: 'chart',
  },
  'how-to-remove-leaked-onlyfans-content': {
    src: u('photo-1551836022-d5d88e9218df'),
    alt: 'Close-up of laptop keyboard in purple ambient light — DMCA workflow',
    motif: 'shield',
  },
  'forensic-watermarking-explained-trace-leakers': {
    src: u('photo-1526374965328-7f61d4dc18c5'),
    alt: 'Glowing data points in a dark matrix — digital watermarking concept',
    motif: 'watermark',
  },
  'someone-leaked-my-content-what-to-do': {
    src: u('photo-1484480974693-6ca0a78fb36b'),
    alt: 'Person silhouette against a window, overlooking the city — reflection and response',
    motif: 'shield',
  },
  'how-much-money-content-leaks-cost-creators': {
    src: u('photo-1526628953301-3e589a6a8b74'),
    alt: 'Financial chart trending downward on a screen — revenue impact',
    motif: 'chart',
  },
  'how-to-watermark-onlyfans-content': {
    src: u('photo-1518770660439-4636190af475'),
    alt: 'Abstract circuit board patterns in purple tones — watermarking technology',
    motif: 'watermark',
  },
  'hidden-cost-ignoring-content-piracy': {
    src: u('photo-1453928582365-b6ad33cbcf64'),
    alt: 'Stacked coins with shadow — hidden financial costs',
    motif: 'chart',
  },
  'fansly-leak-sites-how-to-find-remove-leaked-content': {
    src: u('photo-1504639725590-34d0984388bd'),
    alt: 'Search engine results on a monitor in a darkened room',
    motif: 'search',
  },
  'fansly-dmca-how-to-file-takedowns-remove-leaked-content': {
    src: u('photo-1450101499163-c8848c66ca85'),
    alt: 'Legal document being reviewed with a pen — DMCA filing',
    motif: 'shield',
  },
  'is-fansly-safe-complete-security-guide-creators': {
    src: u('photo-1522202176988-66273c2fd55f'),
    alt: 'Creator collaboration at a bright workspace — platform safety review',
    motif: 'lock',
  },
  'dmca-takedowns-manyvids-what-works': {
    src: u('photo-1589829545856-d10d557cf95f'),
    alt: 'Stack of legal files on a desk — takedown workflow',
    motif: 'shield',
  },
  'how-to-watermark-fansly-content-catch-leakers': {
    src: u('photo-1550751827-4bd374c3f58b'),
    alt: 'Abstract geometric light patterns — watermark embedding',
    motif: 'watermark',
  },
  'best-anti-content-theft-services-adult-creators': {
    src: u('photo-1593642702749-b7d2a804fbcf'),
    alt: 'Minimal desk setup with laptop — comparing services',
    motif: 'shield',
  },
  'onlyfans-leak-prevention-complete-security-checklist': {
    src: u('photo-1584433144859-1fc3ab64a957'),
    alt: 'Clipboard with checklist items — security checklist',
    motif: 'lock',
  },
  'onlyfans-dmca-takedown-guide-step-by-step': {
    src: u('photo-1589391886645-d51941baf7fb'),
    alt: 'Hands typing on a keyboard — filing takedowns',
    motif: 'shield',
  },
  'onlyfans-content-theft-what-to-do-when-leaked': {
    src: u('photo-1499951360447-b19be8fe80f5'),
    alt: 'Close-up of a hand resting on a laptop keyboard in warm light',
    motif: 'shield',
  },
  'onlyfans-leak-sites-2026-how-they-work-how-to-fight-back': {
    src: u('photo-1504384308090-c894fdcc538d'),
    alt: 'Abstract network nodes on a dark background — how leak sites operate',
    motif: 'trace',
  },
  'how-to-trace-a-content-leak-back-to-the-source': {
    src: u('photo-1504639725590-34d0984388bd'),
    alt: 'Magnifying lens over a computer screen — investigation and tracing',
    motif: 'trace',
  },
  'deepfake-threat-report-2026-creators': {
    src: u('photo-1677442136019-21780ecad995'),
    alt: 'Abstract AI data streams in purple — 2026 deepfake landscape',
    motif: 'eye',
  },
  'dmca-takedown-master-guide-2026': {
    src: u('photo-1505664194779-8beaceb93744'),
    alt: 'Law books stacked on a desk — DMCA reference guide',
    motif: 'shield',
  },
  'onlyfans-leak-sites-list-2026': {
    src: u('photo-1457369804613-52c61a468e7d'),
    alt: 'Open notebook with handwritten list — directory of leak sites',
    motif: 'search',
  },

  /* ============ ONLYFANS-SPECIFIC ============ */
  'onlyfans-vs-fansly-which-platform-safer-creators': {
    src: u('photo-1552664730-d307ca884978'),
    alt: 'Two phones side by side on a table — platform comparison',
    motif: 'shield',
  },
  'onlyfans-ppv-content-leaked-how-to-respond': {
    src: u('photo-1510915228340-29c85a43dcfe'),
    alt: 'Phone screen showing a paywalled message — PPV content',
    motif: 'shield',
  },
  'onlyfans-chargebacks-content-theft-what-creators-need-to-know': {
    src: u('photo-1556742049-0cfed4f6a45d'),
    alt: 'Credit card and receipts on a desk — chargeback review',
    motif: 'lock',
  },
  'protect-onlyfans-tips-ppv-dms-complete-guide': {
    src: u('photo-1529612700005-e35377bf1415'),
    alt: 'Phone with a messaging app open — protecting DMs and tips',
    motif: 'lock',
  },
  'erome-bunkr-simpcity-how-onlyfans-content-gets-leaked': {
    src: u('photo-1542831371-29b0f74f9713'),
    alt: 'Code on a screen in low light — anatomy of a leak',
    motif: 'trace',
  },

  /* ============ LEAK SITES ============ */
  'how-to-remove-content-from-erome-dmca-guide': {
    src: u('photo-1585386959984-a4155224a1ad'),
    alt: 'Paper being fed into a shredder — removal process',
    motif: 'shield',
  },
  'how-to-remove-content-from-bunkr-dmca-guide': {
    src: u('photo-1600267185393-e158a98703de'),
    alt: 'Cloud storage icons on a screen — file-host takedown',
    motif: 'shield',
  },
  'how-to-remove-content-from-simpcity-dmca-guide': {
    src: u('photo-1516321318423-f06f85e504b3'),
    alt: 'Forum interface on a laptop screen — community takedowns',
    motif: 'shield',
  },
  'how-to-remove-content-from-coomer-dmca-guide': {
    src: u('photo-1532522750741-628fde798c73'),
    alt: 'Abstract network cables in purple — archive removal',
    motif: 'shield',
  },
  'how-to-remove-content-from-cyberdrop-dmca-guide': {
    src: u('photo-1558494949-ef010cbdcc31'),
    alt: 'Abstract server room lighting — file host removal',
    motif: 'shield',
  },
  'how-to-remove-content-from-gofile-dmca-guide': {
    src: u('photo-1544197150-b99a580bb7a8'),
    alt: 'Cloud storage illustration on a monitor — GoFile takedown',
    motif: 'shield',
  },
  'how-to-remove-content-from-fapello-dmca-guide': {
    src: u('photo-1526374870839-e155464bb9b2'),
    alt: 'Abstract digital grid — aggregator site takedown',
    motif: 'shield',
  },
  'how-to-remove-content-from-mrdeepfakes-dmca-guide': {
    src: u('photo-1620712943543-bcc4688e7485'),
    alt: 'Abstract face mesh visualization — AI-generated content takedown',
    motif: 'eye',
  },

  /* ============ PATREON ============ */
  'how-to-remove-leaked-patreon-content-kemono': {
    src: u('photo-1517336714731-489689fd1ca8'),
    alt: 'Minimal workspace with laptop — Kemono takedown workflow',
    motif: 'shield',
  },
  'patreon-content-protection-complete-guide-creators': {
    src: u('photo-1504805572947-34fad45aed93'),
    alt: 'Artist at a creative workspace — Patreon protection',
    motif: 'lock',
  },
  'how-patreon-scrapers-work-protect-your-posts': {
    src: u('photo-1555949963-ff9fe0c870eb'),
    alt: 'Lines of code on a dark screen — scraper mechanics',
    motif: 'trace',
  },
  'patreon-dmca-takedown-step-by-step-guide': {
    src: u('photo-1450101499163-c8848c66ca85'),
    alt: 'Document being signed with a fountain pen — Patreon DMCA',
    motif: 'shield',
  },
  'is-patreon-safe-security-tips-membership-content': {
    src: u('photo-1586281380349-632531db7ed4'),
    alt: 'Padlock on a laptop keyboard — Patreon security',
    motif: 'lock',
  },
  'patreon-vs-gumroad-vs-ko-fi-which-protects-creators-best': {
    src: u('photo-1460925895917-afdab827c52f'),
    alt: 'Laptop with analytics dashboard — platform comparison chart',
    motif: 'chart',
  },

  /* ============ CREATOR SAFETY ============ */
  'what-to-do-if-blackmailed-leaked-content': {
    src: u('photo-1493836512294-502baa1986e2'),
    alt: 'Silhouette of a person looking out at a sunset — facing a threat',
    motif: 'shield',
  },
  'protect-yourself-starting-onlyfans-complete-security': {
    src: u('photo-1516321165247-4aa89a48be28'),
    alt: 'Notebook and coffee at a bright desk — planning a safe start',
    motif: 'lock',
  },
  'content-creator-security-checklist-ultimate-guide': {
    src: u('photo-1486406146926-c627a92ad1ab'),
    alt: 'Clipboard with a printed checklist — creator security audit',
    motif: 'lock',
  },
  'when-ex-leaks-your-content-revenge-porn-guide': {
    src: u('photo-1504598318550-17eba1008a68'),
    alt: 'Hand holding a phone, screen unseen — revenge porn response',
    motif: 'shield',
  },
  'what-to-do-when-fans-tell-you-content-leaked': {
    src: u('photo-1512428559087-560fa5ceab42'),
    alt: 'Phone with a notification, flat lay — subscriber report',
    motif: 'search',
  },
  'platform-account-security-stop-hackers-stealing-content': {
    src: u('photo-1550751827-4bd374c3f58b'),
    alt: 'Abstract padlock symbol on a digital background — account security',
    motif: 'lock',
  },

  /* ============ NEW 2026-04 CONTENT-GAP ARTICLES ============ */
  'telegram-leaks-creator-guide-remove-content-fast': {
    src: u('photo-1611605698335-8b1569810432'),
    alt: 'Glowing notification badges on a dark screen — messaging app surveillance',
    motif: 'trace',
  },
  'dmca-takedown-service-cost-comparison-2026': {
    src: u('photo-1554224154-26032ffc0d07'),
    alt: 'Calculator and financial paperwork on a desk — pricing comparison',
    motif: 'chart',
  },
  'privly-vs-diy-dmca-takedowns-honest-comparison': {
    src: u('photo-1521737604893-d14cc237f11d'),
    alt: 'Hands on a keyboard with a notebook and coffee — solo creator working',
    motif: 'shield',
  },
  'onlyfans-watermarking-complete-guide-invisible-forensic-2026': {
    src: u('photo-1558494949-ef010cbdcc31'),
    alt: 'Abstract digital watermark pattern in purple — forensic tagging concept',
    motif: 'watermark',
  },
  'leak-site-observatory-q2-2026': {
    src: u('photo-1551288049-bebda4e38f71'),
    alt: 'Analytics dashboard with charts and data visualisation — observatory report concept',
    motif: 'chart',
  },
};

/**
 * Fallback image used when a slug isn't in the map.
 * Generic, neutral, conceptual — safe for any topic.
 */
export const DEFAULT_ARTICLE_IMAGE: ArticleImage = {
  src: u('photo-1526374965328-7f61d4dc18c5'),
  alt: 'Abstract digital protection pattern',
  motif: 'shield',
};

/** Convenience accessor. */
export function getArticleImage(slug: string): ArticleImage {
  return ARTICLE_IMAGES[slug] ?? DEFAULT_ARTICLE_IMAGE;
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { articles as coreArticles } from "@/lib/article-data";
import { leakSiteArticles } from "@/lib/article-data-leak-sites";
import { safetyArticles } from "@/lib/article-data-safety";
import { onlyfansArticles } from "@/lib/article-data-onlyfans";
import { patreonArticles } from "@/lib/article-data-patreon";
import { getArticleImage } from "@/lib/article-images";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import RelatedServices from "@/components/related-services";
import StickyArticleCTA from "@/components/articles/StickyArticleCTA";

/** Map an article to a content cluster so RelatedServices biases its links. */
function detectCluster(slug: string, category: string): import("@/components/related-services").Cluster {
  const s = slug.toLowerCase();
  if (s.includes("deepfake")) return "deepfake";
  if (s.includes("leak-sites") || s.includes("leak-site")) return "leak-sites";
  if (s.includes("fansly")) return "fansly";
  if (s.includes("onlyfans")) return "onlyfans";
  if (s.includes("patreon")) return "patreon";
  if (s.includes("chaturbate")) return "chaturbate";
  if (s.includes("manyvids")) return "manyvids";
  if (s.includes("instagram")) return "instagram";
  if (s.includes("tiktok")) return "tiktok";
  if (s.includes("reddit")) return "reddit";
  if (s.includes("watermark")) return "watermark";
  if (s.includes("dmca")) return "dmca";
  if (category === "Legal") return "dmca";
  return "default";
}

const articles = [...coreArticles, ...leakSiteArticles, ...safetyArticles, ...onlyfansArticles, ...patreonArticles];

/** Category colour map — shared with /articles listing for consistency. */
const CATEGORY_COLOR: Record<string, string> = {
  "Content Protection": "#7C3AED",
  Business: "#059669",
  Legal: "#2563EB",
  Technology: "#DB2777",
  "AI & Security": "#EC4899",
  "Creator Safety": "#D97706",
  "Removal Guides": "#DC2626",
  "Creator Business": "#059669",
  "Platform Comparison": "#0891B2",
};

function CategoryPill({ category, onDark = false }: { category: string; onDark?: boolean }) {
  const color = CATEGORY_COLOR[category] ?? "#3D1470";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm ${
        onDark ? 'bg-white/95' : 'bg-white'
      }`}
      style={{ color, ...(onDark ? {} : { border: '1px solid var(--line)' }) }}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {category}
    </span>
  );
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

/* ============ rich block renderer ============
   Each block is its own paragraph (separated by \n\n in the content). The token
   prefix routes to a styled component. Returns null when the paragraph is not
   a recognised block, so the caller falls through to markdown rendering. */
const FRAUNCES_FONT = "'Fraunces', Georgia, serif";
const SPLIT_PIPE = /\s*\|\s*/;
const SPLIT_SEMI = /\s*;\s*/;

function renderRichBlock(paragraph: string, index: number) {
  const trimmed = paragraph.trim();

  // [STATS: 77M;URLs all-time;across 50 sites | 4.9M;Last 4 weeks; ... ]
  // 2-4 stats in a strip. Each stat: value;label;sublabel (sublabel optional).
  if (trimmed.startsWith('[STATS:') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(7, -1).trim();
    const stats = inner.split(SPLIT_PIPE).map((s) => {
      const [value, label, sub] = s.split(SPLIT_SEMI);
      return { value: value?.trim() ?? '', label: label?.trim() ?? '', sub: sub?.trim() };
    });
    return (
      <div key={index} className={`my-4 grid gap-4 grid-cols-2 ${stats.length >= 4 ? 'lg:grid-cols-4' : stats.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-5"
            style={{ border: '1px solid var(--line)', boxShadow: '0 8px 24px -16px rgba(61,20,112,0.12)' }}
          >
            <div
              className="text-3xl font-medium leading-none sm:text-4xl"
              style={{ fontFamily: FRAUNCES_FONT, color: i % 2 === 0 ? 'var(--accent)' : 'var(--hot)', letterSpacing: '-0.025em' }}
            >
              {s.value}
            </div>
            <div className="mt-2 text-[13px] font-semibold leading-snug" style={{ color: 'var(--ink)' }}>
              {s.label}
            </div>
            {s.sub && (
              <div className="mt-1 text-[11px]" style={{ color: 'var(--mute)' }}>
                {s.sub}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // [STAT: 24.5M | Fapello.com all-time | the largest single creator-leak target]
  if (trimmed.startsWith('[STAT:') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(6, -1).trim();
    const [value, label, sub] = inner.split(SPLIT_PIPE);
    return (
      <div
        key={index}
        className="my-4 rounded-2xl p-7 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(236,72,153,0.04))',
          border: '1px solid rgba(124,58,237,0.20)',
        }}
      >
        <div
          className="text-5xl font-medium leading-none sm:text-6xl"
          style={{ fontFamily: FRAUNCES_FONT, color: 'var(--accent)', letterSpacing: '-0.025em' }}
        >
          {value?.trim()}
        </div>
        <div className="mt-3 text-base font-semibold" style={{ color: 'var(--ink)' }}>
          {label?.trim()}
        </div>
        {sub && (
          <div className="mt-1 text-sm" style={{ color: 'var(--ink-2)' }}>
            {sub.trim()}
          </div>
        )}
      </div>
    );
  }

  // [COMPARE: leftLabel;leftValue;leftSub | rightLabel;rightValue;rightSub]
  if (trimmed.startsWith('[COMPARE:') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(9, -1).trim();
    const sides = inner.split(SPLIT_PIPE).slice(0, 2).map((s) => {
      const [label, value, sub] = s.split(SPLIT_SEMI);
      return { label: label?.trim() ?? '', value: value?.trim() ?? '', sub: sub?.trim() };
    });
    return (
      <div
        key={index}
        className="my-4 rounded-2xl p-6 sm:p-8"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(236,72,153,0.04))',
          border: '1px solid rgba(124,58,237,0.20)',
        }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sides.map((side, i) => (
            <div key={i}>
              <div
                className="mb-1 text-[11px] font-bold uppercase tracking-[0.12em]"
                style={{ color: i === 0 ? 'var(--accent)' : 'var(--hot)' }}
              >
                {side.label}
              </div>
              <div
                className="text-4xl font-medium leading-none sm:text-5xl"
                style={{ fontFamily: FRAUNCES_FONT, color: i === 0 ? 'var(--accent)' : 'var(--hot)', letterSpacing: '-0.025em' }}
              >
                {side.value}
              </div>
              {side.sub && (
                <div className="mt-2 text-sm" style={{ color: 'var(--ink-2)' }}>
                  {side.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // [CALLOUT: title | body]
  if (trimmed.startsWith('[CALLOUT:') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(9, -1).trim();
    const [title, body] = inner.split(SPLIT_PIPE);
    return (
      <div
        key={index}
        className="my-4 rounded-2xl bg-white p-6 sm:p-7"
        style={{
          border: '1px dashed rgba(124,58,237,0.35)',
          boxShadow: '0 8px 24px -16px rgba(61,20,112,0.10)',
        }}
      >
        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--accent)' }}>
          {title?.trim()}
        </div>
        <div className="text-[15px] leading-[1.65]" style={{ color: 'var(--ink-2)' }}>
          {body?.trim()}
        </div>
      </div>
    );
  }

  // [QUOTE: "text" | attribution]
  if (trimmed.startsWith('[QUOTE:') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(7, -1).trim();
    const [text, attrib] = inner.split(SPLIT_PIPE);
    return (
      <blockquote
        key={index}
        className="my-6 pl-6"
        style={{ borderLeft: '3px solid var(--hot)' }}
      >
        <p
          className="text-xl leading-snug sm:text-2xl"
          style={{ fontFamily: FRAUNCES_FONT, fontStyle: 'italic', color: 'var(--ink)', letterSpacing: '-0.01em' }}
        >
          {text?.trim().replace(/^["']|["']$/g, '')}
        </p>
        {attrib && (
          <footer className="mt-3 text-sm" style={{ color: 'var(--mute)' }}>
            — {attrib.trim()}
          </footer>
        )}
      </blockquote>
    );
  }

  // [BAR: domain;displayValue;rawValue | domain;displayValue;rawValue | ...]
  if (trimmed.startsWith('[BAR:') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(5, -1).trim();
    const items = inner.split(SPLIT_PIPE).map((s) => {
      const [name, display, raw] = s.split(SPLIT_SEMI);
      return { name: name?.trim() ?? '', display: display?.trim() ?? '', raw: parseFloat(raw ?? '0') || 0 };
    });
    const max = Math.max(...items.map((it) => it.raw), 1);
    return (
      <div
        key={index}
        className="my-4 rounded-2xl bg-white p-6"
        style={{ border: '1px solid var(--line)', boxShadow: '0 8px 24px -16px rgba(61,20,112,0.10)' }}
      >
        <div className="space-y-2.5">
          {items.map((it, i) => {
            const pct = (it.raw / max) * 100;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-32 shrink-0 truncate font-mono text-[12px]" style={{ color: 'var(--ink)' }}>
                  {it.name}
                </div>
                <div className="relative h-7 flex-1 overflow-hidden rounded-md" style={{ background: 'var(--accent-3)' }}>
                  <div
                    className="absolute inset-y-0 left-0 rounded-md"
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, var(--accent), ${i < 3 ? 'var(--hot)' : 'var(--accent-2, var(--accent))'})`,
                    }}
                  />
                </div>
                <div className="w-16 shrink-0 text-right text-[12px] font-semibold tabular-nums" style={{ color: 'var(--ink)' }}>
                  {it.display}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export async function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = articles.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Privly",
    };
  }

  // Per-article cover image for social share previews — falls back to the generic blog OG.
  const img = getArticleImage(post.slug);
  const ogImage = img?.src ?? "https://www.useprivly.com/og-blog.png";
  const ogAlt = img?.alt ?? post.title;

  return {
    title: `${post.title} | Privly`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.useprivly.com/articles/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.useprivly.com/articles/${resolvedParams.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const post = articles.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
        <MarketingHeader />
        <main className="flex-1 w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-8" style={{ color: 'var(--ink-2)' }}>
              The article you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/articles"
              className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors duration-300"
            >
              Back to Articles
            </Link>
          </div>
        </main>
        <MarketingFooter />
      </div>
    );
  }

  const heroImage = getArticleImage(post.slug);

  const currentIndex = articles.findIndex((p) => p.slug === post.slug);
  const relatedPosts = articles
    .filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        Math.abs(articles.indexOf(a) - currentIndex) -
        Math.abs(articles.indexOf(b) - currentIndex)
    )
    .slice(0, 3);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1 w-full">
        {/* ============ HERO IMAGE ============
            Full-width photo with a plum gradient overlay so the title + meta stay legible.
            The category pill sits top-left; title + meta overlay the bottom third.
            Eager-loaded + priority so it's the LCP element. */}
        <section className="relative isolate mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-2xl px-0 sm:mt-8 sm:rounded-3xl" style={{ background: '#EDE5D7' }}>
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
              priority
            />
            {/* Plum gradient overlay — heaviest at the bottom for legibility */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(26,9,54,0.15) 0%, rgba(26,9,54,0.05) 35%, rgba(26,9,54,0.55) 72%, rgba(26,9,54,0.85) 100%)',
              }}
            />
            {/* Category pill */}
            <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
              <CategoryPill category={post.category} onDark />
            </div>
            {/* Title + meta pinned to the bottom */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-10">
              <div className="max-w-3xl">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-xs">
                  The Privly Journal · {post.readTime} min read
                </div>
                <h1
                  className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", letterSpacing: '-0.022em' }}
                >
                  {post.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/80 sm:text-sm">
                  <span>{post.author}</span>
                  <span className="opacity-40">·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ARTICLE BODY ============ */}
        <div className="w-full px-4 pb-16 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Back link — moved under the hero so it doesn't compete with the cover */}
            <Link
              href="/articles"
              className="mb-8 inline-flex items-center gap-2 text-[var(--accent)] transition-colors hover:opacity-80"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </Link>

            {/* Content
                Markdown-light + custom block tokens:
                  **Heading**            → <h2> (paragraph-level)
                  **inline bold**        → <strong>
                  [STATS: ...]           → multi-up stat strip
                  [STAT: value | label]  → single-stat card
                  [COMPARE: ...]         → A-vs-B side-by-side
                  [CALLOUT: title|body]  → highlighted info box
                  [QUOTE: text|attrib]   → pull-quote
                  [BAR: name;label;raw|...] → horizontal bar chart
                Tokens render as their own paragraph blocks; everything else
                falls through to the markdown path. Reusable for future data
                articles. */}
            <article className="max-w-none">
              <div className="space-y-6 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                {post.content.split("\n\n").map((paragraph, index) => {
                  const block = renderRichBlock(paragraph, index);
                  if (block) return block;

                  const trimmed = paragraph.trim();
                  // Whole-paragraph heading: **Heading text**
                  const headingMatch = trimmed.match(/^\*\*([^*]+(?:\*(?!\*)[^*]+)*)\*\*$/);
                  if (headingMatch) {
                    return (
                      <h2
                        key={index}
                        className="pt-6 text-2xl font-medium leading-snug sm:text-[28px]"
                        style={{ fontFamily: "'Fraunces', Georgia, serif", color: 'var(--ink)', letterSpacing: '-0.015em' }}
                      >
                        {headingMatch[1]}
                      </h2>
                    );
                  }
                  // Inline bold within a paragraph: split on **...** segments
                  const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={index} className="text-lg">
                      {parts.map((part, i) => {
                        const m = part.match(/^\*\*([^*]+)\*\*$/);
                        if (m) {
                          return (
                            <strong key={i} style={{ color: 'var(--ink)' }}>
                              {m[1]}
                            </strong>
                          );
                        }
                        return <span key={i}>{part}</span>;
                      })}
                    </p>
                  );
                })}
              </div>
            </article>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mb-12 mt-16">
                <h2 className="mb-6 text-3xl font-bold" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>Frequently asked questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group rounded-xl p-5"
                      style={{ background: 'white', border: '1px solid var(--line)' }}
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold">
                        <span>{faq.question}</span>
                        <span className="text-2xl leading-none text-[var(--accent)] transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Divider */}
            <div className="my-12 border-t border-[var(--line)]" />

            {/* Tools / comparisons / removal guides — keeps internal-link equity flowing */}
            <RelatedServices cluster={detectCluster(post.slug, post.category)} />
          </div>

          {/* Related Articles — widened beyond the prose column so 3 cards fit comfortably */}
          <section className="mx-auto mt-16 max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>Keep reading</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => {
                const relatedImg = getArticleImage(relatedPost.slug);
                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/articles/${relatedPost.slug}`}
                    className="group"
                  >
                    <article
                      className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-12px_rgba(61,20,112,0.12),0_2px_6px_-2px_rgba(61,20,112,0.08)] transition hover:shadow-[0_16px_36px_-12px_rgba(61,20,112,0.22)]"
                      style={{ border: '1px solid var(--line)' }}
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ background: '#EDE5D7' }}>
                        <Image
                          src={relatedImg.src}
                          alt={relatedImg.alt}
                          fill
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute left-3 top-3">
                          <CategoryPill category={relatedPost.category} />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3
                          className="text-lg font-medium leading-snug tracking-tight line-clamp-2 transition-colors group-hover:text-[var(--accent)]"
                          style={{ fontFamily: "'Fraunces', Georgia, serif", color: 'var(--ink)' }}
                        >
                          {relatedPost.title}
                        </h3>
                        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                          {relatedPost.excerpt}
                        </p>
                        <div className="mt-auto flex items-center gap-2 pt-4 text-[11px]" style={{ color: 'var(--ink-2)' }}>
                          <span>{new Date(relatedPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                          <span className="opacity-40">·</span>
                          <span>{relatedPost.readTime} min</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <MarketingFooter />

      {/* Sticky mobile CTA — appears after 600px scroll, dismissible per session */}
      <StickyArticleCTA />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', url: 'https://www.useprivly.com' },
            { name: 'Articles', url: 'https://www.useprivly.com/articles' },
            { name: post.title, url: `https://www.useprivly.com/articles/${post.slug}` },
          ])),
        }}
      />

      {/* BlogPosting structured data for rich snippets — now includes the per-article image */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: [heroImage.src],
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            dateModified: post.date,
            publisher: {
              "@type": "Organization",
              name: "Privly",
              url: "https://www.useprivly.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.useprivly.com/articles/${post.slug}`,
            },
            wordCount: post.content.split(/\s+/).length,
            timeRequired: `PT${post.readTime}M`,
            articleSection: post.category,
          }),
        }}
      />

      {/* FAQ schema (if article has FAQs) */}
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(post.faqs)),
          }}
        />
      )}
    </div>
  );
}

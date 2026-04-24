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

const articles = [...coreArticles, ...leakSiteArticles, ...safetyArticles, ...onlyfansArticles, ...patreonArticles];
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateCollectionSchema, SITE_CONFIG } from "@/lib/seo";

export const metadata = genMeta({
  title: "Articles",
  description: "Content protection guides, legal advice, and security tips for creators and businesses.",
  path: "/articles",
  ogImage: "https://www.useprivly.com/og-blog.png",
  keywords: [
    "content protection articles",
    "DMCA guide",
    "creator security tips",
    "leak prevention",
    "OnlyFans protection guide",
  ],
});

/** Per-category pill colour — matches the design brief. */
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

function CategoryPill({ category }: { category: string }) {
  const color = CATEGORY_COLOR[category] ?? "#3D1470";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm"
      style={{ color }}
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
      />
      {category}
    </span>
  );
}

export default function ArticlesPage() {
  const sortedPosts = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const canonical = `${SITE_CONFIG.url}/articles`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Articles', url: canonical },
  ]);

  const collectionSchema = generateCollectionSchema({
    name: 'Privly Articles & Guides',
    description: 'Content protection guides, legal advice, and security tips for creators and businesses.',
    url: canonical,
    items: sortedPosts.slice(0, 50).map((post) => ({
      name: post.title,
      url: `${SITE_CONFIG.url}/articles/${post.slug}`,
      description: post.excerpt,
      datePublished: post.date,
    })),
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <MarketingHeader />

      <main className="flex-1 w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
              Articles
            </h1>
            <p className="text-xl max-w-2xl" style={{ color: 'var(--ink-2)' }}>
              Expert insights on content protection, legal strategies, and security for creators and businesses.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, idx) => {
              const img = getArticleImage(post.slug);
              return (
                <Link key={post.slug} href={`/articles/${post.slug}`} className="group">
                  <article
                    className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_-12px_rgba(61,20,112,0.12),0_2px_6px_-2px_rgba(61,20,112,0.08)] transition hover:shadow-[0_16px_36px_-12px_rgba(61,20,112,0.22)]"
                    style={{ border: '1px solid var(--line)' }}
                  >
                    {/* Cover image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden" style={{ background: '#EDE5D7' }}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading={idx < 3 ? 'eager' : 'lazy'}
                        priority={idx < 3}
                      />
                      <div className="absolute left-3 top-3">
                        <CategoryPill category={post.category} />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-5">
                      <h2
                        className="text-lg font-medium leading-snug tracking-tight line-clamp-2 transition-colors group-hover:text-[var(--accent)]"
                        style={{ fontFamily: "'Fraunces', Georgia, serif", color: 'var(--ink)' }}
                      >
                        {post.title}
                      </h2>

                      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-2 pt-4 text-[11px]" style={{ color: 'var(--ink-2)' }}>
                        <span className="font-semibold" style={{ color: 'var(--accent)' }}>{post.author.split(' ')[0]}</span>
                        <span className="opacity-40">·</span>
                        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span className="opacity-40">·</span>
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}

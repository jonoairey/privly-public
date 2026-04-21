import Link from "next/link";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { articles as coreArticles } from "@/lib/article-data";
import { leakSiteArticles } from "@/lib/article-data-leak-sites";
import { safetyArticles } from "@/lib/article-data-safety";
import { onlyfansArticles } from "@/lib/article-data-onlyfans";
import { patreonArticles } from "@/lib/article-data-patreon";

const articles = [...coreArticles, ...leakSiteArticles, ...safetyArticles, ...onlyfansArticles, ...patreonArticles];
import { generateMetadata as genMeta, generateBreadcrumbSchema, generateCollectionSchema, SITE_CONFIG } from "@/lib/seo";

export const metadata = genMeta({
  title: "Articles",
  description: "Content protection guides, legal advice, and security tips for creators and businesses.",
  path: "/articles",
  keywords: [
    "content protection articles",
    "DMCA guide",
    "creator security tips",
    "leak prevention",
    "OnlyFans protection guide",
  ],
});

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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Content Protection": "bg-purple-900/30 text-[var(--accent)]",
      Legal: "bg-blue-900/30 text-blue-600",
      "AI & Security": "bg-pink-900/30 text-[var(--hot)]",
      Business: "bg-emerald-900/30 text-emerald-600",
      "Removal Guides": "bg-red-900/30 text-red-600",
      "Creator Safety": "bg-amber-900/30 text-amber-600",
    };
    return colors[category] || "bg-[var(--bg-2)] text-[var(--ink-2)]";
  };

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
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/articles/${post.slug}`}>
                <article className="h-full border rounded-lg p-6 hover:border-purple-600 transition-colors duration-300 cursor-pointer group" style={{ background: 'white', border: '1px solid var(--line)' }}>
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-4 line-clamp-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm border-t border-[var(--line)] pt-4" style={{ color: 'var(--ink-2)' }}>
                    <div className="flex gap-4">
                      <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="mt-4 text-sm" style={{ color: 'var(--ink-2)' }}>
                    By {post.author}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}

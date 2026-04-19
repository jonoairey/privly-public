import { Metadata } from "next";
import Link from "next/link";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { articles as coreArticles } from "@/lib/article-data";
import { leakSiteArticles } from "@/lib/article-data-leak-sites";
import { safetyArticles } from "@/lib/article-data-safety";
import { onlyfansArticles } from "@/lib/article-data-onlyfans";
import { patreonArticles } from "@/lib/article-data-patreon";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import RelatedServices from "@/components/related-services";

/** Map an article to a content cluster so RelatedServices biases its links. */
function detectCluster(slug: string, category: string): "onlyfans" | "fansly" | "dmca" | "deepfake" | "leak-sites" | "default" {
  const s = slug.toLowerCase();
  if (s.includes("deepfake")) return "deepfake";
  if (s.includes("leak-sites") || s.includes("leak-site")) return "leak-sites";
  if (s.includes("fansly")) return "fansly";
  if (s.includes("onlyfans")) return "onlyfans";
  if (s.includes("dmca")) return "dmca";
  if (category === "Legal") return "dmca";
  return "default";
}

const articles = [...coreArticles, ...leakSiteArticles, ...safetyArticles, ...onlyfansArticles, ...patreonArticles];

interface Props {
  params: Promise<{
    slug: string;
  }>;
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
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
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
              The article you're looking for doesn't exist.
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

  const currentIndex = articles.findIndex((p) => p.slug === post.slug);
  const relatedPosts = articles
    .filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        Math.abs(articles.indexOf(a) - currentIndex) -
        Math.abs(articles.indexOf(b) - currentIndex)
    )
    .slice(0, 2);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Content Protection": "bg-purple-900/30 text-[var(--accent)]",
      Legal: "bg-blue-900/30 text-blue-600",
      "AI & Security": "bg-pink-900/30 text-[var(--hot)]",
      Business: "bg-emerald-900/30 text-emerald-600",
    };
    return colors[category] || "bg-[var(--bg-2)] text-[var(--ink-2)]";
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-1 w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent)] mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Articles
          </Link>

          {/* Article Header */}
          <div className="mb-12">
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 border-b border-[var(--line)] pb-6" style={{ color: 'var(--ink-2)' }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25s4.5 11 10 11.25m0-13c5.5.252 10 4.997 10 11.25S17.5 28.5 12 28.5" />
                </svg>
                <span>{post.readTime} min read</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-invert max-w-none mb-16">
            <div className="space-y-6 leading-relaxed" style={{ color: 'var(--ink-2)' }}>
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-12 mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="rounded-xl border /40 p-5 group" style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <summary className="cursor-pointer font-semibold text-lg flex justify-between items-center gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[var(--accent)] group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                    </summary>
                    <p className="mt-4 leading-relaxed" style={{ color: 'var(--ink-2)' }}>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Divider */}
          <div className="border-t border-[var(--line)] my-12" />

          {/* Related tools / comparisons / removal guides — distributes internal link equity */}
          <RelatedServices cluster={detectCluster(post.slug, post.category)} />

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/articles/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="border rounded-lg p-6 hover:border-purple-600 transition-colors duration-300 h-full" style={{ background: 'white', border: '1px solid var(--line)' }}>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(
                        relatedPost.category
                      )}`}
                    >
                      {relatedPost.category}
                    </span>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="mb-4 line-clamp-2 text-sm" style={{ color: 'var(--ink-2)' }}>
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--ink-2)' }}>
                      <span>{new Date(relatedPost.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <MarketingFooter />

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

      {/* BlogPosting structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
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

import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Privly",
  description: "Content protection guides, legal advice, and security tips for creators and businesses.",
  openGraph: {
    title: "Blog | Privly",
    description: "Content protection guides, legal advice, and security tips for creators and businesses.",
    type: "website",
  },
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Content Protection": "bg-purple-900/30 text-purple-300",
      Legal: "bg-blue-900/30 text-blue-300",
      "AI & Security": "bg-pink-900/30 text-pink-300",
      Business: "bg-emerald-900/30 text-emerald-300",
    };
    return colors[category] || "bg-gray-800 text-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Expert insights on content protection, legal strategies, and security for creators and businesses.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="h-full bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-600 transition-colors duration-300 cursor-pointer group">
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
                  <h2 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-800 pt-4">
                    <div className="flex gap-4">
                      <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="mt-4 text-sm text-gray-500">
                    By {post.author}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

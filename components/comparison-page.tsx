import Link from "next/link";
import { CheckCircle, X, ArrowRight, Shield, Zap, DollarSign } from "lucide-react";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import RelatedServices from "@/components/related-services";
import { generateFAQSchema, generateBreadcrumbSchema, SITE_CONFIG } from "@/lib/seo";
import { APP_URL } from "@/lib/constants";

export interface ComparisonRow {
  feature: string;
  privly: string;
  competitor: string;
  privlyHas: boolean;
  competitorHas: boolean | "partial";
  highlight?: boolean;
}

export interface ComparisonFAQ {
  q: string;
  a: string;
}

export interface ComparisonPageProps {
  competitorName: string;
  slug: string; // e.g. "privly-vs-bruqi"
  h1: string;
  subheadline: string;
  summary: string; // short positioning paragraph
  competitorSummary: string; // what the competitor does well / is known for
  privlyDifferentiators: Array<{ title: string; body: string }>;
  rows: ComparisonRow[];
  faqs: ComparisonFAQ[];
  verdict: string;
  metaDescription: string;
}

function Mark({ value }: { value: boolean | "partial" }) {
  if (value === true) return <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />;
  if (value === "partial") return <span className="text-yellow-600 text-xs font-medium">Partial</span>;
  return <X className="w-5 h-5 text-[var(--mute)] flex-shrink-0" />;
}

export default function ComparisonPage(props: ComparisonPageProps) {
  const {
    competitorName,
    slug,
    h1,
    subheadline,
    summary,
    competitorSummary,
    privlyDifferentiators,
    rows,
    faqs,
    verdict,
  } = props;

  const canonical = `${SITE_CONFIG.url}/${slug}`;

  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Compare", url: `${SITE_CONFIG.url}/compare` },
    { name: `Privly vs ${competitorName}`, url: canonical },
  ]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col overflow-hidden">
      <MarketingHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative pt-32 pb-16 px-4 border-b border-[var(--line)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 text-xs font-medium mb-6">
            <Shield className="w-3 h-3" /> Head-to-head comparison
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{h1}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>{subheadline}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6">
            <h2 className="text-xl font-bold mb-2">Privly</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{summary}</p>
          </div>
          <div className="rounded-2xl border /40 p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
            <h2 className="text-xl font-bold mb-2">{competitorName}</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{competitorSummary}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Privly vs {competitorName}: feature comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[var(--line)]">
            <table className="w-full text-sm">
              <thead className="/60 border-b" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-yellow-600">Privly</th>
                  <th className="text-left px-4 py-3 font-semibold">{competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[var(--line)] ${r.highlight ? "bg-yellow-500/5" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium text-[var(--ink)]">{r.feature}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-start gap-2">
                        <Mark value={r.privlyHas} />
                        <span  style={{ color: 'var(--ink-2)' }}>{r.privly}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-start gap-2">
                        <Mark value={r.competitorHas} />
                        <span  style={{ color: 'var(--ink-2)' }}>{r.competitor}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Why creators choose Privly over {competitorName}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {privlyDifferentiators.map((d, i) => (
              <div key={i} className="rounded-2xl border /30 p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-600 flex items-center justify-center mb-4">
                  {i === 0 ? <DollarSign className="w-5 h-5" /> : i === 1 ? <Zap className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="rounded-xl border /30 p-4 group" style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                <summary className="cursor-pointer font-semibold text-base flex justify-between items-center">
                  {f.q}
                  <span className="text-yellow-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our verdict</h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--ink-2)' }}>{verdict}</p>
          <Link
            href={`${APP_URL}/auth/signup`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
          >
            Start your free 7-day trial <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-4 text-xs" style={{ color: 'var(--mute)' }}>No credit card required · Cancel anytime</p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto">
          <RelatedServices cluster="default" />
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

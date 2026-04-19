import Link from "next/link";
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import RelatedServices from "@/components/related-services";
import { generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema, SITE_CONFIG } from "@/lib/seo";
import { APP_URL } from "@/lib/constants";

export interface RemoveStep {
  name: string;
  text: string;
}

export interface RemoveFAQ {
  q: string;
  a: string;
}

export interface RemoveFromPageProps {
  platformName: string;
  slug: string; // e.g. "remove-from-telegram"
  h1: string;
  subheadline: string;
  intro: string;
  urgencyNote?: string;
  steps: RemoveStep[];
  dmcaEmail?: string;
  reportUrl?: string;
  whyPrivly: Array<{ title: string; body: string }>;
  faqs: RemoveFAQ[];
  howToTotalTime?: string; // e.g. "PT15M"
}

export default function RemoveFromPage(props: RemoveFromPageProps) {
  const {
    platformName,
    slug,
    h1,
    subheadline,
    intro,
    urgencyNote,
    steps,
    dmcaEmail,
    reportUrl,
    whyPrivly,
    faqs,
    howToTotalTime,
  } = props;

  const canonical = `${SITE_CONFIG.url}/${slug}`;

  const howToSchema = generateHowToSchema({
    name: h1,
    description: subheadline,
    totalTime: howToTotalTime,
    steps: steps.map((s) => ({ name: s.name, text: s.text, url: canonical })),
  });

  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Remove From", url: `${SITE_CONFIG.url}/remove-from` },
    { name: platformName, url: canonical },
  ]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col overflow-hidden">
      <MarketingHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-16 px-4 border-b border-[var(--line)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium mb-6">
            <Shield className="w-3 h-3" /> Content removal guide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{h1}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>{subheadline}</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-2)' }}>{intro}</p>
          {urgencyNote && (
            <div className="flex items-start gap-3 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-200">{urgencyNote}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to remove content from {platformName}</h2>
          {howToTotalTime && (
            <p className="inline-flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--ink-2)' }}>
              <Clock className="w-4 h-4" /> Estimated time: {howToTotalTime.replace("PT", "").replace("M", " minutes").replace("H", " hours ")}
            </p>
          )}
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/40 text-yellow-600 flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.name}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--ink-2)' }}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          {(dmcaEmail || reportUrl) && (
            <div className="mt-10 rounded-2xl border /40 p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
              <h3 className="text-lg font-semibold mb-3">{platformName} contact points</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--ink-2)' }}>
                {dmcaEmail && (
                  <li>
                    DMCA email: <a className="text-yellow-600 underline" href={`mailto:${dmcaEmail}`}>{dmcaEmail}</a>
                  </li>
                )}
                {reportUrl && (
                  <li>
                    Report form:{" "}
                    <a className="text-yellow-600 underline" href={reportUrl} target="_blank" rel="noopener noreferrer">
                      {reportUrl}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Let Privly handle {platformName} takedowns for you
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyPrivly.map((item, i) => (
              <div key={i} className="rounded-2xl border /30 p-6" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`${APP_URL}/auth/signup`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
            >
              Start your free 7-day trial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="rounded-xl border /30 p-4 group" style={{ background: 'white', border: '1px solid var(--line)' }}>
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

      <section className="py-12 px-4 border-t border-[var(--line)]">
        <div className="max-w-5xl mx-auto">
          <RelatedServices cluster="leak-sites" />
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

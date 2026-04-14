import Link from "next/link";
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
    <div className="min-h-screen bg-black text-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-16 px-4 border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium mb-6">
            <Shield className="w-3 h-3" /> Content removal guide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{h1}</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">{subheadline}</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">{intro}</p>
          {urgencyNote && (
            <div className="flex items-start gap-3 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
              <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-200">{urgencyNote}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 border-t border-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to remove content from {platformName}</h2>
          {howToTotalTime && (
            <p className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Clock className="w-4 h-4" /> Estimated time: {howToTotalTime.replace("PT", "").replace("M", " minutes").replace("H", " hours ")}
            </p>
          )}
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/40 text-yellow-400 flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          {(dmcaEmail || reportUrl) && (
            <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="text-lg font-semibold mb-3">{platformName} contact points</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {dmcaEmail && (
                  <li>
                    DMCA email: <a className="text-yellow-400 underline" href={`mailto:${dmcaEmail}`}>{dmcaEmail}</a>
                  </li>
                )}
                {reportUrl && (
                  <li>
                    Report form:{" "}
                    <a className="text-yellow-400 underline" href={reportUrl} target="_blank" rel="noopener noreferrer">
                      {reportUrl}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Let Privly handle {platformName} takedowns for you
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyPrivly.map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6">
                <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
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

      <section className="py-16 px-4 border-t border-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="rounded-xl border border-gray-800 bg-gray-900/30 p-4 group">
                <summary className="cursor-pointer font-semibold text-base flex justify-between items-center">
                  {f.q}
                  <span className="text-yellow-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

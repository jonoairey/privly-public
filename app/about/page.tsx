import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta } from '@/lib/seo';
import MarketingHeader from '@/components/marketing/Header';
import MarketingFooter from '@/components/marketing/Footer';
import { APP_URL } from '@/lib/constants';

export const metadata: Metadata = genMeta({
  title: 'About',
  description: 'Learn about Privly, our mission to protect creators, and our values.',
  path: '/about',
  keywords: [
    'about privly',
    'creator protection mission',
    'content protection company',
    'privacy focused',
  ],
});

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }} className="flex flex-col">
      <MarketingHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
              We Built Privly Because Creators Deserve Better
            </h1>
            <p className="text-xl" style={{ color: 'var(--ink-2)' }}>
              Content creators work hard. Their livelihoods shouldn't be destroyed by leaks and piracy.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4" style={{ background: 'var(--bg-2)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-2)' }}>
              Creators on OnlyFans, Fansly, Patreon, and other platforms lose billions every year to content leaks and piracy.
              The current systems for fighting back are broken. They're slow, expensive, and inaccessible to most creators.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--ink-2)' }}>
              We built Privly to fix this. We wanted to create a tool that:
            </p>
            <ul className="space-y-3 text-lg" style={{ color: 'var(--ink-2)' }}>
              <li className="flex gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>Automatically detects leaks across 500+ platforms</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>Removes your content without you having to lift a finger</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>Costs just $49/month instead of thousands</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>Protects your livelihood and your privacy</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-lg p-8 border" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  Your data is your own. We never sell information, we don't track you across the web, and we use enterprise-grade encryption
                  to keep everything safe. Privacy isn't just a feature. It's our foundation.
                </p>
              </div>

              <div className="rounded-lg p-8 border" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold mb-4">Creator-Focused</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  We're built by creators, for creators. We understand your challenges because we live them. Every feature we build
                  is designed to solve real problems for real creators.
                </p>
              </div>

              <div className="rounded-lg p-8 border" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4">Transparent</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  No surprises. No hidden fees. No dark patterns. We tell you exactly what we do, how we do it, and what it costs.
                  You deserve clarity from the tools you trust.
                </p>
              </div>

              <div className="rounded-lg p-8 border" style={{ background: 'white', border: '1px solid var(--line)' }}>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Fast & Relentless</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  Speed matters. When your content is stolen, every second counts. We scan 24/7, submit takedowns in minutes,
                  and follow up automatically until your content is gone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4" style={{ background: 'var(--bg-2)' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                  1.7B
                </div>
                <p  style={{ color: 'var(--ink-2)' }}>Estimated annual loss to piracy</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                  47%
                </div>
                <p  style={{ color: 'var(--ink-2)' }}>Of creators affected by leaks</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                  96%
                </div>
                <p  style={{ color: 'var(--ink-2)' }}>DMCA takedown success rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Privly?</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-xl font-bold mb-2">Actually Works</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  We don't just detect leaks, we remove them. Our DMCA automation has a 96% success rate across major platforms.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-xl font-bold mb-2">Always On</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  Your content is being scanned 24/7. Most leaks are caught within 2 hours. You'll get an email alert before most people even know it happened.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-xl font-bold mb-2">Affordable</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  $49/month. That's it. Professional DMCA services cost thousands. We made real protection affordable for creators, with dedicated human support included.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-xl font-bold mb-2">Legally Sound</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  Our DMCA notices are generated by legal experts and optimized for each platform. Your takedowns stick.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-xl font-bold mb-2">Real Human Support</h3>
                <p  style={{ color: 'var(--ink-2)' }}>
                  When you need help, you get a real person, not a chatbot. Our support team handles everything from takedown questions to account setup. Priority email support, monthly check-ins, and a team that actually cares about your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions about Privly?</h2>
            <p className="mb-8 text-lg" style={{ color: 'var(--ink-2)' }}>
              Reach out to our team. We'd love to talk about how we can protect your content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-accent"
              >
                Get In Touch
              </Link>
              <Link
                href={`${APP_URL}/auth/signup`}
                className="btn btn-ghost" style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

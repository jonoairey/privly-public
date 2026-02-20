'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { PLAN, STATS, APP_URL } from '@/lib/constants';
import {
  Shield,
  Zap,
  Search,
  Lock,
  Eye,
  Droplet,
  CheckCircle,
  Star,
  ChevronDown,
  ArrowRight,
  FileText,
  Microscope,
  Cpu,
  AlertTriangle,
  HeadphonesIcon,
} from 'lucide-react';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal, .stagger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqItems = [
    {
      question: "How does Privly's forensic watermarking work?",
      answer:
        'Our proprietary technology embeds invisible, traceable identifiers into your content. When leaks occur, these watermarks reveal exactly where and when the content was shared, pinpointing the source with forensic precision.',
    },
    {
      question: 'Can Privly remove content from all platforms?',
      answer:
        'We scan across 100+ platforms and the broader web using AI-powered detection, and have a 96% takedown success rate. Our automated DMCA filing system ensures rapid removal from virtually anywhere your content appears.',
    },
    {
      question: 'How fast can you detect leaks?',
      answer:
        'Our AI-powered detection system typically identifies unauthorized content within 2 hours of posting. The faster we detect, the faster we can take action.',
    },
    {
      question: 'Is my content stored securely?',
      answer:
        'Yes. Our Content Vault uses enterprise-grade AES-256 encryption. All content is encrypted at rest and in transit, with strict access controls ensuring only you can access your files.',
    },
    {
      question: "What happens if DMCA doesn't work?",
      answer:
        'We have a multi-layered enforcement strategy. Beyond DMCA, we pursue legal action, work with law enforcement, and use technical takedown methods. Our average resolution time is 48 hours.',
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: `Yes. We're so confident in our platform that we offer a ${PLAN.guarantee} guarantee. If you're not satisfied, we refund your full subscription. No questions asked.`,
    },
  ];

  // FAQ structured data for Google rich results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="hero-gradient absolute inset-0" />

        {/* Floating Orbs */}
        <div className="absolute top-20 right-[5%] w-[300px] h-[300px] orb orb-purple opacity-30" />
        <div className="absolute bottom-0 left-[5%] w-[250px] h-[250px] orb orb-pink opacity-20" />

        <div className="relative max-w-7xl mx-auto">
          {/* Hero Headline */}
          <div className="text-center mb-12 reveal">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white block">We don't just remove your leaks.</span>
              <span className="text-gradient-animated block">We find who's leaking.</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Forensic watermarking meets automated enforcement. Catch leakers. Protect your content. Get paid for what you create.
            </p>

            <div className="shimmer-line w-16 h-1 mx-auto mb-8" />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={APP_URL}
                className="btn-glow px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-2xl transition-all"
              >
                Get Started Now
              </a>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto reveal">
            <div className="glass rounded-xl p-6 text-center backdrop-blur-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-gradient mb-2">{STATS.platformsMonitored}</div>
              <p className="text-sm text-gray-400">Platforms Monitored</p>
            </div>
            <div className="glass rounded-xl p-6 text-center backdrop-blur-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-gradient mb-2">{STATS.takedownSuccessRate}</div>
              <p className="text-sm text-gray-400">Success Rate</p>
            </div>
            <div className="glass rounded-xl p-6 text-center backdrop-blur-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-gradient mb-2">{STATS.avgDetectionTime}</div>
              <p className="text-sm text-gray-400">Avg Detection Time</p>
            </div>
            <div className="glass rounded-xl p-6 text-center backdrop-blur-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-gradient mb-2">{STATS.leakReduction}</div>
              <p className="text-sm text-gray-400">Leak Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION: Whack-a-mole vs Privly */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Whack-a-mole</span> vs Privly
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Most services react after leaks happen. We prevent them, catch them, and obliterate them.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Other Services */}
            <div className="rounded-xl p-8 border border-red-900/40 bg-gradient-to-br from-red-950/30 to-red-900/10 reveal">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Other Services</h3>
              <div className="space-y-4">
                {[
                  'Content leaks & you find out later',
                  'Manual DMCA notices (if you remember)',
                  'Takedowns take weeks or months',
                  'No forensic proof of leaker',
                  'Recurring leaks from same source',
                  'Reactive, never proactive',
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-900/50 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold text-sm">{idx + 1}</span>
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privly */}
            <div className="rounded-xl p-8 border-gradient-animated bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-2 border-transparent relative reveal">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Privly</h3>
                <div className="space-y-4">
                  {[
                    'Watermark embedded before sharing',
                    'Automatic leak detection < 2 hours',
                    'Instant automated takedowns',
                    'Know exactly who leaked your content',
                    'Block repeat offenders permanently',
                    'Dedicated human support for anything',
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Four simple steps to complete content protection.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {[
              {
                number: '01',
                icon: Shield,
                title: 'Upload & Watermark',
                description: 'Add your content to Privly. Forensic watermarks are embedded invisibly.',
              },
              {
                number: '02',
                icon: Share2,
                title: 'Share Safely',
                description: 'Distribute to fans, clients, or subscribers with full tracking enabled.',
              },
              {
                number: '03',
                icon: Search,
                title: 'We Monitor & Find',
                description: 'Our AI scans 100+ platforms around the clock for unauthorized copies.',
              },
              {
                number: '04',
                icon: Zap,
                title: 'Auto-Takedown',
                description: 'DMCA notices filed instantly. Content removed in hours, not weeks.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glow-card glass rounded-xl p-8 border border-purple-500/20 relative group reveal"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-20 group-hover:opacity-30 transition-all" />
                  <div className="relative">
                    <div className="text-5xl font-black text-gradient-animated mb-4">{item.number}</div>
                    <Icon className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Everything you need to protect, detect, and enforce your content rights.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {[
              {
                icon: Droplet,
                title: 'Forensic Watermarking',
                description: 'Invisible, traceable identifiers embedded in every piece of content.',
              },
              {
                icon: Microscope,
                title: 'Leak Source Tracing',
                description: 'Pinpoint exactly who leaked your content, when, and where.',
              },
              {
                icon: Lock,
                title: 'Content Vault',
                description: 'AES-256 encrypted storage with strict access controls. Your content, protected.',
              },
              {
                icon: Eye,
                title: 'Leak Scanning',
                description: 'Monitor 100+ platforms continuously for unauthorized copies.',
              },
              {
                icon: FileText,
                title: 'DMCA Automation',
                description: 'Automated takedown notices filed instantly across all platforms.',
              },
              {
                icon: Cpu,
                title: 'Impersonation & AI Detection',
                description: 'Detect fake accounts, AI-generated content, and unauthorized use of your likeness.',
              },
              {
                icon: HeadphonesIcon,
                title: 'Dedicated Human Support',
                description: 'Real people backing you up. Our team helps with takedowns, questions, and anything you need.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glow-card glass rounded-xl p-8 border border-purple-500/20 group reveal"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-center text-gray-400 mb-12">
            No surprises. No hidden fees. Full access to everything.
          </p>

          <div className="relative">
            <div className="border-gradient-animated absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-950/30 to-pink-950/30 border-2 border-transparent" />
            <div className="relative bg-black rounded-2xl p-8 sm:p-12 border border-purple-500/20">
              {/* Best Value Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="pulse-badge inline-block">
                  <div className="bg-black border border-purple-500/50 px-4 py-1 rounded-full text-sm font-semibold text-purple-300">
                    BEST VALUE
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">{PLAN.name}</h3>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-gradient-animated">{PLAN.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Billed monthly. Cancel anytime.</p>
              </div>

              <div className="space-y-4 mb-8">
                {PLAN.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={APP_URL}
                className="btn-glow w-full block text-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-2xl transition-all"
              >
                Get Started Now <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </a>

              <div className="mt-6 flex flex-col items-center gap-2">
                <p className="text-center text-sm text-purple-300 font-semibold">{PLAN.guarantee}</p>
                <p className="text-center text-sm text-gray-400">Cancel anytime. No contracts, no hidden fees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 reveal">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">What Creators Say</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Join thousands of creators protecting their livelihood.
          </p>

          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              {
                stars: 5,
                quote:
                  'Privly caught a leak of my exclusive content within 90 minutes. It was removed from 47 sites in 48 hours. Game-changer.',
                author: 'Sarah M.',
                role: 'OnlyFans Creator',
              },
              {
                stars: 5,
                quote:
                  'The watermarking is completely invisible, but it proved who leaked my course to 10,000 pirate sites. Worth every penny.',
                author: 'James P.',
                role: 'Online Educator',
              },
              {
                stars: 5,
                quote:
                  "We recovered $120k in lost revenue through Privly's enforcement actions in just 3 months. Recommend to every creator.",
                author: 'Maya & Alex',
                role: 'Podcast Producers',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="glass glow-card rounded-xl p-8 border border-purple-500/20 reveal">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-400 mb-12">
            Find answers to common questions about Privly.
          </p>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-xl border border-purple-500/20 overflow-hidden transition-all reveal"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-500/10 transition-all"
                >
                  <h3 className="text-lg font-semibold text-left text-gradient">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 border-t border-purple-500/10 bg-purple-950/20">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute top-10 right-[10%] w-[200px] h-[200px] orb orb-purple opacity-25" />
        <div className="absolute bottom-10 left-[10%] w-[180px] h-[180px] orb orb-pink opacity-20" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 reveal">
            Stop losing money to <span className="text-gradient">content theft</span>.
          </h2>
          <p className="text-xl text-gray-300 mb-10 reveal">
            Join creators who are taking back control of their content and their revenue.
          </p>
          <a
            href={APP_URL}
            className="btn-glow inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all reveal"
          >
            Get Started Now <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </a>
          <p className="text-gray-400 text-sm mt-4 reveal">30-day money-back guarantee. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Placeholder Share2 icon since it's not in lucide-react
const Share2 = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C9.589 12.438 10.997 12 12.498 12c.828 0 1.635.148 2.4.43m0 0a9.969 9.969 0 011.594 3.957m0 0A8.025 8.025 0 0112.498 20H4a8 8 0 008-8c0-.468-.054-.926-.16-1.37m-.472-4.425A9.973 9.973 0 0112.498 4c4.446 0 8.268 2.943 9.542 7m-9.042 9.75c.292.18.517.443.683.75H4a8 8 0 01-8-8c0-3.192 1.864-5.947 4.56-7.409"
    />
  </svg>
);

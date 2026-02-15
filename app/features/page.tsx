import Header from '@/components/header';
import Footer from '@/components/footer';
import { generateMetadata as genMeta } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';
import {
  Fingerprint,
  Target,
  Lock,
  Zap,
  Scale,
  AlertCircle,
  CheckCircle,
  Check,
  X,
  ArrowRight,
  HeadphonesIcon,
} from 'lucide-react';

export const metadata = genMeta({
  title: 'Features - Privly',
  description: 'Discover Privly&apos;s advanced content protection features: forensic watermarking, leak source tracing, 24/7 leak scanning, and more.',
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute inset-0">
          <div className="orb orb-purple" style={{ top: '10%', right: '10%', width: '400px', height: '400px' }}></div>
          <div className="orb orb-pink" style={{ bottom: '0%', left: '5%', width: '500px', height: '500px' }}></div>
          <div className="hero-gradient absolute inset-0"></div>
          <div className="grid-pattern absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            The Only Content Protection That{' '}
            <span className="text-gradient">Finds Your Leakers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Invisible forensic watermarking + 24/7 leak scanning + automated DMCA takedowns.
            Protect your work. Identify leakers. Reclaim control.
          </p>
          <a href={APP_URL} className="btn-glow px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all">
            Start Protecting Now
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <div className="shimmer-line"></div>

      {/* HERO FEATURES - 2 LARGE SHOWCASE CARDS */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Invisible Forensic Watermarking */}
            <div className="relative group">
              {/* Blurred Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/20 rounded-2xl blur-3xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>

              <div className="border-gradient-animated rounded-2xl p-8 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <Fingerprint size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Invisible Forensic Watermarking</h2>
                </div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Embed unique identifiers in every piece of content you share. Our watermarks survive compression, format conversion, and editing—completely invisible to the human eye.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="glow-card rounded-lg p-4 bg-white/5 border border-white/10 hover:border-purple-500/50">
                    <h3 className="font-semibold text-purple-300 mb-1">Per-Subscriber Encoding</h3>
                    <p className="text-sm text-gray-400">Each subscriber receives a unique watermark</p>
                  </div>
                  <div className="glow-card rounded-lg p-4 bg-white/5 border border-white/10 hover:border-purple-500/50">
                    <h3 className="font-semibold text-purple-300 mb-1">Survives All Editing</h3>
                    <p className="text-sm text-gray-400">Watermark persists through any transformation</p>
                  </div>
                  <div className="glow-card rounded-lg p-4 bg-white/5 border border-white/10 hover:border-purple-500/50">
                    <h3 className="font-semibold text-purple-300 mb-1">Completely Invisible</h3>
                    <p className="text-sm text-gray-400">Zero quality loss, undetectable to users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Leak Source Tracing */}
            <div className="relative group">
              {/* Blurred Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-transparent to-purple-500/20 rounded-2xl blur-3xl -z-10 group-hover:blur-2xl transition-all duration-300"></div>

              <div className="border-gradient-animated rounded-2xl p-8 bg-gradient-to-br from-black/50 to-black/20 backdrop-blur-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center">
                    <Target size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Leak Source Tracing</h2>
                </div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  When your content appears where it shouldn&apos;t, instantly identify which subscriber leaked it. Get actionable intelligence to stop bad actors.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="glow-card rounded-lg p-4 bg-white/5 border border-white/10 hover:border-pink-500/50">
                    <h3 className="font-semibold text-pink-300 mb-1">Subscriber Identification</h3>
                    <p className="text-sm text-gray-400">Know exactly who leaked your content</p>
                  </div>
                  <div className="glow-card rounded-lg p-4 bg-white/5 border border-white/10 hover:border-pink-500/50">
                    <h3 className="font-semibold text-pink-300 mb-1">Leaker Profiles</h3>
                    <p className="text-sm text-gray-400">Track patterns and identify repeat offenders</p>
                  </div>
                  <div className="glow-card rounded-lg p-4 bg-white/5 border border-white/10 hover:border-pink-500/50">
                    <h3 className="font-semibold text-pink-300 mb-1">One-Click Block</h3>
                    <p className="text-sm text-gray-400">Instantly revoke access from problematic users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shimmer-line"></div>

      {/* STANDARD FEATURES GRID - 2x2 */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Complete Protection Suite</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Vault */}
            <div className="glow-card glass rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Vault</h3>
              <p className="text-gray-400 mb-6">
                Timestamped proof of ownership for all your content. Establish irrefutable evidence of creation date and authorship for legal proceedings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Blockchain-verified timestamps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Legal admissibility documentation</span>
                </li>
              </ul>
            </div>

            {/* 24/7 Leak Scanning */}
            <div className="glow-card glass rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Leak Scanning</h3>
              <p className="text-gray-400 mb-6">
                Continuous monitoring across 500+ platforms using AI-powered matching. Spot unauthorized copies instantly, even with heavy modifications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Real-time leak detection alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">AI similarity matching engine</span>
                </li>
              </ul>
            </div>

            {/* DMCA Automation */}
            <div className="glow-card glass rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DMCA Automation</h3>
              <p className="text-gray-400 mb-6">
                Automated takedown notices with 96% success rate. Let Privly handle the legal hassle—we file DMCA claims on your behalf instantly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Auto-filed DMCA takedowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">96% removal success rate</span>
                </li>
              </ul>
            </div>

            {/* Deepfake Detection */}
            <div className="glow-card glass rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertCircle size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Deepfake Detection</h3>
              <p className="text-gray-400 mb-6">
                AI-powered detection of synthetic and manipulated media. Protect against deepfakes and detect when your face/voice is misused.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Synthetic media detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Facial recognition monitoring</span>
                </li>
              </ul>
            </div>

            {/* Dedicated Human Support */}
            <div className="glow-card glass rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 group md:col-span-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeadphonesIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dedicated Human Support</h3>
              <p className="text-gray-400 mb-6">
                Real people, not chatbots. Our support team handles everything — from account setup to complex takedown situations. Every creator gets access to dedicated human support, no matter what.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Real human support for any question or issue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Priority email response within 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="shimmer-line"></div>

      {/* COMPARISON TABLE */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Privly vs The Competition</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">See how we stack up against other content protection services</p>

          <div className="glass rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-white/20 bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-300">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">
                      <div className="flex flex-col items-center">
                        <span className="text-gradient font-bold text-lg">Privly</span>
                        <span className="text-xs text-gray-400 font-normal mt-1">$49/mo</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-400">
                      <div className="flex flex-col items-center">
                        <span>Others</span>
                        <span className="text-xs text-gray-500 font-normal mt-1">$109-$324/mo</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">Forensic Watermarking</td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-green-500 font-bold" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X size={24} className="mx-auto text-gray-500" />
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">Leak Source Tracing</td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-green-500 font-bold" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X size={24} className="mx-auto text-gray-500" />
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">24/7 Leak Scanning</td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-green-500 font-bold" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-gray-600" />
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">DMCA Takedowns</td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-green-500 font-bold" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-gray-600" />
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">Deepfake Detection</td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-green-500 font-bold" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X size={24} className="mx-auto text-gray-500" />
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">Content Vault</td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-green-500 font-bold" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X size={24} className="mx-auto text-gray-500" />
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">Dedicated Human Support</td>
                    <td className="px-6 py-4 text-center">
                      <Check size={24} className="mx-auto text-green-500 font-bold" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X size={24} className="mx-auto text-gray-500" />
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors bg-white/5">
                    <td className="px-6 py-4 font-bold text-lg">Starting Price</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-400 font-bold text-xl">$49/mo</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400 font-bold text-xl">$109-$324/mo</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-8">
            * Pricing as of February 2026. Features and pricing subject to change.
          </p>
        </div>
      </section>

      <div className="shimmer-line"></div>

      {/* CTA SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        {/* Background Orbs */}
        <div className="absolute inset-0">
          <div className="orb orb-purple" style={{ top: '20%', left: '5%', width: '350px', height: '350px' }}></div>
          <div className="orb orb-pink" style={{ bottom: '10%', right: '8%', width: '400px', height: '400px' }}></div>
          <div className="hero-gradient absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Take Back Control of{' '}
            <span className="text-gradient">Your Content</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join creators, studios, and enterprises protecting their work with Privly&apos;s
            industry-leading forensic watermarking and leak detection technology.
          </p>

          <div className="flex justify-center">
            <a href={APP_URL} className="btn-glow px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all">
              Get Started Now
              <ArrowRight size={20} />
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

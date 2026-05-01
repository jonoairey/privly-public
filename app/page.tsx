import MarketingHeader from '@/components/marketing/Header'
import HeroStory from '@/components/marketing/hero/HeroStory'
import WeGetIt from '@/components/marketing/WeGetIt'
import HowItWorks from '@/components/marketing/HowItWorks'
import Stories from '@/components/marketing/Stories'
import AIPlusHuman from '@/components/marketing/AIPlusHuman'
import Features from '@/components/marketing/Features'
import Compare from '@/components/marketing/Compare'
import Privacy from '@/components/marketing/Privacy'
import Pricing from '@/components/marketing/Pricing'
import FAQ from '@/components/marketing/FAQ'
import Trust from '@/components/marketing/Trust'
import FinalCTA from '@/components/marketing/FinalCTA'
import MarketingFooter from '@/components/marketing/Footer'
import FreeScanTeaser from '@/components/articles/FreeScanTeaser'
import ProductUpdateBanner from '@/components/marketing/ProductUpdateBanner'
import FloatingBrandLogos from '@/components/marketing/shared/FloatingBrandLogos'
import { FAQ_ITEMS } from '@/components/marketing/shared/data'
import { generateFAQSchema } from '@/lib/seo'

export default function Home() {
  const faqSchema = generateFAQSchema(
    FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))
  )

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MarketingHeader />
      <HeroStory />
      <ProductUpdateBanner />
      <section style={{ padding: '40px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Floating brand logos — drift in the empty space beside the panel
            on wide viewports, like the FinalCTA pattern. */}
        <FloatingBrandLogos variant="teaser" />
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '0 28px',
            position: 'relative',
          }}
        >
          <FreeScanTeaser
            articleSlug="home"
            defaultPlatform="onlyfans"
            placement="top"
            headingOverride="Worried your content is on these sites?"
            subheadingOverride="Type your username — we'll start scanning the moment you create your free trial. No card required."
          />
        </div>
      </section>
      <WeGetIt />
      <HowItWorks />
      <Stories />
      <AIPlusHuman />
      <Features />
      <Compare />
      <Privacy />
      <Pricing />
      <FAQ />
      <Trust />
      <FinalCTA />
      <MarketingFooter />
    </div>
  )
}

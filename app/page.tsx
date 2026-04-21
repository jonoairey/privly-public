import MarketingHeader from '@/components/marketing/Header'
import HeroStory from '@/components/marketing/hero/HeroStory'
import Marquee from '@/components/marketing/Marquee'
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
      <Marquee />
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

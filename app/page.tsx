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

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}>
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

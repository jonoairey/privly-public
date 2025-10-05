import { generateFAQSchema } from '@/lib/seo'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // FAQ data matching homepage FAQs
  const faqs = [
    {
      question: "How do you remove my data without my passwords?",
      answer: "We don't need your passwords. Data brokers are legally required to honor removal requests under privacy laws like CCPA and GDPR. Our AI submits these requests automatically using your name and contact information, following each site's specific removal process. We never ask for passwords, logins, or access to your accounts. We work entirely through public removal processes."
    },
    {
      question: "What if a site refuses to remove my information?",
      answer: "Our AI automatically escalates stubborn cases to our human privacy experts. We have established relationships with major data brokers and know exactly how to handle non-compliant sites. In extreme cases, we involve legal channels. We monitor 200+ data broker sites continuously and our automation system handles the removal process across multiple platforms."
    },
    {
      question: "How do I know you're not collecting my data?",
      answer: "We operate under a strict zero data retention policy. We only collect the minimum information needed for removal requests and delete it immediately after processing. Our entire business model is based on protecting privacy, not collecting data. We undergo regular third-party security audits and maintain SOC 2 compliance. Our privacy policy is written in plain English."
    },
    {
      question: "What's the difference between you and just googling myself?",
      answer: "Googling yourself only shows a tiny fraction of what's out there. Data brokers operate hundreds of sites that don't appear in search results. Our AI monitors 200+ sites continuously, including data brokers and people-search sites, with automated removal workflows. Manual searching finds about 10% of your data exposures. Our AI finds and removes the other 90% you'd never discover on your own."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most removals happen within 7-14 days. Some sites respond in minutes, others take up to 30 days. Our AI continuously monitors and re-submits requests until successful. You'll receive weekly reports showing progress. Our fastest removal was completed in just 23 minutes. Emergency cases like stalking or harassment get priority treatment."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, absolutely. Cancel anytime with no penalties. However, remember that data reappears within 24 hours without continuous monitoring. We recommend keeping protection active for ongoing privacy. Try us risk-free for 30 days. If you're not satisfied, we'll refund your payment completely."
    }
  ]

  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      {children}
    </>
  )
}

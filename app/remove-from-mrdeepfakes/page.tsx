import { Metadata } from "next";
import RemoveFromPage from "@/components/remove-from-page";

export const metadata: Metadata = {
  title: "How to Remove Deepfakes from MrDeepFakes | 2026 Guide",
  description:
    "Step-by-step guide to remove deepfake content from MrDeepFakes. DMCA process, non-consensual intimate image laws, and automated takedown options.",
  keywords: [
    "remove from mrdeepfakes",
    "mrdeepfakes takedown",
    "mrdeepfakes dmca",
    "deepfake removal",
    "non consensual deepfake removal",
    "deepfake takedown request",
  ],
  alternates: { canonical: "https://www.useprivly.com/remove-from-mrdeepfakes" },
  openGraph: {
    title: "How to Remove Deepfakes from MrDeepFakes",
    description: "Step-by-step guide for removing deepfake content from MrDeepFakes.",
    url: "https://www.useprivly.com/remove-from-mrdeepfakes",
    type: "article",
  },
};

export default function Page() {
  return (
    <RemoveFromPage
      platformName="MrDeepFakes"
      slug="remove-from-mrdeepfakes"
      h1="How to Remove Deepfakes from MrDeepFakes"
      subheadline="Step-by-step takedown guide for creators and individuals whose likeness appears in non-consensual deepfake content on MrDeepFakes."
      howToTotalTime="PT25M"
      intro="MrDeepFakes is one of the largest repositories of non-consensual AI-generated deepfake content, targeting real public figures and private individuals. The site has an advertised takedown process, and multiple jurisdictions (US, UK, Australia, EU) now treat non-consensual deepfakes as illegal regardless of copyright status. Here's how to act."
      urgencyNote="Deepfake content can spread to mirror sites within hours. File the MrDeepFakes takedown, the Google de-index request, the hosting provider report, and where applicable a police report — all on the same day."
      steps={[
        {
          name: "Document every MrDeepFakes URL",
          text: "Search the site (and known mirrors) for your name or any identifying keyword. Record every URL where deepfake content of you appears. Screenshot the page and the uploader's account.",
        },
        {
          name: "File the official takedown request",
          text: "Submit MrDeepFakes' takedown form, typically found in the site footer. Include: your identity confirmation, the specific URLs, and a statement that the content is a non-consensual deepfake of you. If the form is unreliable, email the DMCA contact directly with the same information.",
        },
        {
          name: "File under non-consensual intimate image laws",
          text: "Depending on your jurisdiction, non-consensual deepfakes may be illegal (UK: Online Safety Act, USA: state-level NCII laws, Australia: eSafety Commissioner). File a report with the relevant regulator — they have statutory power to demand removal.",
        },
        {
          name: "File with the eSafety Commissioner (AU) or equivalent",
          text: "Australia's eSafety Commissioner can issue takedown notices for non-consensual intimate imagery including deepfakes, with legal teeth. UK citizens can report to the Revenge Porn Helpline. US citizens can use the Cyber Civil Rights Initiative's takedown guide.",
        },
        {
          name: "File Google de-indexing via explicit-content tool",
          text: "Use Google's non-consensual intimate imagery removal tool (support.google.com/websearch/answer/9116649) to de-index the URLs. This is specifically designed for deepfake and intimate-image removal and processes faster than a standard DMCA.",
        },
        {
          name: "Contact the hosting provider",
          text: "Look up MrDeepFakes' hosting provider via WHOIS. Many hosts have explicit policies against non-consensual intimate imagery and will act on a direct report faster than the site operator.",
        },
        {
          name: "Consider legal counsel",
          text: "Some jurisdictions allow civil damages for non-consensual deepfakes. A lawyer can issue cease-and-desist notices and coordinate criminal reports where laws apply. Privly partners can assist with referrals.",
        },
      ]}
      whyPrivly={[
        {
          title: "Deepfake detection included",
          body: "Privly's AI detects deepfake and face-swap content on MrDeepFakes and mirrors, flagging the uploader account and all associated URLs.",
        },
        {
          title: "Parallel takedown filings",
          body: "One click sends the takedown request to MrDeepFakes, the host, Google's explicit-content tool, and the relevant regulator — all at once.",
        },
        {
          title: "Regulator-ready evidence package",
          body: "Every filing bundles evidence in the format required by the eSafety Commissioner, Revenge Porn Helpline, and CCRI — ready to escalate if the site refuses.",
        },
      ]}
      faqs={[
        {
          q: "Is a deepfake illegal?",
          a: "In many jurisdictions, yes. Non-consensual intimate deepfakes are explicitly criminalized under UK Online Safety Act, several US states, Australian federal law, and EU member-state laws. Check your jurisdiction or consult a lawyer.",
        },
        {
          q: "Does MrDeepFakes actually process takedowns?",
          a: "The site advertises a takedown form. Processing speed and success varies. Pairing the on-site request with a regulator report (eSafety, Revenge Porn Helpline) and Google explicit-content removal significantly improves outcomes.",
        },
        {
          q: "Can Privly detect deepfakes of me before they spread?",
          a: "Yes. Privly runs AI face matching across known deepfake repositories and flags new content within hours of upload — before it spreads to mirror sites.",
        },
        {
          q: "Do I have to use my real name to file?",
          a: "You have to identify yourself as the person depicted, but Privly files as your authorized agent so your legal name and address aren't exposed on the public takedown record.",
        },
        {
          q: "What if the deepfake content stays up after the takedown?",
          a: "Escalate to the hosting provider, the payment/ad network, Google de-indexing, and the relevant regulator. Most persistent cases resolve once the hosting provider is contacted.",
        },
        {
          q: "Is this just for public figures?",
          a: "No. Regulators explicitly cover private individuals. Non-consensual deepfakes are a serious crime in most major jurisdictions regardless of the subject's public profile.",
        },
      ]}
    />
  );
}

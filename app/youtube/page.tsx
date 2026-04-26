import { Metadata } from 'next';
import PlatformPageShell, { type PlatformPageConfig } from '@/components/marketing/PlatformPageShell';

export const metadata: Metadata = {
  title: 'YouTube Content Protection | DMCA & Reupload Removal | Privly',
  description:
    'Protect your YouTube videos from reuploads, channel theft, and AI-generated derivatives. Automated scanning across 500+ sites, instant DMCA takedowns, and Content ID complementary monitoring.',
  keywords: [
    'youtube content protection', 'youtube dmca', 'youtube reupload removal',
    'youtube channel theft', 'youtube content id', 'youtube copyright takedown',
    'remove youtube videos', 'youtube creator protection', 'youtube video theft',
  ],
  openGraph: {
    title: 'YouTube Content Protection — Stop Reuploads & Channel Theft | Privly',
    description: 'Automated content protection for YouTube creators. Continuous monitoring, multi-target DMCAs, complementary to Content ID. $49/month.',
    type: 'website',
    url: 'https://www.useprivly.com/youtube',
  },
  alternates: { canonical: 'https://www.useprivly.com/youtube' },
};

const config: PlatformPageConfig = {
  slug: 'youtube',
  platformName: 'YouTube',
  metaTitle: 'YouTube Content Protection',
  metaDescription:
    'Automated content protection, multi-target DMCAs, and channel-theft response for YouTube creators.',
  metaKeywords: ['youtube content protection', 'youtube dmca'],
  heroBadge: 'Built for YouTube Creators',
  heroEyebrow: 'Complementary to YouTube Content ID',
  heroHeadline: 'from reuploads, channel theft, and off-platform redistribution.',
  heroSubcopy:
    'YouTube has Content ID for big creators, but most channels are too small to qualify and most leaks land off-YouTube anyway. Privly catches reuploads on tube sites, leak aggregators, and Telegram channels — plus impersonator-channel reports through YouTube\'s correct flow.',
  stats: [
    { value: '500+', label: 'Sites monitored' },
    { value: '96%', label: 'Takedown success rate' },
    { value: '<2hrs', label: 'Average detection time' },
    { value: '24/7', label: 'Continuous scanning' },
  ],
  problemTitle: 'Where YouTube content actually gets stolen',
  problemBlurb:
    'Content ID handles part of the YouTube-on-YouTube problem. It doesn\'t handle the part where your content lives off YouTube — and that\'s where most theft actually happens.',
  problemPillars: [
    { icon: 'alert', title: 'Off-YouTube reuploads', body: 'Your videos get downloaded and reuploaded to tube sites, leak aggregators, Telegram channels, and other platforms. Content ID can\'t see any of it.' },
    { icon: 'users', title: 'Impersonator channels', body: 'Fake YouTube channels using your name, thumbnails, and content style. They mislead your audience and damage trust.' },
    { icon: 'eye', title: 'AI-generated derivatives', body: 'Deepfakes and AI-clones of your videos appear on dedicated AI sites. Standard DMCA helps but the takedown channels are different.' },
  ],
  howItWorks: [
    { title: 'Upload & fingerprint', description: 'Add your YouTube videos to Privly\'s vault. We fingerprint each video for cross-platform matching.' },
    { title: 'Continuous off-YouTube scanning', description: '500+ destinations monitored 24/7 — tube sites, leak aggregators, Telegram, AI-deepfake hosts, image-aggregator sites where thumbnails get stolen.' },
    { title: 'Multi-target DMCA filing', description: 'When a reupload is found, we file simultaneously with the destination, the host, and Google de-indexing — typically resolved within 76 hours.' },
    { title: 'Channel impersonation reports', description: 'Fake YouTube channels using your branding get reported through YouTube\'s impersonation flow with collected evidence.' },
  ],
  features: [
    { icon: 'search', title: 'YouTube + cross-platform scanning', description: 'Continuous monitoring of off-YouTube destinations where reuploads land — tube sites, leak aggregators, Telegram channels.' },
    { icon: 'users', title: 'Impersonator channel takedowns', description: 'Fake YouTube channels using your name flagged within 2 hours and reported via YouTube\'s correct channel.' },
    { icon: 'file', title: 'Multi-target DMCA filing', description: 'Simultaneous filings to destination platforms, hosts, CDNs, and Google — not in sequence.' },
    { icon: 'fingerprint', title: 'Video fingerprinting', description: 'Catches reuploads even when cropped, re-encoded, watermarked over, or stitched into compilations.' },
    { icon: 'eye', title: 'Deepfake detection', description: 'AI-powered monitoring flags deepfakes and AI-generated derivatives using your YouTube content.' },
    { icon: 'globe', title: 'Google de-indexing', description: 'Reupload URLs submitted to Google for delisting — kills the search-discovery path quickly.' },
    { icon: 'lock', title: 'Content vault', description: 'Securely store and fingerprint your originals. Provable creation timestamps strengthen DMCA disputes.' },
    { icon: 'check', title: 'Complementary to Content ID', description: 'Content ID handles YouTube-on-YouTube; Privly handles everywhere else. We\'re built to work alongside, not replace, Content ID for creators who have it.' },
  ],
  comparison: {
    withoutItems: [
      'Reuploads to tube sites and aggregators go unnoticed',
      'Content ID only sees YouTube; off-platform is invisible',
      'Manual DMCA filing takes 10-20 hours/week',
      'Impersonator channels stay up for weeks',
      'AI-generated derivatives spread without detection',
      'No way to track which destinations need takedowns',
    ],
    withItems: [
      'Off-YouTube reuploads detected within hours',
      'Cross-platform coverage Content ID can\'t reach',
      'DMCAs filed instantly with zero manual work',
      'Impersonator channels flagged within 2 hours',
      'AI deepfake detection across the leak ecosystem',
      'Full visibility into where your content has spread',
    ],
  },
  faqs: [
    { q: 'How is Privly different from YouTube\'s Content ID?', a: 'Content ID is YouTube\'s internal system that scans uploads against rights-holder fingerprints. It only works on YouTube itself, requires you to qualify (most small channels don\'t), and doesn\'t catch off-YouTube redistribution. Privly handles everywhere else: tube sites, leak aggregators, Telegram, AI-deepfake hosts. The two are complementary, not competing.' },
    { q: 'I qualify for Content ID — do I still need Privly?', a: 'Yes, for off-YouTube coverage. Content ID is excellent at YouTube-on-YouTube enforcement but completely blind to redistributions elsewhere. If 80% of your reupload pain is on YouTube itself, Content ID is enough. If your content lands on tube sites, Telegram, or aggregators (which is most creators in adult-adjacent or compilation-prone niches), Privly fills that gap.' },
    { q: 'I don\'t qualify for Content ID — what then?', a: 'Most YouTube creators (under ~100k subscribers, or who haven\'t been invited) don\'t qualify for Content ID. Privly works for any creator regardless of channel size, monetisation status, or YouTube Partner Program membership.' },
    { q: 'Will Privly take down YouTube reuploads on YouTube itself?', a: 'Yes, via standard DMCA. Privly files DMCAs against YouTube reuploads of your content even without Content ID access. Filing is via YouTube\'s standard copyright form and gets actioned reliably for properly-formatted claims.' },
    { q: 'How fast does YouTube respond to DMCAs?', a: 'YouTube actions properly-formatted copyright notices typically within 24-72 hours. Repeat-infringer policy means uploaders who keep posting your content get terminated under DMCA 512(i).' },
    { q: 'Can Privly help with my YouTube channel being impersonated?', a: 'Yes. Fake channels using your name, thumbnails, or branding get reported through YouTube\'s impersonation channel with our collected evidence. Median resolution: 5-10 days, depending on the impersonator\'s response.' },
  ],
  ctaTitle: 'Cover everywhere YouTube content actually lands',
  ctaBlurb:
    'Privly catches off-YouTube reuploads, impersonator channels, and AI-generated derivatives — the part Content ID doesn\'t reach. One subscription covers YouTube plus every other platform.',
};

export default function YouTubePage() {
  return <PlatformPageShell config={config} />;
}

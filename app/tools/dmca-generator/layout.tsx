import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free DMCA Takedown Notice Generator | Privly',
  description:
    'Generate a professionally formatted DMCA takedown notice in minutes. Free DMCA template with all required legal elements. Identify copyrighted works, infringing URLs, and file automatic takedowns.',
  keywords: [
    'dmca generator',
    'dmca template',
    'dmca takedown letter generator',
    'free dmca notice',
    'dmca takedown notice template',
    'how to write a dmca notice',
    'dmca copyright notice',
    'dmca infringement',
    'dmca form',
  ],
  openGraph: {
    title: 'Free DMCA Takedown Notice Generator | Privly',
    description:
      'Generate a legally compliant DMCA takedown notice in minutes. Free tool with all required elements.',
    type: 'website',
    url: 'https://www.useprivly.com/tools/dmca-generator',
  },
  alternates: {
    canonical: 'https://www.useprivly.com/tools/dmca-generator',
  },
};

export default function DmcaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

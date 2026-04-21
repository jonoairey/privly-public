import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Free DMCA Takedown Notice Generator',
  description:
    'Generate a legally compliant DMCA takedown notice in minutes. Free DMCA template with all required elements — copyrighted works, infringing URLs, signature block, and perjury statement.',
  path: '/tools/dmca-generator',
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
});

export default function DmcaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

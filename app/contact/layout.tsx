import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Contact Us',
  description: 'Get in touch with the Privly team. Dedicated human support for content protection, DMCA takedowns, and account inquiries. We respond within 24 hours.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { generateMetadata as genMeta, generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-caveat",
});

export const metadata: Metadata = genMeta({
  title: 'Privly - Content Protection for OnlyFans, Fansly & Adult Creators',
  description: 'Stop content leaks and protect your income. Automated scanning across 500+ leak sites, instant DMCA takedowns, invisible watermarking, and deepfake detection. Built for creators.',
  path: '/',
  keywords: [
    'OnlyFans leak protection',
    'content leak detection',
    'DMCA takedown service',
    'creator content protection',
    'Fansly leak protection',
    'stop content piracy',
    'remove leaked content',
    'invisible watermarking',
    'deepfake detection creators',
    'adult content protection',
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#7C3AED" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased grain">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PWH95MXCHG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWH95MXCHG');
          `}
        </Script>
        {children}
        {/* Crisp Live Chat */}
        <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp=[];window.CRISP_WEBSITE_ID="9bb670c9-c2e8-4af5-a5fd-f9c4ed64edcc";
            (function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}
        </Script>
      </body>
    </html>
  );
}

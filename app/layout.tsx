import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { generateMetadata as genMeta, generateOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = genMeta();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#a855f7" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-gray-950 text-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
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
      </body>
    </html>
  );
}

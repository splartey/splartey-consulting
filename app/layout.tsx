import "./globals.css";
import type { Metadata } from "next";
import { APP_CONFIG } from "@/constants";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"

const {
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  SITE_URL,
  SITE_KEYWORDS,
  AUTHOR,
  LINKEDIN_URL,
  DEVEX_PROFILE_URL
} = APP_CONFIG;

const bricolage = localFont({
  src: [
    {
      path: "../public/fonts/BricolageGrotesque-VariableFont.ttf",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | Seth Lartey`,
    template: `%s | Seth Lartey`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [
    {
      name: AUTHOR,
      url: LINKEDIN_URL,
    },
    {
      name: AUTHOR,
      url: DEVEX_PROFILE_URL,
    },
  ],
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/images/opengraph.png`,
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    images: [`${SITE_URL}/images/opengraph.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Consulting",
  applicationName: COMPANY_NAME,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Toaster />
        <Footer />

        <Script
          id="personal-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: AUTHOR,
              jobTitle: "International Development Consultant",
              url: SITE_URL,
              worksFor: {
                "@type": "Organization",
                name: COMPANY_NAME,
                url: SITE_URL,
              },
              sameAs: [
                LINKEDIN_URL,
                DEVEX_PROFILE_URL,
              ],
            }),
          }}
        />

        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID! || ""}
          />
        )}

      </body>
    </html>
  );
}

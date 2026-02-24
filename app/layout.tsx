import "./globals.css";
import { APP_CONFIG, navLinks } from "@/constants";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"

import { siteMetadata } from "./metadata";
import { personSchema } from "./schema";

const { COMPANY_NAME, COMPANY_ABBR, COMPANY_SLOGAN } = APP_CONFIG;

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

export const metadata = siteMetadata;

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${bricolage.variable} antialiased`}>
        <Header
          companyName={COMPANY_NAME}
          companyAbbr={COMPANY_ABBR}
          navLinks={navLinks}
        />

        <main>
          {children}
        </main>
        <Toaster />

        <Footer
          companyName={COMPANY_NAME}
          companySlogan={COMPANY_SLOGAN}
        />

        <Script
          id="personal-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID! || ""} />
        )}

      </body>
    </html>
  );
}

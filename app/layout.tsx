
import "./globals.css";
import type { Metadata } from "next";
import { APP_CONFIG } from "@/constants";
import { Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const { COMPANY_NAME, COMPANY_DESCRIPTION, SITE_URL, SITE_KEYWORDS, AUTHOR } = APP_CONFIG;


const geistSans = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: COMPANY_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [
    {
      name: AUTHOR,
      url: "https://www.linkedin.com/in/sethlartey",
    },
    {
      name: AUTHOR,
      url: "https://www.devex.com/people/seth-lartey",
    },
  ],
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/favicon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/favicon-70x70.png", sizes: "70x70", type: "image/png" },
      { url: "/favicons/favicon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/favicon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/favicon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicons/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/favicon-150x150.png", sizes: "150x150", type: "image/png" },
      { url: "/favicons/favicon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicons/favicon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicons/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon-310x310.png", sizes: "310x310", type: "image/png" },
      { url: "/favicons/favicon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/favicons/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicons/favicon-180x180.png", sizes: "180x180" }],
    shortcut: ["/favicons/favicon.ico"],
    other: [
      {
        rel: "manifest",
        url: "/favicons/manifest.json",
      },
    ],
  },
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    url: SITE_URL,
    siteName: COMPANY_NAME,
    images: [
      {
        url: SITE_URL + "/og-image.png",
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="relative min-h-screen">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

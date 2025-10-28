import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPLartey Consulting",
  description: "Professional consulting services to elevate your business.",
  keywords: ["consulting", "business", "SPLartey", "Seth", "Lartey"],
  authors: [
    {
      name: "Seth Lartey",
      url: "https://www.linkedin.com/in/sethlartey",
    },
    {
      name: "Seth Lartey",
      url: "https://www.devex.com/people/seth-lartey",
    },
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://splarteyconsulting.com"
  ),
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
    title: "SPLartey Consulting",
    description: "Professional consulting services to elevate your business.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "SPLartey Consulting",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SPLartey Consulting",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  keywords: [
    "consulting", "business", "SPLartey", "Seth", "Lartey"
  ],
  authors: [
    {
      name: "Seth Lartey",
      url: "https://www.linkedin.com/in/sethlartey"
    },
    {
      name: "Seth Lartey",
      url: "https://www.devex.com/people/seth-lartey",
    },
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://splarteyconsulting.com"),

  openGraph: {
    title: "SPLartey Consulting",
    description: "Professional consulting services to elevate your business.",
    url: `${process.env.NEXT_PUBLIC_PROD_URL}`,
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
        {children}
      </body>
    </html>
  );
}

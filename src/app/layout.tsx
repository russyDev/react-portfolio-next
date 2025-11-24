import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslankolibabchuk.com'),
  title: {
      template: "%s | Ruslan Kolibabchuk - Senior Frontend Developer",
      default: "Ruslan Kolibabchuk - Senior Frontend Developer | Portfolio",
  },
  description: "Ruslan Kolibabchuk - Senior Frontend Developer with 12+ years of experience. Specializing in React, Next.js, TypeScript, and full-stack development. Available for freelance projects and consulting.",
  keywords: [
    "Ruslan Kolibabchuk",
    "Senior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer Ukraine",
    "React Portfolio",
    "WordPress Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Ruslan Kolibabchuk" }],
  creator: "Ruslan Kolibabchuk",
  publisher: "Ruslan Kolibabchuk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslankolibabchuk.com',
    siteName: "Ruslan Kolibabchuk Portfolio",
    title: "Ruslan Kolibabchuk - Senior Frontend Developer",
    description: "Senior Frontend Developer with 12+ years of experience. Specializing in React, Next.js, TypeScript, and full-stack development.",
    images: [
      {
        url: "/user.png",
        width: 1200,
        height: 630,
        alt: "Ruslan Kolibabchuk - Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruslan Kolibabchuk - Senior Frontend Developer",
    description: "Senior Frontend Developer with 12+ years of experience. Specializing in React, Next.js, TypeScript, and full-stack development.",
    creator: "@r_kodev",
    images: ["/user.png"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslankolibabchuk.com',
  },
  category: "Portfolio",
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
        <SpeedInsights />
        <Analytics />
      <div id="portal-root"></div>
      </body>
    </html>
  );
}

import React from "react";
import {HomeContent} from "@/app/components/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Ruslan Kolibabchuk's portfolio. Senior Frontend Developer with 14+ years of experience in React, Next.js, TypeScript, and full-stack development. View my work, services, and get in touch for your next project.",
  keywords: [
    "Ruslan Kolibabchuk",
    "Frontend Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "TypeScript Developer",
    "Ukraine Developer",
    "Freelance Developer",
  ],
  openGraph: {
    title: "Ruslan Kolibabchuk - Senior Frontend Developer Portfolio",
    description: "Senior Frontend Developer with 12+ years of experience. Specializing in React, Next.js, TypeScript, and full-stack development. Available for freelance projects.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com',
    type: "website",
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
    title: "Ruslan Kolibabchuk - Senior Frontend Developer Portfolio",
    description: "Senior Frontend Developer with 12+ years of experience. Specializing in React, Next.js, TypeScript, and full-stack development.",
    images: ["/user.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com'}/`,
  },
};

export default function Home() {
  return <HomeContent />;
}
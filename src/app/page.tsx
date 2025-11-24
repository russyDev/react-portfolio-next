import React from "react";
import {Details} from "@/app/components/Details";
import {MyServices} from "@/app/components/MyServices";
import {WorkHistory} from "@/app/components/WorkHistory";
import {Layout} from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Ruslan Kolibabchuk's portfolio. Senior Frontend Developer with 12+ years of experience in React, Next.js, TypeScript, and full-stack development. View my work, services, and get in touch for your next project.",
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
  return (
      <Layout>
          <div className="w-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden mx-5 lg:mx-10 mb-5 lg:mb-6 mt-5 lg:mt-10">
              <div className="flex flex-col items-start justify-center w-full py-8 lg:py-12 relative z-10">
                <Details />
              </div>
            </div>
            
            <div className="pt-8 md:pt-12 lg:pt-16 xl:pt-20 mx-5 lg:mx-10 mb-5 lg:mb-6">
              <MyServices />
            </div>

            <div className="mb-5 lg:mb-6">
              <WorkHistory />
            </div>
          </div>
      </Layout>
  );
}

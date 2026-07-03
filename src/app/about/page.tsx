import React from 'react';
import { AboutContent } from './components/AboutContent';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Ruslan Kolibabchuk - Senior Frontend Developer with 12+ years of experience. Discover my technical skills, work experience, education, and expertise in React, Next.js, TypeScript, WordPress, and full-stack development.",
    keywords: [
        "Ruslan Kolibabchuk About",
        "Frontend Developer Experience",
        "React Developer Skills",
        "Next.js Developer",
        "Web Developer Background",
        "Full Stack Developer Experience",
        "Ukraine Developer",
        "12 years experience developer",
        "WordPress Developer",
        "TypeScript Developer",
    ],
    openGraph: {
        title: "About Ruslan Kolibabchuk - Senior Frontend Developer",
        description: "Senior Frontend Developer with 12+ years of experience. Learn about my technical skills, work history, and expertise in React, Next.js, TypeScript, and full-stack development.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com'}/about`,
        type: "profile",
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
        title: "About Ruslan Kolibabchuk - Senior Frontend Developer",
        description: "Senior Frontend Developer with 12+ years of experience. Learn about my technical skills, work history, and expertise.",
        images: ["/user.png"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com'}/about`,
    },
};

const AboutPage = () => {
    return <AboutContent />;
};

export default AboutPage;

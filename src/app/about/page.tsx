import React from 'react';
import { Layout } from '@/components/layout';
import { useGetUserData } from '@/hooks/useGetUserData';
import { OwnDescription } from './components/ownDescription';
import { Parameters } from './components/Parameters';
import { Experience } from './components/Experience';
import Link from "next/link";
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
    const { user } = useGetUserData();
    return (
        <Layout>
                <div className="w-full">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-8 md:p-12 lg:p-16 xl:p-20 mx-5 lg:mx-10 mb-5 lg:mb-6 mt-5 lg:mt-10">
                        <div className="xl:flex gap-2 container lg:pt-8">
                            <div className="mb-3 xl:w-1/3 xl:mb-0">
                                <p className="text-main dark:text-gray-400 uppercase font-semibold text-base mb-6">
                                    - Nice to meet you!
                                </p>
                                <p className="text-4xl font-bold text-primaryDark dark:text-white mb-2">{user.name}</p>
                                <p className="text-base font-bold text-primaryDark dark:text-gray-300">Senior Frontend Developer</p>
                                <Link href="/contact" className="primary-button mb-2 mr-2 sm:mb-0 sm:mr-0 mt-10">
                                    Got a project?
                                </Link>
                            </div>
                            <div className="xl:w-2/3">
                                <OwnDescription />
                            </div>
                        </div>
                        <Parameters />
                    </div>
                    <div className="p-8 md:p-12 lg:p-16 xl:p-20 mx-5 lg:mx-10 mb-5 lg:mb-6">
                        <Experience />
                    </div>
                </div>
        </Layout>
    );
};

export default AboutPage;

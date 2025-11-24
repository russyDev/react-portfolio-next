import React from 'react';
import { useGetUserData } from '@/hooks/useGetUserData';
import { ServicesList } from './components/servicesList';
import Link from "next/link";
import type { Metadata } from 'next'
import {Layout} from "@/components/layout";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore Ruslan Kolibabchuk's web development services: Frontend Development (React, Next.js, TypeScript), Backend Development (PHP, Laravel, WordPress), Full Stack Solutions, Testing & QA, CMS Development, and Technical Consulting.",
    keywords: [
        "Frontend Development Services",
        "React Development Services",
        "Next.js Development",
        "Full Stack Development",
        "WordPress Development",
        "Backend Development",
        "Web Development Services",
        "TypeScript Development",
        "Custom Web Applications",
        "CMS Development",
        "E-commerce Development",
        "Technical Consulting",
    ],
    openGraph: {
        title: "Web Development Services - Ruslan Kolibabchuk",
        description: "Professional web development services including Frontend Development (React, Next.js), Backend Development, Full Stack Solutions, Testing & QA, and Technical Consulting.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com'}/services`,
        type: "website",
        images: [
            {
                url: "/user.png",
                width: 1200,
                height: 630,
                alt: "Web Development Services - Ruslan Kolibabchuk",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services - Ruslan Kolibabchuk",
        description: "Professional web development services including Frontend, Backend, Full Stack Solutions, Testing & QA, and Consulting.",
        images: ["/user.png"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com'}/services`,
    },
};

const ServicesPage = () => {
    const { user } = useGetUserData();
    return (
        <Layout>
            <div className="w-full">
                <div className="py-8 md:py-12 lg:py-16 xl:py-20 mx-5 lg:mx-10 mb-5 lg:mb-6 mt-5 lg:mt-10">
                    <p className="uppercase text-main dark:text-gray-400 font-medium mb-5">- Services</p>
                    <div className="flex-col lg:flex-row flex justify-between items-center gap-1 mb-10">
                        <h1 className="text-4xl font-extrabold text-primaryDark dark:text-white">My Services</h1>
                        <Link
                            href={`mailto:${user.email}`}
                            className="text-primaryDark dark:text-white font-bold text-base link hover:text-orange-400 dark:hover:text-orange-400 underline"
                        >
                            {user.email}
                        </Link>
                    </div>

                    <ServicesList />
                </div>
            </div>
        </Layout>
    );
};

export default ServicesPage;

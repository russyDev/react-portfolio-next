import React from 'react';
import { ServicesContent } from './components/ServicesContent';
import type { Metadata } from 'next'

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
    return <ServicesContent />;
};

export default ServicesPage;

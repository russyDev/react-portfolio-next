import React from 'react';
import { ContactContent } from './components/ContactContent';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Ruslan Kolibabchuk - Senior Frontend Developer. Available for freelance projects, consulting, and new opportunities. Contact via email. Based in Ukraine, available 24/7.",
    keywords: [
        "Contact Ruslan Kolibabchuk",
        "Hire Frontend Developer",
        "React Developer Contact",
        "Freelance Developer",
        "Web Developer Contact",
        "Hire React Developer",
        "Ukraine Developer Contact",
        "Frontend Developer Available",
    ],
    openGraph: {
        title: "Contact Ruslan Kolibabchuk - Senior Frontend Developer",
        description: "Get in touch for freelance projects, consulting, and new opportunities. Available 24/7. Based in Ukraine.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com'}/contact`,
        type: "website",
        images: [
            {
                url: "/user.png",
                width: 1200,
                height: 630,
                alt: "Contact Ruslan Kolibabchuk",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Ruslan Kolibabchuk - Senior Frontend Developer",
        description: "Get in touch for freelance projects, consulting, and new opportunities. Available 24/7.",
        images: ["/user.png"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ruslan-dev.com'}/contact`,
    },
};

const ContactPage = () => {
    return <ContactContent />;
};

export default ContactPage;
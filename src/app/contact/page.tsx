import React from 'react';
import { Layout } from '@/components/layout';
import { useGetUserData } from '@/hooks/useGetUserData';
import { ContactForm } from '@/components/contactForm';
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Ruslan Kolibabchuk - Senior Frontend Developer. Available for freelance projects, consulting, and new opportunities. Contact via email or phone. Based in Ukraine, available 24/7.",
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
    const { user } = useGetUserData();
    return (
        <Layout>

            <div className="flex flex-col grow overflow-scroll">
                <div className="w-full">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-8 md:p-12 lg:p-16 xl:p-20 mx-5 lg:mx-10 mb-5 lg:mb-6 mt-5 lg:mt-10">
                        <div className="xl:flex xl:items-center gap-8 lg:gap-12 xl:gap-40">
                            <div className="mb-8 xl:w-1/2 xl:mb-0">
                                <p className="text-main dark:text-gray-400 uppercase font-semibold text-base mb-6">- Let&#39;s connect</p>
                                <p className="text-4xl font-bold text-primaryDark dark:text-white mb-2">Get in touch</p>
                                <p className="text-base font-bold text-main dark:text-gray-300">
                                    I&#39;m currently available to take on new projects, so feel free to send me a message
                                    about anything that you want to run past me. You can contact anytime at 24/7
                                </p>

                                <ul className="pl-0 mt-10">
                                    <li>
                                        <Link
                                            className="block text-xm text-primaryDark dark:text-white font-bold mb-2 underline hover:text-[#FFB400] dark:hover:text-[#FFB400]"
                                            href={`tel:${user.phone}`}
                                        >
                                            {user.phone}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block text-base text-primaryDark dark:text-white font-bold mb-3 underline hover:text-[#FFB400] dark:hover:text-[#FFB400]"
                                            href={`mailto:${user.email}`}
                                        >
                                            {user.email}
                                        </Link>
                                    </li>
                                </ul>

                                {/* Google Map */}
                                <div className="mt-10">
                                    <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325515.6816598763!2d30.582005!3d50.4021369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Kyiv, Ukraine Location"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:w-1/2">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
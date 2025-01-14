import React from 'react';
import { Layout } from '@/components/layout';
import { useGetUserData } from '@/hooks/useGetUserData';
import { ContactForm } from '@/components/contactForm';
import Link from "next/link";
import {Metadata} from "next";

export const metadata:Metadata = {
    title: "Contact",
}

const ContactPage = () => {
    const { user } = useGetUserData();
    return (
        <Layout>

            <div className="flex flex-col grow overflow-scroll">
                <div className="container-row bg-sky-50 flex">
                    <div>
                        <div className="xl:flex gap-40 container lg:pt-28">
                            <div className="mb-3 xl:w-1/2 xl:mb-0">
                                <p className="text-main uppercase font-semibold text-base mb-6">- Let&#39;s connect</p>
                                <p className="text-4xl font-bold text-primaryDark mb-2">Get in touch</p>
                                <p className="text-base font-bold text-main">
                                    I&#39;m currently available to take on new projects, so feel free to send me a message
                                    about anything that you want to run past me. You can contact anytime at 24/7
                                </p>

                                <ul className="pl-0 mt-10">
                                    <li>
                                        <Link
                                            className="block text-xm text-primaryDark font-bold mb-2 underline"
                                            href={`tel:${user.phone}`}
                                        >
                                            {user.phone}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="block text-base text-primaryDark font-bold mb-3 underline"
                                            href={`mailto:${user.email}`}
                                        >
                                            {user.email}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="xl:w-1/2">
                                <ContactForm />
                            </div>
                        </div>

                        {/* <div className="mt-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7875370.431280723!2d30.899850718887556!3d48.6640209070204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2z0KPQutGA0LDRl9C90LA!5e1!3m2!1suk!2sua!4v1734689470294!5m2!1suk!2sua"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>*/}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
import React from 'react';
import { Layout } from '@/components/layout';
import { useGetUserData } from '@/hooks/useGetUserData';
import { OwnDescription } from './components/ownDescription';
import { Parameters } from './components/Parameters';
import { Experience } from './components/Experience';
import { TransparentWrapper } from '@/components/layout/transparentWrapper';
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About",
};

const AboutPage = () => {
    const { user } = useGetUserData();
    return (
        <Layout>
            <TransparentWrapper>
                <div className="container-row bg-white flex">
                    <div>
                        <div className="xl:flex gap-2 container lg:pt-28">
                            <div className="mb-3 xl:w-1/3 xl:mb-0">
                                <p className="text-main uppercase font-semibold text-base mb-6">
                                    - Nice to meet you!
                                </p>
                                <p className="text-4xl font-bold text-primaryDark mb-2">{user.name}</p>
                                <p className="text-base font-bold text-primaryDark">Senior Frontend Developer</p>
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
                </div>
                <div className="container-row bg-sky-50 flex">
                    <Experience />
                </div>
            </TransparentWrapper>
        </Layout>
    );
};

export default AboutPage;

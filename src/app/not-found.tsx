import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found. Return to the homepage or contact Ruslan Kolibabchuk.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center px-5">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-[#FFB400] dark:text-[#FFB400] mb-4 leading-none">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B2B] dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-[#767676] dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-[#FFB400] text-[#2B2B2B] font-bold py-3 px-8 rounded-sm hover:bg-[#FFA000] transition-colors shadow-md text-sm md:text-base uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
            
            <Link
              href="/contact"
              className="bg-white dark:bg-gray-800 text-[#2B2B2B] dark:text-white font-bold py-3 px-8 rounded-sm border-2 border-[#FFB400] hover:bg-[#FFB400] hover:text-[#2B2B2B] dark:hover:text-[#2B2B2B] transition-colors shadow-md text-sm md:text-base uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-[#767676] dark:text-gray-400">
              Need help? Check out these pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/about" className="text-[#FFB400] dark:text-[#FFB400] hover:text-[#FFA000] dark:hover:text-[#FFA000] font-medium text-sm md:text-base transition-colors">
                About
              </Link>
              <Link href="/services" className="text-[#FFB400] dark:text-[#FFB400] hover:text-[#FFA000] dark:hover:text-[#FFA000] font-medium text-sm md:text-base transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-[#FFB400] dark:text-[#FFB400] hover:text-[#FFA000] dark:hover:text-[#FFA000] font-medium text-sm md:text-base transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


import React from 'react';
import Link from "next/link";
import {Links} from "@/app/components/LInks";

export const Details = () => {
  return (
    <div className="relative w-full">
      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2B2B2B] dark:text-white font-bold mb-3 md:mb-4 leading-tight">
          I&#39;m <span className="text-[#2B2B2B] dark:text-white">Ruslan</span>
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2B2B2B] dark:text-white font-bold mb-4 md:mb-6 leading-tight">
          <span className="text-[#FFB400]">Full-Stack Web Engineer</span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#767676] dark:text-gray-300 mb-8 md:mb-10 leading-relaxed">
         I&apos;m a Senior Front-End Developer with <span className="font-bold">over 12 years</span> of experience building modern, scalable web applications.
My main focus is on React, Next.js, TypeScript, and TailwindCSS, creating high-performance, maintainable, and accessible user interfaces.
I have strong expertise in GraphQL, WordPress (Headless), React Query, and SEO optimization, as well as hands-on experience integrating HubSpot, Yoast, and other marketing tools.
I value clean architecture, reusable components, and continuous improvement - always aiming to deliver code that&apos;s both elegant and efficient.
        </p>
        <div className="mb-8 md:mb-10">
          <Links />
        </div>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 bg-[#FFB400] text-[#2B2B2B] font-bold py-3 md:py-4 px-6 md:px-8 rounded-sm hover:bg-[#FFA000] transition-colors shadow-md text-sm md:text-base uppercase tracking-wider group"
        >
          HIRE ME
          <svg 
            className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

"use client";
import React from 'react';
import { skills } from '@/hooks/data';
import Link from 'next/link';

export const MyServices = () => {
  // Get first 6 services for the home page
  const services = skills.services.slice(0, 6);

  return (
    <section className="w-full">
      <div className="text-center mb-10 lg:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B2B] dark:text-white mb-4">
          My Services
        </h2>
        <p className="text-base md:text-lg text-[#767676] dark:text-gray-300 max-w-2xl mx-auto">
          I offer a comprehensive range of web development services to help bring your digital vision to life.
        </p>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 p-6 lg:p-8 hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="w-12 h-12 bg-[#FFB400] rounded-full flex items-center justify-center mb-4">
              <span className="text-[#2B2B2B] font-bold text-lg">{index + 1}</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-[#2B2B2B] dark:text-white mb-3">
              {service.category}
            </h3>
            <p className="text-sm md:text-base text-[#767676] dark:text-gray-300 leading-relaxed">
              {service.description.split('.')[0]}.
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 lg:mt-12">
        <Link 
          href="/services" 
          className="inline-flex items-center gap-3 bg-[#FFB400] text-[#2B2B2B] font-bold py-3 md:py-4 px-6 md:px-8 rounded-sm hover:bg-[#FFA000] transition-colors shadow-md text-sm md:text-base uppercase tracking-wider group"
        >
          Read more
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
    </section>
  );
};


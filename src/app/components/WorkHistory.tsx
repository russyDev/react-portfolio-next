"use client";
import React from 'react';
import { experiences } from '@/hooks/data';

export const WorkHistory = () => {
  // Show all experiences
  const workHistory = experiences;

  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="py-8 lg:py-10 px-5 lg:px-10 mx-5 lg:mx-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B2B] dark:text-white mb-4">
            Work History
          </h2>
          <div className="text-sm md:text-base text-[#767676] dark:text-gray-300 max-w-2xl mx-auto">
            <p>
              With over 12 years of experience in web development, I have worked with various companies and technologies, 
              continuously expanding my skills and delivering high-quality solutions. My journey spans from WordPress development 
              to modern React applications, always focusing on creating scalable and maintainable code.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section with White Background */}
      <div className="bg-white dark:bg-gray-800 px-5 lg:px-10 pb-12 lg:pb-16 mx-5 lg:mx-10 rounded-lg shadow-sm dark:shadow-gray-900/50">
        <div className="max-w-7xl mx-auto pt-8 lg:pt-12">
          <div className="space-y-8 lg:space-y-12">
            {workHistory.map((experience, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-6 lg:gap-12 ${
                  index < workHistory.length - 1 ? 'pb-8 lg:pb-12 border-b border-gray-200 dark:border-gray-700' : ''
                }`}
              >
                {/* Left Column - Job Title, Company, and Date */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#2B2B2B] dark:text-white mb-3">
                    {experience.position}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm md:text-base text-[#2B2B2B] dark:text-gray-300">
                      {experience.company}
                    </span>
                    <span className="bg-[#FFB400] text-[#2B2B2B] text-xs md:text-sm font-bold px-4 py-1.5 rounded-full inline-block w-fit">
                      {experience.date}
                    </span>
                  </div>
                </div>

                {/* Right Column - Certificate Title and Description */}
                <div className="lg:w-2/3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#2B2B2B] dark:text-white mb-3">
                    Certificate Of Web Training
                  </h4>
                  <p className="text-sm md:text-base text-[#767676] dark:text-gray-300 leading-relaxed">
                    {experience.description[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


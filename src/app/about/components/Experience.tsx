"use client"
import React, { useState } from 'react';
import { Modal } from '@/components/modal';
import { experiences } from '@/hooks/data';
import Image from 'next/image';

export const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section className="w-full">
      {/* Header Section */}
      <div className="py-8 lg:py-10 px-5 lg:px-10 mx-5 lg:mx-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B2B] dark:text-white mb-4">
            Experience
          </h2>
          <div className="text-sm md:text-base text-[#767676] dark:text-gray-300 max-w-2xl mx-auto">
            <p>
              Everything about me! Explore my professional journey and the diverse projects I&apos;ve worked on throughout my career.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-5 lg:px-10">
        <div className={`grid grid-cols-1 xl:grid-cols-2 gap-10`}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-10 transition duration-300 cursor-pointer hover:translate-y-[-10px] rounded-lg shadow-sm dark:shadow-gray-900/50"
            onClick={() => {
              setSelectedExperience(experience);
              setOpen(true);
            }}
          >
            <div className="flex justify-between mb-1">
              <div className="text-orange-400 font-bold text-base capitalize">
                {experience.date}
              </div>
              <div className="text-main dark:text-gray-400 font-semibold text-xl">{experience.company}</div>
            </div>
            <h3 className="text-primaryDark dark:text-white font-bold text-xl mb-4">{experience.position}</h3>
            <p className="regular-text dark:text-gray-300 mb-4">{experience.description[0]}</p>
          </div>
        ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="pb-4">
          <Image
            src={selectedExperience.bg}
            alt={selectedExperience.position}
            className="object-cover w-full h-96 rounded-t"
          />
          <div className=" mt-4">
            <span className="inline-block rounded bg-primaryDark dark:bg-gray-700 text-orange-400 font-bold text-base p-2 capitalize">
              {selectedExperience.date}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-main dark:text-gray-400 font-semibold text-base">{selectedExperience.company}</span>
          </div>
          <div className="mt-2">
            <h3 className="text-primaryDark dark:text-white font-bold text-2xl">{selectedExperience.position}</h3>
          </div>
          <div>
            {selectedExperience.description.map((desc, index) => (
              <p key={index} className="regular-text dark:text-gray-300 mt-4">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

"use client"
import React, { useState } from 'react';
import { Modal } from '@/components/modal';
import { experiences } from '@/hooks/data';
import Image from 'next/image';

export const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section className="container mx-auto mt-10">
      <p className="uppercase text-main font-medium mb-5">- Experience</p>
      <h1 className="text-4xl font-bold text-primaryDark mb-10">Everything about me!</h1>

      <div className={`grid grid-cols-1 xl:grid-cols-2 gap-10`}>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white p-10 transition duration-300 cursor-pointer hover:translate-y-[-10px] rounded"
            onClick={() => {
              setSelectedExperience(experience);
              setOpen(true);
            }}
          >
            <div className="flex justify-between mb-1">
              <div className="text-orange-400 font-bold text-base capitalize">
                {experience.date}
              </div>
              <div className="text-main font-semibold text-xl">{experience.company}</div>
            </div>
            <h3 className="text-primaryDark font-bold text-xl mb-4">{experience.position}</h3>
            <p className="regular-text mb-4">{experience.description[0]}</p>
          </div>
        ))}
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
            <span className="inline-block rounded bg-primaryDark text-orange-400 font-bold text-base p-2 capitalize">
              {selectedExperience.date}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-main font-semibold text-base">{selectedExperience.company}</span>
          </div>
          <div className="mt-2">
            <h3 className="text-primaryDark font-bold text-2xl">{selectedExperience.position}</h3>
          </div>
          <div>
            {selectedExperience.description.map((desc, index) => (
              <p key={index} className="regular-text mt-4">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

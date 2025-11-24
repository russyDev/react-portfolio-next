import React, { ComponentProps, FC } from 'react';
import { Modal } from '@/components/modal';
import { ServiceType } from '@/types';
import Image from "next/image";

type Props = Omit<ComponentProps<typeof Modal>, 'children' | 'title'> & {
  service: ServiceType;
};

export const ServiceModal: FC<Props> = ({ service, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="pb-4">
        <Image
          src={service.bg}
          alt={service.category}
          className="object-cover w-full h-96 rounded-t"
        />
        <div className="mt-8">
          <h3 className="text-primaryDark dark:text-white font-bold text-2xl">{service.category}</h3>
        </div>
        <p className="regular-text dark:text-gray-300 mt-4">{service.description}</p>

        <div className="mt-6">
          <span className="text-main dark:text-gray-400 font-semibold text-base">Skills:</span>
        </div>
        <ul className="mt-1 flex gap-4 flex-wrap">
          {service.skills.map((skill, index) => (
            <li
              key={index}
              className="text-sm mt-1 inline-block rounded bg-primaryDark dark:bg-gray-700 text-orange-400 font-bold p-2 capitalize"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

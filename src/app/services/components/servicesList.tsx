"use client"
import React, { useState } from 'react';
import { skills } from '@/hooks/data';
import { ServiceModal } from './serviceModal';
import { ServiceType } from '@/types';
import './styles.css';

export const ServicesList = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(skills.services[0] as ServiceType);

  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      {skills.services.map((service, key) => (
        <div
          className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded p-8 transition duration-300 cursor-pointer hover:translate-y-[-4px] relative shadow-sm dark:shadow-gray-900/50 flex flex-col"
          key={key}
          onClick={() => {
            setSelectedService(service as ServiceType);
            setOpen(true);
          }}
        >
          <div className="text-main dark:text-gray-400 font-bold text-xl">{String(key + 1).padStart(2, '0')}</div>
          <h3 className="text-primaryDark dark:text-white font-bold text-xl mt-6">{service.category}</h3>
          <p className="regular-text dark:text-gray-300 mt-4">{service.description.split('.')[0]}.</p>
          <div className="text-center mt-auto pt-4">
            <span className="text-orange-400 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 font-bold text-lg transition-colors cursor-pointer">
              Read more
            </span>
          </div>
        </div>
      ))}
      <ServiceModal open={open} onClose={() => setOpen(false)} service={selectedService} />
    </div>
  );
};

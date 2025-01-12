"use client"
import React, { useState } from 'react';
import { skills } from '@/hooks/data';
import { ArrowRightIcon } from '@/components/icons';
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
          className="border rounded p-8 transition duration-300 cursor-pointer hover:translate-y-[-4px] relative"
          key={key}
          onClick={() => {
            setSelectedService(service as ServiceType);
            setOpen(true);
          }}
        >
          <div className="text-main font-bold text-xl">{String(key + 1).padStart(2, '0')}</div>
          <h3 className="text-primaryDark font-bold text-xl mt-6">{service.category}</h3>
          <p className="regular-text mt-4">{service.description.split('.')[0]}.</p>
          <div className="more">
            Read more <ArrowRightIcon className="inline-block fill-primaryDark" />
          </div>
        </div>
      ))}
      <ServiceModal open={open} onClose={() => setOpen(false)} service={selectedService} />
    </div>
  );
};

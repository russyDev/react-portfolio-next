import React from 'react';

interface ProgressBarProps {
  label: string;
  level: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, level }) => {
  return (
    <div className="mb-3.5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-[#2B2B2B] dark:text-white uppercase tracking-wide">{label}</span>
        <span className="text-xs font-bold text-[#767676] dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full rounded-full h-3 overflow-hidden border border-[#FFB400] p-0.5">
        <div
          className="bg-[#FFB400] h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};


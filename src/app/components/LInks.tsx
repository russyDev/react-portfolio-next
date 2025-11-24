import React from 'react';
import {useGetUserData} from "@/hooks/useGetUserData";
import Link from "next/link";

export const Links = () => {
  const { user } = useGetUserData();

  return (
    <div className="w-full border-l-4 border-[#FFB400] pl-6 lg:pl-8">
      <h3 className="text-xs font-bold text-[#2B2B2B] dark:text-white mb-6 uppercase tracking-wider">Contact Information</h3>
      <ul className="space-y-4">
        <li>
          <Link 
            className="block text-base md:text-lg text-[#767676] dark:text-gray-300 hover:text-[#2B2B2B] dark:hover:text-white transition-colors font-medium" 
            href={`tel:${user.phone}`}
          >
            {user.phone}
          </Link>
        </li>
        <li>
          <Link
            className="block text-base md:text-lg text-[#767676] dark:text-gray-300 hover:text-[#2B2B2B] dark:hover:text-white transition-colors font-medium break-all"
            href={`mailto:${user.email}`}
          >
            {user.email}
          </Link>
        </li>
      </ul>
    </div>
  );
};

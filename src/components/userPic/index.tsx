import React from 'react';
import { useGetUserData } from '@/hooks/useGetUserData';
import Image from 'next/image';

export const UserPic = () => {
  const { user } = useGetUserData();
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full w-[150px] h-[150px] relative mb-4">
       <Image
           src={user.img.src}
           alt="user pic"
           className="w-full h-full object-cover rounded-full object-top"
           width={150}
           height={150}
       />
          <div className="w-5 h-5 bg-green-500 rounded-full absolute bottom-2 right-2 border-[3px] border-white shadow-lg" />
      </div>

      <p className="font-bold text-2xl text-[#2B2B2B] dark:text-white mb-2 text-center leading-tight">
        {user.name}
      </p>

      <p className='font-normal text-sm text-[#767676] dark:text-gray-300 text-center uppercase tracking-wide'>
        Full-Stack Web Engineer
      </p>
    </div>
  );
};

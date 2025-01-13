import React from 'react';
import { useGetUserData } from '@/hooks/useGetUserData';
import Image from 'next/image';

export const UserPic = () => {
  const { user } = useGetUserData();
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full border-2 border-primary w-32 h-32 overflow-hidden">
       <Image
           src={user.img.src}
           alt="user pic"
           className=""
           width={128}
           height={128}
       />
      </div>

      <p className="text-center text-primaryDark font-bold text-2xl mt-5 block p-2 border-2 border-primary">
        Ruslan Kolibabchuk
      </p>
    </div>
  );
};

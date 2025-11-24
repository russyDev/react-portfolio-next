import React from 'react';
import { useGetUserData } from '../../../hooks/useGetUserData';
import Link from "next/link";

export const OwnDescription = () => {
  const { user } = useGetUserData();
  return (
    <>
      <p className="regular-text dark:text-gray-300 mb-4">
        Hello there! My name is <span className="text-orange-400">Ruslan Kolibabchuk</span>, and I
        am a dedicated and passionate Senior Frontend Developer with over a decade of experience in
        web development. My journey began in 2011 as a WordPress developer, and over the years, I&apos;ve
        honed my skills to specialize in modern frontend technologies like React, Redux, and React
        Query.
      </p>
      <p className="regular-text dark:text-gray-300">
        With a Master&apos;s degree in Information Technology Design from Zaporizhzhya National Technical
        University, I have built a solid foundation in technology and problem-solving. I thrive on
        tackling complex challenges, exploring new tools, and delivering efficient, reusable, and
        user-friendly solutions.
      </p>
      <div className="flex-col lg:flex-row flex gap-5 lg:gap-16 mt-16">
        <div>
          <div className="uppercase underline text-main dark:text-gray-400 font-medium text-lg">Born in</div>
          <Link href="" className="text-primaryDark dark:text-white font-semibold text-lg hover:text-orange-400">
            {user.address}
          </Link>
        </div>
        <div>
          <div className="uppercase underline text-main dark:text-gray-400 font-medium text-lg">Mail</div>
          <Link href="" className="text-primaryDark dark:text-white font-semibold text-lg hover:text-orange-400">
            {user.email}
          </Link>
        </div>
        <div>
          <div className="uppercase underline text-main dark:text-gray-400 font-medium text-lg">Phone</div>
          <Link href="" className="text-primaryDark dark:text-white font-semibold text-lg hover:text-orange-400">
            {user.phone}
          </Link>
        </div>
      </div>
    </>
  );
};

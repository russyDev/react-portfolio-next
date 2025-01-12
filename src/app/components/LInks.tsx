import React from 'react';
import {useGetUserData} from "@/hooks/useGetUserData";
import Link from "next/link";

export const Links = () => {
  const { user } = useGetUserData();

  return (
    <ul className="border-l-4 border-orange-400 pl-2 mt-10 md:mt-40">
      <li>
        <Link className="block text-base text-primaryDark font-bold mb-3" href={`tel:${user.phone}`}>
          {user.phone}
        </Link>
      </li>
      <li>
        <Link
          className="block text-base text-primaryDark font-bold mb-3"
          href={`mailto:${user.email}`}
        >
          {user.email}
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          className="block text-base text-primaryDark font-bold"
          href="https://maps.app.goo.gl/gjGEKZT5rXmPHkb58"
        >
          {user.address}
        </Link>
      </li>
    </ul>
  );
};

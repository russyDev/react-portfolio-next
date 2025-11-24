import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/services',
    text: 'Services',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
];

export const Navigations = () => {
  const pathname = usePathname();

  return (
    <ul className="block w-full">
      {links.map((link, index) => {

        const isActive = pathname === link.to || (pathname !== '/' && link.to !== '/' && pathname.includes(link.to));

        return (
          <li key={index}>
            <Link
              href={link.to}
              className={`text-sm block py-2.5 text-center transition duration-300 border-b border-transparent ${
                isActive 
                  ? 'text-[#FFB400] font-bold border-[#FFB400]' 
                  : 'text-[#767676] dark:text-gray-400 hover:text-[#2B2B2B] dark:hover:text-white'
              }`}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

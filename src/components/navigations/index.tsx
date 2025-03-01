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
              className={`text-base link ${isActive ? 'text-primary' : ''}`}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

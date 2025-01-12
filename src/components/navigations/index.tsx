import React from 'react';
import Link from "next/link";

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
  /*  {
    to: '/portfolio',
    text: 'Portfolio',
  },*/
  {
    to: '/contact',
    text: 'Contact',
  },
];

export const Navigations = () => {
  return (
    <ul className="block w-full">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link
              href={link.to}
             /* className={({ isActive }) => `text-base link ${isActive ? 'text-primary' : ''}`}*/
              className={'text-base link'}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

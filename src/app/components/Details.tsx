import React from 'react';
import Link from "next/link";

export const Details = () => {
  return (
    <>
      <h3 className="text-3xl md:text-6xl text-primaryDark font-bold mb-2">
        Hi, I&#39;m <span className="text-primary">Ruslan!</span> Creative Developer Based in Ukraine
      </h3>
      <p className="mt-10 text-2xl">
        I&#39;m a Ukraine based front-end developer with <span className="text-primary">10+ years</span>{' '}
        of experience
      </p>
      <div className="mt-10 sm:flex gap-5">
        <Link href="/services" className="primary-button mb-2 mr-2 sm:mb-0 sm:mr-0">
          Got a project?
        </Link>
        <Link href="/contact" className="secondary-button">
          Let&#39;s talk
        </Link>
      </div>
    </>
  );
};

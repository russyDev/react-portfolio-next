import React from 'react';

export const Parameters = () => {
  return (
    <div className="md:columns-2 xl:columns-3 mt-20 gap-16">
      <div className="h-52 bg-cyan-100 flex items-center justify-center flex-col rounded relative overflow-hidden styled-block mb-16">
        <div className="text-4xl text-primaryDark font-bold">10+</div>
        <div className="text-1xl text-primaryDark uppercase font-medium mt-2">
          Years of experience
        </div>
      </div>
      <div className="h-52 bg-amber-200 flex items-center justify-center flex-col rounded relative overflow-hidden styled-block mb-16">
        <div className="text-4xl text-primaryDark font-bold">50+</div>
        <div className="text-1xl text-primaryDark uppercase font-medium mt-2">
          Projects completed
        </div>
      </div>
      <div className="h-52 bg-green-100 flex items-center justify-center flex-col rounded relative overflow-hidden styled-block">
        <div className="text-4xl text-primaryDark font-bold">30+</div>
        <div className="text-1xl text-primaryDark uppercase font-medium mt-2">Happy clients</div>
      </div>
    </div>
  );
};

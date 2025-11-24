import React, { FC, ReactNode } from 'react';
import {LayoutTop} from "@/components/layout/components/LayoutTop";
import {LayoutRight} from "@/components/layout/components/LayoutRight";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {

  return (
    <div className="layout md:flex">
      <LayoutTop />
      <div className="flex-grow bg-[#E5E5E5] dark:bg-gray-900 flex flex-col md:h-screen overflow-auto">
        {children}
      </div>
      <LayoutRight />
    </div>
  );
};

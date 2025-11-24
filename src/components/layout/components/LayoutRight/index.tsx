"use client";
import { Navigations } from "@/components/navigations";
import { ThemeToggle } from "@/components/themeToggle";
import React from "react";

export const LayoutRight: React.FC = () => {
    return (
        <div className="hidden md:flex w-[80px] lg:w-[100px] bg-white dark:bg-gray-800 items-center flex-col justify-center h-screen sticky top-0 border-l border-gray-100 dark:border-gray-700 flex-none z-10">
            <div className="absolute top-6">
                <ThemeToggle />
            </div>
            <div className="w-full">
                <Navigations />
            </div>
        </div>
    );
};


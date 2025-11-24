"use client";
import {UserPic} from "@/components/userPic";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import {useGetUserData} from "@/hooks/useGetUserData";
import {SlideMenu} from "@/components/slideMenu";
import { MenuIcon, CloseIcon } from '../../../icons';
import { ProgressBar } from './ProgressBar';
import { Navigations } from "@/components/navigations";
import { ThemeToggle } from "@/components/themeToggle";

const STORAGE_KEY = 'skillsExpanded';

export const LayoutTop: React.FC = () => {

    const { user } = useGetUserData();
    const [openMenu, setOpenMenu] = useState(false);
    
    // Initialize state from localStorage
    const [skillsExpanded, setSkillsExpanded] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved === 'true';
        }
        return false;
    });

    // Save state to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, String(skillsExpanded));
        }
    }, [skillsExpanded]);

    return (
        <>
            <div className="hidden md:flex w-[320px] lg:w-[380px] bg-white dark:bg-gray-800 items-start flex-col pt-8 pb-8 h-screen overflow-auto flex-none px-6 border-r border-gray-100 dark:border-gray-700">
                {/* Profile Section */}
                <div className="w-full flex flex-col items-center mb-6">
                    <UserPic />
                </div>

                {/* Social Media Icons */}
                <div className="w-full flex items-center justify-center gap-2.5 mb-6">
                    {user.social.map((social, index) => (
                        <Link 
                            key={index} 
                            href={social.link} 
                            className="w-9 h-9 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-[#FFA000] transition-colors shadow-sm" 
                            target="_blank"
                            aria-label={social.name}
                        >
                            <div className="w-4 h-4 text-white">
                                {social.icon}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Personal Information */}
                <div className="w-full mb-6">
                    <h3 className="text-xs font-bold text-[#2B2B2B] dark:text-white mb-3 uppercase tracking-wider">Personal Information</h3>
                    <div className="space-y-2.5">
                        <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 pb-1.5">
                            <span className="text-xs text-[#767676] dark:text-gray-400 font-medium">Residence:</span>
                            <span className="text-xs font-bold text-[#2B2B2B] dark:text-white">{user.personalInfo.residence}</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 pb-1.5">
                            <span className="text-xs text-[#767676] dark:text-gray-400 font-medium">Freelance:</span>
                            <span className="text-xs font-bold text-green-600 dark:text-green-400">{user.personalInfo.freelance}</span>
                        </div>
                        <div className="flex justify-between items-start py-1 border-b border-gray-100 dark:border-gray-700 pb-1.5">
                            <span className="text-xs text-[#767676] dark:text-gray-400 font-medium">Address:</span>
                            <span className="text-xs font-bold text-[#2B2B2B] dark:text-white text-right max-w-[65%] leading-relaxed">{user.personalInfo.address}</span>
                        </div>
                    </div>
                </div>

                {/* Languages */}
                <div className="w-full mb-6">
                    <h3 className="text-xs font-bold text-[#2B2B2B] dark:text-white mb-3 uppercase tracking-wider">Languages</h3>
                    {user.languages.map((lang, index) => (
                        <ProgressBar key={index} label={lang.name} level={lang.level} />
                    ))}
                </div>

                {/* Skills */}
                <div className="w-full mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xs font-bold text-[#2B2B2B] dark:text-white uppercase tracking-wider">Skills</h3>
                        <button
                            onClick={() => setSkillsExpanded(prev => !prev)}
                            className="text-xs text-[#FFB400] dark:text-[#FFB400] font-medium hover:text-[#FFA000] dark:hover:text-[#FFA000] transition-colors cursor-pointer"
                        >
                            {skillsExpanded ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                    <div className="overflow-hidden">
                        {(() => {
                            const prioritySkills = ['JavaScript', 'React', 'Next.js'];
                            const allSkills = [...user.technicalSkills];
                            const sortedSkills = [
                                ...allSkills.filter(skill => prioritySkills.includes(skill.name)),
                                ...allSkills.filter(skill => !prioritySkills.includes(skill.name))
                            ];
                            return sortedSkills.map((skill, index) => {
                                const isPriority = prioritySkills.includes(skill.name);
                                const shouldShow = skillsExpanded || isPriority;
                                
                                // Calculate delay based on animation direction
                                const delay = skillsExpanded 
                                    ? `${index * 50}ms` 
                                    : isPriority 
                                        ? `${(prioritySkills.length - 1 - prioritySkills.indexOf(skill.name)) * 50}ms`
                                        : `${(sortedSkills.length - index) * 50}ms`;
                                
                                return (
                                    <div 
                                        key={`${skill.name}-${index}`}
                                        className={`transition-all duration-500 ease-in-out ${
                                            shouldShow 
                                                ? 'opacity-100 max-h-[100px] translate-y-0' 
                                                : 'opacity-0 max-h-0 -translate-y-4 overflow-hidden'
                                        }`}
                                        style={{ transitionDelay: delay }}
                                    >
                                        <ProgressBar label={skill.name === 'React' ? 'React.js' : skill.name} level={skill.level} />
                                    </div>
                                );
                            });
                        })()}
                    </div>
                </div>

                {/* Extra Skills */}
                <div className="w-full mb-6">
                    <h3 className="text-xs font-bold text-[#2B2B2B] dark:text-white mb-3 uppercase tracking-wider">Extra Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {user.extraSkills.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-2.5 py-1 bg-[#FFB400] text-white text-[10px] font-bold rounded-sm uppercase tracking-wider shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Download CV Button */}
                <div className="w-full mb-6">
                    <a 
                        href="/CV-Kolibabchuk.pdf" 
                        download
                        className="w-full bg-[#FFB400] text-white font-bold py-2.5 px-5 rounded-sm flex items-center justify-center gap-2 hover:bg-[#FFA000] transition-colors shadow-md text-xs uppercase tracking-wider cursor-pointer"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        DOWNLOAD CV
                    </a>
                </div>

                {/* Copyright */}
                <div className="w-full mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-xs text-[#767676] dark:text-gray-400 leading-relaxed mb-1">Copyright © 2025 Ruslan Kolibabchuk.</p>
                    <p className="text-center text-xs text-[#767676] dark:text-gray-400 leading-relaxed">All rights reserved.</p>
                </div>
            </div>

            <div className="md:hidden flex items-center justify-between gap-5 w-full px-5 py-5 sticky top-0 bg-white dark:bg-gray-800 z-20">
                <div className="bg-white dark:bg-gray-800 flex items-center px-4 justify-between flex-none">
                    <Link href="/" className="font-bold text-primary dark:text-[#FFB400] text-2xl">
                        Ruslan K.
                    </Link>
                </div>
                <div onClick={() => setOpenMenu(true)}>
                    <MenuIcon className="fill-primaryDark dark:fill-white" />
                </div>
            </div>

            <SlideMenu isOpen={openMenu} onClose={() => setOpenMenu(false)} position="right" width={300}>
                <div className="flex md:hidden w-full bg-white dark:bg-gray-800 border-r dark:border-gray-700 items-start flex-col pt-10 pb-10 h-full overflow-auto px-6 relative">
                    {/* Close Icon */}
                    <button 
                        onClick={() => setOpenMenu(false)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        aria-label="Close menu"
                    >
                        <CloseIcon className="w-5 h-5 fill-[#2B2B2B] dark:fill-white" />
                    </button>

                    {/* Profile Section */}
                    <div className="w-full flex flex-col items-center mb-6">
                        <UserPic />
                    </div>

                    {/* Social Media Icons */}
                    <div className="w-full flex items-center justify-center gap-2.5 mb-6">
                        {user.social.map((social, index) => (
                            <Link 
                                key={index} 
                                href={social.link} 
                                className="w-9 h-9 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-[#FFA000] transition-colors shadow-sm" 
                                target="_blank"
                                aria-label={social.name}
                            >
                                <div className="w-4 h-4 text-white">
                                    {social.icon}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <div className="w-full flex items-center justify-center mb-6">
                        <ThemeToggle />
                    </div>

                    {/* Navigation */}
                    <div className="w-full mb-6">
                        <Navigations />
                    </div>

                    {/* Personal Information */}
                    <div className="w-full mb-6">
                        <h3 className="text-xs font-bold text-[#2B2B2B] dark:text-white mb-3 uppercase tracking-wider">Personal Information</h3>
                        <div className="space-y-2.5">
                            <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 pb-1.5">
                                <span className="text-xs text-[#767676] dark:text-gray-400 font-medium">Residence:</span>
                                <span className="text-xs font-bold text-[#2B2B2B] dark:text-white">{user.personalInfo.residence}</span>
                            </div>
                            <div className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-700 pb-1.5">
                                <span className="text-xs text-[#767676] dark:text-gray-400 font-medium">Freelance:</span>
                                <span className="text-xs font-bold text-green-600 dark:text-green-400">{user.personalInfo.freelance}</span>
                            </div>
                            <div className="flex justify-between items-start py-1 border-b border-gray-100 dark:border-gray-700 pb-1.5">
                                <span className="text-xs text-[#767676] dark:text-gray-400 font-medium">Address:</span>
                                <span className="text-xs font-bold text-[#2B2B2B] dark:text-white text-right max-w-[65%] leading-relaxed">{user.personalInfo.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="w-full mb-6">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xs font-bold text-[#2B2B2B] dark:text-white uppercase tracking-wider">Skills</h3>
                            <button
                                onClick={() => setSkillsExpanded(prev => !prev)}
                                className="text-xs text-[#FFB400] dark:text-[#FFB400] font-medium hover:text-[#FFA000] dark:hover:text-[#FFA000] transition-colors cursor-pointer"
                            >
                                {skillsExpanded ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                        <div className="overflow-hidden">
                            {(() => {
                                const prioritySkills = ['JavaScript', 'React', 'Next.js'];
                                const allSkills = [...user.technicalSkills];
                                const sortedSkills = [
                                    ...allSkills.filter(skill => prioritySkills.includes(skill.name)),
                                    ...allSkills.filter(skill => !prioritySkills.includes(skill.name))
                                ];
                                return sortedSkills.map((skill, index) => {
                                    const isPriority = prioritySkills.includes(skill.name);
                                    const shouldShow = skillsExpanded || isPriority;
                                    
                                    // Calculate delay based on animation direction
                                    const delay = skillsExpanded 
                                        ? `${index * 50}ms` 
                                        : isPriority 
                                            ? `${(prioritySkills.length - 1 - prioritySkills.indexOf(skill.name)) * 50}ms`
                                            : `${(sortedSkills.length - index) * 50}ms`;
                                    
                                    return (
                                        <div 
                                            key={`${skill.name}-${index}`}
                                            className={`transition-all duration-500 ease-in-out ${
                                                shouldShow 
                                                    ? 'opacity-100 max-h-[100px] translate-y-0' 
                                                    : 'opacity-0 max-h-0 -translate-y-4 overflow-hidden'
                                            }`}
                                            style={{ transitionDelay: delay }}
                                        >
                                            <ProgressBar label={skill.name === 'React' ? 'React.js' : skill.name} level={skill.level} />
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>

                    {/* Download CV Button */}
                    <div className="w-full mb-6">
                        <a 
                            href="/CV-Kolibabchuk.pdf" 
                            download
                            className="w-full bg-[#FFB400] text-white font-bold py-2.5 px-5 rounded-sm flex items-center justify-center gap-2 hover:bg-[#FFA000] transition-colors shadow-md text-xs uppercase tracking-wider cursor-pointer"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            DOWNLOAD CV
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="w-full mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-center text-xs text-[#767676] dark:text-gray-400 leading-relaxed mb-1">Copyright © {new Date().getFullYear()} Ruslan Kolibabchuk.</p>
                        <p className="text-center text-xs text-[#767676] dark:text-gray-400 leading-relaxed">All rights reserved.</p>
                    </div>
                </div>
            </SlideMenu>
        </>

    )
}
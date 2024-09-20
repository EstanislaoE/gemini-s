"use client";

import React, { useState } from 'react';
import { Activity, CircleHelp, Menu, Plus, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    //console.log(isOpen);

    return (
        <div className='min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4 '>
            <div>
                <Menu
                    size={25} onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-softTextColor' />

                <div className='mt-2.5 inline-flex py-2.5 items-center gap-2.5 px-4 bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer '>
                    <Plus size={20} className='cursor-pointer text-softTextColor' />
                    {isOpen ? <p>New chat</p> : null}
                </div>
                {isOpen ? <div className='flex flex-col'> <p className='mt-8 mb-5-'>Recent</p>
                </div> : null}
            </div>
            <div className='flex flex-col gap-5'>
                <div className='pr-2.5 cursor-pointer flex gap-2 text-gray-400 item-center'>
                    <CircleHelp size={20} className='text-softTextColor' />
                    {isOpen ? <p>Help</p> : null}
                </div>
                <div className='pr-2.5 cursor-pointer flex gap-2 text-gray-400 item-center'>
                    <Activity size={20} className='text-softTextColor' />
                    {isOpen ? <p>Activity</p> : null}
                </div>
                <div className='pr-2.5 cursor-pointer flex gap-2 text-gray-400 item-center'>
                    <Settings size={20} className='text-softTextColor' />
                    {isOpen ? <ThemeToggle /> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar
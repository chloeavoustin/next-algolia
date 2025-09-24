'use client';
import React from 'react';
import SortBy from '@/components/sidebar/SortBy';
import Filters from '@/components/sidebar/Filters';
import Search from '@/components/sidebar/Search';

type SidebarProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ setSidebarOpen }: SidebarProps) {
  return (
    <div className='w-3/4 md:w-full bg-white p-6 overflow-y-auto relative z-20'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>Filters & Search</h2>

        <button
          onClick={() => setSidebarOpen(false)}
          className='font-bold md:hidden'
          aria-label='Close filters sidebar'
        >
          ✕
        </button>
      </div>
      <div className='space-y-6'>
        <Search />
        <SortBy />
        <Filters />
      </div>
    </div>
  );
}

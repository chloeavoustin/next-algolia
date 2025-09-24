'use client';
import React from 'react';
import { SearchBox } from 'react-instantsearch';

export default function Sidebar() {
  return (
    <div>
      <h3 className='text-xs font-medium mb-2 block'>Search</h3>
      <SearchBox placeholder='Search for products' />
    </div>
  );
}

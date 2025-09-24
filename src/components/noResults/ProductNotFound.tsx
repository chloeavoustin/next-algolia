'use client';

import Link from 'next/link';
import React from 'react';

interface ProductNotFoundProps {
  id?: string;
}

export default function ProductNotFound({ id }: ProductNotFoundProps) {
  return (
    <div className='flex flex-col items-center justify-center text-center py-20 px-6 gap-4 max-w-md mx-auto'>
      <h1 className='text-xl font-bold'>Product not found.</h1>
      <p className='text-gray-500 text-sm'>
        The product <strong>{id}</strong> you are looking for may have been
        removed or never existed.
      </p>
      <div className='flex gap-4 text-xs'>
        <Link href='/products' className='btn' role='button'>
          Go back to products
        </Link>
      </div>
    </div>
  );
}

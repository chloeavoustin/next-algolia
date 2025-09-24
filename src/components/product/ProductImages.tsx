'use client';

import React from 'react';
import Image from 'next/image';

interface ProductImagesProps {
  images: string[];
  name: string;
}

export default function ProductImages({ images, name }: ProductImagesProps) {
  return (
    <div className='col-span-4 lg:col-span-3 flex lg:grid lg:grid-cols-2 gap-4 overflow-x-scroll snap-x'>
      {images.map((img: string, index: number) => (
        <div
          key={img + index}
          className='relative min-w-[90%] w-full aspect-[0.794] lg:col-span-1'
        >
          <Image
            src={img}
            alt={`${name} - view ${index + 1}`}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 300px'
            loading={index === 0 ? 'eager' : 'lazy'}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}

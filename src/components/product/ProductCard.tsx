import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/type/product';
import { PRODUCT_ASPECT_RATIO } from '@/constants/business';

interface ProductCardProps {
  hit: Product;
}

export default function ProductCard({ hit }: ProductCardProps) {
  return (
    <div className='col-span-1'>
      <Link href={`/products/${hit.objectID}`} className='flex flex-col gap-5'>
        <div className={`relative w-full aspect-[${PRODUCT_ASPECT_RATIO}]`}>
          <Image
            src={hit.image}
            alt={hit.name}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 300px'
          />
        </div>
        <div>
          <h2 className='uppercase text-xs'>{hit.name}</h2>
          <span className='text-xs text-gray-400'>{hit.price} €</span>
        </div>
      </Link>
    </div>
  );
}

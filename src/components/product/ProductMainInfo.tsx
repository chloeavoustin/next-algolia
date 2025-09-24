'use client';

import React from 'react';
import Link from 'next/link';
import ProductImages from '@/components/product/ProductImages';
import SizesSelector from '@/components/product/SizesSelector';
import QuantitySelector from '@/components/product/QuantitySelector';
import { Product } from '@/type/product';
import { useProductSelection } from '@/hooks/useProductSelection';
import { PRODUCT_FIELDS } from '@/constants/business';

interface ProductMainInfoProps {
  product: Product;
}

export default function ProductMainInfo({ product }: ProductMainInfoProps) {
  const {
    quantity,
    selectedSize,
    canAddToCart,
    increaseQuantity,
    decreaseQuantity,
    selectSize,
    getCartItem,
  } = useProductSelection(product);

  return (
    <div className='p-6 grid grid-cols-4 gap-6'>
      <ProductImages images={product.images} name={product.name} />
      <div className='flex flex-col gap-7 col-span-4 lg:col-span-1'>
        <span className='text-xs uppercase block'>
          <Link
            href={'/products'}
            className='border-b border-gray-800 cursor-pointer'
          >
            Shoes
          </Link>{' '}
          / {product.category}
        </span>
        <div>
          <h1 className='text-xl uppercase'>{product.name}</h1>
          <p className='text-l text-gray-400 mt-2'>{product.price} €</p>
        </div>

        <SizesSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          selectSize={selectSize}
        />

        <QuantitySelector
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

        <button
          className='w-full text-sm btn'
          disabled={!canAddToCart}
          type='button'
          aria-label='Add to cart'
          onClick={() => {
            console.log('Add to cart', getCartItem());
          }}
        >
          Add to cart
        </button>

        {product.description && (
          <div>
            <h2 className='text-xs font-medium mb-2 block'>Description</h2>
            <p className='text-sm'>{product.description}</p>
          </div>
        )}

        <ul className='text-gray-400 text-xs gap-1 flex flex-col'>
          {PRODUCT_FIELDS.map((key) =>
            product[key] ? (
              <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {product[key]}
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </div>
  );
}

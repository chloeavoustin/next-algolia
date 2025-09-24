'use client';

import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

export default function QuantitySelector({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    decreaseQuantity();
  };

  const handleIncrease = () => {
    increaseQuantity();
  };

  return (
    <div className='text-sm'>
      <span className='text-xs font-medium mb-2 block'>Quantity:</span>
      <div className='flex items-center border rounded'>
        <button
          type='button'
          onClick={handleDecrease}
          className='px-3 py-1 text-lg border-r transition hover:bg-gray-100'
          aria-label='Decrease quantity'
          disabled={quantity <= 1}
        >
          −
        </button>
        <span className='px-4 w-full text-center'>{quantity}</span>
        <button
          type='button'
          onClick={handleIncrease}
          aria-label='Increase quantity'
          className='px-3 py-1 text-lg border-l transition hover:bg-gray-100'
        >
          +
        </button>
      </div>
    </div>
  );
}

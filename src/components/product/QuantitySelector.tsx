'use client';

import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantitySelector({
  quantity,
  setQuantity,
}: QuantitySelectorProps) {
  return (
    <div className="text-sm">
      <span className="text-xs font-medium mb-2 block">Quantity:</span>
      <div className="flex items-center border rounded">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 py-1 text-lg border-r transition hover:bg-gray-100"
          aria-label="Decrease quantity"
          disabled={quantity <= 1}
        >
          −
        </button>
        <span className="px-4 w-full text-center">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Increase quantity"
          className="px-3 py-1 text-lg border-l transition hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

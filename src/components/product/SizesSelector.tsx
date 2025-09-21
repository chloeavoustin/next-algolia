'use client';

import React from 'react';

interface SizesSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function SizesSelector({
  sizes,
  selectedSize,
  setSelectedSize,
}: SizesSelectorProps) {
  const handleSizeClick = (size: string) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  return (
    <div>
      <span className="text-xs font-medium mb-2 block">Size:</span>
      {sizes.length > 0 ? (
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size: string) => (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              aria-label={`Select size ${size}`}
              className={`border p-3 text-sm cursor-pointer transition ${
                selectedSize === size
                  ? 'bg-gray-800 text-white border-gray-800 focus:bg-gray-200 focus:text-gray-800'
                  : 'hover:bg-gray-100'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No sizes available</p>
      )}
    </div>
  );
}

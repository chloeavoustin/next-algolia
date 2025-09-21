import React from 'react';
import { useHits, UseHitsProps } from 'react-instantsearch';
import ProductCard from '@/components/product/ProductCard';

export default function CustomHits(props: UseHitsProps) {
  const { items, sendEvent } = useHits(props);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-[2px]">
      {items.map((hit) => (
        <div
          className="col-span-1"
          key={hit.objectID}
          onClick={() => sendEvent('click', hit, 'Hit Clicked')}
          onKeyDown={(e) =>
            e.key === 'Enter' && sendEvent('click', hit, 'Hit Clicked Keyboard')
          }
        >
          <ProductCard hit={hit} />
        </div>
      ))}
    </div>
  );
}

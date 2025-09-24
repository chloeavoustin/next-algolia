import React from 'react';
import { useRefinementList } from 'react-instantsearch';

import type { UseRefinementListProps } from 'react-instantsearch';

export default function CustomRefinementList(props: UseRefinementListProps) {
  const { attribute } = props;
  const { items, refine, canRefine } = useRefinementList(props);

  if (!canRefine && items.length === 0) {
    return null;
  }

  return (
    <>
      <span className='text-xs font-medium mb-2 block border-b pb-1'>
        {attribute.charAt(0).toUpperCase() + attribute.slice(1)}
      </span>
      <ul>
        {items.map((item) => (
          <li key={item.value} className='hover:opacity-75 transition'>
            <label className='flex items-baseline gap-2 cursor-pointer'>
              <input
                type='checkbox'
                checked={item.isRefined}
                onChange={() => refine(item.value)}
                aria-label={`Refine by ${item.label}`}
              />
              <span>
                {item.label}
                <span className='text-zinc-400 text-xs ml-2'>
                  ({item.count})
                </span>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

import React from 'react';
import { useSortBy, UseSortByProps } from 'react-instantsearch';

export default function CustomSortBy(props: UseSortByProps) {
  const { currentRefinement, options, refine } = useSortBy(props);

  return (
    <div className="border pr-1">
      <select
        className="w-full text-sm p-2 cursor-pointer"
        aria-label="Sort products"
        onChange={(event) => refine(event.target.value)}
        value={currentRefinement}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

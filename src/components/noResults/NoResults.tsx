import React from 'react';
import {
  useClearRefinements,
  useInstantSearch,
  useSearchBox,
} from 'react-instantsearch';

export default function NoResults() {
  const { indexUiState } = useInstantSearch();
  const { refine, canRefine } = useClearRefinements();
  const { clear } = useSearchBox();

  return (
    <div className='flex flex-col items-center justify-center text-center py-20 gap-4'>
      <p className='text-xl font-bold'>
        No results for <q>{indexUiState.query}</q>.
      </p>
      <p className='text-gray-500 text-sm'>
        Try adjusting your search or clearing filters to find products.
      </p>
      <div className='flex gap-4 text-xs'>
        {canRefine && (
          <button
            className='btn'
            onClick={() => refine()}
            type='button'
            aria-label='Clear Filters'
          >
            Clear Filters
          </button>
        )}
        {indexUiState.query && (
          <button
            className='btn'
            onClick={() => clear()}
            type='button'
            aria-label='Clear Search'
          >
            Clear Search
          </button>
        )}
      </div>
    </div>
  );
}

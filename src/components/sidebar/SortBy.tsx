'use client';
import React from 'react';
import CustomSortBy from '@/components/algolia/CustomSortBy';
import { indexName } from '@/lib/utils/algoliaClient';

export default function SortBy() {
  return (
    <div>
      <h3 className="text-xs font-medium mb-2 block">Sort by</h3>
      <CustomSortBy
        items={[
          { value: indexName, label: 'Relevance' },
          { value: `${indexName}_prices_asc`, label: 'Price Ascending' },
          { value: `${indexName}_prices_desc`, label: 'Price Descending' },
        ]}
      />
    </div>
  );
}

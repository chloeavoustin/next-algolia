'use client';
import React from 'react';
import { useDynamicWidgets } from 'react-instantsearch';
import CustomRefinementList from '@/components/algolia/CustomRefinementList';
import { ALGOLIA_CONFIG } from '@/constants/config';

function FiltersComponent() {
  const { attributesToRender } = useDynamicWidgets();

  return (
    <>
      {attributesToRender.map((attribute, index) => (
        <React.Fragment key={`${attribute}-${index}`}>
          <CustomRefinementList
            attribute={attribute}
            limit={ALGOLIA_CONFIG.REFINEMENT_LIMIT}
          />
        </React.Fragment>
      ))}
    </>
  );
}

const Filters = React.memo(FiltersComponent);

export default Filters;

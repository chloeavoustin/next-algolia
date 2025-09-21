'use client';
import React from 'react';
import { useDynamicWidgets } from 'react-instantsearch';
import CustomRefinementList from '@/components/algolia/CustomRefinementList';

function FiltersComponent() {
  const { attributesToRender } = useDynamicWidgets();

  return (
    <>
      {attributesToRender.map((attribute, index) => (
        <React.Fragment key={`${attribute}-${index}`}>
          <CustomRefinementList attribute={attribute} limit={30} />
        </React.Fragment>
      ))}
    </>
  );
}

const Filters = React.memo(FiltersComponent);

export default Filters;

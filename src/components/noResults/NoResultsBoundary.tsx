import React from 'react';
import { useInstantSearch } from 'react-instantsearch';

interface NoResultsBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export default function NoResultsBoundary({
  children,
  fallback,
}: NoResultsBoundaryProps) {
  const { results } = useInstantSearch();

  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

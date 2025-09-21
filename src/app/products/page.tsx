'use client';

import React, { useState } from 'react';
import { InstantSearch, Configure } from 'react-instantsearch';
import { searchClient, indexName } from '@/lib/utils/algoliaClient';
import Sidebar from '@/components/sidebar/Sidebar';
import CustomHits from '@/components/algolia/CustomHits';
import NoResultsBoundary from '@/components/noResults/NoResultsBoundary';
import NoResults from '@/components/noResults/NoResults';

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexName}
      insights
      routing
    >
      <Configure hitsPerPage={100} />

      <div className="p-6 md:pl-0">
        <div className="mb-4 md:hidden">
          <button
            className="w-full text-sm btn"
            onClick={() => setSidebarOpen(true)}
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
          >
            Filters & Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <aside
            id="sidebar"
            role="dialog"
            aria-modal={sidebarOpen}
            className={`md:block ${
              sidebarOpen ? 'flex inset-0 z-20 fixed' : 'hidden'
            }`}
          >
            <Sidebar setSidebarOpen={setSidebarOpen} />

            {sidebarOpen && (
              <div
                className="flex-1 bg-gray-800 bg-opacity-50 fixed inset-0 z-10"
                onClick={() => setSidebarOpen(false)}
              />
            )}
          </aside>

          <main className="col-span-1 md:col-span-2 lg:col-span-3">
            <NoResultsBoundary fallback={<NoResults />}>
              <CustomHits />
            </NoResultsBoundary>
          </main>
        </div>
      </div>
    </InstantSearch>
  );
}

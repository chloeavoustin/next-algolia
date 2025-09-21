import { algoliasearch } from 'algoliasearch';

if (
  !process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ||
  !process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ||
  !process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
) {
  throw new Error('Algolia environment variables are missing');
}

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
);

export const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

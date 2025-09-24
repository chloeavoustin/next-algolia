import { algoliasearch } from 'algoliasearch';

/**
 * Validates that all required Algolia environment variables are present
 * Throws an error if any required variables are missing
 */
if (
  !process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ||
  !process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ||
  !process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME
) {
  throw new Error('Algolia environment variables are missing');
}

/**
 * Configured Algolia search client instance
 * Uses environment variables for authentication
 */
export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
);

/**
 * The name of the Algolia index to search
 * Retrieved from environment variables
 */
export const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

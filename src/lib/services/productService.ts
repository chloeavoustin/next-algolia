import { unstable_cache } from 'next/cache';
import { searchClient, indexName } from '@/lib/utils/algoliaClient';
import { Product, isValidProduct } from '@/type/product';
import { CACHE_CONFIG } from '@/constants/config';

/**
 * Fetches a single product from Algolia search index
 * Handles 404 errors gracefully by returning null for non-existent products
 *
 * @param id - The product object ID to fetch
 * @returns Promise resolving to the product data or null if not found
 * @throws Error for non-404 API errors
 */
async function fetchProductFromAlgolia(id: string): Promise<unknown | null> {
  try {
    return await searchClient.getObject({ objectID: id, indexName });
  } catch (error) {
    if (
      error &&
      typeof error === 'object' &&
      'status' in error &&
      error.status === 404
    ) {
      return null;
    }
    throw error;
  }
}

/**
 * Cached product retrieval with automatic validation
 * Uses Next.js unstable_cache for performance optimization with revalidation
 * Validates the returned data using the isValidProduct type guard
 *
 * @param id - The product object ID to retrieve
 * @returns Promise resolving to a validated Product object or null if not found/invalid
 */
export const getProduct = (id: string) =>
  unstable_cache(
    async (): Promise<Product | null> => {
      const data = await fetchProductFromAlgolia(id);
      return data && isValidProduct(data) ? data : null;
    },
    [CACHE_CONFIG.PRODUCT_CACHE_KEY, id],
    {
      revalidate: CACHE_CONFIG.PRODUCT_REVALIDATE_TIME,
      tags: [
        CACHE_CONFIG.PRODUCT_CACHE_KEY,
        `${CACHE_CONFIG.PRODUCT_CACHE_KEY}:${id}`,
      ],
    },
  )();

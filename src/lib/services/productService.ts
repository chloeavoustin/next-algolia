import { unstable_cache } from 'next/cache';
import { searchClient, indexName } from '@/lib/utils/algoliaClient';
import { Product, isValidProduct } from '@/type/product';
import { CACHE_CONFIG } from '@/constants/config';

/**
 * Fetch produit depuis Algolia
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
 * Cache produit avec revalidation 1h
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

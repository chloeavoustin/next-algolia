import { unstable_cache } from 'next/cache';
import { searchClient, indexName } from '@/lib/utils/algoliaClient';
import { Product, isValidProduct } from '@/type/product';

/**
 * Fetch produit depuis Algolia
 */
async function fetchProductFromAlgolia(id: string): Promise<unknown> {
  return await searchClient.getObject({ objectID: id, indexName });
}

/**
 * Cache produit avec revalidation 1h
 */
export const getProduct = unstable_cache(
  async (id: string): Promise<Product | null> => {
    const data = await fetchProductFromAlgolia(id);
    return isValidProduct(data) ? data : null;
  },
  ['product-cache'],
  { revalidate: 3600 },
);

/**
 * Configuration technique de l'application
 */

export const CACHE_CONFIG = {
  PRODUCT_REVALIDATE_TIME: 3600, // 1 heure en secondes
  PRODUCT_CACHE_KEY: 'product-cache',
} as const;

export const ALGOLIA_CONFIG = {
  HITS_PER_PAGE: 100,
  REFINEMENT_LIMIT: 30,
} as const;

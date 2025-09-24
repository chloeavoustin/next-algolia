/**
 * Technical configuration constants for the application
 * Contains caching and API configuration settings
 */

/**
 * Cache configuration for product data
 * Controls how long product data is cached and cache key structure
 */
export const CACHE_CONFIG = {
  PRODUCT_REVALIDATE_TIME: 3600, // 1 hour in seconds
  PRODUCT_CACHE_KEY: 'product-cache',
} as const;

/**
 * Algolia search configuration
 * Controls search behavior and pagination settings
 */
export const ALGOLIA_CONFIG = {
  HITS_PER_PAGE: 100,
  REFINEMENT_LIMIT: 30,
} as const;

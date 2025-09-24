/**
 * Business logic constants
 * Contains default values and configuration for product-related operations
 */

/**
 * Default values for product quantity management
 */
export const PRODUCT_DEFAULTS = {
  MIN_QUANTITY: 1,
  DEFAULT_QUANTITY: 1,
} as const;

/**
 * Standard aspect ratio for product images (width/height)
 * Based on typical shoe product photography standards
 */
export const PRODUCT_ASPECT_RATIO = 0.794;

/**
 * Optional product fields that can be displayed in product details
 * These fields are shown only if they exist on the product object
 */
export const PRODUCT_FIELDS = ['gender', 'availability', 'sku'] as const;

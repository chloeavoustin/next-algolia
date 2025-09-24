'use client';

import { useState } from 'react';
import { Product } from '@/type/product';
import { PRODUCT_DEFAULTS } from '@/constants/business';

/**
 * Return type for the useProductSelection hook
 * Provides all necessary state and actions for product selection functionality
 */
interface UseProductSelectionReturn {
  quantity: number;
  selectedSize: string | null;
  canAddToCart: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  selectSize: (_size: string) => void;
  getCartItem: () => {
    id: string;
    size: string | null;
    quantity: number;
  };
}

/**
 * Custom hook for managing product selection state
 * Handles quantity management, size selection, and cart item generation
 *
 * @param product - The product object to manage selection for
 * @returns Object containing selection state and manipulation functions
 */
export function useProductSelection(
  product: Product,
): UseProductSelectionReturn {
  const [quantity, setQuantity] = useState<number>(
    PRODUCT_DEFAULTS.DEFAULT_QUANTITY,
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(PRODUCT_DEFAULTS.MIN_QUANTITY, prev - 1));
  };

  const selectSize = (size: string) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  const canAddToCart = selectedSize !== null;

  const getCartItem = () => ({
    id: product.objectID,
    size: selectedSize,
    quantity,
  });

  return {
    quantity,
    selectedSize,
    canAddToCart,
    increaseQuantity,
    decreaseQuantity,
    selectSize,
    getCartItem,
  };
}

import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useProductSelection } from '@/hooks/useProductSelection';
import { Product } from '@/type/product';

const mockProduct: Product = {
  image: 'https://example.com/image.jpg',
  images: ['https://example.com/image.jpg'],
  name: 'Test Shoe',
  category: 'Running',
  price: 129.99,
  sizes: ['40', '41', '42', '43'],
  objectID: 'test-shoe-1',
  description: 'A great running shoe',
};

describe('useProductSelection', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useProductSelection(mockProduct));

    expect(result.current.quantity).toBe(1);
    expect(result.current.selectedSize).toBe(null);
    expect(result.current.canAddToCart).toBe(false);
  });

  it('should increase quantity', () => {
    const { result } = renderHook(() => useProductSelection(mockProduct));

    act(() => {
      result.current.increaseQuantity();
    });

    expect(result.current.quantity).toBe(2);
  });

  it('should decrease quantity but not below minimum', () => {
    const { result } = renderHook(() => useProductSelection(mockProduct));

    // Try to decrease below minimum (should stay at 1)
    act(() => {
      result.current.decreaseQuantity();
    });
    expect(result.current.quantity).toBe(1);

    // Increase first, then decrease
    act(() => {
      result.current.increaseQuantity();
      result.current.increaseQuantity();
    });
    expect(result.current.quantity).toBe(3);

    act(() => {
      result.current.decreaseQuantity();
    });
    expect(result.current.quantity).toBe(2);
  });

  it('should select and deselect size', () => {
    const { result } = renderHook(() => useProductSelection(mockProduct));

    // Select a size
    act(() => {
      result.current.selectSize('42');
    });
    expect(result.current.selectedSize).toBe('42');
    expect(result.current.canAddToCart).toBe(true);

    // Deselect the same size
    act(() => {
      result.current.selectSize('42');
    });
    expect(result.current.selectedSize).toBe(null);
    expect(result.current.canAddToCart).toBe(false);
  });

  it('should switch between different sizes', () => {
    const { result } = renderHook(() => useProductSelection(mockProduct));

    act(() => {
      result.current.selectSize('41');
    });
    expect(result.current.selectedSize).toBe('41');

    act(() => {
      result.current.selectSize('43');
    });
    expect(result.current.selectedSize).toBe('43');
  });

  it('should return correct cart item', () => {
    const { result } = renderHook(() => useProductSelection(mockProduct));

    act(() => {
      result.current.selectSize('42');
      result.current.increaseQuantity();
      result.current.increaseQuantity();
    });

    const cartItem = result.current.getCartItem();
    expect(cartItem).toEqual({
      id: 'test-shoe-1',
      size: '42',
      quantity: 3,
    });
  });

  it('should not allow adding to cart without size selection', () => {
    const { result } = renderHook(() => useProductSelection(mockProduct));

    act(() => {
      result.current.increaseQuantity();
    });

    expect(result.current.quantity).toBe(2);
    expect(result.current.selectedSize).toBe(null);
    expect(result.current.canAddToCart).toBe(false);
  });
});

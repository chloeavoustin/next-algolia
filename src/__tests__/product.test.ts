import { describe, it, expect } from 'vitest';
import { isValidProduct } from '@/type/product';

describe('isValidProduct', () => {
  it('should return true for a valid product', () => {
    const validProduct = {
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
      ],
      name: 'Test Product',
      category: 'Shoes',
      price: 99.99,
      sizes: ['41', '42', '43'],
      objectID: 'test-product-1',
    };

    expect(isValidProduct(validProduct)).toBe(true);
  });

  it('should return false for null', () => {
    expect(isValidProduct(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isValidProduct(undefined)).toBe(false);
  });

  it('should return false for non-object values', () => {
    expect(isValidProduct('string')).toBe(false);
    expect(isValidProduct(123)).toBe(false);
    expect(isValidProduct(true)).toBe(false);
  });

  it('should return false when required string fields are missing', () => {
    const invalidProduct = {
      images: ['https://example.com/image.jpg'],
      category: 'Shoes',
      price: 99.99,
      sizes: ['41', '42'],
      objectID: 'test-1',
      // missing 'image' and 'name'
    };

    expect(isValidProduct(invalidProduct)).toBe(false);
  });

  it('should return false when required array fields are missing', () => {
    const invalidProduct = {
      image: 'https://example.com/image.jpg',
      name: 'Test Product',
      category: 'Shoes',
      price: 99.99,
      objectID: 'test-1',
      // missing 'images' and 'sizes' arrays
    };

    expect(isValidProduct(invalidProduct)).toBe(false);
  });

  it('should return false when price is not a number', () => {
    const invalidProduct = {
      image: 'https://example.com/image.jpg',
      images: ['https://example.com/image.jpg'],
      name: 'Test Product',
      category: 'Shoes',
      price: '99.99', // string instead of number
      sizes: ['41', '42'],
      objectID: 'test-1',
    };

    expect(isValidProduct(invalidProduct)).toBe(false);
  });

  it('should return true even with optional fields present', () => {
    const productWithOptionals = {
      image: 'https://example.com/image.jpg',
      images: ['https://example.com/image.jpg'],
      name: 'Test Product',
      category: 'Shoes',
      price: 99.99,
      sizes: ['41', '42'],
      objectID: 'test-1',
      description: 'A great product',
      gender: 'unisex',
      availability: 'in stock',
      sku: 'SKU123',
    };

    expect(isValidProduct(productWithOptionals)).toBe(true);
  });
});

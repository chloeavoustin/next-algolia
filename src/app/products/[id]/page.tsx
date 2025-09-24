import React from 'react';
import type { Metadata } from 'next';
import ProductMainInfo from '@/components/product/ProductMainInfo';
import ProductNotFound from '@/components/noResults/ProductNotFound';
import { getProduct } from '@/lib/services/productService';

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return <ProductNotFound id={id} />;

  return <ProductMainInfo product={product} />;
}

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const { id } = await params;

  return {
    title: 'Product Not Found',
    description: `The product with ID ${id} was not found.`,
  };
}

import React from 'react';
import type { Metadata } from 'next';
import ProductMainInfo from '@/components/product/ProductMainInfo';
import ProductNotFound from '@/components/noResults/ProductNotFound';
import { getProduct } from '@/lib/services/productService';

interface ProductDetailProps {
  params: { id: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const product = await getProduct(params.id);

  if (!product) return <ProductNotFound id={params.id} />;

  return <ProductMainInfo product={product} />;
}

export async function generateMetadata({
  params,
}: ProductDetailProps): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: `The product with ID ${params.id} was not found.`,
    };
  }

  return {
    title: product.name,
    description: product.description || `Buy ${product.name} in our store.`,
    openGraph: {
      title: product.name,
      description: product.description || `Buy ${product.name} in our store.`,
      images: product.images.length > 0 ? [{ url: product.images[0] }] : [],
    },
  };
}

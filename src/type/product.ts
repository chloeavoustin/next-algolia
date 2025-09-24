export type Product = {
  image: string;
  images: string[];
  name: string;
  category: string;
  price: number;
  sizes: string[];
  objectID: string;
  description?: string;
  gender?: string;
  availability?: string;
  sku?: string;
};

export function isValidProduct(data: unknown): data is Product {
  if (typeof data !== 'object' || data === null) return false;

  const obj = data as Record<string, unknown>;

  return (
    typeof obj.image === 'string' &&
    Array.isArray(obj.images) &&
    typeof obj.name === 'string' &&
    typeof obj.category === 'string' &&
    typeof obj.price === 'number' &&
    Array.isArray(obj.sizes) &&
    typeof obj.objectID === 'string'
  );
}

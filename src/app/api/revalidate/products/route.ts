import { revalidateTag } from 'next/cache';
import { CACHE_CONFIG } from '@/constants/config';

export async function POST() {
  try {
    revalidateTag(CACHE_CONFIG.PRODUCT_CACHE_KEY);

    return new Response(
      JSON.stringify({ success: true, message: 'Product cache revalidated' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: String(error) }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}

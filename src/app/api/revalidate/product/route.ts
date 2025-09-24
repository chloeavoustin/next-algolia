import { revalidateTag } from 'next/cache';
import { CACHE_CONFIG } from '@/constants/config';

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing product id' }),
        { status: 400 },
      );
    }

    revalidateTag(`${CACHE_CONFIG.PRODUCT_CACHE_KEY}-${id}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Product ${id} cache revalidated`,
      }),
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

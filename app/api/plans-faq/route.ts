import { NextRequest, NextResponse } from 'next/server';
import { listPlanFaqs } from '@/lib/api/plans-faq';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const items = await listPlanFaqs(locale);

    return NextResponse.json(
      { items },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  } catch (error) {
    console.error('[API /api/plans-faq] Error:', error);
    return NextResponse.json(
      { items: [] },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  }
}

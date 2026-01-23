import { NextResponse } from 'next/server';
import { listIndustrySolutions } from '@/lib/api/industry-solutions';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const showOnHomePage = searchParams.get('showOnHomePage') === 'true' ? true : undefined;

    const solutions = await listIndustrySolutions(locale, showOnHomePage);

    return NextResponse.json(
      solutions.map((solution) => ({
        id: String(solution.id),
        title: String(solution.title || ''),
        description: String(solution.description || ''),
        icon: String(solution.icon || ''),
        showOnHomePage: Boolean(solution.showOnHomePage ?? false),
        locale: String(solution.locale || ''),
      })),
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error: any) {
    console.error('[API /api/industry-solutions] Error:', error);
    // If table doesn't exist or other DB error, return empty array
    return NextResponse.json([], {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  }
}

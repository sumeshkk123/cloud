import { NextResponse } from 'next/server';
import { listIndustrySolutions } from '@/lib/api/industry-solutions';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const showOnHomePage = searchParams.get('showOnHomePage') === 'true' ? true : undefined;

    console.log(`[API /api/industry-solutions] Fetching locale=${locale}, showOnHomePage=${showOnHomePage}`);

    const solutions = await listIndustrySolutions(locale, showOnHomePage);
    console.log(`[API /api/industry-solutions] Found ${solutions.length} solutions`);
    if (solutions.length > 0) {
      console.log(`[API /api/industry-solutions] Sample keys: ${Object.keys(solutions[0]).join(', ')}`);
      console.log(`[API /api/industry-solutions] Sample slug: "${(solutions[0] as any).slug}"`);
    }

    return NextResponse.json(
      solutions.map((solution) => ({
        id: String(solution.id),
        slug: String((solution as any).slug || ''),
        title: String(solution.title || ''),
        debugKeys: Object.keys(solution), // <--- DEBUG ONLY
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
    return NextResponse.json([], {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
    });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getPublishedBlogPostsForHome } from '@/lib/api/blog';

/** Public API: get published blog posts for home page (no auth). */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') ?? 'en';
    const limit = Math.min(Number(searchParams.get('limit')) || 3, 10);

    const posts = await getPublishedBlogPostsForHome(locale, limit);
    return NextResponse.json(posts, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
    });
  } catch (error) {
    console.error('[API] Error fetching published blog posts:', error);
    return NextResponse.json([], { status: 200 });
  }
}

import { NextResponse } from 'next/server';

/**
 * API endpoint to find a blog post in a target locale by matching slug from source locale
 * Proxies request to live businessmlmsoftware.com site to get real-time data
 * Used by language switcher to find the correct blog post slug when switching languages
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sourceSlug = searchParams.get('sourceSlug');
  const sourceLocale = searchParams.get('sourceLocale');
  const targetLocale = searchParams.get('targetLocale');

  if (!sourceSlug || !sourceLocale || !targetLocale) {
    return NextResponse.json(
      { error: 'Missing required parameters: sourceSlug, sourceLocale, targetLocale' },
      { status: 400 }
    );
  }

  try {
    // Proxy request to live businessmlmsoftware.com site
    const liveSiteUrl = new URL('https://businessmlmsoftware.com/api/blog/match');
    liveSiteUrl.searchParams.set('sourceSlug', sourceSlug);
    liveSiteUrl.searchParams.set('sourceLocale', sourceLocale);
    liveSiteUrl.searchParams.set('targetLocale', targetLocale);

    const response = await fetch(liveSiteUrl.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to fetch from live site' }));
      return NextResponse.json(
        errorData,
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying blog match request:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // If it's a timeout error, provide a helpful message
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout: Live site did not respond in time', matched: false },
        { status: 504 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to match blog post', details: errorMessage, matched: false },
      { status: 500 }
    );
  }
}

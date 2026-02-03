import { NextResponse } from 'next/server';
import { listIntegrations } from '@/lib/api/integrations';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const integrations = await listIntegrations(locale);

    // If no integrations found for the requested locale, fall back to English
    if (locale !== 'en' && integrations.length === 0) {
      const englishIntegrations = await listIntegrations('en');
      return NextResponse.json(englishIntegrations, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          'CDN-Cache-Control': 'public, s-maxage=300',
          'Vercel-CDN-Cache-Control': 'public, s-maxage=300',
        },
      });
    }

    return NextResponse.json(integrations, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'CDN-Cache-Control': 'public, s-maxage=300',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch integrations.';
    console.error('[Integrations API] Error:', message);
    return NextResponse.json([], { status: 500 });
  }
}

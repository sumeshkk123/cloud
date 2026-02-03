import { NextResponse } from 'next/server';
import { getChangelogEntries } from '@/lib/api/changelog';

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const entries = await getChangelogEntries(locale);
    
    const safeEntries = entries.map((entry) => ({
      id: String(entry.id),
      version: String(entry.version),
      title: entry.title || null,
      description: String(entry.description),
      features: entry.features || [],
      locale: String(entry.locale),
      order: entry.order,
      createdAt: entry.createdAt.toISOString(),
      updatedAt: entry.updatedAt.toISOString(),
    }));
    
    return NextResponse.json(safeEntries, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

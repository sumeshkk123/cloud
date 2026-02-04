import { NextRequest, NextResponse } from 'next/server';
import { listAICopilots } from '@/lib/api/ai-copilot';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const copilots = await listAICopilots(locale);
    
    const safeCopilots = copilots.map((copilot) => ({
      id: String(copilot.id),
      icon: copilot.icon ? String(copilot.icon) : null,
      title: String(copilot.title || ''),
      content: String(copilot.content || ''),
      locale: String(copilot.locale || ''),
    }));

    return NextResponse.json(safeCopilots, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'CDN-Cache-Control': 'public, s-maxage=300',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300',
      },
    });
  } catch (error) {
    console.error('[API /api/ai-copilot] Error:', error);
    return NextResponse.json(
      [],
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    );
  }
}

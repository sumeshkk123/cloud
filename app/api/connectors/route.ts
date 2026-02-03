import { NextRequest, NextResponse } from 'next/server';
import { listConnectors, listConnectorsBySlider } from '@/lib/api/connectors';

export const dynamic = 'force-dynamic';

/**
 * GET /api/connectors
 * Public API to fetch connectors by locale, optionally grouped by slider
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const locale = searchParams.get('locale') || 'en';
    const bySlider = searchParams.get('bySlider') === 'true';

    if (bySlider) {
      const sliders = await listConnectorsBySlider(locale);

      // If no sliders found for the requested locale, fall back to English
      if (locale !== 'en' && sliders.length === 0) {
        const fallbackSliders = await listConnectorsBySlider('en');
        return NextResponse.json(fallbackSliders);
      }

      return NextResponse.json(sliders);
    }

    const connectors = await listConnectors(locale);

    // If no connectors found for the requested locale, fall back to English
    if (locale !== 'en' && connectors.length === 0) {
      const fallbackConnectors = await listConnectors('en');
      return NextResponse.json(fallbackConnectors);
    }

    return NextResponse.json(connectors);
  } catch (error: any) {
    console.error('[GET /api/connectors] Error:', error);
    
    if (error?.message?.includes('does not exist') || error?.code === 'P2021') {
      return NextResponse.json(
        { error: 'Connectors table does not exist. Please run database migrations.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch connectors' },
      { status: 500 }
    );
  }
}

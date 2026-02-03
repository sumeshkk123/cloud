import { NextRequest, NextResponse } from 'next/server';
import { listFeatures } from '@/lib/api/features';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const showOnHomePage = searchParams.get('showOnHomePage');

    const features = await listFeatures(
      locale,
      showOnHomePage ? showOnHomePage === 'true' : undefined
    );

    return NextResponse.json(features);
  } catch (error) {
    console.error('[API] Error fetching features:', error);
    return NextResponse.json(
      { error: 'Failed to fetch features' },
      { status: 500 }
    );
  }
}

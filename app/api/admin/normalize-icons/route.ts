import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { normalizeAllIcons } from '@/scripts/normalize-icons';

/**
 * API endpoint to normalize all icon values in the database
 * POST /api/admin/normalize-icons
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Starting icon normalization via API...');
    const results = await normalizeAllIcons();

    return NextResponse.json({
      success: true,
      message: 'Icons normalized successfully',
      results,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to normalize icons.';
    console.error('Error normalizing icons:', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

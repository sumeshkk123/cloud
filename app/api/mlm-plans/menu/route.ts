import { NextResponse } from 'next/server';
import { getPlansForMenu } from '@/lib/api/mlm-plans';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'en';

  try {
    const plans = await getPlansForMenu(locale);
    return NextResponse.json(plans);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch MLM plans for menu' },
      { status: 500 }
    );
  }
}

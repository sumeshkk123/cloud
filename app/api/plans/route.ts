import { NextResponse } from 'next/server';
import {
  listMlmPlans,
} from '@/lib/api/mlm-plans';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const showOnHomePage = searchParams.get('showOnHomePage') === 'true';
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

    let plans = await listMlmPlans(locale, showOnHomePage ? true : undefined);

    // Apply limit if specified
    if (limit && limit > 0) {
      plans = plans.slice(0, limit);
    }

    return NextResponse.json(plans);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch plans.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

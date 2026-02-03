import { NextRequest, NextResponse } from 'next/server';
import { listFeatureFaqs } from '@/lib/api/features-faq';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const faqs = await listFeatureFaqs(locale);
    
    // Return in a format that matches what the component expects
    return NextResponse.json({ items: faqs });
  } catch (error) {
    console.error('[API] Error fetching feature FAQs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feature FAQs' },
      { status: 500 }
    );
  }
}

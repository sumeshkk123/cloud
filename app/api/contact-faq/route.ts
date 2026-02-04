import { NextResponse } from 'next/server';
import { listContactFaqs } from '@/lib/api/contact-faq';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const faqs = await listContactFaqs(locale);
    
    // If no FAQs for the specific locale, try fetching English ones as fallback
    if (faqs.length === 0 && locale !== 'en') {
      const englishFaqs = await listContactFaqs('en');
      return NextResponse.json(englishFaqs);
    }

    return NextResponse.json(faqs);
  } catch (error) {
    console.error('[GET /api/contact-faq] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch contact FAQs' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { listTestimonials } from '@/lib/api/testimonials';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const testimonials = await listTestimonials(locale);
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

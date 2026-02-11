import { NextRequest, NextResponse } from 'next/server';
import { listServices } from '@/lib/api/services';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const showOnHomePage = searchParams.get('showOnHomePage') === 'true' ? true : undefined;

    // Fetch services for the requested locale
    const services = await listServices(locale, showOnHomePage);
    
    // If no services found for the requested locale, fall back to English
    let finalServices = services;
    if (locale !== 'en' && services.length === 0 && showOnHomePage) {
      const englishServices = await listServices('en', showOnHomePage);
      finalServices = englishServices;
    } else if (locale !== 'en' && services.length === 0) {
      const englishServices = await listServices('en');
      finalServices = englishServices;
    }
    
    const safeServices = finalServices.map((service) => ({
      id: String(service.id),
      title: String(service.title || ''),
      description: String(service.description || ''),
      content: service.content ? String(service.content) : null,
      image: service.image ? String(service.image) : null,
      icon: service.icon ? String(service.icon) : null,
      keyBenefits: service.keyBenefits || null,
      showOnHomePage: Boolean(service.showOnHomePage ?? false),
      locale: String(service.locale || locale),
      createdAt: service.createdAt,
      updatedAt: service.updatedAt,
    }));
    
    return NextResponse.json(safeServices, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'CDN-Cache-Control': 'public, s-maxage=300',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300',
      },
    });
  } catch (error) {
    console.error('[API /api/services] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

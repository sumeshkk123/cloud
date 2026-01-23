import { NextResponse } from 'next/server';
import { listModules } from '@/lib/api/modules';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const showOnHomePage = searchParams.get('showOnHomePage') === 'true' ? true : undefined;

    // Fetch modules for the requested locale
    const modules = await listModules(locale, showOnHomePage);
    
    // If no modules found for the requested locale, fall back to English
    let finalModules = modules;
    if (locale !== 'en' && modules.length === 0 && showOnHomePage) {
      const englishModules = await listModules('en', showOnHomePage);
      finalModules = englishModules;
    } else if (locale !== 'en' && modules.length === 0) {
      const englishModules = await listModules('en');
      finalModules = englishModules;
    }
    
    return NextResponse.json(finalModules);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch modules', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

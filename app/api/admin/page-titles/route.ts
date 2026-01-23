import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getPageTitle, getPageTitlesByLocale, getAllPageTitles, upsertPageTitle, deletePageTitle } from '@/lib/api/page-titles';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale');
    const page = searchParams.get('page');

    if (page) {
      // Get specific page title
      const pageLocale = locale || 'en';
      const record = await getPageTitle(page, pageLocale);
      return NextResponse.json(record);
    }

    if (locale) {
      // Get all page titles for a specific locale
      const records = await getPageTitlesByLocale(locale);
      return NextResponse.json(records);
    }

    // Get all page titles (all locales)
    const records = await getAllPageTitles();
    return NextResponse.json(records);
  } catch (error) {
    console.error('[API] Error fetching page titles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch page titles' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { page, locale = 'en', title, pagePill, sectionSubtitle } = body || {};

    // Validate required fields
    if (!page || !title) {
      return NextResponse.json(
        { error: 'page and title are required' },
        { status: 400 }
      );
    }

    // Ensure title is a string and not empty
    if (typeof title !== 'string' || !title.trim()) {
      return NextResponse.json(
        { error: 'title must be a non-empty string' },
        { status: 400 }
      );
    }

    // Safely handle optional fields
    const safeTrim = (value: any): string | undefined => {
      if (value === null || value === undefined) return undefined;
      if (typeof value !== 'string') return undefined;
      const trimmed = value.trim();
      return trimmed === '' ? undefined : trimmed;
    };

    const record = await upsertPageTitle({
      page,
      locale,
      title: title.trim(),
      pagePill: safeTrim(pagePill),
      sectionSubtitle: safeTrim(sectionSubtitle),
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error('[API] Error saving page title:', error);
    return NextResponse.json(
      { error: 'Failed to save page title' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');

    if (!page) {
      return NextResponse.json(
        { error: 'page parameter is required' },
        { status: 400 }
      );
    }

    await deletePageTitle(page);

    return NextResponse.json({ success: true, message: 'Page title deleted successfully' });
  } catch (error) {
    console.error('[API] Error deleting page title:', error);
    return NextResponse.json(
      { error: 'Failed to delete page title' },
      { status: 500 }
    );
  }
}

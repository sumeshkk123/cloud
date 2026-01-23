import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getMetaDetail, getMetaDetailsByLocale, getAllMetaDetails, upsertMetaDetail, deleteMetaDetail } from '@/lib/api/meta-details';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale');
    const page = searchParams.get('page');
    const all = searchParams.get('all') === 'true';

    if (page && locale) {
      const meta = await getMetaDetail(page, locale);
      return NextResponse.json(meta);
    }

    if (page && all) {
      // Get all locales for a specific page
      const allRecords = await getAllMetaDetails();
      const pageRecords = allRecords.filter((r) => r.page === page);
      return NextResponse.json(pageRecords);
    }

    if (locale) {
      const metas = await getMetaDetailsByLocale(locale);
      return NextResponse.json(metas);
    }

    // Get all meta details (all locales)
    const records = await getAllMetaDetails();
    return NextResponse.json(records);
  } catch (error) {
    console.error('[API] Error fetching meta details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch meta details' },
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
    const { page, locale = 'en', title, description, keywords } = body || {};

    if (!page || !title || !description || !keywords) {
      return NextResponse.json(
        { error: 'page, title, description, and keywords are required' },
        { status: 400 }
      );
    }

    const meta = await upsertMetaDetail({
      page,
      locale,
      title: title.trim(),
      description: description.trim(),
      keywords: keywords.trim(),
    });

    return NextResponse.json(meta);
  } catch (error) {
    console.error('[API] Error saving meta detail:', error);
    return NextResponse.json(
      { error: 'Failed to save meta detail' },
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
    const locale = searchParams.get('locale');

    if (!page) {
      return NextResponse.json(
        { error: 'page parameter is required' },
        { status: 400 }
      );
    }

    await deleteMetaDetail(page, locale || undefined);

    return NextResponse.json({ success: true, message: 'Meta detail deleted successfully' });
  } catch (error) {
    console.error('[API] Error deleting meta detail:', error);
    return NextResponse.json(
      { error: 'Failed to delete meta detail' },
      { status: 500 }
    );
  }
}

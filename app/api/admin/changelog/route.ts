import { NextResponse } from 'next/server';
import {
  listChangelogEntries,
  getChangelogEntryById,
  createChangelogEntry,
  updateChangelogEntry,
  deleteChangelogEntry,
  getAllChangelogTranslations,
} from '@/lib/api/changelog';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      const entry = await getChangelogEntryById(id, locale);
      
      // If all translations requested, return all locales for this version
      if (allTranslations && entry) {
        const translations = await getAllChangelogTranslations(entry.version);
        return NextResponse.json({ translations });
      }

      if (!entry) {
        return NextResponse.json(null);
      }

      return NextResponse.json({
        id: String(entry.id),
        version: String(entry.version),
        title: entry.title || null,
        description: String(entry.description),
        features: entry.features || [],
        locale: String(entry.locale),
        order: entry.order,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
      });
    }

    const entries = await listChangelogEntries('en');
    const safeEntries = entries.map((entry) => ({
      id: String(entry.id),
      version: String(entry.version),
      title: entry.title || null,
      description: String(entry.description),
      features: entry.features || [],
      locale: String(entry.locale),
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    }));
    return NextResponse.json(safeEntries);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { version, title, description, features, order } = body || {};

    if (!version || !description) {
      return NextResponse.json(
        { error: 'version and description are required.' },
        { status: 400 }
      );
    }

    const entry = await createChangelogEntry({
      version: String(version),
      title: title || null,
      description: String(description),
      features: Array.isArray(features) ? features.map((f: any) => String(f)) : null,
      locale: 'en',
      order: order !== undefined ? Number(order) : undefined,
    });

    return NextResponse.json({
      id: String(entry.id),
      version: String(entry.version),
      title: entry.title || null,
      description: String(entry.description),
      features: entry.features || [],
      locale: String(entry.locale),
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A changelog entry with this version already exists.' },
        { status: 400 }
      );
    }
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const { version, title, description, features, order, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!version || !description) {
      return NextResponse.json(
        { error: 'version and description are required.' },
        { status: 400 }
      );
    }

    // Get the original entry to check if it exists
    const originalEntry = await getChangelogEntryById(id, locale);
    
    // If this specific locale doesn't exist, create it instead of updating
    if (!originalEntry || originalEntry.locale !== locale) {
      // Check if entry with this version+locale already exists
      const existingByVersion = await getChangelogEntryById(id, 'en');
      if (existingByVersion) {
        // Create new translation for this version
        const newEntry = await createChangelogEntry({
          version: String(version),
          title: title || null,
          description: String(description),
          features: Array.isArray(features) ? features.map((f: any) => String(f)) : null,
          locale: String(locale),
          order: order !== undefined ? Number(order) : existingByVersion.order,
        });
        
        return NextResponse.json({
          id: String(newEntry.id),
          version: String(newEntry.version),
          title: newEntry.title || null,
          description: String(newEntry.description),
          features: newEntry.features || [],
          locale: String(newEntry.locale),
          order: newEntry.order,
          createdAt: newEntry.createdAt,
          updatedAt: newEntry.updatedAt,
        });
      }
    }

    // Update existing entry
    const entry = await updateChangelogEntry(id, {
      version: String(version),
      title: title || null,
      description: String(description),
      features: Array.isArray(features) ? features.map((f: any) => String(f)) : null,
      locale: String(locale),
      order: order !== undefined ? Number(order) : undefined,
    });

    return NextResponse.json({
      id: String(entry.id),
      version: String(entry.version),
      title: entry.title || null,
      description: String(entry.description),
      features: entry.features || [],
      locale: String(entry.locale),
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A changelog entry with this version already exists.' },
        { status: 400 }
      );
    }
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    await deleteChangelogEntry(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

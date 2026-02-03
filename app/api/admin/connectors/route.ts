import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { checkPermission } from '@/lib/utils/permissions-server';
import { Permission } from '@/lib/permissions';
import {
  listConnectors,
  listConnectorsBySlider,
  getConnectorById,
  createConnector,
  createMultipleConnectors,
  updateConnector,
  updateSliderConnectors,
  deleteConnector,
  getAllConnectorTranslations,
} from '@/lib/api/connectors';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAccess = await checkPermission(Permission.CONTENT_EDIT);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const bySlider = searchParams.get('bySlider') === 'true';

    if (id) {
      if (allTranslations) {
        const translations = await getAllConnectorTranslations(id);
        return NextResponse.json({ translations });
      }

      const connectorRecord = await getConnectorById(id);
      if (!connectorRecord) {
        return NextResponse.json({ error: 'Connector not found.' }, { status: 404 });
      }
      return NextResponse.json(connectorRecord);
    }

    // Return grouped by slider if requested
    // Admin table should only show English content (like testimonials)
    if (bySlider) {
      const sliders = await listConnectorsBySlider('en'); // Only English for table display
      return NextResponse.json(sliders);
    }

    const connectors = await listConnectors('en');
    return NextResponse.json(connectors);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAccess = await checkPermission(Permission.CONTENT_EDIT);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { oldSliderTitle, sliderTitle, title, titles, locale = 'en' } = body || {};

    // Support both single title and multiple titles (comma-separated string or array)
    if (titles) {
      // Multiple connectors creation/update - requires sliderTitle
      if (!sliderTitle) {
        return NextResponse.json({ error: 'sliderTitle is required when creating multiple connectors.' }, { status: 400 });
      }

      let titlesArray: string[] = [];
      if (typeof titles === 'string') {
        titlesArray = titles.split(',').map(t => t.trim()).filter(t => t.length > 0);
      } else if (Array.isArray(titles)) {
        titlesArray = titles.map(t => String(t).trim()).filter(t => t.length > 0);
      }

      if (titlesArray.length === 0) {
        return NextResponse.json({ error: 'At least one connector title is required.' }, { status: 400 });
      }

      // If oldSliderTitle is provided, this is an update operation
      if (oldSliderTitle) {
        const connectors = await updateSliderConnectors(
          String(oldSliderTitle),
          String(sliderTitle),
          titlesArray,
          String(locale)
        );
        return NextResponse.json({ connectors, count: connectors.length });
      }

      // Otherwise, create new connectors
      const connectors = await createMultipleConnectors(String(sliderTitle), titlesArray, String(locale));
      return NextResponse.json({ connectors, count: connectors.length });
    }

    // Single connector creation - requires sliderTitle
    if (!sliderTitle) {
      return NextResponse.json({ error: 'sliderTitle is required.' }, { status: 400 });
    }

    if (!title) {
      return NextResponse.json({ error: 'title is required.' }, { status: 400 });
    }

    const connectorRecord = await createConnector({
      sliderTitle: String(sliderTitle),
      title: String(title),
      locale: String(locale),
    });

    return NextResponse.json(connectorRecord);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAccess = await checkPermission(Permission.CONTENT_EDIT);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const { sliderTitle, title, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    const existing = await getConnectorById(id);
    if (!existing) {
      if (locale !== 'en') {
        const englishConnectors = await listConnectors('en');
        const englishMatch = englishConnectors.find((c) => c.id === id);
        
        if (englishMatch) {
          const connectorRecord = await createConnector({
            id: englishMatch.id,
            sliderTitle: sliderTitle || englishMatch.sliderTitle,
            title: title || englishMatch.title,
            locale: String(locale),
          });
          return NextResponse.json(connectorRecord);
        }
      }
      return NextResponse.json({ error: 'Connector not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);
    
    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllConnectorTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      
      if (existingTranslation) {
        const connectorRecord = await updateConnector(existingTranslation.id, {
          sliderTitle: sliderTitle || existingTranslation.sliderTitle,
          title: title || existingTranslation.title,
          locale: targetLocale,
        });
        return NextResponse.json(connectorRecord);
      } else {
        const connectorRecord = await createConnector({
          id: existing.id,
          sliderTitle: sliderTitle || existing.sliderTitle,
          title: title || existing.title,
          locale: targetLocale,
        });
        return NextResponse.json(connectorRecord);
      }
    }

    const connectorRecord = await updateConnector(id, {
      sliderTitle: sliderTitle !== undefined ? sliderTitle : existing.sliderTitle,
      title: title !== undefined ? title : existing.title,
      locale: targetLocale,
    });

    return NextResponse.json(connectorRecord);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAccess = await checkPermission(Permission.CONTENT_EDIT);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    await deleteConnector(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

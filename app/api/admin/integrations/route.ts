import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { checkPermission } from '@/lib/utils/permissions-server';
import { Permission } from '@/lib/permissions';
import {
  listIntegrations,
  getIntegrationById,
  createIntegration,
  updateIntegration,
  deleteIntegration,
  getAllIntegrationTranslations,
} from '@/lib/api/integrations';

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

    if (id) {
      if (allTranslations) {
        const translations = await getAllIntegrationTranslations(id);
        return NextResponse.json({ translations });
      }

      const integrationRecord = await getIntegrationById(id);
      if (!integrationRecord) {
        return NextResponse.json({ error: 'Integration not found.' }, { status: 404 });
      }
      return NextResponse.json(integrationRecord);
    }

    const integrations = await listIntegrations('en');
    console.log('[GET /api/admin/integrations] Returning integrations:', integrations.length);
    return NextResponse.json(integrations);
  } catch (error) {
    console.error('[GET /api/admin/integrations] Error:', error);
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
    const { icon, title, description, connectors, locale = 'en' } = body || {};

    if (!title || !description) {
      return NextResponse.json({ error: 'title and description are required.' }, { status: 400 });
    }

    // Parse connectors if it's a string (comma-separated)
    let connectorsArray: string[] | null = null;
    if (connectors) {
      if (typeof connectors === 'string') {
        connectorsArray = connectors.split(',').map(c => c.trim()).filter(c => c.length > 0);
      } else if (Array.isArray(connectors)) {
        connectorsArray = connectors;
      }
    }

    const integrationRecord = await createIntegration({
      icon: icon || null,
      title: String(title),
      description: String(description),
      connectors: connectorsArray,
      locale: String(locale),
    });

    return NextResponse.json(integrationRecord);
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
    const { icon, title, description, connectors, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !description) {
      return NextResponse.json({ error: 'title and description are required.' }, { status: 400 });
    }

    // Parse connectors if it's a string (comma-separated)
    let connectorsArray: string[] | null = null;
    if (connectors !== undefined) {
      if (typeof connectors === 'string') {
        connectorsArray = connectors.split(',').map(c => c.trim()).filter(c => c.length > 0);
      } else if (Array.isArray(connectors)) {
        connectorsArray = connectors;
      } else if (connectors === null) {
        connectorsArray = null;
      }
    }

    const existing = await getIntegrationById(id);
    if (!existing) {
      // If integration doesn't exist, try to find by icon for translation
      if (locale !== 'en' && icon) {
        const englishIntegrations = await listIntegrations('en');
        const englishMatch = englishIntegrations.find((i) => i.icon === icon);
        
        if (englishMatch) {
          const integrationRecord = await createIntegration({
            id: englishMatch.id,
            icon: englishMatch.icon || icon,
            title,
            description,
            connectors: connectorsArray !== undefined ? connectorsArray : englishMatch.connectors,
            locale: String(locale),
          });
          return NextResponse.json(integrationRecord);
        }
      }
      return NextResponse.json({ error: 'Integration not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);
    
    // If locale is different, check if translation exists
    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllIntegrationTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      
      const englishVersion = allTranslations.find((t) => t.locale === 'en') || existing;
      const iconToUse = englishVersion.icon || icon;
      
      if (existingTranslation) {
        const integrationRecord = await updateIntegration(existingTranslation.id, {
          icon: iconToUse,
          title,
          description,
          connectors: connectorsArray !== undefined ? connectorsArray : existingTranslation.connectors,
          locale: targetLocale,
        });
        return NextResponse.json(integrationRecord);
      } else {
        const integrationRecord = await createIntegration({
          id: existing.id,
          icon: iconToUse,
          title,
          description,
          connectors: connectorsArray !== undefined ? connectorsArray : englishVersion.connectors,
          locale: targetLocale,
        });
        return NextResponse.json(integrationRecord);
      }
    }

    // Update existing entry (same locale)
    let iconToUse = icon;
    
    if (targetLocale === 'en') {
      const allTranslations = await getAllIntegrationTranslations(id);
      if (allTranslations.length > 0 && iconToUse) {
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateIntegration(t.id, {
                icon: iconToUse,
                title: t.title,
                description: t.description,
                connectors: t.connectors,
                locale: t.locale,
              })
            )
        );
      }
    } else {
      const allTranslations = await getAllIntegrationTranslations(id);
      const englishVersion = allTranslations.find((t) => t.locale === 'en');
      if (englishVersion) {
        iconToUse = englishVersion.icon || iconToUse;
      }
    }

    const integrationRecord = await updateIntegration(id, {
      icon: iconToUse,
      title,
      description,
      connectors: connectorsArray !== undefined ? connectorsArray : existing.connectors,
      locale: targetLocale,
    });

    return NextResponse.json(integrationRecord);
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

    await deleteIntegration(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

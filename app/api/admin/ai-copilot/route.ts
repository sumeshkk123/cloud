import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listAICopilots,
  getAICopilotById,
  createAICopilot,
  updateAICopilot,
  deleteAICopilot,
  getAllAICopilotTranslations,
} from '@/lib/api/ai-copilot';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      if (allTranslations) {
        const translations = await getAllAICopilotTranslations(id);
        return NextResponse.json({ translations });
      }

      const copilot = await getAICopilotById(id);
      if (!copilot) {
        return NextResponse.json({ error: 'AI Copilot not found.' }, { status: 404 });
      }

      return NextResponse.json({
        id: String(copilot.id),
        icon: copilot.icon ? String(copilot.icon) : null,
        title: String(copilot.title || ''),
        content: String(copilot.content || ''),
        locale: String(copilot.locale || ''),
        createdAt: copilot.createdAt,
        updatedAt: copilot.updatedAt,
      });
    }

    try {
      const copilots = await listAICopilots('en');
      const safeCopilots = copilots.map((copilot) => ({
        id: String(copilot.id),
        icon: copilot.icon ? String(copilot.icon) : null,
        title: String(copilot.title || ''),
        content: String(copilot.content || ''),
        locale: String(copilot.locale || ''),
        createdAt: copilot.createdAt,
        updatedAt: copilot.updatedAt,
      }));
      return NextResponse.json(safeCopilots);
    } catch (error: any) {
      // Handle table not found or other database errors gracefully
      if (error?.message?.includes('table does not exist') || error?.message?.includes('does not exist')) {
        console.warn('[AI Copilot API] Table does not exist, returning empty array');
        return NextResponse.json([]);
      }
      throw error;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    console.error('[AI Copilot API] Error:', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { icon, title, content, locale = 'en' } = body || {};

    if (!title || !content) {
      return NextResponse.json(
        { error: 'title and content are required.' },
        { status: 400 }
      );
    }

    const copilot = await createAICopilot({
      icon: icon ? String(icon) : null,
      title: String(title),
      content: String(content),
      locale: String(locale),
    });

    return NextResponse.json(copilot);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const { icon, title, content, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !content) {
      return NextResponse.json(
        { error: 'title and content are required.' },
        { status: 400 }
      );
    }

    const existing = await getAICopilotById(id);
    if (!existing) {
      if (locale !== 'en') {
        // For non-English, try to find English version by icon
        const englishCopilots = await listAICopilots('en');
        const iconToUse = icon ? String(icon) : null;
        const englishMatch = iconToUse ? englishCopilots.find((c) => c.icon === iconToUse) : null;

        if (englishMatch) {
          const copilot = await createAICopilot({
            icon: englishMatch.icon,
            title: String(title),
            content: String(content),
            locale: String(locale),
          });
          return NextResponse.json(copilot);
        }
      }
      return NextResponse.json({ error: 'AI Copilot not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);

    if (targetLocale !== existing.locale) {
      // Creating a translation
      const allTranslations = await getAllAICopilotTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      const englishVersion = allTranslations.find((t) => t.locale === 'en') || existing;
      const iconToUse = englishVersion.icon || (icon ? String(icon) : null);

      if (existingTranslation) {
        const copilot = await updateAICopilot(existingTranslation.id, {
          icon: iconToUse,
          title: String(title),
          content: String(content),
          locale: targetLocale,
        });
        return NextResponse.json(copilot);
      } else {
        const copilot = await createAICopilot({
          icon: iconToUse,
          title: String(title),
          content: String(content),
          locale: targetLocale,
        });
        return NextResponse.json(copilot);
      }
    }

    // Updating existing
    let iconToUse = icon ? String(icon) : existing.icon;

    if (targetLocale === 'en') {
      // When updating English, sync icon to all translations
      const allTranslations = await getAllAICopilotTranslations(id);
      if (allTranslations.length > 0) {
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateAICopilot(t.id, {
                icon: iconToUse,
              })
            )
        );
      }
    } else {
      // For non-English, use English icon
      const allTranslations = await getAllAICopilotTranslations(id);
      const englishVersion = allTranslations.find((t) => t.locale === 'en');
      if (englishVersion) {
        iconToUse = englishVersion.icon;
      }
    }

    const copilot = await updateAICopilot(id, {
      icon: iconToUse,
      title: String(title),
      content: String(content),
      locale: targetLocale,
    });

    return NextResponse.json(copilot);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    const translations = await getAllAICopilotTranslations(id);

    if (translations.length > 0) {
      await Promise.all(
        translations.map((t) => deleteAICopilot(t.id))
      );
    } else {
      await deleteAICopilot(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

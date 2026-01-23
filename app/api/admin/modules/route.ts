import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  getAllModuleTranslations,
} from '@/lib/api/modules';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';

    if (id) {
      if (allTranslations) {
        const translations = await getAllModuleTranslations(id);
        return NextResponse.json({ translations });
      }

      const moduleRecord = await getModuleById(id);
      if (!moduleRecord) {
        return NextResponse.json({ error: 'Module not found.' }, { status: 404 });
      }
      return NextResponse.json(moduleRecord);
    }

    const modules = await listModules('en');
    return NextResponse.json(modules);
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

    const body = await request.json();
    const { title, description, image, showOnHomePage, locale = 'en' } = body || {};

    if (!title || !description || !image) {
      return NextResponse.json({ error: 'title, description, and image are required.' }, { status: 400 });
    }

    const moduleRecord = await createModule({
      slug: null,
      title: String(title),
      description: String(description),
      image: String(image),
      hasDetailPage: false,
      showOnHomePage: Boolean(showOnHomePage ?? false),
      locale: String(locale),
    });

    return NextResponse.json(moduleRecord);
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const { title, description, image, showOnHomePage, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !description || !image) {
      return NextResponse.json({ error: 'title, description, and image are required.' }, { status: 400 });
    }

    const existing = await getModuleById(id);
    if (!existing) {
      // If module doesn't exist, try to find by image+showOnHomePage for translation
      if (locale !== 'en' && image) {
        const englishModules = await listModules('en');
        const englishMatch = englishModules.find((m) => m.image === image && m.showOnHomePage === Boolean(showOnHomePage ?? false));
        
        if (englishMatch) {
          const moduleRecord = await createModule({
            slug: null,
            title,
            description,
            image: englishMatch.image || image,
            hasDetailPage: false,
            showOnHomePage: englishMatch.showOnHomePage,
            locale: String(locale),
          });
          return NextResponse.json(moduleRecord);
        }
      }
      return NextResponse.json({ error: 'Module not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);
    
    // If locale is different, check if translation exists
    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllModuleTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      
      const englishVersion = allTranslations.find((t) => t.locale === 'en') || existing;
      const imageToUse = englishVersion.image || image;
      const showOnHomePageToUse = englishVersion.showOnHomePage;
      
      if (existingTranslation) {
        const moduleRecord = await updateModule(existingTranslation.id, {
          slug: null,
          title,
          description,
          image: imageToUse,
          hasDetailPage: false,
          showOnHomePage: showOnHomePageToUse,
          locale: targetLocale,
        });
        return NextResponse.json(moduleRecord);
      } else {
        const moduleRecord = await createModule({
          slug: null,
          title,
          description,
          image: imageToUse,
          hasDetailPage: false,
          showOnHomePage: showOnHomePageToUse,
          locale: targetLocale,
        });
        return NextResponse.json(moduleRecord);
      }
    }

    // Update existing entry (same locale)
    let imageToUse = image;
    let showOnHomePageToUse = Boolean(showOnHomePage ?? false);
    
    if (targetLocale === 'en') {
      const allTranslations = await getAllModuleTranslations(id);
      if (allTranslations.length > 0 && imageToUse) {
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateModule(t.id, {
                image: imageToUse,
                showOnHomePage: showOnHomePageToUse,
                slug: null,
                title: t.title,
                description: t.description,
                hasDetailPage: false,
                locale: t.locale,
              })
            )
        );
      }
    } else {
      const allTranslations = await getAllModuleTranslations(id);
      const englishVersion = allTranslations.find((t) => t.locale === 'en');
      if (englishVersion) {
        imageToUse = englishVersion.image || imageToUse;
        showOnHomePageToUse = englishVersion.showOnHomePage;
      }
    }

    const moduleRecord = await updateModule(id, {
      slug: null,
      title,
      description,
      image: imageToUse,
      hasDetailPage: false,
      showOnHomePage: showOnHomePageToUse,
      locale: targetLocale,
    });

    return NextResponse.json(moduleRecord);
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    const translations = await getAllModuleTranslations(id);
    
    if (translations.length > 0) {
      await Promise.all(
        translations.map((t) => deleteModule(t.id))
      );
    } else {
      await deleteModule(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

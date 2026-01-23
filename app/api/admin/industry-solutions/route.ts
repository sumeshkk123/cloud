import { NextResponse } from 'next/server';
import {
  listIndustrySolutions,
  getIndustrySolutionById,
  createIndustrySolution,
  updateIndustrySolution,
  deleteIndustrySolution,
  getAllIndustrySolutionTranslations,
} from '@/lib/api/industry-solutions';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      // If all translations requested, return all locales for this solution (linked by icon+showOnHomePage)
      if (allTranslations) {
        const translations = await getAllIndustrySolutionTranslations(id);
        return NextResponse.json({ translations });
      }

      const solution = await getIndustrySolutionById(id, locale);
      if (!solution) {
        return NextResponse.json({ error: 'Industry solution not found.' }, { status: 404 });
      }
      return NextResponse.json({
        id: String(solution.id),
        title: String(solution.title || ''),
        description: String(solution.description || ''),
        icon: String(solution.icon || ''),
        showOnHomePage: Boolean(solution.showOnHomePage ?? false),
        locale: String(solution.locale || ''),
        createdAt: solution.createdAt,
        updatedAt: solution.updatedAt,
      });
    }

    const solutions = await listIndustrySolutions('en');
    const safeSolutions = solutions.map((solution) => ({
      id: String(solution.id),
      title: String(solution.title || ''),
      description: String(solution.description || ''),
      icon: String(solution.icon || ''),
      showOnHomePage: Boolean(solution.showOnHomePage ?? false),
      locale: String(solution.locale || ''),
      createdAt: solution.createdAt,
      updatedAt: solution.updatedAt,
    }));
    return NextResponse.json(safeSolutions);
  } catch (error: any) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, icon, showOnHomePage, locale = 'en' } = body || {};

    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: 'title, description, and icon are required.' },
        { status: 400 }
      );
    }

    const solution = await createIndustrySolution({
      title: String(title),
      description: String(description),
      icon: String(icon),
      showOnHomePage: Boolean(showOnHomePage ?? false),
      locale: String(locale),
    });

    return NextResponse.json({
      id: String(solution.id),
      title: String(solution.title || ''),
      description: String(solution.description || ''),
      icon: String(solution.icon || ''),
      showOnHomePage: Boolean(solution.showOnHomePage ?? false),
      locale: String(solution.locale || ''),
      createdAt: solution.createdAt,
      updatedAt: solution.updatedAt,
    });
  } catch (error: any) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const { title, description, icon, showOnHomePage, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: 'title, description, and icon are required.' },
        { status: 400 }
      );
    }

    // Get existing solution
    const existing = await getIndustrySolutionById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Industry solution not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);
    
    // If locale is different, check if translation exists
    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllIndustrySolutionTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      
      // Use English icon and showOnHomePage for all translations
      const englishVersion = allTranslations.find((t) => t.locale === 'en') || existing;
      const iconToUse = englishVersion.icon;
      const showOnHomePageToUse = englishVersion.showOnHomePage;
      
      if (existingTranslation) {
        // Update existing translation
        const solution = await updateIndustrySolution(existingTranslation.id, {
          title: String(title),
          description: String(description),
          icon: iconToUse,
          showOnHomePage: showOnHomePageToUse,
          locale: targetLocale,
        });
        return NextResponse.json({
          id: String(solution.id),
          title: String(solution.title || ''),
          description: String(solution.description || ''),
          icon: String(solution.icon || ''),
          showOnHomePage: Boolean(solution.showOnHomePage ?? false),
          locale: String(solution.locale || ''),
          createdAt: solution.createdAt,
          updatedAt: solution.updatedAt,
        });
      } else {
        // Create new translation
        const solution = await createIndustrySolution({
          title: String(title),
          description: String(description),
          icon: iconToUse,
          showOnHomePage: showOnHomePageToUse,
          locale: targetLocale,
        });
        return NextResponse.json({
          id: String(solution.id),
          title: String(solution.title || ''),
          description: String(solution.description || ''),
          icon: String(solution.icon || ''),
          showOnHomePage: Boolean(solution.showOnHomePage ?? false),
          locale: String(solution.locale || ''),
          createdAt: solution.createdAt,
          updatedAt: solution.updatedAt,
        });
      }
    }

    // Update existing entry (same locale)
    // For English, allow icon and showOnHomePage update and sync to all translations
    let iconToUse = String(icon);
    let showOnHomePageToUse = Boolean(showOnHomePage ?? false);
    
    if (targetLocale === 'en') {
      // If updating English, sync icon and showOnHomePage to all translations
      const allTranslations = await getAllIndustrySolutionTranslations(id);
      if (allTranslations.length > 0) {
        // Update icon and showOnHomePage for all translations
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateIndustrySolution(t.id, {
                title: t.title,
                description: t.description,
                icon: iconToUse,
                showOnHomePage: showOnHomePageToUse,
                locale: t.locale,
              })
            )
        );
      }
    } else {
      // For other locales, use English icon and showOnHomePage
      const allTranslations = await getAllIndustrySolutionTranslations(id);
      const englishVersion = allTranslations.find((t) => t.locale === 'en');
      if (englishVersion) {
        iconToUse = englishVersion.icon;
        showOnHomePageToUse = englishVersion.showOnHomePage;
      }
    }

    const solution = await updateIndustrySolution(id, {
      title: String(title),
      description: String(description),
      icon: iconToUse,
      showOnHomePage: showOnHomePageToUse,
      locale: targetLocale,
    });

    return NextResponse.json({
      id: String(solution.id),
      title: String(solution.title || ''),
      description: String(solution.description || ''),
      icon: String(solution.icon || ''),
      showOnHomePage: Boolean(solution.showOnHomePage ?? false),
      locale: String(solution.locale || ''),
      createdAt: solution.createdAt,
      updatedAt: solution.updatedAt,
    });
  } catch (error) {
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

    // Get all translations for this solution (linked by icon+showOnHomePage)
    const translations = await getAllIndustrySolutionTranslations(id);
    
    // Delete all translations
    if (translations.length > 0) {
      await Promise.all(
        translations.map((t) => deleteIndustrySolution(t.id))
      );
    } else {
      // If no translations found, delete by ID anyway
      await deleteIndustrySolution(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

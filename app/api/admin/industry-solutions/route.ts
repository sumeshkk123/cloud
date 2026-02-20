import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listIndustrySolutions,
  getIndustrySolutionById,
  createIndustrySolution,
  updateIndustrySolution,
  deleteIndustrySolution,
  getAllIndustrySolutionTranslations,
} from '@/lib/api/industry-solutions';
import { prisma } from '@/lib/db/prisma';

export async function GET(request: Request) {
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
        const translations = await getAllIndustrySolutionTranslations(id);
        return NextResponse.json({ translations });
      }

      const solution = await getIndustrySolutionById(id, locale);
      if (!solution) {
        return NextResponse.json({ error: 'Industry solution not found.' }, { status: 404 });
      }
      return NextResponse.json({
        id: String(solution.id),
        slug: String(solution.slug || ''),
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

    const withTranslations = searchParams.get('withTranslations') === 'true';
    if (withTranslations) {
      const groupKey = (s: { icon: string; showOnHomePage: boolean; slug: string }) =>
        `${s.slug || s.icon || 'no-icon'}_${s.showOnHomePage ? 'home' : 'no-home'}`;
      const localeMap = new Map<string, string[]>();
      for (const sol of solutions) {
        const key = groupKey(sol);
        const translations = await prisma.industry_solutions.findMany({
          where: {
            OR: [
              { icon: sol.icon, showOnHomePage: sol.showOnHomePage },
              { slug: sol.slug }
            ]
          },
          orderBy: { locale: 'asc' },
        });
        const locales = translations.map((t) => t.locale);
        localeMap.set(key, locales);
      }
      const safeSolutions = solutions.map((sol) => ({
        id: String(sol.id),
        slug: String(sol.slug || ''),
        title: String(sol.title || ''),
        description: String(sol.description || ''),
        icon: String(sol.icon || ''),
        showOnHomePage: Boolean(sol.showOnHomePage ?? false),
        locale: String(sol.locale || ''),
        createdAt: sol.createdAt,
        updatedAt: sol.updatedAt,
        availableLocales: localeMap.get(groupKey(sol)) || [sol.locale],
      }));
      return NextResponse.json(safeSolutions);
    }

    const safeSolutions = solutions.map((sol) => ({
      id: String(sol.id),
      slug: String(sol.slug || ''),
      title: String(sol.title || ''),
      description: String(sol.description || ''),
      icon: String(sol.icon || ''),
      showOnHomePage: Boolean(sol.showOnHomePage ?? false),
      locale: String(sol.locale || ''),
      createdAt: sol.createdAt,
      updatedAt: sol.updatedAt,
    }));
    return NextResponse.json(safeSolutions);
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
    const { slug, title, description, icon, showOnHomePage, locale = 'en' } = body || {};

    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: 'title, description, and icon are required.' },
        { status: 400 }
      );
    }

    const solution = await createIndustrySolution({
      slug: String(slug || ''),
      title: String(title),
      description: String(description),
      icon: String(icon),
      showOnHomePage: Boolean(showOnHomePage ?? false),
      locale: String(locale),
    });

    return NextResponse.json(solution);
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
    const { slug, title, description, icon, showOnHomePage, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }
    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: 'title, description, and icon are required.' },
        { status: 400 }
      );
    }

    const existing = await getIndustrySolutionById(id);
    if (!existing) {
      if (locale !== 'en') {
        const englishList = await listIndustrySolutions('en');
        const englishMatch = englishList.find(
          (s) => (s.slug === String(slug) || s.icon === String(icon)) && s.showOnHomePage === Boolean(showOnHomePage ?? false)
        );
        if (englishMatch) {
          const solution = await createIndustrySolution({
            slug: englishMatch.slug || String(slug),
            title: String(title),
            description: String(description),
            icon: englishMatch.icon || String(icon),
            showOnHomePage: englishMatch.showOnHomePage,
            locale: String(locale),
          });
          return NextResponse.json(solution);
        }
      }
      return NextResponse.json({ error: 'Industry solution not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);
    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllIndustrySolutionTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      const englishVersion = allTranslations.find((t) => t.locale === 'en') || existing;
      const iconToUse = englishVersion.icon || String(icon);
      const showOnHomePageToUse = englishVersion.showOnHomePage;
      const slugToUse = englishVersion.slug || String(slug);

      if (existingTranslation) {
        const solution = await updateIndustrySolution(existingTranslation.id, {
          slug: slugToUse,
          title: String(title),
          description: String(description),
          icon: iconToUse,
          showOnHomePage: showOnHomePageToUse,
          locale: targetLocale,
        });
        return NextResponse.json(solution);
      }
      const solution = await createIndustrySolution({
        slug: slugToUse,
        title: String(title),
        description: String(description),
        icon: iconToUse,
        showOnHomePage: showOnHomePageToUse,
        locale: targetLocale,
      });
      return NextResponse.json(solution);
    }

    let iconToUse = String(icon);
    let showOnHomePageToUse = Boolean(showOnHomePage ?? false);
    let slugToUse = String(slug);

    if (targetLocale === 'en') {
      const allTranslationsBeforeUpdate = await getAllIndustrySolutionTranslations(id);
      const updatedSolution = await updateIndustrySolution(id, {
        slug: slugToUse,
        title: String(title),
        description: String(description),
        icon: iconToUse,
        showOnHomePage: showOnHomePageToUse,
        locale: targetLocale,
      });
      if (allTranslationsBeforeUpdate.length > 0) {
        await Promise.all(
          allTranslationsBeforeUpdate
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateIndustrySolution(t.id, {
                slug: slugToUse,
                icon: iconToUse,
                showOnHomePage: showOnHomePageToUse,
                title: t.title,
                description: t.description,
                locale: t.locale,
              })
            )
        );
      }
      return NextResponse.json(updatedSolution);
    }

    const allTranslations = await getAllIndustrySolutionTranslations(id);
    const englishVersion = allTranslations.find((t) => t.locale === 'en');
    if (englishVersion) {
      iconToUse = englishVersion.icon || iconToUse;
      showOnHomePageToUse = englishVersion.showOnHomePage;
      slugToUse = englishVersion.slug || slugToUse;
    }

    const solution = await updateIndustrySolution(id, {
      slug: slugToUse,
      title: String(title),
      description: String(description),
      icon: iconToUse,
      showOnHomePage: showOnHomePageToUse,
      locale: targetLocale,
    });
    return NextResponse.json(solution);
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

    const translations = await getAllIndustrySolutionTranslations(id);
    if (translations.length > 0) {
      await Promise.all(translations.map((t) => deleteIndustrySolution(t.id)));
    } else {
      await deleteIndustrySolution(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

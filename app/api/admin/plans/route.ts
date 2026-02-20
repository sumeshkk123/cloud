import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listMlmPlans,
  listMlmPlansWithLocales,
  getMlmPlanById,
  createMlmPlan,
  updateMlmPlan,
  deleteMlmPlan,
  getAllMlmPlanTranslations,
} from '@/lib/api/mlm-plans';

function toClientSafePlansError(error: unknown, fallback: string): string {
  const raw = error instanceof Error ? error.message : '';
  const msg = raw.toLowerCase();

  // Friendly validation for slug uniqueness per locale.
  if (
    msg.includes('p2002') ||
    msg.includes('unique constraint') ||
    msg.includes('mlm_plans_slug_locale_key')
  ) {
    return 'Slug already exists for this language. Please use a different slug.';
  }

  // Handle database that has not yet been updated with recent plans columns.
  if (msg.includes('mlm_plans.slug') && msg.includes('does not exist')) {
    return 'Plans slug is not enabled in the database yet. Please update database changes and try again.';
  }
  if (msg.includes('mlm_plans.groupid') && msg.includes('does not exist')) {
    return 'Plans translation grouping is not enabled in the database yet. Please update database changes and try again.';
  }

  return fallback;
}

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
    const withTranslations = searchParams.get('withTranslations') === 'true';

    if (id) {
      if (allTranslations) {
        const translations = await getAllMlmPlanTranslations(id);
        return NextResponse.json({ translations });
      }

      const plan = await getMlmPlanById(id);
      if (!plan) {
        return NextResponse.json({ error: 'Plan not found.' }, { status: 404 });
      }
      return NextResponse.json(plan);
    }

    if (withTranslations) {
      const plansWithLocales = await listMlmPlansWithLocales(locale);
      return NextResponse.json(plansWithLocales);
    }

    const plans = await listMlmPlans(locale);
    return NextResponse.json(plans);
  } catch (error) {
    const message = toClientSafePlansError(error, 'Failed to process request.');
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
    const {
      slug,
      title,
      subtitle,
      description,
      icon,
      locale = 'en',
      showOnHomePage = false,
      features,
      groupId,
    } = body || {};

    if (!title || !description) {
      return NextResponse.json(
        { error: 'title and description are required.' },
        { status: 400 }
      );
    }

    const plan = await createMlmPlan({
      slug: slug != null && String(slug).trim() ? String(slug).trim() : null,
      title: String(title).trim(),
      subtitle: subtitle != null ? String(subtitle).trim() : null,
      description: String(description).trim(),
      icon: icon != null ? String(icon) : null,
      locale: String(locale),
      showOnHomePage: Boolean(showOnHomePage),
      features: Array.isArray(features) ? features.map(String) : null,
      groupId: groupId != null ? String(groupId) : undefined,
    });

    return NextResponse.json(plan);
  } catch (error) {
    const message = toClientSafePlansError(error, 'Unable to save plan.');
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
    const {
      slug,
      title,
      subtitle,
      description,
      icon,
      locale: bodyLocale,
      showOnHomePage,
      features,
    } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !description) {
      return NextResponse.json(
        { error: 'title and description are required.' },
        { status: 400 }
      );
    }

    const existing = await getMlmPlanById(id);
    if (!existing) {
      return NextResponse.json({ error: 'Plan not found.' }, { status: 404 });
    }

    const targetLocale = bodyLocale != null ? String(bodyLocale) : existing.locale;
    const groupKey = existing.groupId ?? existing.id;

    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllMlmPlanTranslations(id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);
      const englishVersion = allTranslations.find((t) => t.locale === 'en') ?? allTranslations[0];
      const iconToUse = icon != null ? String(icon) : (englishVersion?.icon ?? existing.icon);
      const showOnHomePageToUse = showOnHomePage !== undefined ? Boolean(showOnHomePage) : (englishVersion?.showOnHomePage ?? existing.showOnHomePage);
      const slugToUse = slug != null && String(slug).trim() ? String(slug).trim() : null;

      if (existingTranslation) {
        const plan = await updateMlmPlan(existingTranslation.id, {
          slug: slugToUse,
          title: String(title).trim(),
          subtitle: subtitle != null ? String(subtitle).trim() : null,
          description: String(description).trim(),
          icon: iconToUse,
          locale: targetLocale,
          showOnHomePage: showOnHomePageToUse,
          features: Array.isArray(features) ? features.map(String) : null,
        });
        return NextResponse.json(plan);
      }

      const plan = await createMlmPlan({
        groupId: groupKey,
        slug: slugToUse,
        title: String(title).trim(),
        subtitle: subtitle != null ? String(subtitle).trim() : null,
        description: String(description).trim(),
        icon: iconToUse,
        locale: targetLocale,
        showOnHomePage: showOnHomePageToUse,
        features: Array.isArray(features) ? features.map(String) : null,
      });
      return NextResponse.json(plan);
    }

    if (targetLocale === 'en') {
      const allTranslations = await getAllMlmPlanTranslations(id);
      const iconToUse = icon != null ? String(icon) : existing.icon;
      const showOnHomePageToUse = showOnHomePage !== undefined ? Boolean(showOnHomePage) : existing.showOnHomePage;
      const slugToUse = slug != null && String(slug).trim() ? String(slug).trim() : null;

      const plan = await updateMlmPlan(id, {
        slug: slugToUse,
        title: String(title).trim(),
        subtitle: subtitle != null ? String(subtitle).trim() : null,
        description: String(description).trim(),
        icon: iconToUse,
        locale: targetLocale,
        showOnHomePage: showOnHomePageToUse,
        features: Array.isArray(features) ? features.map(String) : null,
      });

      if (allTranslations.length > 0) {
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
            .map((t) =>
              updateMlmPlan(t.id, {
                icon: iconToUse,
                showOnHomePage: showOnHomePageToUse,
              })
            )
        );
      }

      return NextResponse.json(plan);
    }

    const allTranslations = await getAllMlmPlanTranslations(id);
    const englishVersion = allTranslations.find((t) => t.locale === 'en');
    const iconToUse = icon != null ? String(icon) : (englishVersion?.icon ?? existing.icon);
    const showOnHomePageToUse = showOnHomePage !== undefined ? Boolean(showOnHomePage) : (englishVersion?.showOnHomePage ?? existing.showOnHomePage);
    const slugToUse = slug != null && String(slug).trim() ? String(slug).trim() : null;

    const plan = await updateMlmPlan(id, {
      slug: slugToUse,
      title: String(title).trim(),
      subtitle: subtitle != null ? String(subtitle).trim() : null,
      description: String(description).trim(),
      icon: iconToUse,
      locale: targetLocale,
      showOnHomePage: showOnHomePageToUse,
      features: Array.isArray(features) ? features.map(String) : null,
    });

    return NextResponse.json(plan);
  } catch (error) {
    const message = toClientSafePlansError(error, 'Unable to save plan translation.');
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

    await deleteMlmPlan(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = toClientSafePlansError(error, 'Unable to delete plan.');
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

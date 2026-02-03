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
    const {
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
    const {
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

      if (existingTranslation) {
        const plan = await updateMlmPlan(existingTranslation.id, {
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

      const plan = await updateMlmPlan(id, {
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

    const plan = await updateMlmPlan(id, {
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

    await deleteMlmPlan(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

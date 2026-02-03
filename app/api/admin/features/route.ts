import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listFeatures,
  listFeaturesWithLocales,
  getFeatureById,
  createFeature,
  updateFeature,
  deleteFeature,
  getAllFeatureTranslations,
} from '@/lib/api/features';
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
    const withTranslations = searchParams.get('withTranslations') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      if (allTranslations) {
        const translations = await getAllFeatureTranslations(id);
        return NextResponse.json({ translations });
      }

      const featureRecord = await getFeatureById(id, locale);
      if (!featureRecord) {
        return NextResponse.json({ error: 'Feature not found.' }, { status: 404 });
      }
      return NextResponse.json(featureRecord);
    }

    // If withTranslations is true, use single-query list (avoids N+1)
    if (withTranslations) {
      const featuresWithLocales = await listFeaturesWithLocales(locale || 'en');
      return NextResponse.json(featuresWithLocales, {
        headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
      });
    }

    const features = await listFeatures(locale || 'en');

    return NextResponse.json(features, {
      headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
    });
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
    const { title, description, icon, category, showOnHomePage, locale = 'en', features } = body || {};

    if (!title || !description || !icon || !category) {
      return NextResponse.json({ error: 'title, description, icon, and category are required.' }, { status: 400 });
    }

    const featureRecord = await createFeature({
      slug: null,
      title: String(title),
      description: String(description),
      icon: String(icon),
      category: String(category),
      hasDetailPage: false,
      showOnHomePage: Boolean(showOnHomePage ?? false),
      locale: String(locale),
      features: features || null,
    });

    return NextResponse.json(featureRecord);
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
    const { title, description, icon, category, showOnHomePage, locale = 'en', features } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!title || !description || !icon || !category) {
      return NextResponse.json({ error: 'title, description, icon, and category are required.' }, { status: 400 });
    }

    const targetLocale = String(locale);

    // Check if feature exists in this locale
    const existing = await getFeatureById(id, targetLocale);

    if (existing) {
      // Update existing entry
      const featureRecord = await updateFeature(id, targetLocale, {
        slug: null,
        title,
        description,
        icon,
        category,
        hasDetailPage: existing.hasDetailPage,
        showOnHomePage: Boolean(showOnHomePage ?? false),
        features: features || null,
      });

      // Sync showOnHomePage, icon, and category across all translations (shared fields)
      const showOnHomePageValue = Boolean(showOnHomePage ?? false);
      const iconValue = String(icon);
      const categoryValue = String(category);

      // Update all other translations with shared values
      await prisma.features.updateMany({
        where: {
          id,
          locale: { not: targetLocale }, // Update all except current locale
        },
        data: {
          showOnHomePage: showOnHomePageValue,
          icon: iconValue,
          category: categoryValue,
          updatedAt: new Date(),
        },
      });

      return NextResponse.json(featureRecord);
    } else {
      // Create new translation with same ID
      const featureRecord = await createFeature({
        id, // Use same ID for translation
        slug: null,
        title,
        description,
        icon,
        category,
        hasDetailPage: false,
        showOnHomePage: Boolean(showOnHomePage ?? false),
        locale: targetLocale,
        features: features || null,
      });

      // Sync showOnHomePage, icon, and category across all translations (shared fields)
      const showOnHomePageValue = Boolean(showOnHomePage ?? false);
      const iconValue = String(icon);
      const categoryValue = String(category);

      // Update all other translations with shared values
      await prisma.features.updateMany({
        where: {
          id,
          locale: { not: targetLocale }, // Update all except current locale
        },
        data: {
          showOnHomePage: showOnHomePageValue,
          icon: iconValue,
          category: categoryValue,
          updatedAt: new Date(),
        },
      });

      return NextResponse.json(featureRecord);
    }
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
    const locale = searchParams.get('locale');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (locale) {
      // Delete specific locale
      await deleteFeature(id, locale);
    } else {
      // Delete all translations
      await deleteFeature(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

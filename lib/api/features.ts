import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface FeatureRecord {
  id: string;
  slug?: string | null;
  title: string;
  description: string;
  icon?: string | null;
  category: string;
  hasDetailPage: boolean;
  showOnHomePage: boolean;
  locale: string;
  features?: any; // JSON array
  createdAt: Date;
  updatedAt: Date;
}

export async function listFeatures(locale?: string, showOnHomePage?: boolean): Promise<FeatureRecord[]> {
  const whereClause: any = {};
  if (locale) {
    whereClause.locale = locale;
  }
  if (showOnHomePage !== undefined) {
    whereClause.showOnHomePage = showOnHomePage;
  }

  try {
    const features = await prisma.features.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }, // Sort by creation date, not update date
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        icon: true,
        category: true,
        hasDetailPage: true,
        showOnHomePage: true,
        locale: true,
        features: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return features.map((feature) => ({
      ...feature,
      features: feature.features ?? null,
    }));
  } catch (error) {
    if (error instanceof Error && error.message.includes('showOnHomePage')) {
      return prisma.features.findMany({
        where: locale ? { locale } : {},
        orderBy: { createdAt: 'desc' }, // Sort by creation date, not update date
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          icon: true,
          category: true,
          hasDetailPage: true,
          showOnHomePage: true,
          locale: true,
          features: true,
          createdAt: true,
          updatedAt: true,
        },
      }).then(features => features.map((feature) => ({
        ...feature,
        features: feature.features ?? null,
      })));
    }
    throw error;
  }
}

export async function getFeatureById(id: string, locale?: string): Promise<FeatureRecord | null> {
  const featureRecord = await prisma.features.findFirst({
    where: {
      id,
      ...(locale ? { locale } : {}),
    },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      icon: true,
      category: true,
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      features: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!featureRecord) return null;

  return {
    ...featureRecord,
    features: featureRecord.features ?? null,
  };
}

/** Single-query list: all features (en as primary) with availableLocales. Use for admin list to avoid N+1. */
export async function listFeaturesWithLocales(
  primaryLocale: string = 'en'
): Promise<(FeatureRecord & { availableLocales: string[] })[]> {
  const rows = await prisma.features.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      icon: true,
      category: true,
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      features: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  const byId = new Map<string, typeof rows>();
  for (const row of rows) {
    if (!byId.has(row.id)) byId.set(row.id, []);
    byId.get(row.id)!.push(row);
  }
  const result: (FeatureRecord & { availableLocales: string[] })[] = [];
  for (const [, group] of byId) {
    const locales = [...new Set(group.map((r) => r.locale))].sort();
    const primary = group.find((r) => r.locale === primaryLocale) ?? group[0];
    result.push({
      ...primary,
      features: primary.features ?? null,
      availableLocales: locales,
    });
  }
  result.sort((a, b) => (b.createdAt.getTime?.() ?? 0) - (a.createdAt.getTime?.() ?? 0));
  return result;
}

export async function getAllFeatureTranslations(id: string): Promise<FeatureRecord[]> {
  const original = await prisma.features.findFirst({
    where: { id },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      icon: true,
      category: true,
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      features: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!original) return [];

  // Features are linked by id (compound key: id + locale)
  const translations = await prisma.features.findMany({
    where: {
      id: original.id,
    },
    orderBy: { locale: 'asc' },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      icon: true,
      category: true,
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      features: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return translations.map((feature) => ({
    ...feature,
    features: feature.features ?? null,
  }));
}

export async function createFeature(data: {
  slug?: string | null;
  title: string;
  description: string;
  icon?: string | null;
  category: string;
  hasDetailPage?: boolean;
  showOnHomePage?: boolean;
  locale: string;
  features?: any; // JSON array
  id?: string; // Optional ID - if provided, use it (for translations with same ID)
}): Promise<FeatureRecord> {
  const featureId = data.id || randomUUID();

  const createdFeature = await prisma.features.create({
    data: {
      id: featureId,
      slug: data.slug || null,
      title: data.title,
      description: data.description,
      icon: data.icon || null,
      category: data.category,
      hasDetailPage: data.hasDetailPage ?? false,
      showOnHomePage: data.showOnHomePage ?? false,
      locale: data.locale,
      features: data.features || null,
      updatedAt: new Date(),
    },
  });

  return {
    ...createdFeature,
    features: createdFeature.features ?? null,
  };
}

export async function updateFeature(
  id: string,
  locale: string,
  data: {
    slug?: string | null;
    title: string;
    description: string;
    icon?: string | null;
    category: string;
    hasDetailPage?: boolean;
    showOnHomePage?: boolean;
    features?: any; // JSON array
  }
): Promise<FeatureRecord> {
  const updateData: any = {
    title: data.title,
    description: data.description,
    icon: data.icon || null,
    category: data.category,
    hasDetailPage: data.hasDetailPage ?? false,
    showOnHomePage: data.showOnHomePage ?? false,
    features: data.features || null,
    updatedAt: new Date(),
  };
  if (data.slug !== undefined) {
    updateData.slug = data.slug || null;
  }

  // Use updateMany for compound key
  await prisma.features.updateMany({
    where: {
      id,
      locale,
    },
    data: updateData,
  });

  // Fetch the updated feature
  const updatedFeature = await prisma.features.findFirst({
    where: {
      id,
      locale,
    },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      icon: true,
      category: true,
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      features: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!updatedFeature) {
    throw new Error('Feature not found after update');
  }

  return {
    ...updatedFeature,
    features: updatedFeature.features ?? null,
  };
}

export async function deleteFeature(id: string, locale?: string): Promise<void> {
  if (locale) {
    // Delete specific locale using deleteMany for compound key
    await prisma.features.deleteMany({
      where: {
        id,
        locale,
      },
    });
  } else {
    // Delete all translations
    await prisma.features.deleteMany({
      where: { id },
    });
  }
}

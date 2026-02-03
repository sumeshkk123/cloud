import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface MlmPlanRecord {
  id: string;
  groupId: string | null;
  title: string;
  subtitle?: string | null;
  description: string;
  icon?: string | null;
  locale: string;
  showOnHomePage: boolean;
  features?: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}

function parseFeatures(v: unknown): string[] | null {
  if (v == null) return null;
  if (Array.isArray(v)) return v.map(String);
  if (typeof v === 'string') {
    try {
      const arr = JSON.parse(v);
      return Array.isArray(arr) ? arr.map(String) : null;
    } catch {
      return [v];
    }
  }
  return null;
}

export async function listMlmPlans(locale?: string, showOnHomePage?: boolean): Promise<MlmPlanRecord[]> {
  try {
    const plans = await prisma.mlm_plans.findMany({
      where: {
        ...(locale ? { locale } : {}),
        ...(showOnHomePage !== undefined ? { showOnHomePage } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: 1000,
    });
    return plans.map((p) => ({
      ...p,
      subtitle: p.subtitle ?? null,
      features: parseFeatures(p.features),
    })) as MlmPlanRecord[];
  } catch (error) {
    throw error;
  }
}

export async function getMlmPlanById(id: string, _locale?: string): Promise<MlmPlanRecord | null> {
  const plan = await prisma.mlm_plans.findFirst({
    where: { id },
  });
  if (!plan) return null;
  return {
    ...plan,
    subtitle: plan.subtitle ?? null,
    features: parseFeatures(plan.features),
  } as MlmPlanRecord;
}

export async function createMlmPlan(data: {
  title: string;
  subtitle?: string | null;
  description: string;
  icon?: string | null;
  locale: string;
  showOnHomePage?: boolean;
  features?: string[] | null;
  groupId?: string | null; // when adding a translation, pass the English row's id (or groupId)
}): Promise<MlmPlanRecord> {
  const id = randomUUID();
  const groupId = data.groupId ?? id; // first plan: groupId = id; translation: groupId = parent's groupId
  const plan = await prisma.mlm_plans.create({
    data: {
      id,
      groupId,
      title: data.title,
      subtitle: data.subtitle ?? null,
      description: data.description,
      icon: data.icon ?? null,
      locale: data.locale,
      showOnHomePage: data.showOnHomePage ?? false,
      features: data.features ?? undefined,
      updatedAt: new Date(),
    },
  });
  return {
    ...plan,
    subtitle: plan.subtitle ?? null,
    features: parseFeatures(plan.features),
  } as MlmPlanRecord;
}

export async function updateMlmPlan(
  id: string,
  data: {
    title?: string;
    subtitle?: string | null;
    description?: string;
    icon?: string | null;
    locale?: string;
    showOnHomePage?: boolean;
    features?: string[] | null;
  }
): Promise<MlmPlanRecord> {
  const updateData: Record<string, unknown> = { updatedAt: new Date() };
  if (data.title !== undefined) updateData.title = data.title;
  if (data.subtitle !== undefined) updateData.subtitle = data.subtitle ?? null;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.icon !== undefined) updateData.icon = data.icon ?? null;
  if (data.locale !== undefined) updateData.locale = data.locale;
  if (data.showOnHomePage !== undefined) updateData.showOnHomePage = data.showOnHomePage;
  if (data.features !== undefined) updateData.features = data.features ? (data.features as unknown) : null;

  const plan = await prisma.mlm_plans.update({
    where: { id },
    data: updateData as any,
  });
  return {
    ...plan,
    subtitle: plan.subtitle ?? null,
    features: parseFeatures(plan.features),
  } as MlmPlanRecord;
}

export async function deleteMlmPlan(id: string): Promise<void> {
  await prisma.mlm_plans.delete({ where: { id } });
}

/** Single-query list: all plans grouped by groupId with availableLocales. Use for admin list. */
export async function listMlmPlansWithLocales(
  primaryLocale: string = 'en'
): Promise<(MlmPlanRecord & { availableLocales: string[] })[]> {
  try {
    const rows = await prisma.mlm_plans.findMany({
      orderBy: { createdAt: 'desc' },
      take: 1000,
    });
    if (rows.length === 0) return [];

    const byGroup = new Map<string, typeof rows>();
    for (const row of rows) {
      const groupKey = row.groupId && row.groupId.trim() ? row.groupId : row.id;
      if (!byGroup.has(groupKey)) byGroup.set(groupKey, []);
      byGroup.get(groupKey)!.push(row);
    }

    const result: (MlmPlanRecord & { availableLocales: string[] })[] = [];
    for (const [, group] of byGroup) {
      const locales = [...new Set(group.map((r) => r.locale))].sort();
      const primary = group.find((r) => r.locale === primaryLocale) ?? group[0];
      if (!primary) continue;

      result.push({
        id: primary.id,
        groupId: primary.groupId,
        title: primary.title,
        subtitle: primary.subtitle ?? null,
        description: primary.description,
        icon: primary.icon ?? null,
        locale: primary.locale,
        showOnHomePage: primary.showOnHomePage ?? false,
        features: parseFeatures(primary.features),
        createdAt: primary.createdAt,
        updatedAt: primary.updatedAt,
        availableLocales: locales,
      } as MlmPlanRecord & { availableLocales: string[] });
    }
    result.sort((a, b) => (b.createdAt.getTime?.() ?? 0) - (a.createdAt.getTime?.() ?? 0));
    return result;
  } catch (error) {
    throw error;
  }
}

/** Get all locale rows for the same plan (same groupId). */
export async function getAllMlmPlanTranslations(id: string): Promise<MlmPlanRecord[]> {
  const original = await prisma.mlm_plans.findUnique({ where: { id } });
  if (!original) return [];

  const groupKey = original.groupId ?? original.id;
  const rows = await prisma.mlm_plans.findMany({
    where: { OR: [{ groupId: groupKey }, { id: groupKey }] },
    orderBy: { locale: 'asc' },
  });

  const englishRow = rows.find((r) => r.locale === 'en') ?? rows[0];
  const sharedIcon = englishRow?.icon ?? original.icon;
  const sharedShowOnHomePage = englishRow?.showOnHomePage ?? original.showOnHomePage;

  return rows.map((r) => ({
    ...r,
    icon: sharedIcon ?? r.icon,
    showOnHomePage: sharedShowOnHomePage,
    subtitle: r.subtitle ?? null,
    features: parseFeatures(r.features),
  })) as MlmPlanRecord[];
}

/**
 * Generate a slug from a plan title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/^mlm\s+/i, '')
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Get plans for menu display
 * Returns plans with their slugs for the current locale
 */
export async function getPlansForMenu(locale: string): Promise<Array<{ title: string; slug: string }>> {
  try {
    // Get all plans from the requested locale
    const localePlans = await prisma.mlm_plans.findMany({
      where: {
        locale: locale,
      },
      select: {
        title: true,
        groupId: true,
      },
      orderBy: {
        title: 'asc',
      },
    });

    // Return plans with generated slugs
    return localePlans.map((plan) => ({
      title: plan.title,
      slug: generateSlug(plan.title),
    }));
  } catch (error) {
    console.error('Error fetching plans for menu:', error);
    return [];
  }
}

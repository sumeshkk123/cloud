import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';
import { getModuleSlugFromTitleOrId } from '@/lib/modules-subpage-slugs';

export interface ModuleRecord {
  id: string;
  slug?: string | null;
  title: string;
  description: string;
  image?: string | null;
  showOnHomePage: boolean;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listModules(locale?: string, showOnHomePage?: boolean): Promise<ModuleRecord[]> {
  const whereClause: any = {};
  if (locale) {
    whereClause.locale = locale;
  }
  if (showOnHomePage !== undefined) {
    whereClause.showOnHomePage = showOnHomePage;
  }

  try {
    const modules = await prisma.modules.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        image: true,
        showOnHomePage: true,
        locale: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return modules;
  } catch (error) {
    if (error instanceof Error && error.message.includes('showOnHomePage')) {
      return prisma.modules.findMany({
        where: locale ? { locale } : {},
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          image: true,
          showOnHomePage: true,
          locale: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }
    throw error;
  }
}

export async function getModuleById(id: string, locale?: string): Promise<ModuleRecord | null> {
  const moduleRecord = await prisma.modules.findFirst({
    where: {
      id,
      ...(locale ? { locale } : {}),
    },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      image: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return moduleRecord;
}

/**
 * Same data source and order as the main page (GET /api/modules?locale=).
 * Main page displays listModules().reverse() (oldest first). We use the same reversed order
 * so the module we pick for a slug matches the card that links to that page.
 * Prefer module with explicit slug match (m.slug === slug) when multiple match.
 */
export async function getModuleForSubpageFromList(
  locale: string,
  slug: string,
  moduleId?: string | null
): Promise<ModuleRecord | null> {
  let modules = await listModules(locale);
  if (locale !== 'en' && modules.length === 0) {
    modules = await listModules('en');
  }
  // Same order as main page: main page uses [...data].reverse() (oldest first)
  const ordered = [...modules].reverse();

  if (moduleId && moduleId.trim()) {
    const byId = ordered.find((m) => m.id === moduleId.trim());
    if (byId) return byId;
  }

  // Prefer explicit slug match so one canonical module per page when admin set slug
  const withExplicitSlug = ordered.find((m) => m.slug === slug);
  if (withExplicitSlug) return withExplicitSlug;

  for (const m of ordered) {
    const derived = getModuleSlugFromTitleOrId(m.title, m.id);
    if (derived === slug) return m;
    if (slug === 'emails' && derived === 'emails') return m;
  }

  if (locale !== 'en') {
    const enModules = await listModules('en');
    const enOrdered = [...enModules].reverse();
    const enExplicit = enOrdered.find((m) => m.slug === slug);
    if (enExplicit) return enExplicit;
    for (const m of enOrdered) {
      const derived = getModuleSlugFromTitleOrId(m.title, m.id);
      if (derived === slug || m.slug === slug) return m;
      if (slug === 'emails' && derived === 'emails') return m;
    }
  }
  return null;
}

/**
 * Find the module record that corresponds to a subpage slug (e.g. "emails", "backup-manager")
 * for the given locale. Used to show Edit Module (backend) title/description on subpage hero.
 */
export async function getModuleBySubpageSlug(
  subpageSlug: string,
  locale: string
): Promise<ModuleRecord | null> {
  // Prefer direct lookup by slug when admin has set it (e.g. "backup-manager")
  const bySlug = await prisma.modules.findFirst({
    where: { slug: subpageSlug, locale },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      image: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (bySlug) return bySlug;

  const modules = await listModules(locale);
  for (const m of modules) {
    const derived = getModuleSlugFromTitleOrId(m.title, m.id);
    if (derived === subpageSlug || m.slug === subpageSlug) return m;
    if (subpageSlug === 'emails' && derived === 'emails') return m;
  }

  // Fallback: try English when the requested locale has no matching module
  if (locale !== 'en') {
    const enModules = await listModules('en');
    for (const m of enModules) {
      const derived = getModuleSlugFromTitleOrId(m.title, m.id);
      if (derived === subpageSlug || m.slug === subpageSlug) return m;
      if (subpageSlug === 'emails' && derived === 'emails') return m;
    }
  }
  return null;
}

/** Single-query list: all modules (en as primary) with availableLocales. Use for admin list to avoid N+1. */
export async function listModulesWithLocales(
  primaryLocale: string = 'en'
): Promise<(ModuleRecord & { availableLocales: string[] })[]> {
  const rows = await prisma.modules.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      image: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  
  // Group by image+showOnHomePage to identify translations
  // But also include a unique identifier to prevent unrelated modules from grouping
  // If image is null/empty, we can't reliably group, so treat each as separate
  const groupKey = (r: (typeof rows)[0]) => {
    // If no image, use id to keep modules separate (can't group without image)
    if (!r.image || r.image.trim() === '') {
      return `unique_${r.id}`;
    }
    return `${r.image}_${r.showOnHomePage}`;
  };
  
  const byGroup = new Map<string, (typeof rows)[0][]>();
  for (const row of rows) {
    const key = groupKey(row);
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key)!.push(row);
  }
  
  const result: (ModuleRecord & { availableLocales: string[] })[] = [];
  for (const [, group] of byGroup) {
    const locales = [...new Set(group.map((r) => r.locale))].sort();
    const primary = group.find((r) => r.locale === primaryLocale) ?? group[0];
    result.push({
      ...primary,
      availableLocales: locales,
    });
  }
  result.sort(
    (a, b) =>
      (b.createdAt.getTime?.() ?? 0) - (a.createdAt.getTime?.() ?? 0)
  );
  return result;
}

export async function getAllModuleTranslations(id: string): Promise<ModuleRecord[]> {
  const original = await prisma.modules.findUnique({
    where: { id },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      image: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!original) return [];

  // Heuristic linkage: image + showOnHomePage.
  // When multiple module families share the same icon/status, select one row per locale
  // by nearest createdAt to the original row to avoid cross-family collisions.
  const candidates = await prisma.modules.findMany({
    where: {
      image: original.image || undefined,
      showOnHomePage: original.showOnHomePage,
    },
    orderBy: { locale: 'asc' },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      image: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (candidates.length === 0) return [original];

  const byLocale = new Map<string, ModuleRecord[]>();
  for (const row of candidates) {
    if (!byLocale.has(row.locale)) byLocale.set(row.locale, []);
    byLocale.get(row.locale)!.push(row);
  }

  const selected: ModuleRecord[] = [];
  for (const [locale, rows] of byLocale) {
    if (locale === original.locale) {
      selected.push(original);
      continue;
    }

    const nearest = rows.reduce((best, row) => {
      const bestDiff = Math.abs(best.createdAt.getTime() - original.createdAt.getTime());
      const rowDiff = Math.abs(row.createdAt.getTime() - original.createdAt.getTime());
      return rowDiff < bestDiff ? row : best;
    }, rows[0]);
    selected.push(nearest);
  }

  const deduped = Array.from(new Map(selected.map((row) => [row.id, row])).values());
  deduped.sort((a, b) => a.locale.localeCompare(b.locale));
  return deduped;
}

export async function createModule(data: {
  slug?: string | null;
  title: string;
  description: string;
  image?: string | null;
  showOnHomePage?: boolean;
  locale: string;
}): Promise<ModuleRecord> {
  return prisma.modules.create({
    data: {
      id: randomUUID(),
      slug: data.slug || null,
      title: data.title,
      description: data.description,
      image: data.image || null,
      showOnHomePage: data.showOnHomePage ?? false,
      locale: data.locale,
      updatedAt: new Date(),
    },
  });
}

export async function updateModule(
  id: string,
  data: {
    slug?: string | null;
    title: string;
    description: string;
    image?: string | null;
    showOnHomePage?: boolean;
    locale: string;
  }
): Promise<ModuleRecord> {
  const updateData: any = {
    title: data.title,
    description: data.description,
    image: data.image || null,
    showOnHomePage: data.showOnHomePage ?? false,
    locale: data.locale,
    updatedAt: new Date(),
  };
  if (data.slug !== undefined) {
    updateData.slug = data.slug || null;
  }
  return prisma.modules.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteModule(id: string): Promise<void> {
  await prisma.modules.delete({
    where: { id },
  });
}

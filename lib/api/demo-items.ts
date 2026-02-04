import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface DemoItemRecord {
  id: string;
  icon: string;
  image: string;
  title?: string | null;
  adminDemoTitle: string;
  adminDemoFeatures?: string[] | null;
  distributorsDemoTitle: string;
  distributorsDemoFeatures?: string[] | null;
  locale: string;
  showOnHomePage?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

function safeJsonParse<T>(value: unknown): T | null {
  if (value == null) return null;
  if (typeof value === 'object' && !Array.isArray(value)) return value as T;
  if (Array.isArray(value)) return value as T;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }
  return null;
}

/** DB row shape (schema has more fields than generated client types) */
type DemoItemDbRow = DemoItemRecord & {
  adminDemoFeatures?: unknown;
  distributorsDemoFeatures?: unknown;
};

const DEMO_ITEMS_SELECT = {
  id: true,
  icon: true,
  image: true,
  title: true,
  adminDemoTitle: true,
  adminDemoFeatures: true,
  distributorsDemoTitle: true,
  distributorsDemoFeatures: true,
  locale: true,
  showOnHomePage: true,
  createdAt: true,
  updatedAt: true,
} as const;

function mapRowToRecord(item: DemoItemDbRow): DemoItemRecord {
  const adminFeatures = item.adminDemoFeatures != null
    ? safeJsonParse<string[]>(item.adminDemoFeatures as unknown)
    : null;
  const distributorFeatures = item.distributorsDemoFeatures != null
    ? safeJsonParse<string[]>(item.distributorsDemoFeatures as unknown)
    : null;
  return {
    id: item.id,
    icon: item.icon ?? '',
    image: item.image ?? '',
    title: item.title || null,
    adminDemoTitle: item.adminDemoTitle ?? '',
    adminDemoFeatures: adminFeatures,
    distributorsDemoTitle: item.distributorsDemoTitle ?? '',
    distributorsDemoFeatures: distributorFeatures,
    locale: item.locale,
    showOnHomePage: item.showOnHomePage ?? false,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  } as DemoItemRecord;
}

function mapRawRowToRecord(row: Record<string, unknown>, locale: string): DemoItemRecord {
  const getStr = (r: Record<string, unknown>, k: string): string =>
    (r[k] ?? (r as Record<string, unknown>)[k.toLowerCase()] ?? '') as string;
  const getJson = (r: Record<string, unknown>, k: string): unknown => {
    const v = r[k] ?? (r as Record<string, unknown>)[k.toLowerCase()];
    if (v == null) return null;
    if (typeof v === 'string') try { return JSON.parse(v); } catch { return null; }
    return v;
  };
  const getBool = (r: Record<string, unknown>, k: string): boolean => {
    const v = r[k] ?? (r as Record<string, unknown>)[(k === 'showOnHomePage' ? 'showonhomepage' : k.toLowerCase())];
    return v === true || v === 'true';
  };
  const adminFeatures = getJson(row, 'adminDemoFeatures') != null ? safeJsonParse<string[]>(getJson(row, 'adminDemoFeatures')) : null;
  const distributorFeatures = getJson(row, 'distributorsDemoFeatures') != null ? safeJsonParse<string[]>(getJson(row, 'distributorsDemoFeatures')) : null;
  return {
    id: String(getStr(row, 'id')),
    icon: getStr(row, 'icon') || '',
    image: getStr(row, 'image') || '',
    title: (row.title ?? (row as Record<string, unknown>).title ?? null) as string | null,
    adminDemoTitle: getStr(row, 'adminDemoTitle') || getStr(row, 'admindemotitle') || '',
    adminDemoFeatures: adminFeatures,
    distributorsDemoTitle: getStr(row, 'distributorsDemoTitle') || getStr(row, 'distributorsdemotitle') || '',
    distributorsDemoFeatures: distributorFeatures,
    locale: getStr(row, 'locale') || locale,
    showOnHomePage: getBool(row, 'showOnHomePage'),
    createdAt: (row.createdAt ?? (row as Record<string, unknown>).createdat) as Date,
    updatedAt: (row.updatedAt ?? (row as Record<string, unknown>).updatedat) as Date,
  };
}

export async function listDemoItems(locale?: string): Promise<DemoItemRecord[]> {
  try {
    const rows = await prisma.demo_items.findMany({
      select: DEMO_ITEMS_SELECT,
      where: locale ? { locale } : undefined,
      orderBy: { createdAt: 'desc' },
    });
    let items = (rows as unknown as DemoItemDbRow[]).map(mapRowToRecord);

    // When Prisma returns empty but DB may have data (e.g. schema/client mismatch), try raw SQL
    if (items.length === 0) {
      try {
        const { Prisma } = await import('@prisma/client');
        const raw = await prisma.$queryRaw<Array<Record<string, unknown>>>(
          locale
            ? Prisma.sql`SELECT * FROM demo_items WHERE locale = ${locale} ORDER BY id DESC`
            : Prisma.sql`SELECT * FROM demo_items ORDER BY id DESC`
        );
        if (raw?.length > 0) {
          items = raw.map((row) => mapRawRowToRecord(row, locale ?? (String((row as Record<string, unknown>).locale) || 'en')));
        }
      } catch (_) {
        // ignore raw fallback errors
      }
    }

    return items;
  } catch (error: any) {
    const msg = error?.message ?? String(error);
    console.error('[listDemoItems] Error (returning []):', msg);
    // If DB is missing showOnHomePage (migration not run), retry without it
    if (msg.includes('showOnHomePage') || msg.includes('does not exist') || msg.includes('column')) {
      try {
        const fallbackSelect = {
          id: true,
          icon: true,
          image: true,
          title: true,
          adminDemoTitle: true,
          adminDemoFeatures: true,
          distributorsDemoTitle: true,
          distributorsDemoFeatures: true,
          locale: true,
          createdAt: true,
          updatedAt: true,
        } as const;
        const rows = await prisma.demo_items.findMany({
          select: fallbackSelect,
          where: locale ? { locale } : undefined,
          orderBy: { createdAt: 'desc' },
        });
        const items = rows as unknown as (Omit<DemoItemDbRow, 'showOnHomePage'>)[];
        return items.map((item) => mapRowToRecord({ ...item, showOnHomePage: false }));
      } catch (fallbackErr: any) {
        console.error('[listDemoItems] Fallback query failed:', fallbackErr?.message || fallbackErr);
        return [];
      }
    }
    // Last resort: try raw SQL
    try {
      const { Prisma } = await import('@prisma/client');
      const raw = await prisma.$queryRaw<Array<Record<string, unknown>>>(
        locale ? Prisma.sql`SELECT * FROM demo_items WHERE locale = ${locale} ORDER BY id DESC` : Prisma.sql`SELECT * FROM demo_items ORDER BY id DESC`
      );
      if (raw?.length > 0) {
        return raw.map((row) => mapRawRowToRecord(row, locale ?? (String((row as Record<string, unknown>).locale) || 'en')));
      }
    } catch (_) {
      // ignore
    }
    return [];
  }
}

/** Single-query list: all demo items (en as primary) with availableLocales. Use for admin list to avoid N+1. */
export async function listDemoItemsWithLocales(
  primaryLocale: string = 'en'
): Promise<(DemoItemRecord & { availableLocales: string[] })[]> {
  try {
    // First, verify we can query the table
    const totalCount = await prisma.demo_items.count();
    console.log('[listDemoItemsWithLocales] Total count in database:', totalCount);
    
    const rawRows = await prisma.demo_items.findMany({
      orderBy: { createdAt: 'desc' },
    });
    const rows = rawRows as unknown as DemoItemDbRow[];

    console.log('[listDemoItemsWithLocales] Found rows:', rows.length, 'primaryLocale:', primaryLocale);
    if (rows.length > 0) {
      console.log('[listDemoItemsWithLocales] Sample row:', {
        id: rows[0].id,
        locale: rows[0].locale,
        icon: rows[0].icon?.substring(0, 50),
        adminDemoTitle: rows[0].adminDemoTitle?.substring(0, 50),
      });
    }
    
    if (rows.length === 0) {
      console.log('[listDemoItemsWithLocales] No rows found in database');
      return [];
    }

    // Group by icon (shared identifier for translations)
    // Use id as fallback for items without icons to ensure they're still grouped
    const byIcon = new Map<string, typeof rows>();
    for (const row of rows) {
      // Use icon if available, otherwise use id to create unique groups
      const iconKey = row.icon && row.icon.trim() ? row.icon : `unique-${row.id}`;
      if (!byIcon.has(iconKey)) byIcon.set(iconKey, []);
      byIcon.get(iconKey)!.push(row);
    }

    console.log('[listDemoItemsWithLocales] Grouped into', byIcon.size, 'groups by icon');
    
    const result: (DemoItemRecord & { availableLocales: string[] })[] = [];
    for (const [iconKey, group] of byIcon) {
      const locales = [...new Set(group.map((r) => r.locale))].sort();
      const primary = group.find((r) => r.locale === primaryLocale) ?? group[0];

      if (!primary) {
        console.warn('[listDemoItemsWithLocales] No primary found for group:', iconKey, 'locales:', locales);
        continue; // Skip if no primary found
      }

      result.push({
        id: primary.id,
        icon: primary.icon ?? '',
        image: primary.image ?? '',
        title: primary.title || null,
        adminDemoTitle: primary.adminDemoTitle ?? '',
        adminDemoFeatures: primary.adminDemoFeatures ? (typeof primary.adminDemoFeatures === 'string' ? JSON.parse(primary.adminDemoFeatures) : primary.adminDemoFeatures) : null,
        distributorsDemoTitle: primary.distributorsDemoTitle ?? '',
        distributorsDemoFeatures: primary.distributorsDemoFeatures ? (typeof primary.distributorsDemoFeatures === 'string' ? JSON.parse(primary.distributorsDemoFeatures) : primary.distributorsDemoFeatures) : null,
        locale: primary.locale,
        showOnHomePage: primary.showOnHomePage ?? false,
        createdAt: primary.createdAt,
        updatedAt: primary.updatedAt,
        availableLocales: locales,
      });
    }

    result.sort((a, b) => (b.createdAt.getTime?.() ?? 0) - (a.createdAt.getTime?.() ?? 0));
    console.log('[listDemoItemsWithLocales] Returning', result.length, 'items');
    return result;
  } catch (error: any) {
    console.error('[listDemoItemsWithLocales] Error:', error);
    console.error('[listDemoItemsWithLocales] Error details:', {
      code: error?.code,
      message: error?.message,
      stack: error?.stack,
    });
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      console.error('[listDemoItemsWithLocales] Table does not exist');
      return [];
    }
    // Don't throw - return empty array to prevent breaking the UI
    return [];
  }
}

export async function getDemoItemById(id: string, locale?: string): Promise<DemoItemRecord | null> {
  try {
    const row = await prisma.demo_items.findFirst({
      where: {
        id,
        ...(locale ? { locale } : {}),
      },
    });
    const item = row as unknown as DemoItemDbRow | null;
    if (!item) return null;

    return {
      ...item,
      adminDemoFeatures: item.adminDemoFeatures ? (typeof item.adminDemoFeatures === 'string' ? JSON.parse(item.adminDemoFeatures) : item.adminDemoFeatures) : null,
      distributorsDemoFeatures: item.distributorsDemoFeatures ? (typeof item.distributorsDemoFeatures === 'string' ? JSON.parse(item.distributorsDemoFeatures) : item.distributorsDemoFeatures) : null,
    } as unknown as DemoItemRecord;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return null;
    }
    throw error;
  }
}

export async function createDemoItem(data: {
  icon: string;
  image: string;
  title?: string | null;
  adminDemoTitle: string;
  adminDemoFeatures?: string[] | null;
  distributorsDemoTitle: string;
  distributorsDemoFeatures?: string[] | null;
  locale: string;
  showOnHomePage?: boolean;
}): Promise<DemoItemRecord> {
  const createData: any = {
    id: randomUUID(),
    icon: data.icon,
    image: data.image,
    title: data.title || null,
    adminDemoTitle: data.adminDemoTitle,
    adminDemoFeatures: data.adminDemoFeatures ? JSON.parse(JSON.stringify(data.adminDemoFeatures)) : null,
    distributorsDemoTitle: data.distributorsDemoTitle,
    distributorsDemoFeatures: data.distributorsDemoFeatures ? JSON.parse(JSON.stringify(data.distributorsDemoFeatures)) : null,
    locale: data.locale,
    showOnHomePage: data.showOnHomePage ?? false,
    updatedAt: new Date(),
  };

  const row = await prisma.demo_items.create({
    data: createData as never,
  });
  const item = row as unknown as DemoItemDbRow;

  return {
    ...item,
    adminDemoFeatures: item.adminDemoFeatures ? (typeof item.adminDemoFeatures === 'string' ? JSON.parse(item.adminDemoFeatures) : item.adminDemoFeatures) : null,
    distributorsDemoFeatures: item.distributorsDemoFeatures ? (typeof item.distributorsDemoFeatures === 'string' ? JSON.parse(item.distributorsDemoFeatures) : item.distributorsDemoFeatures) : null,
  } as unknown as DemoItemRecord;
}

export async function updateDemoItem(
  id: string,
  data: {
    icon?: string;
    image?: string;
    title?: string | null;
    adminDemoTitle?: string;
    adminDemoFeatures?: string[] | null;
    distributorsDemoTitle?: string;
    distributorsDemoFeatures?: string[] | null;
    locale: string;
    showOnHomePage?: boolean;
  }
): Promise<DemoItemRecord> {
  // Build update data object, only including defined fields
  const updateData: any = {
    locale: data.locale,
    updatedAt: new Date(),
  };

  if (data.icon !== undefined) updateData.icon = data.icon;
  if (data.image !== undefined) updateData.image = data.image;
  if (data.title !== undefined) updateData.title = data.title || null;
  if (data.adminDemoTitle !== undefined) updateData.adminDemoTitle = data.adminDemoTitle;
  if (data.adminDemoFeatures !== undefined) updateData.adminDemoFeatures = JSON.parse(JSON.stringify(data.adminDemoFeatures));
  if (data.distributorsDemoTitle !== undefined) updateData.distributorsDemoTitle = data.distributorsDemoTitle;
  if (data.distributorsDemoFeatures !== undefined) updateData.distributorsDemoFeatures = JSON.parse(JSON.stringify(data.distributorsDemoFeatures));
  if (data.showOnHomePage !== undefined) updateData.showOnHomePage = data.showOnHomePage;

  const row = await prisma.demo_items.update({
    where: { id },
    data: updateData as never,
  });
  const item = row as unknown as DemoItemDbRow;

  return {
    ...item,
    adminDemoFeatures: item.adminDemoFeatures ? (typeof item.adminDemoFeatures === 'string' ? JSON.parse(item.adminDemoFeatures) : item.adminDemoFeatures) : null,
    distributorsDemoFeatures: item.distributorsDemoFeatures ? (typeof item.distributorsDemoFeatures === 'string' ? JSON.parse(item.distributorsDemoFeatures) : item.distributorsDemoFeatures) : null,
  } as unknown as DemoItemRecord;
}

export async function getAllDemoItemTranslations(id: string): Promise<DemoItemRecord[]> {
  // Get the original demo item
  const originalRow = await prisma.demo_items.findUnique({
    where: { id },
  });
  const original = originalRow as unknown as DemoItemDbRow | null;
  if (!original) return [];

  // Link translations by icon (shared field); where cast for outdated Prisma client types
  const whereByIcon = { icon: original.icon } as never;
  const translationsRows = await prisma.demo_items.findMany({
    where: whereByIcon,
    orderBy: { locale: 'asc' },
  });
  const translations = translationsRows as unknown as DemoItemDbRow[];

  // Get English version to sync icon, image, and title
  const englishVersion = translations.find((t) => t.locale === 'en');
  const sharedIcon = englishVersion?.icon || original.icon;
  const sharedImage = englishVersion?.image || original.image;
  const sharedTitle = englishVersion?.title || original.title;

  const sharedShowOnHomePage = englishVersion?.showOnHomePage ?? original?.showOnHomePage ?? false;
  return translations.map((item) => ({
    ...item,
    icon: sharedIcon || item.icon,
    image: sharedImage || item.image,
    title: (sharedTitle ?? item.title ?? null) as string | null,
    showOnHomePage: item.showOnHomePage ?? sharedShowOnHomePage ?? false,
    adminDemoFeatures: item.adminDemoFeatures ? (typeof item.adminDemoFeatures === 'string' ? JSON.parse(item.adminDemoFeatures) : item.adminDemoFeatures) : null,
    distributorsDemoFeatures: item.distributorsDemoFeatures ? (typeof item.distributorsDemoFeatures === 'string' ? JSON.parse(item.distributorsDemoFeatures) : item.distributorsDemoFeatures) : null,
  })) as unknown as DemoItemRecord[];
}

export async function deleteDemoItem(id: string): Promise<void> {
  await prisma.demo_items.delete({
    where: { id },
  });
}

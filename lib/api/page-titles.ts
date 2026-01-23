import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface PageTitleRecord {
  page: string;
  locale: string;
  title: string;
  pagePill?: string;
  sectionSubtitle?: string;
}

export async function getPageTitle(
  page: string,
  locale: string
): Promise<PageTitleRecord | null> {
  try {
    const result = await prisma.page_titles.findUnique({
      where: {
        page_locale: { page, locale },
      },
      select: {
        page: true,
        locale: true,
        title: true,
        pagePill: true,
        sectionSubtitle: true,
      },
    });

    if (!result) return null;

    return {
      ...result,
      pagePill: result.pagePill ?? undefined,
      sectionSubtitle: result.sectionSubtitle ?? undefined,
    };
  } catch (error) {
    console.error(`[getPageTitle] Error fetching page title for ${page}/${locale}:`, error);
    return null;
  }
}

export async function getPageTitlesByLocale(
  locale: string
): Promise<PageTitleRecord[]> {
  try {
    const results = await prisma.page_titles.findMany({
      where: { locale },
      select: {
        page: true,
        locale: true,
        title: true,
        pagePill: true,
        sectionSubtitle: true,
      },
      orderBy: { page: 'asc' },
    });

    return results.map((result) => ({
      ...result,
      pagePill: result.pagePill ?? undefined,
      sectionSubtitle: result.sectionSubtitle ?? undefined,
    }));
  } catch (error) {
    console.error(`[getPageTitlesByLocale] Error fetching page titles for locale ${locale}:`, error);
    return [];
  }
}

export async function getAllPageTitles(): Promise<any[]> {
  try {
    const results = await prisma.page_titles.findMany({
      select: {
        page: true,
        locale: true,
        title: true,
        pagePill: true,
        sectionSubtitle: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: 'desc' },
    });

    return results.map((result) => ({
      ...result,
      pagePill: result.pagePill ?? undefined,
      sectionSubtitle: result.sectionSubtitle ?? undefined,
    }));
  } catch (error) {
    console.error('[getAllPageTitles] Error fetching all page titles:', error);
    return [];
  }
}

export async function upsertPageTitle(payload: PageTitleRecord) {
  const { page, locale, title, pagePill, sectionSubtitle } = payload;

  // Check if record exists first
  const existing = await prisma.page_titles.findUnique({
    where: {
      page_locale: { page, locale },
    },
  });

  if (existing) {
    // Update existing record
    const updateData: any = {
      title,
      updatedAt: new Date(),
    };

    // Only include optional fields if they are explicitly provided
    if (pagePill !== undefined) {
      updateData.pagePill = pagePill || null;
    }
    if (sectionSubtitle !== undefined) {
      updateData.sectionSubtitle = sectionSubtitle || null;
    }

    return prisma.page_titles.update({
      where: {
        page_locale: { page, locale },
      },
      data: updateData,
      select: {
        page: true,
        locale: true,
        title: true,
        pagePill: true,
        sectionSubtitle: true,
      },
    });
  } else {
    // Create new record
    return prisma.page_titles.create({
      data: {
        id: randomUUID(),
        page,
        locale,
        title,
        pagePill: pagePill || null,
        sectionSubtitle: sectionSubtitle || null,
        updatedAt: new Date(),
      },
      select: {
        page: true,
        locale: true,
        title: true,
        pagePill: true,
        sectionSubtitle: true,
      },
    });
  }
}

export async function deletePageTitle(page: string) {
  try {
    // Delete all translations for this page
    const result = await prisma.page_titles.deleteMany({
      where: { page },
    });
    return result;
  } catch (error) {
    console.error(`[deletePageTitle] Error deleting page title for ${page}:`, error);
    throw error;
  }
}

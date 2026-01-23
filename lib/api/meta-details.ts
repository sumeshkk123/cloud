import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface MetaDetailRecord {
  page: string;
  locale: string;
  title: string;
  description: string;
  keywords: string;
  updatedAt?: Date | string;
}

export async function getMetaDetail(
  page: string,
  locale: string
): Promise<MetaDetailRecord | null> {
  try {
    return await prisma.meta_details.findUnique({
      where: {
        page_locale: { page, locale },
      },
      select: {
        page: true,
        locale: true,
        title: true,
        description: true,
        keywords: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    console.error(`[getMetaDetail] Error fetching meta detail for ${page}/${locale}:`, error);
    return null;
  }
}

export async function getMetaDetailsByLocale(
  locale: string
): Promise<MetaDetailRecord[]> {
  try {
    return await prisma.meta_details.findMany({
      where: { locale },
      select: {
        page: true,
        locale: true,
        title: true,
        description: true,
        keywords: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: 'desc' },
    });
  } catch (error) {
    console.error(`[getMetaDetailsByLocale] Error fetching meta details for locale ${locale}:`, error);
    return [];
  }
}

export async function getAllMetaDetails(): Promise<MetaDetailRecord[]> {
  try {
    return await prisma.meta_details.findMany({
      select: {
        page: true,
        locale: true,
        title: true,
        description: true,
        keywords: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: 'desc' },
    });
  } catch (error) {
    console.error('[getAllMetaDetails] Error fetching all meta details:', error);
    return [];
  }
}

export async function upsertMetaDetail(payload: MetaDetailRecord) {
  const { page, locale, title, description, keywords } = payload;

  const existing = await prisma.meta_details.findUnique({
    where: {
      page_locale: { page, locale },
    },
  });

  if (existing) {
    return prisma.meta_details.update({
      where: {
        page_locale: { page, locale },
      },
      data: {
        title,
        description,
        keywords,
        updatedAt: new Date(),
      },
      select: {
        page: true,
        locale: true,
        title: true,
        description: true,
        keywords: true,
        updatedAt: true,
      },
    });
  } else {
    return prisma.meta_details.create({
      data: {
        id: randomUUID(),
        page,
        locale,
        title,
        description,
        keywords,
        updatedAt: new Date(),
      },
      select: {
        page: true,
        locale: true,
        title: true,
        description: true,
        keywords: true,
        updatedAt: true,
      },
    });
  }
}

export async function deleteMetaDetail(page: string, locale?: string) {
  try {
    if (locale) {
      return prisma.meta_details.deleteMany({
        where: {
          page,
          locale,
        },
      });
    }
    return prisma.meta_details.deleteMany({
      where: { page },
    });
  } catch (error) {
    console.error(`[deleteMetaDetail] Error deleting meta detail for ${page}/${locale}:`, error);
    throw error;
  }
}

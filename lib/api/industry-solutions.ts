import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface IndustrySolutionRecord {
  id: string;
  title: string;
  description: string;
  icon: string;
  showOnHomePage: boolean;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listIndustrySolutions(locale?: string, showOnHomePage?: boolean): Promise<IndustrySolutionRecord[]> {
  try {
    return await prisma.industry_solutions.findMany({
      where: {
        ...(locale ? { locale } : {}),
        ...(showOnHomePage !== undefined ? { showOnHomePage } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    throw error;
  }
}

export async function getIndustrySolutionById(id: string, locale?: string): Promise<IndustrySolutionRecord | null> {
  try {
    const solution = await prisma.industry_solutions.findFirst({
      where: {
        id,
        ...(locale ? { locale } : {}),
      },
    });

    return solution;
  } catch (error) {
    throw error;
  }
}

/** Generate URL slug from title (e.g. "Beauty & Cosmetics" -> "beauty-cosmetics"). */
export function slugFromIndustryTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '') || '';
}

/** Get industry solution by URL slug and locale (matches slug derived from title). */
export async function getIndustrySolutionBySlug(slug: string, locale: string): Promise<IndustrySolutionRecord | null> {
  try {
    const solutions = await prisma.industry_solutions.findMany({
      where: { locale },
      orderBy: { createdAt: 'desc' },
    });
    const normalized = slug.toLowerCase().trim();
    return solutions.find((s) => slugFromIndustryTitle(s.title) === normalized) ?? null;
  } catch (error) {
    throw error;
  }
}

export async function createIndustrySolution(data: {
  title: string;
  description: string;
  icon: string;
  showOnHomePage?: boolean;
  locale: string;
}): Promise<IndustrySolutionRecord> {
  try {
    return await prisma.industry_solutions.create({
      data: {
        id: randomUUID(),
        title: data.title,
        description: data.description,
        icon: data.icon,
        showOnHomePage: data.showOnHomePage ?? false,
        locale: data.locale,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function updateIndustrySolution(
  id: string,
  data: {
    title: string;
    description: string;
    icon: string;
    showOnHomePage?: boolean;
    locale: string;
  }
): Promise<IndustrySolutionRecord> {
  try {
    return await prisma.industry_solutions.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon,
        showOnHomePage: data.showOnHomePage ?? false,
        locale: data.locale,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function deleteIndustrySolution(id: string): Promise<void> {
  try {
    await prisma.industry_solutions.delete({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
}

export async function getAllIndustrySolutionTranslations(id: string): Promise<IndustrySolutionRecord[]> {
  // Get the original solution
  const original = await prisma.industry_solutions.findUnique({
    where: { id },
  });

  if (!original) return [];

  // Link translations by icon + showOnHomePage (both are shared)
  const translations = await prisma.industry_solutions.findMany({
    where: {
      icon: original.icon,
      showOnHomePage: original.showOnHomePage,
    },
    orderBy: { locale: 'asc' },
  });

  // Get English version to sync icon and showOnHomePage
  const englishVersion = translations.find((t) => t.locale === 'en');
  const sharedIcon = englishVersion?.icon || original.icon;
  const sharedShowOnHomePage = englishVersion?.showOnHomePage ?? original.showOnHomePage;

  return translations.map((t) => ({
    ...t,
    icon: sharedIcon || t.icon,
    showOnHomePage: sharedShowOnHomePage,
  }));
}

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

function slugFromTitle(title: string): string {
  return (title || '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export async function listIndustrySolutions(locale?: string, showOnHomePage?: boolean): Promise<IndustrySolutionRecord[]> {
  return await prisma.industry_solutions.findMany({
    where: {
      ...(locale ? { locale } : {}),
      ...(showOnHomePage !== undefined ? { showOnHomePage } : {}),
    },
    orderBy: { createdAt: 'desc' },
    take: 1000,
  });
}

export async function getIndustrySolutionById(id: string, locale?: string): Promise<IndustrySolutionRecord | null> {
  const solution = await prisma.industry_solutions.findFirst({
    where: { id },
  });
  return solution;
}

/** Get industry solution by URL slug and locale (matches slug derived from title). */
export async function getIndustrySolutionBySlug(slug: string, locale: string): Promise<IndustrySolutionRecord | null> {
  const solutions = await prisma.industry_solutions.findMany({
    where: { locale },
    orderBy: { createdAt: 'desc' },
  });
  const found = solutions.find((s) => slugFromTitle(s.title) === slug);
  return found ?? null;
}

export async function createIndustrySolution(data: {
  title: string;
  description: string;
  icon: string;
  showOnHomePage?: boolean;
  locale: string;
}): Promise<IndustrySolutionRecord> {
  return await prisma.industry_solutions.create({
    data: {
      title: data.title,
      description: data.description,
      icon: data.icon,
      showOnHomePage: data.showOnHomePage ?? false,
      locale: data.locale,
      updatedAt: new Date(),
    },
  });
}

export async function updateIndustrySolution(
  id: string,
  data: {
    title?: string;
    description?: string;
    icon?: string;
    showOnHomePage?: boolean;
    locale?: string;
  }
): Promise<IndustrySolutionRecord> {
  const updateData: Record<string, unknown> = { updatedAt: new Date() };
  if (data.title !== undefined) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.icon !== undefined) updateData.icon = data.icon;
  if (data.showOnHomePage !== undefined) updateData.showOnHomePage = data.showOnHomePage;
  if (data.locale !== undefined) updateData.locale = data.locale;

  return await prisma.industry_solutions.update({
    where: { id },
    data: updateData as any,
  });
}

export async function deleteIndustrySolution(id: string): Promise<void> {
  await prisma.industry_solutions.delete({
    where: { id },
  });
}

export async function getAllIndustrySolutionTranslations(id: string): Promise<IndustrySolutionRecord[]> {
  const original = await prisma.industry_solutions.findUnique({
    where: { id },
  });
  if (!original) return [];

  const translations = await prisma.industry_solutions.findMany({
    where: {
      icon: original.icon,
      showOnHomePage: original.showOnHomePage,
    },
    orderBy: { locale: 'asc' },
  });
  return translations;
}

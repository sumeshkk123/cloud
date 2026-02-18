import { prisma } from '@/lib/db/prisma';

export interface IndustrySolutionRecord {
  id: string;
  slug: string;
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
  return (await prisma.industry_solutions.findMany({
    where: {
      ...(locale ? { locale } : {}),
      ...(showOnHomePage !== undefined ? { showOnHomePage } : {}),
    },
    orderBy: { createdAt: 'desc' },
    take: 1000,
  })) as IndustrySolutionRecord[];
}

export async function getIndustrySolutionById(id: string, locale?: string): Promise<IndustrySolutionRecord | null> {
  const solution = await prisma.industry_solutions.findFirst({
    where: { id },
  });
  return (solution as IndustrySolutionRecord) || null;
}

/** Get industry solution by stable slug and locale. */
export async function getIndustrySolutionBySlug(slug: string, locale: string): Promise<IndustrySolutionRecord | null> {
  const solution = await prisma.industry_solutions.findFirst({
    where: { slug, locale },
  });
  return (solution as IndustrySolutionRecord) || null;
}

export async function createIndustrySolution(data: {
  slug?: string;
  title: string;
  description: string;
  icon: string;
  showOnHomePage?: boolean;
  locale: string;
}): Promise<IndustrySolutionRecord> {
  const slugToUse = data.slug || slugFromTitle(data.title);
  return (await prisma.industry_solutions.create({
    data: {
      slug: slugToUse,
      title: data.title,
      description: data.description,
      icon: data.icon,
      showOnHomePage: data.showOnHomePage ?? false,
      locale: data.locale,
      updatedAt: new Date(),
    },
  })) as IndustrySolutionRecord;
}

export async function updateIndustrySolution(
  id: string,
  data: {
    slug?: string;
    title?: string;
    description?: string;
    icon?: string;
    showOnHomePage?: boolean;
    locale?: string;
  }
): Promise<IndustrySolutionRecord> {
  const updateData: Record<string, unknown> = { updatedAt: new Date() };
  if (data.slug !== undefined) updateData.slug = data.slug;
  if (data.title !== undefined) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.icon !== undefined) updateData.icon = data.icon;
  if (data.showOnHomePage !== undefined) updateData.showOnHomePage = data.showOnHomePage;
  if (data.locale !== undefined) updateData.locale = data.locale;

  return (await prisma.industry_solutions.update({
    where: { id },
    data: updateData as any,
  })) as IndustrySolutionRecord;
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
      OR: [
        { icon: original.icon, showOnHomePage: original.showOnHomePage },
        { slug: original.slug || undefined }
      ]
    },
    orderBy: { locale: 'asc' },
  });
  return translations as IndustrySolutionRecord[];
}

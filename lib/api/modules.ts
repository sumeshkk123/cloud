import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface ModuleRecord {
  id: string;
  slug?: string | null;
  title: string;
  description: string;
  image?: string | null;
  hasDetailPage: boolean;
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
      orderBy: { updatedAt: 'desc' },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        image: true,
        hasDetailPage: true,
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
        orderBy: { updatedAt: 'desc' },
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          image: true,
          hasDetailPage: true,
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
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return moduleRecord;
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
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!original) return [];

  // Modules are linked by image and showOnHomePage (same icon and home page status = same module, different languages)
  // Find all modules with the same image and showOnHomePage
  const translations = await prisma.modules.findMany({
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
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return translations.length > 0 ? translations : [original];
}

export async function createModule(data: {
  slug?: string | null;
  title: string;
  description: string;
  image?: string | null;
  hasDetailPage?: boolean;
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
      hasDetailPage: data.hasDetailPage ?? false,
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
    hasDetailPage?: boolean;
    showOnHomePage?: boolean;
    locale: string;
  }
): Promise<ModuleRecord> {
  const updateData: any = {
    title: data.title,
    description: data.description,
    image: data.image || null,
    hasDetailPage: data.hasDetailPage ?? false,
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

import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface ServiceRecord {
  id: string;
  title: string;
  description: string;
  content?: string | null;
  image?: string | null;
  icon?: string | null;
  keyBenefits?: string[] | null;
  serviceHighlights?: string[] | null;
  showOnHomePage: boolean;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listServices(locale?: string, showOnHomePage?: boolean): Promise<ServiceRecord[]> {
  try {
    const services = await prisma.services.findMany({
      where: {
        ...(locale ? { locale } : {}),
        ...(showOnHomePage !== undefined ? { showOnHomePage } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });

    return services.map((service) => ({
      ...service,
      keyBenefits: service.keyBenefits ? (service.keyBenefits as any) : null,
      serviceHighlights: service.serviceHighlights ? (service.serviceHighlights as any) : null,
    }));
  } catch (error) {
    throw error;
  }
}

export async function getServiceById(id: string, locale?: string): Promise<ServiceRecord | null> {
  const service = await prisma.services.findFirst({
    where: {
      id,
    },
  });

  if (!service) return null;

  return {
    ...service,
    keyBenefits: service.keyBenefits ? (service.keyBenefits as any) : null,
    serviceHighlights: service.serviceHighlights ? (service.serviceHighlights as any) : null,
  };
}

export async function createService(data: {
  title: string;
  description: string;
  content?: string | null;
  image?: string | null;
  icon?: string | null;
  keyBenefits?: string[] | null;
  serviceHighlights?: string[] | null;
  showOnHomePage?: boolean;
  locale: string;
}): Promise<ServiceRecord> {
  const service = await prisma.services.create({
    data: {
      id: randomUUID(),
      title: data.title,
      description: data.description,
      content: data.content || null,
      image: data.image || null,
      icon: data.icon || null,
      keyBenefits: data.keyBenefits ? (data.keyBenefits as any) : null,
      serviceHighlights: data.serviceHighlights ? (data.serviceHighlights as any) : null,
      showOnHomePage: data.showOnHomePage ?? false,
      locale: data.locale,
      updatedAt: new Date(),
    },
  });

  return {
    ...service,
    keyBenefits: service.keyBenefits ? (service.keyBenefits as any) : null,
    serviceHighlights: service.serviceHighlights ? (service.serviceHighlights as any) : null,
  };
}

export async function updateService(
  id: string,
  data: {
    title?: string;
    description?: string;
    content?: string | null;
    image?: string | null;
    icon?: string | null;
    keyBenefits?: string[] | null;
    serviceHighlights?: string[] | null;
    showOnHomePage?: boolean;
    locale?: string;
  }
): Promise<ServiceRecord> {
  const updateData: any = {
    updatedAt: new Date(),
  };
  if (data.title !== undefined) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.content !== undefined) updateData.content = data.content || null;
  if (data.image !== undefined) updateData.image = data.image || null;
  if (data.icon !== undefined) updateData.icon = data.icon || null;
  if (data.keyBenefits !== undefined) updateData.keyBenefits = data.keyBenefits ? (data.keyBenefits as any) : null;
  if (data.serviceHighlights !== undefined) updateData.serviceHighlights = data.serviceHighlights ? (data.serviceHighlights as any) : null;
  if (data.showOnHomePage !== undefined) updateData.showOnHomePage = data.showOnHomePage;
  if (data.locale !== undefined) updateData.locale = data.locale;

  const service = await prisma.services.update({
    where: { id },
    data: updateData,
  });

  return {
    ...service,
    keyBenefits: service.keyBenefits ? (service.keyBenefits as any) : null,
    serviceHighlights: service.serviceHighlights ? (service.serviceHighlights as any) : null,
  };
}

export async function deleteService(id: string): Promise<void> {
  await prisma.services.delete({
    where: { id },
  });
}

export async function getAllServiceTranslations(id: string): Promise<ServiceRecord[]> {
  // Get the original service
  const original = await prisma.services.findUnique({
    where: { id },
  });

  if (!original) return [];

  // Link translations by icon + showOnHomePage (both are shared)
  const translations = await prisma.services.findMany({
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
    keyBenefits: t.keyBenefits ? (t.keyBenefits as any) : null,
    serviceHighlights: t.serviceHighlights ? (t.serviceHighlights as any) : null,
  }));
}

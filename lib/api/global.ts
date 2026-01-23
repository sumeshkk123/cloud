import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';
import type { GlobalSettings } from '@/types/global';

export async function getGlobalSettings(locale: string): Promise<GlobalSettings | null> {
  try {
    // Check if prisma is available
    if (!prisma || typeof prisma.global_settings?.findUnique !== 'function') {
      console.warn(
        `[getGlobalSettings] Prisma client not available. Please run: npm run db:generate`
      );
      return null;
    }

    const settings = await prisma.global_settings.findUnique({
      where: { locale },
    });

    if (!settings) {
      return null;
    }

    return {
      locale: settings.locale as any,
      siteName: settings.siteName || 'Cloud MLM Software',
      siteTagline: settings.siteTagline || null,
      metadataTitle: settings.metadataTitle || null,
      metadataDescription: settings.metadataDescription || null,
      metadataKeywords: settings.metadataKeywords || null,
      languageLabel: settings.languageLabel || null,
      languageAriaLabel: settings.languageAriaLabel || null,
      primaryNav: (settings.primaryNav as any) || [],
      headerCta: (settings.headerCta as any) || null,
      languageLinks: (settings.languageLinks as any) || [],
      footerColumns: (settings.footerColumns as any) || [],
      footerCta: (settings.footerCta as any) || null,
      footerContacts: (settings.footerContacts as any) || [],
      footerBottomLinks: (settings.footerBottomLinks as any) || [],
      contactEmail: settings.contactEmail || null,
      contactPhone: settings.contactPhone || null,
      socialLinks: (settings.socialLinks as any) || null,
    };
  } catch (error: any) {
    // Check if it's a Prisma client not generated error
    if (error?.message?.includes('PrismaClient') || error?.code === 'MODULE_NOT_FOUND' || error?.message?.includes('Cannot find module')) {
      console.warn(
        `[getGlobalSettings] Prisma Client not generated. Please run: npm run db:generate`
      );
      return null;
    }
    // Check if it's a database connection error or table doesn't exist
    if (error?.code === 'P1001' || error?.code === 'P2021' || error?.message?.includes('Can\'t reach database') || error?.message?.includes('does not exist')) {
      console.warn(
        `[getGlobalSettings] Database connection error or table does not exist. Please check your DATABASE_URL and run: npm run db:push`
      );
      return null;
    }
    console.error(`[getGlobalSettings] Error fetching global settings for ${locale}:`, error);
    return null;
  }
}

export async function upsertGlobalSettings(locale: string, data: Partial<GlobalSettings>) {
  const existing = await prisma.global_settings.findUnique({
    where: { locale },
  });

  const updateData: any = {
    updatedAt: new Date(),
  };

  if (data.siteName !== undefined) updateData.siteName = data.siteName;
  if (data.siteTagline !== undefined) updateData.siteTagline = data.siteTagline;
  if (data.metadataTitle !== undefined) updateData.metadataTitle = data.metadataTitle;
  if (data.metadataDescription !== undefined) updateData.metadataDescription = data.metadataDescription;
  if (data.metadataKeywords !== undefined) updateData.metadataKeywords = data.metadataKeywords;
  if (data.languageLabel !== undefined) updateData.languageLabel = data.languageLabel;
  if (data.languageAriaLabel !== undefined) updateData.languageAriaLabel = data.languageAriaLabel;
  if (data.primaryNav !== undefined) updateData.primaryNav = data.primaryNav as any;
  if (data.headerCta !== undefined) updateData.headerCta = data.headerCta as any;
  if (data.languageLinks !== undefined) updateData.languageLinks = data.languageLinks as any;
  if (data.footerColumns !== undefined) updateData.footerColumns = data.footerColumns as any;
  if (data.footerCta !== undefined) updateData.footerCta = data.footerCta as any;
  if (data.footerContacts !== undefined) updateData.footerContacts = data.footerContacts as any;
  if (data.footerBottomLinks !== undefined) updateData.footerBottomLinks = data.footerBottomLinks as any;
  if (data.contactEmail !== undefined) updateData.contactEmail = data.contactEmail;
  if (data.contactPhone !== undefined) updateData.contactPhone = data.contactPhone;
  if (data.socialLinks !== undefined) updateData.socialLinks = data.socialLinks as any;

  if (existing) {
    return prisma.global_settings.update({
      where: { locale },
      data: updateData,
    });
  } else {
    return prisma.global_settings.create({
      data: {
        id: randomUUID(),
        locale,
        siteName: data.siteName || 'Cloud MLM Software',
        ...updateData,
      },
    });
  }
}

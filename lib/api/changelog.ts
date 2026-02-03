// Database-driven API for changelog entries using Prisma

import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';
import { isTableNotFoundError } from '@/lib/db/error-handler';

export interface ChangelogEntry {
  id: string;
  version: string;
  title?: string | null;
  description: string;
  features: string[];
  locale: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export async function getChangelogEntries(locale: string): Promise<ChangelogEntry[]> {
  try {
    const entries = await (prisma as any).changelog_entries.findMany({
      where: {
        locale,
      },
      orderBy: [
        { order: 'desc' },
        { updatedAt: 'desc' },
        { createdAt: 'desc' },
      ],
      take: 100, // Limit to 100 entries for performance
    });

    const mappedEntries = entries.map((entry: any) => ({
      id: entry.id,
      version: entry.version,
      title: entry.title || undefined,
      description: entry.description,
      features: Array.isArray(entry.features) ? (entry.features as string[]) : [],
      locale: entry.locale,
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    }));

    return mappedEntries;
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      return [];
    }
    return [];
  }
}

export async function listChangelogEntries(locale?: string): Promise<ChangelogEntry[]> {
  try {
    const entries = await (prisma as any).changelog_entries.findMany({
      where: locale ? { locale } : {},
      orderBy: [
        { order: 'desc' },
        { updatedAt: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    return entries.map((entry: any) => ({
      id: entry.id,
      version: entry.version,
      title: entry.title || undefined,
      description: entry.description,
      features: Array.isArray(entry.features) ? (entry.features as string[]) : [],
      locale: entry.locale,
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    }));
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      return [];
    }
    throw error;
  }
}

export async function getChangelogEntryById(id: string, locale?: string): Promise<ChangelogEntry | null> {
  try {
    // First find the entry by ID to get the original
    const originalEntry = await (prisma as any).changelog_entries.findUnique({
      where: { id },
    });

    if (!originalEntry) return null;

    // If no locale specified or locale matches, return the original
    if (!locale || originalEntry.locale === locale) {
      return {
        id: originalEntry.id,
        version: originalEntry.version,
        title: originalEntry.title || undefined,
        description: originalEntry.description,
        features: Array.isArray(originalEntry.features) ? (originalEntry.features as string[]) : [],
        locale: originalEntry.locale,
        order: originalEntry.order,
        createdAt: originalEntry.createdAt,
        updatedAt: originalEntry.updatedAt,
      };
    }

    // If locale is different, try to find an entry with the same version in that locale
    // Changelog entries are linked by version, so we search by version + locale
    const translatedEntry = await (prisma as any).changelog_entries.findFirst({
      where: {
        version: originalEntry.version,
        locale: locale,
      },
    });

    // If translation found, return it; otherwise return null (for new translation)
    if (translatedEntry) {
      return {
        id: translatedEntry.id,
        version: translatedEntry.version,
        title: translatedEntry.title || undefined,
        description: translatedEntry.description,
        features: Array.isArray(translatedEntry.features) ? (translatedEntry.features as string[]) : [],
        locale: translatedEntry.locale,
        order: translatedEntry.order,
        createdAt: translatedEntry.createdAt,
        updatedAt: translatedEntry.updatedAt,
      };
    }

    return null;
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      return null;
    }
    throw error;
  }
}

export async function createChangelogEntry(data: {
  version: string;
  title?: string | null;
  description: string;
  features?: string[] | null;
  locale: string;
  order?: number;
}): Promise<ChangelogEntry> {
  // If no order specified, get the highest order and add 1
  let order = data.order;
  if (order === undefined) {
    try {
      const maxOrderEntry = await (prisma as any).changelog_entries.findFirst({
        where: { locale: data.locale },
        orderBy: { order: 'desc' },
        select: { order: true },
      });
      order = (maxOrderEntry?.order ?? -1) + 1;
    } catch (error: any) {
      if (isTableNotFoundError(error)) {
        throw new Error('Changelog entries table does not exist. Please run: npx prisma migrate dev');
      }
      throw error;
    }
  }

  try {
    const entry = await (prisma as any).changelog_entries.create({
      data: {
        id: randomUUID(),
        version: data.version,
        title: data.title || null,
        description: data.description,
        features: data.features ? (data.features as any) : [],
        locale: data.locale,
        order: order,
        updatedAt: new Date(),
      },
    });

    return {
      id: entry.id,
      version: entry.version,
      title: entry.title || undefined,
      description: entry.description,
      features: Array.isArray(entry.features) ? (entry.features as string[]) : [],
      locale: entry.locale,
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    };
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('Changelog entries table does not exist. Please run: npx prisma migrate dev');
    }
    throw error;
  }
}

export async function updateChangelogEntry(
  id: string,
  data: {
    version?: string;
    title?: string | null;
    description?: string;
    features?: string[] | null;
    locale?: string;
    order?: number;
  }
): Promise<ChangelogEntry> {
  try {
    // First, get the current entry to check its locale and version
    const currentEntry = await (prisma as any).changelog_entries.findUnique({
      where: { id },
    });

    if (!currentEntry) {
      throw new Error('Changelog entry not found');
    }

    const targetLocale = data.locale !== undefined ? data.locale : currentEntry.locale;
    const targetVersion = data.version !== undefined ? data.version : currentEntry.version;

    // Check if an entry with the same version + locale already exists (but different ID)
    // This happens when creating a translation - we want to update the translation entry, not the original
    const existingEntry = await (prisma as any).changelog_entries.findFirst({
      where: {
        version: targetVersion,
        locale: targetLocale,
        id: { not: id }, // Different ID
      },
    });

    // If locale is changing and an entry with that version+locale exists, update that one instead
    // If locale is the same, just update the current entry
    if (data.locale !== undefined && data.locale !== currentEntry.locale && existingEntry) {
      // Update the existing entry for that locale
      const updateData: any = {
        updatedAt: new Date(),
      };
      if (data.version !== undefined) updateData.version = data.version;
      if (data.title !== undefined) updateData.title = data.title || null;
      if (data.description !== undefined) updateData.description = data.description;
      if (data.features !== undefined) updateData.features = data.features ? (data.features as any) : [];
      if (data.order !== undefined) updateData.order = data.order;

      const entry = await (prisma as any).changelog_entries.update({
        where: { id: existingEntry.id },
        data: updateData,
      });

      return {
        id: entry.id,
        version: entry.version,
        title: entry.title || undefined,
        description: entry.description,
        features: Array.isArray(entry.features) ? (entry.features as string[]) : [],
        locale: entry.locale,
        order: entry.order,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
      };
    }

    // If locale is changing but no entry exists for that locale, create a new one
    // (This handles the case when updating English entry to create Spanish translation)
    if (data.locale !== undefined && data.locale !== currentEntry.locale && !existingEntry) {
      // Create new entry for the new locale - use the data provided (not current entry data)
      let order = data.order;
      if (order === undefined) {
        const maxOrderEntry = await (prisma as any).changelog_entries.findFirst({
          where: { locale: targetLocale },
          orderBy: { order: 'desc' },
          select: { order: true },
        });
        order = (maxOrderEntry?.order ?? -1) + 1;
      }

      const entry = await (prisma as any).changelog_entries.create({
        data: {
          id: randomUUID(),
          version: targetVersion,
          title: data.title !== undefined ? (data.title || null) : null,
          description: data.description !== undefined ? data.description : '',
          features: data.features !== undefined
            ? (data.features ? (data.features as any) : [])
            : [],
          locale: targetLocale,
          order: order,
          updatedAt: new Date(),
        },
      });

      return {
        id: entry.id,
        version: entry.version,
        title: entry.title || undefined,
        description: entry.description,
        features: Array.isArray(entry.features) ? (entry.features as string[]) : [],
        locale: entry.locale,
        order: entry.order,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
      };
    }

    // Normal update - same locale (or locale not changing)
    // Important: Never change the locale of an existing entry - that would delete the original
    const updateData: any = {
      updatedAt: new Date(),
    };
    if (data.version !== undefined) updateData.version = data.version;
    if (data.title !== undefined) updateData.title = data.title || null;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.features !== undefined) updateData.features = data.features ? (data.features as any) : [];
    // Never update locale - entries should be separate per locale
    if (data.order !== undefined) updateData.order = data.order;

    const entry = await (prisma as any).changelog_entries.update({
      where: { id },
      data: updateData,
    });

    return {
      id: entry.id,
      version: entry.version,
      title: entry.title || undefined,
      description: entry.description,
      features: Array.isArray(entry.features) ? (entry.features as string[]) : [],
      locale: entry.locale,
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    };
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('Changelog entries table does not exist. Please run: npx prisma migrate dev');
    }

    throw error;
  }
}

export async function getAllChangelogTranslations(version: string): Promise<ChangelogEntry[]> {
  try {
    const entries = await (prisma as any).changelog_entries.findMany({
      where: { version },
      orderBy: { locale: 'asc' },
    });

    return entries.map((entry: any) => ({
      id: entry.id,
      version: entry.version,
      title: entry.title || undefined,
      description: entry.description,
      features: Array.isArray(entry.features) ? (entry.features as string[]) : [],
      locale: entry.locale,
      order: entry.order,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    }));
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      return [];
    }
    throw error;
  }
}

export async function deleteChangelogEntry(id: string): Promise<void> {
  try {
    // Get the entry first to find its version
    const entry = await (prisma as any).changelog_entries.findUnique({
      where: { id },
      select: { version: true },
    });

    if (entry) {
      // Delete all translations for this version
      await (prisma as any).changelog_entries.deleteMany({
        where: { version: entry.version },
      });
    } else {
      // If entry not found, try to delete by ID anyway
      await (prisma as any).changelog_entries.delete({
        where: { id },
      });
    }
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('Changelog entries table does not exist. Please run: npx prisma migrate dev');
    }
    throw error;
  }
}

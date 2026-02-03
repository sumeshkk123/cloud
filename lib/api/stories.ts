import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface StoryRecord {
  id: string;
  title: string;
  content: string;
  count?: string | null;
  screenshot?: string | null;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listStories(locale?: string): Promise<StoryRecord[]> {
  try {
    if (!prisma || !prisma.stories) {
      throw new Error('Prisma client is not initialized or stories model is missing. Please run: npx prisma generate');
    }

    return prisma.stories.findMany({
      where: locale ? { locale } : undefined,
      orderBy: { updatedAt: 'desc' },
    });
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Stories table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function getStoryById(id: string, locale?: string): Promise<StoryRecord | null> {
  try {
    if (!prisma || !prisma.stories) {
      throw new Error('Prisma client is not initialized or stories model is missing. Please run: npx prisma generate');
    }

    const story = await prisma.stories.findFirst({
      where: {
        id,
        ...(locale ? { locale } : {}),
      },
    });

    // If story found but no screenshot and locale is not default, try to get screenshot from default locale
    if (story && !story.screenshot && locale && locale !== 'en') {
      const defaultLocaleStory = await prisma.stories.findFirst({
        where: {
          title: story.title,
          locale: 'en',
        },
        select: {
          screenshot: true,
        },
      });
      if (defaultLocaleStory?.screenshot) {
        return { ...story, screenshot: defaultLocaleStory.screenshot };
      }
    }

    return story;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Stories table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function getAllStoryTranslations(id: string): Promise<StoryRecord[]> {
  try {
    if (!prisma || !prisma.stories) {
      throw new Error('Prisma client is not initialized or stories model is missing. Please run: npx prisma generate');
    }

    // Get the story by ID
    const original = await prisma.stories.findUnique({
      where: { id },
    });

    if (!original) return [];

    // Find the English version
    let englishVersion: StoryRecord | null = null;
    
    if (original.locale === 'en') {
      englishVersion = original;
    } else {
      // For non-English stories, find the English version by exact createdAt match
      // Translations are created with the same createdAt as the English version
      englishVersion = await prisma.stories.findFirst({
        where: {
          locale: 'en',
          createdAt: original.createdAt,
        },
      });
    }

    if (!englishVersion) {
      // If no English version found, return just this story
      return [original];
    }

    // Find all stories with the same createdAt as the English version
    // Translations are created with the same createdAt timestamp
    const translations = await prisma.stories.findMany({
      where: {
        createdAt: englishVersion.createdAt,
      },
      orderBy: { locale: 'asc' },
    });

    // Ensure all translations use the same screenshot (from English version)
    const sharedScreenshot = englishVersion.screenshot || null;

    return translations.map((t) => ({
      ...t,
      screenshot: sharedScreenshot, // Use English screenshot for all translations
    }));
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Stories table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function createStory(data: {
  title: string;
  content: string;
  count?: string | null;
  screenshot?: string | null;
  locale: string;
  createdAt?: Date; // Optional: allow setting createdAt for linking translations
}): Promise<StoryRecord> {
  try {
    if (!prisma || !prisma.stories) {
      throw new Error('Prisma client is not initialized or stories model is missing. Please run: npx prisma generate');
    }

    return prisma.stories.create({
      data: {
        id: randomUUID(),
        title: data.title,
        content: data.content,
        count: data.count || null,
        screenshot: data.screenshot || null,
        locale: data.locale,
        createdAt: data.createdAt || new Date(),
        updatedAt: new Date(),
      },
    });
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Stories table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updateStory(
  id: string,
  data: {
    title: string;
    content: string;
    count?: string | null;
    screenshot?: string | null;
    locale: string;
  }
): Promise<StoryRecord> {
  try {
    if (!prisma || !prisma.stories) {
      throw new Error('Prisma client is not initialized or stories model is missing. Please run: npx prisma generate');
    }

    return prisma.stories.update({
      where: { id },
      data: {
        title: data.title,
        content: data.content,
        count: data.count || null,
        screenshot: data.screenshot || null,
        locale: data.locale,
        updatedAt: new Date(),
      },
    });
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Stories table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function deleteStory(id: string): Promise<void> {
  try {
    if (!prisma || !prisma.stories) {
      throw new Error('Prisma client is not initialized or stories model is missing. Please run: npx prisma generate');
    }

    await prisma.stories.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Stories table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

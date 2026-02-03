import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';
import { isTableNotFoundError } from '@/lib/db/error-handler';

export interface AICopilotRecord {
  id: string;
  icon: string | null;
  title: string;
  content: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listAICopilots(locale?: string): Promise<AICopilotRecord[]> {
  try {
    if (!prisma) {
      throw new Error('Prisma client is not initialized. Please check your database configuration.');
    }

    if (!prisma.ai_copilots) {
      throw new Error('AI Copilots model is not available. Please run: npx prisma generate');
    }

    const copilots = await prisma.ai_copilots.findMany({
      where: locale ? { locale } : {},
      orderBy: { createdAt: 'desc' },
    });

    return copilots;
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('AI Copilots table does not exist. Please run database migrations.');
    }
    console.error('[listAICopilots] Error:', error);
    throw error;
  }
}

export async function getAICopilotById(id: string, locale?: string): Promise<AICopilotRecord | null> {
  try {
    if (!prisma || !prisma.ai_copilots) {
      return null;
    }

    const copilot = await prisma.ai_copilots.findFirst({
      where: {
        id,
        ...(locale ? { locale } : {}),
      },
    });

    if (!copilot) return null;

    return copilot;
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      return null;
    }
    console.error('[getAICopilotById] Error:', error);
    throw error;
  }
}

export async function getAllAICopilotTranslations(id: string): Promise<AICopilotRecord[]> {
  try {
    if (!prisma || !prisma.ai_copilots) {
      return [];
    }

    // First get the English version to find the icon
    const englishCopilot = await prisma.ai_copilots.findFirst({
      where: { id, locale: 'en' },
    });

    if (!englishCopilot) {
      // If no English version, get any version with this ID
      const anyCopilot = await prisma.ai_copilots.findFirst({
        where: { id },
      });
      if (!anyCopilot) return [];

      // Get all translations with the same icon (linking mechanism)
      const icon = anyCopilot.icon;
      if (icon) {
        return await prisma.ai_copilots.findMany({
          where: { icon },
          orderBy: { locale: 'asc' },
        });
      }
      return [anyCopilot];
    }

    // Get all translations with the same icon (linking mechanism)
    const icon = englishCopilot.icon;
    if (icon) {
      return await prisma.ai_copilots.findMany({
        where: { icon },
        orderBy: { locale: 'asc' },
      });
    }

    // Fallback: return all with same ID
    return await prisma.ai_copilots.findMany({
      where: { id },
      orderBy: { locale: 'asc' },
    });
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('AI Copilots table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function createAICopilot(data: {
  icon?: string | null;
  title: string;
  content: string;
  locale: string;
}): Promise<AICopilotRecord> {
  try {
    if (!prisma) {
      throw new Error('Prisma client is not initialized. Please check your database configuration.');
    }

    if (!prisma.ai_copilots) {
      throw new Error('AI Copilots model is not available. Please run: npx prisma generate');
    }

    const copilot = await prisma.ai_copilots.create({
      data: {
        id: randomUUID(),
        icon: data.icon || null,
        title: data.title,
        content: data.content,
        locale: data.locale,
        updatedAt: new Date(),
      },
    });

    return copilot;
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('AI Copilots table does not exist. Please run database migrations.');
    }
    console.error('[createAICopilot] Error:', error);
    throw error;
  }
}

export async function updateAICopilot(
  id: string,
  data: {
    icon?: string | null;
    title?: string;
    content?: string;
    locale?: string;
  }
): Promise<AICopilotRecord> {
  try {
    if (!prisma || !prisma.ai_copilots) {
      throw new Error('Prisma client is not initialized. Please check your database configuration.');
    }

    const copilot = await prisma.ai_copilots.update({
      where: { id },
      data: {
        ...(data.icon !== undefined ? { icon: data.icon } : {}),
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.content !== undefined ? { content: data.content } : {}),
        ...(data.locale !== undefined ? { locale: data.locale } : {}),
        updatedAt: new Date(),
      },
    });

    return copilot;
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('AI Copilots table does not exist. Please run database migrations.');
    }
    console.error('[updateAICopilot] Error:', error);
    throw error;
  }
}

export async function deleteAICopilot(id: string): Promise<void> {
  try {
    if (!prisma || !prisma.ai_copilots) {
      throw new Error('Prisma client is not initialized. Please check your database configuration.');
    }

    await prisma.ai_copilots.delete({
      where: { id },
    });
  } catch (error: any) {
    if (isTableNotFoundError(error)) {
      throw new Error('AI Copilots table does not exist. Please run database migrations.');
    }
    console.error('[deleteAICopilot] Error:', error);
    throw error;
  }
}

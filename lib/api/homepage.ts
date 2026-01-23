import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';
import type { HomepageContent } from '@/types/homepage';

export async function getHomepageContent(locale: string): Promise<HomepageContent | null> {
  try {
    // Check if prisma is available
    if (!prisma) {
      console.warn(
        `[getHomepageContent] Prisma client not available. Please run: npm run db:generate`
      );
      return null;
    }

    // Check if the table exists by trying to access it
    try {
      const content = await prisma.homepage_content.findUnique({
        where: { locale },
      });

      if (!content) {
        return null;
      }

      return content.content as HomepageContent;
    } catch (prismaError: any) {
      // Check if it's a table not found error
      if (prismaError?.code === 'P2021' || prismaError?.code === 'P2001' || 
          prismaError?.message?.includes('does not exist') || 
          prismaError?.message?.includes('Unknown table')) {
        console.warn(
          `[getHomepageContent] Table 'homepage_content' does not exist. Please run: npm run db:push`
        );
        return null;
      }
      throw prismaError;
    }
  } catch (error: any) {
    // Check if it's a Prisma client not generated error
    if (error?.message?.includes('PrismaClient') || error?.code === 'MODULE_NOT_FOUND' || error?.message?.includes('Cannot find module')) {
      console.warn(
        `[getHomepageContent] Prisma Client not generated. Please run: npm run db:generate`
      );
      return null;
    }
    // Check if it's a database connection error
    if (error?.code === 'P1001' || error?.message?.includes('Can\'t reach database')) {
      console.warn(
        `[getHomepageContent] Database connection error. Please check your DATABASE_URL.`
      );
      return null;
    }
    console.error(`[getHomepageContent] Error fetching homepage content for ${locale}:`, error);
    return null;
  }
}

export async function upsertHomepageContent(locale: string, content: HomepageContent) {
  const existing = await prisma.homepage_content.findUnique({
    where: { locale },
  });

  if (existing) {
    return prisma.homepage_content.update({
      where: { locale },
      data: {
        content: content as any,
        updatedAt: new Date(),
      },
    });
  } else {
    return prisma.homepage_content.create({
      data: {
        id: randomUUID(),
        locale,
        content: content as any,
      },
    });
  }
}

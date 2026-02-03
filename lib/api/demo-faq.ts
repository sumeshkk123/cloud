import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface DemoFaqRecord {
  id: string;
  question: string;
  answer: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listDemoFaqs(locale?: string): Promise<DemoFaqRecord[]> {
  try {
    const faqs = await prisma.demo_faqs.findMany({
      where: locale ? { locale } : undefined,
      orderBy: { updatedAt: 'desc' },
    });
    return faqs;
  } catch (error: any) {
    // If table doesn't exist, return empty array
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return [];
    }
    console.error('[listDemoFaqs] Error:', error);
    throw error;
  }
}

export async function getDemoFaqById(id: string, locale?: string): Promise<DemoFaqRecord | null> {
  try {
    if (locale) {
      const faq = await prisma.demo_faqs.findFirst({
        where: {
          id,
          locale,
        },
      });
      return faq;
    }

    // If no locale specified, return the first one found (typically English)
    const faq = await prisma.demo_faqs.findFirst({
      where: { id },
      orderBy: { locale: 'asc' },
    });
    return faq;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return null;
    }
    throw error;
  }
}

export async function getAllDemoFaqTranslations(id: string): Promise<DemoFaqRecord[]> {
  try {
    // demo_faqs uses compound key [id, locale], so translations share the same ID
    const translations = await prisma.demo_faqs.findMany({
      where: { id },
      orderBy: { locale: 'asc' },
    });

    return translations.length > 0 ? translations : [];
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return [];
    }
    throw error;
  }
}

export async function createDemoFaq(data: {
  question: string;
  answer: string;
  locale: string;
  id?: string; // Optional ID - if provided, use it (for translations with same ID)
}): Promise<DemoFaqRecord> {
  const faqId = data.id || randomUUID();

  return prisma.demo_faqs.create({
    data: {
      id: faqId,
      question: data.question,
      answer: data.answer,
      locale: data.locale,
      updatedAt: new Date(),
    },
  });
}

export async function updateDemoFaq(
  id: string,
  locale: string,
  data: {
    question: string;
    answer: string;
  }
): Promise<DemoFaqRecord> {
  // Use updateMany for compound key
  await prisma.demo_faqs.updateMany({
    where: {
      id,
      locale,
    },
    data: {
      question: data.question,
      answer: data.answer,
      updatedAt: new Date(),
    },
  });

  // Fetch the updated FAQ
  const updatedFaq = await prisma.demo_faqs.findFirst({
    where: {
      id,
      locale,
    },
  });

  if (!updatedFaq) {
    throw new Error('Demo FAQ not found after update');
  }

  return updatedFaq;
}

export async function deleteDemoFaq(id: string, locale?: string): Promise<void> {
  if (locale) {
    // Delete specific locale using deleteMany for compound key
    await prisma.demo_faqs.deleteMany({
      where: {
        id,
        locale,
      },
    });
  } else {
    // Delete all translations
    await prisma.demo_faqs.deleteMany({
      where: { id },
    });
  }
}

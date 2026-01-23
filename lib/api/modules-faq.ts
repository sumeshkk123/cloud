import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

// Ensure prisma is initialized
if (!prisma) {
  console.error('[modules-faq] Prisma client is not initialized');
}

export interface ModuleFaqRecord {
  id: string;
  question: string;
  answer: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listModuleFaqs(locale?: string): Promise<ModuleFaqRecord[]> {
  try {
    if (!prisma) {
      console.error('[listModuleFaqs] Prisma client is not initialized');
      return [];
    }
    
    if (!prisma.module_faqs) {
      console.error('[listModuleFaqs] Prisma client does not have module_faqs model. Please run: npx prisma generate');
      return [];
    }
    
    const faqs = await prisma.module_faqs.findMany({
      where: locale ? { locale } : undefined,
      orderBy: { updatedAt: 'desc' },
    });
    return faqs;
  } catch (error: any) {
    // If table doesn't exist, return empty array
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return [];
    }
    console.error('[listModuleFaqs] Error:', error);
    throw error;
  }
}

export async function getModuleFaqById(id: string, locale?: string): Promise<ModuleFaqRecord | null> {
  try {
    if (!prisma || !prisma.module_faqs) {
      console.error('[getModuleFaqById] Prisma client is not initialized or module_faqs model is missing');
      return null;
    }
    
    if (locale) {
      const faq = await prisma.module_faqs.findFirst({
        where: {
          id,
          locale,
        },
      });
      return faq;
    }
    
    // If no locale specified, return the first one found (typically English)
    const faq = await prisma.module_faqs.findFirst({
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

export async function getAllModuleFaqTranslations(id: string): Promise<ModuleFaqRecord[]> {
  try {
    if (!prisma || !prisma.module_faqs) {
      console.error('[getAllModuleFaqTranslations] Prisma client is not initialized or module_faqs model is missing');
      return [];
    }
    
    // module_faqs uses compound key [id, locale], so translations share the same ID
    // Find all FAQs with this ID (they are all translations of each other)
    const translations = await prisma.module_faqs.findMany({
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

export async function createModuleFaq(data: {
  question: string;
  answer: string;
  locale: string;
  id?: string;
}): Promise<ModuleFaqRecord> {
  try {
    if (!prisma || !prisma.module_faqs) {
      throw new Error('Prisma client is not initialized or module_faqs model is missing. Please run: npx prisma generate');
    }
    
    const faqId = data.id || randomUUID();
    
    return prisma.module_faqs.create({
      data: {
        id: faqId,
        question: data.question,
        answer: data.answer,
        locale: data.locale,
        updatedAt: new Date(),
      },
    });
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Module FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updateModuleFaq(
  id: string,
  data: {
    question: string;
    answer: string;
    locale: string;
  }
): Promise<ModuleFaqRecord> {
  try {
    if (!prisma || !prisma.module_faqs) {
      throw new Error('Prisma client is not initialized or module_faqs model is missing. Please run: npx prisma generate');
    }
    
    // Check if the FAQ exists with the given id and locale
    const existingFaq = await prisma.module_faqs.findFirst({
      where: {
        id: id,
        locale: data.locale,
      },
    });

    if (!existingFaq) {
      throw new Error(`Module FAQ with id ${id} and locale ${data.locale} not found`);
    }

    // Use updateMany since we have a compound key
    await prisma.module_faqs.updateMany({
      where: {
        id: id,
        locale: data.locale,
      },
      data: {
        question: data.question,
        answer: data.answer,
        updatedAt: new Date(),
      },
    });

    // Fetch and return the updated FAQ
    const updatedFaq = await prisma.module_faqs.findFirst({
      where: {
        id: id,
        locale: data.locale,
      },
    });

    if (!updatedFaq) {
      throw new Error('Failed to retrieve updated module FAQ');
    }

    return updatedFaq;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Module FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function deleteModuleFaq(id: string, locale?: string): Promise<void> {
  try {
    if (!prisma || !prisma.module_faqs) {
      throw new Error('Prisma client is not initialized or module_faqs model is missing. Please run: npx prisma generate');
    }
    
    if (locale) {
      // Delete specific locale translation
      await prisma.module_faqs.deleteMany({
        where: {
          id,
          locale,
        },
      });
    } else {
      // Delete all translations for this FAQ
      await prisma.module_faqs.deleteMany({
        where: { id },
      });
    }
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Module FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

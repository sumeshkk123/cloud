import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

// Ensure prisma is initialized
if (!prisma) {
  console.error('[services-faq] Prisma client is not initialized');
}

export interface ServiceFaqRecord {
  id: string;
  question: string;
  answer: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listServiceFaqs(locale?: string): Promise<ServiceFaqRecord[]> {
  try {
    if (!prisma) {
      console.error('[listServiceFaqs] Prisma client is not initialized');
      return [];
    }
    
    if (!prisma.services_faqs) {
      console.error('[listServiceFaqs] Prisma client does not have services_faqs model. Please run: npx prisma generate');
      return [];
    }
    
    const faqs = await prisma.services_faqs.findMany({
      where: locale ? { locale } : undefined,
      orderBy: { updatedAt: 'desc' },
    });
    return faqs;
  } catch (error: any) {
    // If table doesn't exist, return empty array
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return [];
    }
    console.error('[listServiceFaqs] Error:', error);
    throw error;
  }
}

export async function getServiceFaqById(id: string, locale?: string): Promise<ServiceFaqRecord | null> {
  try {
    if (!prisma || !prisma.services_faqs) {
      console.error('[getServiceFaqById] Prisma client is not initialized or services_faqs model is missing');
      return null;
    }
    
    if (locale) {
      const faq = await prisma.services_faqs.findFirst({
        where: {
          id,
          locale,
        },
      });
      return faq;
    }
    
    // If no locale specified, return the first one found (typically English)
    const faq = await prisma.services_faqs.findFirst({
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

export async function getAllServiceFaqTranslations(id: string): Promise<ServiceFaqRecord[]> {
  try {
    if (!prisma || !prisma.services_faqs) {
      console.error('[getAllServiceFaqTranslations] Prisma client is not initialized or services_faqs model is missing');
      return [];
    }
    
    // services_faqs uses compound key [id, locale], so translations share the same ID
    // Find all FAQs with this ID (they are all translations of each other)
    const translations = await prisma.services_faqs.findMany({
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

export async function createServiceFaq(data: {
  question: string;
  answer: string;
  locale: string;
  id?: string;
}): Promise<ServiceFaqRecord> {
  try {
    if (!prisma || !prisma.services_faqs) {
      throw new Error('Prisma client is not initialized or services_faqs model is missing. Please run: npx prisma generate');
    }
    
    const faqId = data.id || randomUUID();
    
    return prisma.services_faqs.create({
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
      throw new Error('Services FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updateServiceFaq(
  id: string,
  data: {
    question: string;
    answer: string;
    locale: string;
  }
): Promise<ServiceFaqRecord> {
  try {
    if (!prisma || !prisma.services_faqs) {
      throw new Error('Prisma client is not initialized or services_faqs model is missing. Please run: npx prisma generate');
    }
    
    // Check if the FAQ exists with the given id and locale
    const existingFaq = await prisma.services_faqs.findFirst({
      where: {
        id: id,
        locale: data.locale,
      },
    });

    if (!existingFaq) {
      throw new Error(`Service FAQ with id ${id} and locale ${data.locale} not found`);
    }

    // Use updateMany since we have a compound key
    await prisma.services_faqs.updateMany({
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
    const updatedFaq = await prisma.services_faqs.findFirst({
      where: {
        id: id,
        locale: data.locale,
      },
    });

    if (!updatedFaq) {
      throw new Error('Failed to retrieve updated service FAQ');
    }

    return updatedFaq;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Services FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function deleteServiceFaq(id: string, locale?: string): Promise<void> {
  try {
    if (!prisma || !prisma.services_faqs) {
      throw new Error('Prisma client is not initialized or services_faqs model is missing. Please run: npx prisma generate');
    }
    
    if (locale) {
      // Delete specific locale translation
      await prisma.services_faqs.deleteMany({
        where: {
          id,
          locale,
        },
      });
    } else {
      // Delete all translations for this FAQ
      await prisma.services_faqs.deleteMany({
        where: { id },
      });
    }
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Services FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

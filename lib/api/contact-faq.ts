import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

// Ensure prisma is initialized
if (!prisma) {
  console.error('[contact-faq] Prisma client is not initialized');
}

export interface ContactFaqRecord {
  id: string;
  question: string;
  answer: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listContactFaqs(locale?: string): Promise<ContactFaqRecord[]> {
  try {
    if (!prisma) {
      console.error('[listContactFaqs] Prisma client is not initialized');
      return [];
    }
    
    if (!prisma.contact_faqs) {
      console.error('[listContactFaqs] Prisma client does not have contact_faqs model. Please run: npx prisma generate');
      return [];
    }
    
    const faqs = await prisma.contact_faqs.findMany({
      where: locale ? { locale } : undefined,
      orderBy: { updatedAt: 'desc' },
    });
    return faqs;
  } catch (error: any) {
    // If table doesn't exist, return empty array
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return [];
    }
    console.error('[listContactFaqs] Error:', error);
    throw error;
  }
}

export async function getContactFaqById(id: string, locale?: string): Promise<ContactFaqRecord | null> {
  try {
    if (!prisma || !prisma.contact_faqs) {
      console.error('[getContactFaqById] Prisma client is not initialized or contact_faqs model is missing');
      return null;
    }
    
    if (locale) {
      const faq = await prisma.contact_faqs.findFirst({
        where: {
          id,
          locale,
        },
      });
      return faq;
    }
    
    // If no locale specified, return the first one found (typically English)
    const faq = await prisma.contact_faqs.findFirst({
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

export async function getAllContactFaqTranslations(id: string): Promise<ContactFaqRecord[]> {
  try {
    if (!prisma || !prisma.contact_faqs) {
      console.error('[getAllContactFaqTranslations] Prisma client is not initialized or contact_faqs model is missing');
      return [];
    }
    
    // contact_faqs uses compound key [id, locale], so translations share the same ID
    // Find all FAQs with this ID (they are all translations of each other)
    const translations = await prisma.contact_faqs.findMany({
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

export async function createContactFaq(data: {
  question: string;
  answer: string;
  locale: string;
  id?: string;
}): Promise<ContactFaqRecord> {
  try {
    if (!prisma || !prisma.contact_faqs) {
      throw new Error('Prisma client is not initialized or contact_faqs model is missing. Please run: npx prisma generate');
    }
    
    const faqId = data.id || randomUUID();
    
    return prisma.contact_faqs.create({
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
      throw new Error('Contact FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updateContactFaq(
  id: string,
  data: {
    question: string;
    answer: string;
    locale: string;
  }
): Promise<ContactFaqRecord> {
  try {
    if (!prisma || !prisma.contact_faqs) {
      throw new Error('Prisma client is not initialized or contact_faqs model is missing. Please run: npx prisma generate');
    }
    
    // Check if the FAQ exists with the given id and locale
    const existingFaq = await prisma.contact_faqs.findFirst({
      where: {
        id: id,
        locale: data.locale,
      },
    });

    if (!existingFaq) {
      throw new Error(`Contact FAQ with id ${id} and locale ${data.locale} not found`);
    }

    // Use updateMany since we have a compound key
    await prisma.contact_faqs.updateMany({
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
    const updatedFaq = await prisma.contact_faqs.findFirst({
      where: {
        id: id,
        locale: data.locale,
      },
    });

    if (!updatedFaq) {
      throw new Error('Failed to retrieve updated contact FAQ');
    }

    return updatedFaq;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Contact FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function deleteContactFaq(id: string, locale?: string): Promise<void> {
  try {
    if (!prisma || !prisma.contact_faqs) {
      throw new Error('Prisma client is not initialized or contact_faqs model is missing. Please run: npx prisma generate');
    }
    
    if (locale) {
      // Delete specific locale translation
      await prisma.contact_faqs.deleteMany({
        where: {
          id,
          locale,
        },
      });
    } else {
      // Delete all translations for this FAQ
      await prisma.contact_faqs.deleteMany({
        where: { id },
      });
    }
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Contact FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

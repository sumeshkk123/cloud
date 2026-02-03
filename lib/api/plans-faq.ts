import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

// Ensure prisma is initialized
if (!prisma) {
  console.error('[plans-faq] Prisma client is not initialized');
}

export interface PlanFaqRecord {
  id: string;
  question: string;
  answer: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listPlanFaqs(locale?: string): Promise<PlanFaqRecord[]> {
  try {
    if (!prisma) {
      console.error('[listPlanFaqs] Prisma client is not initialized');
      return [];
    }

    if (!prisma.mlm_plan_faqs) {
      console.error('[listPlanFaqs] Prisma client does not have mlm_plan_faqs model. Please run: npx prisma generate');
      return [];
    }

    const faqs = await prisma.mlm_plan_faqs.findMany({
      where: locale ? { locale } : undefined,
      orderBy: { updatedAt: 'desc' },
    });
    return faqs;
  } catch (error: any) {
    // If table doesn't exist, return empty array
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return [];
    }
    console.error('[listPlanFaqs] Error:', error);
    throw error;
  }
}

export async function getPlanFaqById(id: string, locale?: string): Promise<PlanFaqRecord | null> {
  try {
    if (!prisma || !prisma.mlm_plan_faqs) {
      console.error('[getPlanFaqById] Prisma client is not initialized or mlm_plan_faqs model is missing');
      return null;
    }

    if (locale) {
      const faq = await prisma.mlm_plan_faqs.findFirst({
        where: {
          id,
          locale,
        },
      });
      return faq;
    }

    // If no locale specified, return the first one found (typically English)
    const faq = await prisma.mlm_plan_faqs.findFirst({
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

export async function getAllPlanFaqTranslations(id: string): Promise<PlanFaqRecord[]> {
  try {
    if (!prisma || !prisma.mlm_plan_faqs) {
      console.error('[getAllPlanFaqTranslations] Prisma client is not initialized or mlm_plan_faqs model is missing');
      return [];
    }

    // mlm_plan_faqs uses id as primary key, so we need to find by id
    // Find all FAQs with this ID (they are all translations of each other)
    const translations = await prisma.mlm_plan_faqs.findMany({
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

export async function createPlanFaq(data: {
  question: string;
  answer: string;
  locale: string;
  id?: string;
}): Promise<PlanFaqRecord> {
  try {
    if (!prisma || !prisma.mlm_plan_faqs) {
      throw new Error('Prisma client is not initialized or mlm_plan_faqs model is missing. Please run: npx prisma generate');
    }

    const faqId = data.id || randomUUID();

    return prisma.mlm_plan_faqs.create({
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
      throw new Error('Plan FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updatePlanFaq(
  id: string,
  locale: string,
  data: {
    question: string;
    answer: string;
  }
): Promise<PlanFaqRecord> {
  try {
    if (!prisma || !prisma.mlm_plan_faqs) {
      throw new Error('Prisma client is not initialized or mlm_plan_faqs model is missing. Please run: npx prisma generate');
    }

    // mlm_plan_faqs uses compound key [id, locale]
    await prisma.mlm_plan_faqs.updateMany({
      where: { id, locale },
      data: {
        question: data.question,
        answer: data.answer,
        updatedAt: new Date(),
      },
    });

    const updatedFaq = await prisma.mlm_plan_faqs.findFirst({
      where: { id, locale },
    });

    if (!updatedFaq) {
      throw new Error('Plan FAQ not found after update');
    }
    return updatedFaq;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Plan FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function deletePlanFaq(id: string, locale?: string): Promise<void> {
  try {
    if (!prisma || !prisma.mlm_plan_faqs) {
      throw new Error('Prisma client is not initialized or mlm_plan_faqs model is missing. Please run: npx prisma generate');
    }

    if (locale) {
      await prisma.mlm_plan_faqs.deleteMany({
        where: { id, locale },
      });
    } else {
      await prisma.mlm_plan_faqs.deleteMany({
        where: { id },
      });
    }
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Plan FAQs table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

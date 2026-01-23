import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export async function getFaqs(locale: string) {
  const faqs = await prisma.faqs.findMany({
    where: { locale },
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true,
      question: true,
      answer: true,
      locale: true,
      categoryId: true,
    },
  });
  
  return faqs;
}

export async function getFaqById(id: string, locale?: string) {
  if (locale) {
    const faq = await prisma.faqs.findFirst({
      where: {
        id: id,
        locale: locale,
      },
      select: {
        id: true,
        question: true,
        answer: true,
        locale: true,
        categoryId: true,
      },
    });

    return faq || null;
  }

  const faq = await prisma.faqs.findFirst({
    where: { id },
    select: {
      id: true,
      question: true,
      answer: true,
      locale: true,
      categoryId: true,
    },
  });

  return faq || null;
}

export async function createFaq(data: { question: string; answer: string; locale: string; id?: string; categoryId?: string | null }) {
  const { question, answer, locale, id, categoryId } = data;
  
  const faqId = id || randomUUID();
  
  const faq = await prisma.faqs.create({
    data: {
      id: faqId,
      question,
      answer,
      locale,
      categoryId: categoryId || null,
      updatedAt: new Date(),
    },
    select: {
      id: true,
      question: true,
      answer: true,
      locale: true,
      categoryId: true,
    },
  });
  
  return faq;
}

export async function updateFaq(id: string, data: { question: string; answer: string; locale: string; categoryId?: string | null }) {
  const { question, answer, locale, categoryId } = data;
  
  const existingFaq = await prisma.faqs.findFirst({
    where: {
      id: id,
      locale: locale,
    },
    select: { locale: true },
  });

  if (!existingFaq) {
    throw new Error(`FAQ with id ${id} and locale ${locale} not found`);
  }

  const updateData: any = {
    question,
    answer,
    updatedAt: new Date(),
  };

  // Only update categoryId if provided (for new translations, use the same categoryId as English)
  if (categoryId !== undefined) {
    updateData.categoryId = categoryId || null;
  }

  await prisma.faqs.updateMany({
    where: {
      id: id,
      locale: locale,
    },
    data: updateData,
  });

  const updatedFaq = await prisma.faqs.findFirst({
    where: {
      id: id,
      locale: locale,
    },
    select: {
      id: true,
      question: true,
      answer: true,
      locale: true,
      categoryId: true,
    },
  });

  if (!updatedFaq) {
    throw new Error('Failed to retrieve updated FAQ');
  }

  return updatedFaq;
}

export async function getAllFaqTranslations(id: string) {
  const faqs = await prisma.faqs.findMany({
    where: { id },
    select: {
      id: true,
      question: true,
      answer: true,
      locale: true,
      categoryId: true,
    },
    orderBy: { locale: 'asc' },
  });
  
  return faqs;
}

export async function deleteFaq(id: string, locale?: string) {
  if (locale) {
    return prisma.faqs.deleteMany({
      where: {
        id: id,
        locale: locale,
      },
    });
  }
  
  return prisma.faqs.deleteMany({
    where: { id },
  });
}

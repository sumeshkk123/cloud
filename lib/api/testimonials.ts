import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface TestimonialRecord {
  id: string;
  name: string;
  role?: string | null;
  content: string;
  image?: string | null;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listTestimonials(locale?: string): Promise<TestimonialRecord[]> {
  return prisma.testimonials.findMany({
    where: locale ? { locale } : undefined,
    orderBy: { updatedAt: 'desc' },
  });
}

export async function getTestimonialById(id: string, locale?: string): Promise<TestimonialRecord | null> {
  const testimonial = await prisma.testimonials.findFirst({
    where: {
      id,
      ...(locale ? { locale } : {}),
    },
  });

  // If testimonial found but no image and locale is not default, try to get image from default locale
  if (testimonial && !testimonial.image && locale && locale !== 'en') {
    const defaultLocaleTestimonial = await prisma.testimonials.findFirst({
      where: {
        name: testimonial.name,
        locale: 'en',
      },
      select: {
        image: true,
      },
    });
    if (defaultLocaleTestimonial?.image) {
      return { ...testimonial, image: defaultLocaleTestimonial.image };
    }
  }

  return testimonial;
}

export async function getAllTestimonialTranslations(id: string): Promise<TestimonialRecord[]> {
  // Get the original English testimonial to find its name
  const original = await prisma.testimonials.findUnique({
    where: { id },
  });

  if (!original) return [];

  // Find all testimonials with the same name (linked translations)
  // Since testimonials from the same person should have the same name
  const translations = await prisma.testimonials.findMany({
    where: { name: original.name },
    orderBy: { locale: 'asc' },
  });

  // Ensure all translations use the same image (from English version)
  const englishVersion = translations.find((t) => t.locale === 'en');
  const sharedImage = englishVersion?.image || null;

  return translations.map((t) => ({
    ...t,
    image: sharedImage, // Use English image for all translations
  }));
}

export async function createTestimonial(data: {
  name: string;
  role?: string | null;
  content: string;
  image?: string | null;
  locale: string;
}): Promise<TestimonialRecord> {
  return prisma.testimonials.create({
    data: {
      id: randomUUID(),
      name: data.name,
      role: data.role || null,
      content: data.content,
      image: data.image || null,
      locale: data.locale,
      updatedAt: new Date(),
    },
  });
}

export async function updateTestimonial(
  id: string,
  data: {
    name: string;
    role?: string | null;
    content: string;
    image?: string | null;
    locale: string;
  }
): Promise<TestimonialRecord> {
  return prisma.testimonials.update({
    where: { id },
    data: {
      name: data.name,
      role: data.role || null,
      content: data.content,
      image: data.image || null,
      locale: data.locale,
      updatedAt: new Date(),
    },
  });
}

export async function deleteTestimonial(id: string): Promise<void> {
  await prisma.testimonials.delete({
    where: { id },
  });
}

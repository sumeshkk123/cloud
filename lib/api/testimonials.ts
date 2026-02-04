import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface TestimonialRecord {
  id: string;
  name: string;
  slug?: string | null;
  role?: string | null;
  content: string;
  image?: string | null;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

/** Generate URL slug from name e.g. "Giovanni P." -> "giovanni-p" */
export function slugify(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'testimonial';
}

export async function listTestimonials(locale?: string): Promise<TestimonialRecord[]> {
  return prisma.testimonials.findMany({
    where: locale ? { locale } : undefined,
    orderBy: { createdAt: 'desc' },
  });
}

/** List testimonials for a locale with availableLocales for each (by name). Two queries total. */
export async function listTestimonialsWithLocales(locale = 'en'): Promise<(TestimonialRecord & { availableLocales: string[] })[]> {
  const list = await prisma.testimonials.findMany({
    where: { locale },
    orderBy: { createdAt: 'desc' },
  });
  if (list.length === 0) return [];
  const names = [...new Set(list.map((t) => t.name))];
  const nameLocaleRows = await prisma.testimonials.findMany({
    where: { name: { in: names } },
    select: { name: true, locale: true },
    orderBy: { locale: 'asc' },
  });
  const nameToLocales = new Map<string, string[]>();
  for (const row of nameLocaleRows) {
    const arr = nameToLocales.get(row.name) || [];
    if (!arr.includes(row.locale)) arr.push(row.locale);
    nameToLocales.set(row.name, arr);
  }
  return list.map((t) => ({
    ...t,
    availableLocales: nameToLocales.get(t.name) || [t.locale],
  }));
}

/** Get testimonial by slug and locale. Falls back to slugify(name) match if slug column is null or missing. */
export async function getTestimonialBySlug(slug: string, locale: string): Promise<TestimonialRecord | null> {
  const normalizedSlug = slug.trim().toLowerCase();
  if (!normalizedSlug) return null;

  try {
    const testimonial = await (prisma.testimonials as any).findFirst({
      where: {
        slug: normalizedSlug,
        locale,
      },
    });
    if (testimonial) {
      if (testimonial.image === null && locale !== 'en') {
        const en = await prisma.testimonials.findFirst({
          where: { name: testimonial.name, locale: 'en' },
          select: { image: true },
        });
        if (en?.image) return { ...testimonial, image: en.image };
      }
      return testimonial;
    }
  } catch {
    // slug column may not exist yet; fall through to name fallback
  }

  // Fallback: find by slugified name (for rows without slug set or before migration)
  const all = await prisma.testimonials.findMany({
    where: { locale },
    orderBy: { createdAt: 'desc' },
  });
  const match = all.find((t) => slugify(t.name) === normalizedSlug);
  if (match) {
    if (match.image === null && locale !== 'en') {
      const en = await prisma.testimonials.findFirst({
        where: { name: match.name, locale: 'en' },
        select: { image: true },
      });
      if (en?.image) return { ...match, image: en.image };
    }
    return match;
  }
  return null;
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
  slug?: string | null;
  role?: string | null;
  content: string;
  image?: string | null;
  locale: string;
}): Promise<TestimonialRecord> {
  const slug = data.slug?.trim() || slugify(data.name);
  return (prisma.testimonials as any).create({
    data: {
      id: randomUUID(),
      name: data.name,
      slug,
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
    slug?: string | null;
    role?: string | null;
    content: string;
    image?: string | null;
    locale: string;
  }
): Promise<TestimonialRecord> {
  const slug = data.slug?.trim() ? data.slug.trim().toLowerCase() : slugify(data.name);
  return (prisma.testimonials as any).update({
    where: { id },
    data: {
      name: data.name,
      slug,
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

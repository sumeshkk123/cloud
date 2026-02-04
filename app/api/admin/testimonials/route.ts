import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listTestimonials,
  listTestimonialsWithLocales,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getAllTestimonialTranslations,
} from '@/lib/api/testimonials';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const withTranslations = searchParams.get('withTranslations') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      // If all translations requested, return all locales for this testimonial (linked by name)
      if (allTranslations) {
        const translations = await getAllTestimonialTranslations(id);
        return NextResponse.json({ translations });
      }

      const testimonial = await getTestimonialById(id, locale);
      return NextResponse.json(testimonial);
    }

    if (withTranslations) {
      const testimonials = await listTestimonialsWithLocales('en');
      return NextResponse.json(testimonials, {
        headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
      });
    }
    const testimonials = await listTestimonials('en');
    return NextResponse.json(testimonials, {
      headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, slug, role, content, image, locale = 'en' } = body || {};

    if (!name || !content) {
      return NextResponse.json({ error: 'name and content are required.' }, { status: 400 });
    }

    const testimonial = await createTestimonial({
      name: String(name),
      slug: slug != null ? String(slug).trim() || null : null,
      role: role ? String(role) : null,
      content: String(content),
      image: image ? String(image) : null,
      locale: String(locale),
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const { name, slug, role, content, image, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!name || !content) {
      return NextResponse.json({ error: 'name and content are required.' }, { status: 400 });
    }

    // Get existing testimonial
    const existing = await getTestimonialById(id);
    if (!existing) {
      // If testimonial doesn't exist, check if we're creating a translation
      // Find English version by name to link translations
      const englishVersions = await listTestimonials('en');
      const englishMatch = englishVersions.find((t) => t.name === String(name));

      if (englishMatch && locale !== 'en') {
        // Creating a translation - use English image
        const testimonial = await createTestimonial({
          name: String(name),
          slug: slug != null ? String(slug).trim() || null : null,
          role: role ? String(role) : null,
          content: String(content),
          image: englishMatch.image || String(image || ''),
          locale: String(locale),
        });
        return NextResponse.json(testimonial);
      }
      return NextResponse.json({ error: 'Testimonial not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);

    // If locale is different, check if translation exists for this name+locale
    if (targetLocale !== existing.locale) {
      const englishVersions = await listTestimonials('en');
      const englishMatch = englishVersions.find((t) => t.name === String(name));

      if (englishMatch) {
        // Check if translation already exists for this locale
        const allTestimonials = await listTestimonials(targetLocale);
        const existingTranslation = allTestimonials.find((t) => t.name === String(existing.name) && t.locale === targetLocale);

        if (existingTranslation) {
          // Update existing translation
        const testimonial = await updateTestimonial(existingTranslation.id, {
          name: String(name),
          slug: slug != null ? String(slug).trim() || null : undefined,
          role: role ? String(role) : null,
          content: String(content),
          image: englishMatch.image || String(image || ''),
          locale: targetLocale,
        });

          return NextResponse.json(testimonial);
        }
        // Create new translation
        const testimonial = await createTestimonial({
          name: String(name),
          slug: slug != null ? String(slug).trim() || null : null,
          role: role ? String(role) : null,
          content: String(content),
          image: englishMatch.image || String(image || ''),
          locale: targetLocale,
        });

          return NextResponse.json(testimonial);
      }
    }

    // Update existing entry (same locale)
    // For English, allow image update and sync to all translations
    let imageToUse = String(image || '');
    // IMPORTANT: Always use English name for linking translations
    let nameToUse = String(name);

    if (targetLocale === 'en') {
      // If updating English, sync image to all translations
      const allTranslations = await getAllTestimonialTranslations(id);
      if (allTranslations.length > 0) {
        // Update image for all translations (but keep their translated content)
        await Promise.all(
          allTranslations
            .filter((t) => t.locale !== 'en')
      .map((t) =>
        updateTestimonial(t.id, {
          name: nameToUse,
          slug: slug != null ? String(slug).trim() || undefined : undefined,
          role: t.role || null,
          content: t.content,
          image: imageToUse,
          locale: t.locale,
        })
      )
        );
      }
    } else {
      // For other locales, use English image and English name (for linking)
      const allTranslations = await getAllTestimonialTranslations(id);
      const englishVersion = allTranslations.find((t) => t.locale === 'en');
      if (englishVersion) {
        imageToUse = englishVersion.image || imageToUse;
        nameToUse = englishVersion.name; // Use English name for linking
      }
    }

    const testimonial = await updateTestimonial(id, {
      name: nameToUse,
      slug: slug != null ? String(slug).trim() || undefined : undefined,
      role: role ? String(role) : null,
      content: String(content),
      image: imageToUse,
      locale: targetLocale,
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    // Get all translations for this testimonial (linked by name)
    const translations = await getAllTestimonialTranslations(id);

    // Delete all translations (all testimonials with the same name)
    if (translations.length > 0) {
      await Promise.all(
        translations.map((t) => deleteTestimonial(t.id))
      );
    } else {
      // If no translations found, delete by ID anyway
      await deleteTestimonial(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listContactFaqs,
  getContactFaqById,
  createContactFaq,
  updateContactFaq,
  deleteContactFaq,
  getAllContactFaqTranslations,
} from '@/lib/api/contact-faq';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (id) {
      if (allTranslations) {
        const translations = await getAllContactFaqTranslations(id);
        return NextResponse.json({ translations });
      }

      const faq = await getContactFaqById(id, locale);
      if (!faq) {
        return NextResponse.json({ error: 'Contact FAQ not found.' }, { status: 404 });
      }
      return NextResponse.json(faq);
    }

    const faqs = await listContactFaqs('en');
    return NextResponse.json(faqs);
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
    const { question, answer, locale = 'en' } = body || {};

    if (!question || !answer) {
      return NextResponse.json({ error: 'question and answer are required.' }, { status: 400 });
    }

    const faq = await createContactFaq({
      question: String(question),
      answer: String(answer),
      locale: String(locale),
    });

    return NextResponse.json(faq);
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
    const { question, answer, locale = 'en' } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!question || !answer) {
      return NextResponse.json({ error: 'question and answer are required.' }, { status: 400 });
    }

    const existing = await getContactFaqById(id);
    if (!existing) {
      // If FAQ doesn't exist, check if we're creating a translation
      if (locale !== 'en') {
        const englishFaqs = await listContactFaqs('en');
        const englishMatch = englishFaqs.find((f) => f.question === String(question));

        if (englishMatch) {
          const faq = await createContactFaq({
            question: String(question),
            answer: String(answer),
            locale: String(locale),
          });
          return NextResponse.json(faq);
        }
      }
      return NextResponse.json({ error: 'Contact FAQ not found.' }, { status: 404 });
    }

    const targetLocale = String(locale);

    // If locale is different, check if translation exists
    if (targetLocale !== existing.locale) {
      const allTranslations = await getAllContactFaqTranslations(existing.id);
      const existingTranslation = allTranslations.find((t) => t.locale === targetLocale);

      if (existingTranslation) {
        // Update existing translation - use the same id for all translations
        const faq = await updateContactFaq(existing.id, {
          question: String(question),
          answer: String(answer),
          locale: targetLocale,
        });
        return NextResponse.json(faq);
      } else {
        // Create translation with the same ID as the original
        const faq = await createContactFaq({
          question: String(question),
          answer: String(answer),
          locale: targetLocale,
          id: existing.id, // Use the same ID for translations
        });
        return NextResponse.json(faq);
      }
    }

    // Update existing entry (same locale)
    const faq = await updateContactFaq(id, {
      question: String(question),
      answer: String(answer),
      locale: targetLocale,
    });

    return NextResponse.json(faq);
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

    // Delete all translations for this FAQ (they all share the same id)
    await deleteContactFaq(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

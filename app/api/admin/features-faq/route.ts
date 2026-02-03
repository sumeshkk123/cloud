import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listFeatureFaqs,
  getFeatureFaqById,
  createFeatureFaq,
  updateFeatureFaq,
  deleteFeatureFaq,
  getAllFeatureFaqTranslations,
} from '@/lib/api/features-faq';

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
        const translations = await getAllFeatureFaqTranslations(id);
        return NextResponse.json({ translations });
      }

      const faq = await getFeatureFaqById(id, locale);
      if (!faq) {
        return NextResponse.json({ error: 'Feature FAQ not found.' }, { status: 404 });
      }
      return NextResponse.json(faq);
    }

    const faqs = await listFeatureFaqs('en');
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

    const faq = await createFeatureFaq({
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

    const targetLocale = String(locale);
    
    // Check if FAQ exists in this locale
    const existing = await getFeatureFaqById(id, targetLocale);
    
    if (existing) {
      // Update existing entry
      const faq = await updateFeatureFaq(id, targetLocale, {
        question,
        answer,
      });
      return NextResponse.json(faq);
    } else {
      // Create new translation with same ID
      const faq = await createFeatureFaq({
        id, // Use same ID for translation
        question,
        answer,
        locale: targetLocale,
      });
      return NextResponse.json(faq);
    }
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
    const locale = searchParams.get('locale');

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (locale) {
      // Delete specific locale
      await deleteFeatureFaq(id, locale);
    } else {
      // Delete all translations
      await deleteFeatureFaq(id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createFaq, getFaqById, updateFaq, deleteFaq, getAllFaqTranslations } from '@/lib/api/faq';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const allTranslations = searchParams.get('all') === 'true';
    const locale = searchParams.get('locale') || 'en';

    if (!id) {
      return NextResponse.json({ error: 'id is required.' }, { status: 400 });
    }

    if (allTranslations) {
      const translations = await getAllFaqTranslations(id);
      return NextResponse.json({ translations });
    }

    const faq = await getFaqById(id, locale);
    if (!faq) {
      return NextResponse.json(null);
    }

    return NextResponse.json(faq);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { question, answer, categoryId } = body || {};

    if (!question || !answer) {
      return NextResponse.json({ error: 'question and answer are required.' }, { status: 400 });
    }

    if (!categoryId) {
      return NextResponse.json({ error: 'categoryId is required.' }, { status: 400 });
    }

    const faq = await createFaq({
      question: String(question),
      answer: String(answer),
      locale: 'en',
      categoryId: String(categoryId),
    });

    return NextResponse.json(faq);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    const { question, answer, locale, categoryId } = body || {};

    if (!id) {
      return NextResponse.json({ error: 'id is required.' }, { status: 400 });
    }

    if (!question || !answer || !locale) {
      return NextResponse.json({ error: 'question, answer, and locale are required.' }, { status: 400 });
    }

    // Get the English version to get the categoryId if not provided
    const englishFaq = await getFaqById(id, 'en');
    const categoryIdToUse = categoryId || englishFaq?.categoryId;

    // Check if FAQ with this id and locale exists
    const existing = await getFaqById(id, locale);
    
    if (existing) {
      // Update existing
      const updated = await updateFaq(id, {
        question: String(question),
        answer: String(answer),
        locale: String(locale),
        categoryId: categoryIdToUse || null,
      });
      return NextResponse.json(updated);
    } else {
      // Create new translation with same id
      const created = await createFaq({
        question: String(question),
        answer: String(answer),
        locale: String(locale),
        id: id,
        categoryId: categoryIdToUse || null,
      });
      return NextResponse.json(created);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const locale = searchParams.get('locale');

    if (!id) {
      return NextResponse.json({ error: 'id is required.' }, { status: 400 });
    }

    await deleteFaq(id, locale || undefined);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

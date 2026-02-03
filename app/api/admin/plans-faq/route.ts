import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  listPlanFaqs,
  getPlanFaqById,
  createPlanFaq,
  updatePlanFaq,
  deletePlanFaq,
  getAllPlanFaqTranslations,
} from '@/lib/api/plans-faq';

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
    const withTranslations = searchParams.get('withTranslations') === 'true';

    if (id) {
      if (allTranslations) {
        const translations = await getAllPlanFaqTranslations(id);
        return NextResponse.json({ translations });
      }

      const faq = await getPlanFaqById(id, locale);
      if (!faq) {
        return NextResponse.json({ error: 'Plan FAQ not found.' }, { status: 404 });
      }
      return NextResponse.json(faq);
    }

    // Filter by locale to get unique FAQs (one per FAQ ID)
    let faqs = await listPlanFaqs(locale);

    if (withTranslations) {
      const faqsWithLocales = await Promise.all(
        faqs.map(async (f) => {
          const rows = await getAllPlanFaqTranslations(f.id);
          return { ...f, availableLocales: rows.map((r) => r.locale) };
        })
      );
      return NextResponse.json(faqsWithLocales);
    }

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
    const { question, answer, locale = 'en', id: bodyId } = body || {};

    if (!question || !answer) {
      return NextResponse.json({ error: 'question and answer are required.' }, { status: 400 });
    }

    const faq = await createPlanFaq({
      question: String(question),
      answer: String(answer),
      locale: String(locale),
      id: bodyId ? String(bodyId) : undefined,
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
    const { question, answer, locale: localeBody = 'en' } = body || {};
    const targetLocale = String(localeBody);

    if (!id) {
      return NextResponse.json({ error: 'id is required in query params.' }, { status: 400 });
    }

    if (!question || !answer) {
      return NextResponse.json({ error: 'question and answer are required.' }, { status: 400 });
    }

    const existing = await getPlanFaqById(id, targetLocale);
    if (existing) {
      const faq = await updatePlanFaq(id, targetLocale, {
        question: String(question),
        answer: String(answer),
      });
      return NextResponse.json(faq);
    }

    const faq = await createPlanFaq({
      id,
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

    await deletePlanFaq(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to process request.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

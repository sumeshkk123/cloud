import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, country, message, source, locale, sourceSite, notes } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Get locale from request or default to 'en'
    const acceptLanguage = request.headers.get('accept-language');
    let detectedLocale = locale || 'en';
    if (acceptLanguage && !locale) {
      const preferredLang = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase();
      if (preferredLang && ['en', 'es', 'fr', 'it', 'de', 'pt', 'zh'].includes(preferredLang)) {
        detectedLocale = preferredLang;
      }
    }

    const baseData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : null,
      country: country ? String(country).trim() : null,
      message: String(message).trim(),
      source: source ? String(source) : 'contact',
      locale: detectedLocale,
    };
    let submission: { id: string };
    try {
      submission = await prisma.contact_submissions.create({
        data: {
          ...baseData,
          sourceSite: sourceSite ? String(sourceSite).trim() || null : null,
          notes: notes ? String(notes).trim() || null : null,
        } as Parameters<typeof prisma.contact_submissions.create>[0]['data'],
      });
    } catch (err: any) {
      if (err?.message?.includes('Unknown argument') && (err?.message?.includes('sourceSite') || err?.message?.includes('notes'))) {
        submission = await prisma.contact_submissions.create({
          data: baseData as Parameters<typeof prisma.contact_submissions.create>[0]['data'],
        });
      } else {
        throw err;
      }
    }

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('[POST /api/contact] Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit contact form.' },
      { status: 500 }
    );
  }
}

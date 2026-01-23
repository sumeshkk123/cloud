import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const id = searchParams.get('id'); // If provided, get all translations for this category

    try {
      if (id) {
        // Get all translations for a specific category ID
        const categories = await prisma.faq_categories.findMany({
          where: { id },
          orderBy: { locale: 'asc' },
        });
        return NextResponse.json(categories);
      } else {
        // Get categories for a specific locale
        const categories = await prisma.faq_categories.findMany({
          where: { locale },
          orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(categories);
      }
    } catch (error: any) {
      // Table might not exist yet - return empty array
      if (error.code === 'P2021' || error.code === 'P2001' || error.message?.includes('does not exist') || error.message?.includes('Unknown table')) {
        return NextResponse.json([]);
      }
      // Log the error but still return empty array to prevent UI errors
      console.error('Error fetching FAQ categories:', error);
      return NextResponse.json([]);
    }
  } catch (error) {
    // Always return empty array instead of error to prevent UI issues
    console.error('Error fetching FAQ categories:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, locale = 'en', id, icon } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Generate base slug from name
    const baseSlug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Generate ID if not provided (for new category)
    const categoryId = id || `cat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Check for slug conflicts and make it unique
    let finalSlug = baseSlug;
    let attempt = 0;
    const maxAttempts = 10;
    
    // Keep checking and modifying slug until we find one that doesn't conflict
    while (attempt < maxAttempts) {
      const conflictingCategory = await prisma.faq_categories.findFirst({
        where: {
          slug: finalSlug,
          locale: String(locale),
        },
      });

      // If no conflict, use this slug
      if (!conflictingCategory) {
        break;
      }

      // If conflict exists, append category ID and attempt number to make it unique
      attempt++;
      finalSlug = attempt === 1 
        ? `${baseSlug}-${categoryId.substring(0, 8)}`
        : `${baseSlug}-${categoryId.substring(0, 8)}-${attempt}`;
    }

    try {
      const category = await prisma.faq_categories.create({
        data: {
          id: categoryId,
          name: String(name),
          slug: finalSlug,
          icon: icon ? String(icon) : null,
          locale: String(locale),
        },
      });
      return NextResponse.json(category, { status: 201 });
    } catch (error: any) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'A category with this name and locale already exists' },
          { status: 400 }
        );
      }
      if (error.code === 'P2021' || error.message?.includes('does not exist')) {
        return NextResponse.json(
          { error: 'FAQ categories table does not exist. Please run: npm run db:push' },
          { status: 500 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Error creating FAQ category:', error);
    const message = error instanceof Error ? error.message : 'Failed to create category';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

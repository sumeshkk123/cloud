import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    try {
      const category = await prisma.faq_categories.findUnique({
        where: {
          id_locale: {
            id,
            locale,
          },
        },
      });

      if (!category) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 });
      }

      return NextResponse.json(category);
    } catch (error: any) {
      if (error.code === 'P2021' || error.message?.includes('does not exist')) {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 });
      }
      throw error;
    }
  } catch (error) {
    console.error('Error fetching FAQ category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { name, locale = 'en', icon } = body;

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

    try {
      // Check if category exists for this locale
      const existing = await prisma.faq_categories.findUnique({
        where: {
          id_locale: {
            id,
            locale: String(locale),
          },
        },
      });

      if (existing) {
        // Update existing category - check if slug needs to change
        let finalSlug = baseSlug;
        
        // Only check for conflicts if the slug is different from the current one
        if (existing.slug !== baseSlug) {
          let attempt = 0;
          const maxAttempts = 10;
          
          // Keep checking and modifying slug until we find one that doesn't conflict
          while (attempt < maxAttempts) {
            const conflictingCategory = await prisma.faq_categories.findFirst({
              where: {
                slug: finalSlug,
                locale: String(locale),
                id: { not: id }, // Different category ID
              },
            });

            // If no conflict, use this slug
            if (!conflictingCategory) {
              break;
            }

            // If conflict exists, append category ID and attempt number to make it unique
            attempt++;
            finalSlug = attempt === 1 
              ? `${baseSlug}-${id.substring(0, 8)}`
              : `${baseSlug}-${id.substring(0, 8)}-${attempt}`;
          }
        }

        const category = await prisma.faq_categories.update({
          where: {
            id_locale: {
              id,
              locale: String(locale),
            },
          },
          data: {
            name: String(name),
            slug: finalSlug,
            ...(icon !== undefined ? { icon: icon ? String(icon) : null } : {}),
          },
        });
        return NextResponse.json(category);
      } else {
        // Create new translation - check for slug conflicts and make it unique
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
            ? `${baseSlug}-${id.substring(0, 8)}`
            : `${baseSlug}-${id.substring(0, 8)}-${attempt}`;
        }

        const newCategory = await prisma.faq_categories.create({
          data: {
            id,
            name: String(name),
            slug: finalSlug,
            icon: icon ? String(icon) : null,
            locale: String(locale),
          },
        });
        return NextResponse.json(newCategory);
      }
    } catch (error: any) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'A category with this slug and locale already exists' },
          { status: 400 }
        );
      }
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'A category with this slug and locale already exists' },
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
    console.error('Error updating FAQ category:', error);
    const message = error instanceof Error ? error.message : 'Failed to update category';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale');
    const deleteAll = searchParams.get('deleteAll') === 'true';

    try {
      if (deleteAll) {
        // Delete all translations for this category ID
        await prisma.faq_categories.deleteMany({
          where: { id },
        });
      } else if (locale) {
        // Delete specific locale translation
        await prisma.faq_categories.delete({
          where: {
            id_locale: {
              id,
              locale,
            },
          },
        });
      } else {
        return NextResponse.json(
          { error: 'Either locale parameter or deleteAll=true is required' },
          { status: 400 }
        );
      }

      return NextResponse.json({ success: true });
    } catch (error: any) {
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Category not found' }, { status: 404 });
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
    console.error('Error deleting FAQ category:', error);
    const message = error instanceof Error ? error.message : 'Failed to delete category';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

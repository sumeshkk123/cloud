import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const id = searchParams.get('id'); // If provided, get all translations for this category
    const ids = searchParams.get('ids'); // Comma-separated list of category IDs

    try {
      if (id) {
        // Get all translations for a specific category ID
        const categories = await prisma.faq_categories.findMany({
          where: { id },
          orderBy: { locale: 'asc' },
        });
        return NextResponse.json(categories);
      } else if (ids) {
        // Get categories for multiple IDs - return translation for requested locale, fallback to English
        const categoryIds = ids.split(',').filter(Boolean);
        
        if (categoryIds.length === 0) {
          return NextResponse.json([]);
        }
        
        // Fetch all translations for these category IDs
        const allCategories = await prisma.faq_categories.findMany({
          where: { id: { in: categoryIds } },
          orderBy: { locale: 'asc' },
        });
        
        // For each category ID, find the best translation (prefer requested locale, fallback to English)
        const result: any[] = [];
        const foundIds = new Set<string>();
        
        categoryIds.forEach((catId) => {
          // First try to find translation in requested locale
          let category = allCategories.find(c => c.id === catId && c.locale === locale);
          
          // If not found, fallback to English
          if (!category) {
            category = allCategories.find(c => c.id === catId && c.locale === 'en');
          }
          
          // If still not found, use any available translation
          if (!category) {
            category = allCategories.find(c => c.id === catId);
          }
          
          if (category) {
            // Only add if we haven't added this category yet (avoid duplicates)
            if (!foundIds.has(category.id)) {
              result.push(category);
              foundIds.add(category.id);
            }
          }
        });
        
        return NextResponse.json(result);
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

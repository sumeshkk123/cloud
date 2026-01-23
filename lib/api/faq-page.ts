import { getFaqs } from "@/lib/api/faq";
import { prisma } from "@/lib/db/prisma";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  categoryId?: string | null;
}

export interface FaqCategory {
  id: string;
  name: string;
  icon?: string | null;
  faqs: FaqItem[];
}

export interface FaqGroup {
  id: string;
  label: string;
  description: string;
  icon?: string | null;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export async function fetchFaqsData(locale: string): Promise<FaqCategory[]> {
  try {
    // Fetch FAQs for current locale
    const faqs = await getFaqs(locale);

    // Fetch ALL categories for the current locale (not just those with FAQs)
    // This ensures all categories from the database are displayed
    let categoriesData: any[] = [];
    try {
      const categories = await (prisma as any).faq_categories.findMany({
        where: { locale },
        orderBy: { createdAt: 'asc' },
      });
      categoriesData = categories;
    } catch (error) {
      // If categories table doesn't exist or error, continue with empty array
      console.warn('[FAQ Page] Could not fetch categories:', error);
    }

    // Always fetch English categories to get all category IDs and icons
    // Icons are stored in the English version and shared across locales
    let englishCategories: any[] = [];
    if (locale !== 'en') {
      try {
        const enCats = await (prisma as any).faq_categories.findMany({
          where: { locale: 'en' },
          orderBy: { createdAt: 'asc' },
        });
        englishCategories = enCats;
      } catch (error) {
        // Ignore errors
      }
    } else {
      // If locale is English, use categoriesData as englishCategories
      englishCategories = categoriesData;
    }

    // Combine all category translations for better fallback
    const allCategoryTranslations = [...categoriesData, ...englishCategories];

    // Get unique category IDs from FAQs (including English FAQs if not in English locale)
    const categoryIdsFromFaqs = new Set<string>();
    faqs.forEach((faq: any) => {
      if (faq.categoryId) categoryIdsFromFaqs.add(faq.categoryId);
    });

    // If not in English locale, also check English FAQs to get all category IDs
    // Also create a map to get correct categoryId from English FAQs for translations
    let englishFaqsMap = new Map<string, any>();
    if (locale !== 'en') {
      try {
        const enFaqs = await getFaqs('en');
        enFaqs.forEach((faq: any) => {
          if (faq.categoryId) categoryIdsFromFaqs.add(faq.categoryId);
          englishFaqsMap.set(faq.id, faq);
        });
      } catch (error) {
        // Ignore errors
      }
    }

    // Get all unique category IDs (from categories + from FAQs)
    const allCategoryIds = new Set<string>();
    allCategoryTranslations.forEach(cat => allCategoryIds.add(cat.id));
    categoryIdsFromFaqs.forEach(id => allCategoryIds.add(id));

    // Create categories map
    const categoriesMap = new Map<string, FaqCategory>();
    
    // Create a map to track the original order from English categories (by createdAt)
    const categoryOrderMap = new Map<string, number>();
    englishCategories.forEach((cat, index) => {
      categoryOrderMap.set(cat.id, index);
    });

    // Process all category IDs - show ALL categories even if they have no FAQs
    // Process in the order they appear in English categories to maintain consistent ordering
    const sortedCategoryIds = Array.from(allCategoryIds).sort((a, b) => {
      const orderA = categoryOrderMap.get(a) ?? Infinity;
      const orderB = categoryOrderMap.get(b) ?? Infinity;
      return orderA - orderB;
    });
    
    sortedCategoryIds.forEach((categoryId) => {
      // Find category in requested locale first, then fallback to English, then any other
      let category = allCategoryTranslations.find(cat => cat.id === categoryId && cat.locale === locale);
      if (!category) {
        category = allCategoryTranslations.find(cat => cat.id === categoryId && cat.locale === 'en');
      }
      if (!category) {
        category = allCategoryTranslations.find(cat => cat.id === categoryId);
      }

      if (category) {
        // Get icon from English version (icon is shared across all locales)
        const englishCategory = allCategoryTranslations.find(c => c.id === categoryId && c.locale === 'en') ||
          englishCategories.find(c => c.id === categoryId);
        const categoryIcon = englishCategory?.icon || category.icon || null;

        categoriesMap.set(categoryId, {
          id: categoryId,
          name: category.name || '',
          icon: categoryIcon,
          faqs: [],
        });
      } else {
        // If category not found at all, still create entry with fallback name
        // This ensures categories with FAQs are always shown
        const englishCategory = englishCategories.find(c => c.id === categoryId);
        categoriesMap.set(categoryId, {
          id: categoryId,
          name: englishCategory?.name || `Category ${categoryId}`,
          icon: englishCategory?.icon || null,
          faqs: [],
        });
      }
    });

    // Add FAQs to their categories
    // IMPORTANT: Always use the English FAQ's categoryId as the source of truth
    // This ensures all translations of the same FAQ go to the same category
    faqs.forEach((faq: any) => {
      // Always prioritize English FAQ's categoryId for correct matching
      let categoryId: string | null = null;
      
      if (locale === 'en') {
        // For English, use the FAQ's categoryId directly
        categoryId = faq.categoryId || null;
      } else {
        // For translations, always use the English FAQ's categoryId
        const englishFaq = englishFaqsMap.get(faq.id);
        if (englishFaq && englishFaq.categoryId) {
          categoryId = englishFaq.categoryId;
        } else {
          // Fallback to translated FAQ's categoryId only if English version doesn't exist
          categoryId = faq.categoryId || null;
        }
      }

      if (categoryId && categoriesMap.has(categoryId)) {
        categoriesMap.get(categoryId)!.faqs.push({
          id: faq.id,
          question: faq.question,
          answer: faq.answer,
          categoryId: categoryId,
        });
      } else {
        // If FAQ has no category, add to "Uncategorized"
        if (!categoriesMap.has('uncategorized')) {
          categoriesMap.set('uncategorized', {
            id: 'uncategorized',
            name: 'General',
            icon: null,
            faqs: [],
          });
        }
        categoriesMap.get('uncategorized')!.faqs.push({
          id: faq.id,
          question: faq.question,
          answer: faq.answer,
          categoryId: null,
        });
      }
    });

    // Convert map to array - preserve original order from English categories
    // This ensures consistent ordering across all languages
    const categoriesArray: FaqCategory[] = [];
    sortedCategoryIds.forEach((categoryId) => {
      const category = categoriesMap.get(categoryId);
      if (category) {
        categoriesArray.push(category);
      }
    });

    return categoriesArray;
  } catch (error) {
    console.error('[FAQ Page] Error fetching FAQs:', error);
    return [];
  }
}

export function convertCategoriesToGroups(categories: FaqCategory[]): FaqGroup[] {
  return categories.map((category) => {
    return {
      id: category.id,
      label: category.name,
      description: `Explore questions about ${category.name.toLowerCase()}.`,
      icon: category.icon,
      items: category.faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer,
      })),
    };
  });
}

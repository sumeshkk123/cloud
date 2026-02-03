import { listIndustrySolutions, createIndustrySolution } from '../lib/api/industry-solutions';
import { i18n } from '../i18n-config';
import { prisma } from '../lib/db/prisma';

async function translateText(text: string, sourceLocale: string, targetLocale: string, retries = 3): Promise<string> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch('http://localhost:3000/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          sourceLocale,
          targetLocale,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || 'Translation failed';
        
        // If rate limited, wait longer before retrying
        if (errorMessage.includes('Rate limit') || response.status === 429) {
          if (attempt < retries) {
            const waitTime = Math.min(60000 * attempt, 300000); // Wait 1-5 minutes
            console.log(`  ⏳ Rate limited. Waiting ${waitTime / 1000}s before retry ${attempt + 1}/${retries}...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            continue;
          }
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data.translatedText || text;
    } catch (error: any) {
      if (attempt === retries) {
        console.error(`  ❌ Error translating text to ${targetLocale} after ${retries} attempts:`, error.message);
        return text; // Return original text on final failure
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
    }
  }
  return text;
}

async function translateIndustrySolutions() {
  console.log('🌍 Starting Industry Solutions translations...\n');

  try {
    // Get all English industry solutions
    const englishSolutions = await listIndustrySolutions('en');
    
    if (englishSolutions.length === 0) {
      console.log('⚠️  No English industry solutions found.');
      return;
    }

    console.log(`Found ${englishSolutions.length} English industry solutions to translate.\n`);

    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const solution of englishSolutions) {
      console.log(`\n🏭 Processing: "${solution.title}"`);

      // Check existing translations by icon and showOnHomePage (they're linked by these fields)
      const existingTranslations = await prisma.industry_solutions.findMany({
        where: {
          icon: solution.icon,
          showOnHomePage: solution.showOnHomePage,
        },
        select: { locale: true },
      });
      const existingLocales = new Set(existingTranslations.map(t => t.locale));

      // Create translations for each locale
      for (const locale of i18n.locales) {
        if (locale === 'en') continue; // Skip English

        // Check if translation already exists
        if (existingLocales.has(locale)) {
          console.log(`  ⏭️  ${locale.toUpperCase()}: Already exists`);
          skipped++;
          continue;
        }

        try {
          console.log(`  🌐 Translating to ${locale.toUpperCase()}...`);
          
          // Translate title and description
          const translatedTitle = await translateText(solution.title, 'en', locale);
          await new Promise(resolve => setTimeout(resolve, 500)); // Delay to avoid rate limits
          
          const translatedDescription = await translateText(solution.description, 'en', locale);
          await new Promise(resolve => setTimeout(resolve, 500));

          // Create translation with same icon and showOnHomePage
          await createIndustrySolution({
            title: translatedTitle,
            description: translatedDescription,
            icon: solution.icon, // Keep same icon
            showOnHomePage: solution.showOnHomePage, // Keep same showOnHomePage
            locale: locale,
          });

          console.log(`  ✅ ${locale.toUpperCase()}: Created successfully`);
          created++;
        } catch (error: any) {
          console.error(`  ❌ ${locale.toUpperCase()}: Error - ${error.message}`);
          errors++;
        }
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Translation Summary:');
    console.log(`  ✅ Created: ${created}`);
    console.log(`  ⏭️  Skipped: ${skipped}`);
    console.log(`  ❌ Errors: ${errors}`);
    console.log('='.repeat(60) + '\n');
  } catch (error: any) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the translation
translateIndustrySolutions()
  .then(() => {
    console.log('✨ Translation process completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Translation process failed:', error);
    process.exit(1);
  });

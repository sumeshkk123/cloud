import { listTestimonials, createTestimonial } from '../lib/api/testimonials';
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

async function translateTestimonials() {
  console.log('🌍 Starting Testimonials translations...\n');

  try {
    // Get all English testimonials
    const englishTestimonials = await listTestimonials('en');
    
    if (englishTestimonials.length === 0) {
      console.log('⚠️  No English testimonials found.');
      return;
    }

    console.log(`Found ${englishTestimonials.length} English testimonials to translate.\n`);

    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const testimonial of englishTestimonials) {
      console.log(`\n👤 Processing: "${testimonial.name}"${testimonial.role ? ` - ${testimonial.role}` : ''}`);

      // Check existing translations by name (testimonials are linked by name)
      const existingTranslations = await prisma.testimonials.findMany({
        where: { name: testimonial.name },
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
          
          // Translate name, role (if exists), and content
          const translatedName = await translateText(testimonial.name, 'en', locale);
          await new Promise(resolve => setTimeout(resolve, 500)); // Delay to avoid rate limits
          
          const translatedRole = testimonial.role ? await translateText(testimonial.role, 'en', locale) : null;
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const translatedContent = await translateText(testimonial.content, 'en', locale);
          await new Promise(resolve => setTimeout(resolve, 500));

          // Create the translation (use same image from English version)
          await createTestimonial({
            name: translatedName,
            role: translatedRole,
            content: translatedContent,
            image: testimonial.image, // Use same image
            locale: locale,
          });

          console.log(`  ✅ ${locale.toUpperCase()}: Created successfully`);
          created++;

          // Longer delay to avoid rate limiting (especially after many translations)
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error: any) {
          console.error(`  ❌ Error creating ${locale} translation:`, error.message);
          errors++;
        }
      }
    }

    console.log(`\n✨ Translation completed!`);
    console.log(`   Created: ${created}`);
    console.log(`   Skipped: ${skipped}`);
    console.log(`   Errors: ${errors}`);
  } catch (error: any) {
    console.error('❌ Translation failed:', error.message);
    process.exit(1);
  }
}

// Run the translation
translateTestimonials()
  .then(() => {
    console.log('\n🎉 All translations done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

/**
 * Script to seed demo FAQs from cloudmlmsoftware.com/free-mlm-software-demo/
 * and translate them to all supported locales
 * 
 * Usage: tsx scripts/seed-demo-faqs.ts
 * Make sure the dev server is running (npm run dev) for translations to work
 */

import { prisma } from '../lib/db/prisma';
import { createDemoFaq } from '../lib/api/demo-faq';
import { i18n } from '../i18n-config';

const locales = i18n.locales;

interface DemoFaqData {
  question: string;
  answer: string;
}

// FAQs extracted from https://cloudmlmsoftware.com/free-mlm-software-demo/
const demoFaqs: DemoFaqData[] = [
  {
    question: 'What are the key features of the Binary MLM Software Demo?',
    answer: 'The binary MLM software has specific features such as dual-leg structure management, automatic spillover, commission tracking, genealogy tree visualization, and payout calculation. It also provides the users with real-time analytics and customizable compensation rules for binary plan structures, making it ideal for businesses that focus on rapid team growth and rewards.',
  },
  {
    question: 'How does the Matrix MLM Software Demo differ from the Unilevel MLM Software Demo?',
    answer: 'The Matrix demo ensures a limited number of downline members per level (e.g., 3x5, 5x7) and encourages depth-focused growth. But in the case of the Unilevel MLM Software demo, it permits unlimited frontline recruits, resulting in width expansion. Matrix demos emphasize team structures with spillover benefits, while unilevel demos focus on simplified commission distribution and easier member onboarding.',
  },
  {
    question: 'Can I customize the MLM Software Demo to fit my specific business needs?',
    answer: 'Yes, You can customize the MLM Software Demo according to your business model, compensation plan, branding, and operational workflows. You get a customized experience by modifying the modulus, adding reports, integrating with third-party tools, and setting country-specific tax or compliance rules.',
  },
  {
    question: 'What are the benefits of using the Stair Step MLM Software Demo?',
    answer: 'The stair-step MLM software demo is enriched with rank-based progression, leadership bonus tracking, and performance-based communication distribution. It supports businesses in driving distributor motivation by offering rank-based achievements and override commissions, encouraging leadership growth and sustained involvement in multi-tier sales structures.',
  },
  {
    question: 'How does the Party Plan MLM Software Demo handle guest management?',
    answer: 'The party plan MLM software demo includes built-in guest tracking, event scheduling, host management, and order placement tools. It facilitates in-home or virtual party events by allowing hosts to invite guests, track RSVPs, manage product demos, and record sales efficiently, all within a single dashboard.',
  },
];

/**
 * Check if demo FAQ already exists (by question in English)
 */
async function demoFaqExists(question: string, locale: string): Promise<boolean> {
  try {
    if (locale === 'en') {
      const existing = await prisma.demo_faqs.findFirst({
        where: {
          question,
          locale,
        },
      });
      return !!existing;
    } else {
      // For other locales, check if English exists first, then check translation
      const englishFaq = await prisma.demo_faqs.findFirst({
        where: {
          question,
          locale: 'en',
        },
      });
      if (!englishFaq) return false;

      const existing = await prisma.demo_faqs.findFirst({
        where: {
          id: englishFaq.id,
          locale,
        },
      });
      return !!existing;
    }
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return false;
    }
    throw error;
  }
}

/**
 * Translate text using the translation API
 */
async function translateText(text: string, targetLocale: string, sourceLocale: string = 'en', retries = 3): Promise<string> {
  if (targetLocale === sourceLocale) {
    return text;
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

      const response = await fetch(`${baseUrl}/api/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLocale,
          sourceLocale,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Translation failed' }));
        const errorMessage = errorData.error || 'Translation failed';

        // If rate limited, wait before retrying
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
        console.warn(`  ⚠️  Translation failed for ${targetLocale} after ${retries} attempts:`, error.message);
        // Return original text if translation fails
        return text;
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
    }
  }
  return text;
}

/**
 * Add demo FAQ with translations
 */
async function addDemoFaqWithTranslations(faq: DemoFaqData) {
  console.log(`\n📝 Processing FAQ: "${faq.question.substring(0, 60)}..."`);

  // Check if English version exists
  let englishFaq = await prisma.demo_faqs.findFirst({
    where: {
      question: faq.question,
      locale: 'en',
    },
  });

  let createdNew = false;
  if (englishFaq) {
    console.log(`  ✓ English version exists (ID: ${englishFaq.id}), checking translations...`);
  } else {
    // Create English version first
    console.log(`  📝 Creating English version...`);
    englishFaq = await createDemoFaq({
      question: faq.question,
      answer: faq.answer,
      locale: 'en',
    });
    console.log(`  ✅ English version created (ID: ${englishFaq.id})`);
    createdNew = true;
  }

  // Translate and create for other locales
  let translationCount = 0;
  for (const locale of locales) {
    if (locale === 'en') continue; // Already created

    // Check if translation exists by ID and locale
    const exists = await prisma.demo_faqs.findFirst({
      where: {
        id: englishFaq.id,
        locale,
      },
    });

    if (exists) {
      console.log(`  ⏭️  ${locale.toUpperCase()}: Already exists`);
      continue;
    }

    console.log(`  🌐 Translating to ${locale.toUpperCase()}...`);

    try {
      // Translate question and answer
      const translatedQuestion = await translateText(faq.question, locale, 'en');
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay to avoid rate limits

      const translatedAnswer = await translateText(faq.answer, locale, 'en');
      await new Promise(resolve => setTimeout(resolve, 500));

      // Use the same ID as English version for linking translations
      await createDemoFaq({
        id: englishFaq.id, // Use same ID for translation
        question: translatedQuestion,
        answer: translatedAnswer,
        locale,
      });
      console.log(`  ✅ ${locale.toUpperCase()}: Created successfully`);
      translationCount++;

      // Longer delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error: any) {
      console.error(`  ❌ Failed to create ${locale.toUpperCase()} version:`, error.message);
    }
  }

  return createdNew || translationCount > 0;
}

/**
 * Main function
 */
async function main() {
  console.log('🌍 Starting Demo FAQs Import Process...\n');
  console.log(`📊 Total FAQs to process: ${demoFaqs.length}`);
  console.log(`🌐 Locales: ${locales.join(', ')}\n`);
  console.log('⚠️  Make sure the dev server is running (npm run dev) for translations to work!\n');

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const faq of demoFaqs) {
    try {
      const success = await addDemoFaqWithTranslations(faq);
      if (success) {
        successCount++;
      } else {
        skipCount++;
      }
    } catch (error: any) {
      errorCount++;
      console.error(`\n❌ Error processing FAQ:`, error.message);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('✨ Import Summary:');
  console.log(`   ✅ Successfully added: ${successCount}`);
  console.log(`   ⏭️  Skipped (already exists): ${skipCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log('='.repeat(60));
}

// Run the script
main()
  .then(() => {
    console.log('\n🎉 Script completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Script failed:', error);
    process.exit(1);
  });

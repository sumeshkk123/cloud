/**
 * Script to add missing testimonials from cloudmlmsoftware.com/testimonials/
 * and translate them to all supported locales
 * 
 * Usage: tsx scripts/add-testimonials.ts
 * Make sure the dev server is running (npm run dev) for translations to work
 */

import { prisma } from '../lib/db/prisma';
import { createTestimonial, listTestimonials } from '../lib/api/testimonials';
import { i18n } from '../i18n-config';

const locales = i18n.locales;

interface TestimonialData {
  name: string;
  role: string;
  content: string;
  company?: string;
  country?: string;
}

// Testimonials extracted from https://cloudmlmsoftware.com/testimonials/
const testimonials: TestimonialData[] = [
  {
    name: 'Janluc R.',
    role: 'CEO',
    content: 'Ease of Use for members and admin. Good MLM features and ergonomics functions for navigation. And after 6 months of hard daily development I can insure that the tech team is one of the best in its field.',
    company: 'Bornan Solutions',
    country: 'United States',
  },
  {
    name: 'Giovanni P.',
    role: 'CTO',
    content: 'Very important is the support of CloudMLM, always available in every occasion, the software allows you to plan an excellent job. Highly recommended ,Its simplicity of use, excellent graphics and services.',
    company: 'Garva technologies',
    country: 'United States',
  },
  {
    name: 'Joseph Y.',
    role: 'CEO',
    content: 'Best business decision we have ever made. Amazing team of professionals. This software is user friendly and most importantly gets the job done. We are very pleased and happy with the results.',
    company: 'Venture micros',
    country: 'Spain',
  },
  {
    name: 'Victor Tin',
    role: 'CEO',
    content: 'When we start with them, I had some doubts if we are going to have a good customer experience with them. Things turn out good, the development was easy and the support team was good, we worked with them to get our MLM system up. The software dashboard is amazing and easy to use.',
    company: 'SRL Clariba',
    country: 'Italy',
  },
  {
    name: 'Benito',
    role: 'CTO',
    content: 'Secure system administration, Secure file transfer and data sharing, also added security to the valuable data, It\'s highly efficient and reliable. Recommended MLM software for any business like ours. Also, they had helped me to set up firewall security for our system.',
    company: 'Developsolo',
    country: 'United states',
  },
  {
    name: 'David',
    role: 'CEO',
    content: 'I like that the project is done in Laravel rather than codeigniter. It Offers Better IO and Unmatched quality session control. The RESTful controllers can empower the in-house developers to manufacture an assortment of the REST APIs without any need of spending extra time.',
    company: 'Emergye integl',
    country: 'France',
  },
  {
    name: 'Frederick L.',
    role: 'CEO',
    content: 'I have no doubt on this quality customization works. We create the ideas and get the things done with coding.',
    company: 'Paradigm rebels',
    country: 'United States',
  },
  {
    name: 'Luah B.',
    role: 'CEO',
    content: 'Best communication and also Skill very good and fast respond. So far all good, nothing comments , all best',
    company: 'Pismart paradata',
    country: 'France',
  },
  {
    name: 'Ahmed I.',
    role: 'CEO',
    content: 'That its easy to customize your plan and make changes according to your market and offers. Your development team is amazing.',
    company: 'cognoca dista solutions',
    country: 'United States',
  },
  {
    name: 'Laura Fernandez',
    role: 'CEO',
    content: 'Neat communication, super friendly too. The software works flawlessly. We now have a highly efficient, custom made solution for our business.',
    company: 'ACONITI Ltd',
    country: 'Madrid, Spain',
  },
  {
    name: 'Javier Florez',
    role: 'Administrative team',
    content: 'When we found the Cloud MLM Software, we met with the team to develop our project and they made things very easy and clear, they listened attentively and answered our questions in a very effective and concise way. Note that the team is not formed by beginners. The Cloud MLM team has the knowledge and ideas to get ahead with what we needed.',
    company: 'Insys Commuinications',
    country: 'United States Of America',
  },
  {
    name: 'Joe',
    role: 'CEO , CBT',
    content: 'If needed , they are always available to take care of any technical issues right away ,giving us peace of mind so we can focus on more important things to keep our business growing.',
    company: 'Bedataone',
    country: 'New York',
  },
];

/**
 * Translate text using the translation API
 * Uses the translation API endpoint (requires dev server to be running)
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
 * Check if testimonial already exists
 */
async function testimonialExists(name: string, locale: string): Promise<boolean> {
  const existing = await prisma.testimonials.findFirst({
    where: {
      name,
      locale,
    },
  });
  return !!existing;
}

/**
 * Add testimonial with translations
 */
async function addTestimonialWithTranslations(testimonial: TestimonialData) {
  console.log(`\n👤 Processing: "${testimonial.name}"${testimonial.company ? ` - ${testimonial.company}` : ''}`);

  // Check if English version exists
  const englishExists = await testimonialExists(testimonial.name, 'en');

  if (englishExists) {
    console.log(`  ⏭️  English version already exists, skipping...`);
    return false;
  }

  // Create English version first
  const roleWithCompany = testimonial.company
    ? `${testimonial.role} — ${testimonial.company}`
    : testimonial.role;

  const roleWithLocation = testimonial.country
    ? `${roleWithCompany} - ${testimonial.country}`
    : roleWithCompany;

  console.log(`  📝 Creating English version...`);
  await createTestimonial({
    name: testimonial.name, // Keep name as-is (don't translate names)
    role: roleWithLocation,
    content: testimonial.content,
    image: null, // Images can be added later via admin panel
    locale: 'en',
  });
  console.log(`  ✅ English version created`);

  // Translate and create for other locales
  for (const locale of locales) {
    if (locale === 'en') continue; // Already created

    const exists = await testimonialExists(testimonial.name, locale);
    if (exists) {
      console.log(`  ⏭️  ${locale.toUpperCase()}: Already exists`);
      continue;
    }

    console.log(`  🌐 Translating to ${locale.toUpperCase()}...`);

    try {
      // Translate role and content (keep name as-is)
      const translatedRole = await translateText(roleWithLocation, locale, 'en');
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay to avoid rate limits

      const translatedContent = await translateText(testimonial.content, locale, 'en');
      await new Promise(resolve => setTimeout(resolve, 500));

      await createTestimonial({
        name: testimonial.name, // Keep original name
        role: translatedRole,
        content: translatedContent,
        image: null,
        locale,
      });

      console.log(`  ✅ ${locale.toUpperCase()}: Created successfully`);

      // Longer delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error: any) {
      console.error(`  ❌ Failed to create ${locale.toUpperCase()} version:`, error.message);
      throw error;
    }
  }

  return true;
}

/**
 * Main function
 */
async function main() {
  console.log('🌍 Starting Testimonials Import Process...\n');
  console.log(`📊 Total testimonials to process: ${testimonials.length}`);
  console.log(`🌐 Locales: ${locales.join(', ')}\n`);
  console.log('⚠️  Make sure the dev server is running (npm run dev) for translations to work!\n');

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const testimonial of testimonials) {
    try {
      const englishExists = await testimonialExists(testimonial.name, 'en');
      if (englishExists) {
        skipCount++;
        continue;
      }

      const success = await addTestimonialWithTranslations(testimonial);
      if (success) {
        successCount++;
      } else {
        skipCount++;
      }
    } catch (error: any) {
      errorCount++;
      console.error(`\n❌ Error processing ${testimonial.name}:`, error.message);
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
    console.log('\nScript completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\nScript failed:', error);
    process.exit(1);
  });

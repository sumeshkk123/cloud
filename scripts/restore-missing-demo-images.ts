/**
 * Script to restore missing images for demo items
 * Allows specifying image paths for demos that are missing images
 */

import { prisma } from '../lib/db/prisma';

// Map of demo titles to their image paths
// Update these paths with the correct image URLs/paths
// NOTE: These are placeholder suggestions - please update with the actual correct images
const imageRestorations: Record<string, string> = {
  // Emgoldex uses refresh icon - using a generic plan image
  'Emgoldex MLM Plan Software Demo': '/uploads/upload-1769685489477-tiv0kkjv7er.webp', // UPDATE: Replace with correct Emgoldex image

  // Forced Matrix is similar to Matrix - using Matrix image as placeholder
  'MLM Forced Matrix Plan': '/uploads/upload-1769685356693-76bwwi7doca.webp', // UPDATE: Replace with correct Forced Matrix image

  // MMM Global uses question icon - using a generic plan image
  'MMM Global MLM Plan Software Demo': '/uploads/upload-1769685489477-tiv0kkjv7er.webp', // UPDATE: Replace with correct MMM Global image
};

async function restoreMissingImages() {
  try {
    console.log('='.repeat(50));
    console.log('Restoring Missing Demo Images');
    console.log('='.repeat(50));
    console.log('');

    // Get all English demos
    const englishDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        id: true,
        title: true,
        image: true,
        icon: true,
      },
      orderBy: { title: 'asc' },
    });

    // Find demos missing images
    const missingImages = englishDemos.filter(d => !d.image || d.image.trim() === '');

    console.log(`Found ${missingImages.length} demos missing images:\n`);
    missingImages.forEach((demo, idx) => {
      console.log(`${idx + 1}. ${demo.title}`);
      console.log(`   Icon: ${demo.icon || 'none'}`);
      console.log(`   Current image: ${demo.image || 'MISSING'}`);
      if (imageRestorations[demo.title]) {
        console.log(`   Will restore to: ${imageRestorations[demo.title]}`);
      } else {
        console.log(`   ⚠ No restoration path specified`);
      }
      console.log('');
    });

    if (missingImages.length === 0) {
      console.log('✓ No demos are missing images!');
      return;
    }

    // Check if all missing demos have restoration paths
    const demosWithoutRestoration = missingImages.filter(
      d => !imageRestorations[d.title]
    );

    if (demosWithoutRestoration.length > 0) {
      console.log('⚠ Warning: Some demos do not have restoration paths specified:');
      demosWithoutRestoration.forEach(d => console.log(`   - ${d.title}`));
      console.log('\nPlease update the imageRestorations object in this script with the correct image paths.');
      console.log('Then run this script again.\n');
      return;
    }

    // Confirm before proceeding
    console.log('Ready to restore images. This will update all locales for each demo.');
    console.log('Press Ctrl+C to cancel, or wait 3 seconds to proceed...\n');
    await new Promise(resolve => setTimeout(resolve, 3000));

    let restoredCount = 0;
    let errorCount = 0;

    for (const demo of missingImages) {
      const imagePath = imageRestorations[demo.title];
      if (!imagePath) {
        console.log(`⚠ Skipping ${demo.title} - no restoration path specified`);
        continue;
      }

      try {
        // Find all translations of this demo (by icon)
        const allTranslations = await prisma.demo_items.findMany({
          where: {
            icon: demo.icon,
          },
        });

        // Update image for all locales
        for (const translation of allTranslations) {
          await prisma.demo_items.update({
            where: {
              id_locale: {
                id: translation.id,
                locale: translation.locale,
              },
            },
            data: {
              image: imagePath,
            },
          });
        }

        console.log(`✓ Restored image for "${demo.title}" (${allTranslations.length} locales)`);
        restoredCount++;
      } catch (error) {
        console.error(`✗ Error restoring image for "${demo.title}":`, error);
        errorCount++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('Restoration Summary:');
    console.log('='.repeat(50));
    console.log(`✓ Restored: ${restoredCount}`);
    console.log(`✗ Errors: ${errorCount}`);
    console.log('='.repeat(50));

    // Verify
    console.log('\nVerifying...\n');
    const verifyDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        title: true,
        image: true,
      },
    });

    const stillMissing = verifyDemos.filter(d => !d.image || d.image.trim() === '');
    if (stillMissing.length > 0) {
      console.log(`⚠ Still missing images: ${stillMissing.length}`);
      stillMissing.forEach(d => console.log(`   - ${d.title}`));
    } else {
      console.log('✓ All demos now have images!');
    }

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

restoreMissingImages()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });

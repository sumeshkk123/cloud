import { listFeatures, updateFeature } from '../lib/api/features';

async function updateAllFeaturesShowOnHomePage() {
  console.log('🔄 Starting to update all features showOnHomePage to false...\n');

  try {
    // Get all features (all locales)
    const allFeatures = await listFeatures();
    
    if (allFeatures.length === 0) {
      console.log('⚠️  No features found.');
      return;
    }

    let updated = 0;
    let skipped = 0;
    let errors = 0;

    for (const feature of allFeatures) {
      // Only update if showOnHomePage is currently true
      if (feature.showOnHomePage === true) {
        try {
          await updateFeature(feature.id, feature.locale, {
            showOnHomePage: false,
          });
          console.log(`✅ Updated: "${feature.title}" (${feature.locale}) - set showOnHomePage to false`);
          updated++;
        } catch (error: any) {
          console.error(`❌ Error updating "${feature.title}" (${feature.locale}):`, error.message);
          errors++;
        }
      } else {
        console.log(`⏭️  Skipped: "${feature.title}" (${feature.locale}) - already false`);
        skipped++;
      }
    }

    console.log(`\n✨ Update completed! Updated: ${updated}, Skipped: ${skipped}, Errors: ${errors}`);
  } catch (error: any) {
    console.error('❌ Update failed:', error.message);
    process.exit(1);
  }
}

updateAllFeaturesShowOnHomePage()
  .then(() => {
    console.log('\n🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

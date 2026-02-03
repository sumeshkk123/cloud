// Script to update existing contact addresses with null flags
// This will generate flag codes from country names for all existing records
// Note: Make sure DATABASE_URL is set in your environment or .env file
// This script will use process.env.DATABASE_URL if available

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Helper function to get flag code from country name
function getFlagCodeFromCountry(countryName) {
  if (!countryName) return 'in'; // Default
  const normalized = countryName.toLowerCase();
  
  // Map country names to flag codes
  if (normalized.includes('india') || normalized.includes('indian')) return 'in';
  if (normalized.includes('uae') || normalized.includes('emirates') || normalized.includes('dubai') || normalized.includes('united arab emirates')) return 'ae';
  if (normalized.includes('usa') || normalized.includes('united states') || normalized.includes('america') || normalized.includes('north america')) return 'na';
  if (normalized.includes('united kingdom') || normalized.includes('uk') || normalized.includes('britain') || normalized.includes('british')) return 'gb';
  if (normalized.includes('europe') || normalized.includes('eu') || normalized.includes('germany') || normalized.includes('france')) return 'eu';
  if (normalized.includes('asia') || normalized.includes('singapore') || normalized.includes('malaysia') || normalized.includes('thailand') || normalized.includes('asia-pacific') || normalized.includes('apac')) return 'apac';
  
  return 'in'; // Default
}

async function updateFlags() {
  try {
    console.log('🔄 Updating contact addresses with null flags...\n');

    // Get all contact addresses with null or empty flags
    const addresses = await prisma.contact_addresses.findMany({
      where: {
        OR: [
          { flag: null },
          { flag: '' }
        ]
      }
    });

    console.log(`Found ${addresses.length} addresses with null/empty flags\n`);

    if (addresses.length === 0) {
      console.log('✅ All addresses already have flags!');
      return;
    }

    let updated = 0;
    for (const address of addresses) {
      const flagCode = getFlagCodeFromCountry(address.country);
      
      await prisma.contact_addresses.update({
        where: { id: address.id },
        data: {
          flag: flagCode,
          updatedAt: new Date()
        }
      });
      
      console.log(`  ✅ Updated: ${address.country} (${address.locale}) → ${flagCode}`);
      updated++;
    }

    console.log(`\n✅ Successfully updated ${updated} contact addresses with flag codes!`);

  } catch (error) {
    console.error('❌ Error updating flags:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

updateFlags()
  .then(() => {
    console.log('\n🎉 Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Failed to update flags:', error);
    process.exit(1);
  });

// Script to restore default/static data for contact_addresses and connectors
// Note: Make sure DATABASE_URL is set in your environment or .env file
// This script will use process.env.DATABASE_URL if available

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Simple ID generator (similar to cuid)
function generateId() {
  return 'cl' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Default contact addresses from default-content.js
const defaultContactAddresses = [
  {
    country: "India",
    place: "India HQ",
    address: "Unit 1A, 4th floor, KSITIL, Special Economic Zone, Cyberpark Campus, Sahya building, Nillikkode P.O",
    phones: ["+91 9567 728 766", "+91 85901 37114"],
    email: "support@cloudmlmsoftware.com",
    whatsapp: "+91 85901 37114",
    flag: "in",
    locale: "en"
  },
  {
    country: "United Arab Emirates",
    place: "Middle East",
    address: "Office 904, Al Thuraya Tower, Dubai Internet City, Dubai",
    phones: ["+971 4 580 4533"],
    email: "mea@cloudmlmsoftware.com",
    whatsapp: "+971 4 580 4533",
    flag: "ae",
    locale: "en"
  },
  {
    country: "United States",
    place: "North America",
    address: "795 Folsom St, San Francisco, CA, 120 Adelaide St W, Toronto, ON",
    phones: ["+1 415 968 9704", "+1 437 747 2224"],
    email: "na@cloudmlmsoftware.com",
    whatsapp: "+1 415 968 9704",
    flag: "na",
    locale: "en"
  },
  {
    country: "United Kingdom",
    place: "Europe",
    address: "90 High Holborn, London, Taunusanlage 8, Frankfurt",
    phones: ["+44 20 3289 7320"],
    email: "europe@cloudmlmsoftware.com",
    whatsapp: "+44 20 3289 7320",
    flag: "gb",
    locale: "en"
  },
  {
    country: "Singapore",
    place: "Asia-Pacific",
    address: "8 Marina View, Asia Square, 45 Clarence St, Sydney",
    phones: ["+65 3165 0891", "+61 2 7909 3220"],
    email: "apac@cloudmlmsoftware.com",
    whatsapp: "+65 3165 0891",
    flag: "apac",
    locale: "en"
  }
];

// Default connectors (grouped by slider)
// Based on the partners list from default-content.js
const defaultConnectors = [
  // Slider 1: Payment Gateways
  {
    sliderTitle: "Payment Gateways",
    items: [
      { title: "Stripe payouts", locale: "en" },
      { title: "PayPal", locale: "en" },
      { title: "Razorpay", locale: "en" },
      { title: "Square", locale: "en" }
    ]
  },
  // Slider 2: CRM & Business Tools
  {
    sliderTitle: "CRM & Business Tools",
    items: [
      { title: "Salesforce", locale: "en" },
      { title: "HubSpot", locale: "en" },
      { title: "QuickBooks", locale: "en" },
      { title: "Zoho Desk", locale: "en" }
    ]
  },
  // Slider 3: E-commerce & Marketing
  {
    sliderTitle: "E-commerce & Marketing",
    items: [
      { title: "Shopify", locale: "en" },
      { title: "WooCommerce", locale: "en" },
      { title: "Meta Pixel", locale: "en" },
      { title: "AWS SES", locale: "en" },
      { title: "Twilio", locale: "en" },
      { title: "Zapier", locale: "en" }
    ]
  }
];

async function restoreData() {
  try {
    console.log('🔄 Starting data restoration...\n');

    // 1. Restore Contact Addresses
    console.log('📞 Restoring contact addresses...');
    for (const address of defaultContactAddresses) {
      const existing = await prisma.contact_addresses.findFirst({
        where: {
          country: address.country,
          locale: address.locale
        }
      });

      if (!existing) {
        await prisma.contact_addresses.create({
          data: {
            id: generateId(),
            country: address.country,
            place: address.place,
            address: address.address,
            phones: address.phones,
            email: address.email,
            whatsapp: address.whatsapp,
            flag: address.flag,
            locale: address.locale,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        console.log(`  ✅ Created: ${address.place} (${address.country})`);
      } else {
        console.log(`  ⏭️  Skipped: ${address.place} (${address.country}) - already exists`);
      }
    }

    // 2. Restore Connectors
    console.log('\n🔗 Restoring connectors...');
    for (const slider of defaultConnectors) {
      // Check if slider already exists
      const existingSlider = await prisma.connectors.findFirst({
        where: {
          sliderTitle: slider.sliderTitle,
          locale: "en"
        }
      });

      if (!existingSlider) {
        // Create all items for this slider
        for (const item of slider.items) {
          await prisma.connectors.create({
            data: {
              id: generateId(),
              sliderTitle: slider.sliderTitle,
              title: item.title,
              locale: item.locale,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          });
        }
        console.log(`  ✅ Created slider: ${slider.sliderTitle} (${slider.items.length} items)`);
      } else {
        console.log(`  ⏭️  Skipped slider: ${slider.sliderTitle} - already exists`);
      }
    }

    console.log('\n✅ Data restoration completed successfully!');
    console.log('\nSummary:');
    const contactCount = await prisma.contact_addresses.count();
    const connectorCount = await prisma.connectors.count();
    console.log(`  📞 Contact Addresses: ${contactCount}`);
    console.log(`  🔗 Connectors: ${connectorCount}`);

  } catch (error) {
    console.error('❌ Error restoring data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

restoreData()
  .then(() => {
    console.log('\n🎉 Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Failed to restore data:', error);
    process.exit(1);
  });

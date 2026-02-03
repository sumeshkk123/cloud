// Script to check if data exists in contact_addresses, integrations, and connectors tables
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkTables() {
  try {
    console.log('Checking contact_addresses...');
    const contactAddresses = await prisma.contact_addresses.findMany();
    console.log(`Found ${contactAddresses.length} contact addresses`);
    if (contactAddresses.length > 0) {
      console.log('Sample:', contactAddresses[0]);
    }

    console.log('\nChecking integrations...');
    const integrations = await prisma.integrations.findMany();
    console.log(`Found ${integrations.length} integrations`);
    if (integrations.length > 0) {
      console.log('Sample:', integrations[0]);
    }

    console.log('\nChecking connectors...');
    const connectors = await prisma.connectors.findMany();
    console.log(`Found ${connectors.length} connectors`);
    if (connectors.length > 0) {
      console.log('Sample:', connectors[0]);
    }

    if (contactAddresses.length === 0 && integrations.length === 0 && connectors.length === 0) {
      console.log('\n⚠️  WARNING: All three tables are empty!');
      console.log('The backup files also do not contain data for these tables.');
      console.log('You will need to manually re-enter the data.');
    }
  } catch (error) {
    console.error('Error checking tables:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkTables();

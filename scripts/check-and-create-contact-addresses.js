const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkAndCreateTable() {
  try {
    console.log('Checking if contact_addresses table exists...');
    
    // Try to query the table
    try {
      const count = await prisma.$queryRaw`SELECT COUNT(*) as count FROM "contact_addresses"`;
      console.log('✅ Table exists! Current row count:', count[0]?.count || 0);
      
      // Check if whatsapp and place columns exist
      const columns = await prisma.$queryRaw`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'contact_addresses' 
        AND column_name IN ('whatsapp', 'place')
      `;
      
      const hasWhatsapp = columns.some(col => col.column_name === 'whatsapp');
      const hasPlace = columns.some(col => col.column_name === 'place');
      
      if (!hasWhatsapp || !hasPlace) {
        console.log('\n⚠️  Table exists but missing whatsapp or place columns. Adding them...');
        
        if (!hasWhatsapp) {
          await prisma.$executeRaw`ALTER TABLE "contact_addresses" ADD COLUMN IF NOT EXISTS "whatsapp" TEXT;`;
          console.log('✅ Added whatsapp column');
        }
        
        if (!hasPlace) {
          await prisma.$executeRaw`ALTER TABLE "contact_addresses" ADD COLUMN IF NOT EXISTS "place" TEXT;`;
          console.log('✅ Added place column');
        }
        
        console.log('✅ Table updated successfully!');
      } else {
        console.log('✅ Table has all required columns (whatsapp, place)');
      }
      
      await prisma.$disconnect();
      return;
    } catch (error) {
      if (error.message?.includes('does not exist') || error.code === 'P2021') {
        console.log('❌ Table does not exist. Creating it now...');
      } else {
        throw error;
      }
    }

    // Create the table with all fields including whatsapp and place
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "contact_addresses" (
        "id" TEXT NOT NULL,
        "country" TEXT NOT NULL,
        "place" TEXT,
        "address" TEXT NOT NULL,
        "phones" JSONB NOT NULL,
        "whatsapp" TEXT,
        "email" TEXT NOT NULL,
        "locale" TEXT NOT NULL DEFAULT 'en',
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "contact_addresses_pkey" PRIMARY KEY ("id")
      );
    `;

    // Create index
    await prisma.$executeRaw`
      CREATE INDEX IF NOT EXISTS "contact_addresses_locale_idx" ON "contact_addresses"("locale");
    `;

    console.log('✅ contact_addresses table created successfully with whatsapp and place fields!');
    
    // Verify
    const count = await prisma.$queryRaw`SELECT COUNT(*) as count FROM "contact_addresses"`;
    console.log('✅ Verification: Table is accessible. Current row count:', count[0]?.count || 0);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\n📝 To create the table manually, run this SQL:');
    console.log(`
CREATE TABLE IF NOT EXISTS "contact_addresses" (
  "id" TEXT NOT NULL,
  "country" TEXT NOT NULL,
  "place" TEXT,
  "address" TEXT NOT NULL,
  "phones" JSONB NOT NULL,
  "whatsapp" TEXT,
  "email" TEXT NOT NULL,
  "locale" TEXT NOT NULL DEFAULT 'en',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "contact_addresses_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "contact_addresses_locale_idx" ON "contact_addresses"("locale");
    `);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkAndCreateTable()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Failed:', error);
    process.exit(1);
  });

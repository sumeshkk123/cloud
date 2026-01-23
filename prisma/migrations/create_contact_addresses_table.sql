-- Create contact_addresses table
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
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_addresses_pkey" PRIMARY KEY ("id")
);

-- Create index on locale
CREATE INDEX IF NOT EXISTS "contact_addresses_locale_idx" ON "contact_addresses"("locale");

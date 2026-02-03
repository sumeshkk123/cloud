-- Add groupId for grouping translations (replaces slug for grouping)
ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "groupId" TEXT;

-- Backfill: each existing row is its own group
UPDATE "mlm_plans" SET "groupId" = "id" WHERE "groupId" IS NULL;

-- Drop unique constraint on (slug, locale) - Prisma default name
ALTER TABLE "mlm_plans" DROP CONSTRAINT IF EXISTS "mlm_plans_slug_locale_key";

-- Drop removed columns
ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "slug";
ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "image";
ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "content";
ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "published";
ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "metaTitle";
ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "metaDescription";
ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "metaKeywords";

-- Index for groupId
CREATE INDEX IF NOT EXISTS "mlm_plans_groupId_idx" ON "mlm_plans"("groupId");

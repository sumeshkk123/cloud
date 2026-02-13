-- Add groupId and remove fields from mlm_plans (only if table exists, for shadow DB compatibility)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'mlm_plans') THEN
    ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "groupId" TEXT;
    UPDATE "mlm_plans" SET "groupId" = "id" WHERE "groupId" IS NULL;
    ALTER TABLE "mlm_plans" DROP CONSTRAINT IF EXISTS "mlm_plans_slug_locale_key";
    ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "slug";
    ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "image";
    ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "content";
    ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "published";
    ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "metaTitle";
    ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "metaDescription";
    ALTER TABLE "mlm_plans" DROP COLUMN IF EXISTS "metaKeywords";
    CREATE INDEX IF NOT EXISTS "mlm_plans_groupId_idx" ON "mlm_plans"("groupId");
  END IF;
END $$;

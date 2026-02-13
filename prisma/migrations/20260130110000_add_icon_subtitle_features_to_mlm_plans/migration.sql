-- Add icon, subtitle, features to mlm_plans (only if table exists, for shadow DB compatibility)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'mlm_plans') THEN
    ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "icon" TEXT;
    ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "subtitle" TEXT;
    ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "features" JSONB;
  END IF;
END $$;

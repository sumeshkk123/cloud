-- Add icon, subtitle, features to mlm_plans
ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "icon" TEXT;
ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "subtitle" TEXT;
ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "features" JSONB;

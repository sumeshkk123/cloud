-- Add nullable slug for MLM plans
ALTER TABLE "mlm_plans" ADD COLUMN IF NOT EXISTS "slug" TEXT;

-- Index for lookups
CREATE INDEX IF NOT EXISTS "mlm_plans_slug_idx" ON "mlm_plans"("slug");

-- Enforce per-locale uniqueness while allowing same slug across locales
CREATE UNIQUE INDEX IF NOT EXISTS "mlm_plans_slug_locale_key" ON "mlm_plans"("slug", "locale");

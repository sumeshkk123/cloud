-- Add slug to testimonials (only if table exists, for shadow DB compatibility)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'testimonials') THEN
    ALTER TABLE "testimonials" ADD COLUMN IF NOT EXISTS "slug" TEXT;
    CREATE UNIQUE INDEX IF NOT EXISTS "testimonials_slug_locale_key" ON "testimonials"("slug", "locale");
  END IF;
END $$;

-- Add source_site to contact_submissions (only if table exists, for shadow DB compatibility)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'contact_submissions') THEN
    ALTER TABLE "contact_submissions" ADD COLUMN IF NOT EXISTS "source_site" TEXT;
  END IF;
END $$;

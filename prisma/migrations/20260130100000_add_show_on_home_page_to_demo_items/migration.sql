-- Add showOnHomePage to demo_items (only if table exists, for shadow DB compatibility)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'demo_items') THEN
    ALTER TABLE "demo_items" ADD COLUMN IF NOT EXISTS "showOnHomePage" BOOLEAN NOT NULL DEFAULT false;
    CREATE INDEX IF NOT EXISTS "demo_items_showOnHomePage_idx" ON "demo_items"("showOnHomePage");
  END IF;
END $$;

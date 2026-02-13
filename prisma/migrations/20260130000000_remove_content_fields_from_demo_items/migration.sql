-- AlterTable (only if demo_items exists, for shadow DB compatibility)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'demo_items') THEN
    ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "adminDemoTitleContent";
    ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "distributorsDemoTitleContent";
    ALTER TABLE "demo_items" ADD COLUMN IF NOT EXISTS "title" TEXT;
  END IF;
END $$;

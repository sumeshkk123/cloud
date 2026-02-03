-- AlterTable
ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "adminDemoTitleContent";
ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "distributorsDemoTitleContent";

-- AddTable: Add title field
ALTER TABLE "demo_items" ADD COLUMN IF NOT EXISTS "title" TEXT;

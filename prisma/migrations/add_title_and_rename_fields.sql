-- Step 1: Add title column as nullable first
ALTER TABLE "demo_items" ADD COLUMN IF NOT EXISTS "title" TEXT;

-- Step 2: Migrate data from Content fields to Title fields if Title fields are empty
UPDATE "demo_items" 
SET "adminDemoTitle" = COALESCE("adminDemoTitle", "adminDemoTitleContent", '')
WHERE "adminDemoTitle" IS NULL OR "adminDemoTitleContent" IS NOT NULL;

UPDATE "demo_items" 
SET "distributorsDemoTitle" = COALESCE("distributorsDemoTitle", "distributorsDemoTitleContent", '')
WHERE "distributorsDemoTitle" IS NULL OR "distributorsDemoTitleContent" IS NOT NULL;

-- Step 3: Set default values for all required fields (including new title column)
UPDATE "demo_items" SET "icon" = '' WHERE "icon" IS NULL;
UPDATE "demo_items" SET "image" = '' WHERE "image" IS NULL;
UPDATE "demo_items" SET "title" = COALESCE("title", '') WHERE "title" IS NULL;
UPDATE "demo_items" SET "adminDemoTitle" = COALESCE("adminDemoTitle", '') WHERE "adminDemoTitle" IS NULL;
UPDATE "demo_items" SET "distributorsDemoTitle" = COALESCE("distributorsDemoTitle", '') WHERE "distributorsDemoTitle" IS NULL;

-- Step 4: Drop the old Content columns (after migration)
ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "adminDemoTitleContent";
ALTER TABLE "demo_items" DROP COLUMN IF EXISTS "distributorsDemoTitleContent";

-- Step 5: Now make columns NOT NULL (all rows should have values now)
ALTER TABLE "demo_items" ALTER COLUMN "icon" SET NOT NULL;
ALTER TABLE "demo_items" ALTER COLUMN "image" SET NOT NULL;
ALTER TABLE "demo_items" ALTER COLUMN "title" SET NOT NULL;
ALTER TABLE "demo_items" ALTER COLUMN "adminDemoTitle" SET NOT NULL;
ALTER TABLE "demo_items" ALTER COLUMN "distributorsDemoTitle" SET NOT NULL;

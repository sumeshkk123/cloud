-- First, let's see what adminDemoTitle values exist in the database
SELECT DISTINCT "adminDemoTitle", "title", locale 
FROM "demo_items" 
WHERE locale = 'en'
ORDER BY "adminDemoTitle";

-- Now update titles based on adminDemoTitle patterns
-- This will match regardless of exact wording variations

-- Investment MLM Plan
UPDATE "demo_items" 
SET "title" = 'Investment MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Investment%MLM%Plan%' OR "adminDemoTitle" LIKE '%Investment MLM%';

-- Help Plan
UPDATE "demo_items" 
SET "title" = 'Help Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%Help Plan%' OR "adminDemoTitle" LIKE '%Help%MLM%';

-- Australian MLM Binary
UPDATE "demo_items" 
SET "title" = 'Australian MLM Binary Software Demo'
WHERE "adminDemoTitle" LIKE '%Australian%Binary%' OR "adminDemoTitle" LIKE '%Australian MLM%';

-- MLM Stair Step Plan
UPDATE "demo_items" 
SET "title" = 'MLM Stair Step Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Stair Step%' OR "adminDemoTitle" LIKE '%Stair%Step%';

-- Spillover Binary Plan
UPDATE "demo_items" 
SET "title" = 'Spillover Binary Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Spillover%Binary%' OR "adminDemoTitle" LIKE '%Spillover%';

-- MLM Party Plan
UPDATE "demo_items" 
SET "title" = 'MLM Party Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Party Plan%' OR "adminDemoTitle" LIKE '%Party%MLM%';

-- Repurchase MLM Plan
UPDATE "demo_items" 
SET "title" = 'Repurchase MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Repurchase%' OR "adminDemoTitle" LIKE '%Repurchase MLM%';

-- Emgoldex MLM Plan
UPDATE "demo_items" 
SET "title" = 'Emgoldex MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Emgoldex%';

-- Matrix MLM
UPDATE "demo_items" 
SET "title" = 'Matrix MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%Matrix%MLM%' OR "adminDemoTitle" LIKE '%Matrix Plan%';

-- Binary MLM
UPDATE "demo_items" 
SET "title" = 'Binary MLM Software Demo'
WHERE ("adminDemoTitle" LIKE '%Binary%MLM%' OR "adminDemoTitle" LIKE '%Binary Plan%')
  AND "adminDemoTitle" NOT LIKE '%Spillover%'
  AND "adminDemoTitle" NOT LIKE '%Australian%';

-- Crowd Funding MLM
UPDATE "demo_items" 
SET "title" = 'Crowd Funding MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%Crowd%Funding%' OR "adminDemoTitle" LIKE '%Crowd Funding%';

-- Hybrid Plan
UPDATE "demo_items" 
SET "title" = 'Hybrid Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%Hybrid%Plan%' OR "adminDemoTitle" LIKE '%Hybrid Plan%';

-- MMM Global MLM Plan
UPDATE "demo_items" 
SET "title" = 'MMM Global MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%MMM Global%' OR "adminDemoTitle" LIKE '%MMM%Global%';

-- Click Plan
UPDATE "demo_items" 
SET "title" = 'Click Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%Click Plan%' OR "adminDemoTitle" LIKE '%Click%Plan%';

-- Auto-fill Plan
UPDATE "demo_items" 
SET "title" = 'Auto-fill Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%Auto-fill%' OR "adminDemoTitle" LIKE '%Auto fill%' OR "adminDemoTitle" LIKE '%Autofill%';

-- X-UP Plan
UPDATE "demo_items" 
SET "title" = 'X-UP Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%X-UP%' OR "adminDemoTitle" LIKE '%X UP%' OR "adminDemoTitle" LIKE '%XUP%';

-- Monoline MLM Plan
UPDATE "demo_items" 
SET "title" = 'Monoline MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Monoline%' OR "adminDemoTitle" LIKE '%Monoline Plan%';

-- MLM Forced Matrix Plan
UPDATE "demo_items" 
SET "title" = 'MLM Forced Matrix Plan'
WHERE "adminDemoTitle" LIKE '%Forced Matrix%' OR "adminDemoTitle" LIKE '%Forced%Matrix%';

-- MLM Board Plan
UPDATE "demo_items" 
SET "title" = 'MLM Board Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Board Plan%' OR "adminDemoTitle" LIKE '%Board%MLM%';

-- MLM Gift Plan
UPDATE "demo_items" 
SET "title" = 'MLM Gift Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Gift Plan%' OR "adminDemoTitle" LIKE '%Gift%MLM%';

-- MLM Generation Plan
UPDATE "demo_items" 
SET "title" = 'MLM Generation Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Generation Plan%' OR "adminDemoTitle" LIKE '%Generation%MLM%';

-- Unilevel MLM
UPDATE "demo_items" 
SET "title" = 'Unilevel MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%Unilevel%' OR "adminDemoTitle" LIKE '%Unilevel Plan%';

-- Show results after update
SELECT id, "adminDemoTitle", "title", locale 
FROM "demo_items" 
WHERE locale = 'en'
ORDER BY "createdAt" DESC;

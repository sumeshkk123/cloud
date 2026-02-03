-- Map long adminDemoTitle descriptions to correct short titles
-- Based on keywords in the descriptions

-- Investment MLM Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'Investment MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%investment%' OR "adminDemoTitle" LIKE '%Investment%';

-- Help Plan MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Help Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%help-based%' OR "adminDemoTitle" LIKE '%help request%' OR "adminDemoTitle" LIKE '%Help Plan%';

-- Australian MLM Binary Software Demo
UPDATE "demo_items" 
SET "title" = 'Australian MLM Binary Software Demo'
WHERE "adminDemoTitle" LIKE '%Australian%' OR "adminDemoTitle" LIKE '%australian binary%';

-- MLM Stair Step Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'MLM Stair Step Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%stair step%' OR "adminDemoTitle" LIKE '%Stair Step%' OR "adminDemoTitle" LIKE '%stair-step%';

-- Spillover Binary Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'Spillover Binary Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%spillover%' OR "adminDemoTitle" LIKE '%Spillover%';

-- MLM Party Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'MLM Party Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%party plan%' OR "adminDemoTitle" LIKE '%Party Plan%' OR "adminDemoTitle" LIKE '%party-based%';

-- Repurchase MLM Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'Repurchase MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%repurchase%' OR "adminDemoTitle" LIKE '%Repurchase%' OR "adminDemoTitle" LIKE '%re-purchase%';

-- Emgoldex MLM Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'Emgoldex MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%Emgoldex%' OR "adminDemoTitle" LIKE '%emgoldex%';

-- Matrix MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Matrix MLM Software Demo'
WHERE ("adminDemoTitle" LIKE '%matrix%' OR "adminDemoTitle" LIKE '%Matrix%')
  AND "adminDemoTitle" NOT LIKE '%Forced Matrix%'
  AND "adminDemoTitle" NOT LIKE '%forced matrix%';

-- Binary MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Binary MLM Software Demo'
WHERE ("adminDemoTitle" LIKE '%binary%' OR "adminDemoTitle" LIKE '%Binary%')
  AND "adminDemoTitle" NOT LIKE '%Spillover%'
  AND "adminDemoTitle" NOT LIKE '%spillover%'
  AND "adminDemoTitle" NOT LIKE '%Australian%'
  AND "adminDemoTitle" NOT LIKE '%australian%';

-- Crowd Funding MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Crowd Funding MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%crowd funding%' OR "adminDemoTitle" LIKE '%Crowd Funding%' OR "adminDemoTitle" LIKE '%crowdfunding%';

-- Hybrid Plan MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Hybrid Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%hybrid%' OR "adminDemoTitle" LIKE '%Hybrid%';

-- MMM Global MLM Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'MMM Global MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%MMM Global%' OR "adminDemoTitle" LIKE '%mmm global%' OR "adminDemoTitle" LIKE '%MMM%Global%';

-- Click Plan MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Click Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%click-based%' OR "adminDemoTitle" LIKE '%Click Plan%' OR "adminDemoTitle" LIKE '%click%MLM%';

-- Auto-fill Plan MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Auto-fill Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%auto-fill%' OR "adminDemoTitle" LIKE '%Auto-fill%' OR "adminDemoTitle" LIKE '%autofill%' OR "adminDemoTitle" LIKE '%auto fill%';

-- X-UP Plan MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'X-UP Plan MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%X-UP%' OR "adminDemoTitle" LIKE '%X UP%' OR "adminDemoTitle" LIKE '%x-up%' OR "adminDemoTitle" LIKE '%xup%';

-- Monoline MLM Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'Monoline MLM Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%monoline%' OR "adminDemoTitle" LIKE '%Monoline%' OR "adminDemoTitle" LIKE '%mono-line%';

-- MLM Forced Matrix Plan
UPDATE "demo_items" 
SET "title" = 'MLM Forced Matrix Plan'
WHERE "adminDemoTitle" LIKE '%Forced Matrix%' OR "adminDemoTitle" LIKE '%forced matrix%' OR "adminDemoTitle" LIKE '%forced-matrix%';

-- MLM Board Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'MLM Board Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%board-based%' OR "adminDemoTitle" LIKE '%Board Plan%' OR "adminDemoTitle" LIKE '%board position%';

-- MLM Gift Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'MLM Gift Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%gift plan%' OR "adminDemoTitle" LIKE '%Gift Plan%' OR "adminDemoTitle" LIKE '%gift-based%';

-- MLM Generation Plan Software Demo
UPDATE "demo_items" 
SET "title" = 'MLM Generation Plan Software Demo'
WHERE "adminDemoTitle" LIKE '%generation plan%' OR "adminDemoTitle" LIKE '%Generation Plan%' OR "adminDemoTitle" LIKE '%generation-based%';

-- Unilevel MLM Software Demo
UPDATE "demo_items" 
SET "title" = 'Unilevel MLM Software Demo'
WHERE "adminDemoTitle" LIKE '%unilevel%' OR "adminDemoTitle" LIKE '%Unilevel%' OR "adminDemoTitle" LIKE '%uni-level%';

-- Show results after update
SELECT 
    "adminDemoTitle",
    "title",
    CASE 
        WHEN "title" IN (
            'Investment MLM Plan Software Demo',
            'Help Plan MLM Software Demo',
            'Australian MLM Binary Software Demo',
            'MLM Stair Step Plan Software Demo',
            'Spillover Binary Plan Software Demo',
            'MLM Party Plan Software Demo',
            'Repurchase MLM Plan Software Demo',
            'Emgoldex MLM Plan Software Demo',
            'Matrix MLM Software Demo',
            'Binary MLM Software Demo',
            'Crowd Funding MLM Software Demo',
            'Hybrid Plan MLM Software Demo',
            'MMM Global MLM Plan Software Demo',
            'Click Plan MLM Software Demo',
            'Auto-fill Plan MLM Software Demo',
            'X-UP Plan MLM Software Demo',
            'Monoline MLM Plan Software Demo',
            'MLM Forced Matrix Plan',
            'MLM Board Plan Software Demo',
            'MLM Gift Plan Software Demo',
            'MLM Generation Plan Software Demo',
            'Unilevel MLM Software Demo'
        ) THEN '✓ Correct'
        ELSE '✗ Needs Review'
    END as status
FROM "demo_items" 
WHERE locale = 'en'
ORDER BY "title";

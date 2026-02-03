-- Update title field based on adminDemoTitle matching the screenshots
-- These are the exact titles from the 4 screenshots shared

UPDATE "demo_items" 
SET "title" = 'Investment MLM Plan Software Demo'
WHERE "adminDemoTitle" = 'Investment MLM Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'Help Plan MLM Software Demo'
WHERE "adminDemoTitle" = 'Help Plan MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'Australian MLM Binary Software Demo'
WHERE "adminDemoTitle" = 'Australian MLM Binary Software Demo';

UPDATE "demo_items" 
SET "title" = 'MLM Stair Step Plan Software Demo'
WHERE "adminDemoTitle" = 'MLM Stair Step Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'Spillover Binary Plan Software Demo'
WHERE "adminDemoTitle" = 'Spillover Binary Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'MLM Party Plan Software Demo'
WHERE "adminDemoTitle" = 'MLM Party Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'Repurchase MLM Plan Software Demo'
WHERE "adminDemoTitle" = 'Repurchase MLM Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'Emgoldex MLM Plan Software Demo'
WHERE "adminDemoTitle" = 'Emgoldex MLM Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'Matrix MLM Software Demo'
WHERE "adminDemoTitle" = 'Matrix MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'Binary MLM Software Demo'
WHERE "adminDemoTitle" = 'Binary MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'Crowd Funding MLM Software Demo'
WHERE "adminDemoTitle" = 'Crowd Funding MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'Hybrid Plan MLM Software Demo'
WHERE "adminDemoTitle" = 'Hybrid Plan MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'MMM Global MLM Plan Software Demo'
WHERE "adminDemoTitle" = 'MMM Global MLM Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'Click Plan MLM Software Demo'
WHERE "adminDemoTitle" = 'Click Plan MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'Auto-fill Plan MLM Software Demo'
WHERE "adminDemoTitle" = 'Auto-fill Plan MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'X-UP Plan MLM Software Demo'
WHERE "adminDemoTitle" = 'X-UP Plan MLM Software Demo';

UPDATE "demo_items" 
SET "title" = 'Monoline MLM Plan Software Demo'
WHERE "adminDemoTitle" = 'Monoline MLM Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'MLM Forced Matrix Plan'
WHERE "adminDemoTitle" = 'MLM Forced Matrix Plan';

UPDATE "demo_items" 
SET "title" = 'MLM Board Plan Software Demo'
WHERE "adminDemoTitle" = 'MLM Board Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'MLM Gift Plan Software Demo'
WHERE "adminDemoTitle" = 'MLM Gift Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'MLM Generation Plan Software Demo'
WHERE "adminDemoTitle" = 'MLM Generation Plan Software Demo';

UPDATE "demo_items" 
SET "title" = 'Unilevel MLM Software Demo'
WHERE "adminDemoTitle" = 'Unilevel MLM Software Demo';

-- Verify the update
SELECT id, "adminDemoTitle", "title", locale 
FROM "demo_items" 
WHERE locale = 'en'
ORDER BY "createdAt" DESC;

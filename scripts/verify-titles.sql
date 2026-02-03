-- Verify titles were updated correctly
SELECT 
    id,
    LEFT("adminDemoTitle", 80) as adminDemoTitle_preview,
    "title",
    locale,
    CASE 
        WHEN "title" IS NULL OR "title" = '' THEN '✗ Missing'
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
        ELSE '⚠ Check'
    END as status
FROM "demo_items" 
WHERE locale = 'en'
ORDER BY "title", "createdAt" DESC;

-- Count summary
SELECT 
    COUNT(*) as total_items,
    COUNT(CASE WHEN "title" IS NOT NULL AND "title" != '' THEN 1 END) as items_with_title,
    COUNT(CASE WHEN "title" IN (
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
    ) THEN 1 END) as correctly_mapped
FROM "demo_items" 
WHERE locale = 'en';

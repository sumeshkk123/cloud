-- Check what adminDemoTitle values currently exist in the database
SELECT DISTINCT "adminDemoTitle", "title", COUNT(*) as count
FROM "demo_items" 
WHERE locale = 'en'
GROUP BY "adminDemoTitle", "title"
ORDER BY "adminDemoTitle";

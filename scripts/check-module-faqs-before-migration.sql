-- Check existing module_faqs data before migration
-- Run this to see what data you have

-- Count total records
SELECT 'Total records in module_faqs:' as info, COUNT(*) as count FROM module_faqs;

-- Show all records
SELECT id, locale, LEFT(question, 50) as question_preview, "createdAt"
FROM module_faqs
ORDER BY id, locale;

-- Check if there are any records that might be translations (same question, different locale)
-- This helps identify if translations exist with different IDs
SELECT 
    question,
    COUNT(DISTINCT id) as unique_ids,
    COUNT(*) as total_records,
    array_agg(DISTINCT locale) as locales
FROM module_faqs
GROUP BY question
HAVING COUNT(DISTINCT id) > 1 OR COUNT(*) > 1;

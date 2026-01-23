-- Check existing module_faqs data
SELECT COUNT(*) as total_records FROM module_faqs;

-- Check for any duplicate (id, locale) combinations
SELECT id, locale, COUNT(*) as count 
FROM module_faqs 
GROUP BY id, locale 
HAVING COUNT(*) > 1;

-- Show all records grouped by ID to see translation relationships
SELECT id, locale, question, answer, "createdAt"
FROM module_faqs
ORDER BY id, locale;

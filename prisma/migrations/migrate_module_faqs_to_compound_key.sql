-- Migration: Update module_faqs to use compound primary key [id, locale]
-- This allows translations to share the same ID, similar to the faqs table

-- Step 1: Check for any existing duplicate (id, locale) combinations
-- If this query returns any rows, you have duplicates that need to be resolved first
-- SELECT id, locale, COUNT(*) as count 
-- FROM module_faqs 
-- GROUP BY id, locale 
-- HAVING COUNT(*) > 1;

-- Step 2: Drop the existing primary key constraint
ALTER TABLE module_faqs DROP CONSTRAINT IF EXISTS module_faqs_pkey;

-- Step 3: Add the new compound primary key
ALTER TABLE module_faqs ADD PRIMARY KEY (id, locale);

-- Note: If you have existing data where translations have different IDs,
-- you may need to consolidate them first. Each FAQ and its translations
-- should share the same ID value.

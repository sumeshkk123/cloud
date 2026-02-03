-- Update title field to match adminDemoTitle for all demo items
UPDATE "demo_items" 
SET "title" = "adminDemoTitle"
WHERE "title" IS NULL OR "title" = '';

-- Verify the update
SELECT id, "adminDemoTitle", "title", locale 
FROM "demo_items" 
WHERE locale = 'en'
ORDER BY "createdAt" DESC;

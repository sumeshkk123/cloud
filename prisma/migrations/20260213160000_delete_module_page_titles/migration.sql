-- Remove page_titles rows for module pages (admin now manages meta_details only for modules).
-- Module subpages use getModulesSubpageMeta fallbacks when page_titles are missing.
DELETE FROM "page_titles"
WHERE "page" = 'mlm-software-modules'
   OR "page" LIKE 'mlm-software-modules-%';

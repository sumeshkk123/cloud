-- Drop modules.hasDetailPage because module detail-page behavior is slug-driven.
DROP INDEX IF EXISTS "modules_hasDetailPage_idx";

ALTER TABLE "modules"
DROP COLUMN IF EXISTS "hasDetailPage";

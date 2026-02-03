-- Add sourceSite column to contact_submissions for tracking source site (Cloud MLM / Business MLM)
ALTER TABLE "contact_submissions" ADD COLUMN IF NOT EXISTS "source_site" TEXT;

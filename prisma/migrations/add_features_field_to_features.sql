-- Add features field to features table
ALTER TABLE "features" ADD COLUMN IF NOT EXISTS "features" JSON;

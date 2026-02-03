-- Add title column to demo_items table
ALTER TABLE "demo_items" ADD COLUMN IF NOT EXISTS "title" TEXT;

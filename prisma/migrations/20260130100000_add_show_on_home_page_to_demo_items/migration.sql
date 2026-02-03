-- Add showOnHomePage to demo_items
ALTER TABLE "demo_items" ADD COLUMN IF NOT EXISTS "showOnHomePage" BOOLEAN NOT NULL DEFAULT false;
CREATE INDEX IF NOT EXISTS "demo_items_showOnHomePage_idx" ON "demo_items"("showOnHomePage");

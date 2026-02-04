-- Add slug column to testimonials for dynamic testimonial inner pages (e.g. /testimonial/giovanni-p)
ALTER TABLE "testimonials" ADD COLUMN IF NOT EXISTS "slug" TEXT;

-- Unique constraint for slug+locale (multiple NULL slugs allowed per locale)
CREATE UNIQUE INDEX IF NOT EXISTS "testimonials_slug_locale_key" ON "testimonials"("slug", "locale");

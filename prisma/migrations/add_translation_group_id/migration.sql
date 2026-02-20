-- Add translation_group_id to blog_posts table
ALTER TABLE "blog_posts" ADD COLUMN IF NOT EXISTS "translation_group_id" TEXT;
CREATE INDEX IF NOT EXISTS "blog_posts_translation_group_idx" ON "blog_posts"("translation_group_id");

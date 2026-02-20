-- Allow same module slug in different locales (e.g. fr/e-mails and pt/e-mails).
-- Replace global unique constraint on modules.slug with locale-scoped uniqueness.

DROP INDEX IF EXISTS "modules_slug_key";
CREATE UNIQUE INDEX IF NOT EXISTS "modules_slug_locale_key" ON "modules"("slug", "locale");

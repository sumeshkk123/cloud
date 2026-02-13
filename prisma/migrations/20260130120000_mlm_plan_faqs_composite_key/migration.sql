-- AlterTable: mlm_plan_faqs composite key (only if table exists, for shadow DB compatibility)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'mlm_plan_faqs') THEN
    ALTER TABLE "mlm_plan_faqs" DROP CONSTRAINT IF EXISTS "mlm_plan_faqs_pkey";
    ALTER TABLE "mlm_plan_faqs" ADD PRIMARY KEY ("id", "locale");
  END IF;
END $$;

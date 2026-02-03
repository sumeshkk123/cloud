-- AlterTable: Change mlm_plan_faqs primary key from (id) to (id, locale) to support translations like other page FAQs.
ALTER TABLE "mlm_plan_faqs" DROP CONSTRAINT IF EXISTS "mlm_plan_faqs_pkey";
ALTER TABLE "mlm_plan_faqs" ADD PRIMARY KEY ("id", "locale");

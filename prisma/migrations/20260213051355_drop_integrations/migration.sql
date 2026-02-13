-- CreateTable
CREATE TABLE "faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT,

    CONSTRAINT "faqs_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "faq_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "icon" TEXT,

    CONSTRAINT "faq_categories_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "global_settings" (
    "id" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "siteName" TEXT NOT NULL,
    "siteTagline" TEXT,
    "metadataTitle" TEXT,
    "metadataDescription" TEXT,
    "metadataKeywords" TEXT,
    "languageLabel" TEXT,
    "languageAriaLabel" TEXT,
    "primaryNav" JSONB,
    "headerCta" JSONB,
    "languageLinks" JSONB,
    "footerColumns" JSONB,
    "footerCta" JSONB,
    "footerContacts" JSONB,
    "footerBottomLinks" JSONB,
    "contactEmail" TEXT,
    "contactPhone" TEXT,
    "socialLinks" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_content" (
    "id" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "homepage_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_posts" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT,
    "author" TEXT,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "published" BOOLEAN NOT NULL DEFAULT false,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "contact_submissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "country" TEXT,
    "message" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'contact',
    "source_site" TEXT,
    "notes" TEXT,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demo_faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "demo_faqs_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "mlm_plan_faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mlm_plan_faqs_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "module_faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "module_faqs_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "services_faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_faqs_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "contact_faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_faqs_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "features_faqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "features_faqs_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "demo_items" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminDemoFeatures" JSONB,
    "adminDemoTitle" TEXT,
    "distributorsDemoFeatures" JSONB,
    "distributorsDemoTitle" TEXT,
    "icon" TEXT,
    "title" TEXT,
    "showOnHomePage" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "demo_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "features" (
    "id" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "category" TEXT NOT NULL,
    "hasDetailPage" BOOLEAN NOT NULL DEFAULT false,
    "showOnHomePage" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "features" JSONB,

    CONSTRAINT "features_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "meta_details" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meta_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mlm_plans" (
    "id" TEXT NOT NULL,
    "groupId" TEXT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "showOnHomePage" BOOLEAN NOT NULL DEFAULT false,
    "features" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mlm_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modules" (
    "id" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "hasDetailPage" BOOLEAN NOT NULL DEFAULT false,
    "showOnHomePage" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "industry_solutions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "showOnHomePage" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "industry_solutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_titles" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "title" TEXT NOT NULL,
    "pagePill" TEXT,
    "sectionSubtitle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "page_titles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "showOnHomePage" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "keyBenefits" JSONB,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonials" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "role" TEXT,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "count" TEXT,
    "screenshot" TEXT,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "permissions" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_addresses" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phones" JSONB NOT NULL,
    "email" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "place" TEXT,
    "whatsapp" TEXT,
    "flag" TEXT,

    CONSTRAINT "contact_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "changelog_entries" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "changelog_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_activities" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pricing_otps" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pricing_otps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connectors" (
    "id" TEXT NOT NULL,
    "sliderTitle" TEXT NOT NULL DEFAULT 'Default Slider',
    "title" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "connectors_pkey" PRIMARY KEY ("id","locale")
);

-- CreateTable
CREATE TABLE "ai_copilots" (
    "id" TEXT NOT NULL,
    "icon" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_copilots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "faqs_locale_idx" ON "faqs"("locale");

-- CreateIndex
CREATE INDEX "faqs_categoryId_idx" ON "faqs"("categoryId");

-- CreateIndex
CREATE INDEX "faq_categories_locale_idx" ON "faq_categories"("locale");

-- CreateIndex
CREATE INDEX "faq_categories_slug_idx" ON "faq_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "faq_categories_slug_locale_key" ON "faq_categories"("slug", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "global_settings_locale_key" ON "global_settings"("locale");

-- CreateIndex
CREATE INDEX "global_settings_locale_idx" ON "global_settings"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "homepage_content_locale_key" ON "homepage_content"("locale");

-- CreateIndex
CREATE INDEX "homepage_content_locale_idx" ON "homepage_content"("locale");

-- CreateIndex
CREATE INDEX "blog_posts_locale_idx" ON "blog_posts"("locale");

-- CreateIndex
CREATE INDEX "blog_posts_published_idx" ON "blog_posts"("published");

-- CreateIndex
CREATE INDEX "blog_posts_slug_idx" ON "blog_posts"("slug");

-- CreateIndex
CREATE INDEX "blog_posts_id_idx" ON "blog_posts"("id");

-- CreateIndex
CREATE INDEX "demo_faqs_locale_idx" ON "demo_faqs"("locale");

-- CreateIndex
CREATE INDEX "mlm_plan_faqs_locale_idx" ON "mlm_plan_faqs"("locale");

-- CreateIndex
CREATE INDEX "module_faqs_locale_idx" ON "module_faqs"("locale");

-- CreateIndex
CREATE INDEX "services_faqs_locale_idx" ON "services_faqs"("locale");

-- CreateIndex
CREATE INDEX "contact_faqs_locale_idx" ON "contact_faqs"("locale");

-- CreateIndex
CREATE INDEX "features_faqs_locale_idx" ON "features_faqs"("locale");

-- CreateIndex
CREATE INDEX "demo_items_locale_idx" ON "demo_items"("locale");

-- CreateIndex
CREATE INDEX "demo_items_showOnHomePage_idx" ON "demo_items"("showOnHomePage");

-- CreateIndex
CREATE INDEX "features_category_idx" ON "features"("category");

-- CreateIndex
CREATE INDEX "features_locale_idx" ON "features"("locale");

-- CreateIndex
CREATE INDEX "features_showOnHomePage_idx" ON "features"("showOnHomePage");

-- CreateIndex
CREATE UNIQUE INDEX "features_slug_locale_key" ON "features"("slug", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "meta_details_page_locale_key" ON "meta_details"("page", "locale");

-- CreateIndex
CREATE INDEX "mlm_plans_groupId_idx" ON "mlm_plans"("groupId");

-- CreateIndex
CREATE INDEX "mlm_plans_locale_idx" ON "mlm_plans"("locale");

-- CreateIndex
CREATE INDEX "mlm_plans_showOnHomePage_idx" ON "mlm_plans"("showOnHomePage");

-- CreateIndex
CREATE UNIQUE INDEX "modules_slug_key" ON "modules"("slug");

-- CreateIndex
CREATE INDEX "modules_hasDetailPage_idx" ON "modules"("hasDetailPage");

-- CreateIndex
CREATE INDEX "modules_locale_idx" ON "modules"("locale");

-- CreateIndex
CREATE INDEX "modules_showOnHomePage_idx" ON "modules"("showOnHomePage");

-- CreateIndex
CREATE INDEX "modules_slug_idx" ON "modules"("slug");

-- CreateIndex
CREATE INDEX "industry_solutions_locale_idx" ON "industry_solutions"("locale");

-- CreateIndex
CREATE INDEX "industry_solutions_showOnHomePage_idx" ON "industry_solutions"("showOnHomePage");

-- CreateIndex
CREATE UNIQUE INDEX "industry_solutions_title_locale_key" ON "industry_solutions"("title", "locale");

-- CreateIndex
CREATE INDEX "page_titles_locale_idx" ON "page_titles"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "page_titles_page_locale_key" ON "page_titles"("page", "locale");

-- CreateIndex
CREATE INDEX "services_locale_idx" ON "services"("locale");

-- CreateIndex
CREATE INDEX "services_showOnHomePage_idx" ON "services"("showOnHomePage");

-- CreateIndex
CREATE INDEX "testimonials_locale_idx" ON "testimonials"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "testimonials_slug_locale_key" ON "testimonials"("slug", "locale");

-- CreateIndex
CREATE INDEX "stories_locale_idx" ON "stories"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "contact_addresses_locale_idx" ON "contact_addresses"("locale");

-- CreateIndex
CREATE INDEX "changelog_entries_locale_idx" ON "changelog_entries"("locale");

-- CreateIndex
CREATE INDEX "changelog_entries_order_idx" ON "changelog_entries"("order");

-- CreateIndex
CREATE UNIQUE INDEX "changelog_entries_version_locale_key" ON "changelog_entries"("version", "locale");

-- CreateIndex
CREATE INDEX "user_activities_userId_idx" ON "user_activities"("userId");

-- CreateIndex
CREATE INDEX "user_activities_createdAt_idx" ON "user_activities"("createdAt");

-- CreateIndex
CREATE INDEX "user_activities_action_idx" ON "user_activities"("action");

-- CreateIndex
CREATE UNIQUE INDEX "pricing_otps_email_key" ON "pricing_otps"("email");

-- CreateIndex
CREATE INDEX "pricing_otps_email_idx" ON "pricing_otps"("email");

-- CreateIndex
CREATE INDEX "pricing_otps_expiresAt_idx" ON "pricing_otps"("expiresAt");

-- CreateIndex
CREATE INDEX "connectors_locale_idx" ON "connectors"("locale");

-- CreateIndex
CREATE INDEX "connectors_sliderTitle_locale_idx" ON "connectors"("sliderTitle", "locale");

-- CreateIndex
CREATE INDEX "ai_copilots_locale_idx" ON "ai_copilots"("locale");

-- AddForeignKey
ALTER TABLE "user_activities" ADD CONSTRAINT "user_activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

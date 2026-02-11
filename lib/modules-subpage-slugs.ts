/**
 * Valid slugs for MLM software module sub-pages (top-level routes: /[lang]/[slug], e.g. /emails).
 * These pages are logically sub-pages of mlm-software-modules. Add a new entry when you add content.
 */
export const MODULES_SUBPAGE_SLUGS = [
  "emails",
  "compensation-module",
  "ecommerce-module",
  "marketing-automation",
  "compliance-modules",
  "analytics",
  "genealogy",
  "customer-engagement-module",
  // Feature-style module sub-pages (different design from pricing-style above)
  "mass-email-sending-module",
  "e-voucher",
  "e-wallet",
  "ticket-system",
  "auto-responder",
  "multi-currency-module",
  "multi-lingual-system",
  "kyc-documentation",
  "backup-manager",
  "email-module",
] as const;

/** Slugs that use the feature layout (not pricing sub-page layout). */
export const MODULE_FEATURE_SLUGS = [
  "mass-email-sending-module",
  "e-voucher",
  "e-wallet",
  "ticket-system",
  "auto-responder",
  "multi-currency-module",
  "multi-lingual-system",
  "kyc-documentation",
  "backup-manager",
  "email-module",
] as const;

export function isModuleFeatureSlug(slug: string): boolean {
  return (MODULE_FEATURE_SLUGS as readonly string[]).includes(slug);
}

export type ModulesSubpageSlug = (typeof MODULES_SUBPAGE_SLUGS)[number];

const SLUG_META: Record<
  string,
  { fallbackTitle: string; fallbackDescription: string; fallbackKeywords: string }
> = {
  emails: {
    fallbackTitle: "Email & Communications Module | Cloud MLM Software",
    fallbackDescription:
      "Email automation and communications module for MLM: lifecycle journeys, governance, and performance visibility. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM email module, marketing automation module, Cloud MLM Software emails",
  },
  "compensation-module": {
    fallbackTitle: "Compensation Plan Module | Cloud MLM Software",
    fallbackDescription:
      "Design and run compensation plans with the Cloud MLM Software compensation module. Binary, unilevel, matrix, and custom structures.",
    fallbackKeywords:
      "MLM compensation module, commission module, Cloud MLM Software compensation",
  },
  "ecommerce-module": {
    fallbackTitle: "E-Commerce Module | Cloud MLM Software",
    fallbackDescription:
      "E-commerce and order management module for direct selling. Catalogs, carts, and fulfilment within Cloud MLM Software.",
    fallbackKeywords:
      "MLM ecommerce module, order management, Cloud MLM Software ecommerce",
  },
  "marketing-automation": {
    fallbackTitle: "Marketing Automation Module | Cloud MLM Software",
    fallbackDescription:
      "Marketing automation module for MLM: campaigns, segments, and analytics. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM marketing automation, campaign module, Cloud MLM Software marketing",
  },
  compliance: {
    fallbackTitle: "Compliance Module | Cloud MLM Software",
    fallbackDescription:
      "Compliance and governance module for MLM: consent, audit trails, and regional rules. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM compliance module, governance module, Cloud MLM Software compliance",
  },
  "compliance-modules": {
    fallbackTitle: "Compliance Module | Cloud MLM Software",
    fallbackDescription:
      "Compliance and governance module for MLM: consent, audit trails, and regional rules. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM compliance module, governance module, Cloud MLM Software compliance",
  },
  analytics: {
    fallbackTitle: "Analytics & Reporting Module | Cloud MLM Software",
    fallbackDescription:
      "Analytics and reporting module for MLM: dashboards, KPIs, and exports. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM analytics module, reporting module, Cloud MLM Software analytics",
  },
  genealogy: {
    fallbackTitle: "Genealogy Tree Module | Cloud MLM Software",
    fallbackDescription:
      "Genealogy and network tree module for MLM. Visualise and manage distributor networks. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM genealogy module, network tree, Cloud MLM Software genealogy",
  },
  "customer-engagement-module": {
    fallbackTitle: "Customer Engagement Module | Cloud MLM Software",
    fallbackDescription:
      "Customer and distributor engagement module: support, loyalty, and journeys. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM customer engagement, support module, Cloud MLM Software engagement",
  },
  "mass-email-sending-module": {
    fallbackTitle: "Mass Email Sending Module | Cloud MLM Software",
    fallbackDescription:
      "Send bulk emails, campaigns, and automated sequences to your network. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM mass email, bulk email module, Cloud MLM Software email campaigns",
  },
  "e-voucher": {
    fallbackTitle: "E-Voucher For MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Digital vouchers and gift cards for rewards, incentives, and promotions. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM e-voucher, digital voucher module, Cloud MLM Software vouchers",
  },
  "e-wallet": {
    fallbackTitle: "E-Wallet Module for MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Digital wallet for commissions, payouts, and in-network transactions. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM e-wallet, digital wallet module, Cloud MLM Software wallet",
  },
  "ticket-system": {
    fallbackTitle: "Ticket System Module for MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Support ticket system for distributors and customers. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM ticket system, support module, Cloud MLM Software tickets",
  },
  "auto-responder": {
    fallbackTitle: "Auto Responder Module | Cloud MLM Software",
    fallbackDescription:
      "Automated email and message sequences for onboarding and engagement. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM auto responder, autoresponder module, Cloud MLM Software automation",
  },
  "multi-currency-module": {
    fallbackTitle: "Multi Currency Module | Cloud MLM Software",
    fallbackDescription:
      "Multi-currency support for orders, commissions, and payouts. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM multi currency, currency module, Cloud MLM Software multi-currency",
  },
  "multi-lingual-system": {
    fallbackTitle: "Multi-Lingual System | Cloud MLM Software",
    fallbackDescription:
      "Multi-language and localization for your MLM platform. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM multi-lingual, localization module, Cloud MLM Software languages",
  },
  "kyc-documentation": {
    fallbackTitle: "KYC Documentation Module | Cloud MLM Software",
    fallbackDescription:
      "Know Your Customer documentation and verification for compliance. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM KYC, KYC documentation, Cloud MLM Software compliance",
  },
  "backup-manager": {
    fallbackTitle: "Backup Manager Module | Cloud MLM Software",
    fallbackDescription:
      "Automated backups and recovery for your MLM data. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM backup, backup manager module, Cloud MLM Software backup",
  },
  "email-module": {
    fallbackTitle: "Email Module | Cloud MLM Software",
    fallbackDescription:
      "Email and communications module for MLM: templates, tracking, and automation. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM email module, email communications, Cloud MLM Software email",
  },
};

export function getModulesSubpageMeta(slug: string) {
  return SLUG_META[slug] ?? null;
}

export function isModulesSubpageSlug(slug: string): slug is ModulesSubpageSlug {
  return MODULES_SUBPAGE_SLUGS.includes(slug as ModulesSubpageSlug);
}

/**
 * Map module title or id from API to a sub-page slug when we have a dedicated sub-page.
 * Otherwise return null (link to main modules page).
 */
/** Common translated keywords for module titles (e.g. from /api/modules?locale=es). */
const TRANSLATED_KEYWORDS: Record<string, string[]> = {
  emails: ["email", "correo", "correos", "e-mail", "comunicación", "comunicaciones"],
  "compensation-module": ["compensation", "compensación", "commission", "comisión", "plan", "module", "módulo"],
  "ecommerce-module": ["ecommerce", "e-commerce", "commerce", "comercio", "comercio electrónico", "ecommerce-module"],
  "marketing-automation": ["marketing", "automation", "automatización", "campaña", "campaign"],
  compliance: ["compliance", "cumplimiento", "governance", "gobernanza"],
  analytics: ["analytics", "analítica", "reporting", "informes", "informe"],
  genealogy: ["genealogy", "genealogía", "tree", "árbol", "network", "red"],
  "customer-engagement-module": ["customer", "cliente", "engagement", "compromiso", "support", "soporte", "module", "módulo"],
  "mass-email-sending-module": ["mass", "email", "masivo", "correo", "envío"],
  "e-voucher": ["e-voucher", "voucher", "vale", "cupón", "bono"],
  "e-wallet": ["e-wallet", "wallet", "cartera", "monedero", "billetera"],
  "ticket-system": ["ticket", "soporte", "support", "incidencia"],
  "auto-responder": ["auto", "respond", "responder", "autoresponder", "respuesta automática"],
  "multi-currency": ["multi", "currency", "moneda", "divisa", "multimoneda"],
  "multi-lingual-system": ["multi", "lingual", "language", "idioma", "idiomas", "multilingüe"],
  "kyc-documentation": ["kyc", "documentation", "documentación", "identidad", "verificación"],
  "backup-manager": ["backup", "copia", "respaldo", "respaldo de seguridad"],
  "email-module": ["email", "correo", "módulo de correo", "email module"],
};

function titleMatchesSlug(t: string, slug: string): boolean {
  const keywords = TRANSLATED_KEYWORDS[slug];
  if (!keywords) return false;
  return keywords.some((kw) => t.includes(kw));
}

export function getModuleSlugFromTitleOrId(title: string | null, id: string | null): string | null {
  if (!title && !id) return null;
  const t = (title ?? id ?? "").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const idStr = (id ?? "").toLowerCase();
  // Prefer slug that matches a known sub-page (English + translated keywords). Check specific slugs before generic "emails".
  if (titleMatchesSlug(t, "compensation-module") || idStr.includes("compensation")) return "compensation-module";
  if (titleMatchesSlug(t, "ecommerce-module") || idStr.includes("ecommerce-module") || idStr.includes("ecommerce")) return "ecommerce-module";
  if ((t.includes("marketing") || t.includes("automatización")) && (t.includes("automation") || t.includes("campaign") || t.includes("campaña"))) return "marketing-automation";
  if (titleMatchesSlug(t, "compliance")) return "compliance-modules";
  if (titleMatchesSlug(t, "analytics")) return "analytics";
  if (titleMatchesSlug(t, "genealogy")) return "genealogy";
  if (titleMatchesSlug(t, "customer-engagement-module")) return "customer-engagement-module";
  if ((t.includes("mass") || t.includes("masivo")) && (t.includes("email") || t.includes("correo"))) return "mass-email-sending-module";
  if (titleMatchesSlug(t, "e-voucher")) return "e-voucher";
  if (titleMatchesSlug(t, "e-wallet")) return "e-wallet";
  if (titleMatchesSlug(t, "ticket-system")) return "ticket-system";
  if ((t.includes("auto") || t.includes("automátic")) && (t.includes("respond") || t.includes("respuesta"))) return "auto-responder";
  if ((t.includes("multi") || t.includes("mult")) && (t.includes("currency") || t.includes("moneda") || t.includes("divisa"))) return "multi-currency-module";
  if ((t.includes("multi") || t.includes("mult")) && (t.includes("lingual") || t.includes("idioma") || t.includes("language"))) return "multi-lingual-system";
  if (titleMatchesSlug(t, "kyc-documentation")) return "kyc-documentation";
  if (titleMatchesSlug(t, "backup-manager")) return "backup-manager";
  if (titleMatchesSlug(t, "email-module")) return "email-module";
  if (titleMatchesSlug(t, "emails") || t.includes("email") || idStr.includes("email")) return "emails";
  return null;
}

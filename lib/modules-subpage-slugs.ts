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
  compliance: ["compliance", "cumplimiento", "governance", "gobernanza", "conformita", "conformite", "konformitat", "conformidade"],
  analytics: ["analytics", "analítica", "reporting", "informes", "informe"],
  genealogy: ["genealogy", "genealogía", "tree", "árbol", "network", "red"],
  "customer-engagement-module": ["customer", "cliente", "engagement", "compromiso", "support", "soporte"],
  "mass-email-sending-module": ["mass", "email", "masivo", "correo", "envío"],
  "e-voucher": ["e-voucher", "voucher", "vale", "cupón", "bono"],
  "e-wallet": ["e-wallet", "wallet", "cartera", "monedero", "billetera"],
  "ticket-system": ["ticket", "soporte", "support", "incidencia"],
  "auto-responder": ["auto", "respond", "responder", "autoresponder", "respuesta automática"],
  "multi-currency-module": ["multi", "currency", "moneda", "divisa", "devise", "devises", "multimoneda"],
  "multi-lingual-system": ["multi", "lingual", "language", "idioma", "idiomas", "multilingüe"],
  "kyc-documentation": ["kyc", "documentation", "documentación", "identidad", "verificación"],
  "backup-manager": ["backup", "copia", "respaldo", "respaldo de seguridad"],
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
  // Check mass-email before generic email so "Mass Email Sending Module" does not match emails
  const hasMassKeyword =
    t.includes("mass") ||
    t.includes("masivo") ||
    t.includes("massa") ||
    t.includes("masse") ||
    t.includes("massen");
  const hasEmailKeyword =
    t.includes("email") ||
    t.includes("e-mail") ||
    t.includes("correo") ||
    t.includes("courriel");
  if (hasMassKeyword && hasEmailKeyword) return "mass-email-sending-module";
  // Email/emails module (e.g. "Email Module", "Emails")
  if (titleMatchesSlug(t, "emails") || t.includes("email") || idStr.includes("email")) return "emails";
  // Check backup-manager before compensation-module so "Backup Manager Module" does not match compensation (keyword "module")
  if (titleMatchesSlug(t, "backup-manager") || idStr.includes("backup")) return "backup-manager";
  // Check multi-currency and multi-lingual before compensation so "Multi Currency Module" etc. do not match (keyword "module")
  if ((t.includes("multi") || t.includes("mult")) && (t.includes("currency") || t.includes("moneda") || t.includes("divisa") || t.includes("devise"))) return "multi-currency-module";
  if ((t.includes("multi") || t.includes("mult")) && (t.includes("lingual") || t.includes("idioma") || t.includes("language"))) return "multi-lingual-system";
  // Check ticket-system before compensation so "Ticket system module" does not match (keyword "module")
  if (titleMatchesSlug(t, "ticket-system") || t.includes("ticket") || idStr.includes("ticket")) return "ticket-system";
  // Check e-wallet before compensation so "E-Wallet module" does not match (keyword "module")
  if (titleMatchesSlug(t, "e-wallet") || t.includes("e-wallet") || t.includes("ewallet") || idStr.includes("wallet")) return "e-wallet";
  // Check analytics before compensation so "Analytics & Reporting Module" does not match (keyword "module")
  if (titleMatchesSlug(t, "analytics") || t.includes("analytics") || t.includes("reporting") || idStr.includes("analytics")) return "analytics";
  // Check marketing-automation before compensation so "Marketing Automation Module" does not match (keyword "module")
  if (titleMatchesSlug(t, "marketing-automation") || ((t.includes("marketing") || t.includes("automatización")) && (t.includes("automation") || t.includes("campaign") || t.includes("campaña")))) return "marketing-automation";
  // Check genealogy before compensation so "Genealogy Tree Module" does not match (keyword "module")
  if (titleMatchesSlug(t, "genealogy") || t.includes("genealogy") || idStr.includes("genealogy")) return "genealogy";
  // Check compliance before compensation so "Compliance module" does not match (keyword "module")
  if (
    titleMatchesSlug(t, "compliance") ||
    t.includes("compliance") ||
    t.includes("conform") ||
    idStr.includes("compliance") ||
    idStr.includes("conform")
  ) return "compliance-modules";
  // Check customer-engagement before compensation so "Customer Engagement module" does not match (keyword "module")
  if (titleMatchesSlug(t, "customer-engagement-module") || (t.includes("customer") && t.includes("engagement")) || idStr.includes("customer-engagement")) return "customer-engagement-module";
  // Check ecommerce before compensation so "E-Commerce module" does not match (keyword "module") or return null
  if (titleMatchesSlug(t, "ecommerce-module") || t.includes("e-commerce") || t.includes("ecommerce") || idStr.includes("ecommerce-module") || idStr.includes("ecommerce")) return "ecommerce-module";
  if (titleMatchesSlug(t, "compensation-module") || idStr.includes("compensation")) return "compensation-module";
  if (titleMatchesSlug(t, "e-voucher")) return "e-voucher";
  if ((t.includes("auto") || t.includes("automátic")) && (t.includes("respond") || t.includes("respuesta"))) return "auto-responder";
  if (titleMatchesSlug(t, "kyc-documentation")) return "kyc-documentation";
  return null;
}

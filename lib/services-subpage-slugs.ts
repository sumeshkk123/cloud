/**
 * Service sub-pages that use ServiceSubpageLayout (dynamic route: /[lang]/services/[slug]).
 * Page key for getPageTitle is "services/<slug>". Add slug + meta when adding new service content.
 */
export const SERVICES_SUBPAGE_SLUGS = [
  // bitcoin-cryptocurrency-mlm-software is a top-level page at /bitcoin-cryptocurrency-mlm-software
  // Add more as content is added (e.g. e-commerce-integration, ...)
] as const;

/**
 * All service subpage slugs (dynamic [slug] + static folders). Used for sitemap and any full listing.
 */
export const ALL_SERVICES_SUBPAGE_SLUGS: readonly string[] = [
  ...SERVICES_SUBPAGE_SLUGS,
  "mlm-software-development",
  "compensation-plan-audit",
  "e-commerce-integration",
  "magento-development",
  "opencart-development",
  "shopify-integration-in-cloud-mlm-software",
  "web-development",
  "website-designing",
  "woocommerce-integration-with-cloud-mlm-software",
];

export type ServicesSubpageSlug = (typeof SERVICES_SUBPAGE_SLUGS)[number];

const SLUG_META: Record<
  string,
  { fallbackTitle: string; fallbackDescription: string; fallbackKeywords: string }
> = {
  "bitcoin-cryptocurrency-mlm-software": {
    fallbackTitle: "Bitcoin & Cryptocurrency MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Run your MLM or direct selling business with crypto payouts and multi-currency support. Bitcoin and cryptocurrency integration for commissions, e-wallets, and compliant reporting.",
    fallbackKeywords:
      "Bitcoin MLM software, cryptocurrency MLM, crypto payouts, multi-currency MLM, Cloud MLM Software",
  },
};

export function getServicesSubpageMeta(slug: string) {
  return SLUG_META[slug] ?? null;
}

export function isServicesSubpageSlug(slug: string): slug is ServicesSubpageSlug {
  return (SERVICES_SUBPAGE_SLUGS as readonly string[]).includes(slug);
}

/** Page key for page_titles table (e.g. "services/bitcoin-cryptocurrency-mlm-software"). */
export function getServicePageKey(slug: string): string {
  return `services/${slug}`;
}

/**
 * Map from slug derived from admin service title (e.g. "Shopify Integration" -> "shopify-integration")
 * to the canonical route slug used in app/[lang]/services/[slug] or app/[lang]/ for top-level pages.
 * Used by services list "Explore More" links so they point to the correct service page.
 */
const SERVICE_TITLE_SLUG_TO_CANONICAL: Record<string, string> = {
  "shopify-integration": "shopify-integration-in-cloud-mlm-software",
  "woocommerce-integration": "woocommerce-integration-with-cloud-mlm-software",
  "comp-plan-audit": "compensation-plan-audit",
  "mlm-software-migration-services": "mlm-migration",
  "mlm-consulting-services": "mlm-consulting",
};

/** Slugs that live at top-level path /[lang]/{slug} instead of /[lang]/services/{slug}. */
export const TOP_LEVEL_SERVICE_SLUGS: readonly string[] = [
  "bitcoin-cryptocurrency-mlm-software",
  "cryptocurrency-mlm-software",
  "mlm-migration",
  "mlm-consulting",
];

export function getCanonicalServiceSlug(titleDerivedSlug: string): string {
  return SERVICE_TITLE_SLUG_TO_CANONICAL[titleDerivedSlug] ?? titleDerivedSlug;
}

/**
 * Service subpage canonical key -> locale -> URL slug.
 * Used for sitemap and buildLocalizedPath so /services/opencart-development becomes e.g. /es/servicios/desarrollo-opencart.
 */
export const servicesSubpageToSlugMap: Record<string, Record<string, string>> = {
  "opencart-development": {
    en: "opencart-development",
    es: "desarrollo-opencart",
    fr: "developpement-opencart",
    it: "sviluppo-opencart",
    de: "opencart-entwicklung",
    pt: "desenvolvimento-opencart",
    zh: "opencart-kai-fa",
  },
  "woocommerce-integration-with-cloud-mlm-software": {
    en: "woocommerce-integration-with-cloud-mlm-software",
    es: "integracion-woocommerce-software-mlm-nube",
    fr: "integration-woocommerce-logiciel-mlm-cloud",
    it: "integrazione-woocommerce-software-mlm-cloud",
    de: "woocommerce-integration-cloud-mlm-software",
    pt: "integracao-woocommerce-software-mlm-nuvem",
    zh: "woocommerce-yun-mlm-ruan-jian-ji-cheng",
  },
  "mlm-software-development": {
    en: "mlm-software-development",
    es: "desarrollo-de-software-mlm",
    fr: "developpement-de-logiciels-mlm",
    it: "sviluppo-software-mlm",
    de: "mlm-software-entwicklung",
    pt: "desenvolvimento-software-mlm",
    zh: "chuan-xiao-ruan-jian-kai-fa",
  },
  "e-commerce-integration": {
    en: "e-commerce-integration",
    es: "integracion-de-comercio-electronico",
    fr: "integration-e-commerce",
    it: "e-commerce-integration",
    de: "e-commerce-integration",
    pt: "integracao-de-comercio-eletronico",
    zh: "dian-zi-shang-wu-zheng-he",
  },
  "magento-development": {
    en: "magento-development",
    es: "desarrollo-de-magento",
    fr: "developpement-magento",
    it: "sviluppo-magento",
    de: "magento-entwicklung",
    pt: "desenvolvimento-magento",
    zh: "magento-kai-fa",
  },
  "web-development": {
    en: "web-development",
    es: "desarrollo-web",
    fr: "developpement-web",
    it: "sviluppo-web",
    de: "web-entwicklung",
    pt: "desenvolvimento-web",
    zh: "web-kai-fa",
  },
  "website-designing": {
    en: "website-designing",
    es: "diseno-de-sitios-web",
    fr: "conception-de-sites-web",
    it: "progettazione-di-siti-web",
    de: "website-gestaltung",
    pt: "web-designing",
    zh: "wang-zhan-she-ji",
  },
  "shopify-integration-in-cloud-mlm-software": {
    en: "shopify-integration-in-cloud-mlm-software",
    es: "integracion-de-shopify-en-el-software-cloud-mlm",
    fr: "integration-de-shopify-dans-le-logiciel-cloud-mlm",
    it: "integrazione-di-shopify-nel-software-cloud-mlm",
    de: "shopify-integration-cloud-mlm-software",
    pt: "integracao-do-shopify-no-software-cloud-mlm",
    zh: "shopify-yu-yun-mlm-ruan-jian-ji-cheng",
  },
  "compensation-plan-audit": {
    en: "compensation-plan-audit",
    es: "auditoria-del-plan-de-compensacion",
    fr: "audit-du-plan-de-remuneration",
    it: "audit-piano-compensazione",
    de: "vergutungsplan-audit",
    pt: "auditoria-plano-compensacao",
    zh: "bu-chou-ji-hua-shen-ji",
  },
};

/** Reverse: any locale's slug -> canonical key. Used by middleware and buildLocalizedPath. */
const serviceSubpageSlugToKeyMap: Record<string, string> = (() => {
  const out: Record<string, string> = {};
  for (const [key, slugs] of Object.entries(servicesSubpageToSlugMap)) {
    for (const slug of Object.values(slugs)) {
      out[slug] = key;
    }
  }
  return out;
})();

/** Get translated slug for a service subpage (e.g. opencart-development -> desarrollo-opencart for es). Falls back to canonical key if no map entry. */
export function getSlugForServiceSubpage(canonicalKey: string, locale: string): string {
  return servicesSubpageToSlugMap[canonicalKey]?.[locale] ?? servicesSubpageToSlugMap[canonicalKey]?.["en"] ?? canonicalKey;
}

/** Resolve URL segment (translated or canonical) to canonical service subpage key. */
export function getServiceSubpageKeyFromSlug(segment: string): string | null {
  return serviceSubpageSlugToKeyMap[segment] ?? null;
}

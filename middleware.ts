import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n-config";
import { getPageFromSlug, getSlugFromPage } from "@/lib/page-slugs";
import { getServiceSubpageKeyFromSlug } from "@/lib/services-subpage-slugs";
import { MLM_PLAN_SEGMENT, getPlanSubpageCanonicalFromSlug } from "@/lib/mlm-plan-subpage-slugs";
import { getBlogSubpageKeyFromSlug } from "@/lib/page-slugs";
import { getModuleSlugFromTitleOrId, isModulesSubpageSlug } from "@/lib/modules-subpage-slugs";
import { getCanonicalSlugForPlanTitle } from "@/lib/mlm-plan-subpage-slugs";

const PUBLIC_FILE = /\.(.*)$/;

function toInternalLocale(localeSegment: string): string {
  if (localeSegment === "pt-pt") return "pt";
  if (localeSegment === "zh-hans") return "zh";
  return localeSegment;
}

function toUrlLocale(locale: string): string {
  if (locale === "pt") return "pt-pt";
  if (locale === "zh") return "zh-hans";
  return locale;
}

async function getModulesForLocale(request: NextRequest, locale: string): Promise<any[]> {
  try {
    const apiUrl = request.nextUrl.clone();
    apiUrl.pathname = "/api/modules";
    apiUrl.search = "";
    apiUrl.searchParams.set("locale", locale);

    const res = await fetch(apiUrl.toString(), { cache: "no-store" });
    if (!res.ok) {
      return [];
    }
    const payload = await res.json();
    return Array.isArray(payload) ? payload : [];
  } catch {
    return [];
  }
}

async function getPlansForLocale(request: NextRequest, locale: string): Promise<any[]> {
  try {
    const apiUrl = request.nextUrl.clone();
    apiUrl.pathname = "/api/plans";
    apiUrl.search = "";
    apiUrl.searchParams.set("locale", locale);
    const res = await fetch(apiUrl.toString(), { cache: "no-store" });
    if (!res.ok) return [];
    const payload = await res.json();
    return Array.isArray(payload) ? payload : [];
  } catch {
    return [];
  }
}

function derivePlanTitleSlug(title: string): string {
  return String(title || "")
    .toLowerCase()
    .replace(/^([0-9]+\s*)?mlm\s+/i, "")
    .replace(/\s+/g, "-")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9-]/g, "");
}

function resolveCanonicalSlugForPlanRow(planRow: any): string | null {
  const explicit = String(planRow?.slug || "").trim().toLowerCase();
  if (explicit) {
    const explicitBase = explicit.replace(/[-_]?(\d+)$/, "");
    const explicitCanonical = getPlanSubpageCanonicalFromSlug(explicitBase);
    if (explicitCanonical) return explicitCanonical;
  }
  const title = String(planRow?.title || "");
  return getCanonicalSlugForPlanTitle(title, derivePlanTitleSlug(title));
}

async function resolveCanonicalSlugForPlan(
  request: NextRequest,
  locale: string,
  planRow: any,
  englishPlans?: any[]
): Promise<string | null> {
  const localCanonical = resolveCanonicalSlugForPlanRow(planRow);
  if (localCanonical) return localCanonical;
  if (locale === "en") return null;
  const enRows = englishPlans ?? (await getPlansForLocale(request, "en"));
  const groupKey = String(planRow?.groupId || planRow?.id || "").trim();
  if (!groupKey) return null;
  const enMatch = enRows.find((p: any) => String(p?.groupId || p?.id || "").trim() === groupKey);
  if (!enMatch) return null;
  return resolveCanonicalSlugForPlanRow(enMatch);
}

async function resolveBackendPlanSlug(
  request: NextRequest,
  locale: string,
  inputSlug: string
): Promise<{ canonicalSlug: string; planId: string } | null> {
  const normalizedSlug = String(inputSlug || "").trim().toLowerCase();
  if (!normalizedSlug) return null;
  try {
    const payload = await getPlansForLocale(request, locale);
    const englishPlans = locale === "en" ? payload : await getPlansForLocale(request, "en");
    const match = payload.find((item: any) => String(item?.slug || "").trim().toLowerCase() === normalizedSlug);
    if (!match) return null;
    const planId = String(match?.id || "").trim();
    const canonicalSlug = await resolveCanonicalSlugForPlan(request, locale, match, englishPlans);
    if (!canonicalSlug || !planId) return null;
    return { canonicalSlug, planId };
  } catch {
    return null;
  }
}

async function getPreferredBackendPlanSlugForCanonical(
  request: NextRequest,
  locale: string,
  canonicalSlug: string
): Promise<string | null> {
  if (!canonicalSlug) return null;
  const payload = await getPlansForLocale(request, locale);
  const englishPlans = locale === "en" ? payload : await getPlansForLocale(request, "en");
  for (const item of payload) {
    const derived = await resolveCanonicalSlugForPlan(request, locale, item, englishPlans);
    if (derived === canonicalSlug) {
      const explicit = String(item?.slug || "").trim();
      if (explicit) return explicit;
    }
  }
  return null;
}

async function resolveCanonicalSlugForModule(
  request: NextRequest,
  locale: string,
  moduleRow: any,
  englishModules?: any[]
): Promise<string | null> {
  const explicit = String(moduleRow?.slug || "").trim().toLowerCase();
  if (explicit && isModulesSubpageSlug(explicit)) return explicit;
  if (explicit) {
    const explicitBase = explicit.replace(/[-_]?(\d+)$/, "");
    const fromExplicitText = getModuleSlugFromTitleOrId(explicitBase, null);
    if (fromExplicitText && isModulesSubpageSlug(fromExplicitText)) return fromExplicitText;
    const mappedFromExplicit =
      getPageFromSlug(explicitBase, locale) ??
      getPageFromSlug(explicitBase, i18n.defaultLocale);
    if (mappedFromExplicit && isModulesSubpageSlug(mappedFromExplicit)) return mappedFromExplicit;
  }

  const moduleId = String(moduleRow?.id || "").trim();
  const direct = getModuleSlugFromTitleOrId(String(moduleRow?.title || ""), moduleId);
  if (direct && isModulesSubpageSlug(direct)) return direct;

  if (locale !== "en") {
    const enRows = englishModules ?? (await getModulesForLocale(request, "en"));
    const image = String(moduleRow?.image || "");
    const showOnHomePage = Boolean(moduleRow?.showOnHomePage ?? false);
    const enMatch = enRows.find(
      (m: any) =>
        String(m?.image || "") === image &&
        Boolean(m?.showOnHomePage ?? false) === showOnHomePage
    );
    if (enMatch) {
      const enId = String(enMatch?.id || "").trim();
      const enDerived = getModuleSlugFromTitleOrId(String(enMatch?.title || ""), enId);
      if (enDerived && isModulesSubpageSlug(enDerived)) return enDerived;
      const enExplicit = String(enMatch?.slug || "").trim();
      if (enExplicit && isModulesSubpageSlug(enExplicit)) return enExplicit;
    }
  }

  return null;
}

async function resolveBackendModuleSlug(
  request: NextRequest,
  locale: string,
  inputSlug: string
): Promise<{ canonicalSlug: string; moduleId: string } | null> {
  const normalizedSlug = String(inputSlug || "").trim().toLowerCase();
  if (!normalizedSlug) return null;

  try {
    const payload = await getModulesForLocale(request, locale);
    const match = payload.find((item: any) => String(item?.slug || "").trim().toLowerCase() === normalizedSlug);
    if (!match) return null;

    const moduleId = String(match?.id || "").trim();
    const canonicalSlug = await resolveCanonicalSlugForModule(request, locale, match);
    if (!canonicalSlug || !isModulesSubpageSlug(canonicalSlug) || !moduleId) return null;
    return { canonicalSlug, moduleId };
  } catch {
    return null;
  }
}

async function getPreferredBackendSlugForCanonical(
  request: NextRequest,
  locale: string,
  canonicalSlug: string
): Promise<string | null> {
  if (!canonicalSlug || !isModulesSubpageSlug(canonicalSlug)) return null;
  const payload = await getModulesForLocale(request, locale);
  const englishModules = locale === "en" ? payload : await getModulesForLocale(request, "en");
  let fallbackMatch: any = null;
  for (const item of payload) {
    const derived = await resolveCanonicalSlugForModule(request, locale, item, englishModules);
    if (derived === canonicalSlug) {
      const explicit = String(item?.slug || "").trim();
      if (explicit) return explicit;
      if (!fallbackMatch) fallbackMatch = item;
    }
  }
  const explicitSlug = String(fallbackMatch?.slug || "").trim();
  return explicitSlug || null;
}

function resolveModuleCanonicalFromAnyLocale(slug: string, locale: string): string | null {
  const fromLocale = getPageFromSlug(slug, locale);
  if (fromLocale && isModulesSubpageSlug(fromLocale)) return fromLocale;

  const fromDefault = getPageFromSlug(slug, i18n.defaultLocale);
  if (fromDefault && isModulesSubpageSlug(fromDefault)) return fromDefault;

  for (const loc of i18n.locales) {
    if (loc === locale || loc === i18n.defaultLocale) continue;
    const found = getPageFromSlug(slug, loc);
    if (found && isModulesSubpageSlug(found)) return found;
  }

  return isModulesSubpageSlug(slug) ? slug : null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for admin routes, API routes, Next.js internals, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    pathname.startsWith("/admin") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "pt" || segments[0] === "zh") {
    const redirectUrl = request.nextUrl.clone();
    const aliasedLocale = toUrlLocale(segments[0]);
    redirectUrl.pathname = `/${aliasedLocale}${segments.length > 1 ? `/${segments.slice(1).join("/")}` : ""}`;
    return NextResponse.redirect(redirectUrl);
  }
  const localeForCheck = toInternalLocale(segments[0] || "");
  const hasLocale = segments.length > 0 && i18n.locales.includes(localeForCheck as any);
  
  if (hasLocale) {
    const rawLocaleSegment = segments[0];
    const locale = toInternalLocale(rawLocaleSegment);
    const localeUrl = toUrlLocale(locale);
    if (segments.length > 1) {
      let slug = segments[1];
      try {
        slug = decodeURIComponent(slug);
      } catch {
        // use as-is if decoding fails
      }
      // Redirect old ecommerce module slug to ecommerce-module
      if (slug === "ecommerce") {
        const redirectUrl = request.nextUrl.clone();
        const remainingPath = segments.slice(2).join("/");
        redirectUrl.pathname = `/${localeUrl}/ecommerce-module${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.redirect(redirectUrl);
      }
      // Redirect old compliance slug to compliance-modules
      if (slug === "compliance") {
        const redirectUrl = request.nextUrl.clone();
        const remainingPath = segments.slice(2).join("/");
        redirectUrl.pathname = `/${localeUrl}/compliance-modules${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.redirect(redirectUrl);
      }
      // Backend module slug first (e.g. /en/email2 -> internally serve /en/emails?mid=<id>)
      if (segments.length === 2) {
        const resolvedModule = await resolveBackendModuleSlug(request, locale, slug);
        if (resolvedModule) {
          const rewriteUrl = request.nextUrl.clone();
          rewriteUrl.pathname = `/${locale}/${resolvedModule.canonicalSlug}`;
          rewriteUrl.searchParams.set("mid", resolvedModule.moduleId);
          return NextResponse.rewrite(rewriteUrl);
        }
      }
      // Strict backend-first for module subpages: any static/legacy module slug should redirect
      // to the active backend slug for this locale when available.
      if (segments.length === 2) {
        const moduleCanonical = resolveModuleCanonicalFromAnyLocale(slug, locale);
        if (moduleCanonical) {
          const preferredSlug = await getPreferredBackendSlugForCanonical(request, locale, moduleCanonical);
          if (preferredSlug && preferredSlug.toLowerCase() !== slug.toLowerCase()) {
            const redirectUrl = request.nextUrl.clone();
            redirectUrl.pathname = `/${localeUrl}/${preferredSlug}`;
            return NextResponse.redirect(redirectUrl);
          }
        }
      }
      // If a module has explicit backend slug, redirect static/module-mapped slug to that backend slug.
      if (segments.length === 2) {
        const mappedModulePageId =
          getPageFromSlug(slug, locale) ?? (isModulesSubpageSlug(slug) ? slug : null);
        if (mappedModulePageId && isModulesSubpageSlug(mappedModulePageId)) {
          const preferredSlug = await getPreferredBackendSlugForCanonical(request, locale, mappedModulePageId);
          if (preferredSlug && preferredSlug !== slug) {
            const redirectUrl = request.nextUrl.clone();
            redirectUrl.pathname = `/${localeUrl}/${preferredSlug}`;
            return NextResponse.redirect(redirectUrl);
          }
        }
      }
      // Redirect short WooCommerce slug to full service slug (e.g. /en/services/woocommerce-integration → .../woocommerce-integration-with-cloud-mlm-software)
      if (slug === "services" && segments[2] === "woocommerce-integration") {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = `/${localeUrl}/services/woocommerce-integration-with-cloud-mlm-software`;
        return NextResponse.redirect(redirectUrl);
      }
      // Redirect old /services/bitcoin-cryptocurrency-mlm-software to top-level /bitcoin-cryptocurrency-mlm-software
      if (slug === "services" && segments[2] === "bitcoin-cryptocurrency-mlm-software") {
        const redirectUrl = request.nextUrl.clone();
        const bitcoinSlug = getSlugFromPage("bitcoin-cryptocurrency-mlm-software", locale as any) ?? "bitcoin-cryptocurrency-mlm-software";
        redirectUrl.pathname = `/${localeUrl}/${bitcoinSlug}`;
        return NextResponse.redirect(redirectUrl);
      }
      // Redirect old /services/cryptocurrency-mlm-software to top-level (translated slug)
      if (slug === "services" && segments[2] === "cryptocurrency-mlm-software") {
        const redirectUrl = request.nextUrl.clone();
        const cryptoSlug = getSlugFromPage("cryptocurrency-mlm-software", locale as any) ?? "cryptocurrency-mlm-software";
        redirectUrl.pathname = `/${localeUrl}/${cryptoSlug}`;
        return NextResponse.redirect(redirectUrl);
      }
      // Rewrite translated service subpage slug to canonical when first segment is already "services" (e.g. /fr/services/developpement-opencart → /fr/services/opencart-development)
      if (slug === "services" && segments[2]) {
        const serviceKey = getServiceSubpageKeyFromSlug(segments[2]);
        if (serviceKey) {
          const rewriteUrl = request.nextUrl.clone();
          const rest = segments.slice(3);
          const remainingPath = rest.length ? `${serviceKey}/${rest.join("/")}` : serviceKey;
          rewriteUrl.pathname = `/${locale}/services/${remainingPath}`;
          return NextResponse.rewrite(rewriteUrl);
        }
      }
      // Rewrite translated MLM plan subpage slug to canonical (e.g. /es/mlm-plan/software-australiano-de-mlm-del-plan-x-up → /es/mlm-plan/australian-x-up-plan-mlm-software)
      if (slug === MLM_PLAN_SEGMENT && segments[2]) {
        let planUrlSlug = segments[2];
        try {
          planUrlSlug = decodeURIComponent(planUrlSlug);
        } catch {}
        // Backend plan slug first (e.g. /it/mlm-plan/piano-binario2 -> internally serve /it/mlm-plan/mlm-binary-plan)
        const resolvedPlan = await resolveBackendPlanSlug(request, locale, planUrlSlug);
        if (resolvedPlan) {
          const rewriteUrl = request.nextUrl.clone();
          const rest = segments.slice(3);
          const remainingPath = rest.length ? `${resolvedPlan.canonicalSlug}/${rest.join("/")}` : resolvedPlan.canonicalSlug;
          rewriteUrl.pathname = `/${locale}/${MLM_PLAN_SEGMENT}/${remainingPath}`;
          rewriteUrl.searchParams.set("pid", resolvedPlan.planId);
          return NextResponse.rewrite(rewriteUrl);
        }

        // Strict backend-first for plan subpages: redirect static/legacy slug to explicit backend slug.
        const canonicalFromAny = getPlanSubpageCanonicalFromSlug(planUrlSlug);
        if (canonicalFromAny) {
          const preferredPlanSlug = await getPreferredBackendPlanSlugForCanonical(
            request,
            locale,
            canonicalFromAny
          );
          if (preferredPlanSlug && preferredPlanSlug.toLowerCase() !== planUrlSlug.toLowerCase()) {
            const redirectUrl = request.nextUrl.clone();
            const rest = segments.slice(3).join("/");
            redirectUrl.pathname = `/${localeUrl}/${MLM_PLAN_SEGMENT}/${preferredPlanSlug}${rest ? `/${rest}` : ""}`;
            return NextResponse.redirect(redirectUrl);
          }
        }

        const canonicalSlug = getPlanSubpageCanonicalFromSlug(planUrlSlug);
        if (canonicalSlug) {
          const rewriteUrl = request.nextUrl.clone();
          const rest = segments.slice(3);
          const remainingPath = rest.length ? `${canonicalSlug}/${rest.join("/")}` : canonicalSlug;
          rewriteUrl.pathname = `/${locale}/${MLM_PLAN_SEGMENT}/${remainingPath}`;
          return NextResponse.rewrite(rewriteUrl);
        }
      }
      // Rewrite translated blog subpage slug to canonical (e.g. /es/blog/principales-empresas-de-multinivel → /es/blog/top-mlm-companies)
      // Also handle case where 'blog' is translated (e.g. /zh/bo-ke/...)
      if (segments[2]) {
        // First resolve the first segment (blog) to get the pageId
        const resolvedSlug = getPageFromSlug(slug, locale) ?? slug;
        if (resolvedSlug === "blog") {
          const blogKey = getBlogSubpageKeyFromSlug(segments[2]);
          if (blogKey) {
            const rewriteUrl = request.nextUrl.clone();
            const rest = segments.slice(3);
            const remainingPath = rest.length ? `${blogKey}/${rest.join("/")}` : blogKey;
            rewriteUrl.pathname = `/${locale}/blog/${remainingPath}`;
            return NextResponse.rewrite(rewriteUrl);
          }
        }
      }
      // Redirect canonical (default-locale) slug to locale-specific slug (e.g. /es/emails → /es/correos-electronicos)
      const pageIdFromDefault = getPageFromSlug(slug, i18n.defaultLocale);
      if (pageIdFromDefault && locale !== i18n.defaultLocale) {
        const preferredSlug = getSlugFromPage(pageIdFromDefault, locale);
        if (preferredSlug && preferredSlug !== slug) {
          const redirectUrl = request.nextUrl.clone();
          const remainingPath = segments.slice(2).join("/");
          redirectUrl.pathname = `/${localeUrl}/${preferredSlug}${remainingPath ? `/${remainingPath}` : ""}`;
          return NextResponse.redirect(redirectUrl);
        }
      }
      const pageId = getPageFromSlug(slug, locale);
      // If slug is translated and maps to a page, rewrite to locale + canonical segment (pageId) so path matches static folder (e.g. /es/modulo-ecommerce → /es/ecommerce-module)
      if (pageId && pageId !== slug) {
        const rewriteUrl = request.nextUrl.clone();
        let remainingPath = segments.slice(2).join("/");
        // Under services: resolve translated service subpage slug to canonical (e.g. /es/servicios/desarrollo-opencart → .../services/opencart-development)
        if (pageId === "services" && segments[2]) {
          const serviceKey = getServiceSubpageKeyFromSlug(segments[2]);
          if (serviceKey) {
            const rest = segments.slice(3);
            remainingPath = rest.length ? `${serviceKey}/${rest.join("/")}` : serviceKey;
          }
        }
        rewriteUrl.pathname = `/${locale}/${pageId}${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.rewrite(rewriteUrl);
      }
    }
    if (rawLocaleSegment !== locale) {
      const rewriteUrl = request.nextUrl.clone();
      rewriteUrl.pathname = `/${locale}${segments.length > 1 ? `/${segments.slice(1).join("/")}` : ""}`;
      return NextResponse.rewrite(rewriteUrl);
    }
    return;
  }

  // Backend module slug first for non-localized top-level paths
  // (e.g. /email2, /correos-electronicos2 -> serve the matched locale/canonical module page with mid)
  if (segments.length === 1) {
    for (const locale of i18n.locales) {
      const resolvedModule = await resolveBackendModuleSlug(request, locale, segments[0]);
      if (resolvedModule) {
        const rewriteUrl = request.nextUrl.clone();
        rewriteUrl.pathname = `/${locale}/${resolvedModule.canonicalSlug}`;
        rewriteUrl.searchParams.set("mid", resolvedModule.moduleId);
        return NextResponse.rewrite(rewriteUrl);
      }
    }
    const canonicalFromDefault =
      getPageFromSlug(segments[0], i18n.defaultLocale) ??
      (isModulesSubpageSlug(segments[0]) ? segments[0] : null);
    if (canonicalFromDefault && isModulesSubpageSlug(canonicalFromDefault)) {
      const preferredSlug = await getPreferredBackendSlugForCanonical(
        request,
        i18n.defaultLocale,
        canonicalFromDefault
      );
      if (preferredSlug && preferredSlug !== segments[0]) {
        return NextResponse.redirect(new URL(`/${preferredSlug}`, request.url));
      }
    }
  }

  // Redirect common typos (e.g. /email-modules -> /en/emails)
  if (pathname === "/email-modules" || pathname === "/email-modules/") {
    return NextResponse.redirect(new URL("/en/emails", request.url));
  }
  // Redirect old ecommerce module slug to ecommerce-module
  if (pathname === "/ecommerce" || pathname === "/ecommerce/") {
    return NextResponse.redirect(new URL("/en/ecommerce-module", request.url));
  }
  // Redirect old compliance slug to compliance-modules
  if (pathname === "/compliance" || pathname === "/compliance/") {
    return NextResponse.redirect(new URL("/en/compliance-modules", request.url));
  }
  // Redirect short WooCommerce service URL (no locale) to full slug
  if (pathname === "/services/woocommerce-integration" || pathname === "/services/woocommerce-integration/") {
    return NextResponse.redirect(new URL("/en/services/woocommerce-integration-with-cloud-mlm-software", request.url));
  }
  // Redirect old /services/bitcoin-cryptocurrency-mlm-software (no locale) to top-level page
  if (pathname === "/services/bitcoin-cryptocurrency-mlm-software" || pathname === "/services/bitcoin-cryptocurrency-mlm-software/") {
    return NextResponse.redirect(new URL("/bitcoin-cryptocurrency-mlm-software", request.url));
  }
  // Redirect old /services/cryptocurrency-mlm-software (no locale) to top-level page
  if (pathname === "/services/cryptocurrency-mlm-software" || pathname === "/services/cryptocurrency-mlm-software/") {
    return NextResponse.redirect(new URL("/cryptocurrency-mlm-software", request.url));
  }
  // Check if pathname matches a translated slug for any locale
  if (segments[0] === MLM_PLAN_SEGMENT && segments[1]) {
    const backendPlan = await resolveBackendPlanSlug(request, i18n.defaultLocale, segments[1]);
    if (backendPlan) {
      const rewriteUrl = request.nextUrl.clone();
      const rest = segments.slice(2).join("/");
      rewriteUrl.pathname = `/en/${MLM_PLAN_SEGMENT}/${backendPlan.canonicalSlug}${rest ? `/${rest}` : ""}`;
      rewriteUrl.searchParams.set("pid", backendPlan.planId);
      return NextResponse.rewrite(rewriteUrl);
    }
  }
  let slug = segments[0];
  try {
    slug = decodeURIComponent(slug);
  } catch {
    // use as-is
  }
  if (slug) {
    for (const locale of i18n.locales) {
      const pageId = getPageFromSlug(slug, locale);
      if (pageId) {
        // Use locale-specific slug so path matches static folder (e.g. ticket-system -> ticket-system-module-for-mlm-software for en)
        const pathSegment = getSlugFromPage(pageId, locale as any) ?? pageId;
        const rewriteUrl = request.nextUrl.clone();
        const remainingPath = segments.slice(1).join("/");
        rewriteUrl.pathname = `/${locale}/${pathSegment}${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.rewrite(rewriteUrl);
      }
    }
  }

  // Default: add default locale prefix; resolve MLM plan second segment to canonical when present
  const locale = i18n.defaultLocale;
  const rewriteUrl = request.nextUrl.clone();
  let pathToUse = pathname === "/" ? "" : pathname;
  if (segments[0] === MLM_PLAN_SEGMENT && segments[1]) {
    const canonicalSlug = getPlanSubpageCanonicalFromSlug(segments[1]);
    if (canonicalSlug) {
      const rest = segments.slice(2);
      pathToUse = `/${MLM_PLAN_SEGMENT}/${canonicalSlug}${rest.length ? `/${rest.join("/")}` : ""}`;
    }
  }
  rewriteUrl.pathname = `/${locale}${pathToUse || pathname}`;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};



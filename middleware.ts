import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n-config";
import { getPageFromSlug, getSlugFromPage } from "@/lib/page-slugs";
import { getServiceSubpageKeyFromSlug } from "@/lib/services-subpage-slugs";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
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
  const hasLocale = segments.length > 0 && i18n.locales.includes(segments[0] as any);
  
  if (hasLocale) {
    if (segments.length > 1) {
      const locale = segments[0];
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
        redirectUrl.pathname = `/${locale}/ecommerce-module${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.redirect(redirectUrl);
      }
      // Redirect old compliance slug to compliance-modules
      if (slug === "compliance") {
        const redirectUrl = request.nextUrl.clone();
        const remainingPath = segments.slice(2).join("/");
        redirectUrl.pathname = `/${locale}/compliance-modules${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.redirect(redirectUrl);
      }
      // Redirect short WooCommerce slug to full service slug (e.g. /en/services/woocommerce-integration → .../woocommerce-integration-with-cloud-mlm-software)
      if (slug === "services" && segments[2] === "woocommerce-integration") {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = `/${locale}/services/woocommerce-integration-with-cloud-mlm-software`;
        return NextResponse.redirect(redirectUrl);
      }
      // Redirect old /services/bitcoin-cryptocurrency-mlm-software to top-level /bitcoin-cryptocurrency-mlm-software
      if (slug === "services" && segments[2] === "bitcoin-cryptocurrency-mlm-software") {
        const redirectUrl = request.nextUrl.clone();
        const bitcoinSlug = getSlugFromPage("bitcoin-cryptocurrency-mlm-software", locale as any) ?? "bitcoin-cryptocurrency-mlm-software";
        redirectUrl.pathname = `/${locale}/${bitcoinSlug}`;
        return NextResponse.redirect(redirectUrl);
      }
      // Redirect old /services/cryptocurrency-mlm-software to top-level (translated slug)
      if (slug === "services" && segments[2] === "cryptocurrency-mlm-software") {
        const redirectUrl = request.nextUrl.clone();
        const cryptoSlug = getSlugFromPage("cryptocurrency-mlm-software", locale as any) ?? "cryptocurrency-mlm-software";
        redirectUrl.pathname = `/${locale}/${cryptoSlug}`;
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
      // Redirect canonical (default-locale) slug to locale-specific slug (e.g. /es/emails → /es/correos-electronicos)
      const pageIdFromDefault = getPageFromSlug(slug, i18n.defaultLocale);
      if (pageIdFromDefault && locale !== i18n.defaultLocale) {
        const preferredSlug = getSlugFromPage(pageIdFromDefault, locale);
        if (preferredSlug && preferredSlug !== slug) {
          const redirectUrl = request.nextUrl.clone();
          const remainingPath = segments.slice(2).join("/");
          redirectUrl.pathname = `/${locale}/${preferredSlug}${remainingPath ? `/${remainingPath}` : ""}`;
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
    return;
  }

  // Redirect common typos (e.g. /email-modules -> /en/email-module)
  if (pathname === "/email-modules" || pathname === "/email-modules/") {
    return NextResponse.redirect(new URL("/en/email-module", request.url));
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
        // Rewrite to locale + canonical segment (pageId) so path matches static folder
        const rewriteUrl = request.nextUrl.clone();
        const remainingPath = segments.slice(1).join("/");
        rewriteUrl.pathname = `/${locale}/${pageId}${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.rewrite(rewriteUrl);
      }
    }
  }

  // Default: add default locale prefix
  const locale = i18n.defaultLocale;
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};

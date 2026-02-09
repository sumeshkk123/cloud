import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n-config";
import { getPageFromSlug, getSlugFromPage } from "@/lib/page-slugs";

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
      const slug = segments[1];
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
      // If slug is translated and maps to a page, rewrite to the page identifier
      if (pageId && pageId !== slug) {
        const rewriteUrl = request.nextUrl.clone();
        const remainingPath = segments.slice(2).join("/");
        rewriteUrl.pathname = `/${locale}/${pageId}${remainingPath ? `/${remainingPath}` : ""}`;
        return NextResponse.rewrite(rewriteUrl);
      }
    }
    return;
  }

  // Check if pathname matches a translated slug for any locale
  const slug = segments[0];
  if (slug) {
    for (const locale of i18n.locales) {
      const pageId = getPageFromSlug(slug, locale);
      if (pageId) {
        // Found a translated slug, rewrite to locale + page identifier
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

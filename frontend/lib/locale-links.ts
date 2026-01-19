import { siteBaseConfig, supportedLocales, type SupportedLocale } from "@/config/site";
import { i18n } from "@/i18n-config";

const ORIGIN = siteBaseConfig.url.replace(/\/$/, "");

export type ResolvedHref = {
  href: string;
  external: boolean;
};

export function resolveHref(rawHref: string | null | undefined, locale: SupportedLocale): ResolvedHref {
  if (!rawHref || rawHref.trim() === "") {
    return { href: buildLocalizedPath("/", locale), external: false };
  }

  const isAbsolute = /^https?:\/\//i.test(rawHref);

  if (isAbsolute) {
    try {
      const url = new URL(rawHref);
      if (normalizeHost(url.origin) === normalizeHost(ORIGIN)) {
        return {
          href: buildLocalizedPath(url.pathname + url.search + url.hash, locale),
          external: false
        };
      }
      return { href: rawHref, external: true };
    } catch {
      return { href: rawHref, external: true };
    }
  }

  const base = new URL(rawHref, `${ORIGIN}/`);
  return { href: buildLocalizedPath(base.pathname + base.search + base.hash, locale), external: false };
}

export function buildLocalizedPath(path: string, locale: SupportedLocale): string {
  const { pathname, search, hash } = normalizePath(path);
  const stripped = stripLocaleFromPath(pathname);
  const normalized = stripped === "/" ? "" : stripped;
  if (locale === (i18n.defaultLocale as SupportedLocale)) {
    const basePath = normalized === "" ? "/" : normalized;
    return `${basePath}${search}${hash}`;
  }
  return `/${locale}${normalized}${search}${hash}`;
}

export function parseLocaleFromHref(href: string): SupportedLocale | null {
  try {
    const url = /^https?:\/\//i.test(href) ? new URL(href) : new URL(href, `${ORIGIN}/`);
    const segments = url.pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      return i18n.defaultLocale as SupportedLocale;
    }
    const maybeLocale = segments[0];
    if (supportedLocales.includes(maybeLocale as SupportedLocale)) {
      return maybeLocale as SupportedLocale;
    }
    return i18n.defaultLocale as SupportedLocale;
  } catch {
    // ignore
  }
  return null;
}

function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && supportedLocales.includes(segments[0] as SupportedLocale)) {
    segments.shift();
  }
  return `/${segments.join("/")}`.replace(/\/+/g, "/");
}

function normalizePath(path: string) {
  try {
    const url = new URL(path, `${ORIGIN}/`);
    return {
      pathname: url.pathname,
      search: url.search,
      hash: url.hash
    };
  } catch {
    return { pathname: path, search: "", hash: "" };
  }
}

function normalizeHost(host: string) {
  return host.replace(/\/$/, "").toLowerCase();
}

"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { supportedLocales, type SupportedLocale } from "@/config/site";
import { buildLocalizedPath, getModulesUrlLocale } from "@/lib/locale-links";
import { getModuleSlugFromTitleOrId, isModulesSubpageSlug } from "@/lib/modules-subpage-slugs";
import { getPageFromSlug } from "@/lib/page-slugs";
import { MLM_PLAN_SEGMENT } from "@/lib/mlm-plan-subpage-slugs";
import type { LanguageOption } from "@/types/global";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: SupportedLocale;
  label?: string | null;
  ariaLabel?: string | null;
  options: LanguageOption[];
};

type ModuleRow = {
  id: string;
  title: string;
  slug?: string | null;
  image?: string | null;
  showOnHomePage?: boolean;
};

// Flag emoji mapping for each locale (must match SupportedLocale: en, es, fr, it, de, pt, zh)
const LOCALE_FLAGS: Record<SupportedLocale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  it: "🇮🇹",
  de: "🇩🇪",
  pt: "🇵🇹",
  zh: "🇨🇳",
};

export function LanguageSwitcher({ locale, label, ariaLabel, options }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentOption = options.find((opt) => opt.locale === locale);

  // Memoize path calculation for faster switching
  const handleLanguageChange = useCallback(async (nextLocale: SupportedLocale) => {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }

    // Fast path calculation - optimize by using window.location for more accurate path
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : pathname;
    const segments = currentPath.split("/").filter(Boolean);
    const firstSegment = segments[0];
    const normalizedLocalePrefix =
      firstSegment === "pt-pt" ? "pt" : firstSegment === "zh-hans" ? "zh" : firstSegment;
    const hasLocale =
      segments.length > 0 &&
      supportedLocales.includes(normalizedLocalePrefix as SupportedLocale);
    const sourceLocale = hasLocale
      ? (normalizedLocalePrefix as SupportedLocale)
      : locale;
    const pathWithoutLocale = hasLocale ? segments.slice(1) : segments;
    const normalizedPath = pathWithoutLocale.length ? `/${pathWithoutLocale.join("/")}` : "/";
    
    let nextPath = buildLocalizedPath(normalizedPath, nextLocale);

    // Module custom slug translation across locales.
    if (pathWithoutLocale.length === 1 && pathWithoutLocale[0]) {
      const currentSlug = decodeURIComponent(pathWithoutLocale[0]).toLowerCase();
      try {
        const [sourceRes, targetRes] = await Promise.all([
          fetch(`/api/modules?locale=${sourceLocale}`, { cache: "no-store" }),
          fetch(`/api/modules?locale=${nextLocale}`, { cache: "no-store" }),
        ]);

        if (sourceRes.ok && targetRes.ok) {
          const sourceModulesRaw = await sourceRes.json();
          const targetModulesRaw = await targetRes.json();
          const englishModulesRaw = nextLocale === "en"
            ? targetModulesRaw
            : sourceLocale === "en"
              ? sourceModulesRaw
              : await (await fetch(`/api/modules?locale=en`, { cache: "no-store" })).json();
          const sourceModules: ModuleRow[] = Array.isArray(sourceModulesRaw) ? sourceModulesRaw : [];
          const targetModules: ModuleRow[] = Array.isArray(targetModulesRaw) ? targetModulesRaw : [];
          const englishModules: ModuleRow[] = Array.isArray(englishModulesRaw) ? englishModulesRaw : [];
          const canonicalFromPath =
            getPageFromSlug(currentSlug, sourceLocale) ??
            getPageFromSlug(currentSlug, "en");
          const canonicalFromUrl =
            canonicalFromPath && isModulesSubpageSlug(canonicalFromPath) ? canonicalFromPath : null;

          const resolveCanonical = (m: ModuleRow, moduleLocale: SupportedLocale): string | null => {
            const explicit = String(m.slug || "").trim().toLowerCase();
            if (explicit && isModulesSubpageSlug(explicit)) return explicit;
            if (explicit) {
              const explicitBase = explicit.replace(/[-_]?(\d+)$/, "");
              const fromExplicitText = getModuleSlugFromTitleOrId(explicitBase, null);
              if (fromExplicitText && isModulesSubpageSlug(fromExplicitText)) return fromExplicitText;
              const mappedFromExplicit =
                getPageFromSlug(explicitBase, moduleLocale) ??
                getPageFromSlug(explicitBase, "en");
              if (mappedFromExplicit && isModulesSubpageSlug(mappedFromExplicit)) return mappedFromExplicit;
            }

            const direct = getModuleSlugFromTitleOrId(m.title, m.id);
            if (direct && isModulesSubpageSlug(direct)) return direct;

            const image = String(m.image || "");
            const show = Boolean(m.showOnHomePage ?? false);
            const enMatch = englishModules.find(
              (em) =>
                String(em.image || "") === image &&
                Boolean(em.showOnHomePage ?? false) === show
            );
            if (!enMatch) return null;

            const enDirect = getModuleSlugFromTitleOrId(enMatch.title, enMatch.id);
            if (enDirect && isModulesSubpageSlug(enDirect)) return enDirect;

            const enExplicit = String(enMatch.slug || "").trim().toLowerCase();
            return enExplicit && isModulesSubpageSlug(enExplicit) ? enExplicit : null;
          };

          const sourceMatch = sourceModules.find((m) => {
            const explicit = String(m.slug || "").trim().toLowerCase();
            const canonical = resolveCanonical(m, sourceLocale);
            return (
              explicit === currentSlug ||
              canonical === currentSlug ||
              (canonicalFromUrl != null && canonical === canonicalFromUrl)
            );
          });

          const canonical =
            (sourceMatch ? resolveCanonical(sourceMatch, sourceLocale) : null) ?? canonicalFromUrl;

          if (canonical) {
            const targetCandidates = targetModules.filter(
              (m) => resolveCanonical(m, nextLocale) === canonical
            );
            const sourceImage = String(sourceMatch?.image || "");
            const sourceShow = Boolean(sourceMatch?.showOnHomePage ?? false);
            const familyCandidates = sourceMatch
              ? targetModules.filter(
                  (m) =>
                    String(m.image || "") === sourceImage &&
                    Boolean(m.showOnHomePage ?? false) === sourceShow
                )
              : [];
            const targetMatch =
              targetCandidates.find((m) => String(m.slug || "").trim() !== "") ??
              targetCandidates[0] ??
              familyCandidates.find((m) => String(m.slug || "").trim() !== "") ??
              familyCandidates[0];
            const targetExplicit = targetMatch ? String(targetMatch.slug || "").trim() : "";
            const targetSlug = targetExplicit || canonical;
            // Use backend slug path directly for module pages to avoid static-slug remapping.
            const moduleLocale = getModulesUrlLocale(nextLocale);
            nextPath =
              nextLocale === "en"
                ? `/${targetSlug}`
                : `/${moduleLocale}/${targetSlug}`;
          }
        }
      } catch {
        // Fallback to default localized path behavior.
      }
    }

    // MLM plan detail pages: use backend slug in target locale first.
    if (pathWithoutLocale.length >= 2 && pathWithoutLocale[0] === MLM_PLAN_SEGMENT) {
      const sourcePlanSlug = decodeURIComponent(pathWithoutLocale[1] || "").trim();
      if (sourcePlanSlug) {
        try {
          const planRes = await fetch(
            `/api/mlm-plans/match?sourceSlug=${encodeURIComponent(sourcePlanSlug)}&sourceLocale=${encodeURIComponent(sourceLocale)}&targetLocale=${encodeURIComponent(nextLocale)}`,
            { cache: "no-store" }
          );
          if (planRes.ok) {
            const match = await planRes.json();
            if (match?.matched && typeof match?.slug === "string" && match.slug.trim()) {
              const rest = pathWithoutLocale.slice(2).join("/");
              const targetPath = `/${MLM_PLAN_SEGMENT}/${match.slug.trim()}${rest ? `/${rest}` : ""}`;
              nextPath = buildLocalizedPath(targetPath, nextLocale);
            }
          }
        } catch {
          // fallback to default localized path behavior
        }
      }
    }

    // MLM company detail pages need translated company slug when switching locale:
    // /es/mlm-companies/4life-investigacion instead of preserving source slug.
    if (pathWithoutLocale[0] === "mlm-companies" && pathWithoutLocale[1]) {
      try {
        const {
          getMlmCompanySlugs,
          resolveCompanySlug,
          getTranslatedCompanySlug,
        } = await import("@/lib/mlm-companies");

        const sourceCompanySlug = pathWithoutLocale[1];
        const allCompanySlugs = new Set(getMlmCompanySlugs());
        let canonicalCompanySlug = sourceCompanySlug;

        if (!allCompanySlugs.has(sourceCompanySlug)) {
          for (const candidateLocale of supportedLocales) {
            const resolved = resolveCompanySlug(sourceCompanySlug, candidateLocale);
            if (allCompanySlugs.has(resolved)) {
              canonicalCompanySlug = resolved;
              break;
            }
          }
        }

        const translatedCompanySlug = getTranslatedCompanySlug(canonicalCompanySlug, nextLocale);
        nextPath = buildLocalizedPath(`/mlm-companies/${translatedCompanySlug}`, nextLocale);
      } catch {
        // Fallback to default localized path behavior.
      }
    }

    setIsOpen(false);

    // Navigate immediately - optimizations in buildLocalizedPath make this fast
    router.push(nextPath);
  }, [locale, pathname, router]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div className="relative inline-flex items-center" ref={dropdownRef}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={ariaLabel ?? "Select language"}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-2 rounded-full border border-border/50 bg-background/90 min-w-[88px] px-4 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all duration-200",
          "hover:border-primary hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "sm:min-w-[100px] sm:px-5 sm:py-2",
          "cursor-pointer",
          isOpen && "border-primary bg-background ring-2 ring-primary/20"
        )}
      >
        <span className="text-base leading-none">{LOCALE_FLAGS[locale]}</span>
        <span className="hidden sm:inline text-[11px] sm:text-[12px] uppercase tracking-wide">
          {currentOption?.label || locale.toUpperCase()}
        </span>
        <ChevronDown
          className={cn(
            "h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            role="menu"
            aria-label="Language options"
            className={cn(
              "absolute right-0 mt-2 z-[9999] min-w-[180px] rounded-lg border border-border/50 bg-background shadow-lg backdrop-blur-sm overflow-hidden",
              "animate-in fade-in-0 zoom-in-95 duration-200"
            )}
            style={{ top: "100%" }}
          >
            <div className="py-1">
              {options.map((option) => {
                const isSelected = option.locale === locale;
                return (
                  <button
                    key={option.locale}
                    type="button"
                    role="menuitem"
                    onClick={() => handleLanguageChange(option.locale)}
                    aria-current={isSelected ? "true" : undefined}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer",
                      isSelected
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base leading-none" aria-hidden="true">
                          {LOCALE_FLAGS[option.locale]}
                        </span>
                        <span>{option.label}</span>
                      </div>
                      {isSelected && (
                        <svg
                          className="h-4 w-4 text-primary flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

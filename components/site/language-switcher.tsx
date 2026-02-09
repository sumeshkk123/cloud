"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { supportedLocales, type SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { LanguageOption } from "@/types/global";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: SupportedLocale;
  label?: string | null;
  ariaLabel?: string | null;
  options: LanguageOption[];
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
  const handleLanguageChange = useCallback((nextLocale: SupportedLocale) => {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }

    // Fast path calculation - optimize by using window.location for more accurate path
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : pathname;
    const segments = currentPath.split("/").filter(Boolean);
    const hasLocale = segments.length > 0 && supportedLocales.includes(segments[0] as SupportedLocale);
    const pathWithoutLocale = hasLocale ? segments.slice(1) : segments;
    const normalizedPath = pathWithoutLocale.length ? `/${pathWithoutLocale.join("/")}` : "/";
    
    // Pre-calculate path for instant navigation
    const nextPath = buildLocalizedPath(normalizedPath, nextLocale);

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
          "flex items-center gap-2 rounded-full border border-border/50 bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all duration-200",
          "hover:border-primary hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "sm:px-4 sm:py-2",
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
              "absolute right-0 mt-2 z-[9999] min-w-[160px] rounded-lg border border-border/50 bg-background shadow-lg backdrop-blur-sm overflow-hidden",
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

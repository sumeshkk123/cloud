"use client";

import { useTransition } from "react";
import type { ChangeEvent } from "react";
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

export function LanguageSwitcher({ locale, label, ariaLabel, options }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as SupportedLocale;
    if (nextLocale === locale) return;

    const segments = pathname.split("/").filter(Boolean);
    const hasLocale = segments.length > 0 && supportedLocales.includes(segments[0] as SupportedLocale);
    const pathWithoutLocale = hasLocale ? segments.slice(1) : segments;
    const normalizedPath = pathWithoutLocale.length ? `/${pathWithoutLocale.join("/")}` : "/";
    const nextPath = buildLocalizedPath(normalizedPath, nextLocale);

    startTransition(() => {
      router.push(nextPath);
    });
  };

  return (
    <div className="relative inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
      {label ? (
        <span className="hidden sm:inline" aria-hidden>
          {label}
        </span>
      ) : null}
      <div className="relative">
        <span className="sr-only">{ariaLabel ?? "Select language"}</span>
        <select
          className={cn(
            'peer appearance-none rounded-full border border-border/50 bg-background/90 px-3 pr-9 py-1.5 text-[11px] uppercase tracking-[0.28em] text-foreground shadow-sm transition-all duration-150 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
            'sm:px-4 sm:py-2 sm:text-[12px]',
            isPending && 'opacity-70'
          )}
          value={locale}
          onChange={handleChange}
          aria-label={ariaLabel ?? 'Select language'}
        >
          {options.map((option) => (
            <option key={option.locale} value={option.locale}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground transition peer-focus:text-primary" />
      </div>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import type { SupportedLocale } from "@/config/site";
import type { CmsLink, LanguageOption, NavItem } from "@/types/global";
import { SiteHeader } from "./header";
import type { Locale } from "@/i18n-config";

type ConditionalHeaderProps = {
  locale: Locale;
  siteName: string;
  navItems: NavItem[];
  headerCta?: CmsLink | null;
  languageLabel?: string | null;
  languageAriaLabel?: string | null;
  languageOptions: LanguageOption[];
};

export function ConditionalHeader(props: ConditionalHeaderProps) {
  const pathname = usePathname();
  
  // Check if we're on the homepage (just /[lang] or /[lang]/)
  const pathSegments = pathname.split("/").filter(Boolean);
  const isHomepage = pathSegments.length <= 1; // Just locale or empty
  
  // Don't render header on homepage - it will be in HeroSection
  if (isHomepage) {
    return null;
  }
  
  return <SiteHeader {...props} />;
}

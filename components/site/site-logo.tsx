"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { SupportedLocale } from "@/config/site";

interface SiteLogoProps {
  locale: SupportedLocale;
  siteName: string;
  className?: string;
}

export function SiteLogo({ locale, siteName, className }: SiteLogoProps) {
  const { theme } = useTheme();

  // Use different logos for light and dark themes
  const logoSrc = theme === "dark" 
    ? "/cloud-mlm-white-logo.webp"  // Dark theme logo
    : "/cloudmlm-logo.webp";         // Light theme logo

  return (
    <Link
      href={buildLocalizedPath("/", locale)}
      className={`flex items-center gap-2 ${className || ""}`}
      aria-label={siteName}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logo uses img for theme switching without revalidation */}
      <img
        src={logoSrc}
        alt={siteName}
        className="h-9 w-auto object-contain transition-opacity duration-200"
        width={128}
        height={36}
      />
    </Link>
  );
}

"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import { getCountryIsoFromSlug } from "@/lib/country-slug-to-iso";

const FLAG_CDN_BASE = "https://flagcdn.com";
const FLAG_SIZE = "w320";

export interface CountryFlagProps {
  countrySlug: string;
  countryName: string;
  /** Size of the flag (image container or icon). */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeToDimensions = {
  sm: { width: 80, height: 60 },
  md: { width: 120, height: 90 },
  lg: { width: 200, height: 150 },
};

export function CountryFlag({
  countrySlug,
  countryName,
  size = "lg",
  className = "",
}: CountryFlagProps) {
  const iso = getCountryIsoFromSlug(countrySlug);
  const dimensions = sizeToDimensions[size];

  if (iso) {
    const src = `${FLAG_CDN_BASE}/${FLAG_SIZE}/${iso.toLowerCase()}.png`;
    return (
      <span
        className={`relative inline-block overflow-hidden rounded-lg border border-border/60 bg-muted/30 ${className}`}
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <Image
          src={src}
          alt={`Flag of ${countryName}`}
          fill
          className="object-cover"
          sizes={`${dimensions.width}px`}
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl bg-primary/10 text-primary ${size === "sm" ? "h-16 w-16" : size === "md" ? "h-24 w-24" : "h-32 w-32"} ${className}`}
      aria-hidden
    >
      <Globe className={size === "sm" ? "h-8 w-8" : size === "md" ? "h-12 w-12" : "h-16 w-16"} />
    </span>
  );
}

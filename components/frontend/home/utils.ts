import type { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import * as RemixIcon from "@remixicon/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { ComponentType } from "react";
import React from "react";
import {
  Bitcoin,
  Building2,
  CalendarCheck,
  CheckCircle,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Coins,
  Gauge,
  Globe2,
  Headset,
  HeartPulse,
  Layers,
  Plus,
  ArrowRight,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Server,
  Store,
  Timer,
  Users,
  Workflow,
  ArrowUpRight,
  Play,
  MessageSquare
} from "lucide-react";
import type { Locale } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { i18n } from "@/i18n-config";

// Register FontAwesome icons
library.add(fas);

export const ICON_MAP: Record<string, LucideIcon> = {
  Bitcoin,
  Building2,
  CalendarCheck,
  CheckCircle,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Coins,
  Gauge,
  Globe2,
  Headset,
  HeartPulse,
  Layers,
  Plus,
  ArrowRight,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Server,
  Store,
  Timer,
  Users,
  Workflow,
  ArrowUpRight,
  Play,
  MessageSquare
};

/**
 * Resolves icon from backend format: "type:iconName" (e.g., "lucide:Home", "remix:RiHomeLine", "fontawesome:faHome")
 * Falls back to Lucide icon if format is not recognized
 */
export function resolveIcon(iconValue: string | null | undefined, fallback: LucideIcon): ComponentType<{ className?: string }> {
  if (!iconValue) return fallback;

  const trimmedValue = String(iconValue).trim();
  if (!trimmedValue) return fallback;

  // Normalize: if no prefix, assume lucide
  const normalizedValue = trimmedValue.includes(':') ? trimmedValue : `lucide:${trimmedValue}`;

  // Check if it's in the format "type:iconName"
  if (normalizedValue.includes(':')) {
    const [type, iconName] = normalizedValue.split(':');

    if (type === 'lucide') {
      const IconComponent = (LucideIcons as any)[iconName] as ComponentType<{ className?: string }> | undefined;
      if (IconComponent) {
        return IconComponent;
      }
    } else if (type === 'remix') {
      const IconComponent = (RemixIcon as any)[iconName] as ComponentType<{ className?: string }> | undefined;
      if (IconComponent) {
        return IconComponent;
      }
    } else if (type === 'fontawesome') {
      // FontAwesome icons need special handling - try multiple variations
      const iconNameClean = iconName.replace(/^fa/, '');
      // Try various naming conventions that FontAwesome uses
      const variations = [
        `fa${iconNameClean}`, // Original with fa prefix (e.g., faPersonChalkboard)
        `fa${iconNameClean.charAt(0).toUpperCase() + iconNameClean.slice(1)}`, // First letter uppercase
        `fa${iconNameClean.charAt(0).toUpperCase() + iconNameClean.slice(1).toLowerCase()}`, // First uppercase, rest lowercase
        iconName, // Original name as-is
        `fa${iconName}`, // Original name with fa prefix
      ];

      for (const key of variations) {
        if (fas[key as keyof typeof fas]) {
          // Return a component that renders FontAwesome icon using React.createElement
          return (({ className }: { className?: string }) => {
            return React.createElement(FontAwesomeIcon, { icon: fas[key as keyof typeof fas], className });
          }) as ComponentType<{ className?: string }>;
        }
      }
    }
  }

  // Try as Lucide icon name (backward compatibility - without prefix)
  if (ICON_MAP[trimmedValue]) {
    return ICON_MAP[trimmedValue];
  }

  // Try to find in Lucide icons dynamically (without prefix)
  const LucideIconComponent = (LucideIcons as any)[trimmedValue] as ComponentType<{ className?: string }> | undefined;
  if (LucideIconComponent) {
    return LucideIconComponent;
  }

  return fallback;
}

export function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export function localizedHref(locale: Locale, path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return buildLocalizedPath(normalized, locale as SupportedLocale);
}

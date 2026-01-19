import type { LucideIcon } from "lucide-react";
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

export function resolveIcon(name: string, fallback: LucideIcon): LucideIcon {
  return ICON_MAP[name] ?? fallback;
}

export function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export function localizedHref(locale: Locale, path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return buildLocalizedPath(normalized, locale as SupportedLocale);
}

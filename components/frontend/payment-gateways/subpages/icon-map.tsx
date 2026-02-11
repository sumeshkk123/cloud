"use client";

import type { ComponentType } from "react";
import { BarChart3, Building2, Layers3, Map, Signal } from "lucide-react";
import { Bank, ChartLineUp, GlobeSimple, ShieldCheck, UsersThree } from "@phosphor-icons/react";

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  BarChart3,
  Building2,
  Signal,
  Layers3,
  Map,
  Bank,
  ChartLineUp,
  GlobeSimple,
  ShieldCheck,
  UsersThree,
};

const DEFAULT_ICON = BarChart3;

export function getPaymentGatewayCountryIcon(key: string): ComponentType<{ className?: string }> {
  return ICON_MAP[key] ?? DEFAULT_ICON;
}

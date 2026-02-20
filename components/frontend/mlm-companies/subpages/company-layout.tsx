import * as React from "react";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { Home, Building2, ChevronRight } from "lucide-react";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyLayoutProps {
  content: MlmCompanyContent;
  locale: Locale;
  children: React.ReactNode;
}

export function MlmCompanyLayout({ content, locale, children }: MlmCompanyLayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

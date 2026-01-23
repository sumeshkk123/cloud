'use client';

import type { Locale } from "@/i18n-config";
import { Clock, Globe, Calendar, Users, Mail, Phone } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { getContactContent } from "@/lib/contact";

interface BusinessInfo {
  icon: typeof Clock;
  label: string;
  value: string;
  detail?: string;
}

export function ContactBusinessInfoSection({ locale }: { locale: Locale }) {
  const content = getContactContent(locale);
  const t = content.businessInfoSection;

  const businessInfo: BusinessInfo[] = [
    {
      icon: Clock,
      label: t.workingHours.label,
      value: t.workingHours.value,
      detail: t.workingHours.detail
    },
    {
      icon: Globe,
      label: t.timeZones.label,
      value: t.timeZones.value,
      detail: t.timeZones.detail
    },
    {
      icon: Calendar,
      label: t.responseTime.label,
      value: t.responseTime.value,
      detail: t.responseTime.detail
    },
    {
      icon: Users,
      label: t.supportTeam.label,
      value: t.supportTeam.value,
      detail: t.supportTeam.detail
    },
    {
      icon: Mail,
      label: t.emailSupport.label,
      value: t.emailSupport.value,
      detail: t.emailSupport.detail
    },
    {
      icon: Phone,
      label: t.phoneSupport.label,
      value: t.phoneSupport.value,
      detail: t.phoneSupport.detail
    }
  ];

  return (
    <Section variant="default" padding="lg" className="border-y border-border/60 bg-muted/20 dark:bg-slate-900/40" containerClassName="space-y-12">
      <SectionTitle
        badge={t.badge}
        heading={t.heading}
        description={t.description}
        maxWidth="3xl"
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {businessInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <div key={index} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="flex-1 space-y-1">
                <Typography variant="small" className="font-semibold text-muted-foreground uppercase tracking-wide">
                  {info.label}
                </Typography>
                <Typography as="h3" variant="h6" className="font-semibold">
                  {info.value}
                </Typography>
                {info.detail && (
                  <Typography variant="small" textColor="muted">
                    {info.detail}
                  </Typography>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

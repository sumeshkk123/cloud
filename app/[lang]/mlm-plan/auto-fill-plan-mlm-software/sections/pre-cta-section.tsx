"use client";

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { CTA_POINTS, CHECKLIST_ITEMS } from "../content";

interface PreCtaSectionProps {
  plansHref: string;
}

const boxClassName =
  "grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5";

export function PreCtaSection({ plansHref }: PreCtaSectionProps) {
  return (
    <Section padding="xl" variant="gradient" containerClassName="space-y-0">
      <div className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
        <div className={boxClassName}>
          <Typography variant="p" textColor="muted">
            Partner with Cloud MLM Software to launch a compliant Auto Fill plan that excites the field, satisfies finance, and protects your brand.
          </Typography>
          <BulletList items={CTA_POINTS} />
          <Typography variant="small" textColor="muted">
            Want to compare additional models? Visit our{" "}
            <Link href={plansHref} className="text-primary underline underline-offset-4">
              MLM plan library
            </Link>{" "}
            for companion calculators and design guidance.
          </Typography>
        </div>
        <div className={boxClassName}>
          <Typography variant="h5" className="text-lg">
            Launch readiness checklist
          </Typography>
          <BulletList items={CHECKLIST_ITEMS.map((item) => item.text)} variant="compact" />
        </div>
      </div>
    </Section>
  );
}

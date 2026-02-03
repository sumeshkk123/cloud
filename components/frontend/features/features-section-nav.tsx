'use client';

import { Section } from "@/components/ui/section";
import Link from "next/link";

type FeatureSectionNavItem = {
  label: string;
  href: string;
};

interface FeaturesSectionNavProps {
  items: FeatureSectionNavItem[];
}

export function FeaturesSectionNav({ items }: FeaturesSectionNavProps) {
  return (
    <Section variant="primary" padding="md" aria-label="Feature section navigation" className="relative isolate !overflow-visible">
      {/* Animated mesh gradient background - like home page */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      </div>

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative container z-10">
        <div className="flex flex-wrap justify-center gap-3 rounded-full border border-border/60 bg-background/70 px-6 py-4 shadow-sm">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-full border border-border/50 px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

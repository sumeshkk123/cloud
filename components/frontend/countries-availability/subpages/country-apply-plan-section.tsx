"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

export interface CountryApplyPlanSectionProps {
  plansHref: string;
  badge: string;
  heading: string;
  description: string;
  imageAlt: string;
  linkText?: string | null;
}

export function CountryApplyPlanSection({
  plansHref,
  badge,
  heading,
  description,
  imageAlt,
  linkText,
}: CountryApplyPlanSectionProps) {
  return (
    <Section variant="gradient" padding="lg">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="space-y-6">
            <SectionTitle
              badge={badge}
              heading={heading}
              description={description}
              centered={false}
              maxWidth="full"
              headingAs="h2"
            />

          </div>
          <div className="relative min-h-[320px]">
            <Image
              src="/images/dashboard-deign-dark.webp"
              alt={imageAlt}
              fill
              className="w-full h-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

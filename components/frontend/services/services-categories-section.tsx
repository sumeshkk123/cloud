import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

type ServiceCategory = {
  title: string;
  description: string;
  bullets: string[];
  icon: ComponentType<{ className?: string }>;
  href?: string;
};

interface ServicesCategoriesSectionProps {
  categories: ServiceCategory[];
}

export function ServicesCategoriesSection({ categories }: ServicesCategoriesSectionProps) {
  return (
    <Section padding="lg" variant="primary" containerClassName="space-y-10">
      <SectionTitle
        badge="Practices"
        heading="Service practices that meet every stage of growth"
        description="Mix and match consulting, engineering, and managed support to deliver programs that fit your compensation plan, regions, and customer experience goals."
        maxWidth="3xl"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <service.icon className="h-6 w-6" aria-hidden />
            </span>
            <Typography as="h3" variant="h4" className="font-semibold">
              {service.title}
            </Typography>
            <Typography variant="p" textColor="muted" className="text-sm">
              {service.description}
            </Typography>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

          </article>
        ))}
      </div>
    </Section>
  );
}

import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";

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
    <Section variant="primary" padding="xl" className="relative isolate !overflow-visible">
      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative container z-10 space-y-16">
        {/* Header */}
        <SectionTitle
          badge="Practices"
          heading="Service practices that meet every stage of growth"
          description="Mix and match consulting, engineering, and managed support to deliver programs that fit your compensation plan, regions, and customer experience goals."
          centered={true}
          maxWidth="3xl"
        />

        {/* Service Categories */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-3">
          {categories.map((service) => (
            <Card key={service.title} className="p-4">
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <service.icon className="h-7 w-7" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <Typography as="h5" variant="h5">
                        {service.title}
                      </Typography>
                      <Typography as="p" variant="p" textColor="muted" className="mt-2">
                        {service.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <BulletList items={service.bullets} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

interface AboutCompanyOfferingsSectionProps {
  locale: Locale;
  contactHref: string;
  servicesHref: string;
}

export function AboutCompanyOfferingsSection({ locale, contactHref, servicesHref }: AboutCompanyOfferingsSectionProps) {
  const content = getAboutCompanyContent(locale);
  const partners = content.partnersReliedOn;
  const deliver = content.deliver;
  const tech = content.technologyMeetPeople;
  return (
    <Section variant="gradient" padding="lg">
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-emerald-100/50 p-8 shadow-lg shadow-primary/5",
              "dark:from-primary/15 dark:via-slate-900/80 dark:to-emerald-500/10 dark:shadow-none dark:ring-1 dark:ring-primary/20"
            )}
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative space-y-4">

              <Typography as="h3" variant="h4" className="font-bold leading-tight text-foreground">
                {partners.heading}
              </Typography>
              <BulletList
                items={partners.points}
                className="[&_.rounded-full]:!bg-primary/10 [&_.rounded-full]:!text-primary [&_span:last-child]:text-foreground/90"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="space-y-3">
              <Badge variant="default">{deliver.badge}</Badge>
              <CardTitle>{deliver.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <BulletList items={deliver.points} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-4">
              <Typography as="h3" variant="h4" className="font-bold leading-tight text-foreground">
                {tech.heading}
              </Typography>
              <Typography as="p" variant="p" textColor="muted">
                {tech.description}
              </Typography>
            </CardHeader>
            <CardFooter className="flex flex-wrap gap-3 pt-0">
              <Button asChild variant="default">
                <Link href={servicesHref}>
                  {tech.discoverServicesText}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={contactHref}>
                  {tech.scheduleCallText}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  );
}

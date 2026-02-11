"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { CONTINENTS } from "@/lib/countries-by-continent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type CountriesByContinentAccordionProps = {
  /** Base path for country links (e.g. /en/mlm-software-availability-across-countries). */
  basePath: string;
  /** Optional section title. */
  sectionTitle?: string;
  /** Optional section description. */
  sectionDescription?: string;
  /** Optional badge above the title (e.g. "By region"). */
  badge?: string | null;
  /** Label for country count (e.g. "countries"). */
  countriesCountLabel?: string;
  /** Translated continent names by id (e.g. { "europe": "Europe" }). */
  continentNames?: Record<string, string>;
  className?: string;
};

export function CountriesByContinentAccordion({
  basePath,
  sectionTitle = "MLM Software availability by country or region",
  sectionDescription = "Learn more about MLM Software availability in each country or region",
  badge,
  countriesCountLabel = "countries",
  continentNames,
  className,
}: CountriesByContinentAccordionProps) {
  const base = basePath.replace(/\/$/, "");
  return (
    <section className={cn("space-y-8", className)}>
      <SectionTitle
        badge={badge ?? undefined}
        heading={sectionTitle}
        description={sectionDescription}
        centered={false}
        maxWidth="3xl"
        headingAs="h2"
      />

      <Accordion type="multiple" defaultValue={[]} className="space-y-3">
        {CONTINENTS.map((continent) => {
          const continentName = continentNames?.[continent.id] ?? continent.name;
          return (
          <AccordionItem
            key={continent.id}
            value={continent.id}
            className={cn(
              "group rounded-2xl border border-border/60 bg-card/50 shadow-sm overflow-hidden",
              "transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:bg-card"
            )}
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/30 [&>span]:shrink-0">
              <span className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPin className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
                </span>
                <span className="flex flex-col items-start gap-0.5 text-left">
                  <Typography as="span" variant="h5" className="font-semibold text-foreground">
                    {continentName}
                  </Typography>
                  <Typography as="span" variant="muted" className="text-xs">
                    {continent.countries.length} {countriesCountLabel}
                  </Typography>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 pt-0">
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {continent.countries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`${base}/${country.slug}`}
                    className={cn(
                      "group/link flex items-center justify-between gap-2 rounded-xl border border-border/50 bg-muted/20 px-4 py-3",
                      "text-foreground transition-all duration-200",
                      "hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm"
                    )}
                  >
                    <Typography as="span" variant="small" className="font-medium">
                      {country.name}
                    </Typography>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:text-primary" aria-hidden />
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

'use client';

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import Link from "next/link";
import { Package, Code } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { IndustryCard } from "@/components/frontend/common/industry-card";
import { resolveIcon, localizedHref } from "./utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { Section } from "@/components/ui/section";
import type { SupportedLocale } from "@/config/site";
import { getIndustriesContent } from "@/lib/industries";

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface IndustrySolution {
  title: string;
  description: string;
  icon: string | null;
  href: string;
  showOnHomePage: boolean;
}

const MAX_ITEMS_HOME_PAGE = 6;

export function IndustriesSection({ locale, data }: { locale: Locale; data: HomepageContent["industrySection"] }) {
  const [allSolutions, setAllSolutions] = useState<IndustrySolution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const industriesContent = getIndustriesContent(locale);
  const readMoreButtonText = industriesContent.listSection.readMoreButton;

  useEffect(() => {
    const fetchIndustrySolutions = async () => {
      try {
        setIsLoading(true);
        // Fetch ALL industry solutions (not just showOnHomePage=true)
        const response = await fetch(
          `/api/industry-solutions?locale=${locale}`,
          { cache: 'no-store' }
        );

        if (response.ok) {
          const apiData = await response.json();
          const fetchedSolutions = Array.isArray(apiData) ? apiData : [];

          // Map all backend data to IndustrySolution format
          const mappedSolutions: IndustrySolution[] = fetchedSolutions.map((solution: any) => {
            const slug = generateSlug(solution.title);
            const href = buildLocalizedPath(`/industries/${slug}`, locale as SupportedLocale);

            return {
              title: solution.title,
              description: solution.description,
              icon: solution.icon || null,
              href: href,
              showOnHomePage: Boolean(solution.showOnHomePage ?? false),
            };
          });

          setAllSolutions(mappedSolutions);
        } else {
          setAllSolutions([]);
        }
      } catch (error) {
        console.error('[IndustriesSection] Error fetching industry solutions:', error);
        setAllSolutions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIndustrySolutions();
  }, [locale]);

  // Get solutions with showOnHomePage=true for cards (first 6)
  const homePageSolutions = allSolutions.filter(s => s.showOnHomePage);
  const solutions = homePageSolutions.slice(0, MAX_ITEMS_HOME_PAGE);
  const solutionTitles = new Set(solutions.map(s => s.title));

  // Get remaining solutions (those without showOnHomePage=true OR beyond first 6) for focus tags
  const remainingSolutions = allSolutions.filter(s => !solutionTitles.has(s.title));

  // Use remaining solution titles as focus tags
  const focusTags = remainingSolutions.map(s => s.title);

  return (
    <Section variant="secondary" padding="xl" containerClassName="space-y-12">
      <SectionTitle
        badge={data?.badge}
        heading={data?.heading}
        description={data?.description}
        maxWidth="5xl"
      />

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(MAX_ITEMS_HOME_PAGE)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-3xl border border-border/40 bg-card/95 p-8"
            >
              <div className="h-14 w-14 bg-muted rounded-full mb-4" />
              <div className="h-6 bg-muted rounded w-2/3 mb-4" />
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-5/6 mb-4" />
              <div className="h-10 bg-muted rounded w-32" />
            </div>
          ))}
        </div>
      ) : solutions.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((industry) => {
            const IconComponent = resolveIcon(industry.icon, Code);
            return (
              <IndustryCard
                key={industry.title}
                icon={IconComponent}
                title={industry.title}
                description={industry.description}
                href={localizedHref(locale, industry.href)}
                buttonText={readMoreButtonText}
              />
            );
          })}
        </div>
      ) : null}

      {focusTags.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {focusTags.map((tag, index) => {
            // Use the actual href from the remaining solution
            const solution = remainingSolutions[index];
            const href = solution
              ? localizedHref(locale, solution.href)
              : localizedHref(locale, `/industries/${tag.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`);

            return (
              <Link
                key={`${tag}-${index}`}
                href={href}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm  tracking-wide shadow-sm transition-all hover:bg-primary/20 hover:border-primary/30 hover:shadow-md"
              >
                {tag}
              </Link>
            );
          })}
        </div>
      ) : null}

      <InfoCtaBox
        icon={Package}
        text={
          <>
            {data?.ctaText || "Tap into curated feature packs and regulatory presets built with leaders across direct selling, wellness, and finance."}
          </>
        }
        buttonText={data?.ctaButtonText || "Explore all industries"}
        buttonHref={localizedHref(locale, "/industries")}
      />
    </Section>
  );
}

'use client';

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { Package, Code } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { IndustryCard } from "@/components/frontend/common/industry-card";
import { resolveIcon, localizedHref } from "./utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getIndustryPathSlug } from "@/lib/industries-subpage";
import type { SupportedLocale } from "@/config/site";
import { getIndustriesContent } from "@/lib/industries";
import Image from "next/image";

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
const SECTION_BG_IMAGE = "/images/insrancebg1.webp";

export function IndustriesSection({ locale, data }: { locale: Locale; data: HomepageContent["industrySection"] }) {
  const [allSolutions, setAllSolutions] = useState<IndustrySolution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const industriesContent = getIndustriesContent(locale);
  const readMoreButtonText = industriesContent.listSection.readMoreButton;

  useEffect(() => {
    const fetchIndustrySolutions = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/industry-solutions?locale=${locale}`,
          { cache: 'no-store' }
        );

        if (response.ok) {
          const apiData = await response.json();
          const fetchedSolutions = Array.isArray(apiData) ? apiData : [];

          const mappedSolutions: IndustrySolution[] = fetchedSolutions.map((solution: any) => {
            const slug = generateSlug(solution.title);
            const pathSlug = getIndustryPathSlug(slug);
            const href = buildLocalizedPath(`/industries/${pathSlug}`, locale as SupportedLocale);

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

  const homePageSolutions = allSolutions.filter(s => s.showOnHomePage);
  const solutions = homePageSolutions.slice(0, MAX_ITEMS_HOME_PAGE);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Section background image (current design) */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={SECTION_BG_IMAGE}
          alt={data?.heading}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-slate-900/85" aria-hidden />
      </div> */}

      <div className="container relative z-10 space-y-12">
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
                <div className="flex gap-4 items-start">
                  <div className="h-14 w-14 bg-muted rounded-full shrink-0" />
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                    <div className="h-9 bg-muted rounded w-32 mt-4" />
                  </div>
                </div>
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
      </div>
    </section>
  );
}

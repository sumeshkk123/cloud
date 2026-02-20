'use client';

import { useState, useEffect } from "react";
import { Building2, Calendar, MapPin, Tag } from "lucide-react";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { SectionTitle } from "@/components/ui/section-title";
import { resolveIcon } from "@/components/frontend/home/utils";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { buildLocalizedPath } from "@/lib/locale-links";
import { Typography } from "@/components/ui/typography";
import { getMlmCompaniesContent, getTranslatedCompanySlug } from "@/lib/mlm-companies";

interface MlmCompany {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string | null;
  industry?: string | null;
  foundedYear?: number | null;
  headquarters?: string | null;
  locale: string;
}

interface MlmCompaniesListSectionProps {
  locale: Locale;
}

export function MlmCompaniesListSection({ locale }: MlmCompaniesListSectionProps) {
  const [companies, setCompanies] = useState<MlmCompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const t = getMlmCompaniesContent(locale).listSection;

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/mlm-companies?locale=${locale}`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const data = await response.json();
          setCompanies(Array.isArray(data) ? data : []);
        } else {
          setCompanies([]);
        }
      } catch (error) {
        console.error('Failed to fetch MLM companies:', error);
        setCompanies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, [locale]);

  return (
    <Section variant="primary" padding="lg" containerClassName="space-y-10">
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <SectionTitle
        badge={t.badge}
        heading={t.heading}
        description={t.description}
        centered={false}
        maxWidth="full"
      />
      <div className="container px-4">

        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-border/50 bg-card p-6">
                <div className="h-12 w-12 bg-muted rounded-full mb-4" />
                <div className="h-5 bg-muted rounded w-3/4 mb-3" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-5/6 mb-4" />
                <div className="h-9 bg-muted rounded w-32" />
              </div>
            ))}
          </div>
        ) : companies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => {
              // Get translated slug for the current locale
              const translatedSlug = getTranslatedCompanySlug(company.slug, locale);
              const href = buildLocalizedPath(`/mlm-companies/${translatedSlug}`, locale);
              
              return (
                <div
                  key={company.id}
                  className="group flex flex-col gap-4 rounded-2xl border border-border/40 bg-card/80 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-md"
                >
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-3">
                    <Typography as="h3" variant="h5" className="font-semibold text-foreground">
                      {company.title}
                    </Typography>
                    <Typography as="p" variant="small" textColor="muted" className="leading-relaxed line-clamp-3">
                      {company.description}
                    </Typography>
                    
                    {/* Company Details */}
                    <div className="space-y-2 text-xs text-muted-foreground">
                      {company.industry && (
                        <div className="flex items-center gap-2">
                          <Tag className="h-3 w-3" />
                          <span>{company.industry}</span>
                        </div>
                      )}
                      {company.foundedYear && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>Founded {company.foundedYear}</span>
                        </div>
                      )}
                      {company.headquarters && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          <span>{company.headquarters}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ReadMoreButton href={href} variant="default">
                    {t.exploreMore}
                  </ReadMoreButton>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <Typography variant="p" textColor="muted">
              {t.noCompaniesText}
            </Typography>
          </div>
        )}
      </div>
    </Section>
  );
}

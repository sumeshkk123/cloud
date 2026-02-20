'use client';

import { useEffect, useState } from "react";
import { Calendar, MapPin, Tag } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getTranslatedCompanySlug } from "@/lib/mlm-companies";
import type { Locale } from "@/i18n-config";

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

interface MlmCompaniesTopUsaSectionProps {
  locale: Locale;
}

export function MlmCompaniesTopUsaSection({ locale }: MlmCompaniesTopUsaSectionProps) {
  const [companies, setCompanies] = useState<MlmCompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/mlm-companies?locale=${locale}`, {
          cache: "no-store",
        });

        if (response.ok) {
          const data = await response.json();
          const normalized = Array.isArray(data) ? data : [];
          setCompanies(normalized.slice(0, 10));
        } else {
          setCompanies([]);
        }
      } catch (error) {
        console.error("Failed to fetch MLM companies:", error);
        setCompanies([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, [locale]);

  return (
    <Section variant="gradient" padding="lg" containerClassName="space-y-10">
      <SectionTitle
        heading="Top 10 MLM Companies in USA"
        description="There is a huge scope for MLM opportunities in the USA. As per the records, network marketing has established a significant presence in the United States, offering unique products and services to customers. When we look into details, we understand that many renowned companies began their MLM careers in the USA and established themselves in the network marketing industry. For anyone exploring the Top MLM Plans in the USA, these companies provide valuable insights into successful strategies and proven business models."
        centered={false}
        maxWidth="full"
      />

      <div className="container px-4">
        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-border/50 bg-card p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-muted" />
                <div className="mb-3 h-5 w-3/4 rounded bg-muted" />
                <div className="mb-2 h-4 w-full rounded bg-muted" />
                <div className="mb-4 h-4 w-5/6 rounded bg-muted" />
                <div className="h-9 w-32 rounded bg-muted" />
              </div>
            ))}
          </div>
        ) : companies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => {
              const translatedSlug = getTranslatedCompanySlug(company.slug, locale);
              const href = buildLocalizedPath(`/mlm-companies/${translatedSlug}`, locale);

              return (
                <div
                  key={company.id}
                  className="group flex flex-col gap-4 rounded-2xl border border-border/40 bg-card/80 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-md"
                >
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-bold text-lg text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-3">
                    <Typography as="h3" variant="h5" className="font-semibold text-foreground">
                      {company.title}
                    </Typography>
                    <Typography as="p" variant="small" textColor="muted" className="line-clamp-3 leading-relaxed">
                      {company.description}
                    </Typography>

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
                    View Company
                  </ReadMoreButton>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center">
            <Typography variant="p" textColor="muted">
              No MLM companies found at the moment.
            </Typography>
          </div>
        )}
      </div>
    </Section>
  );
}

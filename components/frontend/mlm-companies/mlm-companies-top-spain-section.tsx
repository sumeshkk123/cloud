'use client';

import { useEffect, useState } from "react";
import { Calendar, MapPin, Tag } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { buildLocalizedPath } from "@/lib/locale-links";
import { getMlmCompaniesContent, getTranslatedCompanySlug } from "@/lib/mlm-companies";
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

interface MlmCompaniesTopSpainSectionProps {
  locale: Locale;
}

const TOP_SPAIN_COPY: Record<Locale, { heading: string; description: string }> = {
  en: {
    heading: "Top 10 MLM Companies in Spain",
    description:
      "The network marketing industry in Spain has grown rapidly, making individuals explore flexible business opportunities in direct selling. Over the years, MLM companies in Spain have established themselves as successful and popular firms that offer products and services of high quality. Here’s a list of the top 10 MLM companies in Spain and the products they offer.",
  },
  es: {
    heading: "Las 10 principales empresas MLM en España",
    description:
      "La industria del network marketing en España ha crecido rápidamente, impulsando a muchas personas a explorar oportunidades de negocio flexibles en la venta directa. Con los años, las empresas MLM en España se han consolidado como compañías exitosas y populares que ofrecen productos y servicios de alta calidad. Aquí tienes una lista de las 10 principales empresas MLM en España y los productos que ofrecen.",
  },
  fr: {
    heading: "Top 10 des entreprises MLM en Espagne",
    description:
      "L industrie du marketing de reseau en Espagne a connu une croissance rapide, poussant de nombreuses personnes a explorer des opportunites flexibles dans la vente directe. Au fil des annees, les entreprises MLM en Espagne se sont imposees comme des societes performantes et populaires offrant des produits et services de haute qualite. Voici une liste des 10 meilleures entreprises MLM en Espagne et des produits qu elles proposent.",
  },
  it: {
    heading: "Le 10 migliori aziende MLM in Spagna",
    description:
      "Il settore del network marketing in Spagna e cresciuto rapidamente, spingendo molte persone a esplorare opportunita di business flessibili nella vendita diretta. Nel tempo, le aziende MLM in Spagna si sono affermate come imprese di successo e popolari, offrendo prodotti e servizi di alta qualita. Ecco un elenco delle 10 migliori aziende MLM in Spagna e dei prodotti che offrono.",
  },
  de: {
    heading: "Top 10 MLM-Unternehmen in Spanien",
    description:
      "Die Network-Marketing-Branche in Spanien ist schnell gewachsen und hat viele Menschen dazu bewegt, flexible Geschaeftsmoeglichkeiten im Direktvertrieb zu pruefen. Im Laufe der Jahre haben sich MLM-Unternehmen in Spanien als erfolgreiche und bekannte Firmen etabliert, die hochwertige Produkte und Dienstleistungen anbieten. Hier ist eine Liste der Top 10 MLM-Unternehmen in Spanien und der Produkte, die sie anbieten.",
  },
  pt: {
    heading: "Top 10 empresas de MLM na Espanha",
    description:
      "A industria de marketing de rede na Espanha cresceu rapidamente, levando muitas pessoas a explorar oportunidades de negocio flexiveis na venda direta. Ao longo dos anos, as empresas de MLM na Espanha se consolidaram como organizacoes bem-sucedidas e populares, oferecendo produtos e servicos de alta qualidade. Aqui esta uma lista das 10 principais empresas de MLM na Espanha e dos produtos que elas oferecem.",
  },
  zh: {
    heading: "西班牙前 10 大 MLM 公司",
    description:
      "西班牙的网络营销行业发展迅速，越来越多的人开始在直销领域寻找灵活的商业机会。多年来，西班牙的 MLM 公司已发展为成功且受欢迎的企业，提供高质量的产品与服务。以下是西班牙前 10 大 MLM 公司及其提供的产品列表。",
  },
};

export function MlmCompaniesTopSpainSection({ locale }: MlmCompaniesTopSpainSectionProps) {
  const [companies, setCompanies] = useState<MlmCompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const copy = TOP_SPAIN_COPY[locale] ?? TOP_SPAIN_COPY.en;
  const listContent = getMlmCompaniesContent(locale).listSection;

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
        heading={copy.heading}
        description={copy.description}
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
                    {listContent.exploreMore}
                  </ReadMoreButton>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center">
            <Typography variant="p" textColor="muted">
              {listContent.noCompaniesText}
            </Typography>
          </div>
        )}
      </div>
    </Section>
  );
}

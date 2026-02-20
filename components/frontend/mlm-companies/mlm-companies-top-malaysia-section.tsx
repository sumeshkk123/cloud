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

interface MlmCompaniesTopMalaysiaSectionProps {
  locale: Locale;
}

const TOP_MALAYSIA_COPY: Record<Locale, { heading: string; description: string }> = {
  en: {
    heading: "List of Top 10 MLM Companies in Malaysia",
    description:
      "Malaysia is also home for many to start their own businesses through MLM strategies. Its popularity has caused people in Malaysia to explore this new business model and earn a substantial income. They have strong community support and offer high-quality, unique products to their trusted customers. Let’s look into the details of the top 10 MLM companies in Malaysia, each distinguished by its product quality, market reach, and commitment to empowering independent distributors.",
  },
  es: {
    heading: "Lista de las 10 principales empresas MLM en Malasia",
    description:
      "Malasia tambien es un lugar donde muchas personas comienzan sus propios negocios mediante estrategias MLM. Su popularidad ha impulsado a la gente en Malasia a explorar este nuevo modelo de negocio y obtener ingresos significativos. Estas empresas cuentan con un fuerte apoyo de la comunidad y ofrecen productos unicos y de alta calidad a sus clientes. Veamos en detalle las 10 principales empresas MLM en Malasia, cada una destacada por la calidad de sus productos, su alcance de mercado y su compromiso con el empoderamiento de distribuidores independientes.",
  },
  fr: {
    heading: "Liste des 10 meilleures entreprises MLM en Malaisie",
    description:
      "La Malaisie est egalement un lieu ou beaucoup de personnes lancent leur propre activite grace aux strategies MLM. Sa popularite a pousse les gens en Malaisie a explorer ce nouveau modele et a generer des revenus importants. Ces entreprises beneficient d un fort soutien communautaire et proposent des produits uniques et de haute qualite a leurs clients. Voyons en detail les 10 meilleures entreprises MLM en Malaisie, chacune se distinguant par la qualite de ses produits, sa portee sur le marche et son engagement envers les distributeurs independants.",
  },
  it: {
    heading: "Elenco delle 10 migliori aziende MLM in Malesia",
    description:
      "La Malesia e anche un paese in cui molte persone avviano la propria attivita tramite strategie MLM. La sua popolarita ha portato molte persone in Malesia a esplorare questo nuovo modello di business e a ottenere un reddito significativo. Queste aziende hanno un forte supporto della comunita e offrono prodotti unici e di alta qualita ai clienti. Vediamo nel dettaglio le 10 migliori aziende MLM in Malesia, ciascuna distinta per qualita del prodotto, copertura di mercato e impegno nel valorizzare i distributori indipendenti.",
  },
  de: {
    heading: "Liste der Top 10 MLM-Unternehmen in Malaysia",
    description:
      "Malaysia ist ebenfalls ein wichtiger Ort, an dem viele Menschen mit MLM-Strategien ein eigenes Geschaeft starten. Die wachsende Beliebtheit hat dazu gefuehrt, dass viele in Malaysia dieses Modell nutzen und ein solides Einkommen erzielen. Diese Unternehmen verfuegen ueber starke Community-Unterstuetzung und bieten hochwertige, einzigartige Produkte. Werfen wir einen Blick auf die Top 10 MLM-Unternehmen in Malaysia, die sich jeweils durch Produktqualitaet, Marktreichweite und ihr Engagement fuer unabhängige Vertriebspartner auszeichnen.",
  },
  pt: {
    heading: "Lista das 10 principais empresas de MLM na Malasia",
    description:
      "A Malasia tambem e um lugar onde muitas pessoas iniciam seus proprios negocios por meio de estrategias de MLM. A popularidade desse modelo levou muitas pessoas na Malasia a explorarem essa oportunidade e conquistarem uma renda significativa. Essas empresas contam com forte apoio da comunidade e oferecem produtos unicos e de alta qualidade para seus clientes. Vamos analisar as 10 principais empresas de MLM na Malasia, cada uma destacada pela qualidade dos produtos, alcance de mercado e compromisso em fortalecer distribuidores independentes.",
  },
  zh: {
    heading: "马来西亚前 10 大 MLM 公司名单",
    description:
      "马来西亚也是许多人通过 MLM 策略开展个人事业的重要市场。随着这种模式的普及，越来越多的人在马来西亚探索这一商业机会并获得可观收入。这些公司拥有强大的社群支持，并向客户提供高质量且独特的产品。下面我们来看看马来西亚前 10 大 MLM 公司，它们在产品质量、市场覆盖和赋能独立分销商方面各具优势。",
  },
};

export function MlmCompaniesTopMalaysiaSection({ locale }: MlmCompaniesTopMalaysiaSectionProps) {
  const [companies, setCompanies] = useState<MlmCompany[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const copy = TOP_MALAYSIA_COPY[locale] ?? TOP_MALAYSIA_COPY.en;
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
    <Section variant="primary" padding="lg" containerClassName="space-y-10">
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

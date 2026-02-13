'use client';

import { useState, useEffect } from "react";
import type { HomepageContent } from "@/types/homepage";
import type { EcommerceServiceItem } from "@/lib/services-page-title";
import * as RemixIcon from "@remixicon/react";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { Section } from "@/components/ui/section";
import { IntegrationCard } from "@/components/frontend/common/integration-card";
import { resolveIcon } from "@/components/frontend/home/utils";
import { Plug } from "lucide-react";
import type { Locale } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { cn } from "@/lib/utils";

interface Integration {
  id: string;
  title: string;
  description: string;
  icon?: string | null;
  connectors?: string[] | null;
  /** When set (e.g. from ecommerce services), "Learn more" links to this URL. */
  href?: string;
}

interface Connector {
  id: string;
  title: string;
  locale: string;
}

interface ConnectorSlider {
  sliderTitle: string;
  items: Connector[];
}

export function IntegrationsSection({
  data,
  locale,
  ecommerceServices = [],
}: {
  data: HomepageContent["integrations"];
  locale: Locale;
  /** When provided, these 7 services (from Admin → Services) are used for the E-Commerce section hover boxes. */
  ecommerceServices?: EcommerceServiceItem[];
}) {
  const partners = data?.partners ?? [];
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [isLoadingIntegrations, setIsLoadingIntegrations] = useState(ecommerceServices.length === 0);
  const [connectorSliders, setConnectorSliders] = useState<ConnectorSlider[]>([]);
  const [isLoadingConnectors, setIsLoadingConnectors] = useState(true);

  // Each slider from backend appears in its own row, alternating direction
  // Slider 1 (index 0) → left-to-right row
  // Slider 2 (index 1) → right-to-left row
  // Slider 3 (index 2) → left-to-right row
  // Slider 4 (index 3) → right-to-left row
  // etc.
  const slidersWithDirection = connectorSliders.map((slider, index) => ({
    ...slider,
    direction: index % 2 === 0 ? 'left' : 'right' as 'left' | 'right',
    originalIndex: index,
  }));

  // Separate by direction
  const leftToRightSliders = slidersWithDirection.filter(s => s.direction === 'left');
  const rightToLeftSliders = slidersWithDirection.filter(s => s.direction === 'right');

  // Duplicate each direction for seamless infinite scroll
  const duplicatedLeftSliders = leftToRightSliders.length > 0 ? [...leftToRightSliders, ...leftToRightSliders] : [];
  const duplicatedRightSliders = rightToLeftSliders.length > 0 ? [...rightToLeftSliders, ...rightToLeftSliders] : [];

  // Fetch connectors from API (grouped by slider)
  useEffect(() => {
    const fetchConnectors = async () => {
      try {
        setIsLoadingConnectors(true);
        const response = await fetch(`/api/connectors?locale=${locale}&bySlider=true`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const data = await response.json();
          console.log('[IntegrationsSection] Connectors API response:', data);
          const sliders = Array.isArray(data) ? data : [];
          // Log each slider's items to check for duplicates
          sliders.forEach((slider: ConnectorSlider, idx: number) => {
            console.log(`[IntegrationsSection] Slider ${idx} (${slider.sliderTitle}):`, {
              itemCount: slider.items?.length || 0,
              items: slider.items?.map((item: Connector) => ({ id: item.id, title: item.title, locale: item.locale })) || [],
            });
          });
          setConnectorSliders(sliders);
        } else {
          console.error('[IntegrationsSection] Connectors API error:', response.status, response.statusText);
          setConnectorSliders([]);
        }
      } catch (error) {
        console.error('Failed to fetch connectors:', error);
        setConnectorSliders([]);
      } finally {
        setIsLoadingConnectors(false);
      }
    };

    fetchConnectors();
  }, [locale]);

  // When ecommerceServices are provided from the server, use them; otherwise fetch from API
  const displayIntegrations: Integration[] =
    ecommerceServices.length > 0
      ? ecommerceServices.map((s) => ({
          id: s.id,
          title: s.title,
          description: s.description,
          icon: s.icon ?? null,
          href: s.href,
        }))
      : integrations;

  useEffect(() => {
    if (ecommerceServices.length > 0) {
      setIsLoadingIntegrations(false);
      return;
    }
    const fetchIntegrations = async () => {
      try {
        setIsLoadingIntegrations(true);
        const response = await fetch(`/api/integrations?locale=${locale}`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const data = await response.json();
          const integrationsData = Array.isArray(data) ? data : [];
          setIntegrations(integrationsData.slice(0, 6));
        } else {
          setIntegrations([]);
        }
      } catch (error) {
        console.error('Failed to fetch integrations:', error);
        setIntegrations([]);
      } finally {
        setIsLoadingIntegrations(false);
      }
    };

    fetchIntegrations();
  }, [locale, ecommerceServices.length]);

  return (
    <Section variant="gradient" padding="xl" containerClassName="">
      <SectionTitle
        badge={data?.badgeLabel ?? "Connected ecosystem"}
        heading={data?.heading ?? "Plug Cloud MLM into your favourite tools"}
        description={data?.description ?? "Sync finance, marketing, and support workflows with battle-tested integrations that keep your organisation aligned."}
        maxWidth="5xl"
      />

      {/* Render each slider in its own row, alternating direction */}
      {isLoadingConnectors ? (
        <>
          <div className="relative overflow-hidden mt-10">
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse shrink-0 w-[400px] h-16 bg-muted rounded-full border border-border/60 flex items-center gap-2 px-5">
                  <div className="h-2 w-2 bg-muted-foreground/30 rounded-full" />
                  <div className="h-4 bg-muted-foreground/30 rounded w-24" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden mt-5">
            <div className="flex gap-3 justify-end">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse shrink-0 w-[400px] h-16 bg-muted rounded-full border border-border/60 flex items-center gap-2 px-5">
                  <div className="h-2 w-2 bg-muted-foreground/30 rounded-full" />
                  <div className="h-4 bg-muted-foreground/30 rounded w-24" />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : connectorSliders.filter(slider => slider.items && slider.items.length > 0).length > 0 ? (
        connectorSliders
          .filter(slider => slider.items && slider.items.length > 0) // Only show sliders with data
          .map((slider, index) => {
            const isLeftToRight = index % 2 === 0;

            // Ensure items are unique by ID before duplicating for seamless scroll
            const uniqueItems = Array.from(
              new Map(slider.items.map(item => [item.id, item])).values()
            );

            // Log if duplicates were found
            if (slider.items.length !== uniqueItems.length) {
              console.warn(`[IntegrationsSection] Found ${slider.items.length - uniqueItems.length} duplicate(s) in slider "${slider.sliderTitle}". Original:`, slider.items.map(i => ({ id: i.id, title: i.title })), 'Unique:', uniqueItems.map(i => ({ id: i.id, title: i.title })));
            }

            // Duplicate items array for seamless infinite scroll (only if we have items)
            const duplicatedItems = uniqueItems.length > 0
              ? [...uniqueItems, ...uniqueItems]
              : [];

            return (
              <div
                key={`slider-row-${index}`}
                className={`relative overflow-hidden ${index === 0 ? 'mt-10' : 'mt-5'}`}
              >
                <div className={`flex ${isLeftToRight ? 'animate-scroll-left' : 'animate-scroll-right'} gap-3 ${!isLeftToRight ? 'justify-end' : ''}`}>
                  <div className="inline-flex shrink-0 items-center gap-3">
                    {duplicatedItems.map((connector, connectorIndex) => (
                      <div
                        key={`${connector.id}-${connectorIndex}`}
                        className="inline-flex items-center gap-2 text-sm text-foreground px-5 py-2 rounded-full border border-border/60 bg-primary/5 shadow-sm"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden />
                        {connector.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
      ) : (
        partners.map((partner, index) => {
          const isLeftToRight = index % 2 === 0;
          const duplicatedPartner = [partner, partner]; // Duplicate for seamless scroll

          return (
            <div
              key={`partner-row-${index}`}
              className={`relative overflow-hidden ${index === 0 ? 'mt-10' : 'mt-5'}`}
            >
              <div className={`flex ${isLeftToRight ? 'animate-scroll-left' : 'animate-scroll-right'} gap-3 ${!isLeftToRight ? 'justify-end' : ''}`}>
                {duplicatedPartner.map((partnerItem, partnerIndex) => (
                  <div
                    key={`partner-${index}-${partnerIndex}`}
                    className="inline-flex shrink-0 items-center gap-2 text-sm rounded-full border border-border/60 bg-primary/5 px-5 py-2 text-foreground shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden />
                    {partnerItem}
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}

      {/* E-Commerce Integration Section - Hover Box Design */}
      <div className="mt-20 space-y-8">
        <div className="space-y-4">
          <Typography as="h3" variant="h3" className="text-foreground">
            {data?.ecommerceHeading ?? "Seamless E-Commerce Integration for MLM Success"}
          </Typography>

          <Typography variant="p" className="text-base leading-7 text-muted-foreground">
            {data?.ecommerceDescription ?? "Enhance your MLM business with our robust integrations for Shopify, WooCommerce, and Cryptocurrency. Our software simplifies the management and growth of your online store, allowing you to sync sales data and optimize the user experience—all from a single platform. Whether you're building a large-scale e-commerce operation or launching a new venture, our seamless integration ensures your MLM network runs efficiently, supporting both sales growth and business expansion effortlessly."}
          </Typography>
        </div>

        {/* Integration Hover Boxes */}
        {isLoadingIntegrations ? (
          <div className="hidden lg:flex flex-row bg-background h-[437px] rounded-xl overflow-hidden border border-border/50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse flex-1 border-r border-border/50 bg-muted/50 p-6">
                <div className="space-y-4">
                  <div className="h-6 bg-muted/70 rounded w-3/4" />
                  <div className="h-4 bg-muted/70 rounded w-full" />
                  <div className="h-4 bg-muted/70 rounded w-5/6" />
                  <div className="h-4 bg-muted/70 rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        ) : displayIntegrations.length > 0 ? (
          <IntegrationHoverBoxes integrations={displayIntegrations} locale={locale} />
        ) : (
          <div className="text-center py-12">
            <Typography variant="p" textColor="muted">
              {data?.noIntegrationsText ?? "No integrations available yet."}
            </Typography>
          </div>
        )}

      
      </div>
    </Section>
  );
}

function IntegrationHoverBoxes({ integrations, locale }: { integrations: Integration[]; locale: Locale }) {
  // Limit to 6 integrations for the hover boxes
  const displayIntegrations = integrations.slice(0, 6);

  // State to track which box is expanded (-1 means first box is expanded by default)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Ensure we have at least 5 items by duplicating if needed
  const columnIntegrations = displayIntegrations.length >= 5
    ? displayIntegrations
    : [...displayIntegrations, ...displayIntegrations.slice(0, 5 - displayIntegrations.length)];

  return (
    <>
      {/* Desktop Design - Vertical Expanding Columns */}
      <div className="hidden lg:flex flex-row bg-background">
        {columnIntegrations.slice(0, 6).map((integration, colIndex) => {
          const Icon = resolveIcon(integration.icon, Plug);
          const isExpanded = expandedIndex === colIndex;
          const integrationHref = integration.href ?? buildLocalizedPath("/mlm-software-integration", locale);

          return (
            <div
              key={integration.id || colIndex}
              onMouseEnter={() => setExpandedIndex(colIndex)}
              className={cn(
                "group relative flex flex-col items-start justify-center overflow-hidden transition-all duration-500 ease-in-out border-r border-border/50 bg-background",
                isExpanded
                  ? "flex-[2] min-w-[420px]"
                  : "w-[175px] hover:bg-primary/5",
                "h-[437px] px-[45px] py-10"
              )}
            >
              {/* Service Icon - Top, left-aligned */}
              <div className={cn(
                "flex shrink-0 items-center justify-start relative z-10 transition-all duration-300",
                isExpanded ? "mb-4" : "mb-6"
              )}>
                <div className={cn(
                  "flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300",
                  isExpanded
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:scale-115"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content Container */}
              <div className="relative w-full flex-1 min-w-0 overflow-hidden flex flex-col items-start">
                {/* Collapsed State - Vertical Title (at bottom) */}
                <div className={cn(
                  "absolute inset-0 flex flex-col transition-all duration-500 ease-in-out",
                  isExpanded ? "opacity-0 invisible transition-opacity duration-200 ease-out" : "opacity-100 visible z-20"
                )}>
                  <div className="absolute bottom-[30px] left-0 h-[247px] w-full flex items-end justify-start">
                    <Typography
                      as="h4"
                      variant="h5"
                      style={{ writingMode: 'sideways-lr' }}
                      className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary/80"
                    >
                      {integration.title}
                    </Typography>
                  </div>
                </div>

                {/* Expanded State - Horizontal Content */}
                <div className={cn(
                  "relative w-full max-w-[400px] text-left transition-all duration-500 ease-in-out top-0 left-0 flex-1 flex flex-col",
                  isExpanded
                    ? "translate-x-0 opacity-100 visible"
                    : "translate-x-[-100%] opacity-0 invisible"
                )}>
                  <div className="flex-1 flex flex-col justify-center min-h-0">
                    <Typography
                      as="h4"
                      variant="h5"
                      className="font-semibold text-foreground leading-tight break-words mb-4"
                    >
                      {integration.title}
                    </Typography>
                    <Typography
                      variant="small"
                      textColor="muted"
                      className="leading-6 break-words line-clamp-4"
                    >
                      {integration.description}
                    </Typography>
                  </div>

                  {/* CTA Button - Inside expanded content, aligned at bottom */}
                  <div className="mt-4">
                    <ReadMoreButton
                      href={integrationHref}
                      variant="default"
                    >
                      Learn more
                    </ReadMoreButton>
                  </div>
                </div>
              </div>

              {/* CTA Button - Collapsed state (hidden when expanded) */}
              <div className={cn(
                "absolute bottom-0 left-[15px] transition-all duration-500 ease-in-out",
                isExpanded
                  ? "opacity-0 invisible"
                  : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              )}>
                <a
                  href={integrationHref}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={`Learn more about ${integration.title}`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet - Icon top left-aligned, then title, description (4 lines), CTA */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {displayIntegrations.map((integration, index) => {
          const Icon = resolveIcon(integration.icon, Plug);
          const integrationHref = integration.href ?? buildLocalizedPath("/mlm-software-integration", locale);

          return (
            <div
              key={integration.id || index}
              className="rounded-2xl border border-border/50 bg-background p-6"
            >
              <div className="flex flex-col items-start space-y-4">
                {/* Icon - Top, left-aligned */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title, Description (max 4 lines), CTA */}
                <div className="w-full space-y-3 text-left">
                  <Typography
                    as="h4"
                    variant="h5"
                    className="font-semibold text-foreground leading-tight break-words"
                  >
                    {integration.title}
                  </Typography>
                  <Typography
                    variant="small"
                    textColor="muted"
                    className="leading-6 break-words line-clamp-4"
                  >
                    {integration.description}
                  </Typography>
                  <div className="pt-2">
                    <ReadMoreButton
                      href={integrationHref}
                      variant="default"
                    >
                      Learn more
                    </ReadMoreButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
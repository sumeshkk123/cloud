'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { HomepageContent } from "@/types/homepage";
import { resolveIcon } from "./utils";
import { Compass } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { Typography } from "@/components/ui/typography";
import { AiCopilotCard } from "@/components/frontend/common/ai-copilot-card";
import type { Locale } from "@/i18n-config";
import { Section } from "@/components/ui/section";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { SupportedLocale } from "@/config/site";

function LazyImage(
  props: React.ComponentProps<typeof Image> & { rootMargin?: string; eager?: boolean }
) {
  const { rootMargin = "150px", eager = false, width = 800, height = 500, ...imageProps } = props;
  const [inView, setInView] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const aspectRatio = typeof width === "number" && typeof height === "number"
    ? `${width}/${height}`
    : "800/500";

  useEffect(() => {
    if (eager) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin, threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, eager]);

  const skeleton = (
    <div
      className="absolute inset-0 z-0 w-full bg-muted animate-pulse rounded-2xl"
      style={{ aspectRatio }}
      aria-hidden
    />
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio }}>
      {!inView ? (
        skeleton
      ) : (
        <>
          {!loaded && skeleton}
          <Image
            {...imageProps}
            alt={imageProps.alt ?? ''}
            width={width}
            height={height}
            loading={eager ? "eager" : "lazy"}
            priority={eager}
            sizes={imageProps.sizes ?? "(max-width: 768px) 100vw, 800px"}
            onLoad={() => setLoaded(true)}
            className={`relative z-10 ${imageProps.className ?? ""} ${!loaded ? "opacity-0 transition-opacity duration-300" : "opacity-100"}`}
          />
        </>
      )}
    </div>
  );
}

interface AICopilot {
  id: string;
  icon: string | null;
  title: string;
  content: string;
  locale: string;
}

export function WhyChooseSection({ locale = 'en', data }: { locale?: Locale; data: HomepageContent["whyChoose"] }) {
  const [copilots, setCopilots] = useState<AICopilot[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback to static data if available
  const staticReasons = data?.reasons ?? [];

  useEffect(() => {
    const fetchCopilots = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/ai-copilot?locale=${locale}`, {
          cache: 'no-store',
        });

        if (response.ok) {
          const data = await response.json();
          setCopilots(Array.isArray(data) ? data : []);
        } else {
          setCopilots([]);
        }
      } catch (error) {
        console.error('[WhyChooseSection] Error fetching AI Copilots:', error);
        setCopilots([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCopilots();
  }, [locale]);

  // Use fetched copilots if available, otherwise fall back to static reasons
  const reasons = copilots.length > 0
    ? copilots.map(c => ({ icon: c.icon || '', title: c.title, description: c.content }))
    : staticReasons;

  return (
    <Section variant="gradient" padding="xl" containerClassName="">
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-start">

        <div className="space-y-4">
          {/* Header Section */}
          <div className="space-y-6">
            <SectionTitle
              badge={data?.badge}
              heading={data?.heading}
              description={data?.description}
              centered={false}
              maxWidth="full"
            />
          </div>

          {/* Image - eager load so it appears quickly with skeleton until loaded */}
          <LazyImage
            src="/images/ai-image2.png"
            alt="AI-Powered MLM Software Team Collaboration - Network Marketing Platform Features"
            width={800}
            height={500}
            eager
            className="h-auto w-full object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
            quality={75}
          />

          {/* CTA Card */}
          <div className="rounded-3xl border border-primary/30 bg-primary/95 dark:bg-[hsl(221.2,83.2%,53.3%)]/95 p-8 shadow-lg">
            <Typography
              as="h3"
              variant="h4"
              className="mb-4 font-semibold text-primary-foreground"
            >
              Partner with Cloud MLM Software & take your brand to the next level.
            </Typography>
            <ReadMoreButton
              href={buildLocalizedPath("/ai-copilot", locale as SupportedLocale)}
              variant="highlighted"
              className="text-primary-foreground [&_.read-more-icon]:!text-white [&_.read-more-icon_svg]:!text-white"
            >
              Explore All AI Copilots
            </ReadMoreButton>
          </div>
        </div>

        {/* Right Column: Feature Cards */}
        <div className="space-y-6 mt-4">
          {isLoading ? (
            // Loading skeleton
            [...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-3xl border border-border/60 bg-background p-6">
                <div className="flex gap-6 items-center">
                  <div className="h-14 w-14 rounded-full bg-muted shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))
          ) : reasons.length > 0 ? (
            reasons.map((reason, index) => {
              const Icon = resolveIcon(reason.icon, Compass);
              return (
                <AiCopilotCard
                  key={reason.title || `copilot-${index}`}
                  icon={Icon}
                  title={reason.title}
                  description={reason.description}
                />
              );
            })
          ) : null}
        </div>
      </div>
    </Section>
  );
}

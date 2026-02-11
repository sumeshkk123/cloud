"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { toAbsoluteUrl } from "@/lib/media";
import type { ServiceImportanceSection } from "./types";

interface ServiceImportanceSectionProps {
  content: ServiceImportanceSection;
  /** Image from backend (page_titles or admin services). When present, this is used for the section image; otherwise content.imageSrc is used. */
  backendImageUrl?: string | null;
}

export function ServiceImportanceSection({
  content,
  backendImageUrl,
}: ServiceImportanceSectionProps) {
  const {
    badge,
    heading,
    subheading,
    paragraphs,
    imageSrc,
    imageAlt,
    cards,
  } = content;
  // Prefer backend image (admin services at /admin/services) over static content.imageSrc; resolve for Next.js Image
  const rawImageUrl = backendImageUrl != null && backendImageUrl !== "" ? backendImageUrl : imageSrc;
  const imageUrl = rawImageUrl ? (toAbsoluteUrl(rawImageUrl) ?? rawImageUrl) : undefined;
  const description = subheading ?? paragraphs[0] ?? "";

  return (
    <Section variant="gradient" padding="lg">
      <div className="container mx-auto">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>
        <SectionTitle
          badge={badge ?? undefined}
          heading={heading}
          description={description || undefined}
          centered={false}
          maxWidth="2xl"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 mt-8">
          {/* Left: badge, heading, description, large image */}
          <div className="space-y-6">

            {imageUrl && (
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg">
                <Image
                  src={imageUrl}
                  alt={imageAlt ?? heading}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={imageUrl.startsWith("http")}
                />
              </div>
            )}
          </div>

          {/* Right: feature cards or fallback paragraphs */}
          <div className="space-y-4">
            {cards && cards.length > 0 ? (
              cards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <article
                    key={i}
                    className="group flex gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <Typography variant="h5" className="font-semibold text-foreground">
                        {item.title}
                      </Typography>
                      <Typography
                        as="p"
                        variant="p"
                        textColor="muted"
                        className="text-sm leading-relaxed"
                      >
                        {item.description}
                      </Typography>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="space-y-4">
                {paragraphs.map((p, i) => (
                  <Typography
                    key={i}
                    as="p"
                    variant="p"
                    textColor="muted"
                    className="leading-relaxed"
                  >
                    {p}
                  </Typography>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

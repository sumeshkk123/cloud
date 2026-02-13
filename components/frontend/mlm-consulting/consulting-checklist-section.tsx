"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { toAbsoluteUrl } from "@/lib/media";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

const DEFAULT_IMAGE = "/images/moduleIntro.webp";

interface ConsultingChecklistSectionProps {
  badge?: string;
  heading: string;
  description?: string;
  items: string[];
  /** Backend image from Admin → Services. When set, used instead of default. */
  imageUrl?: string | null;
}

export function ConsultingChecklistSection({
  badge,
  heading,
  description,
  items,
  imageUrl,
}: ConsultingChecklistSectionProps) {
  if (!items?.length) return null;

  const resolvedImageUrl = imageUrl ? (toAbsoluteUrl(imageUrl) ?? imageUrl) : DEFAULT_IMAGE;

  return (
    <Section padding="lg" variant="gradient" className="bg-muted/20 dark:bg-slate-900/30">
      <div className="container space-y-10">
           <SectionTitle
              badge={badge}
              heading={heading}
              description={description}
              centered={false}
              maxWidth="full"
              headingClassName="normal-case"
            />
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          {/* Left: section title on top, then image */}
          <div className="space-y-6">
         
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={resolvedImageUrl}
                alt="MLM consulting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={false}
                unoptimized={resolvedImageUrl.startsWith("http")}
              />
            </div>
          </div>
          {/* Right: checklist items */}
          <div className="space-y-6">
            <ul className="grid gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-5 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                  </span>
                  <Typography variant="p" className="text-sm text-foreground leading-relaxed">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

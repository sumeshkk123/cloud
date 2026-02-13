"use client";

import Image from "next/image";
import { toAbsoluteUrl } from "@/lib/media";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle, CardIcon } from "@/components/ui/card";
import type { MigrationReason } from "./types";

interface MigrationWhySectionProps {
  heading: string;
  description?: string;
  reasons: MigrationReason[];
  /** Backend image from Admin → Services. Shown above reasons when set. */
  imageUrl?: string | null;
}

export function MigrationWhySection({ heading, description, reasons, imageUrl }: MigrationWhySectionProps) {
  if (!reasons?.length) return null;

  const resolvedImageUrl = imageUrl ? (toAbsoluteUrl(imageUrl) ?? imageUrl) : null;

  const cards = reasons.map((reason) => {
    const Icon = reason.icon;
    return (
      <Card key={reason.title} className="flex h-full flex-col">
        <CardHeader className="space-y-4">
          <CardIcon icon={Icon} aria-hidden />
          <CardTitle className="text-lg font-semibold">{reason.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <Typography variant="small" className="text-muted-foreground leading-relaxed">
            {reason.detail}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        {resolvedImageUrl ? (
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            {/* Left: title above image */}
            <div className="space-y-6">
              <SectionTitle
                badge="Why migrate"
                heading={heading}
                description={description}
                centered={false}
                maxWidth="full"
                headingClassName="normal-case"
              />
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/60">
                <Image
                  src={resolvedImageUrl}
                  alt="Why migrate to MLM software"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={resolvedImageUrl.startsWith("http")}
                />
              </div>
            </div>
            <div className="space-y-6">{cards}</div>
          </div>
        ) : (
          <>
            <div className="max-w-3xl space-y-4">
              <SectionTitle
                badge="Why migrate"
                heading={heading}
                description={description}
                centered={false}
                maxWidth="full"
                headingClassName="normal-case"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>
          </>
        )}
      </div>
    </Section>
  );
}

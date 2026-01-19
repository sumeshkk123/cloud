"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { ContactRegionCard } from "@/components/common/contact-region-card";

export type FlagCode = "in" | "ae" | "na" | "eu" | "apac";

export type ContactRegion = {
  region: string;
  subheading: string;
  coverage: string;
  address: string[];
  phones: string[];
  email: string;
  whatsapp?: string;
  flag: FlagCode;
  specialties: string[];
  accent: string;
};

type ContactRegionsSectionProps = {
  cards?: ContactRegion[];
  contactHref?: string;
  demoHref?: string;
  badgeLabel?: string;
  heading?: string;
  description?: string;
  contactLabel?: string;
  demoLabel?: string;
  data?: {
    badgeLabel?: string;
    heading?: string;
    description?: string;
    regions?: ContactRegion[];
    primaryCta?: { href: string; label: string };
    secondaryCta?: { href: string; label: string };
  };
  locale?: string;
};

export function ContactRegionsSection({
  cards: cardsProp,
  contactHref: contactHrefProp,
  demoHref: demoHrefProp,
  badgeLabel: badgeLabelProp,
  heading: headingProp,
  description: descriptionProp,
  contactLabel: contactLabelProp,
  demoLabel: demoLabelProp,
  data,
  locale
}: ContactRegionsSectionProps) {
  // Extract data from data prop if provided, otherwise use direct props
  const cards = data?.regions ?? cardsProp ?? [];
  const contactHref = data?.primaryCta?.href ?? contactHrefProp ?? "#";
  const demoHref = data?.secondaryCta?.href ?? demoHrefProp ?? "#";
  const badgeLabel = data?.badgeLabel ?? badgeLabelProp;
  const heading = data?.heading ?? headingProp;
  const description = data?.description ?? descriptionProp;
  const contactLabel = data?.primaryCta?.label ?? contactLabelProp;
  const demoLabel = data?.secondaryCta?.label ?? demoLabelProp;
  const badge = badgeLabel ?? "Global field offices";
  const title = heading ?? "Wherever you operate, our regional teams are close by";
  const summary =
    description ??
    "Cloud MLM Software supports customers in more than 45 countries. Choose the region closest to you and we'll connect you with an implementation partner or in-house expert.";

  return (
    <section className="relative isolate overflow-hidden bg-background py-24">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-muted/30 to-background dark:via-muted/10" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[500px] bg-gradient-to-t from-primary/5 via-transparent to-transparent blur-3xl" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container space-y-14">
        <SectionTitle
          badge={badge}
          heading={title}
          description={summary}
          centered
          maxWidth="3xl"
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cards && cards.length > 0 ? cards.slice(0, 3).map((card) => (
            <ContactRegionCard
              key={card.region}
              region={card.region}
              subheading={card.subheading}
              address={card.address}
              phones={card.phones}
              email={card.email}
              whatsapp={card.whatsapp}
              flag={card.flag}
            />
          )) : null}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ReadMoreButton
            href={contactHref}
            variant="highlighted"
            className="rounded-full bg-primary px-6 py-3 text-primary-foreground shadow transition hover:bg-primary/90 [&_.read-more-icon]:bg-primary-foreground/20 [&_.read-more-icon]:text-primary-foreground"
          >
            {contactLabel ?? "Contact our team"}
          </ReadMoreButton>
          <ReadMoreButton
            href={demoHref}
            variant="default"
            className="rounded-full border border-primary/40 px-6 py-3 transition hover:border-primary"
          >
            {demoLabel ?? "Book an MLM software demo"}
          </ReadMoreButton>
        </div>
      </div>
    </section>
  );
}

